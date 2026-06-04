import React from "react"
import { Button } from "../ui/button"

export function VideoSection() {
  return (
    <section className="container pt-8 md:pt-12 lg:pt-16">
      <div className="relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden bg-zinc-900 aspect-video max-h-[600px] flex items-center justify-center">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* Replace this with your actual video source */}
          <source src="/videos/awarness.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-8 w-full">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
            Watch How Your Custom<br className="hidden md:block" /> Prints Come To Life
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white max-w-[775px] mx-auto mb-8 drop-shadow-md">
            See how we print, pack, and deliver custom products with unmatched precision using ModFirst's signature technology.
          </p>
          <Button variant="default" size="xl">
            Start your Order
          </Button>
        </div>
      </div>
    </section>
  )
}
