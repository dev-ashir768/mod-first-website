import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { PromotionalBanners } from "@/components/home/promotional-banners";
import { OurOrderProcess } from "@/components/home/our-order-process";
import ProductSection from "../product/product-section";
import { VideoSection } from "@/components/home/video-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { ModfirstRevealFooter } from "@/components/home/modfirst-reveal-footer";

const products = [
    {
        title: "DTF Transfer",
        count: "50 Products",
        img_path: "/images/banners-compositions/booklet.png",
    },
    {
        title: "Reflective DTF Transfer",
        count: "50 Products",
        img_path: "/images/banners-compositions/book.png",
    },
    {
        title: "UV DTF",
        count: "50 Products",
        img_path: "/images/banners-compositions/shirt.png",
    },
    {
        title: "Sublimation",
        count: "50 Products",
        img_path: "/images/banners-compositions/launch-box.png",
    },
    {
        title: "Custom Patches",
        count: "50 Products",
        img_path: "/images/banners-compositions/stamp.svg",
    }
]

const supply_products = [
    {
        title: "DTF Gang Sheets",
        count: "$25.00",
        img_path: "/images/products/dtf-gang-sheet.svg",
    },
    {
        title: "DTF Printing Services",
        count: "$25.00",
        img_path: "/images/products/dtf-printing-service.png",
    },
    {
        title: "DTF Ink (CYMK)",
        count: "$25.00",
        img_path: "/images/products/dtf-ink-cymk.png",
    },
    {
        title: "Adhesive Powder",
        count: "$25.00",
        img_path: "/images/products/adhesive-powder.png",
    }
]

const HomeWrapper = () => {
    return (
            <>
                <Hero />
                <PromotionalBanners />
                <ProductSection data={products} title="Our Products" description="From small business advertising to big event displays, Modfirst delivers bold." />
                <OurOrderProcess />
                <ProductSection data={supply_products} title="DTF Supplies Products" description="From small business advertising to big event displays, Modfirst delivers bold." />
                <VideoSection />
                <NewsletterSection />
            </>
    )
}

export default HomeWrapper