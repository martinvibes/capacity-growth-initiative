"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import logo from "../../../public/logo.png";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
  disabled?: boolean;
}

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const isDonatePage = pathname === "/donate";

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Handle scroll for navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const navItems: NavItem[] = [
    {
      label: "Home",
      disabled: true,
      href: "/",
    },

    {
      label: "About",

      dropdown: [
        { label: "Mission Statement", href: "/about/mission-statement" },
        { label: "Vision Statement", href: "/about/vision-statement" },
        { label: "Objectives", href: "/about/objectives" },
      ],
    },
    {
      label: "Who are we",
      dropdown: [
        { label: "Meet Our Team", href: "/who-are-we/meet-our-team" },
        // { label: "Strategy Plan", href: "/who-are-we/strategy-plan" },
        { label: "Strategic Goals", href: "/who-are-we/strategic-goals" },
        { label: "What We Do", href: "/who-are-we/what-we-do" },
      ],
    },

    {
      disabled: true,
      label: "Project",
      dropdown: [],
    },

    {
      label: "Contact Us",
      disabled: true,
      href: "#contact-us",
    },
  ];

  return (
    <nav
      className={`bg-[#DEEFEC]   relative z-40 transition-all duration-300 ${
        isScrolled ? "py-[15px]" : "py-[15px]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setOpenDropdown(null)}
          >
            <Image
              src={logo}
              alt="Capacity Growth Initiative"
              width={50}
              height={50}
              className="w-[50px] "
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`inline-flex items-center px-1 pt-1 text-[17px] leading-[100%] font-medium cursor-pointer ${
                      pathname === item.href
                        ? "text-[#019B83]"
                        : "text-[#051609] hover:text-[#019B83]"
                    } transition-colors duration-200`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`inline-flex items-center px-1 pt-1 text-lg font-medium cursor-pointer ${
                        item.dropdown?.some(
                          (subItem) => pathname === subItem.href
                        )
                          ? "text-[#019B83]"
                          : "text-[#051609] hover:text-[#019B83]"
                      } transition-colors duration-200`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          openDropdown === item.label
                            ? "transform rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {item.dropdown && openDropdown === item.label && (
                      <div
                        className="absolute z-50 -ml-4 mt-2 w-48 rounded-md shadow-lg bg-[#019B83] overflow-hidden"
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="py-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block px-4 py-3 text-sm ${
                                pathname === subItem.href
                                  ? "bg-[#08b198] text-white"
                                  : "text-white hover:bg-[#08b198]"
                              } transition-colors duration-200`}
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            <Link
              href={isDonatePage ? "/form" : "/donate"}
              className="ml-4 inline-flex w-[111px] h-[43px] justify-center items-center p-[10px] border-[3px] border-[#F9F9F9] text-sm font-bold leading-[100%] rounded-[10px] text-[19px] bg-[#019B83] text-[#F9F9F9] focus:outline-none whitespace-nowrap"
            >
              {isDonatePage ? "Join Us" : "Donate"}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="pt-2 pb-3 space-y-1 px-4">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="border-b border-gray-100 last:border-0"
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`block px-3 py-3 text-base font-medium ${
                      pathname === item.href
                        ? "text-[#019B83] bg-green-50"
                        : "text-gray-700 hover:text-[#019B83] hover:bg-gray-50"
                    } rounded-md`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-gray-700 hover:text-[#019B83] hover:bg-gray-50 rounded-md"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openDropdown === item.label
                            ? "transform rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                    {item.dropdown && openDropdown === item.label && (
                      <div className="pl-4 space-y-1 py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`block px-3 py-2 text-sm ${
                              pathname === subItem.href
                                ? "text-[#019B83] font-medium bg-green-50"
                                : "text-gray-600 hover:text-[#019B83] hover:bg-gray-50"
                            } rounded-md`}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            {/* Mobile menu CTA button */}
            <div className="flex flex-col space-y-2 px-2 pb-3 pt-2">
              <Link
                href={isDonatePage ? "/joinus" : "/donate"}
                className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-700 whitespace-nowrap"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {isDonatePage ? "Join Us" : "Donate"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
