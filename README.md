# NextMutation (NextPosts)

NextMutation is a small demo app showcasing server actions and optimistic UI for creating and viewing posts (mutations) using the Next.js App Router. It focuses on adding posts, responsive layout, and a polished UI rather than full production features.

---

## What it does

- Create posts (image + title + content) using Next.js server actions.
- Optimistic updates for likes and immediate UI feedback.
- Browse content via Home, Feed, Explore and Profile pages.
- Mobile-first responsive UI with card-style posts and subtle animations.
- Local lightweight data layer (SQLite) for prototyping.

---

## Key UI / UX features

- Modern navbar with Home / Feed / Explore / Profile / New Post.
- Card-based posts grid with image, author, timestamp, content and like button.
- Create-post form styled as a card with clear CTAs and validation feedback.
- Mobile-friendly layout and simple entrance animations.

---

## Tech stack

- Next.js (App Router)
- React (server + client components)
- TypeScript
- Tailwind CSS + plain CSS for small utilities
- SQLite (local, via `lib/posts.ts`) for demo persistence

---
## Screenshots

![Home Page](https://github.com/user-attachments/assets/59defbf3-fac4-47f0-8541-ad37fac23bcf)

---
## Getting started

Prerequisites: Node.js 18+, npm/yarn/pnpm

1. Install

```bash
git clone <repository-url>
cd nextjsmutation
npm install
```

2. Run development server

```bash
npm run dev
```

Open http://localhost:3000 to view the app.

---

## Project structure (relevant files)

```
nextjsmutation/
├─ app/
│  ├─ page.tsx            # Home (recent posts)
│  ├─ feed/page.tsx       # All posts feed
│  ├─ explore/page.tsx    # Explore UI
│  ├─ profile/page.tsx    # Profile placeholder
│  ├─ new-post/page.tsx   # Create post (form)
│  └─ globals.css         # App styles
├─ components/
│  ├─ PostForm.tsx
│  ├─ posts.tsx           # Post card list + optimistic updates
│  ├─ header.tsx          # Navbar
│  └─ like-icon.tsx
├─ actions/
│  └─ postsActions.ts     # Server actions for create/like
├─ lib/
│  └─ posts.ts            # SQLite data layer
├─ public/
└─ README.md
```

---


