import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";

// ? == NOTE ==
// ? https://next-international.vercel.app/docs/app-setup for more details
const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "fr", "kr"],
  defaultLocale: "kr",
});

// 이 미들웨어가 계속 /kr/을 끼워넣는다. 따라서 페이지는 [locale] 아래에 전부 둬야한다.
export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
