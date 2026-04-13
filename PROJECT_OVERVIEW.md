# Timbuktu: Ethiopian Handicrafts Marketplace
## Complete Project Overview

---

## **EXECUTIVE SUMMARY**

**Timbuktu** is a modern e-commerce platform connecting global customers with verified Ethiopian artisans. The platform acts as a trusted intermediary, ensuring quality through agent verification while showcasing the beauty and authenticity of traditional Ethiopian handicrafts.

**Key Differentiators**:
- ✓ Trust-first design (platform-verified badges, agent inspection timestamps)
- ✓ Cultural storytelling (craft heritage highlighted, not hidden)
- ✓ Information-dense layouts (Amazon-like functionality with Ethiopian authenticity)
- ✓ Regional transparency (craft origin prominently displayed)
- ✓ Local payment methods (TeleBirr, Chapa support)

---

## **DESIGN SYSTEM OVERVIEW**

### Color Palette (4 colors)

| Color | Hex | Role | Meaning |
|-------|-----|------|---------|
| Deep Ochre | #8B6F47 | Primary | Warmth, heritage, trust |
| Warm Gold | #D4A574 | Secondary | Premium, cultural richness |
| Off-Black | #1A1A1A | Text | Contrast, sophistication |
| Cream | #F5F1E8 | Background | Warm simplicity, product focus |

### Typography

- **Headings**: Lora (Serif) — Heritage, elegance, trustworthiness
- **Body**: Geist (Sans-Serif) — Modern, accessible, readable
- **Ratio**: Serif for emotion; sans-serif for clarity

### Design Philosophy

**"Scannable Dense"** — Combines Amazon-style information density with Ethiopian cultural storytelling. Every element serves the core mission: **connecting artisans with customers through verified trust**.

---

## **USER FLOWS**

### Flow 1: Customer Shopping Journey
```
Homepage → Browse Categories → Product Listing → Product Detail → Cart → Checkout
```

**Key Pages**:
1. **Homepage** - Hero, categories, featured products, cultural stories
2. **Product Listing** - Filters (category, region, price, material), sort
3. **Product Detail** - Gallery, trust badges, description, reviews, specs
4. **Shopping Cart** - Review items, apply promo codes
5. **Checkout** - 4-step form (address, shipping, payment, review)
6. **Order Tracking** - Timeline view with delivery status

### Flow 2: Artisan Onboarding (Future)
```
Registration → Profile → Sample Submission → Verification → Publishing → Sales
```

### Flow 3: Agent Verification (Admin)
```
Task Queue → Physical Inspection → Photo Capture → Pricing → Approval → Publishing
```

---

## **COMPONENT ARCHITECTURE**

### Core Components

```
Header (Sticky)
├── Logo + Brand
├── Search bar
├── Navigation menu
├── Cart icon
└── Trust bar

HomePage
├── HeroSection
├── CategoryGrid (8 categories)
├── FeaturedProducts (8 items)
├── CulturalStories (3 editorial cards)
└── Footer

ProductListing
├── Left Sidebar (Filters)
│   ├── Sort dropdown
│   ├── Category filter
│   ├── Region filter
│   ├── Price slider
│   ├── Material filter
│   └── Clear button
└── Main Grid
    ├── Active filter chips
    ├── ProductCard × 24
    └── Load more button

ProductCard (Reusable)
├── Image container
│   ├── Verified badge
│   ├── Out of stock badge
│   └── Hover overlay
├── Content section
│   ├── Title
│   ├── Region + category
│   ├── Rating + reviews
│   ├── Price
│   └── Add to cart button
└── Wishlist button
```

---

## **KEY DESIGN PATTERNS**

### Trust Indicators

| Badge | Color | Meaning |
|-------|-------|---------|
| ✓ Verified | Green | Platform-verified product |
| 🛡 Quality Checked | Blue | Agent physically inspected |
| 🌟 Authentic | Gold | Cultural authenticity guaranteed |
| 🚚 Free Shipping | Dark | 3-5 day delivery included |

### Information Hierarchy

**Product Card**:
1. Image (visual hierarchy #1)
2. Verified badge (trust signal)
3. Title + region (identification)
4. Rating (social proof)
5. Price (decision factor)
6. CTA button (action)

**Product Detail**:
1. Hero image (product showcase)
2. Trust badges (verification timeline)
3. Price + availability (decision factors)
4. Description (storytelling)
5. Specs (practical info)
6. Reviews (social proof)

### Interaction Patterns

| Element | Interaction | Effect |
|---------|-------------|--------|
| Product Card | Hover | Shadow lifts, image darkens, actions appear |
| Category Card | Hover | Lift (-4px), opacity changes |
| Button | Hover | Color deepens, shadow intensifies |
| Filter | Check | Active filters appear as removable chips |
| Link | Hover | Color to primary, underline appears |

---

## **TECHNICAL IMPLEMENTATION**

### Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS 4+ with custom design tokens
- **Components**: shadcn/ui (button, card, input, checkbox, slider)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Lora, Geist)
- **State Management**: React hooks (useState, useEffect) + SWR (for data)

