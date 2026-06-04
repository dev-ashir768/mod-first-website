import Image from "next/image"

const steps = [
  {
    img_path: "/images/icons/gallery.svg",
    title: "Choose Your Perfect Product",
    description: "Browse our wide range of custom T-shirts, hoodies, banners, yard signs, business cards, embroidery, and DTF UV DTF transfers. Select the product type, size, and style that matches your vision. Every option is designed to give you creative freedom and professional results."
  },
  {
    img_path: "/images/icons/upload.svg",
    title: "Upload or Create Your Design",
    description: "Browse our wide range of custom T-shirts, hoodies, banners, yard signs, business cards, embroidery, and DTF UV DTF transfers. Select the product type, size, and style that matches your vision. Every option is designed to give you creative freedom and professional results."
  },
  {
    img_path: "/images/icons/cloud.svg",
    title: "Confirm and Place Your Order",
    description: "Browse our wide range of custom T-shirts, hoodies, banners, yard signs, business cards, embroidery, and DTF UV DTF transfers. Select the product type, size, and style that matches your vision. Every option is designed to give you creative freedom and professional results."
  },
  {
    img_path: "/images/icons/package.svg",
    title: "Receive and Enjoy Your Items",
    description: "Browse our wide range of custom T-shirts, hoodies, banners, yard signs, business cards, embroidery, and DTF UV DTF transfers. Select the product type, size, and style that matches your vision. Every option is designed to give you creative freedom and professional results."
  }
]

export function OurOrderProcess() {
  return (
    <section className="relative w-full pt-10 md:pt-12 lg:pt-16  overflow-hidden">
      <div className="bg-black py-10 md:py-12 lg:py-16 ">
        {/* Decorative gradient glow */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary opacity-40 blur-[120px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3" />

        <div className="container relative z-10">
          <div className="mb-6 md:mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">Our Order Process</h2>
            <p className="text-[#E3D9D9] text-lg">From small business advertising to big event displays, Modfirst delivers bold.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#191717] rounded-[20px] p-8 flex flex-col items-start"
                >
                  <div className="mb-8">
                    <div className="relative w-18 h-18">
                      <Image src={step.img_path} alt="User" fill className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-[#E3D9D9] text-base">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
