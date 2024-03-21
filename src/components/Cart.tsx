import { ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";



export default function Cart() {

    const itemCount = 1


    return(
        <Sheet>
            <SheetTrigger className='group -m-2 flex items-center p-2'>
                <ShoppingCart className='n-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-400' 
                aria-hidden='true'
                />
                <span className='
                ml-2 text-sm font-medium text-gray-700 goup-hover:text-gray-800'>0</span>
            </SheetTrigger>
            <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
                <SheetHeader className='space-y-2.5 pr-6'>
                    <SheetTitle>Cart(0)</SheetTitle>
                </SheetHeader>
                {itemCount > 0 ? (
                    <>
                    <div className='flex w-full flex-col pr-6'>
                        {/* TODO: cart logic */}
                        cart items
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
                                <span className=''>$1</span>
                            </div>
                        </div>
                    </div>
                    </>
                ) : (
                    <div></div>
                )}
            </SheetContent>
        </Sheet>
    )
}