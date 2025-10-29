export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to continue to PostClone</p>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-yellow-800">
            🚧 Authentication coming soon! This is a placeholder page.
          </p>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
          Sign In (Coming Soon)
        </button>

        <p className="text-center text-gray-600 text-sm mt-6">
          Don't have an account? <a href="/" className="text-blue-600 hover:text-blue-700 font-semibold">Get Started</a>
        </p>
      </div>
    </div>
  )
}
