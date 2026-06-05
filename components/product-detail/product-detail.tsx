"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const productImages = [
    "/images/products/dtf-ink-cymk.png",
    "/images/products/dtf-printing-service.png",
    "/images/products/adhesive-powder.png",
    "/images/products/dtf-gang-sheet.svg",
];
const ProductDetail = () => {
    const [activeThumb, setActiveThumb] = useState(0);
    
    return (
        <>
            <section className="container pt-10 md:pt-12 lg:pt-16">
                {/* Breadcrumbs */}
                <Breadcrumb className="mb-6 md:mb-10">
                    <BreadcrumbList className="text-sm">
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="font-medium">
                                Build Your DTF Gang Sheets Online
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Side: Gallery */}
                    <div className="lg:col-span-7 flex flex-col sm:flex-row gap-4">
                        {/* Thumbnails */}
                        <div className="order-2 sm:order-1 sm:w-[100px] shrink-0 flex flex-row sm:flex-col gap-4 overflow-x-auto sm:overflow-visible no-scrollbar">
                            {productImages.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveThumb(index)}
                                    className={cn(
                                        "relative w-20 h-20 sm:w-full sm:h-[100px] rounded-xl overflow-hidden border-2 transition-all shrink-0",
                                        activeThumb === index ? "border-[#C8E100]" : "border-transparent"
                                    )}
                                >
                                    <Image
                                        src={img}
                                        alt={`Thumbnail ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="order-1 sm:order-2 flex-1 rounded-3xl relative overflow-hidden aspect-square sm:aspect-auto sm:h-[500px] lg:h-[600px] flex items-center justify-center bg-gray-100">
                            <Image
                                src={productImages[activeThumb]}
                                alt="Main Product Image"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Side: Info */}
                    <div className="lg:col-span-5 w-full">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4 leading-tight">
                            Build Your DTF Gang Sheets Online
                        </h1>

                        {/* Ratings */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Image key={i} src="/images/icons/star.svg" alt="Star" width={16} height={16} />
                                ))}
                            </div>
                            <span className="text-sm text-gray-600">/ 41 reviews</span>
                        </div>

                        {/* Price */}
                        <div className="text-2xl sm:text-3xl font-bold text-black mb-6">
                            $17.00
                        </div>

                        {/* Shipping text */}
                        <div className="text-sm text-gray-600 mb-8">
                            <span className="underline cursor-pointer decoration-gray-400 underline-offset-4">Shipping</span> calculated at checkout.
                        </div>

                        {/* Size Select */}
                        <div className="mb-6 max-w-xs">
                            <Select>
                                <SelectTrigger className="w-full h-12 rounded-xl text-base border-gray-300">
                                    <SelectValue placeholder="Size" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="small">Small (22" x 12")</SelectItem>
                                    <SelectItem value="medium">Medium (22" x 24")</SelectItem>
                                    <SelectItem value="large">Large (22" x 60")</SelectItem>
                                    <SelectItem value="xlarge">X-Large (22" x 120")</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Buy Button */}
                        <Button size="xxl" className='mb-6'>
                            Build your own Gang Sheet
                        </Button>

                        {/* Accordions */}
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="border-b-0 mb-2">
                                <AccordionTrigger className="text-base font-bold hover:no-underline py-3 px-0 data-[state=open]:text-black text-black [&>svg]:text-black">
                                    DTF Pressing Instructions
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base">
                                    Detailed instructions on how to press your DTF transfers for optimal results and longevity.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="border-b-0 mb-2">
                                <AccordionTrigger className="text-base font-bold hover:no-underline py-3 px-0 data-[state=open]:text-black text-black [&>svg]:text-black">
                                    100% Satisfaction Guarantee
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base">
                                    We stand behind our products. If you're not satisfied, we'll make it right.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="border-b-0 mb-2">
                                <AccordionTrigger className="text-base font-bold hover:no-underline py-3 px-0 data-[state=open]:text-black text-black [&>svg]:text-black">
                                    Reprint & Refund Policy (Important)
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base">
                                    Information regarding our reprint and refund policies.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="border-b-0 mb-2">
                                <AccordionTrigger className="text-base font-bold hover:no-underline py-3 px-0 data-[state=open]:text-black text-black [&>svg]:text-black">
                                    Artwork Upload Recommendations
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base">
                                    Guidelines for uploading your artwork to ensure the best print quality.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5" className="border-b-0">
                                <AccordionTrigger className="text-base font-bold hover:no-underline py-3 px-0 data-[state=open]:text-black text-black [&>svg]:text-black">
                                    Description
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base">
                                    High-quality custom DTF gang sheets. Upload your designs and we print them on a single sheet for you to cut and press.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>


            </section>
        </>
    )
}

export default ProductDetail