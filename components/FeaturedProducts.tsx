"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Star,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const featuredProducts = [
  {
    id: "1",
    title: "Hand-Woven Habesha Basket",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1588492069485-d05b974b47de?w=600&q=80",
    category: "Basketry",
    region: "Addis Ababa",
    rating: 4.8,
    reviews: 24,
    verified: true,
    inStock: true,
  },
  {
    id: "2",
    title: "Traditional Clay Water Pot",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
    category: "Pottery",
    region: "Hawassa",
    rating: 4.9,
    reviews: 18,
    verified: true,
    inStock: true,
  },
  {
    id: "3",
    title: "Artisanal Leather Journal",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    category: "Leatherwork",
    region: "Dire Dawa",
    rating: 4.7,
    reviews: 31,
    verified: true,
    inStock: true,
  },
  {
    id: "4",
    title: "Hand-Painted Wooden Box",
    price: 950,
    image:
      "https://images.unsplash.com/photo-1535025287458-e3badca98021?w=600&q=80",
    category: "Wood Carving",
    region: "Gondar",
    rating: 4.6,
    reviews: 15,
    verified: true,
    inStock: false,
  },
  {
    id: "5",
    title: "Woven Cotton Shawl",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1617447379604-ea5ecb03192f?w=600&q=80",
    category: "Textiles",
    region: "Mekelle",
    rating: 5.0,
    reviews: 42,
    verified: true,
    inStock: true,
  },
];

const categoryAccent: Record<string, string> = {
  Pottery: "bg-orange-500",
  Weaving: "bg-amber-500",
  Leatherwork: "bg-yellow-600",
  Metalwork: "bg-yellow-700",
  Basketry: "bg-orange-400",
  Jewelry: "bg-amber-600",
  "Wood Carving": "bg-orange-600",
  Textiles: "bg-amber-500",
};

export function FeaturedProducts() {
  const [activeIndex, setActiveIndex] = useState(2); // middle card

  const totalCards = featuredProducts.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalCards);
  };

  const getCardStyle = (index: number) => {
    const offset = index - activeIndex;
    if (Math.abs(offset) > 2) return { display: "none" };

    const translateX = offset * 45; // slightly wider spread for larger cards
    const scale = 1 - Math.abs(offset) * 0.1;
    const zIndex = 10 - Math.abs(offset);
    // Increase visibility: outer cards now 90% opaque instead of 50%
    const opacity = Math.abs(offset) === 2 ? 0.9 : 1;

    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      zIndex,
      opacity,
      transition: "all 0.4s ease-in-out",
    };
  };

  const handleAddToCart = (e: React.MouseEvent, productId: string) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="relative inline-block rounded-2xl border border-border/60 bg-card p-6 sm:p-8 overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary rounded-l-2xl" />
          <div className="absolute top-0 right-0 w-2 h-full bg-primary rounded-r-2xl" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Featured Pieces
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            Handpicked authentic crafts from our verified artisan network
          </p>
        </div>
      </div>

      {/* Carousel container – increased height to accommodate larger cards */}
      <div className="relative flex items-center justify-center overflow-visible py-8">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-20 p-2 rounded-full bg-card border border-border shadow-md hover:bg-muted transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>

        <div className="relative flex items-center justify-center w-full h-[580px] sm:h-[620px] perspective-distant">
          {featuredProducts.map((product, index) => {
            const styles = getCardStyle(index);
            const isActive = index === activeIndex;

            return (
              <div
                key={product.id}
                className="absolute w-[440px] sm:w-[600px]" // increased width
                style={styles}
                onClick={() => setActiveIndex(index)}
              >
                <Link
                  href={`/products/${product.id}`}
                  className="group block"
                  onClick={(e) => {
                    if (!isActive) {
                      e.preventDefault();
                    }
                  }}
                >
                  <article className="relative flex flex-col h-full min-h-[30rem] sm:min-h-[34rem] rounded-2xl border border-border/60 bg-card overflow-hidden transition-all duration-300 hover:shadow-md">
                    {/* Accent bar */}
                    <div
                      className={`absolute top-0 left-0 w-full h-2 ${categoryAccent[product.category] || "bg-primary"} rounded-t-2xl z-10`}
                    />

                    {/* Image – proportionally taller */}
                    <div className="relative h-76 sm:h-100 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm text-muted-foreground hover:text-red-500 hover:bg-white transition-colors"
                        aria-label="Add to wishlist"
                      >
                        <Heart className="w-4 h-4" />
                      </button>

                      {!product.inStock && (
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-foreground/90 text-background text-xs font-medium">
                          Out of stock
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-5">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-8">
                        <span>{product.region}</span>
                        <span>·</span>
                        <span>{product.category}</span>
                      </div>

                      <h3 className="text-sm font-semibold text-foreground leading-snug mb-2 line-clamp-2">
                        {product.title}
                      </h3>

                      <div className="flex items-center gap-1.5 mb-5">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span className="text-xs font-medium text-foreground">
                          {product.rating}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          ({product.reviews})
                        </span>
                        {product.verified && (
                          <span className="ml-auto text-xs text-green-600 font-medium">
                            Verified
                          </span>
                        )}
                      </div>

                      <div className="mt-auto space-y-5">
                        <div className="flex items-end justify-between">
                          <span className="text-base font-bold text-foreground">
                            ETB {product.price.toLocaleString()}
                          </span>
                          {isActive && (
                            <span className="text-xs text-primary font-medium group-hover:underline">
                              View Details →
                            </span>
                          )}
                        </div>

                        <button
                          onClick={(e) => handleAddToCart(e, product.id)}
                          disabled={!product.inStock}
                          className={`w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                            product.inStock
                              ? `${categoryAccent[product.category] || "bg-primary"} text-white hover:opacity-90 active:scale-95`
                              : "bg-muted text-muted-foreground cursor-not-allowed"
                          }`}
                        >
                          <ShoppingCart className="w-3.5 h-3.5" />
                          {product.inStock ? "Add to Cart" : "Out of Stock"}
                        </button>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 z-20 p-2 rounded-full bg-card border border-border shadow-md hover:bg-muted transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>
    </section>
  );
}
