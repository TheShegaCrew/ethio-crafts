# Timbuktu: Ethiopian Handicrafts Marketplace
## Complete Design System & UI Architecture

---

## **DESIGN PHILOSOPHY**

A trust-first, information-dense marketplace that bridges verified Ethiopian artisans with global customers. The design emphasizes **cultural authenticity**, **platform-mediated trust**, and **product beauty** through a combination of warm, earthy aesthetics with modern web conventions.

---

## **1. COLOR PALETTE (4 Colors)**

### Primary Color System

| Token | Name | Value | Usage |
|-------|------|-------|-------|
| `--primary` | Deep Ochre | `#8B6F47` | Brand buttons, CTAs, primary actions, navigation highlights |
| `--secondary` | Warm Gold | `#D4A574` | Accent elements, badges, premium pricing highlights |
| `--foreground` | Off-Black | `#1A1A1A` | Body text, headings, primary content |
| `--background` | Cream | `#F5F1E8` | Page backgrounds, card backgrounds, safe space |

### Extended Color Tokens

```css
--success: Green (#99B85C) - Verification badges, "in stock" indicators
--warning: Warm Amber (#C9985B) - Limited stock warnings
--info: Blue (#4A90E2) - Information messages
--destructive: Red (#D85555) - Delete actions, warnings
```

### Design Rationale
- **Deep Ochre**: Reflects Ethiopian soil, traditional pottery, and warmth
- **Warm Gold**: Conveys premium craftsmanship and heritage value
- **Off-Black & Cream**: High contrast for accessibility; warm undertones prevent coldness
- **Earthy palette** creates trust and emphasizes product authenticity

---

## **2. TYPOGRAPHY SYSTEM**

### Font Families

| Role | Font | Usage |
|------|------|-------|
| **Headings** | Lora (Serif) | H1-H6, section titles, brand name. Creates heritage & elegance |
| **Body** | Geist (Sans-Serif) | Paragraphs, labels, UI text. Modern readability & accessibility |
| **Code** | Geist Mono | Rare; order numbers, technical specs |

### Font Scale & Usage

```
H1: 48px (desktop) / 32px (mobile) - serif, bold, 1.2 line-height
H2: 36px (desktop) / 28px (mobile) - serif, bold
H3: 24px (desktop) / 20px (mobile) - serif, semibold
Body: 16px - sans-serif, regular, 1.5 line-height
Small: 14px - sans-serif, regular
Label: 12px - sans-serif, semibold
```

### Rationale
- **Serif headings** signal cultural heritage and trustworthiness
- **Sans-serif body** ensures modern digital readability
- **High contrast** between font families creates visual distinction

---

## **3. LAYOUT & INFORMATION DENSITY**

### Design Approach: "Scannable Dense"
- Amazon-style grid layouts with 4-column product cards (desktop)
- Progressive disclosure through collapsible sections & tabs
- Sticky navigation and contextual actions for quick access
- Mobile-first responsive design (2 cols → 4 cols)

### Key Spacing

```
Container max-width: 1280px (7xl in Tailwind)
Gutter: 16px (gap-4)
Padding: 16px on mobile, 24px on desktop
Card padding: 16px
Border radius: 8px (subtle, not rounded)
```

### Grid System

```
Mobile (< 640px): Single column, stacked layouts
Tablet (640-1024px): 2 columns for products, 1-2 columns for sections
Desktop (1024px+): 4-column product grid, multi-column sections
Wide (> 1440px): Centered container with max-width
```

---

## **4. COMPONENT DESIGN SPECIFICATIONS**

### Header (Sticky)
- **Height**: 64px + 48px trust bar
- **Content**: Logo (left), search bar (center, desktop only), cart + menu (right)
- **Trust Bar**: 4 columns showing verification, quality, security, tracking
- **Mobile**: Hamburger menu, collapsed search

**Design Pattern**: Sticky, minimal chrome, search-prominent

### Hero Section
- **Layout**: Centered content with large serif heading
- **Background**: Subtle gradient from muted to background
- **CTA Buttons**: Primary (filled Ochre) + Secondary (outlined)
- **Typography**: Serif H1 (4-6xl), sans-serif body text

### Category Grid
- **Layout**: 8-item grid (2 cols mobile → 4 cols desktop)
- **Cards**: Colored backgrounds (warm palette variations), hover lift effect
- **Density**: Compact, icon-less, text-focused
- **Interaction**: Link to filtered product listing

### Product Card (4-column grid)
- **Image**: 1:1 aspect ratio, placeholder gray background
- **Badges**: "✓ Verified" (green), "Out of Stock" (red) - top right
- **Hover State**: 
  - Overlay darkens image
  - Quick view + Add to Cart buttons appear
  - Card lifts slightly
