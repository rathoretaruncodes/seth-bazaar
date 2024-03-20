"use client"

import { PRODUCT_CATEGORIES } from "@/config"
import { useEffect, useRef, useState } from "react"
import NavItem from "./NavItem"
import { useOnClickOutside } from "@/hooks/use-on-click-outside"

export default function NavItems() {
    const [activeIndex, setActiveIndex] = useState<null|number>(null)

    //use esc key to make the navbar stuff disappear 
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if(e.key === 'Escape') {
                setActiveIndex(null)
            }
        }
        document.addEventListener('keydown', handler)

        // cleanup function to prevent memory leaks when the above component unmounts
        return () => {
            document.removeEventListener('keydown', handler)
        }
    }, [])

    const isAnyOpen = activeIndex !==null
    // on clicking elswhere, the stuff on navbar doesn't disapper,
    // to overcome that, useRef is used
    const navRef = useRef<HTMLDivElement | null>(null)

    //using a custom hook for that : use-on-click-outside.ts
    useOnClickOutside(navRef, () => setActiveIndex(null))


    return <div className='flex gap-4 h-full' ref={navRef}>
        {PRODUCT_CATEGORIES.map((category, i) => {
            const handleOpen = () => {
                if(activeIndex === i) {
                    setActiveIndex(null)
                } else {
                    setActiveIndex(i)
                }
            }

            const isOpen = i === activeIndex

            return (
                <NavItem 
                category={category}
                handleOpen={handleOpen}
                isOpen={isOpen}
                // Because we're mapping over something: category.value
                key={category.value}
                isAnyOpen={isAnyOpen}
                />
            )
        })}
    </div>
}