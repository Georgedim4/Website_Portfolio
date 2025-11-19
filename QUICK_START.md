# Γρήγορος Οδηγός Εκκίνησης

## 1️⃣ Εγκατάσταση (5 λεπτά)

```bash
# Εγκαταστήστε τα dependencies
npm install
# ή αν χρησιμοποιείτε pnpm
pnpm install
```

## 2️⃣ Τοπική Δοκιμή (1 λεπτό)

```bash
# Ξεκινήστε τον development server
npm run dev
```

Ανοίξτε το `http://localhost:5173` στο browser σας.

## 3️⃣ Προσαρμογή (10-15 λεπτά)

Ανοίξτε το αρχείο `client/src/pages/Home.tsx` και τροποποιήστε:

### A. Το όνομά σας
```jsx
// Γραμμή ~32
<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
  Hi, I'm a <span className="text-primary">Website Developer</span>
</h1>
```

### B. Τις δεξιότητές σας
```jsx
// Γραμμές ~12-16
const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "TypeScript"],
  tools: ["Git", "VS Code", "Figma", "npm", "Webpack", "Vite"],
  concepts: ["Responsive Design", "REST APIs", "Component Architecture", "Version Control"]
};
```

### C. Τα projects σας
```jsx
// Γραμμές ~18-38
const projects = [
  {
    title: "Your Project Title",
    description: "Your project description",
    tech: ["React", "Tailwind CSS"],
    link: "https://your-project-link.com"
  },
  // ... περισσότερα
];
```

### D. Τα social links σας
```jsx
// Γραμμές ~159-170
<a href="https://github.com/YOUR_USERNAME" target="_blank">
  GitHub
</a>
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">
  LinkedIn
</a>
<a href="mailto:your-email@example.com">
  Email
</a>
```

## 4️⃣ Build για Production (2 λεπτά)

```bash
# Δημιουργήστε το production build
npm run build
```

Τα αρχεία θα δημιουργηθούν στο φάκελο `dist/`

## 5️⃣ Ανάρτηση (5-10 λεπτά)

### Επιλογή A: Netlify (Συνιστώμενο - Δωρεάν)

1. Πάτε στο [netlify.com](https://netlify.com)
2. Κάντε Sign Up
3. Πατήστε "Add new site" → "Deploy manually"
4. Σύρετε το φάκελο `dist/` στο Netlify
5. ✅ Έτοιμο! Το site σας είναι live!

### Επιλογή B: Vercel (Δωρεάν)

1. Πάτε στο [vercel.com](https://vercel.com)
2. Κάντε Sign Up
3. Πατήστε "Add New..." → "Project"
4. Εισάγετε το GitHub repository
5. ✅ Έτοιμο! Το site σας είναι live!

### Επιλογή C: GitHub Pages (Δωρεάν)

1. Δημιουργήστε repository `username.github.io`
2. Ανεβάστε τα αρχεία από το `dist/` folder
3. ✅ Το site σας είναι live στο `https://username.github.io`

## 🎨 Αλλαγή Χρωμάτων

Ανοίξτε `client/src/index.css` και τροποποιήστε τις CSS variables:

```css
:root {
  --primary: 217 100% 50%;  /* Αλλάξτε το blue σε άλλο χρώμα */
  --background: 0 0% 0%;    /* Background color */
  --foreground: 0 0% 100%;  /* Text color */
}
```

Χρησιμοποιήστε [HSL Color Picker](https://www.google.com/search?q=hsl+color+picker) για να βρείτε τα χρώματα που θέλετε.

## 📱 Δοκιμή σε Mobile

```bash
# Ανοίξτε το DevTools (F12)
# Πατήστε Ctrl+Shift+M (ή Cmd+Shift+M στο Mac)
# Δοκιμάστε σε διάφορα μεγέθη οθόνης
```

## ❓ Συχνές Ερωτήσεις

**Q: Πώς αλλάζω το logo;**
A: Ανοίξτε `client/src/const.ts` και αλλάξτε το `APP_LOGO`

**Q: Πώς προσθέτω νέα section;**
A: Αντιγράψτε μια υπάρχουσα section στο `Home.tsx` και τροποποιήστε την

**Q: Πώς αλλάζω το font;**
A: Ανοίξτε `client/index.html` και προσθέστε ένα Google Font link

**Q: Το site δεν φαίνεται σωστά σε mobile;**
A: Ελέγξτε ότι χρησιμοποιείτε τα responsive classes (md:, lg:, etc.)

## 🚀 Επόμενα Βήματα

1. ✅ Προσαρμόστε το site με τα δικά σας στοιχεία
2. ✅ Δοκιμάστε το τοπικά
3. ✅ Build το project
4. ✅ Ανεβάστε το σε ένα hosting service
5. ✅ Μοιραστείτε το link με τους recruiter!

---

**Χρειάζεστε βοήθεια;** Ανατρέξτε στο `README.md` για περισσότερες πληροφορίες.
