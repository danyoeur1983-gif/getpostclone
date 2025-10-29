
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      }
    },
  },
  plugins: [],
}
```
```
3. Commit
```

---

### **📝 STEP 2: CORE SRC FILES**

#### **File 4: src/main.jsx**
```
1. Click: src → main.jsx
2. Click pencil icon (✏️) to edit
3. Replace ALL content with:
