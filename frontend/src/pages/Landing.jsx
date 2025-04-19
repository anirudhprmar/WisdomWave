import {Link} from "react-router-dom"
import Button from "../components/ui/Button"
import InfoCard from "../components/ui/InfoCard"
import Accordion from "../components/ui/Accordion"
import { Leaf } from "lucide-react"



function Landing() {

  const faqItem = [
    {
      question: "How often are new quotes added?",
      answer: "New quotes are added daily to keep your inspiration fresh and engaging."
    },
    {
      question: "Can I save my favorite quotes?",
      answer: "Yes, you can create custom collections of your favorite quotes."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, the entire app is free for use."
    },
    {
      question: "How can I access my quotes offline?",
      answer: "Maybe a feature we can work on if users would like to have it."
    }
  ]

  return (
    <div className="bg-gray-900 text-white min-h-screen w-fit sm:w-full ">
    
    <header className="bg-transparent static top-0 z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-12">
            <div className="text-2xl font-bold text-blue-400 flex items-center gap-1"><Leaf/> WisdomWave</div>
            <nav>
              <ul className="hidden md:flex gap-8">
                <li className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer font-medium">About</li>
                <li className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer font-medium">Demo</li>
                <li className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer font-medium">Pricing</li>
              </ul>
            </nav>
        </div>

        <div>
          <ul className="flex items-center gap-6">
            <li className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer font-medium">
              <Link to='/login' >
              Login
              </Link>
            </li>
            <li><Button variant="active" size="md" className=" bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md border-none ">
            <Link to='/signup' className="whitespace-nowrap">
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
            <h1 className="text-5xl font-bold mb-6 text-white leading-tight">
              Inspiration at Your Fingertips
              <span className="block text-blue-400 mt-2">Daily Wisdom Journey</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover endless motivation through scrollable, Instagram-style quote reels that inspire and uplift your day.
            </p>
            <div>
              <Button size="lg" className="bg-blue-600 text-white px-5 py-2 rounded-lg text-lg hover:bg-blue-700 transition-colors font-medium">
                Start Your Journey
              </Button>
            </div>
          </div>
          <div className="relative w-full h-[400px] mt-8 md:mt-0 hidden md:block">
            <img
              src="/hero.jpg"
              alt="man with a phone in hand scrolling"
              className="rounded-3xl shadow-xl border border-gray-700 object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      <section className="py-16 relative z-10">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16 text-white">Why WisdomWave?</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <InfoCard
        title={'Endless Inspiration'}
        tagLine={'Immerse yourself in an infinite stream of wisdom:'}
        point1={'Curated collection of powerful quotes'}
        point2={'Instagram-style smooth scrolling experience'}
        point3={'Save and share your favorites'}
        logoColor={'text-blue-400'}
        svgPath={'M13 10V3L4 14h7v7l9-11h-7z'}
        pointColor={'text-blue-300'}
        boxColor={'blue'}
        />

       <InfoCard
       title={'Daily Motivation'}
       tagLine={'Start each day with fresh inspiration:'}
       point1={' Daily hand-picked quotes'}
       point2={'Personalized recommendations'}
       point3={'Goal-focused categories'}
       pointColor={'text-green-300'}
       logoColor={'text-green-400'}
       svgPath={'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'}
       boxColor={'green'}
       />
      </div>
    </div>
  </section>


<section className="py-16 bg-gray-900">
  <div className="container mx-auto px-6">
    <h5 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h5>
    <div className="max-w-2xl mx-auto space-y-4">
      {faqItem.map((faq, index) => (
        <Accordion key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  </div>
</section>
    </main>

    <footer className="bg-gray-950 text-white py-12 mt-20 ">
  <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-3 gap-10 mb-8 justify-between">
      <div>
        <h6 className="text-lg font-semibold mb-4 text-blue-400 flex gap-1 items-center"> <Leaf/> WisdomWave</h6>
        <p className="text-gray-400 text-sm">Daily inspiration for your personal growth journey.</p>
      </div>
      <div>
        <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
        </ul>
      </div>
     
      <div>
        <h6 className="text-lg font-semibold mb-4">Connect</h6>
        <ul className="space-y-2 text-gray-400">
          <li><a href="https://x.com/anirudhprmar" className="hover:text-white transition-colors">Twitter</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-700 pt-8 text-center">
      <p className="text-gray-400">&copy; 2025 WisdomWave. All rights reserved.</p>
    </div>
  </div>
</footer>
   </div>
  )
}

export default Landing
