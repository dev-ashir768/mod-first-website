import Image from "next/image";
import { motion, Variants } from "framer-motion";

const cardContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const imageItem: Variants = {
  hidden: { opacity: 0, scale: 0.8, x: 30 },
  show: { opacity: 1, scale: 1, x: 0, transition: { type: "spring", stiffness: 150, damping: 15 } }
};

const bottomBanner: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2, ease: "easeOut" } }
};

export function PromotionalBanners() {
  return (
    <section className="container w-full pt-10 md:pt-12 lg:pt-16 flex flex-col gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Card */}
        <motion.div 
          variants={cardContainer} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: "-50px" }}
          className="bg-[#F8D5F0] rounded-[24px] p-8 md:p-10 relative overflow-hidden min-h-[340px] flex flex-col justify-center">
          <div className="z-10 relative flex flex-col justify-between flex-1 gap-6">
            <motion.div variants={textItem}>
              <p className="text-xl text-black mb-2">Sale up to</p>
              <h2 className="text-5xl font-extrabold text-[#E92B2B] tracking-tight">25% off</h2>
            </motion.div>

            <motion.div variants={textItem}>
              <h3 className="text-3xl font-bold text-black mb-2">Festival Collection</h3>
              <p className="text-[#464545] text-lg md:leading-relaxed">
                We print promotional gifts for every budget.
              </p>
            </motion.div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center pointer-events-none">
            <motion.div variants={imageItem}>
              <Image
                src="/images/banners-compositions/booklet.png"
                alt="Festival Collection Booklets"
                width={350}
                height={350}
                className="object-contain w-[200px] sm:w-full lg:w-[250px] xl:w-[300px] 2xl:w-[350px]"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div 
          variants={cardContainer} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: "-50px" }}
          className="bg-[#F9DAD2] rounded-[24px] p-8 md:p-10 relative overflow-hidden min-h-[340px] flex flex-col justify-center">
          <div className="z-10 relative flex flex-col justify-between flex-1 gap-6">
            <motion.div variants={textItem}>
              <h2 className="text-3xl font-bold text-black mb-2">
                Custom Packaging your Customers
              </h2>
              <p className="text-[#464545] text-lg md:leading-relaxed">
                Professionally printed or embroidered
              </p>
            </motion.div>

            <motion.div variants={textItem}>
              <p className="text-xl text-black mb-2">Only Price</p>
              <p className="text-4xl md:text-5xl font-bold text-black tracking-tight">Rs. 24,00</p>
            </motion.div>
          </div>
          <div className="absolute right-0 top-20 bottom-0 flex items-center justify-end pointer-events-none">
            <motion.div variants={imageItem}>
              <Image
                src="/images/banners-compositions/launch-box.png"
                alt="Custom Packaging Launch Box"
                width={550}
                height={550}
                className="object-contain lg:w-[350px] xl:w-[430px] 2xl:w-[550px]"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Banner */}
      <motion.div 
        variants={bottomBanner} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-50px" }}
        className="w-full bg-[#F8FFD9] border-[1.5px] border-dashed border-primary rounded-[20px] py-6 px-4 md:px-8 text-center">
        <p className="text-lg md:text-xl font-semibold tracking-wide text-black">
          Over 1.5 million items shipped every month! Modfirst makes them a reality.
        </p>
      </motion.div>
    </section>
  );
}
