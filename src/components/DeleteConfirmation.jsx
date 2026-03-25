const DeleteConfirmation = ({ product, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4">
      <div className="bg-gray-900 border border-red-900/50 p-10 rounded-[2.5rem] max-w-sm text-center shadow-[0_0_100px_-10px_rgba(220,38,38,0.2)]">
        <div className="w-20 h-20 bg-red-900/30 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-inner">
          🗑️
        </div>
        <h3 className="text-2xl font-black text-white mb-3 tracking-tight">Are you sure?</h3>
        <p className="text-gray-400 mb-8 leading-relaxed">
          You are about to permanently delete <span className="text-white font-bold italic">"{product?.title}"</span>. This action cannot be reversed.
        </p>
        
        <div className="flex flex-col gap-3">
          <button onClick={onConfirm} className="w-full bg-red-600 hover:bg-red-500 py-4 rounded-2xl font-black tracking-widest transition-all shadow-lg shadow-red-600/20">
            DELETE ITEM
          </button>
          <button onClick={onCancel} className="w-full bg-transparent hover:bg-gray-800 py-3 rounded-2xl font-bold text-gray-500 transition-all">
            GO BACK
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;