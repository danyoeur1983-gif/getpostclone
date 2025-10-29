
export default function Features() {
  const features = [
    {
      icon: '🎯',
      title: 'Engagement Score Predictor',
      description: 'See your predicted likes, comments, and best posting time BEFORE you publish. No more posting and praying.',
      highlight: 'No competitor has this'
    },
    {
      icon: '🗣️',
      title: 'True Voice Clone',
      description: 'Upload 3-5 posts. AI learns YOUR style, not generic templates. 92% voice match accuracy.',
      highlight: 'Sounds like you, not a robot'
    },
    {
      icon: '⚡',
      title: 'Unlimited Posts',
      description: 'Generate as many posts as you need. No limits. No caps. Just $39/month.',
      highlight: 'Competitors limit you'
    }
  ]

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why PostClone Beats Every Competitor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MagicPost and Taplio generate generic content. PostClone predicts if it will actually work.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl t
