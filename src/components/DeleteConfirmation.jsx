import React from 'react';

const DeleteConfirmation = ({ product, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content delete-modal">
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete "{product?.title}"?</p>
        <p className="warning">This action cannot be undone.</p>
        
        <div className="form-actions">
          <button className="btn btn-cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-delete" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;