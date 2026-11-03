import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const AU_COUNTRY_CODE = "AU";
const RESTRICTED_COUNTRY_CODES = new Set(["US"]);
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

function createRestrictedCountryResponse(): NextResponse {
  return new NextResponse(
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Coming soon to your country | NexiFire</title>
    <style>
      :root {
        color-scheme: light;
        font-family: Arial, Helvetica, sans-serif;
        background: #f6f6f6;
        color: #1f1f1f;
      }

      * { box-sizing: border-box; }

      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 24px;
        background:
          radial-gradient(circle at 15% 10%, rgba(178, 64, 2, 0.12), transparent 30%),
          #f6f6f6;
      }

      main {
        width: min(100%, 680px);
        padding: clamp(32px, 7vw, 72px);
        border: 1px solid rgba(31, 31, 31, 0.12);
        border-radius: 24px;
        background: rgba(255, 255, 255, 0.86);
        box-shadow: 0 24px 80px rgba(31, 31, 31, 0.1);
        text-align: center;
      }

      .mark {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 48px;
        color: #b24002;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.16em;
        text-transform: uppercase;
      }

      .mark::before {
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #b24002;
        box-shadow: 0 0 0 7px rgba(178, 64, 2, 0.12);
      }

      .eyebrow {
        margin: 0 0 16px;
        color: #b24002;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      h1 {
        max-width: 520px;
        margin: 0 auto 20px;
        font-size: clamp(36px, 7vw, 64px);
        line-height: 0.98;
        letter-spacing: -0.05em;
      }

      p {
        max-width: 480px;
        margin: 0 auto;
        color: #5f5f5f;
        font-size: 17px;
        line-height: 1.65;
      }

      .code {
        margin-top: 40px;
        color: #969696;
        font-size: 12px;
        letter-spacing: 0.08em;
      }
    </style>
  </head>
  <body>
    <main>
      <div class="mark">NexiFire</div>
      <p class="eyebrow">A little patience</p>
      <h1>Coming soon to your country.</h1>
      <p>
        NexiFire is currently unavailable in your region. We are working to
        bring our ecosystem to more countries. Please check back soon.
      </p>
      <div class="code">HTTP 403 · REGION RESTRICTED</div>
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

  if (countryCode && RESTRICTED_COUNTRY_CODES.has(countryCode)) {
    return createRestrictedCountryResponse();
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
