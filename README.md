# Personal Portfolio Website

Ένα responsive personal portfolio website για Website Developers, κατασκευασμένο με React, Tailwind CSS και shadcn/ui.

## Χαρακτηριστικά

- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Dark theme με modern aesthetics
- ✅ Hero section με εισαγωγή
- ✅ Skills section με κατηγοριοποιημένες δεξιότητες
- ✅ Projects showcase με 3 παραδείγματα
- ✅ Contact section με social media links
- ✅ Smooth scrolling navigation
- ✅ Accessibility optimized
- ✅ Χωρίς watermark

## Τεχνολογίες

- **React 19** - JavaScript library
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool
- **TypeScript** - Type-safe JavaScript

## Εγκατάσταση Τοπικά

### Προαπαιτούμενα

- Node.js 18+ ή pnpm
- npm ή pnpm package manager

### Βήματα

1. **Κλωνοποίηση ή λήψη του κώδικα**

```bash
cd portfolio-website
```

2. **Εγκατάσταση dependencies**

```bash
npm install
# ή
pnpm install
```

3. **Εκκίνηση development server**

```bash
npm run dev
# ή
pnpm dev
```

Το website θα είναι διαθέσιμο στο `http://localhost:5173`

## Build για Production

```bash
npm run build
# ή
pnpm build
```

Τα αρχεία θα δημιουργηθούν στο φάκελο `dist/`

## Προσαρμογή του Website

### 1. Αλλαγή Προσωπικών Στοιχείων

Ανοίξτε το αρχείο `client/src/pages/Home.tsx` και τροποποιήστε:

```jsx
// Hero section
<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
  Hi, I'm a <span className="text-primary">Website Developer</span>
</h1>

// Προσθέστε το όνομά σας εδώ
```

### 2. Ενημέρωση Skills

Στο ίδιο αρχείο, τροποποιήστε το `skills` object:

```jsx
const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "TypeScript"],
  tools: ["Git", "VS Code", "Figma", "npm", "Webpack", "Vite"],
  concepts: ["Responsive Design", "REST APIs", "Component Architecture", "Version Control"]
};
```

### 3. Ενημέρωση Projects

Τροποποιήστε το `projects` array:

```jsx
const projects = [
  {
    title: "Your Project Title",
    description: "Project description here",
    tech: ["React", "Tailwind CSS", "API"],
    link: "https://your-project-link.com"
  },
  // ... περισσότερα projects
];
```

### 4. Ενημέρωση Social Links

Στο Contact section, ενημερώστε τα links:

```jsx
<a href="https://github.com/your-username" target="_blank">
  GitHub
</a>
<a href="https://linkedin.com/in/your-profile" target="_blank">
  LinkedIn
</a>
<a href="mailto:your-email@example.com">
  Email
</a>
```

### 5. Αλλαγή Χρωμάτων (Θέμα)

Ανοίξτε το `client/src/index.css` και τροποποιήστε τις CSS variables:

```css
@layer base {
  :root {
    --background: 0 0% 0%;
    --foreground: 0 0% 100%;
    --primary: 217 100% 50%;
    /* ... άλλα χρώματα */
  }
}
```

## Deployment

### Επιλογή 1: Netlify (Δωρεάν)

1. Δημιουργήστε λογαριασμό στο [netlify.com](https://netlify.com)
2. Συνδέστε το GitHub repository σας
3. Ρυθμίστε τα build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

### Επιλογή 2: Vercel (Δωρεάν)

1. Δημιουργήστε λογαριασμό στο [vercel.com](https://vercel.com)
2. Εισάγετε το repository σας
3. Vercel θα ανιχνεύσει αυτόματα τις ρυθμίσεις
4. Deploy!

### Επιλογή 3: GitHub Pages

1. Δημιουργήστε ένα repository με όνομα `username.github.io`
2. Ανεβάστε τον κώδικα
3. Ενεργοποιήστε GitHub Pages στις ρυθμίσεις
4. Το website θα είναι διαθέσιμο στο `https://username.github.io`

### Επιλογή 4: Δικό σας Hosting

1. Build το project: `npm run build`
2. Ανεβάστε τα αρχεία από το φάκελο `dist/` στο hosting σας
3. Ρυθμίστε τον web server να χρησιμοποιεί το `index.html` για όλες τις διαδρομές

## Δομή Φακέλου

```
portfolio-website/
├── client/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── pages/       # Page components
│   │   ├── components/  # Reusable components
│   │   ├── contexts/    # React contexts
│   │   ├── hooks/       # Custom hooks
│   │   ├── lib/         # Utility functions
│   │   ├── App.tsx      # Main app component
│   │   ├── main.tsx     # Entry point
│   │   └── index.css    # Global styles
│   └── index.html       # HTML template
├── package.json         # Dependencies
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # This file
```

## Troubleshooting

### Πρόβλημα: "Module not found"

**Λύση:** Εγκαταστήστε τα dependencies:
```bash
npm install
```

### Πρόβλημα: Styles δεν εμφανίζονται

**Λύση:** Βεβαιωθείτε ότι το Tailwind CSS είναι σωστά ρυθμισμένο:
```bash
npm run build
```

### Πρόβλημα: Build αποτυγχάνει

**Λύση:** Διαγράψτε τα cache files:
```bash
rm -rf node_modules dist
npm install
npm run build
```

## Scripts

```bash
# Development
npm run dev          # Ξεκινάει dev server

# Production
npm run build        # Builds για production
npm run preview      # Preview το build

# Linting
npm run lint         # ESLint check
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Ελεύθερο για προσωπική χρήση και εκπαιδευτικούς σκοπούς.

## Support

Για ερωτήσεις ή προβλήματα, δημιουργήστε ένα issue στο GitHub repository.

## Credits

- Κατασκευάστηκε με React, Tailwind CSS και shadcn/ui
- Icons από Lucide React
- Build tool: Vite

---

**Καλή επιτυχία με το portfolio σας!** 🚀
