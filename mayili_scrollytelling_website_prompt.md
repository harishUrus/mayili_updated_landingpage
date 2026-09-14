# One-Shot Prompt: MAYILI Premium Scrollytelling E-Commerce Website

## Role

You are a world-class Frontend Architect and Creative Developer specializing in Awwwards-level interactive, cinematic, conversion-focused websites.

## Objective

Build a complete, production-ready, single-page scrollytelling e-commerce website for **MAYILI**, a premium **Ragi Choco Milkshake** brand.

The supplied MAYILI logo, product pouch images, product reference visuals, and uploaded video are the source of truth.

Do not redesign, distort, recolor, rewrite, or invent the MAYILI logo, packaging, product proportions, typography, or product information.

The website must feel premium, cinematic, natural, modern, and highly conversion-focused.

The final customer journey must be:

**SCROLL → DISCOVER MAYILI → EXPLORE PRODUCT → ADD TO CART → ORDER DIRECTLY ON WHATSAPP**

---

# 1. Technical Specification

Use the existing project architecture and preserve the current React/Vite/Tailwind implementation.

- React 19
- Vite
- TypeScript
- Tailwind CSS v4
- Motion
- GSAP
- Lucide React

Use only the dependencies already specified by the existing project.

Do not introduce unnecessary libraries.

The website must be responsive across desktop, tablet, and mobile.

---

# 2. MAYILI Product Data

Use this product as the primary commerce product:

```ts
export interface Product {
  id: string;
  name: string;
  packageSize: string;
  price: number;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}

export const MAYILI_PRODUCT: Product = {
  id: "mayili-ragi-choco-milkshake",
  name: "Mayili Ragi Choco Milkshake",
  packageSize: "100g",
  price: 130,
  tagline: "சுவை குறையாது. சத்து குறையாது.",
  description:
    "Traditional goodness. Rich chocolate taste. A modern way to enjoy ragi.",
  image: "USE_EXISTING_MAYILI_PRODUCT_IMAGE",
  features: []
};
```

Price:

**₹130 for 100g pouch**

Do not invent additional products, prices, discounts, offers, nutrition values, health claims, ingredients, certifications, or product specifications unless they are already present in the supplied MAYILI source material.

If a value is unavailable, use a clearly marked configuration placeholder.

---

# 3. Brand Direction

Brand:

**MAYILI**

Product:

**MAYILI RAGI CHOCO MILKSHAKE**

Existing English brand line:

**RICH NUTRITION. REAL GOODNESS.**

Primary Tamil product tagline:

**சுவை குறையாது. சத்து குறையாது.**

Use the tagline as a strong conversion-oriented statement.

Additional messaging can communicate:

- Chocolate taste
- Ragi-based goodness
- Convenient modern consumption
- Premium product experience

Do not make unsupported medical or nutritional promises.

---

# 4. Visual Direction

Create a cinematic premium food-product experience.

Primary visual language:

- Dark cocoa
- Chocolate brown
- Dark charcoal
- Warm cream
- Natural green accents
- Golden/yellow highlights
- Beige
- Subtle glass surfaces
- Glossy reflections
- Soft volumetric lighting
- Deep shadows
- Premium product photography

Avoid making the website overly green.

The MAYILI product pouch must remain the brightest, sharpest, and most important visual object.

Avoid:

- Football/sports identity
- Generic SaaS layouts
- Cartoon visuals
- Cheap ecommerce styling
- Excessive gradients
- Overly bright UI
- Excessive bounce animations
- Generic stock-food aesthetics

---

# 5. Hero Scrollytelling Experience

Use the uploaded video:

**Camera_movement_for_product_video.mp4**

Use it for BOTH:

1. Scroll-driven hero background
2. Section showcase where appropriate

The video must feel integrated into the website rather than appearing as a normal video player.

The hero should behave like a cinematic freeze-frame sequence controlled by scrolling.

Narrative:

