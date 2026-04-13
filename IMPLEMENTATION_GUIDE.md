# Timbuktu: Implementation Guide
## Building the Ethiopian Handicrafts Marketplace

---

## **PROJECT STRUCTURE**

```
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Design tokens & theme
├── components/
│   ├── Header.tsx          # Sticky header with search & nav
│   ├── HeroSection.tsx     # Large hero with CTA
│   ├── CategoryGrid.tsx    # 8-item category browser
│   ├── ProductCard.tsx     # Reusable product card component
│   ├── FeaturedProducts.tsx# Featured products grid (8 items)
│   ├── CulturalStories.tsx # 3-column story cards
│   ├── ProductListing.tsx  # Full PLP with filters
│   ├── Footer.tsx          # Multi-column footer
│   └── ui/                 # shadcn/ui components (auto-generated)
├── DESIGN_SYSTEM.md        # Complete design documentation
├── IMPLEMENTATION_GUIDE.md # This file
└── tailwind.config.ts      # Tailwind configuration with custom colors
```

---

## **KEY COMPONENTS & USAGE**

### 1. **Header Component**
**Purpose**: Sticky navigation with search, cart, and trust bar.

```tsx
<Header />
```

**Features**:
- Logo + brand name (Timbuktu)
- Search bar (desktop hidden on mobile)
- Mobile menu toggle
- Cart icon with badge
- Trust bar showing: Verified Artisans, Quality Checked, Secure Payments, Tracked Orders

**Props**: None (stateless for homepage)

---

### 2. **Hero Section**
**Purpose**: Full-width hero with large serif heading and CTAs.

```tsx
<HeroSection />
```

**Features**:
- Serif H1 heading ("Authentic Ethiopian Handicrafts")
- Descriptive paragraph
- Two CTAs: Primary button (Shop) + Secondary button (Learn More)

---

### 3. **Category Grid**
**Purpose**: Browse products by craft type (8 categories).

```tsx
<CategoryGrid />
```

**Features**:
- 8 category cards in 2x4 grid (mobile) → 4x2 (desktop)
- Colored backgrounds (warm palette)
- Product count per category
- Hover lift animation
- Links to filtered product listing

**Categories**:
- Pottery, Weaving, Leatherwork, Metalwork
- Basketry, Jewelry, Wood Carving, Textiles

---

### 4. **Product Card**
**Purpose**: Reusable card for displaying individual products.

```tsx
<ProductCard
  id="1"
  title="Hand-Woven Basket"
  price={2500}
  image="/images/basket.jpg"
  category="Basketry"
  region="Addis Ababa"
  rating={4.8}
  reviews={24}
  verified={true}
  inStock={true}
/>
```

**Props**:
- `id`: Product identifier
- `title`: Product name (2-line max, ellipsis)
- `price`: Price in ETB
- `image`: Product image URL
- `category`: Craft category
- `region`: Origin region
- `rating`: 1-5 star rating
- `reviews`: Number of reviews
- `verified`: Verification badge visibility
- `inStock`: Controls "Out of Stock" state

**Features**:
- Image with hover overlay (darkens, shows actions)
- Quick View + Add to Cart hover buttons
- Wishlist heart icon (toggleable)
- Verified badge (green, top-right)
- Out of Stock badge (red, top-right)
- Rating + review count
- Price in bold, large
- Add to Cart button (full width)

---

### 5. **Featured Products**
**Purpose**: Display 8 featured products in 4-column grid.

```tsx
<FeaturedProducts />
```

**Features**:
- Auto-generates 8 ProductCard instances
- Responsive: 1 col (mobile) → 2 cols (tablet) → 4 cols (desktop)
- Section title + subtitle
- Each card shows verification, images, pricing, and CTAs

---

### 6. **Cultural Stories**
**Purpose**: Editorial content highlighting craft heritage.

```tsx
<CulturalStories />
```

**Features**:
- 3-column card layout
- Image placeholder
- Story title (serif font)
- Excerpt text
- Region label (uppercase)
- "Read Story" CTA button

**Stories Included**:
1. The Art of Ethiopian Weaving
2. Basketry: Fibers of Heritage
3. Leather Craftsmanship

---

### 7. **Product Listing**
**Purpose**: Full product browsing with filters and sort.

```tsx
<ProductListing />
```

