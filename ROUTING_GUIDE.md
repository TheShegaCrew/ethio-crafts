# Complete Routing Guide - Timbuktu Marketplace

All pages and dashboards are now accessible via direct routes. Start from the **[Demo Page](/demo)** to navigate through all features.

---

## Customer Pages (Public Routes)

### Homepage
- **Route**: `/`
- **File**: `/app/page.tsx`
- **Features**: Hero carousel, categories, featured products, cultural stories
- **Components**: HeroCarousel, CategoryGrid, FeaturedProducts, CulturalStories

### Products Listing
- **Route**: `/products`
- **File**: `/app/products/page.tsx`
- **Features**: Product grid, filters (material, region, price), search, sort, 24+ products
- **Components**: ProductListing (with sidebar filters)

### Product Detail Page
- **Route**: `/product/[id]`
- **File**: `/app/product/[id]/page.tsx`
- **Example**: `/product/sample-pottery-001`
- **Features**:
  - 2-column layout (image left, details right)
  - Large product image with zoom
  - Thumbnail carousel
  - Product specs table (material, dimensions, region, time)
  - Price in ETB
  - Stock status
  - Trust badges (verified, authentic, quality-checked)
  - Rating & reviews
  - "Add to Cart" button (gold)
  - Wishlist & Share buttons
  - 3D viewer button
  - Tabs: Description, Cultural Significance, Reviews, Shipping
  - Customer reviews with photos
  - Made-to-Order option

### Shopping Cart
- **Route**: `/cart`
- **File**: `/app/cart/page.tsx`
- **Features**:
  - Cart items list
  - Item quantity controls
  - Promo code input
  - Order summary (sticky sidebar on desktop)
  - Subtotal, shipping, tax calculation
  - Free shipping threshold (2000 ETB+)
  - "Proceed to Checkout" button
  - Continue Shopping button

### Checkout
- **Route**: `/checkout`
- **File**: `/app/checkout/page.tsx`
- **Features**:
  - 4-step checkout flow with progress bar
  - Step 1: Shipping Address (with autocomplete)
  - Step 2: Payment Method (Chapa, TeleBirr, Cash on Delivery)
  - Step 3: Order Review
  - Step 4: Confirmation
  - Sticky order summary on desktop
  - Save address option
  - Gift message option

### Order Tracking
- **Route**: `/orders/[id]`
- **File**: `/app/orders/[id]/page.tsx`
- **Example**: `/orders/ORDER123456`
- **Features**:
  - 7-stage delivery timeline
  - Stage indicators (processing, packing, shipped, out for delivery, etc.)
  - Order header with ID, date, total price
  - Estimated delivery date
  - Items list with images
  - Shipping address
  - Map integration (delivery tracking)
  - Review submission modal
  - Chat support button
  - Download invoice button

---

## Dashboards (Protected Routes - Add Authentication)

### Artisan Dashboard
- **Route**: `/dashboard/artisan`
- **File**: `/app/dashboard/artisan/page.tsx`
- **Features**:
  - KPI cards (total sales, pending orders, avg rating, new reviews)
  - Activity feed (recent orders, reviews, messages)
  - Products table (all products with edit/delete actions)
  - Monthly sales chart
  - Category performance chart
  - New Sample Submission wizard (3-step form)
  - Product management (add, edit, delete)
  - Order management
  - Performance metrics
  - Settings

### Agent Verification Dashboard
- **Route**: `/dashboard/agent`
- **File**: `/app/dashboard/agent/page.tsx`
- **Features**:
  - Task selection (filter by distance, priority, date range)
  - Task list (location, priority, status)
  - Physical Inspection Form
  - Measurements input (width, height, depth, weight)
  - Material verification checklist
  - Quality rating (1-5 scale)
  - Photo upload (5+ photos required)
  - Authenticity checklist
  - Final decision (approved/rejected)
  - Verification timeline
  - Notes field
  - Offline mode support
  - Sidebar verification checklist (8-point)

