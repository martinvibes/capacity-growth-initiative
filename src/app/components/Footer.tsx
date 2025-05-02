import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact-us" className="bg-[#051609] text-[#8A9C8E] py-12">
      <div className="mx-5 md:mx-24 px-">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-x-hidden">
          <div className="flex flex-col">
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="Capacity Growth Initiative Logo"
                width={80}
                height={80}
                className="mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              We&apos;re Here To Help
            </h3>
            <p className="text-sm">
              Have a question, comment? We&apos;re always happy to hear from
              you. Please reach out to us
            </p>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do" className="hover:text-white">
                    What We do
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Contact Info</h3>
              <p className="text-sm mb-2">
                Address: No 3, Opposite Government Secondary School, Zikpak,
                Kafanchan, Kaduna State, Nigeria
              </p>
              <p className="text-sm mb-2">+2347063165695</p>
              <p className="text-sm">Capacitygrowthinitiative@gmail.com</p>

              <div className="flex space-x-4 mt-3">
                <Link
                  href="https://www.instagram.com/capacity_growth_initiative?igsh=aGhvdnBpdW9ncHd5"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <Instagram size={16} />
                </Link>
                <Link
                  href="https://www.youtube.com/@CGi212"
                  aria-label="Youtube"
                  target="_blank"
                >
                  <Youtube size={16} />
                </Link>
                <Link
                  href="https://www.facebook.com/people/Capacity-Growth-Initiative/61560236458677/"
                  aria-label="Facebook"
                  target="_blank"
                >
                  <Facebook size={16} />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <Twitter size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Keep In Touch</h3>
            <p className="text-sm">
              Connect, build your network, make great business.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
