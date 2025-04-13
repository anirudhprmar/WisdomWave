import toast from 'react-hot-toast';
import { useQuoteStore } from '../../store/useQuoteStore'
import ModalDelete from '../ui/ModalDelete';


function DeleteQuote({quoteId,onDelete}) {

     const { deleteUserQuote} = useQuoteStore();

   

     const handleDelete = async () => {
        try {
            await deleteUserQuote(quoteId);
            toast.success('Quote deleted successfully');
            onDelete()
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to save quote');
            console.error("Error deleting quote:", error);
        }
    };

  return (
   <ModalDelete onConfirm={handleDelete}/>
  )
}

export default DeleteQuote
