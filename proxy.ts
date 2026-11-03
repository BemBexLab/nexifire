import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const AU_COUNTRY_CODE = "AU";
const US_COUNTRY_CODE = "US";
const AU_TARGET_HOST = "nexifire.com.au";
const SOURCE_HOSTS = new Set(["nexifire.com", "www.nexifire.com"]);

function getCountryCode(request: NextRequest): string | null {
  const countryCode =
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("x-country-code") ??
    request.headers.get("cf-ipcountry");

  return countryCode?.split(",", 1)[0]?.trim().toUpperCase() || null;
}

function getRequestHostname(request: NextRequest): string {
  const host = request.headers.get("host") ?? request.nextUrl.host;

  try {
    return new URL(`http://${host}`).hostname.toLowerCase();
  } catch {
    return request.nextUrl.hostname.toLowerCase();
  }
}

function createAustralianRedirect(request: NextRequest): NextResponse {
  const destination = request.nextUrl.clone();
  destination.protocol = "https:";
  destination.hostname = AU_TARGET_HOST;
  destination.port = "";

  return NextResponse.redirect(destination, 307);
}

function createUnitedStatesBlockedResponse(): NextResponse {
  return new NextResponse(
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Website unavailable</title>
  </head>
  <body style="font-family: system-ui, sans-serif; margin: 0; padding: 3rem; color: #1f1f1f;">
    <main style="max-width: 42rem; margin: 0 auto;">
      <h1>Website unavailable</h1>
      <p>This website is not available in the United States.</p>
    </main>
  </body>
</html>`,
    {
      status: 403,
      headers: {
        "Cache-Control": "private, no-store",
        "Content-Type": "text/html; charset=utf-8",
        Vary: "x-vercel-ip-country, x-country-code, cf-ipcountry",
      },
    },
  );
}

/**
 * Next.js 16 runs this proxy before every request matched below.
 * Australian visitors on the primary .com domain keep their full path and
 * query string while being sent to the Australian site. US visitors are
 * blocked before any page, asset, or API route is served.
 */
export function proxy(request: NextRequest) {
  const countryCode = getCountryCode(request);

  if (countryCode === US_COUNTRY_CODE) {
    return createUnitedStatesBlockedResponse();
  }

  const isAustralianVisitor = countryCode === AU_COUNTRY_CODE;
  const isPrimaryDomain = SOURCE_HOSTS.has(getRequestHostname(request));

  if (isAustralianVisitor && isPrimaryDomain) {
    return createAustralianRedirect(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
