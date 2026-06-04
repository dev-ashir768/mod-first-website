import Image from "next/image";

export function PromotionalBanners() {
  return (
    <section className="container w-full pt-8 md:pt-12 lg:pt-16 flex flex-col gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="bg-[#F8D5F0] rounded-[24px] p-8 md:p-10 relative overflow-hidden min-h-[340px] flex flex-col justify-center">
          <div className="z-10 relative flex flex-col justify-between flex-1 gap-6">
            <div>
              <p className="text-xl text-black mb-2">Sale up to</p>
              <h2 className="text-5xl font-extrabold text-[#E92B2B] tracking-tight">25% off</h2>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-black mb-2">Festival Collection</h3>
              <p className="text-[#464545] text-lg md:leading-relaxed">
                We print promotional gifts for every budget.
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center pointer-events-none">
            <Image
              src="/images/banners-compositions/booklet.png"
              alt="Festival Collection Booklets"
              width={350}
              height={350}
              className="object-contain w-[200px] sm:w-full lg:w-[250px] xl:w-[300px] 2xl:w-[350px]"
              priority
            />
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-[#F9DAD2] rounded-[24px] p-8 md:p-10 relative overflow-hidden min-h-[340px] flex flex-col justify-center">
          <div className="z-10 relative flex flex-col justify-between flex-1 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-black mb-2">
                Custom Packaging your Customers
              </h2>
              <p className="text-[#464545] text-lg md:leading-relaxed">
                Professionally printed or embroidered
              </p>
            </div>

            <div>
              <p className="text-xl text-black mb-2">Only Price</p>
              <p className="text-4xl md:text-5xl font-bold text-black tracking-tight">Rs. 24,00</p>
            </div>
          </div>
          <div className="absolute right-0 top-20 bottom-0 flex items-center justify-end pointer-events-none">
            <Image
              src="/images/banners-compositions/launch-box.png"
              alt="Custom Packaging Launch Box"
              width={550}
              height={550}
              className="object-contain lg:w-[350px] xl:w-[430px] 2xl:w-[550px]"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="w-full bg-[#F8FFD9] border-[1.5px] border-dashed border-primary rounded-[20px] py-6 px-4 md:px-8 text-center">
        <p className="text-lg md:text-xl font-semibold tracking-wide text-black">
          Over 1.5 million items shipped every month! Modfirst makes them a reality.
        </p>
      </div>
    </section>
  );
}
