import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface ProductCardProps {
    data:{
    img_path: string;
    title: string;
    count: string;
    }
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
    return (
        <Link href="/products" className="flex flex-col items-center group cursor-pointer">
            <div className="w-full bg-[#F4F4F5] h-[350px] rounded-[24px] aspect-square flex items-center justify-center p-8 mb-6">
                <Image
                    src={data.img_path}
                    alt={data.title}
                    width={300}
                    height={300}
                    className="object-contain w-full h-full drop-shadow-sm"
                />
            </div>
            <h3 className="text-[22px] font-bold text-black text-center mb-0.5">{data.title}</h3>
            <p className="text-[#464545] text-center text-lg">{data.count}</p>
        </Link>
    )
}

export default ProductCard