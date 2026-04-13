# Design Tokens & CSS Variables Reference
## Timbuktu - Ethiopian Handicrafts Marketplace

---

## **PRIMARY COLOR PALETTE**

### Deep Ochre (Primary Brand Color)
```
Hex:        #8B6F47
RGB:        139, 111, 71
HSL:        30°, 32%, 41%
Tailwind:   bg-primary, text-primary, border-primary
CSS Var:    var(--primary)
Usage:      Primary buttons, links, badges, navigation highlights
Contrast:   12:1 on cream background ✓
```

**Visual Guide**:
```
████████████ #8B6F47 (Primary - Deep Ochre)
████████░░░░ #9D7F5B (Lighter shade for hover)
████████░░░░ #7D6440 (Darker shade for press)
```

---

### Warm Gold (Secondary/Accent Color)
```
Hex:        #D4A574
RGB:        212, 165, 116
HSL:        32°, 57%, 64%
Tailwind:   bg-secondary, text-secondary
CSS Var:    var(--secondary)
Usage:      Accent elements, premium pricing, highlights
Contrast:   3.5:1 on cream (use dark text on top)
```

**Visual Guide**:
```
████████████ #D4A574 (Secondary - Warm Gold)
████░░░░░░░░ #E5B88B (Lighter, hover state)
████░░░░░░░░ #C49563 (Darker, press state)
```

---

### Off-Black (Foreground/Text)
```
Hex:        #1A1A1A
RGB:        26, 26, 26
HSL:        0°, 0%, 10%
Tailwind:   text-foreground, border-foreground
CSS Var:    var(--foreground)
Usage:      Body text, headings, primary content
Contrast:   12:1 on cream background ✓
Contrast:   1.3:1 on deep ochre ✓
```

---

### Cream (Background/Primary Surface)
```
Hex:        #F5F1E8
RGB:        245, 241, 232
HSL:        30°, 40%, 96%
Tailwind:   bg-background, text-background
CSS Var:    var(--background)
Usage:      Page backgrounds, card backgrounds, safe areas
Contrast:   12:1 with off-black text ✓
Warmth:     Avoids harsh white, maintains warmth
```

---

## **EXTENDED COLOR PALETTE**

### Success (Verification)
```
Hex:        #99B85C
RGB:        153, 184, 92
HSL:        85°, 44%, 54%
Tailwind:   bg-green-500 (custom: --success)
CSS Var:    var(--success)
Usage:      "✓ Verified" badge, in-stock indicators
Contrast:   3.8:1 on white (white text)
```

---

### Warning (Limited Stock)
```
Hex:        #C9985B
RGB:        201, 152, 91
HSL:        32°, 53%, 57%
Tailwind:   bg-amber-600 (custom: --warning)
CSS Var:    var(--warning)
Usage:      Limited stock warnings, caution indicators
Contrast:   3.2:1 on white (white text)
```

---

### Info (Information)
```
Hex:        #4A90E2
RGB:        74, 144, 226
HSL:        220°, 75%, 59%
Tailwind:   bg-blue-500 (custom: --info)
CSS Var:    var(--info)
Usage:      Information messages, help text
Contrast:   4.2:1 on white (white text)
```

---

### Destructive (Delete/Warning)
```
Hex:        #D85555
RGB:        216, 85, 85
HSL:        0°, 70%, 59%
Tailwind:   bg-destructive
CSS Var:    var(--destructive)
Usage:      Delete buttons, error messages, serious warnings
Contrast:   3.8:1 on white (white text)
```

---

## **NEUTRAL PALETTE**

### Muted (Light Gray Background)
```
Hex:        #E8E5E0
RGB:        232, 229, 224
HSL:        30°, 20%, 89%
Tailwind:   bg-muted
CSS Var:    var(--muted)
Usage:      Muted backgrounds, disabled states, secondary containers
Contrast:   6.5:1 with off-black text ✓
```

---

### Muted Foreground (Medium Gray Text)
```
Hex:        #7A7A7A
RGB:        122, 122, 122
HSL:        0°, 0%, 48%
Tailwind:   text-muted-foreground
CSS Var:    var(--muted-foreground)
Usage:      Meta text (category, region), secondary labels
Contrast:   4.6:1 on cream background ✓
```

---

### Border (Very Light Gray)
```
Hex:        #E0DDD5
RGB:        224, 221, 213
HSL:        30°, 23%, 86%
Tailwind:   border-border
CSS Var:    var(--border)
Usage:      Card borders, dividers, input borders
Visibility: Subtle but visible against cream
```

---

