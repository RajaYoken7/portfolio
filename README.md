# 🌌 Raja Yoken S S R — Frontend Developer & Creative Engineer

[![Live Site](https://img.shields.io/badge/Live-Demo-cyan?style=for-the-badge&logo=netlify&logoColor=white)](https://6a29aaad86e40b00084a3de9--raja-yoken-portfolio.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-RajaYoken7-violet?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RajaYoken7)
[![Next.js](https://img.shields.io/badge/Next.js%2016-black?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React%2019-blue?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind%20v4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

Welcome to my portfolio! I am a **Frontend Developer** specializing in engineering immersive, high-performance web experiences. My work is focused on the intersection of **cutting-edge interactivity, cinematic motion, and pixel-perfect design**. 

This portfolio showcases not only my projects but also my engineering philosophy: **crafting digital experiences that defy gravity** without compromising on frame rates, accessibility, or user experience.

---

## 🚀 Deployed & Live Demo

Check out the live website deployed on Netlify:  
👉 **[raja-yoken-portfolio.netlify.app](https://6a29aaad86e40b00084a3de9--raja-yoken-portfolio.netlify.app/)**

---

## 🛠️ Tech Stack & Architecture

- **Core Framework:** Next.js (App Router) & TypeScript
- **State & UI Rendering:** React 19 (concurrent features, lazy loading, and suspense)
- **Styling:** Tailwind CSS v4 & Tailwind Merge (for dynamic class name composition)
- **3D & Graphics:** Spline 3D (`@splinetool/react-spline`) & Three.js (custom WebGL shader particle surfaces)
- **Animations:** Framer Motion (perspective scrolls, layout animations, exit states)
- **Backend Integrations:** Next.js API routes & Nodemailer for secure SMTP email dispatch

---

## ⚡ Key Engineering & UI Features

### 1. Interactive 3D Spline Robot Background
- **What it does:** Renders a fully interactive, reactive 3D robot model in the hero section that responds to mouse movements.
- **Optimization:** Built with a custom React lazy-wrapper that uses Framer Motion's `useInView`. If the model is scrolled more than 20% out of view, the Spline instance automatically unmounts, saving GPU cycles and preventing mobile battery drain.

### 2. Custom WebGL Dotted Wave Surface (`Three.js`)
- **What it does:** The contact section background features an elegant, flowing double-sine wave particle mesh.
- **Under the hood:** Coordinates particle Y-positions dynamically in the render loop using mathematical sine waves:
  $$\text{Position}_y = \sin((\text{grid}_x + \text{time}) \times 0.3) \times 50 + \sin((\text{grid}_y + \text{time}) \times 0.5) \times 50$$
- **Optimization:** Features custom light/dark theme tracking. Disposes all geometry, materials, and WebGL contexts during React component unmounting, completely avoiding GPU memory leaks.

### 3. State-Bypassing 3D Image Spotlight (`ImageSpotlight`)
- **What it does:** Images reveal a sharp foreground mask overlaid on a blurred background based on mouse cursor position, while tilting in 3D.
- **Optimization:** To avoid triggering React virtual DOM diffing 60 times a second (which causes major frame rate drops), the component bypasses React state entirely. Mouse coordinates are set directly to CSS custom properties (`--mouse-x` and `--mouse-y`) on the DOM element's inline style, keeping rendering at a solid **60 FPS**.

### 4. Fluid Project Accordion (`InteractiveSelector`)
- **What it does:** A sleek, micro-animated accordion that replaces traditional grids, expanding selected items dynamically.
- **Why it's there:** Replaced heavy spotlight cards to deliver instantaneous visual feedback without paint delays or layout thrashing.

---

## 🧠 What I Learned During This Project

Building this project pushed my knowledge of web performance and creative engineering forward. Here are the core technical insights I gained:

### 💡 React State Reconciliation vs. Direct DOM Manipulation
I learned that high-frequency mouse-tracking animations (like the image spotlight effect) are highly inefficient when bound to React states. Every mouse movement would trigger a re-render. 
By binding event handlers to **CSS Custom Variables** and modifying the `.style` object directly via `useRef`, the browser delegates the mask recalculation to the GPU compositor. This kept the UI buttery smooth.

### 💡 Garbage Collection & Memory Management in Three.js
WebGL contexts do not garbage-collect automatically when React components unmount. Initial implementations of the dotted surface caused the CPU/GPU usage to stack up when navigating or resizing.
I learned to implement rigorous cleanup inside React's `useEffect`:
```typescript
return () => {
  cancelAnimationFrame(animationId);
  scene.traverse((object) => {
    if (object instanceof THREE.Points) {
      object.geometry.dispose();
      object.material.dispose();
    }
  });
  renderer.dispose();
};
```

### 💡 Responsive 3D Styling & Interaction
Scaling 3D canvases and coordinates across mobile and desktop requires responsive perspective calculations. I implemented dynamically calculated dimension boundaries for scale factors and rotations depending on viewport queries.

---

## 📁 Featured Projects Showcased

1. **Dell G15 Ultimate Edition** 💻  
   High-end gaming laptop showcase with interactive 3D product configurations.  
   🔗 [Live Project Link](https://6a28658718f0eb7cf358c4e1--fantastic-daifuku-be5a75.netlify.app/)

2. **BMW M4 CS Experience** 🏎️  
   Immersive automotive exploration experience featuring high-performance UI and fluid layout motion.

3. **Cyberpunk Developer Portfolio** ⌨️  
   Neon-soaked developer environment featuring glitch effects, terminal themes, and terminal commands.

4. **Elite Gym Platform** 🏋️‍♂️  
   Premium fitness platform showcasing dynamic schedule tracking, trainer profiles, and energy-focused UI design.

5. **AI SaaS Dashboard** 🤖  
   Dashboard utilizing real-time chart streams, generative cards, and clean visual structures.

---

## ⚙️ Getting Started (Local Development)

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/RajaYoken7/portfolio.git
cd portfolio
npm install
```

### 2. Environment Setup
To enable the secure contact form, create a `.env.local` file in the root directory:
```env
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-gmail-app-password
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📬 Let's Connect

- **GitHub:** [@RajaYoken7](https://github.com/RajaYoken7)
- **LinkedIn:** [Raja Yoken](https://linkedin.com)
- **Email:** rajayoken072@gmail.com

*Developed with 💙 by Raja Yoken S S R*
