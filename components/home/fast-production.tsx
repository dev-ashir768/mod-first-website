import Image from 'next/image';

const features = [
  "Quick Production Times",
  "Reliable Shipping",
  "Fast Turnaround on all Orders",
  "Just Heat Press and Ship to your Customers"
];

export const FastProduction = () => {
  return (
    <section className="relative w-full pt-10 md:pt-12 lg:pt-16 overflow-hidden">
      {/* Background Purple Element (Anchored to Right) */}
      <div className="absolute right-[-5%] md:right-0 top-1/2 -translate-y-1/2 -z-10 w-[250px] md:w-[500px] h-[120%] opacity-90 pointer-events-none">
        <Image src="/images/branding/element-2.svg" alt="Background Element" fill className="object-contain object-right" />
      </div>

      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
        
        {/* Left Column: Images Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6">
          {/* Top Wide Image */}
          <div className="col-span-2 relative h-40 md:h-64 rounded-[20px] md:rounded-[24px] overflow-hidden shadow-md">
            <Image src="/images/branding/tiger-laser-print.jpg" alt="Printer printing tiger" fill className="object-cover" />
          </div>
          
          {/* Bottom Left Image */}
          <div className="relative h-40 md:h-64 rounded-[20px] md:rounded-[24px] overflow-hidden shadow-md">
            <Image src="/images/branding/t-shirts.png" alt="Orange stacks" fill className="object-cover" />
          </div>

          {/* Bottom Right Image */}
          <div className="relative h-40 md:h-64 rounded-[20px] md:rounded-[24px] overflow-hidden shadow-md">
            <Image src="/images/branding/girl-with-phone.jpg" alt="Girl on phone" fill className="object-cover" />
          </div>
        </div>

        {/* Right Column: Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-tight">
            Fast Production &<br />Reliable Delivery
          </h2>
          <p className="text-[#666] text-base md:text-lg leading-relaxed max-w-lg">
            Speed matters in the apparel industry and ModFirst understands it. Whether you&apos;re restocking your bestsellers, preparing for a pop-up event, or fulfilling last-minute customer requests, ModFirst delivers your DTF transfers fast and ready to press.
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

      </div>
    </section>
  );
};
