
export default function Button({ children, variant = 'primary', size = 'md', onClick, className = '', type = 'button' }) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center'
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50',
    outline: 'border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}
```
```
4. Commit
```

---

### **📝 STEP 4: LANDING PAGE COMPONENTS**

I see you have **hero.jsx** (lowercase). Let's update that:

#### **File 8: src/components/landing/hero.jsx** (or Hero.jsx)
```
1. Navigate: src → components → landing → hero.jsx
2. Edit
3. Replace ALL content with:
