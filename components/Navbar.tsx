import Link from "next/link";
import { FC } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="z-10 sticky top-0 flex h-16 items-center justify-end gap-4 bg-transparent backdrop-blur-sm px-4 md:px-6 md:container">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="text-foreground transition-colors hover:text-muted-foreground"
        >
          Works
        </Link>
        <Link
          href="/blogs"
          className="text-foreground transition-colors hover:text-muted-foreground"
        >
          Blog
        </Link>
        <Link
          href="#"
          className="text-foreground transition-colors hover:text-muted-foreground"
        >
          Contact
        </Link>
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
            <Link
              href="#"
              className="text-foreground hover:text-muted-foreground"
            >
              Works
            </Link>
            <Link
              href="#"
              className="text-foreground hover:text-muted-foreground"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-foreground hover:text-muted-foreground"
            >
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
