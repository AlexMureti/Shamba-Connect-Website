import { ShopHero } from "@/Shamba-Connect-Website/components/shop/shop-hero"
import { ProductCategories } from "@/Shamba-Connect-Website/components/shop/product-categories"
import { ProductGrid } from "@/Shamba-Connect-Website/components/shop/product-grid"
import { ShoppingCart } from "@/Shamba-Connect-Website/components/shop/shopping-cart"

export const metadata = {
  title: "Shop - Shamba Connect",
  description: "Quality organic seedlings, garden kits, farming supplies, and rabbit farming equipment.",
}

export default function ShopPage() {
  return (
    <>
      <ShopHero />
      <ProductCategories />
      <ProductGrid />
      <ShoppingCart />
    </>
  )
}
