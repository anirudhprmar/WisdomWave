import { useState } from 'react';
import Button from '../../components/ui/Button'
import { useQuoteStore } from '../../store/useQuoteStore'
import {z} from "zod"
import toast from "react-hot-toast";

function UploadQuote() {

    const {uploadUserQuote,isUploadingQuote} = useQuoteStore();

    const [formData,setFormData] = useState({
        content:"",
        author:"",
        tag:"",
        isPublic:true
      })

    const quoteSchema = z.object({
        content: z.string().min(10).max(500),
        author: z.string().min(2).max(50),
        tag:z.string().max(20),
        isPublic: z.boolean().default(true)
    });
      

    const handleQuoteUpload = async(e)=>{
        e.preventDefault()
        try {
            const validatedQuote = await quoteSchema.parseAsync(formData);
            if (!validatedQuote.content ) {
                toast.error("Content is Required");
                return;
            }
            const success = await uploadUserQuote(validatedQuote);

            if (success) {
                toast.success('Your quote is created successfully!');

                setFormData({
                    content:"",
                    author:"",
                    tag:"",
                    isPublic:true
                })
            }

        } catch (error) {
            if (error instanceof z.ZodError) {
                error.errors.forEach(err => {
                  toast.error(err.message)
                })
              }else{
                toast.error(error.message || "Something went wrong")
            }
        }
    }

  return (
    <div className="h-screen pt-20">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold ">Upload</h1>
            <p className="mt-2">upload your favourite quote</p>
          </div>

          {/* quotes upload section */}
          {/* quotes -> content and author */}



<div className="flex flex-col items-center">
  <form 
    onSubmit={handleQuoteUpload}
    className="w-full space-y-6"
  >
    <div className="form-control">
      <label className="label">
        <span className="label-text font-medium">Quote</span>
      </label>
      <textarea 
        className="textarea textarea-bordered min-h-[120px] w-full"
        placeholder="Be yourself; everyone else is already taken."
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
      />
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text font-medium">Author</span>
      </label>
      <input 
        type="text" 
        className="input input-bordered w-full"
        placeholder="Oscar Wilde"
        value={formData.author}
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
      />
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text font-medium">Tags</span>
      </label>
      <input 
        type="text" 
        className="input input-bordered w-full"
        placeholder="motivation, inspiration (comma separated)"
        value={formData.tag}
        onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
      />
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text font-medium">Privacy Setting</span>
      </label>
      <select 
        className="select select-bordered w-full"
        value={formData.isPublic}
        onChange={(e) => setFormData({...formData, isPublic: e.target.value === 'true' ? e.target.value === true : e.target.value === false})}
      >
        <option value="flase">Keep it Private</option>
        <option value="true">Share with Public</option>
      </select>
    </div>

    <div className="flex justify-center pt-4">
      <Button 
        type="submit"
        size="lg" 
        variant="primary"
        disabled={isUploadingQuote}
        className="w-full max-w-xs"
      >
        {isUploadingQuote ? "Uploading..." : "Add Quote"}
      </Button>
    </div>

  </form>
</div>


          
        </div>
      </div>
    </div>
  )
}

export default UploadQuote