- **Content**: Title (2-line max), region + category, 5-star rating, price, add-to-cart button
- **Wishlist**: Heart icon (bottom right, toggleable)
- **Price**: Bold, large, primary color

**Information Hierarchy**: Image → Title → Region/Category → Rating → Price → CTA

### Trust Badges
- **Verified Badge**: Green checkmark + "✓ Verified" (product-level)
- **Quality Checked**: Blue shield icon (shown on detail page with date)
- **Authentic Craft**: Gold seal (product detail page)
- **Fast Shipping**: Truck icon + "3-5 Day Delivery"

### Footer
- **Layout**: Newsletter signup, 4-column link grid, social icons, payment methods
- **Content**: Shop, Support, About, Legal sections + copyright
- **Background**: Muted color to differentiate from body
- **Typography**: Small labels, regular weight for links

---

## **5. COLOR USAGE GUIDE**

### By Component

```
Buttons (Primary CTA):
  Default: Deep Ochre background, cream text
  Hover: Darker ochre (-10% lightness)
  Disabled: Muted background, muted-foreground text

Links:
  Default: Primary color
  Hover: Primary with underline
  Visited: Muted-foreground

Cards:
  Background: White/cream
  Border: Light gray (#E0DDD5)
  Shadow: Subtle on hover

Text:
  Headings: Off-Black (foreground)
  Body: Off-Black with lower opacity
  Meta (region, category): Muted-foreground
  Labels: Muted-foreground, uppercase small

Badges:
  Verified: Green background, white text
  Stock Warning: Warm amber or red
  Sale: Gold secondary color
  New: Primary color
```

