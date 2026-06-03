"use client";

import { Avatar, AvatarFallback, AvatarImage, AvatarGroupCount } from "@/components/ui/avatar";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-5.05rem)] w-full overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-linear-to-b from-primary via-[#262e01] to-black"></div>
      <div className="absolute inset-0 bg-no-repeat bg-contain bg-right opacity-5" style={{ backgroundImage: "url('/images/backgrounds/hero-half-frame.svg')" }}></div>

      <div className="container relative z-10 mx-auto flex min-h-[calc(100svh-5.05rem)] flex-1 flex-col lg:flex-row items-center gap-8 px-4 py-12 lg:py-20 lg:px-8">
        {/* Left Content */}
        <div className="flex-1 w-full text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Large-Format Printing<br className="hidden md:block" /> for Every Event
          </h1>

          <p className="text-lg text-white max-w-2xl mb-10 leading-relaxed font-normal">
            From small business advertising to big event displays, Modfirst delivers bold, durable, and vibrant large-format prints that demand attention.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:gap-12 mb-10">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-1">1k+</div>
              <div className="text-sm md:text-base text-white">Daily Customer</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-1">27M+</div>
              <div className="text-sm md:text-base text-white">Printing Media</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-extrabold mb-1">50k+</div>
              <div className="text-sm md:text-base text-white">Projects Done</div>
            </div>
          </div>

          <button type="button" className="bg-primary hover:bg-primary/80 text-black font-semibold text-lg w-54 px-10 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_4px_14px_0_rgba(179,215,36,0.39)]">
            Shop Now
          </button>
        </div>

        {/* Right Content / Images Composition */}
        <div className="flex-1 w-full mt-16 lg:mt-0 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[600px] h-[450px] md:h-[500px]">

            {/* Shirt Image */}
            <div className="absolute left-0 bottom-0 w-[67%] md:w-[60%] h-[80%] rounded-4xl overflow-hidden shadow-2xl z-10">
              <Image
                src="/images/banners-compositions/shirt.png"
                alt="Custom Printed T-Shirt"
                fill
                className="object-cover"
              />
            </div>

            {/* Notebooks Image */}
            <div className="absolute right-0 top-0 w-[55%] md:w-[46%] h-[55%] md:h-[65%] rounded-4xl overflow-hidden shadow-2xl z-20">
              <Image
                src="/images/banners-compositions/book.png"
                alt="Custom Notebooks"
                fill
                className="object-cover"
              />
            </div>

            {/* Stamp Sticker */}
            <div className="absolute top-[15%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 z-30 drop-shadow-2xl">
              <Image
                src="/images/banners-compositions/stamp.svg"
                alt="Feel the vibes stamp"
                fill
                className="object-contain animate-[spin_12s_linear_infinite]"
              />
            </div>

            {/* Satisfied Customer Badge */}
            {/* <div className="absolute bottom-4 right-0 md:-right-8 bg-[#18181b] rounded-2xl p-4 shadow-xl border border-white/5 flex flex-col gap-2 z-30">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-[#18181b] object-cover" src="https://i.pravatar.cc/100?img=11" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-[#18181b] object-cover" src="https://i.pravatar.cc/100?img=32" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-[#18181b] object-cover" src="https://i.pravatar.cc/100?img=44" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-[#18181b] object-cover" src="https://i.pravatar.cc/100?img=60" alt="User" />
              </div>
              <div>
                <div className="text-white font-medium text-sm">Satisfied Customer</div>
                <div className="flex items-center gap-1 text-sm">
                  <div className="flex text-[#fbbf24] text-xs">
                    ★★★★
                  </div>
                  <span className="text-white/60">/ 4.0</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Satisfied Customer Badge */}
        <div className="hidden lg:flex absolute bottom-7 right-0 flex-col gap-3 z-30">
          <div className="flex items-center justify-center px-4">
            <div className="flex flex-row justify-center items-center gap-6">
              <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 ">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/images/avatars/avatar-1.jpg" alt="avatar" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="w-10 h-10">
                  <AvatarImage
                    src="/images/avatars/avatar-2.jpg" alt="avatar"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar className="w-10 h-10">
                  <AvatarImage
                    src="/images/avatars/avatar-3.jpg"
                    alt="avatar"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
                <Avatar className="w-10 h-10">
                  <AvatarImage
                    src="/images/avatars/avatar-4.jpg"
                    alt="avatar"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          <div>
            <div className="text-white font-medium text-center text-lg mb-1">Satisfied Customer</div>
            <div className="flex justify-center items-center gap-1 text-sm w-full">
              <div className="flex gap-1">
                <Image src="/images/icons/star.svg" alt="star" width={15} height={15} />
                <Image src="/images/icons/star.svg" alt="star" width={15} height={15} />
                <Image src="/images/icons/star.svg" alt="star" width={15} height={15} />
                <Image src="/images/icons/star.svg" alt="star" width={15} height={15} />
              </div>
              <span className="text-white/60 text-base">/ 4.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
