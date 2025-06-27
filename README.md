# FitAI

FitAI is a modern web application designed to bridge Africa's digital skills gap by empowering young people with practical, future-ready technology skills. Built with [Next.js](https://nextjs.org), Tailwind CSS, and a component-driven architecture, FitAI delivers a responsive, accessible, and visually engaging experience.

## ✨ Features

- **Responsive UI:** Built with Tailwind CSS and custom components for seamless experience across devices.
- **Skills Gap Awareness:** Highlights the challenges and solutions for youth employability in Africa.
- **Benefits Section:** Carousel and cards to showcase the platform's unique value.
- **Accessible:** Semantic HTML and accessible components.

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/biyapx/fitai.git
cd fitai
npm install
# or
yarn
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)
- [shadcn/ui](https://ui.shadcn.com/) (for UI components)
- [pnpm](https://pnpm.io/) (recommended package manager)

## 📁 Project Structure

```
src/
  components/    # Reusable UI components (Navbar, Solution, Benefits, etc.)
  assets/        # Static images and assets
  app/           # Next.js app directory (pages, layout, globals.css)
```

## 🖌️ Customization

- **Colors & Theme:** Easily adjust theme colors in `globals.css` using CSS variables and Tailwind's theme system.
- **Content:** Update the content in `src/components/solution.jsx`, `Benefits.jsx`, etc., to match your needs.