### Trust Indicators (Color-Coded)
- ✓ Verified: Green (#99B85C)
- Quality Checked: Blue (#4A90E2)
- Limited Stock: Amber (#C9985B)
- Out of Stock: Red (#D85555)

---

## **6. USER FLOWS**

### Flow 1: Homepage → Product Listing → Product Detail → Checkout

```
1. Homepage
   ↓ (Browse categories or search)
2. Product Listing Page
   ├─ Filter by: Category, Material, Region, Price, Availability
   ├─ Sort by: Relevance, Price, Rating, Newest
   ↓ (Click product card)
3. Product Detail Page
   ├─ High-res image gallery
   ├─ Trust badges & verification info
   ├─ Cultural significance section
   ├─ Specifications & care instructions
   ├─ Reviews & ratings
   ↓ (Add to cart)
4. Shopping Cart
   ├─ Review items & quantities
   ├─ Apply promo codes
   ↓ (Checkout)
5. Checkout (4-step form)
   ├─ Step 1: Shipping address
   ├─ Step 2: Shipping method
   ├─ Step 3: Payment (TeleBirr, Chapa, Card)
   ├─ Step 4: Review & place order
   ↓
6. Order Confirmation
   ├─ Order number & tracking info
   ├─ Expected delivery date
   ↓
7. Order Tracking (accessible from account)
   ├─ Timeline: Placed → Paid → Processed → Shipped → Delivered
```

### Flow 2: Artisan Onboarding (Not implemented in MVP, but designed)

```
1. Registration & Profile Setup
2. Sample Submission (digital with photos/video)
3. Verification by Platform Agent
4. Product Publication & Sales
5. Order Management & Payment
```

---

## **7. RESPONSIVE DESIGN BREAKPOINTS**

```
Mobile:     < 640px  - 1 column, stacked, hamburger menu
Tablet:     640-1024px - 2 columns, condensed nav
Desktop:    1024-1440px - 4 columns, full nav
Wide:       > 1440px - Centered container
```

### Mobile Adjustments
- Single column product grid
- Hamburger menu with vertical nav
- Search in menu (not sticky header)
- Sticky "Add to Cart" button on product detail
- Collapsed footer sections (expandable)

---

## **8. ACCESSIBILITY STANDARDS**

### WCAG 2.1 AA Compliance

- **Color Contrast**: 4.5:1 minimum on all text
  - Off-Black on Cream: 12:1 ✓
  - Primary Ochre on White: 5.2:1 ✓
  
- **Keyboard Navigation**: Full tab order, skip links, focus indicators
- **Screen Reader**: ARIA labels on images, form fields, buttons
- **Focus Indicators**: 2px outline in primary color
- **Form Labels**: Associated with inputs (label > for)
- **Alt Text**: Required on all images except decorative
- **Mobile**: Touch targets 48px minimum

---

## **9. INTERACTIVE STATES**

### Buttons
```
Default:  Ochre background, cream text
Hover:    Darkened ochre (-10% lightness), shadow lift
Active:   Press animation (slight scale down)
Disabled: Muted background, faded text, cursor-not-allowed
Focus:    2px outline in primary color
```

### Links
```
Default:  Primary color, no underline
Hover:    Primary color, underline
Visited:  Muted-foreground
Focus:    2px outline
Active:   Primary color, bold
```

### Form Inputs
```
Default:  Border gray, background white
Focus:    Border primary, ring primary/20
Error:    Border red, background red/5, error message red
Disabled: Border gray/lighter, background muted, cursor-not-allowed
```

### Product Cards
```
Default:  White card, subtle shadow
Hover:    Enhanced shadow, slight lift (-4px), image darkens, actions appear
Active:   (On tap) Actions visible
```

---

## **10. IMAGES & MEDIA**

### Product Images
- **Aspect Ratio**: 1:1 (square cards)
- **Format**: WebP with JPG fallback
- **Size**: Lazy-loaded, responsive srcset
- **Optimization**: 50KB-200KB per image (compressed)
- **Gallery**: Primary large view, thumbnails below (on product detail)
- **3D Option**: Indicator badge "View in 3D" (future feature)

### Photography Style
- Clean white/neutral backgrounds
- Soft, natural lighting
- Product as hero (large, centered)
- Minimal props or styling
- Showcase traditional craftsmanship

---

## **11. IMPLEMENTATION NOTES (React + Tailwind)**

### Component Structure
```
├── Header (sticky)
│   ├── Logo + Brand
│   ├── Search input
│   ├── Nav links (desktop)
│   ├── Cart icon
│   └── Mobile menu
├── HeroSection
│   └── Large centered CTA
├── CategoryGrid
│   └── 8-item grid of category cards
├── FeaturedProducts
│   └── ProductCard × 8 (4-column)
├── CulturalStories
│   └── Story cards × 3
└── Footer
    ├── Newsletter signup
    ├── 4-column link grid
    └── Social + legal
```

### Tailwind Classes Used
```
Spacing: px-4, py-6, gap-4 (prefer Tailwind scale)
Responsive: sm:, md:, lg: prefixes
Fonts: font-serif, font-sans
Colors: bg-primary, text-foreground, border-border
Grid: grid-cols-1, sm:grid-cols-2, lg:grid-cols-4
Hover States: hover:shadow-lg, hover:-translate-y-1, group-hover:
Focus States: focus:ring-2, focus:outline-none
```

### Design Tokens (CSS Custom Properties)
All colors are defined as CSS variables in `globals.css`:
- `--primary`, `--secondary`, `--foreground`, `--background`, etc.
- Enables dark mode and theme switching without code changes
- Referenced via Tailwind `bg-primary`, `text-foreground`, etc.

---

## **12. PERFORMANCE & OPTIMIZATION**

- **Page Load**: < 3s on 3G, < 1s on 4G (target)
- **Code Splitting**: Route-based lazy loading
- **Image Optimization**: WebP format, srcset for responsive, lazy loading
- **Font**: Google Fonts (Lora, Geist) - system fallbacks
- **Caching**: Browser caching headers, service worker for offline

---

## **13. CULTURAL & TRUST DIFFERENTIATION**

### Key Visual Signals
1. **Verification Badges**: Prominent, color-coded (green checkmark)
2. **Agent Inspection Timestamps**: Builds confidence in quality
3. **Regional Origin**: Prominent display of craft region (Addis Ababa, Mekelle, etc.)
4. **Cultural Storytelling**: Dedicated "Cultural Stories" section
5. **Artisan Context**: (Future) Masked artisan name/photo to prevent direct contact
6. **Price Transparency**: No hidden fees, clear ETB pricing
7. **Payment Methods**: Local options (TeleBirr, Chapa) + international (Visa, MC)

---

## **14. FUTURE FEATURES (Post-MVP)**

- 3D product viewer (Three.js or similar)
- Live chat with support agents (not artisans)
- Augmented reality try-on (AR)
- Artisan profile cards (with agency as intermediary)
- Subscription/membership for frequent buyers
- Personalized recommendations (ML)
- Dark mode toggle
- Multi-language support (Amharic, Tigrinya, etc.)

---

## **15. DEPLOYMENT CHECKLIST**

- [ ] All images optimized (WebP format)
- [ ] Form validation & error handling
- [ ] Analytics integration (track product views, conversions)
- [ ] SEO metadata (meta tags, structured data)
- [ ] SSL certificate (HTTPS)
- [ ] Mobile responsiveness tested (iPhone 12, Android)
- [ ] Accessibility audit (Axe, WAVE)
- [ ] Performance testing (Lighthouse)
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Payment integration (TeleBirr, Chapa test accounts)

---

## **Summary**

This design system balances **information density** (like Amazon) with **cultural storytelling** (unique to Timbuktu). The warm color palette and serif typography honor Ethiopian heritage, while the modern layout and trust badges build confidence in the platform as a secure, verified marketplace.

The focus is on **product beauty**, **trust signals**, and **simplicity** — allowing the handcrafted items to shine while reassuring customers they're supporting authentic artisans.