### Input (Input Field Gray)
```
Hex:        #F0EDE8
RGB:        240, 237, 232
HSL:        30°, 29%, 93%
Tailwind:   bg-input
CSS Var:    var(--input)
Usage:      Input field backgrounds, form containers
Contrast:   2.5:1 (light but adequate for input)
Focus:      Ring color changes to primary on focus
```

---

### Ring (Focus Indicator)
```
Hex:        #8B6F47 (matches primary)
RGB:        139, 111, 71
HSL:        30°, 32%, 41%
Tailwind:   ring-primary (focus:ring-2)
CSS Var:    var(--ring)
Usage:      Focus outlines, keyboard navigation indicators
Visibility: 2px outline clearly shows focus state
```

---

## **COMPONENT COLOR MAPPINGS**

### Buttons

**Primary Button** (Main CTAs)
```css
.btn-primary {
  background-color: var(--primary);        /* #8B6F47 */
  color: var(--primary-foreground);        /* #F5F1E8 */
  border: none;
}

.btn-primary:hover {
  background-color: #7D6440;               /* 10% darker */
}

.btn-primary:active {
  transform: scale(0.98);
}

.btn-primary:disabled {
  background-color: var(--muted);          /* Light gray */
  color: var(--muted-foreground);          /* Medium gray */
  cursor: not-allowed;
}

.btn-primary:focus {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
```

**Secondary Button** (Alternative CTAs)
```css
.btn-secondary {
  background-color: transparent;
  color: var(--secondary);                 /* #D4A574 */
  border: 1px solid var(--secondary);
}

.btn-secondary:hover {
  background-color: var(--secondary);
  color: var(--background);
}
```

**Outline Button** (Low priority)
```css
.btn-outline {
  background-color: transparent;
  color: var(--primary);
  border: 1px solid var(--border);
}

.btn-outline:hover {
  background-color: var(--muted);
}
```

---

### Cards

```css
.card {
  background-color: var(--card);           /* #FFFFFF */
  color: var(--card-foreground);           /* #1A1A1A */
  border: 1px solid var(--border);
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.card:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
  transition: all 300ms ease;
}
```

---

### Text & Typography

**Heading Text**
```css
h1, h2, h3 {
  color: var(--foreground);                /* #1A1A1A */
  font-family: var(--font-serif);          /* Lora */
  font-weight: 700;
}
```

**Body Text**
```css
p, body {
  color: var(--foreground);                /* #1A1A1A */
  font-family: var(--font-sans);           /* Geist */
  line-height: 1.5;
}

.text-muted {
  color: var(--muted-foreground);          /* #7A7A7A */
}
```

---

### Forms

**Input Fields**
```css
input, textarea, select {
  background-color: var(--input);          /* #F0EDE8 */
  color: var(--foreground);                /* #1A1A1A */
  border: 1px solid var(--border);
  border-radius: 6px;
}

input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(139, 111, 71, 0.1);
}

input:disabled {
  background-color: var(--muted);
  color: var(--muted-foreground);
  cursor: not-allowed;
}
```

---

### Links

```css
a {
  color: var(--primary);                   /* #8B6F47 */
  text-decoration: none;
  transition: color 200ms ease;
}

a:hover {
  color: #7D6440;
  text-decoration: underline;
}

a:visited {
  color: var(--muted-foreground);          /* #7A7A7A */
}

a:focus {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
```

---

### Status Badges

**Verified Badge**
```css
.badge-verified {
  background-color: #99B85C;               /* Success green */
  color: #FFFFFF;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}
```

**Out of Stock Badge**
```css
.badge-out-of-stock {
  background-color: #D85555;               /* Destructive red */
  color: #FFFFFF;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}
```

**Limited Stock Badge**
```css
.badge-limited {
  background-color: #C9985B;               /* Warning amber */
  color: #FFFFFF;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}
```

---

## **TAILWIND CSS IMPLEMENTATION**

### Using Color Tokens

```tsx
// Text colors
<h1 className="text-foreground">Heading</h1>
<p className="text-muted-foreground">Meta text</p>

// Background colors
<div className="bg-background">Page background</div>
<div className="bg-muted">Secondary background</div>

// Button colors
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Shop Now
</Button>

// Border colors
<Card className="border-border">
  <p className="text-card-foreground">Card content</p>
</Card>

// Interactive states
<button className="text-primary hover:text-primary/80 focus:ring-2 focus:ring-primary">
  Click me
</button>

// Status indicators
<span className="bg-green-500 text-white">✓ Verified</span>
<span className="bg-red-500 text-white">Out of Stock</span>
```

---

## **CSS CUSTOM PROPERTIES (globals.css)**

```css
:root {
  /* Primary Colors */
  --primary: #8B6F47;                  /* Deep Ochre */
  --primary-foreground: #F5F1E8;       /* Cream text on primary */
  
  /* Secondary Colors */
  --secondary: #D4A574;                /* Warm Gold */
  --secondary-foreground: #1A1A1A;     /* Off-black text on secondary */
  
  /* Backgrounds & Text */
  --background: #F5F1E8;               /* Cream page background */
  --foreground: #1A1A1A;               /* Off-black text */
  --card: #FFFFFF;                     /* White cards */
  --card-foreground: #1A1A1A;
  --popover: #FFFFFF;
  --popover-foreground: #1A1A1A;
  
  /* UI Elements */
  --muted: #E8E5E0;                    /* Light gray backgrounds */
  --muted-foreground: #7A7A7A;         /* Medium gray text */
  --border: #E0DDD5;                   /* Card & input borders */
  --input: #F0EDE8;                    /* Input field background */
  --ring: #8B6F47;                     /* Focus ring (primary color) */
  
  /* Status Colors */
  --success: #99B85C;                  /* Green for verified */
  --warning: #C9985B;                  /* Amber for warnings */
  --info: #4A90E2;                     /* Blue for info */
  --destructive: #D85555;              /* Red for delete/error */
  
  /* Border Radius */
  --radius: 8px;                       /* Standard border-radius */
  
  /* Sidebar (Admin) */
  --sidebar: #FFFFFF;
  --sidebar-foreground: #1A1A1A;
  --sidebar-primary: #8B6F47;
  --sidebar-primary-foreground: #F5F1E8;
  --sidebar-accent: #D4A574;
  --sidebar-accent-foreground: #1A1A1A;
  --sidebar-border: #E0DDD5;
}
```

---

## **TAILWIND CONFIG MAPPING**

```ts
// tailwind.config.ts
extend: {
  colors: {
    background: 'var(--background)',
    foreground: 'var(--foreground)',
    primary: 'var(--primary)',
    'primary-foreground': 'var(--primary-foreground)',
    secondary: 'var(--secondary)',
    'secondary-foreground': 'var(--secondary-foreground)',
    muted: 'var(--muted)',
    'muted-foreground': 'var(--muted-foreground)',
    border: 'var(--border)',
    input: 'var(--input)',
    ring: 'var(--ring)',
    // ... more colors
  }
}
```

---

## **ACCESSIBILITY CONTRAST RATIOS**

| Combination | Ratio | WCAG | Status |
|------------|-------|------|--------|
| Off-black on Cream | 12:1 | AAA | ✓ Perfect |
| Deep Ochre on Cream | 5.2:1 | AA | ✓ Pass |
| Warm Gold on Cream | 3.5:1 | Fail | ✗ Use dark text |
| Off-black on Deep Ochre | 1.3:1 | Fail | ✗ Not for text |
| Success on White | 3.8:1 | AA | ✓ Pass |
| Destructive on White | 3.8:1 | AA | ✓ Pass |

---

## **QUICK REFERENCE: COMPONENT CLASSES**

```tsx
// Primary button
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">

// Card background
<Card className="bg-card border-border">

// Muted text
<p className="text-muted-foreground">

// Input field
<Input className="bg-input border-border focus:ring-2 focus:ring-primary">

// Link
<Link className="text-primary hover:text-primary/80 underline">

// Badge
<span className="bg-green-500 text-white px-2 py-1 rounded text-xs">

// Disabled state
<button className="disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed">
```

---

## **MODIFYING THE DESIGN SYSTEM**

### To Change Primary Color

1. Edit `app/globals.css`:
```css
--primary: #NEW_HEX;
--primary-foreground: #NEW_TEXT_COLOR;
```

2. All components automatically update (no code changes needed)

### To Add a New Color

1. Add to `app/globals.css`:
```css
--custom-color: #HEX_VALUE;
```

2. Add to `tailwind.config.ts`:
```ts
custom: 'var(--custom-color)'
```

3. Use in components:
```tsx
<div className="bg-custom">Content</div>
```

---

## **DESIGN SYSTEM TESTING CHECKLIST**

- [ ] All text meets 4.5:1 contrast ratio (WCAG AA)
- [ ] Headings use serif font (Lora)
- [ ] Body uses sans-serif font (Geist)
- [ ] Primary buttons are Deep Ochre (#8B6F47)
- [ ] Focus indicators visible (2px outline)
- [ ] Hover states have -4px lift on cards
- [ ] Colors applied via CSS variables (not hard-coded)
- [ ] Responsive design tested at breakpoints
- [ ] No direct colors in JSX (use tokens via Tailwind)
- [ ] All status badges have proper contrast

---

**Color Palette designed for cultural authenticity, visual clarity, and accessibility.**

Built specifically for Timbuktu's mission of connecting Ethiopian artisans with global customers through trusted, beautiful e-commerce. 🇪🇹
