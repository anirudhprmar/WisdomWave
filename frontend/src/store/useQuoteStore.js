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
    }
}))