1. Start in a dark chocolate environment.
2. Introduce ragi grains/powder and natural ingredient particles.
3. Introduce almonds, cashews, pumpkin seeds and sunflower seeds through cinematic imagery/placeholders.
4. Introduce chocolate pieces/flakes.
5. Introduce creamy milk movement.
6. Reveal the MAYILI pouch.
7. Build depth around the product.
8. Push slowly toward the product.
9. Increase lighting and visual clarity.
10. Reach a dramatic product freeze-frame.
11. Transition naturally into the content sections.

The product must never become visually lost inside the animation.

---

# 6. Scroll-Driven Video Logic

Implement the scroll-driven video with a `video.seeking` guard to prevent rapid currentTime assignments and visible frame tearing.

Map scroll progress from the beginning of the page toward the point where the footer is approximately 20% of the viewport from the top.

Use smooth interpolation between scroll position and video currentTime.

The video should:

- Remain visually smooth
- Seek only when appropriate
- Avoid frame tearing
- Respond naturally to fast and slow scrolling
- Pause at the final cinematic frame when the sequence reaches its peak

Use the existing video reference and do not replace it with a generic video.

---

# 7. Ingredient Visual System

Create reusable ingredient visual layers.

Required ingredient imagery placeholders:

- Ragi grains
- Ragi powder
- Almonds
- Cashews
- Pumpkin seeds
- Sunflower seeds
- Dark chocolate
- Milk

The implementation should provide clean drop-in image placeholders so the actual ingredient images can be added later.

Do not generate fake ingredient photography.

When images are not supplied, maintain the layout using placeholder containers without breaking the composition.

Use:

- Depth
- Scale
- Opacity
- Rotation
- Parallax
- Blur-to-sharp transitions
- Subtle floating
- Motion blur during movement
- Sharp focus at the final freeze frame

---

# 8. Navigation

Create a fixed transparent glass navigation.

Brand:

**MAYILI logo**

Navigation:

- OUR STORY
- PRODUCT
- INGREDIENTS
- WHY MAYILI
- CONTACT

Primary action:

**ORDER NOW**

The navigation should:

- Use backdrop blur
- Become slightly stronger on scroll
- Maintain excellent contrast
- Stay minimal
- Match the cinematic visual system

The logo must use the supplied MAYILI logo.

Do not recreate the logo.

---

# 9. Content Sections

The website is ONE long scrolling page.

## 01 OUR STORY

Introduce MAYILI with a premium brand narrative.

Focus on:

- Ragi
- Chocolate
- Familiar goodness
- Modern presentation
- Product experience

Keep copy concise and premium.

Do not invent company history.

---

## 02 THE PRODUCT

Display the actual MAYILI pouch prominently.

Show:

**MAYILI RAGI CHOCO MILKSHAKE**

**100g**

**₹130**

Tagline:

**சுவை குறையாது. சத்து குறையாது.**

English brand line:

**RICH NUTRITION. REAL GOODNESS.**

CTA:

**ADD TO CART**

Secondary CTA where appropriate:

**ORDER ON WHATSAPP**

Use cinematic product motion and subtle parallax.

---

## 03 INGREDIENTS

Create an immersive ingredient section.

Show image placeholders for:

- Ragi
- Almonds
- Cashews
- Pumpkin seeds
- Sunflower seeds
- Chocolate
- Milk

Each ingredient can enter the composition using scroll-triggered movement.

Use the actual ingredient information supplied by the user or packaging.

If an ingredient detail is not confirmed, do not invent a description.

---

## 04 WHY MAYILI

Create a premium value-proposition section.

Use only verified product attributes from the supplied MAYILI materials.

Possible structure:

- Ragi-based product
- Chocolate taste
- Convenient format
- Premium presentation
- Everyday product experience

Do not add unsupported health claims.

Do not invent nutritional numbers.

Do not invent certifications.

---

# 10. Customer Feedback Section

Include customer feedback as clean text-based testimonials.

Do NOT use WhatsApp screenshots because they contain personal conversations.

Display reviews as:

> "CUSTOMER REVIEW"

with customer name only if it is actually provided.

Use elegant glass cards.

Animation:

- Fade
- Slight upward movement
- Subtle blur-to-sharp
- Staggered reveal

Do not fabricate customer quotes.

