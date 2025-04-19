/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react'
import { useQuoteStore } from '../../store/useQuoteStore'
import { Loader2Icon, } from 'lucide-react'

import DeleteQuote from '../../components/quotes/DeleteQuote'

function MyQuotes() {
  const {userCreatedQuotes,isLoading} = useQuoteStore()
  const [allQuotes,setAllQuotes] = useState(null)

  const loadQuotes = async () => {
      try {
          // Fetch both user quotes and random quotes
          const userQuotes = await userCreatedQuotes() || [];

          setAllQuotes(userQuotes);

      } catch (error) {
          console.error("Error loading quotes:", error);
      }
  };

  useEffect(() => {
          loadQuotes();
      }, []);
      

  if (isLoading) {
       
    return (
        <div className="flex justify-center items-center min-h-[200px]">
        <Loader2Icon className='size-5 animate-spin'/>
    </div>
    )
}

if (!allQuotes?.length) {
  return (
      <div className="text-center p-4">
          No quotes found
      </div>
  )
}


  return (
    <div className="container mx-auto sm:px-4 sm:py-17 mt-15 mb-20 sm:mt-0 sm:mb-2">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allQuotes && allQuotes.map(quote => {
        return (
          <div 
            key={quote._id}
            className="bg-primary rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
          >
            <blockquote className="space-y-4">
            <div className="flex justify-end">
                <DeleteQuote 
                    quoteId={quote._id} 
                    onDelete={loadQuotes}
                />
            </div>
              <p className="text-lg font-medium text-gray-50 italic">
                "{quote.content}"
              </p>
              <footer className="text-right">
                <cite className="text-gray-50 font-semibold">
                  - {quote.author}
                </cite>
              </footer>
            </blockquote>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default MyQuotes
