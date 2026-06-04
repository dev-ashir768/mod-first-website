import Image from "next/image"
import Link from "next/link"
import { ModfirstRevealFooter } from "../home/modfirst-reveal-footer"

export function Footer() {
  return (
    <>
      <footer className="bg-black text-white pt-10 md:pt-12 lg:pt-16 pb-6">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 md:pb-12 lg:pb-16">

            {/* Column 1: Brand & Contact */}
            <div className="lg:col-span-5 flex flex-col">
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Your Style, Your Way!</h3>
              <p className="text-white text-sm md:text-base leading-relaxed mb-8 max-w-md">
                Your one-stop shop for premium custom apparel, DTF transfers, UV stickers, banners, and embroidery.
                Fast turnaround, no minimums, and top-quality results designed to make your brand stand out.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Image src="/images/icons/phone-2.svg" alt="Phone" width={24} height={24} />
                  <span className="text-white text-sm md:text-base">(021) 12345678</span>
                </div>
                <div className="flex items-center gap-3">
                  <Image src="/images/icons/mail.svg" alt="Email" width={24} height={24} />
                  <span className="text-white text-sm md:text-base">hello@modfirst.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <Image src="/images/icons/location.svg" alt="Location" width={24} height={24} />
                  <span className="text-white text-sm md:text-base leading-snug max-w-[300px]">
                    Suite#4, Airport Commercial Zone, Jinnah International Airport, Karachi, Pakistan
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2: Shop */}
            <div className="lg:col-span-2 flex flex-col">
              <h4 className="text-2xl font-bold mb-6">Shop</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="#" className="text-white text-sm md:text-base">All Products</Link></li>
                <li><Link href="#" className="text-white text-sm md:text-base">New Arrivals</Link></li>
                <li><Link href="#" className="text-white text-sm md:text-base">Best Seller</Link></li>
              </ul>
            </div>

            {/* Column 3: Our Policy */}
            <div className="lg:col-span-2 flex flex-col">
              <h4 className="text-xl font-bold mb-6">Our Policy</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="#" className="text-white text-sm md:text-base">FAQ</Link></li>
                <li><Link href="#" className="text-white text-sm md:text-base">Privacy Policy</Link></li>
                <li><Link href="#" className="text-white text-sm md:text-base">Refund Policy</Link></li>
                <li><Link href="#" className="text-white text-sm md:text-base">Terms of Service</Link></li>
                <li><Link href="#" className="text-white text-sm md:text-base">Shipping Policy</Link></li>
              </ul>
            </div>

            {/* Column 4: Support */}
            <div className="lg:col-span-3 flex flex-col">
              <h4 className="text-2xl font-bold mb-6">Support</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="#" className="text-white text-sm md:text-base">About Us</Link></li>
                <li><Link href="#" className="text-white text-sm md:text-base">Contact Us</Link></li>
                <li><Link href="#" className="text-white text-sm md:text-base">DTF Pressing Instructions</Link></li>
                <li><Link href="#" className="text-white text-sm md:text-base">DTF Artwork Guidelines</Link></li>
                <li><Link href="#" className="text-white text-sm md:text-base">Our Blogs</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10 gap-6">
            <p className="text-[#A3A3A3] text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Modfirst. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <Link href="#" className="text-primary hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Image src="/images/icons/facebook.svg" alt="Facebook" width={14} height={14} />
              </Link>
              <Link href="#" className="text-primary hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Image src="/images/icons/instagram.svg" alt="Instagram" width={18} height={18} />
              </Link>
              <Link href="#" className="text-primary hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Image src="/images/icons/linkedin.svg" alt="LinkedIn" width={18} height={18} />
              </Link>
              <Link href="#" className="text-primary hover:text-white transition-colors">
                <span className="sr-only">Twitter / X</span>
                <Image src="/images/icons/twittex-x.svg" alt="twitter-x" width={18} height={18} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <ModfirstRevealFooter />
    </>
  )
}
