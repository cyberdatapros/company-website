import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/admin/:path*",
};

export const middleware = (req: NextRequest) => {
  const basicAuth = req.headers.get("authorization");
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");
    const validUser = process.env.BASIC_AUTH_USER;
    const validPwd = process.env.BASIC_AUTH_PASSWORD;

    if (user === validUser && pwd === validPwd) {
      return NextResponse.next();
    }
  }

  url.pathname = "/api/auth";

  return NextResponse.rewrite(url);
};
