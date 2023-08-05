import { NextResponse, NextRequest } from "next/server";

import { getToken } from "next-auth/jwt";

import { SIGN_IN_URL, SIGN_UP_URL, HOME_URL, DRAFT_URL } from "@/utils/constants";

const redirectToHomePage = (url: string) => {
   return NextResponse.redirect(new URL(HOME_URL, url));
};

export const middleware = async (request: NextRequest) => {
   const token = await getToken({ req: request });
   const pathname = request.nextUrl.pathname;

   if (token && (pathname === SIGN_UP_URL || pathname === SIGN_IN_URL)) {
      return redirectToHomePage(request.url);
   }

   if (!token && pathname.startsWith(DRAFT_URL)) {
      return redirectToHomePage(request.url);
   }
};

export const config = {
   matcher: ["/sign-in", "/sign-up", "/draft/:path*"],
};
