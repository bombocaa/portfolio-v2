# Portfolio V2

A modern, responsive developer portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 How to Clone and Run

### 1. Clone the Repository
```bash
git clone https://github.com/bombocaa/portfolio-v2.git
cd portfolio-v2
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

---

## 🖼️ How to Change or Add Images

All portfolio images are located in the `src/assets/` directory.

### 1. Profile Picture
- Place your image in `src/assets/home_profile.jpg`.
- Referenced in `src/components/HomeSection.tsx`:
  ```tsx
  import homeProfileImg from '../assets/home_profile.jpg'
  ```

### 2. Project Images
- Place your images inside `src/assets/`.
- Import and assign them in `src/data/portfolioData.ts`:
  ```typescript
  import projectMockup from '../assets/your-image.png'

  export const PROJECTS = [
    {
      num: '01',
      title: 'Your Project Title',
      image: projectMockup,
      desc: 'Description of your project.',
      tags: ['React.js', 'Node.js'],
      features: ['Feature 1', 'Feature 2'],
      link: 'https://yourproject.com',
      year: '2026',
    },
  ]
  ```

### 3. Resume PDF
- Place your updated resume PDF in `public/resume.pdf`.
- The Navbar Resume button links to `/resume.pdf`.

---