### Admin Dashboard
- **Route**: `/dashboard/admin`
- **File**: `/app/dashboard/admin/page.tsx`
- **Features**:
  - 6 KPI cards (total orders, total revenue, verified products, pending verification, avg rating, active artisans)
  - Sales trend chart (7-day, monthly)
  - Category distribution pie chart
  - Regional heatmap
  - Recent orders table (order ID, customer, amount, status, date)
  - Top products table (product name, sales, revenue, rating)
  - Pending verification queue (artisan name, product count, submitted date, action buttons)
  - Filters & date range picker
  - Export reports button

---

## Navigation Structure

### Header Navigation
- **Logo**: Links to homepage (`/`)
- **Search**: Product search
- **Desktop Menu**: 
  - Mega Menu (categories + regions)
  - Stories
  - Help
  - Cart icon (links to `/cart`)
  - Demo link (links to `/demo`)
- **Mobile Menu**: Hamburger with categories, regions, help

### Trust Bar (Site-Wide Below Header)
- 500+ verified artisans
- 10,000+ authentic products
- Secure payments badge
- 24/7 support

### Footer
- About section
- Categories links
- Regions (Addis Ababa, Hawassa, Gondar, Dire Dawa, Mekelle)
- Help & Support
- Company
- Newsletter signup
- Payment methods (TeleBirr, Chapa, Cash on Delivery)
- Social links

---

## Demo/Navigation Page

### Demo Page
- **Route**: `/demo`
- **File**: `/app/demo/page.tsx`
- **Purpose**: Comprehensive navigation hub for all pages
- **Features**:
  - Customer pages section with cards linking to each page
  - Dashboards section
  - Features highlight (Trust System, Product Features, Purchase Experience, For Artisans)
  - Design system info (colors, typography, layout)
  - Interactive feature explorer

---

## File Structure

```
/app
├── /page.tsx                          (Homepage)
├── /demo/page.tsx                     (Demo Navigation)
├── /products/page.tsx                 (Product Listing)
├── /product/[id]/page.tsx             (Product Detail)
├── /cart/page.tsx                     (Shopping Cart)
├── /checkout/page.tsx                 (Checkout)
├── /orders/[id]/page.tsx              (Order Tracking)
├── /dashboard/
│   ├── /artisan/page.tsx              (Artisan Dashboard)
│   ├── /agent/page.tsx                (Agent Verification)
│   └── /admin/page.tsx                (Admin Dashboard)
└── /globals.css                       (Design tokens)

/components
├── Header.tsx                         (Site navigation)
├── Footer.tsx                         (Footer)
├── TrustBar.tsx                       (Trust indicators)
├── HeroCarousel.tsx                   (Rotating banners)
├── CategoryGrid.tsx                   (Category browser)
├── FeaturedProducts.tsx               (Featured grid)
├── CulturalStories.tsx                (Story cards)
├── ProductListing.tsx                 (Full product list with filters)
├── ProductDetailPage.tsx              (Product detail 2-column)
├── ShoppingCart.tsx                   (Cart management)
├── CheckoutPage.tsx                   (4-step checkout)
├── OrderTracking.tsx                  (Delivery tracking)
├── ProductCard.tsx                    (Reusable card)
├── TrustBadges.tsx                    (Verification badges)
├── MadeToOrderForm.tsx                (Custom order wizard)
├── ReviewSubmission.tsx               (Review form with uploads)
├── ChatSupport.tsx                    (Floating chat widget)
├── PaymentShipping.tsx                (Payment & shipping options)
├── Navigation.tsx                     (Sidebar nav)
├── ArtisanDashboard.tsx               (Artisan panel)
├── AgentVerification.tsx              (Agent verification panel)
├── AdminDashboard.tsx                 (Admin analytics panel)
├── MegaMenu.tsx                       (Mega menu dropdown)
└── /ui/                               (shadcn/ui components)
```

---

## How to Use

### For Customers
1. Start at **Homepage** (`/`) - see featured products & categories
2. Browse **Products** (`/products`) - search & filter
3. View **Product Detail** (`/product/sample-pottery-001`) - read specs & reviews
4. Add to **Cart** (`/cart`) - manage items
5. **Checkout** (`/checkout`) - 4-step process
6. Track **Order** (`/orders/ORDER123456`) - delivery status

