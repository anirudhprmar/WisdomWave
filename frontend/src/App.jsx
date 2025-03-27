import { FaqItem } from "../components/Home/FaqItem"
// import { DemoVideo } from "../components/Video/DemoVideo";

function App() {

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
    
    <header className="bg-transparent static top-0 z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-12">
            <div className="text-2xl font-bold text-blue-700">WisdomWave</div>
            <nav>
              <ul className="hidden md:flex gap-8">
                <li className="text-gray-700 hover:text-blue-700 transition-colors cursor-pointer font-medium">About</li>
                <li className="text-gray-700 hover:text-blue-700 transition-colors cursor-pointer font-medium">Demo</li>
                <li className="text-gray-700 hover:text-blue-700 transition-colors cursor-pointer font-medium">Pricing</li>
              </ul>
            </nav>
        </div>

        <div>
          <ul className="flex items-center gap-6">
            <li className="text-gray-700 hover:text-blue-700 transition-colors cursor-pointer font-medium">Login</li>
            <li><button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium shadow-md">Get Started</button></li>
          </ul>
        </div>
      </div>
    </header>

    <main className="container mx-auto px-6">
    <section className="py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Inspiration at Your Fingertips
              <span className="block text-blue-700 mt-2">Daily Wisdom Journey</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Discover endless motivation through scrollable, Instagram-style quote reels that inspire and uplift your day.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-700 text-white px-5 py-2 rounded-lg text-lg hover:bg-blue-800 transition-colors font-medium">
                Start Your Journey
              </button>
              <button className="border-2 border-blue-700 text-blue-700 px-5 py-2 rounded-lg text-lg hover:bg-blue-50 transition-colors font-medium">
                Watch Demo
              </button>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
                  <span className="text-blue-700 text-sm">5K+</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center">
                  <span className="text-green-700 text-sm">4.9★</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">Trusted by 5,000+ users worldwide</p>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 h-[400px]">
            {/* <Image
              src="/meditation.svg"
              alt="Wisdom and meditation illustration"
              fill
              className="object-contain"
              priority
            /> */}
          </div>
        </div>
      </section>

      <section className="py-16 relative z-10">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Why WisdomWave?</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="transform hover:scale-105 transition-transform duration-300">
          <div className="h-full p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold ml-4 text-gray-900">Endless Inspiration</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Immerse yourself in an infinite stream of wisdom:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                Curated collection of powerful quotes
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                Instagram-style smooth scrolling experience
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                Save and share your favorites
              </li>
            </ul>
          </div>
        </div>

        <div className="transform hover:scale-105 transition-transform duration-300">
          <div className="h-full p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold ml-4 text-gray-900">Daily Motivation</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Start each day with fresh inspiration:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                Daily hand-picked quotes
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                Personalized recommendations
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                Goal-focused categories
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="py-16">
  <div className="max-w-4xl mx-auto px-6">
    <div className="text-center mb-12">
      <h3 className="text-3xl font-bold text-gray-900 mb-4">See WisdomWave in Action</h3>
      <p className="text-xl text-gray-600">Experience our seamless quote discovery journey</p>
    </div>
    <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-100">
      <div className="aspect-video w-full">
        {/* <DemoVideo/> */}
      </div>
    </div>
    <div className="mt-8 text-center">
      <p className="text-gray-600">Join thousands of users finding daily inspiration through WisdomWave</p>
    </div>
  </div>
</section>


<section className=" py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen flex items-center min-w-full ">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h4 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Wisdom Journey</h4>
      <p className="text-xl text-gray-600">Select the plan that best fits your inspirational needs</p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* Monthly Plan */}
      <div className="transform hover:scale-105 transition-transform duration-300">
        <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-colors">
          <div className="text-center mb-8">
            <h5 className="text-2xl font-bold text-gray-900 mb-4">Monthly Journey</h5>
            <p className="text-4xl font-bold text-blue-700">
              $5.99
              <span className="text-base text-gray-600">/month</span>
            </p>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Unlimited Quote Access</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Daily New Quotes</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Cancel Anytime</span>
            </li>
          </ul>
          <button className="w-full bg-blue-700 text-white py-3 px-8 rounded-xl font-semibold hover:bg-blue-800 transition-colors shadow-lg">
            Start Monthly Plan
          </button>
        </div>
      </div>

      {/* Lifetime Plan */}
      <div className="transform hover:scale-105 transition-transform duration-300">
        <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-purple-200 hover:border-purple-300 transition-colors relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <span className="bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full">
              Best Value
            </span>
          </div>
          <div className="text-center mb-8">
            <h5 className="text-2xl font-bold text-gray-900 mb-4">Lifetime Access</h5>
            <p className="text-4xl font-bold text-purple-700">
              $99
              <span className="text-base text-gray-600">/one-time</span>
            </p>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Everything in Monthly Plan</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Exclusive Premium Collections</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Priority Support</span>
            </li>
          </ul>
          <button className="w-full bg-purple-700 text-white py-3 px-8 rounded-xl font-semibold hover:bg-purple-800 transition-colors shadow-lg">
            Get Lifetime Access
          </button>
        </div>
      </div>
    </div>

    <div className="text-center mt-12">
      <p className="text-gray-600">All plans include a 7-day free trial. No credit card required.</p>
    </div>
  </div>
</section>

<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-6">
    <h5 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h5>
    <div className="max-w-2xl mx-auto space-y-4">
      {[
        {
          question: "How often are new quotes added?",
          answer: "New quotes are added daily to keep your inspiration fresh and engaging."
        },
        {
          question: "Can I save my favorite quotes?",
          answer: "Yes, premium users can create custom collections of their favorite quotes and organize them by themes."
        },
        {
          question: "Is there a free trial?",
          answer: "Yes, we offer a 7-day free trial for new users to experience all premium features without any commitment."
        },
        {
          question: "How can I access my quotes offline?",
          answer: "Premium members can download quotes for offline access and save their favorites locally on their devices."
        }
      ].map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  </div>
</section>
    </main>

    <footer className="bg-gray-900 text-white py-12 mt-20">
  <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-4 gap-8 mb-8">
      <div>
        <h6 className="text-lg font-semibold mb-4">WisdomWave</h6>
        <p className="text-gray-400 text-sm">Daily inspiration for your personal growth journey.</p>
      </div>
      <div>
        <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
        </ul>
      </div>
      <div>
        <h6 className="text-lg font-semibold mb-4">Support</h6>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h6 className="text-lg font-semibold mb-4">Connect</h6>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
          <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-800 pt-8 text-center">
      <p className="text-gray-400">&copy; 2025 WisdomWave. All rights reserved.</p>
    </div>
  </div>
</footer>
   </div>
  )
}

export default App
