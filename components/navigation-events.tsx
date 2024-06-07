"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url);

    window.gtag("config", "G-6D2RGHJRV0", {
      page_path: url,
    });
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);

  return null;
}
