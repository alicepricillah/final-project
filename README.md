# Softmax fumigation 

## Live Demo
## [https://final-project-a8tedfrqv-alice-osiekos-projects.vercel.app]

## Project Overview

This project is a recreation of a provided desktop e-commerce design, transformed into a high-performance landing page for the **SoftMax Fumigation** service. The core objective was to achieve pixel-perfect layout replication for the LG breakpoint while demonstrating technical proficiency in **React** and **Tailwind CSS**. The site emphasizes organic pest control, safety, and modern design principles.

---

## Brand Identity

The brand identity centers on trust, health, and effective, non-toxic solutions.

### Color System

| Role | HEX Code | Usage Rationale |
| :--- | :--- | :--- |
| **Primary (Brand)** | `#007C3D` | A deep **Forest Green** representing nature, organic products, and safety. Used for headlines and key branding elements. |
| **Secondary (Support)** | `#4A8AD3` | A soft **Sky Blue** used for trust, cleanliness, and supporting text/links. |
| **Accent (CTA)** | `#FF9900` | A bright **Orange** providing high contrast for crucial Call-to-Action (CTA) buttons, ensuring WCAG AA compliance. |
| **Neutral Dark (Text)** | `#1F2937` | Dark charcoal grey for high-readability body text, softer than pure black. |
| **Neutral Light (Background)** | `#F9FAF8` | Near-white background providing an airy, clean base for content. |

### Typography
* **Headings (H1, H2):** Tailwind's default sans-serif stack was used for maximum cross-browser readability and performance, coupled with `font-extrabold` for visual impact.
* **Body:** Default sans-serif for clean, accessible reading.

---

## Design Decisions

### Layout Adherence (LG Breakpoint)

* **Spacing Implementation:** Spacing (margins, padding, and gaps) was measured using browser DevTools against the provided image. Tailwind's standard spacing scale (e.g., `p-20`, `lg:gap-8`) was used to implement these precise measurements.
* **Grid Systems:** The site utilizes flexible **CSS Grid** (e.g., `grid-cols-1 lg:grid-cols-2`) for all major sections (Features, Detailed Service) to maintain the exact two-column proportions of the original design.

### Creative Departures

* **Content Strategy:** The e-commerce theme was replaced with a focused service-based marketing strategy emphasizing a **Value Proposition** (organic, non-harmful pest control) over product sales.
* **MD Breakpoint Design:** The MD (Tablet) breakpoint was designed to be an intermediary between mobile and desktop:
    * **Navigation:** Uses the mobile hamburger toggle but keeps utility icons visible.
    * **Grid:** The `TargetedSolutions` section collapses from 4 columns to **2 columns** at the `sm` breakpoint but maintains **4 columns** at the `md` breakpoint to maximize screen usage on tablets.

---

## Component Architecture

The application adheres to the component structure required, promoting reusability and separation of concerns:

* **`layout/`**: Contains static wrappers (`Header`, `Footer`, `Navigation`).
* **`sections/`**: Contains major, unique page blocks (`Hero`, `Features`, `TargetedSolutions`, `DetailedService`).
* **`common/`**: Contains high-reusability components:
    * **`Button.jsx`**: Implemented with `primary`, `secondary`, and `outline` variants using prop types for robust type checking.
    * **`Card.jsx`**: Used throughout `TargetedSolutions.jsx` to ensure consistent presentation of service options.
    * **`SectionWrapper.jsx`**: A reusable component implemented to ensure consistent `max-w-7xl` container usage and vertical spacing across the site.

---

## Performance Optimizations

| Optimization | Implementation Detail | Rationale |
| :--- | :--- | :--- |
| **Lazy Loading** | Implemented `loading="lazy"` attribute on all images outside of the immediate viewport (e.g., in `Features.jsx` and `Card.jsx`). | Improves initial load time and meets Lighthouse requirements (Performance 85+). |
| **Memoization** | Used `React.memo` on large components (`Hero.jsx`, `Features.jsx`, `DetailedService.jsx`). | Prevents unnecessary re-renders when parent components update unrelated props. |
| **Semantic HTML** | Ensured correct use of `<header>`, `<nav>`, `<main>`, `<footer>`, `<h1>`, and `<h2>` for proper document outline. | Improves SEO and meets Accessibility requirements (95+). |
| **Accessibility** | Added `alt` text to all images and `aria-expanded`/`aria-controls` to the mobile navigation toggle. | Supports keyboard navigation and screen readers. |

---

## Image Credits

* **Hero Background:** [Source and Photographer Name]
* **Features Side Image:** [Source and Photographer Name]
* **Targeted Solutions (4 images):** [Source and Photographer Name]
* **Detailed Service Image:** [Source and Photographer Name]

*(Replace [Source and Photographer Name] with proper attribution from Unsplash/Pexels.)*

---

## Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [Your Repository URL]
    cd softmax-fumigation
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```

## Technologies Used
* **React:** v18+
* **Vite:** v5 (Build Tool)
* **Tailwind CSS:** v3+
* **Dependencies:** `autoprefixer`, `postcss`, `prop-types`

## Challenges & Solutions

| Challenge | Solution |
| :--- | :--- |
| **1. NPM/npx Environment Issues** | Manually created `tailwind.config.js` and `postcss.config.js` files and directly configured the imports in `src/index.css`, bypassing standard initialization commands. |
| **2. Responsive Content Ordering** | Used Tailwind's `order-first` and `lg:order-last` utilities to ensure the text is prioritized (top) on mobile/tablet screens, but the layout is maintained (left/right) on desktop. |
| **3. Complex CTA Styling** | Developed a versatile `Button.jsx` component to handle three distinct variants (primary, secondary, outline) and different sizes (`sm`, `md`, `lg`), improving code reusability. |

## Future Improvements

1.  **Dark Mode:** Implement a dark mode feature using Tailwind's `dark:` utility and a simple React Context.
2.  **Animations:** Add micro-interactions and scroll-triggered animations (e.g., using Framer Motion) to enhance the visual polish.
3.  **Form Validation:** Implement client-side validation for the CTA/Contact forms.