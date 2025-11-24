# 🌸 Audace Florale — Frontend (Angular)

Audace Florale is a modern front-end application built with **Angular 17+**, using the latest Angular features:
- **Standalone Components**
- **Signals**
- **RxJS (smart streams & async flows)**
- **TailwindCSS**
- **TypeScript strict mode**

This frontend powers:
- the **public shop experience** (bouquet showcase, contact/quote request form)
- the **admin dashboard** (secure access, CRUD flowers, media management, request viewer)

It is fully connected to the backend API built in Hexagonal Architecture (Spring Boot 3).

---

# 🧱 Frontend Architecture

The frontend follows a **clean folder structure**, separating:
- **core** (auth, guards, interceptors, services)
- **features** (admin, catalog, requests...)
- **shared** reusable components
- **ui** components styled using Tailwind

```
src/
│
├── app/
│   ├── core/                 → Singleton services, guards, interceptors
│   │   ├── auth/
│   │   ├── services/
│   │   ├── interceptors/
│   │   └── guards/
│   │
│   ├── features/             → Business pages
│   │   ├── catalog/
│   │   ├── requests/
│   │   ├── admin/
│   │   │   ├── bouquets/
│   │   │   ├── uploads/
│   │   │   └── dashboard/
│   │   └── auth/
│   │
│   ├── shared/               → Reusable UI components
│   │   ├── components/
│   │   └── utils/
│   │
│   ├── ui/                   → Design system (buttons, modals…)
│   │
│   └── app.config.ts         → Global providers & bootstrap
│
└── assets/                   → Images, icons, styles
```

---
### ✔️ Standalone components  
No NgModule — all components, pages, and features are standalone.

### ✔️ Signals  
Used for:
- auth state (currentUserSignal)  
- bouquet list state  
- admin dashboard reactive states  

### ✔️ RxJS  
Used for:
- API calls  
- async composition  
- route data resolvers  
- form handling  

---

# ✨ Features

### 🏪 Public Shop
- Dynamic bouquet list  
- Bouquet details  
- Contact/quote request form  
- Light & responsive interface  

---

### 🔐 Authentication (Admin Only)
- Login page  
- JWT stored in **HttpOnly cookie** (auto sent with `credentials: 'include'`)  
- Auth guard  
- Signal-based auth refresh  
- Auto-redirect to dashboard  
- Logout  

---

### 📊 Admin Dashboard
- View all customer requests  
- Manage bouquets: create / edit / delete  
- Manage images (upload, delete)  
- Safe UI feedback (toasts, confirmations, loaders)  
- Protected routes  
- Modern table views  

---

### 🖼 Media Management
- Drag & drop upload (optional module)  
- File name sanitization  
- Preview before upload  
- Delete support  
- Linked to backend image storage  

---

# 🚀 Tech Stack

| Category | Tools |
|----------|--------|
| **Framework** | Angular 17–19 |
| **UI** | TailwindCSS |
| **State** | Angular Signals |
| **Reactivity** | RxJS |
| **HTTP** | Angular HttpClient |
| **Auth** | JWT HttpOnly Cookies |
| **Build** | Vite or Angular CLI |
| **Deployment** | Nginx / Docker |

---

# 🔗 Communication with Backend

All requests use:

```
ts
{ withCredentials: true }
```

# 🧪 Form Handling

Forms use:
	•	Reactive Forms
	•	Custom validators
	•	Signals for UI states (loading, error, success)

# 🌐 API Endpoints

The frontend consumes:

Auth
	•	/api/auth/login
	•	/api/auth/logout
	•	/api/auth/me

Bouquets
	•	/api/bouquets
	•	/api/bouquets/:id

Admin
	•	/api/bouquets (POST, PUT, DELETE)
	•	/api/uploads
	•	/api/requests

  # 🧰 Scripts

Install:
  ```
npm install
```
Run:
```
npm run start
```
Build:
```
npm run build
```
---

🗺 Roadmap
	•	Add cart system
	•	Bouquet filters (color, size, price)
	•	Image cropping
	•	Notification system for admin
	•	Order timeline UI
	•	Payment (Stripe) integration

  







