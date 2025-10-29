import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How is PostClone different from ChatGPT or other AI tools?",
      answer: "PostClone is specifically trained on LinkedIn content and offers two unique features: (1) Engagement prediction BEFORE you publish, and (2) True voice cloning that sounds like YOU, not generic AI. ChatGPT creates generic content. PostClone creates YOUR content."
    },
    {
      question: "How accurate is the engagement predictor?",
      answer: "Our AI analyzes millions of LinkedIn posts to predict engagement with 80-85% accuracy. We show you predicted likes, comments, shares, and the best posting time. No other tool offers this."
    },
    {
      question: "How does voice cloning work?",
      answer: "Upload 3-5 of your LinkedIn posts. Our AI analyzes your writing style, tone, sentence structure, and common phrases. Then it generates posts that sound exactly like you wrote them. 92% voice match accuracy."
    },
    {
      question: "Can I try it before paying?",
      answer: "Yes! Free plan includes 5 posts per month with full access to voice cloning and engagement prediction. Upgrade to Pro anytime for unlimited posts."
    },
    {
      question: "What if I don't like it?",
      answer: "7-day free trial. No credit card required. If you're not happy, cancel anytime. We also offer a 30-day money-back guarantee on Pro plans."
    },
    {
      question: "Will LinkedIn ban my account for using AI?",
      answer: "No. PostClone generates content that YOU review and edit before posting. You're using AI as a writing assistant, not a bot. LinkedIn encourages using AI tools responsibly."
    },
    {
      question: "Do I need to provide my LinkedIn password?",
      answer: "Absolutely not! PostClone never asks for your LinkedIn password. You simply copy-paste the generated content into LinkedIn yourself. Your account stays 100% secure."
    },
    {
      question: "How long does it take to generate a post?",
      answer: "Most posts are generated in 5-10 seconds. The engagement prediction adds another 2-3 seconds. Total time: under 15 seconds from topic to ready-to-post content."
    }
  ]

  return (
    <div className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about PostClone
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors duration-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <span className="text-2xl text-blue-600 font-bold flex-shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Email us at <a href="mailto:support@getpostclone.com" className="text-blue-600 hover:text-blue-700 font-semibold">support@getpostclone.com</a> and we'll get back to you within 24 hours.
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
