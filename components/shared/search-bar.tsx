import Image from 'next/image'
import React from 'react'

const SearchBar = () => {
    return (
        <div className="relative w-full flex items-center">
            <div className="absolute left-4 z-10 flex items-center justify-center">
                <Image
                    src="/images/icons/search.svg"
                    alt="Search"
                    width={20}
                    height={20}
                    className="opacity-50"
                />
            </div>
            <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full h-12 pl-12 pr-4 rounded-full border border-black bg-white text-md text-muted-foreground font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
        </div>
    )
}

export default SearchBar