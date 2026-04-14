import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COMING_SOON_DOMAIN = "emilyruthweir.com";

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host")?.split(":")[0];

  if (hostname === COMING_SOON_DOMAIN || hostname === `www.${COMING_SOON_DOMAIN}`) {
    return NextResponse.rewrite(new URL("/coming-soon", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
