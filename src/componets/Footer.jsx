import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="text-2xl font-serif font-bold">
              LUXE<span className="text-amber-500">STAY</span>
            </div>
            <p className="text-white/70 mt-4">
              Refined stays, elevated dining, and restorative wellness in the heart of the city.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link href="https://facebook.com" className="bg-white/10 hover:bg-white/20 rounded-full p-2">
                <Facebook size={18} />
              </Link>
              <Link href="https://instagram.com" className="bg-white/10 hover:bg-white/20 rounded-full p-2">
                <Instagram size={18} />
              </Link>
              <Link href="https://twitter.com" className="bg-white/10 hover:bg-white/20 rounded-full p-2">
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.35em] uppercase text-amber-500">Explore</h4>
            <ul className="mt-4 space-y-3">
              <li><Link href="/rooms" className="text-white/80 hover:text-white">Rooms & Suites</Link></li>
              <li><Link href="/dining" className="text-white/80 hover:text-white">Dining</Link></li>
              <li><Link href="/experiences" className="text-white/80 hover:text-white">Experiences</Link></li>
              <li><Link href="/offers" className="text-white/80 hover:text-white">Offers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.35em] uppercase text-amber-500">Contact</h4>
            <div className="mt-4 space-y-3 text-white/80">
              <div className="flex items-center gap-2"><Phone size={18} className="text-amber-500" /> +1 (888) 123-4567</div>
              <div className="flex items-center gap-2"><Mail size={18} className="text-amber-500" /> reservations@luxestay.com</div>
              <div className="flex items-start gap-2"><MapPin size={18} className="text-amber-500" /> 12 Regent Avenue, City Center</div>
            </div>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.35em] uppercase text-amber-500">Newsletter</h4>
            <p className="text-white/70 mt-4">Get exclusive offers and updates.</p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-md bg-white/10 text-white placeholder-white/50 border border-white/20 px-3 py-2 focus:outline-none"
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
      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white/60 text-sm">© {new Date().getFullYear()} LUXESTAY. All rights reserved.</div>
          <div className="flex gap-6 text-white/70 text-sm">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
