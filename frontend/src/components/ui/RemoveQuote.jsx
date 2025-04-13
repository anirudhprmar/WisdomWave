import toast from 'react-hot-toast';
import { useQuoteStore } from '../../store/useQuoteStore'
import ModalRemove from '../ui/ModalRemove';

function RemoveQuote({quoteId,onDelete}) {
    const { removeSavedUserQuote} = useQuoteStore();

   

    const handleDelete = async () => {
       try {
           await removeSavedUserQuote(quoteId);
           toast.success('Quote deleted successfully');
           onDelete()
       } catch (error) {
           toast.error(error.response?.data?.message || 'Failed to save quote');
           console.error("Error deleting quote:", error);
       }
   };

 return (
  <ModalRemove onConfirm={handleDelete}/>
 )
}

export default RemoveQuote
