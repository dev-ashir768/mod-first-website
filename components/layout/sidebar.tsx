"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData, MenuItem } from '@/lib/menu-data';
import Link from 'next/link';
import Image from 'next/image';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [history, setHistory] = useState<MenuItem[]>([]);

  // Prevent scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const currentItems = history.length > 0
    ? history[history.length - 1].children || []
    : menuData;

  const handleItemClick = (item: MenuItem) => {
    if (item.children) {
      setHistory([...history, item]);
    } else if (item.href) {
      onClose();
    }
  };

  const handleBack = () => {
    setHistory(history.slice(0, -1));
  };

  const getBreadcrumbs = () => {
    if (history.length === 0) return "Our Products";
    return ["Our Products", ...history.map(item => item.label)].join(" / ");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-100 cursor-pointer"
          />

          {/* Sidebar Panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-full bg-[#111] z-101 flex flex-col md:flex-row overflow-y-auto"
          >
            {/* Left Column (Menu) */}
            <div className="shrink-0 w-full md:w-1/2 p-8 md:px-16 lg:px-24 flex flex-col border-b md:border-b-0 md:border-r border-white/10 min-h-[60vh] md:min-h-full relative">
              {/* Header (Back / Close) */}
              <div className="absolute top-8 left-8 md:top-10 md:left-14 lg:top-12 lg:left-22">
                {history.length > 0 ? (
                  <button onClick={handleBack} className="hover:opacity-80 transition-opacity p-2 -ml-2 flex items-center justify-center">
                    <Image src="/images/icons/arrow-left-white.svg" alt="Back" width={20} height={20} />
                  </button>
                ) : (
                  <button onClick={onClose} className="hover:opacity-80 transition-opacity p-2 -ml-2 flex items-center justify-center">
                    <Image src="/images/icons/x.svg" alt="Close" width={20} height={20} />
                  </button>
                )}
              </div>

              {/* Menu Content Aligned */}
              <div className="flex flex-col pt-16 md:pt-32 lg:pt-40 pb-12">
                {/* Breadcrumbs */}
                <div className="text-xs md:text-sm font-semibold text-white/50 mb-8 tracking-wider">
                  {getBreadcrumbs()}
                </div>

                {/* Menu Items */}
                <div className="flex flex-col gap-5 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={history.length}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-4"
                    >
                      {currentItems.map((item) => (
                        <div key={item.id}>
                          {item.href ? (
                            <Link
                              href={item.href}
                              onClick={() => onClose()}
                              className="group flex items-center gap-2 text-2xl lg:text-[28px] font-bold text-white hover:text-[#D3F52E] transition-colors"
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <button
                              onClick={() => handleItemClick(item)}
                              className="group flex items-center gap-2 text-2xl lg:text-[28px] font-bold text-white hover:text-[#D3F52E] transition-colors w-full text-left"
                            >
                              {item.label}
                              {item.children && (
                                <span className="ml-3 shrink-0 flex items-center">
                                  <Image src="/images/icons/arrow-right-green.svg" alt="Arrow Right" width={24} height={24} />
                                </span>
                              )}
                            </button>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Column (Contact) */}
            <div className="shrink-0 w-full md:w-1/2 p-8 md:px-16 lg:px-24 flex flex-col bg-[#111]">
              <div className="flex flex-col pt-4 md:pt-32 lg:pt-40 pb-12">
                <h3 className="text-[13px] font-semibold text-white/50 uppercase tracking-widest mb-8 underline underline-offset-8">
                  Contact Us
                </h3>
                
                <div className="flex flex-col gap-6 text-[15px] font-light text-[#E5E5E5]">
                <a href="tel:02112345678" className="flex items-start gap-4 hover:text-[#D3F52E] transition-colors">
                  <div className="relative w-5 h-5 mt-0.5 shrink-0">
                    <Image src="/images/icons/phone-2.svg" alt="Phone" fill className="object-contain" />
                  </div>
                  <span>(021) 12345678</span>
                </a>

                <a href="mailto:hello@modfirst.com" className="flex items-start gap-4 hover:text-[#D3F52E] transition-colors">
                  <div className="relative w-5 h-5 mt-0.5 shrink-0">
                    <Image src="/images/icons/mail.svg" alt="Mail" fill className="object-contain" />
                  </div>
                  <span>hello@modfirst.com</span>
                </a>

                <div className="flex items-start gap-4 pr-10">
                  <div className="relative w-5 h-5 mt-0.5 shrink-0">
                    <Image src="/images/icons/location.svg" alt="Location" fill className="object-contain" />
                  </div>
                  <span className="leading-relaxed">
                    Suite#4, Airport Commercial Zone, Jinnah International Airport, Karachi, Pakistan
                  </span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-6 mt-12">
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <Image src="/images/icons/facebook.svg" alt="Facebook" width={14} height={14} />
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <Image src="/images/icons/instagram.svg" alt="Instagram" width={18} height={18} />
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <Image src="/images/icons/linkedin.svg" alt="LinkedIn" width={18} height={18} />
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <Image src="/images/icons/twittex-x.svg" alt="X/Twitter" width={18} height={18} />
                </a>
              </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
