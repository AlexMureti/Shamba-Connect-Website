import { ShopHero } from "@/components/shop/shop-hero"
import { ProductCategories } from "@/components/shop/product-categories"
import { ProductGrid } from "@/components/shop/product-grid"
import { ShoppingCart } from "@/components/shop/shopping-cart"

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