**Features**:
- **Left Sidebar**:
  - Sort dropdown (Relevance, Price, Newest, Rating)
  - Category filter (multi-select)
  - Region filter (multi-select)
  - Price range slider
  - Material filter
  - Clear All button

- **Main Grid**:
  - Active filter chips (removable)
  - 24-product grid (responsive)
  - Load More button

**Information Density**: Compact checkboxes, counts, no icons, dense typography.

---

### 8. **Footer**
**Purpose**: Site-wide navigation and social links.

```tsx
<Footer />
```

**Features**:
- Newsletter signup section
- 4-column link grid (Shop, Support, About, Legal)
- Social media icons (Instagram, Facebook, Telegram)
- Payment method badges (TeleBirr, Chapa, Cards)
- Copyright notice

---

## **DESIGN TOKENS & COLORS**

### CSS Custom Properties (globals.css)

```css
/* Primary Colors */
--primary: #8B6F47 (Deep Ochre)
--secondary: #D4A574 (Warm Gold)
--foreground: #1A1A1A (Off-Black)
--background: #F5F1E8 (Cream)

/* Supporting Colors */
--success: #99B85C (Green - Verified)
--warning: #C9985B (Amber - Limited Stock)
--info: #4A90E2 (Blue - Information)
--destructive: #D85555 (Red - Delete/Warning)

/* Neutral Tokens */
--muted: Light gray
--muted-foreground: Medium gray
--border: Very light gray
--input: Input field gray
--ring: Focus ring color (primary)

/* Sidebar (Dashboard) */
--sidebar: Background for sidebars
--sidebar-foreground: Text in sidebars
--sidebar-primary: Primary color in sidebars
```

### Using Colors in Components

```tsx
// Button with primary color
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Shop Now
</Button>

// Card background
<Card className="bg-card border-border">
  {/* content */}
</Card>

// Text hierarchy
<h1 className="text-foreground">Heading</h1>
<p className="text-muted-foreground">Meta text</p>
```

---

## **RESPONSIVE DESIGN GUIDELINES**

### Tailwind Breakpoints

```
Mobile (default): < 640px
Tablet (sm:): 640px+
Desktop (md:): 768px+
Large (lg:): 1024px+
Wide (xl:): 1280px+
Extra Wide (2xl:): 1536px+
```

### Grid Layouts by Screen

```tsx
// Mobile: 1 column
<div className="grid grid-cols-1">

// Tablet & up: 2 columns
<div className="grid grid-cols-1 sm:grid-cols-2">

// Desktop: 4 columns
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

// Wide screens: centered container
<div className="max-w-7xl mx-auto">
```

### Spacing Scale

```
p-2 = 8px
p-3 = 12px
p-4 = 16px
p-6 = 24px
gap-4 = 16px gutters
```

---

## **COMPONENT CUSTOMIZATION**

### Changing Product Data

**Currently**: Mock data in `FeaturedProducts.tsx`

**To integrate with API**:

```tsx
// Fetch from backend
const [products, setProducts] = useState([])

useEffect(() => {
  fetch('/api/products')
    .then(res => res.json())
    .then(data => setProducts(data))
}, [])

// Map to ProductCard
{products.map(product => (
  <ProductCard key={product.id} {...product} />
))}
```

### Customizing Colors

1. Edit `/vercel/share/v0-project/app/globals.css`
2. Change CSS custom property values
3. All components automatically update via Tailwind classes

Example:
```css
--primary: #A0522D; /* Change to brick red */
--secondary: #CD853F; /* Change to darker gold */
```

### Adding New Categories

Edit `CategoryGrid.tsx`:

```tsx
const categories = [
  { name: 'New Category', count: 50, color: 'bg-red-100' },
  // ... existing categories
]
```

---

## **NEXT STEPS: BUILDING THE FULL APP**

### Phase 2: Product Pages

1. **Product Detail Page** (`app/products/[id]/page.tsx`)
   - High-res image gallery
   - Trust badges & verification timeline
   - Full descriptions
   - Specifications table
   - Reviews section
   - Related products

2. **Shopping Cart** (`app/cart/page.tsx`)
   - Cart item list
   - Quantity controls
   - Order summary (sticky)
   - Promo code input
   - Checkout button

### Phase 3: Checkout

1. **Checkout Flow** (Multi-step form)
   - Step 1: Shipping address
   - Step 2: Shipping method
   - Step 3: Payment (TeleBirr, Chapa, Card)
   - Step 4: Review & confirm

