import {Link} from "react-router-dom"
import Button from "../components/ui/Button"
import InfoCard from "../components/ui/InfoCard"
import Pricing from "../components/ui/Pricing"


function Landing() {
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
            <li className="text-gray-700 hover:text-blue-700 transition-colors cursor-pointer font-medium">
              <Link to='/login' >
              Login
              </Link>
            </li>
            <li><Button variant="active" size="md" className=" bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium shadow-md border-none">
            <Link to='/signup'>
            Get Started
            </Link>  
            </Button></li>
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
              <Button size="lg" className="bg-blue-700 text-white px-5 py-2 rounded-lg text-lg hover:bg-blue-800 transition-colors font-medium">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-blue-700 text-blue-700 px-5 py-2 rounded-lg text-lg hover:bg-blue-50 transition-colors font-medium">
                Watch Demo
              </Button>
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
        <InfoCard
        title={'Endless Inspiration'}
        tagLine={'Immerse yourself in an infinite stream of wisdom:'}
        point1={'Curated collection of powerful quotes'}
        point2={'Instagram-style smooth scrolling experience'}
        point3={'Save and share your favorites'}
        logoColor={'text-blue-600'}
        svgPath={'M13 10V3L4 14h7v7l9-11h-7z'}
        pointColor={'text-blue-500'}
        boxColor={'blue'}
        />

       <InfoCard
       title={'Daily Motivation'}
       tagLine={'Start each day with fresh inspiration:'}
       point1={' Daily hand-picked quotes'}
       point2={'Personalized recommendations'}
       point3={'Goal-focused categories'}
       pointColor={'text-green-500'}
       logoColor={'text-green-600'}
       svgPath={'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'}
       boxColor={'green'}
       />
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
     <Pricing
     pricingTitle={'Monthly Journey'}
     mainColor={'blue'}
     duration={'month'}
     price={'5.99'}
     point1={'Unlimited Quote Access'}
     point2={'Daily New Quote'}
     point3={'Cancel Anytime'}
     yourPlan={'Monthly'}
     />

      {/* Lifetime Plan */}
      <Pricing
      pricingTitle={'LifeTime Access'}
      mainColor={'purple'}
      price={'99'}
      duration={'one-time'}
      point1={'Everything in Monthly Plan'}
      point2={'Exclusive Premium Collections'}
      point3={'Priority Support'}
      yourPlan={'Lifetime'}
      children={ 
      <div className="absolute top-4 right-4">
        <span className="bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full">
          Best Value
        </span>
      </div>
      }
      />
      
    </div>

    <div className="text-center mt-12">
      <p className="text-gray-600">All plans include a 7-day free trial. No credit card required.</p>
    </div>
  </div>
</section>

<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-6">
    <h5 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h5>
    {/* <div className="max-w-2xl mx-auto space-y-4">
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
    </div> */}
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

export default Landing
