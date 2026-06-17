# 🏥 OM Pharmacy — Rebuilt in React + Tailwind CSS + Framer Motion

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-FF00C1?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Sanskrit](https://img.shields.io/badge/Sanskrit-सर्वे_सन्तु_निरामयाः-0a6e4f?style=for-the-badge)](https://en.wikipedia.org/wiki/Sarve_bhavantu_sukhinah)

OM Pharmacy is a premium, state-of-the-art single-page web application rebuilt from the ground up using a modern React framework. It retains the signature emerald-mint color palette of the brand while elevating the user experience through glassmorphic interfaces, interactive particle mesh networks, custom cursor springs, and fluid physics-based transitions.

> *“सर्वे सन्तु निरामयाः” (May all be free from illness and live in good health)* — our sacred commitment to the community.

---

## 🌟 Key Features

*   🌌 **Multiverse Particle Canvas**: The hero section features an interactive node constellation that drifts organically and actively repels away from user mouse interactions.
*   💫 **Trailing Cursor Spring**: A customized dual-circle lag-free trailing pointer that scales, expands, and coordinates smoothly as you explore the page.
*   ⏳ **Scroll-to-View Counters**: Dynamic viewport counters that trigger custom `requestAnimationFrame` count-ups for pharmacy metrics once scrolled into view.
*   🎭 **Double-Border Grow Highlight**: Custom benefit cards that dynamically draw both a top horizontal border and a left vertical outline concurrently on hover.
*   🎛️ **Custom Swipe Slider**: A drag-interactive testimonials carousel built on top of Framer Motion's physics-driven gestural offsets and exit transitions.
*   📝 **State-Driven Forms**: Contact modules utilizing loader feedback and animated submission completion indicators.
*   🌿 **Curated Section Gradients**: Transitioning shades of emerald, mint, jade, and soft sage greens for every distinct block, eliminating raw white spaces.
*   📱 **Responsive Mobile Drawer**: High-end glass navigation headers that shrink on scroll and slide down smoothly on smaller displays.

---

## 🚀 Tech Stack

*   **Core Framework**: [React 19](https://react.dev/)
*   **Build Bundler**: [Vite 8](https://vite.dev/)
*   **Styling Engine**: [Tailwind CSS v3](https://tailwindcss.com/) with PostCSS & Autoprefixer
*   **Animation Library**: [Framer Motion v12](https://www.framer.com/motion/)
*   **Icons Library**: [Lucide React](https://lucide.dev/)
*   **Deployment Assets**: Minified production bundles compiling CSS and JS.

---

## 📁 Repository Structure

```directory
OM-Pharmacy/
├── dist/                    # Compiled production build assets
├── public/
│   └── assets/              # Static logo & pharmacy interior photography
├── src/
│   ├── components/          # Reusable UI component modules
│   │   ├── About.jsx        # Cascading features & double images
│   │   ├── BackToTop.jsx    # Scroll threshold top indicator
│   │   ├── Contact.jsx      # Form spinner & embedded google maps
│   │   ├── CustomCursor.jsx # Spring-following pointer
│   │   ├── Footer.jsx       # Newsletter form & Sanskrit blessings
│   │   ├── GlobalCanvas.jsx # Low-density background node drift
│   │   ├── Hero.jsx         # Multiverse mesh & continuous marquee ticker
│   │   ├── Medicines.jsx    # Dark glass categories with custom Lungs SVG
│   │   ├── MultiverseCanvas.jsx # Interactive mouse-repelling hero network
│   │   ├── Navbar.jsx       # Viewport-responsive header
│   │   ├── Services.jsx     # Card overlays & rotational hovers
│   │   ├── Testimonials.jsx # Drag-to-swipe guest quotes
│   │   ├── Tips.jsx         # Ice mint cards with image zoom
│   │   ├── TrustStats.jsx   # RAF count-up nodes
│   │   ├── WhatsAppFab.jsx  # Pulse animated whatsapp widget
│   │   └── WhyChooseUs.jsx  # Top & left border expansion wrappers
│   ├── App.css              # Cleared entry styling
│   ├── App.jsx              # Section assembly grid
│   ├── index.css            # Custom base rules, marqee tickers, & drift keys
│   └── main.jsx             # StrictMode renderer
├── tailwind.config.js       # Custom green theme extending tokens
├── vanilla-archive/         # Legacy static source code archive
└── vite.config.js           # Server compiler instructions
```

---

## 💻 Local Installation & Setup

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/GauravGauri/OM_Pharmacy.git
    cd OM_Pharmacy
    ```

2.  **Install Package Dependencies**:
    Make sure you have Node.js and npm installed on your system.
    ```bash
    npm install
    ```

3.  **Run in Development Mode**:
    Launch Vite's hot-module-reloading development server locally.
    ```bash
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

4.  **Build Production Assets**:
    Compile and optimize CSS/JS bundle files inside the `/dist` directory.
    ```bash
    npm run build
    ```

5.  **Preview the Local Build**:
    Preview the compiled output bundle locally.
    ```bash
    npm run preview
    ```

---

## 📌 Metadata & Contacts

*   **Location**: New Tehri, Uttarakhand, India
*   **Phone/WhatsApp**: +91 9997103864
*   **Developer Email**: iamag.ntt@gmail.com
