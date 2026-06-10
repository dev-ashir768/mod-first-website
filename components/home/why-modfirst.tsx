import React from 'react';
import Image from 'next/image';

const features = [
  "Affordable Custom Quality",
  "Reliable and Fast Shipping",
  "Superior Print and Finish",
  "Exceptional Customer Care"
];

export const WhyModfirst = () => {
  return (
    <section className="relative w-full pt-10 md:pt-12 lg:pt-16 overflow-hidden">
      {/* Background Purple Element */}
      <div className="absolute left-[-5%] md:left-0 top-1/2 -translate-y-1/2 -z-10 w-[250px] md:w-[450px] h-[120%] opacity-90 pointer-events-none">
        <Image src="/images/branding/element-1.svg" alt="Background Element" fill className="object-contain object-left" />
      </div>

      <div className="container flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
        
        {/* Left Column: Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight">
            Why Modfirst ?
          </h2>
          <p className="text-[#666] text-base md:text-lg leading-relaxed max-w-lg">
            We deliver premium custom products at prices everyone can afford. From T-shirts, hoodies, banners, yard signs, and business cards to embroidery and transfers, each item is made with care and precision to meet your needs without breaking your budget.
          </p>
          <ul className="flex flex-col gap-3 mt-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-black font-bold text-base md:text-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D3F52E] shrink-0 shadow-sm"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Images Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6">
          {/* Top Wide Image */}
          <div className="col-span-2 relative h-40 md:h-64 rounded-[20px] md:rounded-[24px] overflow-hidden shadow-md">
            <Image src="/images/branding/banner.jpg" alt="Modfirst Building" fill className="object-cover" />
          </div>
          
          {/* Bottom Left Image */}
          <div className="relative h-40 md:h-64 rounded-[20px] md:rounded-[24px] overflow-hidden shadow-md">
            <Image src="/images/branding/rider.png" alt="Delivery Rider" fill className="object-cover" />
          </div>

          {/* Bottom Right Image */}
          <div className="relative h-40 md:h-64 rounded-[20px] md:rounded-[24px] overflow-hidden shadow-md">
            <Image src="/images/branding/coffee-mugs.png" alt="Merchandise" fill className="object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
};
