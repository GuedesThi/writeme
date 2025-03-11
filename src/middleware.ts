import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${routing.defaultLocale}`, req.url));
  }

  return createMiddleware(routing)(req);
}

export const config = {
  matcher: ["/", "/(en|pt)/:path*"],
};