2. **Order Confirmation** (`app/orders/[id]/page.tsx`)
   - Order number & date
   - Items breakdown
   - Tracking info
   - Expected delivery

### Phase 4: Account & Auth

1. **Authentication**
   - Sign up / Login
   - Password reset

2. **User Dashboard**
   - Order history
   - Wishlist
   - Account settings
   - Address book

### Phase 5: Backend Integration

1. **API Routes** (`app/api/`)
   - `/products` - List/filter products
   - `/products/[id]` - Get product details
   - `/cart` - Cart operations
   - `/orders` - Order creation
   - `/auth` - User authentication

2. **Database**
   - Products table
   - Users table
   - Orders table
   - Reviews table
   - Wishlist table

---

## **STYLING BEST PRACTICES**

### Do's ✅
```tsx
// Use Tailwind spacing scale
<div className="p-4 gap-4">

// Use semantic design tokens
<Button className="bg-primary text-primary-foreground">

// Use responsive prefixes
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

// Use group-hover for child interactions
<div className="group hover:shadow-lg">
  <button className="group-hover:opacity-100">
```

### Don'ts ❌
```tsx
// Don't use arbitrary values
<div className="p-[14px]">  ❌ Use p-3 instead

// Don't use direct colors
<button className="bg-white">  ❌ Use bg-card instead

// Don't mix margin + gap
<div className="m-4 gap-4">  ❌ Use gap or p-4, not both
```

---

## **PERFORMANCE OPTIMIZATION**

### Image Optimization
```tsx
// Use NextImage
import Image from 'next/image'

<Image
  src="/images/product.jpg"
  alt="Product name"
  width={400}
  height={400}
  priority={false}
  loading="lazy"
/>
```

### Code Splitting
```tsx
// Lazy load heavy components
const ProductListing = dynamic(() => import('@/components/ProductListing'), {
  loading: () => <Skeleton />,
})
```

### Caching
```tsx
// Cache API responses
const response = await fetch('/api/products', {
  next: { revalidate: 3600 } // 1 hour cache
})
```

---

## **ACCESSIBILITY CHECKLIST**

- [ ] Color contrast ≥ 4.5:1 (verified in design system)
- [ ] All images have alt text
- [ ] Form fields have associated labels
- [ ] Keyboard navigation works (tab order)
- [ ] Focus indicators visible
- [ ] ARIA labels on dynamic content
- [ ] Touch targets ≥ 48px
- [ ] Screen reader tested
- [ ] No auto-playing media
- [ ] Error messages clear and helpful

---

## **DEPLOYMENT**

### Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Deploy to Vercel
# (Auto-deploys on push)
```

### Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_API_URL=https://api.timbuktu.com
STRIPE_SECRET_KEY=sk_live_...
TELEBIRR_API_KEY=...
CHAPA_API_KEY=...
```

### Build Command

```bash
npm run build
npm run start
```

---

## **TROUBLESHOOTING**

### Colors Not Updating
- Clear browser cache (`Cmd+Shift+R`)
- Restart dev server
- Check `globals.css` for typos

### Fonts Not Loading
- Verify fonts imported in `layout.tsx`
- Check font CSS variables in `tailwind.config.ts`
- Use `font-sans` or `font-serif` classes

### Images Not Showing
- Verify image paths (should start with `/`)
- Add alt text
- Check image dimensions
- Ensure WebP/JPG format

---

## **QUICK REFERENCE**

| Task | File | Action |
|------|------|--------|
| Change colors | `globals.css` | Edit CSS custom properties |
| Add categories | `components/CategoryGrid.tsx` | Update categories array |
| Add products | `components/FeaturedProducts.tsx` | Update products array |
| Change fonts | `app/layout.tsx` | Import different Google Font |
| Add nav links | `components/Header.tsx` | Add to nav menu |
| Update footer | `components/Footer.tsx` | Edit link sections |

---

## **SUPPORT & RESOURCES**

- **Tailwind CSS**: https://tailwindcss.com
- **Next.js**: https://nextjs.org
- **shadcn/ui**: https://ui.shadcn.com
- **React**: https://react.dev

---

**Happy building! 🇪🇹**

Timbuktu is a platform designed to celebrate Ethiopian craftsmanship and provide artisans with a direct path to global customers. Every line of code supports this mission of cultural authenticity and economic empowerment.
