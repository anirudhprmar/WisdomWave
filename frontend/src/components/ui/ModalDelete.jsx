import { Trash } from 'lucide-react'

function ModalDelete({ onConfirm }) {
    const handleConfirm = () => {
        onConfirm();
        document.getElementById('my_modal_3').close();
    };


    return (
        <div>
            <button 
                className="btn btn-ghost btn-sm"
                onClick={() => document.getElementById('my_modal_3').showModal()}
            >
                <Trash className='size-4 ' />
            </button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Delete this quote</h3>
                    <p className="py-4">Are you sure you want to delete this quote?</p>
                    <div className="modal-action">
                        <button className="btn btn-error" onClick={handleConfirm}>Delete</button>
                        <form method="dialog">
                            <button className="btn">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ModalDelete