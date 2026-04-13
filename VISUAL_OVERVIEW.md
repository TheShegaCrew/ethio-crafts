# Timbuktu - Visual & Functional Overview

## COLOR PALETTE

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  Deep Ochre (#8B6F47)    [████████████]        │
│  Primary brand, trust, buttons, links           │
│                                                 │
│  Warm Gold (#D4A574)     [████████████]        │
│  Accents, CTAs, badges, highlights             │
│                                                 │
│  Off-Black (#1A1A1A)     [████████████]        │
│  Text, headings, dark elements                 │
│                                                 │
│  Cream (#F5F1E8)         [████████████]        │
│  Backgrounds, cards, subtle accents            │
│                                                 │
│  White (#FFFFFF)         [████████████]        │
│  Main background, all pages                    │
│                                                 │
└─────────────────────────────────────────────────┘
```

## TYPOGRAPHY HIERARCHY

```
H1 (28px, Lora Bold)
Product Title / Page Heading

H2 (20px, Lora SemiBold)
Section Title

H3 (16px, Lora SemiBold)
Subsection / Card Title

Body (14px, Geist Regular)
Main content text

Small (12px, Geist Regular)
Metadata, timestamps, captions
```

## LAYOUT PATTERNS

### Pattern 1: Product Listing (Information Density)
```
┌─────────────────────────────────────────────────────────┐
│ HEADER                                                  │
├─────────────────────────────────────────────────────────┤
│ TRUST BAR                                               │
├──────────────────┬───────────────────────────────────────┤
│  FILTERS         │  SORT  [Results: 156]   [Grid/List]   │
│                  │                                       │
│  □ Category      │  ┌────────────┬────────────┐         │
│  □ Material      │  │ Product    │ Product    │         │
│  □ Region        │  │ Card 1     │ Card 2     │         │
│  □ Price Range   │  └────────────┴────────────┘         │
│  □ Tags          │  ┌────────────┬────────────┐         │
│                  │  │ Product    │ Product    │         │
│                  │  │ Card 3     │ Card 4     │         │
│                  │  └────────────┴────────────┘         │
│                  │  [Load More Products]                │
└──────────────────┴───────────────────────────────────────┘
```

### Pattern 2: Product Detail (2-Column)
```
┌──────────────────────────────────────────────────────────┐
│ BREADCRUMB: Home > Shop > Basketry > Product            │
├──────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────┐  │
│ │                                                     │  │
│ │          [Large Product Image]                      │  │
│ │          (Zoomable on hover)                        │  │
│ │                                                     │  │
│ ├─────────────────────────────────────────────────────┤  │
│ │ [Thumb] [Thumb] [Thumb] [Thumb]                    │  │
│ ├─────────────────────────────────────────────────────┤  │
│ │  [View in 3D] (Full Width Button)                  │  │
│ └─────────────────────────────────────────────────────┘  │
│                                                            │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ ✓ Physically Verified by Agent                     │ │
│ │ ✓ Authentic Ethiopian Craft                        │ │
│ │ ✓ Quality Inspected [Date]                         │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                            │
│ ┌─────────────────────────────────────────────────────┐  │
│ │ Product Title (Bold, 28px)                          │  │
│ │ ⭐⭐⭐⭐⭐ 4.8 (247 reviews)                         │  │
│ │                                                     │  │
│ │ ETB 2,850  [Free Shipping]                          │  │
│ │ ✓ In Stock                                          │  │
│ │                                                     │  │
│ │ Region:           Addis Ababa                       │  │
│ │ Material:         Woven Straw                       │  │
│ │ Dimensions:       35cm × 20cm                       │  │
│ │ Production Time:  7-14 days                         │  │
│ │                                                     │  │
│ │ Quantity:  [−] 1 [+]                               │  │
│ │ [Add to Cart] (Full Width, Gold)                   │  │
│ │ [❤ Save]  [↗ Share]                               │  │
│ │                                                     │  │
│ │ ┌─ Why Buy with Confidence? ──────────────────┐    │  │
│ │ │ ✓ Direct from verified artisans              │    │  │
│ │ │ ✓ Free shipping on 2000 ETB+                 │    │  │
│ │ │ ✓ 14-day returns guarantee                   │    │  │
│ │ └──────────────────────────────────────────────┘    │  │
│ │ [💬 Ask a Question]                               │  │
│ └─────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘

[Description Tab] [Cultural Significance] [Reviews] [Shipping]

Content changes based on active tab...
```

### Pattern 3: Checkout Flow (4 Steps)
```
┌──────────────────────────────────────────────────────────┐
│ Step Progress: [Cart] → [Shipping] → [Payment] → [Review]│
│ ████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░     │
├──────────────────────────────────────────────────────────┤
│                                                            │
│ STEP 1: SHIPPING INFORMATION                             │
│                                                            │
│ Contact Details                                           │
│ Email: [_______________]  Phone: [_______________]       │
│                                                            │
│ Delivery Address                                          │
│ [___________________________________] [Search on Map]    │
│ City: [__________]  Region: [__________]  Code: [_____]  │
│                                                            │
│ Shipping Method                                           │
│ ○ Standard 3-5 days   - Free                             │
│ ◉ Express 1-2 days    - +300 ETB                         │
│                                                            │
│                              [Back] [Continue]            │
│                                                            │
├──────────────────────────────────────────────────────────┤
│ ORDER SUMMARY (Sticky Sidebar)                           │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ Subtotal:        ETB 2,850                          │ │
│ │ Shipping:        Free                               │ │
│ │ Tax:             ETB 285                            │ │
│ │ ─────────────────────                               │ │
│ │ Total:           ETB 3,135                          │ │
│ │ ─────────────────────                               │ │
│ │                                                      │ │
│ │ Promo Code: [______________] [Apply]                │ │
│ │                                                      │ │
│ │ [Secure Checkout] [PCI DSS] [SSL Encrypted]        │ │
│ └──────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

### Pattern 4: Order Tracking (Timeline)
```
┌──────────────────────────────────────────────────────────┐
│ Order #TIM-2024-001234                                   │
├──────────────────────────────────────────────────────────┤
│                                                            │
│ ✓ [Feb 15] Order Placed                                 │
│   └─ Confirmation sent to email                          │
│                                                            │
│ ✓ [Feb 15] Payment Confirmed                            │
│   └─ Processing with agent                              │
│                                                            │
│ ✓ [Feb 16] Processed by Agent (AG-2847)                │
│   └─ Physical quality inspection complete               │
│                                                            │
│ ✓ [Feb 17] Shipped                                      │
│   └─ Tracking: EX-234567-ETH                            │
│                                                            │
│ 🚚 [Feb 19] Out for Delivery                             │
│   └─ Estimated arrival: Feb 20-21                       │
│                                                            │
│ ⏳ [Feb 21] Delivered (Pending)                          │
│   └─ Please confirm receipt                             │
│                                                            │
├──────────────────────────────────────────────────────────┤
│ [Download Invoice]  [Contact Support]  [Submit Review]   │
└──────────────────────────────────────────────────────────┘
```

### Pattern 5: Made-to-Order (3-Step Wizard)
```
STEP 1: MATERIAL & COLOR
┌──────────────────────────────────────────────────────────┐
│ Material: [Straw] [Leather] [Metal] [Wood] [Cotton]      │
│ Color:    [Natural] [Black] [Brown] [Red] [Gold]         │
│                                      [Next: Dimensions]   │
└──────────────────────────────────────────────────────────┘

STEP 2: DIMENSIONS
┌──────────────────────────────────────────────────────────┐
│ Length (cm):  [_____]                                    │
│ Width (cm):   [_____]                                    │
│ Height (cm):  [_____]                                    │
│                                                            │
│ Special Requests:                                        │
│ [________________________________________] (500 chars)   │
│                                  [Back] [Next: Review]   │
└──────────────────────────────────────────────────────────┘

STEP 3: REVIEW & SUBMIT
┌──────────────────────────────────────────────────────────┐
│ Summary:                                                  │
│ Material:  Leather                                       │
│ Color:     Brown                                         │
│ Dims:      30cm × 20cm × 15cm                           │
│ Quantity:  [−] 1 [+]                                    │
│                                                            │
│ Price Breakdown:                                         │
│ Base (1 × ETB 1000):     ETB 1,000                      │
│ Customization Fee:       ETB 500                         │
│ Total:                   ETB 1,500                       │
│                                                            │
│ Estimated: 14 days from order                           │
│                                      [Back] [Request]    │
└──────────────────────────────────────────────────────────┘
```

## COMPONENT COMPOSITION

### Header Component
```
┌─────────────────────────────────────────────────────────────┐
│ [T] Timbuktu    [Search for handicrafts...] [🛒 0] [☰]    │
├──────────────────────────────────────────────────────────────┤
│ ✓ 500+ Verified | ✓ Quality Checked | ✓ Secure | ✓ Tracked │
└──────────────────────────────────────────────────────────────┘
```

### Trust Bar Component
```
┌─────────────────────────────────────────────────────────────┐
│ ✓ 500+ Verified Artisans | ✓ 10,000+ Products             │
│ ✓ Secure Payments        | ✓ 24/7 Support                 │
└─────────────────────────────────────────────────────────────┘
```

### Product Card
```
┌──────────────────┐
│ [Product Image]  │ ← Hover: shows "View in 3D" badge
│ ┌──────────────┐ │
│ │ ✓ Verified   │ │ ← Badge overlay
│ └──────────────┘ │
├──────────────────┤
│ Product Title... │
│ Addis Ababa      │
│ ETB 2,850        │
│ ⭐ 4.8 (47)      │
├──────────────────┤
│ [Add to Cart]    │ ← Appears on hover
│ [❤] [↗]         │ ← Secondary actions
└──────────────────┘
```

### Chat Widget
```
        (Fixed bottom-right)
        
        ┌─ Timbuktu Support ──────┐
        │ 1 min response time      │
        ├──────────────────────────┤
        │ [Chat message 1]         │
        │ [Chat message 2]  [👤]   │
        │ [Your message]           │
        ├──────────────────────────┤
        │ [Type message...] [➜]    │
        └──────────────────────────┘
        
        (Floating button when closed)
        [💬]
```

## RESPONSIVE BREAKPOINTS

```
Mobile (<640px)              Tablet (640-1024px)        Desktop (1024px+)
┌─────────┐                ┌──────────────────┐       ┌──────────────────────┐
│ Header  │                │ Header           │       │ Header               │
│ (Compact)                │ (Compact)        │       │ (Full Width)         │
├─────────┤                ├──────────────────┤       ├──────────────────────┤
│ HERO    │                │ HERO (Centered)  │       │ HERO (Full Width)    │
│ (Full)  │                │                  │       │                      │
├─────────┤                ├──────────────────┤       ├──────────────────────┤
│ [Cat]   │                │ [Cat1] [Cat2]    │       │ [C1] [C2] [C3] [C4]  │
│ [Cat]   │                │ [Cat3] [Cat4]    │       │ [C5] [C6] [C7] [C8]  │
│ [Cat]   │                │                  │       │                      │
│ [Cat]   │                ├──────────────────┤       ├──────────────────────┤
├─────────┤                │ [Prod] [Prod]    │       │ [P1][P2][P3][P4]     │
│ [Prod]  │                │ [Prod] [Prod]    │       │ [P5][P6][P7][P8]     │
│ [Prod]  │                │ [Prod] [Prod]    │       │ [P9][P10][P11][P12]  │
│ [Prod]  │                │ [Prod] [Prod]    │       │                      │
│ [Prod]  │                │ [Prod] [Prod]    │       └──────────────────────┘
└─────────┘                │                  │
                          └──────────────────┘
1-column                  2-column           4-column
```

## TRUST & VERIFICATION VISUAL

```
                    VERIFICATION TIMELINE
                    
        [Sample Submitted] → [Admin Review] → [Agent Verified] → [Published]
             Feb 15              Feb 15              Feb 16              Feb 16
             
        Visible to Customer on Product Page:
        
        ✓ Physically Verified by Agent
          └─ Inspected on Feb 16, 2024
        
        ✓ Authentic Ethiopian Craft
          └─ Cultural heritage verified
        
        ✓ Quality Checked
          └─ Agent ID: AG-2847 (masked)
```

## BADGE SYSTEM

```
┌─────────────┐  ┌─────────────┐  ┌──────────────┐  ┌──────────────┐
│ ✓ Verified  │  │ 🛡 Quality  │  │ 🏆 Authentic │  │ 🚚 Fast Ship │
│ Platform    │  │ Checked     │  │ Craft        │  │ 3-5 Days     │
│ Green       │  │ Blue        │  │ Gold         │  │ Green        │
└─────────────┘  └─────────────┘  └──────────────┘  └──────────────┘
```

---

## INFORMATION DENSITY METRICS

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Gutter | 8px | 12px | 16px |
| Body Font | 14px | 14px | 14px |
| Meta Font | 12px | 12px | 12px |
| Product Cards | 1 col | 2 cols | 4 cols |
| Spacing | Relaxed | Normal | Compact |

---

## ACCESSIBILITY FEATURES

```
✓ Keyboard Navigation (Tab, Enter, Escape)
✓ Screen Reader Support (ARIA labels, landmarks)
✓ Color Contrast (4.5:1 minimum on text)
✓ Focus Indicators (Visible outlines on interactive elements)
✓ Alt Text (All images have descriptions)
✓ Form Labels (Associated with inputs via <label>)
✓ Semantic HTML (<main>, <nav>, <article>, <aside>)
✓ Skip Links (Jump to main content)
✓ Mobile Touch (44px minimum touch targets)
```

---

## PERFORMANCE VISUAL

```
Page Load Performance Targets:

3G Network:        └──────── 3 seconds ────────┐
                                               │
4G Network:        └─ 1 second ─┐              │
                                │              │
Desktop (Fiber):   └─ 500ms ┐   │              │
                            │   │              │
Time to Interactive:  5s ├──┼───┴──────────────┤
                            │
                            ▼
        [Optimized Images] [Lazy Loading] [Code Splitting]
```

---

## DEPLOYMENT DIAGRAM

```
┌─────────────────────────────────────────────────┐
│        Timbuktu (Vercel Deployment)            │
├─────────────────────────────────────────────────┤
│                                                 │
│  Frontend          Database        Storage     │
│  ┌────────────┐   ┌────────────┐ ┌─────────┐  │
│  │ Next.js    │   │ Supabase / │ │ Vercel  │  │
│  │ React      │──→│ Neon /     │ │ Blob    │  │
│  │ Components │   │ AWS Aurora │ └─────────┘  │
│  └────────────┘   └────────────┘              │
│                                                 │
│  Auth         Payments        Email            │
│  ┌────────┐   ┌─────────────┐ ┌──────────┐   │
│  │ Auth.js│   │ Chapa API   │ │ Resend / │   │
│  │ NextAuth   │ TeleBirr API │ │ SendGrid │   │
│  └────────┘   └─────────────┘ └──────────┘   │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

This visual overview represents the complete Timbuktu platform design & implementation.

**All components are production-ready and fully documented.**
