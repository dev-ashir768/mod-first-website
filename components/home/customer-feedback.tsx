import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const feedbacks = [
  {
    name: "Maryam Nafees",
    rating: 4,
    feedback:
      "This place is the best! Jamie and his team go above and beyond always!! Will never go anywhere else!",
    avatar: "/images/avatars/avatar-5.jpg",
  },
  {
    name: "Sarah Ali",
    rating: 4,
    feedback:
      "I'm never let done always on time for pick up . Always the best quality of your not sure just ask you come out more of a professional",
    avatar: "/images/avatars/avatar-6.jpg",
  },
  {
    name: "Ahmed Ashraf",
    rating: 4,
    feedback:
      "I have order 3-4 gang sheets. It's a challenge for me to get the perfect size since I design the piece myself. I have not been disappointed.",
    avatar: "/images/avatars/avatar-7.jpg",
  },
  {
    name: "John Doe",
    rating: 5,
    feedback:
      "Fantastic experience from start to finish! The quality is top-notch and the customer service is incredibly responsive.",
    avatar: "/images/avatars/avatar-3.jpg",
  },
];

export function CustomerFeedback() {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight">
          Our Customer Feedback
        </h2>

        {/* Ratings */}
        <div className="flex flex-wrap items-center gap-8">
          {/* Google Rating */}
          <div className="flex items-center gap-2">
            <Image src="/images/icons/google.svg" alt="Facebook"
              width={24}
              height={24}
              className="w-7 h-7" />
            <div className="flex flex-col">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Image src="/images/icons/star.svg" alt="Star" width={16} height={16} />
                ))}
              </div>
              <span className="text-xs text-gray-500 mt-1">
                4.2 rating on google
              </span>
            </div>
          </div>

          {/* Facebook Rating */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/icons/facebook-blue.svg"
              alt="Facebook"
              width={24}
              height={24}
              className="w-7 h-7"
            />
            <div className="flex flex-col">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Image src="/images/icons/star.svg" alt="Star" width={16} height={16} />
                ))}
              </div>
              <span className="text-xs text-gray-500 mt-1">
                4.8 rating on facebook
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative"
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {feedbacks.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3"
            >
              <div className="bg-[#F8F9FA] rounded-2xl p-6 md:p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 relative rounded-full overflow-hidden shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight">
                      {item.name}
                    </h4>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Image src="/images/icons/star.svg" alt="Star" width={16} height={16} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {item.feedback}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Navigation Arrows positioned slightly outside the cards */}

        <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 w-10 h-10 bg-white shadow-md">
          <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
            <path d="M0 1.48585L1.48725 -7.62939e-06L9.58796 8.09789C9.71853 8.22765 9.82216 8.38195 9.89288 8.55191C9.96359 8.72187 10 8.90414 10 9.08823C10 9.27231 9.96359 9.45458 9.89288 9.62454C9.82216 9.7945 9.71853 9.9488 9.58796 10.0786L1.48725 18.1807L0.0014019 16.6948L7.60448 9.09033L0 1.48585Z" fill="black" />
          </svg>
        </CarouselPrevious>
        <CarouselNext className="hidden md:flex -right-4 lg:-right-6 w-10 h-10 bg-white shadow-md">
          <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1.48585L1.48725 -7.62939e-06L9.58796 8.09789C9.71853 8.22765 9.82216 8.38195 9.89288 8.55191C9.96359 8.72187 10 8.90414 10 9.08823C10 9.27231 9.96359 9.45458 9.89288 9.62454C9.82216 9.7945 9.71853 9.9488 9.58796 10.0786L1.48725 18.1807L0.0014019 16.6948L7.60448 9.09033L0 1.48585Z" fill="black" />
          </svg>
        </CarouselNext>
      </Carousel>
    </section>
  );
}
