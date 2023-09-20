"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}`,
      Label: "Overview",
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/billboards`,
      Label: "Billboards",
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      href: `/${params.storeId}/categories`,
      Label: "Categories",
      active: pathname === `/${params.storeId}/categories`,
    },
    {
      href: `/${params.storeId}/settings`,
      Label: "Settings",
      active: pathname === `/${params.storeId}/settings`,
    },
  ];

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
              className={cn("text-sm font-medium transition-colors hover:text-primary",
              route.active ? "text-black dark:text-white" : "text-muted-foreground")}
        >
          {route.Label}
        </Link>
      ))}
    </nav>
  );
}
