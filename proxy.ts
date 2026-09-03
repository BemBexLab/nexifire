import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const AU_COUNTRY_CODE = "AU";
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

/**
 * Next.js 16 runs this proxy before every application route matched below.
 * Australian visitors on the primary .com domain keep their full path and
 * query string while being sent to the Australian site.
 */
export function proxy(request: NextRequest) {
  const isAustralianVisitor = getCountryCode(request) === AU_COUNTRY_CODE;
  const isPrimaryDomain = SOURCE_HOSTS.has(getRequestHostname(request));

  if (isAustralianVisitor && isPrimaryDomain) {
    return createAustralianRedirect(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
