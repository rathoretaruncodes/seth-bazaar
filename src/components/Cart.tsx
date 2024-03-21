import { ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { formatPrice } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Link from "next/link";



export default function Cart() {

    const itemCount = 1
    const fee = 5680


    return(
        <Sheet>
            <SheetTrigger className='group -m-2 flex items-center p-2'>
                <ShoppingCart className='n-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-400' 
                aria-hidden='true'
                />
                <span className='ml-2 text-sm font-medium text-gray-700 goup-hover:text-gray-800'>1</span>
            </SheetTrigger>
            <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
                <SheetHeader className='space-y-2.5 pr-6'>
                    <SheetTitle>Cart(1)</SheetTitle>
                </SheetHeader>
                {itemCount > 0 ? (
                    <>
                    <div className='flex w-full flex-col pr-6'>
                        {/* TODO: cart logic */}
                        Cart Items
                    </div>
                    <div className='space-y-4 pr-6'>
                        <Separator />
                        <div className='space-y-1.5 text-sm'>
                            <div className='flex'>
                                <span className='flex-1'>Shipping</span>
                                <span className=''>Free</span>
                            </div>
                            <div className='flex'>
                                <span className='flex-1'>Transaction Fee</span>
                                <span>{formatPrice(fee)}</span>
                            </div>
                            <div className='flex'>
                                <span className='flex-1'>Total</span>
                                <span>{formatPrice(fee)}</span>
                            </div>
                        </div>

                        <SheetFooter>
                            {/*asChild lets us provide our own element instead of a button*/}
                            <SheetTrigger asChild>
                                <Link href='/cart' className={buttonVariants({
                                    className:'w-full',
                                })}> Continue to Checkout</Link>
                            </SheetTrigger>
                        </SheetFooter>
                    </div>
                    </>
                ) : (
                    <div className='flex h-full flex-col items-center justify-center space-y-1'>
                        <div className='relative mb-4 h-60 w-60 text-muted-foreground'>
                            <div className='flex justify-center text-xl'>Your cart is empty</div>
                        </div>
                        <SheetTrigger asChild>
                            <Link href='/products' className={buttonVariants({
                                variant: 'link',
                                size: 'sm',
                                className: 'text-sm text-muted-foreground',
                            })}>
                                Add items to your cart
                            </Link>
                        </SheetTrigger>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}