
import { useState } from 'react'
import Button from '../ui/Button'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="absolute inset-0 opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-blue-600 font-semibold text-sm">
              🎯 The Only AI with Engagement Prediction
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Stop Guessing.<br />
            <span className="text-blue-600">Know Your Post Will Perform</span><br />
            Before You Hit Publish.
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The only LinkedIn AI that <span className="font-semibold text-gray-900">predicts engagement</span> + writes in <span className="font-semibold text-gray-900">YOUR voice</span>
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
              <Button type="submit" size="lg">
                Get Early Access
              </Button>
            </div>
            {submitted && (
              <p className="text-green-600 text-sm mt-2">✓ Thanks! You're on the waitlist.</p>
            )}
          </form>

          <p className="text-gray-500 text-sm">
            Join 500+ creators who stopped posting blindly
          </p>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="text-left mb-4">
                <p className="text-gray-600 text-sm mb-2">Your LinkedIn Post:</p>
                <p className="text-gray-800 text-base">
                  "I've spent the last 6 months testing AI tools for LinkedIn. Here's what actually works..."
                </p>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-900 font-bold text-2xl">Engagement Score</p>
                  <div className="text-5xl font-bold text-green-600">85/100</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-2xl font-bold text-blue-600">120-150</p>
                    <p className="text-sm text-gray-600">Predicted Likes</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-2xl font-bold text-purple-600">15-20</p>
                    <p className="text-sm text-gray-600">Comments</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-2xl font-bold text-green-600">Tue 9am</p>
                    <p className="text-sm text-gray-600">Best Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```
```
4. Commit
