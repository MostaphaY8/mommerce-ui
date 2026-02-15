📦 Overview

Mommerce UI is a reusable ecommerce component library designed to:

Provide modular ecommerce UI components

Separate reusable logic from demo implementation

Allow flexible product card rendering

Support scalable architecture for future growth

The project is structured as a UI library (lib) + demo store (demo) inside the same Vite project.

mommerce-ui/
│
├── src/
│ ├── lib/ # Reusable ecommerce UI library
│ │ ├── components/ # UI components
│ │ │ ├── product/
│ │ │ ├── cart/
│ │ │ ├── layout/
│ │ │ ├── checkout/
│ │ │
│ │ ├── context/ # Global state (CartContext)
│ │ ├── hooks/ # Reusable hooks (future ready)
│ │ ├── types/ # Shared TypeScript types
│ │ └── index.ts # Library exports
│ │
│ ├── demo/ # Demo ecommerce implementation
│ │ ├── pages/
│ │ ├── data/
│ │ └── App.tsx
│ │
│ ├── main.tsx
│ └── index.css
│
├── vite.config.ts
├── package.json
└── README.md
🎯 Core Concepts
1️⃣ Library First Architecture

Everything reusable lives inside:

src/lib/

The demo store simply consumes the library.

This allows future:

NPM publishing

Design system extraction

Multi-store usage

White-label projects

2️⃣ Cart System (Context API)

Cart logic is centralized inside:

lib/context/CartContext.tsx

Features:

Add to cart

Open mini cart automatically

Edit quantity

Remove items

Click outside to close

Alert confirmation

Usage:

import { useCart } from "../lib"

const { addToCart } = useCart()

3️⃣ Layout System

The Layout component:

lib/components/layout/Layout.tsx

Includes:

Sticky Navbar

Responsive design

Mobile burger menu

Dropdown selector

Product card switcher

Layout wraps the demo app and controls UI mode selection.

4️⃣ Product Card Variants

Two available product card designs:

Default Card

Image

Name

Price

Select color

Select size

Add to cart

Simple Card

Image

Name

Price

Color preview

Add button

Switch between them via Navbar dropdown.

5️⃣ Responsive Design

Grid behavior:

📱 Mobile → 2 products per row

💻 Desktop → 4 products per row

Navbar:

Sticky

Desktop dropdown

Mobile collapsible menu

Mini Cart:

Slide-in panel

Closes on backdrop click

Fully responsive

🛠 Tech Stack

React

TypeScript

Vite

TailwindCSS

Context API

🚀 Getting Started
Install dependencies
npm install

Run development server
npm run dev

📦 How To Use The Library Internally

Wrap your app with CartProvider:

<CartProvider>
  <Layout>
    {(selectedCard) => (
      <YourProducts />
    )}
  </Layout>
  <MiniCart />
</CartProvider>

Import components from:

import {
ProductCard,
ProductCardSimple,
MiniCart,
Layout,
CartProvider
} from "../lib"

🔥 Current Features

Global cart state

Mini cart auto-open

Editable quantity

Color selection

Size selection

Remove item

Responsive layout

Card type switching

Clean separation between lib and demo

🧠 Design Philosophy

Mommerce UI follows:

Reusability over duplication

Separation of concerns

Scalable folder structure

UI-driven architecture

Type-safe development

Modular components

📌 Git Workflow

Recommended branches:

main → stable
dev → active development
feature/\* → feature branches

Example:

git checkout dev
git checkout -b feature/new-component

🔮 Future Roadmap

Product filtering & sorting

PLP abstraction layer

Checkout module

Persistent cart (localStorage)

Animations

Dark mode

Storybook integration

NPM package publishing

CI/CD pipeline

Design tokens system

🧩 Long-Term Vision

Mommerce UI aims to evolve into:

A production-ready ecommerce UI framework

A reusable design system

A component-driven commerce architecture

A potential SaaS storefront toolkit

👨‍💻 Author

Work in progress — actively developing.

📜 License

Currently private / WIP.
