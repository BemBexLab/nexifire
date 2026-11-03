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
        background: #f3f1ed;
        color: #1f1f1f;
      }

      * { box-sizing: border-box; }

      body {
        margin: 0;
        min-height: 100svh;
        display: flex;
        flex-direction: column;
        padding: clamp(24px, 4vw, 56px) clamp(20px, 6vw, 96px);
        background: #f3f1ed;
        border-left: 6px solid #b24002;
      }

      header,
      footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
      }

      header {
        padding-bottom: 24px;
        border-bottom: 1px solid rgba(31, 31, 31, 0.22);
      }

      .mark {
        margin: 0;
        color: #b24002;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: -0.02em;
        text-transform: uppercase;
      }

      .header-note,
      .code {
        color: #6b6965;
        font-size: 11px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      main {
        flex: 1;
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(220px, 28%);
        align-items: center;
        gap: clamp(40px, 9vw, 150px);
        width: 100%;
        max-width: 1480px;
        padding: clamp(72px, 12vh, 160px) 0;
      }

      h1 {
        max-width: 980px;
        margin: 0;
        font-size: clamp(58px, 10vw, 164px);
        font-weight: 700;
        line-height: 0.84;
        letter-spacing: -0.085em;
      }

      h1 span {
        display: block;
        color: #b24002;
      }

      .copy {
        max-width: 320px;
        padding-left: 24px;
        border-left: 1px solid rgba(31, 31, 31, 0.35);
      }

      .eyebrow {
        margin: 0 0 20px;
        color: #b24002;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
      }

      .copy p {
        margin: 0;
        color: #55524e;
        font-size: 17px;
        line-height: 1.55;
      }

      footer {
        padding-top: 24px;
        border-top: 1px solid rgba(31, 31, 31, 0.22);
      }

      .footer-line {
        width: 72px;
        height: 3px;
        background: #b24002;
      }

      @media (max-width: 720px) {
        body { border-left-width: 4px; }

        .header-note { display: none; }

        main {
          display: block;
          padding: 84px 0;
        }

        h1 {
          font-size: clamp(58px, 17vw, 112px);
        }

        .copy {
          margin-top: 64px;
        }
      }
    </style>
  </head>
  <body>
    <header>
      <div class="mark">NexiFire</div>
      <div class="header-note">Global growth ecosystem</div>
    </header>
    <main>
      <h1>Coming <span>soon.</span></h1>
      <div class="copy">
        <p class="eyebrow">Not available in your country</p>
        <p>
          NexiFire is not currently available in your region. We are working
          to bring our ecosystem to more countries. Please check back soon.
        </p>
      </div>
    </main>
    <footer>
      <div class="footer-line" aria-hidden="true"></div>
      <div class="code">HTTP 403 · Region restricted</div>
    </footer>
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
