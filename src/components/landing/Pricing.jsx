
import Button from '../ui/Button'

export default function Pricing() {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for you
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
            <p className="text-gray-600 mb-6">Try before you commit</p>
            
            <div className="mb-6">
              <span className="text-5xl font-bold text-gray-900">$0</span>
              <span className="text-gray-600 text-lg">/month</span>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">✓</span>
                <span className="text-gray-700">5 posts per month</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">✓</span>
                <span className="text-gray-700">Voice cloning (1 profile)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">✓</span>
                <span className="text-gray-700">Engagement prediction</span>
              </li>
              <li className="flex items-start text-gray-400">
                <span className="mr-2 text-xl">✗</span>
                <span>Post scheduling</span>
              </li>
              <li className="flex items-start text-gray-400">
                <span className="mr-2 text-xl">✗</span>
                <span>Post history</span>
              </li>
            </ul>

            <Button variant="outline" className="w-full">
              Start Free
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-2xl border-2 border-blue-500 relative transform hover:scale-105 transition-transform duration-300">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
              Most Popular
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
            <p className="text-blue-100 mb-6">For serious LinkedIn creators</p>
            
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">$39</span>
              <span className="text-blue-100 text-lg">/month</span>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2 text-xl">✓</span>
                <span className="text-white font-semibold">Unlimited posts</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2 text-xl">✓</span>
                <span className="text-white">Advanced voice cloning</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2 text-xl">✓</span>
                <span className="text-white">Engagement prediction</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2 text-xl">✓</span>
                <span className="text-white">Post scheduling</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2 text-xl">✓</span>
                <span className="text-white">Unlimited history</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2 text-xl">✓</span>
                <span className="text-white">Priority support</span>
              </li>
            </ul>

            <Button variant="secondary" className="w-full bg-white text-blue-600 hover:bg-gray-100">
              Get Started
            </Button>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-2">
            🎯 <span className="font-semibold">7-day free trial</span> • No credit card required • Cancel anytime
          </p>
          <p className="text-gray-500 text-sm">
            30-day money-back guarantee on all Pro plans
          </p>
        </div>
      </div>
    </div>
  )
}
```
```
5. Scroll down
6. Click "Commit changes"
7. Click "Commit changes" in popup
