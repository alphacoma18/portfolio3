"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import {
  FaBlog,
  FaChalkboardTeacher,
  FaHome,
  FaImages,
  FaRocket,
} from "react-icons/fa";
import { GoCopilot } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
// import { socials } from "./Socials";
interface NavLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "/",
    icon: <FaHome className="h-6 w-6" />,
  },
  {
    name: "About",
    href: "/about",
    icon: <CgProfile className="h-6 w-6" />,
  },
  {
    name: "Projects",
    href: "/Projects",
    icon: <FaRocket className="h-6 w-6" />,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: <FaBlog className="h-6 w-6" />,
  },
  {
    name: "Gallery",
    href: "/gallery",
    icon: <FaImages className="h-6 w-6" />,
  },
  {
    name: "Engagement",
    href: "/engagement",
    icon: <FaChalkboardTeacher className="h-6 w-6" />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <TbWorld className="h-6 w-6" />,
  },
];

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="sticky hidden left-0 top-0 sm:flex flex-col w-64 bg-white shadow-lg h-screen">
        <div className="p-4 border-b flex gap-2">
          <MountainIcon className="h-6 w-6" />
          <span className="text-black text-xl font-semibold">Alpha Romer</span>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center space-x-4 text-black hover:bg-gray-100 px-4 py-2 rounded transition-colors duration-200"
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </nav>
      <header className="sticky block sm:hidden top-0 left-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4 md:gap-2">
            <div className="flex items-center gap-2 md:gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="md:hidden" size="icon" variant="outline">
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="flex flex-col justify-between h-full">
                    <div className="grid gap-4 p-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-sm font-medium hover:underline flex gap-4 items-center"
                        >
                          {link.icon}
                          {link.name}
                        </Link>
                      ))}
                    </div>
                    {/* <div className="flex gap-4 p-4 flex-col">
                    {socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 flex gap-4"
                      >
                        {social.icon}
                        {social.name}
                      </a>
                    ))}
                  </div> */}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <Link className="flex items-center gap-2" href="#">
            <MountainIcon className="h-6 w-6" />
          </Link>
          <Link className="flex items-center gap-2" href="#">
            <GoCopilot className="h-6 w-6" />
          </Link>
        </div>
      </header>
    </>

  );
};

export default NavBar;

function MenuIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export function MountainIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
