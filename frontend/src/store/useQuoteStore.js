import {create} from "zustand"
import {axiosInstance} from "../lib/axios.js"
import toast from "react-hot-toast";

export const useQuoteStore = create((set)=>({
    isLoading:false,
    isUploadingQuote:false,
    uploadUserQuote: async (data)=>{
        set({isUploadingQuote:true})
        try {
            await axiosInstance.post('/quotes/create',data)
            
            return true
        } catch (error) {
            console.log("Error in uploading user quote",error);
            return false
        }finally{
            set({isUploadingQuote:false})
        }
    },
    discoverQuotes: async () =>{
        set({isLoading:true})
        try {
            const res = await axiosInstance.get('/quotes/explore');
            return res.data.data.quotes
        } catch (error) {
            toast.error("Something is Up with our server",error.response.data.message)
            return null
        }finally{
            set({isLoading:false})
        }
    },
    savedQuotes: async ()=>{
        set({isLoading: true})
        try {
            await axiosInstance.get('/quotes/my-quotes')
        } catch (error) {
            toast.error("Something went wrong",error.response.data.message)
        }finally{
            set({isLoading: false})
        }
    },
    fetchRandomQuote: async () => {
        set({isLoading: true})
        try {
            const response = await fetch('http://localhost:5000/api/quotes/random');
            const data = await response.json();
            
            if (data.status === 'success') {
                // Format the scraped quotes to match your quote structure
                const formattedQuotes = data.data.map(quote => ({
                    _id: 'scraped-' + Math.random(),
                    content: quote.quote,
                    author: quote.author,
                    book: quote.book
                }));
                return formattedQuotes;
            } else {
                console.error("Error fetching quotes:", data.message);
                toast.error(data.message);
                return null;
            }
        } catch (error) {
            console.error("Failed to fetch random quotes:", error);
            toast.error("Failed to fetch random quotes");
            return null;
        } finally {
            set({isLoading: false})
        }
    }
}));
