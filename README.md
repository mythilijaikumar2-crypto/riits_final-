# RITS Metal Craft - Project Documentation

Welcome to the **RITS Metal Craft** website project! This document completely explains the project structure, what technologies are used, and how everything is organized so that it is easily understandable for anyone (Easy aa understand aagura mathiri implement pannirukku).

## 🏢 Project Overview (Project Pathi)
This is a modern, responsive, and fast web application built for **RITS Metal Craft**, a leading metal fabrication company in Trichy. The website showcases their metal fabrication services, products, past projects, and provides a way for customers to contact them.

## 💻 Tech Stack (Enna Technologies Use Pannirukkom?)
- **Frontend Framework:** React 18
- **Build Tool:** Vite (For extremely fast development and building)
- **Language:** TypeScript (Adds strict typing to JavaScript for better code quality)
- **Styling:** Tailwind CSS (For utility-first, highly customizable, and responsive design)
- **Animations:** Framer Motion (Used for smooth page transitions and interactive elements)
- **Routing:** React Router DOM (Handles navigation between different pages smoothly without reloading)
- **SEO & Meta Tags:** React Helmet Async (Optimizes the site for search engines like Google)
- **Icons:** Lucide React (Clean and modern SVG icons)

## 📂 Folder Structure (Files Eppadi Organize Aagirukku?)

The core of the application lives inside the `/src` folder:

```text
src/
├── assets/          # Contains images, logos, and static files.
├── components/      # Reusable UI parts (Buttons, Navbar, Footer, etc.)
├── config/          # Global configuration settings if any.
├── hooks/           # Custom React hooks used across the app.
├── lib/             # Utility functions.
├── pages/           # Represents the individual web pages (Home, About, Contact).
│   └── services/    # Individual detail pages for specific services.
├── styles/          # Additional global styling files.
├── App.tsx          # The main layout and routing file.
├── index.css        # The main Tailwind CSS entry point.
└── main.tsx         # The root file where React mounts to the HTML.
```

## 🧩 Components Details (Mukkiyamaana Components)
Components are reusable blocks of code. Here are the key ones:
- **`Navbar.tsx` & `Footer.tsx`**: The top navigation bar and bottom footer, visible on all pages.
- **`FloatingSocialMenu.tsx`**: A sticky/floating menu mostly used to show quick contact options like WhatsApp.
- **`PremiumServiceCards`**: Custom designed, animated cards used to beautifully display the services.
- **`ProcessSection.tsx`**: Explains the step-by-step working process of the company.
- **`SEO.tsx`**: A unified component for handling SEO properties on different pages to rank well on Google.

## 📄 Pages (Website-la Irukka Pages)
All the routes go to these specific page files:
- **`Index.tsx`**: The Home Page (Landing page with video/hero section, service overview).
- **`About.tsx`**: Details about the company, its history, and mission.
- **`Products.tsx`**: Showcases the specific products they manufacture.
- **`Services.tsx`**: Lists all the different metal fabrication services.
- **`Projects.tsx`**: A gallery or list of completed projects to build trust.
- **`Contact.tsx`**: Contact forms, maps, and direct contact details.
- **Service Details (`/services/*`)**: Deep dive pages for Elevation Work, Aluminium Partition, Aluminium Windows, Steel Fabrication, SS Works, MS Works, General Fabrication, and Roofing Work.

## 🚀 How to Run the Project (Eppadi Run Pannunthu?)

Since this uses `Vite` and `npm`, running it locally is very simple:

1. **Install Dependencies:**
   Run this command in the terminal inside the project folder to install everything needed.
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   This will start the local server.
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   When you are ready to upload the website to a live server.
   ```bash
   npm run build
   ```

## ⚙️ Key Concepts (Mukkiyamaana Vishayangal)
- **Lazy Loading:** `React.lazy()` is used in `App.tsx` for importing pages. This means the browser only loads code for a page when the user specifically goes to that page. This makes the initial website load **extremely fast**.
- **Scroll to Top:** A small component in `App.tsx` ensures that whenever you navigate to a new page, the scroll bar resets to the top automatically.
- **Suspense:** Shows a loading spinner (loader) while the lazy-loaded pages are fetching.

---
*If you need to make changes, look primarily in the `src/pages` and `src/components` folders. Tailwind classes handle all the design directly in the `.tsx` files.*
