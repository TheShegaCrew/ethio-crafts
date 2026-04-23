"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Palette,
  Scissors,
  Brush,
  Hammer,
  Box,
  Gem,
  TreePine,
  Shirt,
} from "lucide-react";

// Online images from Unsplash (free to use)
const categoryImages: Record<string, string> = {
  Pottery:
    "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
  Weaving:
    "https://images.unsplash.com/photo-1605787020600-b9ebd3c710e9?w=600&q=80",
  Leatherwork:
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
  Metalwork:
    "https://images.unsplash.com/photo-1535086182506-8a0f3f5c2e7f?w=600&q=80",
  Basketry:
    "https://images.unsplash.com/photo-1588492069485-d05b974b47de?w=600&q=80",
  Jewelry:
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
  "Wood Carving":
    "https://images.unsplash.com/photo-1535025287458-e3badca98021?w=600&q=80",
  Textiles:
    "https://images.unsplash.com/photo-1617447379604-ea5ecb03192f?w=600&q=80",
};

const categoryIcons: Record<string, React.ReactNode> = {
  Pottery: <Palette className="w-5 h-5" />,
  Weaving: <Scissors className="w-5 h-5" />,
  Leatherwork: <Brush className="w-5 h-5" />,
  Metalwork: <Hammer className="w-5 h-5" />,
  Basketry: <Box className="w-5 h-5" />,
  Jewelry: <Gem className="w-5 h-5" />,
  "Wood Carving": <TreePine className="w-5 h-5" />,
  Textiles: <Shirt className="w-5 h-5" />,
};

// Accent colors (used for accent bar and icon)
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

// Exact hex values for icon styling
const categoryIconColor: Record<string, string> = {
  Pottery: "#f97316",
  Weaving: "#f59e0b",
  Leatherwork: "#ca8a04",
  Metalwork: "#a16207",
  Basketry: "#fb923c",
  Jewelry: "#d97706",
  "Wood Carving": "#ea580c",
  Textiles: "#f59e0b",
};

const categories = [
  { name: "Pottery", count: 284 },
  { name: "Weaving", count: 156 },
  { name: "Leatherwork", count: 93 },
  { name: "Metalwork", count: 67 },
  { name: "Basketry", count: 142 },
  { name: "Jewelry", count: 187 },
  { name: "Wood Carving", count: 76 },
  { name: "Textiles", count: 203 },
];

export function CategoryGrid() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 ">
      {/* Fancy header matching card style */}
      <div className="mb-12">
        <div className="relative rounded-2xl border border-border/60 bg-card p-6 sm:p-8 overflow-hidden">
          {/* Left accent bar */}
          <div className="absolute top-0 left-0 w-2 h-full bg-primary rounded-l-2xl" />
          {/* Right accent bar */}
          <div className="absolute top-0 right-0 w-2 h-full bg-primary rounded-r-2xl" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Browse by Craft
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            Explore the rich tradition of Ethiopian craftsmanship
          </p>
        </div>
      </div>

      {/* Full‑width responsive grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/products?category=${category.name.toLowerCase()}`}
            className="group"
          >
            <Card
              className="relative h-44 sm:h-48 p-5 flex flex-col justify-between border border-border/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,1) 100%), url(${categoryImages[category.name]})`,
              }}
            >
              {/* Accent bar at top */}
              <div
                className={`absolute top-0 left-0 w-full h-1 ${categoryAccent[category.name]} rounded-t-2xl`}
              />

              {/* Icon – uses accent color directly */}
              <div className="relative z-10 flex items-start justify-between">
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/70 backdrop-blur-sm shadow-sm"
                  style={{ color: categoryIconColor[category.name] }}
                >
                  {categoryIcons[category.name]}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground/80 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0 bg-white/80 rounded-full p-0.5" />
              </div>

              {/* Text area – sits on the white gradient */}
              <div className="relative z-10">
                <h3 className="font-semibold text-lg text-foreground">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} products
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center sm:text-left">
        <Link
          href="/categories"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          View all categories
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
