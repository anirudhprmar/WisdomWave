/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { useQuoteStore } from '../../store/useQuoteStore'
import { Loader2Icon, ArrowUp, ArrowDown , Bookmark, Book} from 'lucide-react'
import toast from 'react-hot-toast';

function Discover() {
    
    const { discoverQuotes, isLoading,fetchRandomQuote,saveThisQuote} = useQuoteStore();
    const [allQuotes,setAllQuotes] = useState(null);
    const [colors, setColors] = useState([]);
    const [currentIndex,setCurrentIndex] = useState(0);



    const handleNavigation = useCallback((direction) =>{
        if (direction === 'up') {
            prevSlide()
        }else if(direction === 'down'){
            nextSlide()
        }
    }, [currentIndex])


    useEffect(()=>{
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                handleNavigation('up');
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                handleNavigation('down');
            }
        }

            window.addEventListener('keydown',handleKeyDown)

            return ()=> window.removeEventListener('keydown',handleKeyDown)
    }, [handleNavigation])

 // Touch events for mobile
 const [touchStart, setTouchStart] = useState(null);
 const [touchEnd, setTouchEnd] = useState(null);

 const handleTouchStart = (e) => {
     setTouchStart(e.targetTouches[0].clientY);
 };

 const handleTouchMove = (e) => {
     setTouchEnd(e.targetTouches[0].clientY);
 };

 const handleTouchEnd = () => {
     if (!touchStart || !touchEnd) return;
     
     const distance = touchStart - touchEnd;
     const isSwipe = Math.abs(distance) > 50; // Minimum distance for swipe

     if (isSwipe) {
         if (distance > 0) {
             handleNavigation('down');
         } else {
             handleNavigation('up');
         }
     }

     setTouchStart(null);
     setTouchEnd(null);
 };
    

    const getRandomColor = () => {
        return {
            r: Math.floor(Math.random() * 255),
            g: Math.floor(Math.random() * 255),
            b: Math.floor(Math.random() * 255)
        };
    };

    const saveQuote = async () => {
        try {
            const currentQuote = allQuotes[currentIndex];
            await saveThisQuote(currentQuote);
            toast.success('Quote saved successfully');
        } catch (error) {
            // toast.error(error.response?.data?.message || 'Failed to save quote');
            console.error("Error saving quote:", error);
        }
    };



    useEffect(() => {
        const loadQuotes = async () => {
            try {
                // Fetch both user quotes and random quotes
                const userQuotes = await discoverQuotes() || [];
                const scrapedQuotes = await fetchRandomQuote() || [];

                // Combine quotes
                const combinedQuotes = [...userQuotes, ...scrapedQuotes];

                // console.log("Combined quotes:", combinedQuotes); // Debug log

                setAllQuotes(combinedQuotes);
                setColors(combinedQuotes.map(() => getRandomColor()));
            } catch (error) {
                console.error("Error loading quotes:", error);
            }
        };

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
    

    const prevSlide = () => {
       const isFirstSlide = currentIndex === 0;
       const newIndex = isFirstSlide ? allQuotes.length - 1 : currentIndex -1;
       setCurrentIndex(newIndex)
    };
    
    const nextSlide = () => {
        const isLastSlide = currentIndex === allQuotes.length -1 ;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    };
    

    return (
        <div 
            className="relative h-full flex flex-col items-center justify-center overflow-hidden mt-15"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="w-full max-w-lg px-4 sm:px-6">
                {allQuotes && allQuotes.map((quote, index) => {
                    const bgColor = colors[index];
                    
                    return (
                        <div 
                            key={quote._id} 
                            style={{
                                backgroundColor: `rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})`,
                                display: index === currentIndex ? 'block' : 'none',
                            }}
                            className="p-8 sm:p-12 rounded-3xl shadow-lg relative h-[70vh] sm:h-[60vh] flex flex-col justify-center"
                        >
                            <h3 className="text-gray-950 text-2xl font-medium">
                                {quote.content}
                            </h3>
                            <p className="mt-4 text-gray-900 text-2xl sm:text-3xl font-medium absolute bottom-8 right-8">
                                - {quote.author}
                            </p>

                            <button
                            className="absolute right-8 bottom-20 p-3 bg-gray-900/10 hover:bg-gray-900/20 rounded-full transition-colors"
                            onClick={saveQuote}
                            >
                            <Bookmark className="size-6 sm:size-8" />
                            </button>
                        </div>
                    );
                })}
            </div>
    
    
            {/* Navigation Arrows */}
            <div className="fixed right-15 xl:right-30 top-1/2 -translate-y-1/2  lg:flex flex-col gap-4 hidden ">
                <button 
                    className="p-2 bg-gray-950 text-gray-50 rounded-full hover:bg-gray-800 transition-colors"
                    onClick={prevSlide}
                >
                    <ArrowUp className="size-6" />
                </button>
                <button 
                    className="p-2 bg-gray-950 text-gray-50 rounded-full hover:bg-gray-800 transition-colors"
                    onClick={nextSlide}
                >
                    <ArrowDown className="size-6" />
                </button>
            </div>
        </div>
    );
}

export default Discover
