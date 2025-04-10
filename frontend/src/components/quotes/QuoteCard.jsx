/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useQuoteStore } from '../../store/useQuoteStore'
import { Loader2Icon, ArrowUp, ArrowDown } from 'lucide-react'

function QuoteCard() {
    
    const { discoverQuotes, isLoading} = useQuoteStore();
    const [allQuotes,setAllQuotes] = useState(null);
    const [colors, setColors] = useState([]);
    const [currentIndex,setCurrentIndex] = useState(0);

    const getRandomColor = () => {
        return {
            r: Math.floor(Math.random() * 255),
            g: Math.floor(Math.random() * 255),
            b: Math.floor(Math.random() * 255)
        };
    };
    
    
    useEffect(() => {
        const loadQuotes = async ()=>{
            const res = await discoverQuotes();
            setAllQuotes(res)

            if (res) {
                setColors(res.map(() => getRandomColor()));
            }
        }
        
        loadQuotes()
       
    }, [])
    
    
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
        <div className="space-y-4 relative flex flex-col ">

            <div className='overflow-hidden relative max-h-screen '>
            {allQuotes && allQuotes.map((quote, index) => {
                const bgColor = colors[index];
                return (
                    <>
                    <div 
                        key={quote._id} 
                        style={{
                            backgroundColor: `rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})`,
                            display: index === currentIndex ? 'flex' : 'none',
                        }}
                        className="p-4 border-none rounded-lg shadow mx-100 min-h-screen flex flex-col gap-6 relative justify-evenly"
                        >
                        <h3 className="text-gray-950 p-3 rounded text-7xl">
                            {quote.content}
                        </h3>
                        <p className="mt-2 text-gray-900 text-5xl absolute right-3 bottom-5 font-medium">
                            - {quote.author}
                        </p>
                    </div>
                    </>
                );
            })}
            </div>

            <div className='right-2 top-1/2 flex flex-col gap-6 mr-35 fixed'>
                <ArrowUp className='bg-gray-950 text-gray-50 rounded-3xl hover:cursor-pointer size-10 drop-shadow-sm'
                onClick={prevSlide}
                />
                <ArrowDown className='bg-gray-950 text-gray-50 rounded-3xl hover:cursor-pointer size-10 drop-shadow-sm'
                onClick={nextSlide}
                />
            </div>
        </div>
    );
}

export default QuoteCard