### File Structure

```
app/
├── layout.tsx              # Root layout, fonts, metadata
├── page.tsx                # Homepage
├── globals.css             # Design tokens, theme
└── (pages)/
    ├── products/           # Product listing & detail
    ├── cart/               # Shopping cart
    ├── checkout/           # Checkout flow
    ├── orders/             # Order tracking
    └── account/            # User dashboard

components/
├── Header.tsx              # Navigation header
├── HeroSection.tsx         # Hero banner
├── CategoryGrid.tsx        # Category cards
├── ProductCard.tsx         # Reusable product card
├── FeaturedProducts.tsx    # Featured grid
├── ProductListing.tsx      # PLP with filters
├── CulturalStories.tsx     # Editorial cards
├── Footer.tsx              # Footer
└── ui/                     # shadcn/ui components

DESIGN_SYSTEM.md            # Complete design specs
IMPLEMENTATION_GUIDE.md     # Developer guide
PROJECT_OVERVIEW.md         # This file
```

### Responsive Design

```
Mobile (<640px):     1-column layouts, hamburger menu
Tablet (640-1024px): 2-column products, condensed nav
Desktop (1024px+):   4-column products, full nav
Wide (>1440px):      Centered container (max 1280px)
```

---

## **COLOR USAGE BY COMPONENT**

### Buttons
- **Primary CTA**: Deep Ochre background, cream text, darkens on hover
- **Secondary**: Outline only, primary color border and text
- **Destructive**: Red background for delete/critical actions

### Cards
- **Background**: White/cream
- **Border**: Light gray
- **Hover**: Enhanced shadow, slight lift

### Text
- **Headings**: Off-black (foreground)
- **Body**: Off-black with lower opacity
- **Meta**: Muted gray (secondary text)
- **Labels**: Uppercase, small, muted gray