If reviews are not available, create clearly marked placeholder review content.

---

# 11. ADD TO CART → DIRECT WHATSAPP

Implement a simple, conversion-focused ordering flow.

Customer journey:

**ADD TO CART → REVIEW CART → ORDER ON WHATSAPP**

After clicking **ADD TO CART**:

- Add the product to the cart.
- Update cart count.
- Animate the cart icon/badge.
- Show subtle confirmation.
- Keep the customer on the same page.
- Do not navigate to a separate store page.

If the same product is added again, increase quantity instead of creating a duplicate item.

---

# 12. Cart

Create a glassmorphism cart drawer.

Desktop:

Right-side slide-in cart panel.

Mobile/tablet:

Full-width or near-full-width slide-in drawer.

Display:

- Product image
- Product name
- 100g
- ₹130 unit price
- Quantity controls
- Subtotal
- Remove button
- Total items
- Total amount

Quantity:

**−  1  +**

Primary CTA:

**ORDER ON WHATSAPP**

Secondary:

**CONTINUE SHOPPING**

Optional:

**CLEAR CART**

Cart totals must be calculated dynamically.

Example:

1 × ₹130 = ₹130

2 × ₹130 = ₹260

3 × ₹130 = ₹390

---

# 13. Cart Persistence

Persist the cart using `localStorage`.

The cart must survive:

- Page refresh
- Navigation
- Temporary UI state changes

Store only the required cart data:

```ts
{
  productId,
  productName,
  image,
  price,
  quantity,
  subtotal
}
```

Derive totals dynamically rather than storing totals as permanent values.

---

# 14. Direct WhatsApp Ordering

There must NOT be a separate checkout page.

There must NOT be a long customer information form.

When the customer clicks:

**ORDER ON WHATSAPP**

generate a WhatsApp URL with the complete cart order.

Configuration:

```ts
const WHATSAPP_NUMBER = "YOUR_MAYILI_WHATSAPP_NUMBER";
```

Do not invent the WhatsApp number.

Use URL encoding correctly.

Example message:

```text
Hello MAYILI 👋

I would like to place an order.

Order:

Mayili Ragi Choco Milkshake
100g × 2 = ₹260

Total Items: 2
Total Amount: ₹260

Please confirm availability and delivery details.

Thank you!
```

Open WhatsApp directly in a new browser tab/window.

Do not falsely show:

- Payment Successful
- Order Confirmed
- Order Accepted
- Payment Completed

The website has only prepared the order message.

After opening WhatsApp, optionally display:

**YOUR ORDER DETAILS ARE READY IN WHATSAPP.**

Keep the cart intact unless the customer manually clears it.

---

# 15. Purchase Thank-You / Feedback Message

Create a post-purchase WhatsApp-ready message that the business can send to customers.

Use this tone:

**🙏 MAYILI-ஐ தேர்வு செய்ததற்கு நன்றி!**

**நீங்கள் வாங்கியது ஒரு milkshake.  
எங்களுக்கு கிடைத்தது ஒரு வாய்ப்பு.**

**சுவை எப்படி இருந்தது?  
Product எப்படி இருந்தது?  
எதை இன்னும் சிறப்பாக செய்யலாம்?**

**உங்கள் honest feedback-ஐ WhatsApp-ல் சொல்லுங்கள்.**

**உங்கள் feedback →  
எங்கள் improvement →  
இன்னும் சிறந்த MAYILI.**

**நன்றி. உங்கள் feedback-ஐ நாங்கள் உண்மையாக மதிக்கிறோம்.**

Keep this as a customer follow-up message, not an automatic fake order confirmation.

---

# 16. Product Showcase Section

Reuse the uploaded product video in a dedicated section showcase.

The showcase should support:

- Cinematic camera movement
- Product focus
- Parallax
- Slow reveal
- Depth
- Reflections
- Scroll-controlled transitions
- Freeze-frame moments

Do not make it look like a standard embedded video.

---

# 17. Footer

Create a premium dark glassmorphism footer.

Include:

- MAYILI logo
- Brand statement
- Navigation
- Contact
- Social links
- WhatsApp ordering CTA

