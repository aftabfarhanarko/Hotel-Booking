import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function proxy(req) {
  const secret = process.env.NEXTAUTH_SECRET ?? "development-nextauth-secret";
  const token = await getToken({ req, secret });

  const pathname = req.nextUrl.pathname;
  const search = req.nextUrl.search || "";
  const segments = pathname.split("/").filter(Boolean);

  const isMyBookingRoute = segments[0] === "my-booking";
  const isOfferDetailsRoute =
    segments[0] === "offers" && segments.length === 2;

  const isProtectedRoute = isMyBookingRoute || isOfferDetailsRoute;
  const isAuthorized = Boolean(token);

  if (!isAuthorized && isProtectedRoute) {
    const callbackUrl = `${pathname}${search}`;
    const loginUrl = new URL(
      `/login?callbackUrl=${encodeURIComponent(callbackUrl)}`,
      req.url
    );
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/offers/:path*", "/my-booking/:path*"],
};

