
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  )
}

export default App
```
```
4. Commit
```

---

### **📝 STEP 3: UI COMPONENTS**

#### **File 7: src/components/ui/Button.jsx**
```
1. Navigate: src → components → ui → Button.jsx
2. Edit
3. Replace with:
