# Customer Dashboard - Ethio Crafts

## Overview

The Customer Dashboard is a comprehensive account management center for Ethio Crafts customers. It provides a unified interface for managing orders, wishlists, addresses, payment methods, and account preferences.

**Location**: `/dashboard/customer`

---

## Features

### 1. Dashboard Overview
- **Quick Stats**: Total orders, wishlist items, saved addresses, member since date
- **Recent Orders**: Last 2 orders with status and tracking links
- **Wishlist Highlights**: Quick view of 3 wishlist items
- **Easy Navigation**: Tab-based interface for all account sections

### 2. Orders Management
- **View All Orders**: Complete order history with statuses
- **Order Details**: 
  - Order ID (with order number)
  - Status badges (Delivered, In Transit, Pending)
  - Items purchased
  - Total amount in ETB
  - Estimated delivery date
  - Track button for shipment tracking
- **Statuses**: Delivered, In Transit, Pending
- **Color-Coded**: Green (delivered), Blue (in transit), Amber (pending)

### 3. Wishlist
- **Save Items**: Add products to personal wishlist
- **Quick View**: See all saved items at a glance
- **Item Details**:
  - Product image (with out-of-stock overlay)
  - Product name and artisan name
  - Price in ETB
  - Star rating (1-5)
  - Stock status indicator
- **Actions**:
  - Add to cart directly
  - Remove from wishlist
  - View product details

### 4. Reviews
- **My Reviews**: See all reviews you've written
- **Review Details**:
  - Product name
  - Artisan name
  - Star rating
  - Review date
  - Verified purchase badge
  - Full review text
- **Write New Review**: Button to submit reviews for purchased products
- **Verified Purchases**: Only customers with verified purchases can review

### 5. Saved Addresses
- **Multiple Addresses**: Save up to 3+ delivery addresses
- **Address Labels**: Home, Office, Weekday Place, etc.
- **Default Address**: Mark one address as default for checkout
- **Address Details**:
  - Full street address
  - City and postal code
  - Phone number
- **Actions**:
  - Edit address
  - Delete address
  - Set as default
- **Add New**: Button to add additional addresses

### 6. Payment Methods
- **Multiple Methods**: Save multiple payment methods
- **Supported Types**:
  - Credit/Debit Cards (Visa, Mastercard, etc.)
  - Mobile Money (Chapa, TeleBirr, etc.)
- **Card Details** (masked):
  - Last 4 digits
  - Card brand
  - Expiry date
- **Mobile Methods**:
  - Provider name
  - Phone number
- **Default Method**: Marked for faster checkout
- **Actions**:
  - Edit payment details
  - Delete payment method
  - Set as default

### 7. Profile Management
- **Personal Information**:
  - Full name
  - Email address
  - Phone number
- **Edit Profile**:
  - In-line editing form
  - Save changes button
  - Cancel editing
- **Preferences**:
  - Email marketing opt-in/out
  - Wishlist sale notifications
  - SMS order updates

### 8. Notification Settings
- **Notification Types**:
  - Order Updates: Track order status changes
  - Wishlist Alerts: Notify when items back in stock
  - New Arrivals: Weekly digest of new products
  - Promotions: Special offers and discounts
  - Messages: Support communications
- **Toggle Controls**: Easy on/off switches for each notification type
- **Customizable**: Set preferences per notification type

---

## User Interface

### Layout
```
Header (Title + Sign Out button)
    ↓
Statistics Grid (4 cards)
    ↓
Tab Navigation (8 tabs)
    ↓
Tab Content Area
    ↓
Footer (inherited from layout)
```

### Tabs
1. **Overview** - Dashboard at a glance
2. **Orders** - Full order history
3. **Wishlist** - Saved items
4. **Reviews** - Your product reviews
5. **Addresses** - Shipping addresses
6. **Payment Methods** - Payment options
7. **Profile** - Account information
8. **Notifications** - Alert preferences

### Color Scheme
- **Primary (Deep Ochre #8B6F47)**: Tab highlights, buttons, stats
- **Success (Green #99B85C)**: Delivered status
- **Info (Blue #4A90E2)**: In-transit status
- **Warning (Amber #C9985B)**: Pending status
- **Background**: White (all pages)
- **Foreground**: Off-Black (#1A1A1A)

### Typography
- **Headings**: Lora serif font (cultural authenticity)
- **Body Text**: Geist sans-serif (modern readability)
- **Stats**: Large, bold serif numbers

---

## Component Structure

```tsx
CustomerDashboard (Main component)
├── Header
│   ├── Page title
│   ├── Subtitle
│   └── Sign Out button
├── Statistics Grid
│   ├── Total Orders card
│   ├── Wishlist Items card
│   ├── Saved Addresses card
│   └── Member Since card
├── Tab Navigation
│   └── 8 clickable tabs with icons
└── Tab Content
    ├── Overview Tab
    │   ├── Recent Orders section
    │   └── Wishlist Highlights section
    ├── Orders Tab
    │   └── Order History list
    ├── Wishlist Tab
    │   └── Product grid
    ├── Reviews Tab
    │   └── Review cards
    ├── Addresses Tab
    │   └── Address cards (grid)
    ├── Payment Tab
    │   └── Payment method cards
    ├── Profile Tab
    │   ├── Profile info card
    │   ├── Edit form (conditional)
    │   └── Preferences section
    └── Notifications Tab
        └── Notification toggles
```

---

## Data Structure

### Order Object
```typescript
{
  id: string,           // "ORD-2024-005432"
  date: string,         // "Mar 8, 2024"
  status: string,       // "delivered" | "in-transit" | "pending"
  items: string,        // "Hand-Woven Basket x2, Coffee Roaster"
  total: number,        // 8500 (in ETB)
  trackingUrl: string,  // "#" or actual tracking link
  estimatedDelivery: string // "Delivered Mar 10" or "Arrives Mar 15"
}
```

### Wishlist Item Object
```typescript
{
  id: number,
  name: string,         // Product name
  artisan: string,      // Artisan/Shop name
  price: number,        // Price in ETB
  image: string,        // Image URL
  inStock: boolean,
  rating: number        // 1-5 stars
}
```

### Address Object
```typescript
{
  id: number,
  label: string,        // "Home", "Office", etc.
  address: string,      // Full address
  phone: string,        // Phone number
  isDefault: boolean
}
```

### Payment Method Object
```typescript
{
  id: number,
  type: string,         // "card" | "mobile"
  lastFour?: string,    // For cards
  brand?: string,       // "Visa", "Mastercard"
  expiry?: string,      // "12/25"
  provider?: string,    // For mobile (Chapa, TeleBirr)
  phone?: string,       // For mobile
  isDefault: boolean
}
```

---

## Key Features Explained

### Status Badges
Provides visual feedback for order status:
- **Delivered**: Green badge with checkmark icon
- **In Transit**: Blue badge with package icon
- **Pending**: Amber badge with clock icon

### Wishlist Management
- Add products to wishlist from product pages
- Quick view on dashboard
- Full wishlist page for detailed management
- Remove items with one click
- See which items are out of stock

### Address Management
- Multiple saved addresses for faster checkout
- Mark one as default for automatic selection
- Edit or delete existing addresses
- Add new addresses on-demand

### Payment Method Security
- Cards are masked (only last 4 digits shown)
- Multiple payment options supported
- Quick access to payment settings
- Default method pre-selected at checkout

### Notification Control
- Granular control over notification types
- Toggle switches for easy management
- Separate notification preferences
- Email and SMS support

---

## User Flows

### Checking Recent Orders
1. User clicks account icon in header
2. Navigated to `/dashboard/customer`
3. Views overview tab (default)
4. Sees recent orders with status
5. Clicks "View Details" to track order

### Adding a New Address
1. Navigate to "Addresses" tab
2. Click "Add Address" button
3. Fill in address form
4. Optionally set as default
5. Save address
6. Address appears in list

### Changing Notification Preferences
1. Navigate to "Notifications" tab
2. See all notification types
3. Toggle switch for each notification
4. Changes save automatically
5. User preferences are updated

### Writing a Review
1. Navigate to "Reviews" tab
2. Click "Write Review" button
3. Select product from order history
4. Rate product (1-5 stars)
5. Write review text
6. Optionally upload photos
7. Submit review
8. Review appears in list (after moderation)

---

## Responsive Design

### Mobile (< 640px)
- Single column layout
- Full-width cards
- Stacked tabs (scroll horizontally)
- Simplified grid layouts

### Tablet (640px - 1024px)
- Two-column layouts where applicable
- Two-column dashboard cards
- Improved spacing

### Desktop (> 1024px)
- Full multi-column layouts
- Four-column stat grid
- Three-column product grids
- Side-by-side comparisons

---

## Future Enhancements

1. **Order Returns**: One-click returns and refund tracking
2. **Review Photos**: Upload multiple photos with reviews
3. **Bulk Actions**: Select multiple orders for actions
4. **Download Invoices**: PDF receipts for orders
5. **Order Export**: CSV/PDF export of order history
6. **Email Preferences**: More granular email settings
7. **Two-Factor Authentication**: Enhanced security
8. **Login Activity**: See recent login locations/devices
9. **Gift Cards**: Purchase and manage gift cards
10. **Referral Program**: Share referral links and track rewards

---

## Accessibility

- Semantic HTML structure
- ARIA labels on all interactive elements
- Keyboard navigation support
- High contrast text (Off-Black on White)
- Focus indicators on interactive elements
- Tab order follows logical flow
- Screen reader friendly

---

## Performance

- Lazy loading of order history
- Paginated order list (12 orders per page)
- Optimized image loading
- Minimal re-renders with proper state management
- CSS transitions for smooth interactions

---

## Security Considerations

- Authenticated access required (JWT/session)
- No sensitive data displayed unencrypted
- Card details masked (last 4 digits only)
- HTTPS for all transactions
- CSRF protection on forms
- Rate limiting on API calls
- Secure session management

---

## Route
- **Path**: `/dashboard/customer`
- **Component**: `CustomerDashboard`
- **Access**: Authenticated customers only
- **Metadata**: 
  - Title: "My Account | Ethio Crafts"
  - Description: "Manage your account, orders, addresses, and preferences"

---

## Files
- **Component**: `/components/CustomerDashboard.tsx` (663 lines)
- **Route**: `/app/dashboard/customer/page.tsx` (11 lines)
- **Header Update**: User account icon added

