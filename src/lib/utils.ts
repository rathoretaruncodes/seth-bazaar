import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: 'USD' | 'EUR' | 'GDP' | 'BDT' | 'INR',
    notation?: Intl.NumberFormatOptions['notation']
  } = {}
) {
  // default currency
  const {currency = "INR", notation = 'compact'} = options

  // check if input is number, if not turn it into a number using parseFloat
  const numericPrice = typeof price === 'string' ? parseFloat(price) : price

  //
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency ,
    notation ,
    maximumFractionDigits: 2,
  }).format(numericPrice)
}