### For Artisans
1. Access **Artisan Dashboard** (`/dashboard/artisan`)
2. Submit product samples
3. Manage products & pricing
4. View sales & orders
5. Respond to customer messages

### For Agents
1. Access **Agent Dashboard** (`/dashboard/agent`)
2. Select verification tasks
3. Complete inspection form
4. Upload photos (5+)
5. Approve or reject

### For Admins
1. Access **Admin Dashboard** (`/dashboard/admin`)
2. View platform KPIs
3. Monitor orders & revenue
4. Review pending verification queue
5. Manage artisans & agents

---

## Quick Links

- **[Demo Page](/demo)** ← Start here
- **[Homepage](/)** 
- **[Products](/products)**
- **[Product Detail](/product/sample-pottery-001)**
- **[Cart](/cart)**
- **[Checkout](/checkout)**
- **[Order Tracking](/orders/ORDER123456)**
- **[Artisan Dashboard](/dashboard/artisan)**
- **[Agent Dashboard](/dashboard/agent)**
- **[Admin Dashboard](/dashboard/admin)**

---

## Features by Page

### Homepage
- Hero carousel with 4 rotating cultural banners
- 8 category grid
- 8 featured products
- 3 cultural stories
- Trust bar with site stats
- Chat support widget
- Footer with regions & links

### Products Page
- Product listing (2/3/4 columns responsive)
- Sidebar filters (material, region, price range, rating)
- Sort options (newest, price low-to-high, popular)
- Search integration
- Trust badges on cards
- "Add to Cart" buttons
- View count & rating display

### Product Detail
- 2-column layout
- Main image with zoom & rotation
- Thumbnail carousel
- Specs table (material, dimensions, region, time, care)
- Trust badges with verification dates
- Rating display (4.8 / 5.0)
- Price in ETB
- Stock status (in/out of stock)
- Quantity stepper
- Add to Cart button
- Wishlist & Share buttons
- 3D viewer button
- Tabs: Description, Cultural Significance, Reviews, Shipping
- Review section with photos
- Made-to-Order option
- Related products carousel
- Chat support

### Shopping Cart
- Item cards (image, name, price, quantity)
- Remove/update quantity buttons
- Subtotal per item
- Promo code field
- Order summary (subtotal, shipping, tax, total)
- Free shipping threshold indicator
- "Proceed to Checkout" CTA
- "Continue Shopping" link
- Empty cart state with suggestions

### Checkout
- Progress bar (4 steps)
- Step 1: Shipping Address (form with region select, address autocomplete)
- Step 2: Shipping Method (Standard 3-5 days, Express 1-2 days)
- Step 3: Payment Method (Chapa, TeleBirr, Cash on Delivery)
- Step 4: Review & Confirm
- Order summary sidebar (sticky)
- Error handling
- Success confirmation with order number

### Order Tracking
- Order header (ID, date, status, total)
- 7-stage timeline (Confirmed → Packing → Picked Up → In Transit → Out for Delivery → Arrived → Delivered)
- Estimated delivery date
- Current stage highlighted
- Items list with images
- Shipping address
- Map integration
- Review submission button
- Chat support
- Repeat order button
- Download invoice

### Dashboards
All dashboards include:
- Header with logout
- Sidebar navigation (collapsible)
- Sticky header for scroll
- White background
- KPI cards with trends
- Interactive charts
- Data tables
- Action buttons
- Modals for forms

---

## Design System Applied Across All Pages

**Colors**: Deep Ochre (primary), Warm Gold (accent), White (background), Off-Black (text)
**Typography**: Lora serif for headings, Geist sans for body
**Layout**: Mobile-first responsive, flexbox-based
**Background**: 100% white on all pages (no gradients)
**Accessibility**: WCAG 2.1 AA compliant

---

## Next Steps

1. **Test all routes** - Click links from demo page
2. **Review designs** - Check each page layout
3. **Test interactions** - Try filters, modals, forms
4. **Check responsive** - View on mobile/tablet/desktop
5. **Review copy** - Read all product descriptions
6. **Plan backend** - Design database schema
7. **Add authentication** - Implement login/signup
8. **Connect APIs** - Integrate payments, storage
9. **Go live** - Deploy to production

---

Last Updated: April 11, 2026
