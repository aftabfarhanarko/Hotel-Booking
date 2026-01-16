import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-slate-800 border-t border-slate-200">
      <div className=" max-w-10/12 mx-auto px-0  md:px-0 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="text-2xl font-serif font-bold">
              LUXE<span className="text-amber-600">STAY</span>
            </div>
            <p className="text-slate-600 mt-4">
              Refined stays, elevated dining, and restorative wellness in the
              heart of the city.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="https://facebook.com"
                className="bg-white border border-slate-200 hover:border-amber-500 hover:bg-amber-50 rounded-full p-2 text-slate-700"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://instagram.com"
                className="bg-white border border-slate-200 hover:border-amber-500 hover:bg-amber-50 rounded-full p-2 text-slate-700"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://twitter.com"
                className="bg-white border border-slate-200 hover:border-amber-500 hover:bg-amber-50 rounded-full p-2 text-slate-700"
              >
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.35em] uppercase text-amber-600">
              Explore
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/rooms" className="text-slate-600 hover:text-slate-900">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/dining" className="text-slate-600 hover:text-slate-900">
                  Dining
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences"
                  className="text-slate-600 hover:text-slate-900"
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/offers" className="text-slate-600 hover:text-slate-900">
                  Offers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.35em] uppercase text-amber-600">
              Contact
            </h4>
            <div className="mt-4 space-y-3 text-slate-600">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-amber-600" /> +1 (888) 123-4567
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-amber-600" />{" "}
                reservations@luxestay.com
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-amber-600" /> 12 Regent
                Avenue, City Center
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.35em] uppercase text-amber-600">
              Newsletter
            </h4>
            <p className="text-slate-600 mt-4">
              Get exclusive offers and updates.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-md bg-white text-slate-900 placeholder-slate-400 border border-slate-200 px-3 py-2 focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="rounded-r-md bg-amber-600 hover:bg-amber-700 text-white px-5"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-white/80">
        <div className="container mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} LUXESTAY. All rights reserved.
          </div>
          <div className="flex gap-6 text-slate-600 text-sm">
            <Link href="/privacy" className="hover:text-slate-900">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-900">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-slate-900">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