### Status Badges
- **Verified**: Green (#99B85C)
- **Limited Stock**: Amber (#C9985B)
- **Out of Stock**: Red (#D85555)
- **New**: Primary color (Deep Ochre)

---

## **TYPOGRAPHY SCALE**

```
H1: 48px (desktop) / 32px (mobile) — serif, bold
H2: 36px (desktop) / 28px (mobile) — serif, bold
H3: 24px (desktop) / 20px (mobile) — serif, semibold
Body: 16px — sans-serif, regular, 1.5 line-height
Small: 14px — sans-serif, regular
Label: 12px — sans-serif, semibold, uppercase
```

### Font Pairing
- **Serif (Lora)**: Headings, cultural stories, product titles
- **Sans-Serif (Geist)**: Body, labels, UI text, navigation

---

## **ACCESSIBILITY COMPLIANCE**

✓ **WCAG 2.1 Level AA**

- Color contrast ≥ 4.5:1 (Off-black on Cream: 12:1)
- Keyboard navigation (full tab order, skip links)
- Screen reader compatible (ARIA labels, semantic HTML)
- Focus indicators visible (2px outline in primary color)
- Touch targets ≥ 48px
- Form labels properly associated
- Alt text on all non-decorative images
- No auto-playing media

---

## **FEATURES BREAKDOWN**

### MVP (Currently Implemented)

✓ Homepage with hero, categories, featured products, stories
✓ Product cards with images, pricing, ratings, verification badges
✓ Category browsing (8 craft categories)
✓ Product listing with filters (category, region, price, material)
✓ Responsive design (mobile, tablet, desktop)
✓ Trust signals (verification badges, agent inspection)
✓ Cultural storytelling (stories, regional origin)
✓ Header with search, navigation, cart
✓ Footer with links, newsletter, payment methods

### Phase 2: Core Shopping

- Product detail page (gallery, full description, specs, reviews)
- Shopping cart (manage items, quantities, promo codes)
- Wishlist (save products for later)
- Product reviews and ratings system

### Phase 3: Checkout & Payments

- Multi-step checkout form
- Payment methods (TeleBirr, Chapa, Visa, Mastercard)
- Order confirmation and tracking
- Email notifications

### Phase 4: User Accounts

- Sign up / Login (email + password)
- Password reset
- Profile management
- Order history
- Address book
- Saved payment methods

### Phase 5: Admin & Analytics

- Admin dashboard (orders, revenue, customer stats)
- Artisan management system
- Verification queue
- Agent assignment & tracking
- Analytics and reporting

---

## **PERFORMANCE TARGETS**

- **Page Load**: < 3s on 3G, < 1s on 4G
- **Time to Interactive**: < 5s
- **Lighthouse Score**: ≥ 90 (mobile & desktop)
- **Image Optimization**: WebP format, responsive srcset
- **Code Splitting**: Route-based lazy loading
- **Caching**: Browser caching + service worker

---

## **MONETIZATION & BUSINESS MODEL**

**Commission-Based Marketplace**:
- Platform takes X% commission per order
- Artisans retain (100-X)% of sale price
- Customer pays full price in ETB

**Future Opportunities**:
- Premium artisan listings
- Marketing boost ads
- Subscription membership (faster shipping, discounts)
- Insurance/protection plans
- Artisan training & certification

---

## **MARKET POSITIONING**

### Competitors
- **Etsy**: Global audience, high fees, less curated
- **Local marketplaces**: Limited reach, no verification
- **Direct artisan sales**: No trust/quality assurance

### Timbuktu Advantage
✓ **Trust**: Platform verification + agent inspection
✓ **Authenticity**: Cultural storytelling, regional transparency
✓ **Convenience**: Global shipping, secure payments
✓ **Fairness**: Transparent pricing, artisan support
✓ **UX**: Information-dense, mobile-optimized
✓ **Local**: Support for Ethiopian payment methods

---

## **IMPLEMENTATION PHASES & TIMELINE**

### Phase 1: MVP (Weeks 1-4)
- [ ] Homepage + component library ✅ COMPLETE
- [ ] Product listing with filters
- [ ] Product detail page
- [ ] Basic styling & responsive design

### Phase 2: Commerce (Weeks 5-8)
- [ ] Shopping cart
- [ ] Wishlist functionality
- [ ] Checkout form (multi-step)
- [ ] Order confirmation

### Phase 3: Payments (Weeks 9-12)
- [ ] TeleBirr integration
- [ ] Chapa integration
- [ ] Stripe integration (for international cards)
- [ ] Payment processing & confirmation

### Phase 4: User System (Weeks 13-16)
- [ ] Authentication (signup, login, password reset)
- [ ] User profiles & account management
- [ ] Order history & tracking
- [ ] Email notifications

### Phase 5: Admin & Analytics (Weeks 17-20)
- [ ] Admin dashboard
- [ ] Artisan management
- [ ] Verification queue
- [ ] Analytics & reporting

### Phase 6: Launch & Ops (Weeks 21-24)
- [ ] Performance optimization
- [ ] Security audit
- [ ] Load testing
- [ ] Soft launch (beta)
- [ ] Full public launch

---

## **GETTING STARTED**

### Prerequisites
- Node.js 18+ and npm/pnpm
- Git
- Code editor (VS Code recommended)

### Installation

```bash
# Clone repository
git clone <repo>
cd timbuktu

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open browser
open http://localhost:3000
```

### Customization

1. **Colors**: Edit `app/globals.css` (CSS custom properties)
2. **Typography**: Change fonts in `app/layout.tsx`
3. **Products**: Update mock data in component files
4. **Images**: Replace placeholder images in `public/`

---

## **DEPLOYMENT**

### Recommended: Vercel

```bash
# Push to GitHub
git push origin main

# Deploy to Vercel (auto-deploys on push)
# or manually: vercel deploy
```

### Environment Setup

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=https://api.timbuktu.com
STRIPE_SECRET_KEY=sk_live_...
TELEBIRR_API_KEY=...
CHAPA_API_KEY=...
DATABASE_URL=...
```

---

## **SUCCESS METRICS**

### Customer Metrics
- Session duration > 2 minutes
- Add-to-cart rate > 10%
- Conversion rate > 2%
- Return visitor rate > 30%
- Product page CTR > 25%

### Business Metrics
- Monthly active users (MAU)
- Average order value (AOV)
- Customer lifetime value (LTV)
- Churn rate < 5%
- Revenue growth (MoM)

### Artisan Metrics
- Active artisans
- Products published per artisan
- Order fulfillment rate > 95%
- Artisan retention rate > 80%

---

## **APPENDIX: KEY DECISIONS**

### Why Serif + Sans-Serif?
- **Serif** (Lora) signals heritage, trust, cultural authenticity
- **Sans-serif** (Geist) ensures modern digital readability
- Contrast between fonts creates visual interest without clutter

### Why Deep Ochre?
- Reflects Ethiopian soil, pottery, and traditional craftsmanship
- Warm and welcoming (not cold corporate)
- Good contrast with cream background
- Stands out from competitors (blues, blacks)

### Why Information-Dense?
- Customers need quick product discovery
- High product volume requires efficient scanning
- Filters enable fast narrowing (Amazon model)
- Dense layout feels curated, not empty/luxury

### Why Trust-First?
- Customers can't meet artisans in person
- Quality assurance is critical concern
- Platform credibility is main selling point
- Verification badges build confidence at scale

---

## **CONCLUSION**

Timbuktu is more than an e-commerce platform—it's a **cultural bridge** connecting global customers with authentic Ethiopian artisans. Every design decision reflects this mission:

- **Colors**: Warm, earthy, authentic
- **Typography**: Heritage meets modernity
- **Layout**: Information-dense but not overwhelming
- **Trust**: Transparent, verified, credible
- **Stories**: Cultural pride, not exploitation

The result is a marketplace that's beautiful to browse, trustworthy to buy from, and fair to artisans.

---

**Built with 🇪🇹 for Ethiopian artisans and their global customers.**
