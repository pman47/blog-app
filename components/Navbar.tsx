"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";

interface NavbarProps {}

const navItems: { title: string; path: string }[] = [
  {
    title: "Works",
    path: "#",
  },
  {
    title: "Blog",
    path: "/blogs",
  },
  {
    title: "Contact",
    path: "#",
  },
];

const Navbar: FC<NavbarProps> = ({}) => {
  const pathname = usePathname();

  return (
    <header className="z-10 sticky top-0 flex h-16 items-center justify-end gap-4 bg-transparent backdrop-blur-sm px-4 md:px-6 md:container">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.path}
            className={cn(
              "text-foreground transition-colors hover:text-muted-foreground",
              {
                "font-bold text-[#FF6464]": item.path === pathname,
              }
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="grid gap-6 text-lg font-medium">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className={cn("text-foreground hover:text-muted-foreground", {
                  "font-bold text-[#FF6464]": item.path === pathname,
                })}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
