# 🛍️ WhatBytes Frontend Assignment

A fully functional e-commerce frontend built with **Next.js + Tailwind CSS**, implementing product listing, filtering, cart management, and dynamic routing.

## 🚀 Live Demo

🔗 **Live URL:** https://whatbytes-assignment-seven-chi.vercel.app/

## 📌 Features

### 🏠 Home Page

* Responsive product grid (desktop/tablet/mobile)
* Sidebar filters:

  * Category filtering
  * Price range filtering
* Search functionality (real-time filtering)
* Product cards with:

  * Image
  * Title
  * Price
  * Rating ⭐
  * Add to Cart button

### 🔍 Filtering & Search

* Combined filtering:

  * Search + Category + Price
* URL-based filters
  Example:

  ```
  ?category=electronics&price=0-1000
  ```
* Dynamic state syncing with UI

### 🛒 Cart System

* Add / Remove products
* Quantity management
* Persistent cart using **localStorage**
* Cart badge in header

### 📦 Product Detail Page

* Dynamic routing using Next.js
  `/product/[id]`
* Product details:

  * Image
  * Title
  * Price
  * Description
  * Category
* Add to Cart functionality

### 🎨 UI & UX

* Fully responsive design
* Clean and reusable components
* Hover effects & interactive UI
* Empty state handling (No products found)

## 🧠 Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **State Management:** React Context API
* **Icons:** Lucide React

## 📂 Project Structure

```
/app
  /cart
  /product
    /[productId]
/components
  /cart
  /filters
  /layout
  /product
  /filters
/lib
/context
/hooks
```

## ⚙️ Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/kurocodes/whatbytes-assignment.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open in browser:

```
http://localhost:3000
```

## 🧩 Implementation Highlights

* Feature-based commits followed as instructed
* URL-driven filtering system
* Reusable component architecture
* Clean separation of UI and logic
* LocalStorage-based persistence for cart

## 📜 Assignment Requirements Covered

* Product listing page with filters and search
* Product detail page with dynamic routing
* Cart functionality with persistent state
* Responsive UI matching provided design
* Deployment on Vercel

## ✨ Future Improvements

* Add authentication system
* Backend integration (real API)
* Wishlist feature
* Advanced sorting (price, popularity)
* Pagination or infinite scroll


## 🙌 Acknowledgement

This project was built as part of the **WhatBytes Frontend Assignment**.