Contact and social values must remain clearly marked placeholders unless actual values are supplied.

Do not invent phone numbers, email addresses, Instagram handles, Facebook pages, addresses, or URLs.

Final CTA:

**DISCOVER MAYILI**

or

**ORDER MAYILI**

---

# 18. Animation System

Use GSAP and Motion for:

- Scroll reveals
- Text transitions
- Parallax
- Product scale
- Ingredient movement
- Opacity
- Blur
- Rotation
- Cart drawer
- Cart badge
- Add-to-cart feedback
- Button interactions
- Section transitions
- Footer reveal

Use smooth cinematic easing.

Animations should feel:

- Premium
- Controlled
- Physical
- Cinematic

Avoid:

- Excessive bouncing
- Cartoon motion
- Fast UI transitions
- Random floating elements
- Over-animation

---

# 19. Glassmorphism System

Use:

- `backdrop-filter: blur(...)`
- Dark translucent backgrounds
- Thin translucent borders
- Soft shadows
- Subtle highlights
- Low-opacity surfaces

Use glassmorphism consistently for:

- Navbar
- Cart
- Product cards
- Review cards
- CTA surfaces
- Footer

Do not make the glass effect too bright or opaque.

---

# 20. Responsive Behaviour

Desktop:

- Large cinematic composition
- Wide product presentation
- Side cart drawer
- Large typography

Tablet:

- Reduced spacing
- Adapted product scale
- Touch-friendly controls

Mobile:

- Product remains dominant
- Typography scales cleanly
- Video remains properly cropped
- Cart becomes a mobile drawer
- Add-to-cart and WhatsApp buttons remain thumb-friendly
- Ingredient layers must not overflow horizontally
- Maintain smooth scrolling

Test for:

- 320px+
- 375px
- 390px
- 430px
- Tablet
- Desktop
- Large desktop

---

# 21. Accessibility

Implement:

- Semantic HTML
- Accessible button labels
- Keyboard-accessible quantity controls
- Proper form-free cart interaction
- Visible focus states
- Meaningful alt text
- Do not communicate important information through color alone
- Reduced-motion support where practical

---

# 22. Performance

Prioritize:

- Optimized video handling
- Efficient scroll listeners
- `requestAnimationFrame` where required
- Avoid unnecessary React re-renders
- Lazy-load non-critical imagery
- Avoid excessive DOM particle elements
- Use CSS transforms for animated elements
- Maintain smooth 60fps interaction where hardware permits

The scroll-driven video must include a seeking guard to avoid rapid frame updates.

---

# 23. Component Architecture

Organize the project into reusable components such as:

```text
components/
  Navbar
  Hero
  ScrollVideo
  ProductShowcase
  ProductDetails
  IngredientSection
  WhyMayili
  Reviews
  AddToCart
  CartDrawer
  WhatsAppOrder
  Footer
```

Keep product data and cart logic modular.

The architecture should support adding more MAYILI products later without rewriting the cart system.

---

# 24. Final Conversion Architecture

The entire website should guide the visitor through:

**ATTENTION**

MAYILI cinematic hero

↓

**INTEREST**

Ragi + chocolate + ingredient storytelling

↓

**DESIRE**

Premium product reveal

↓

**TRUST**

Product information + real customer feedback

↓

**ACTION**

ADD TO CART

↓

**LOW FRICTION PURCHASE**

ORDER ON WHATSAPP

The website should feel like a premium brand experience while keeping the purchase path extremely simple.

---

# 25. Final Quality Requirement

The final implementation must be production-ready.

Do not provide pseudo-code.

Do not leave core functionality unfinished.

Do not invent missing business information.

Use placeholders only where actual MAYILI information has not been supplied.

Preserve the existing MAYILI visual identity and supplied product assets.

The result should feel like a premium Awwwards-level cinematic food website, not a generic ecommerce template.

Most importantly:

**MAYILI PRODUCT DISCOVERY + CINEMATIC SCROLL EXPERIENCE + CART + DIRECT WHATSAPP ORDERING must work together as one seamless experience.**
