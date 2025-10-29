export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">PostClone</h1>
            <button className="text-gray-700 hover:text-gray-900">Sign Out</button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h2>
          <p className="text-xl text-gray-600 mb-8">
            Your AI-powered LinkedIn content studio
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-blue-800 text-lg mb-4">
              🚧 Dashboard features coming soon!
            </p>
            <p className="text-blue-600">
              We're building the post generator, voice analyzer, and engagement predictor.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2">Post Generator</h3>
              <p className="text-gray-600 text-sm">Coming soon</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-3">🗣️</div>
              <h3 className="font-bold text-lg mb-2">Voice Analyzer</h3>
              <p className="text-gray-600 text-sm">Coming soon</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold text-lg mb-2">Engagement Predictor</h3>
              <p className="text-gray-600 text-sm">Coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
