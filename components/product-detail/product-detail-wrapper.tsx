import { NewsletterSection } from "../home/newsletter-section";
import ProductCarousel from "../product/product-carousel";
import ProductDetail from "./product-detail";

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

const ProductDetailWrapper = () => {
    return (
        <>
            <ProductDetail />
            <ProductCarousel data={products} title="You may also like" description="From small business advertising to big event displays, Modfirst delivers bold." />
            <NewsletterSection />
        </>
    )
}

export default ProductDetailWrapper;