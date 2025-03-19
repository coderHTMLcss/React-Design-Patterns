import React from 'react';
import ModalTitle from './ModalTitle';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 flex justify-center items-center"
            style={{
                backgroundColor: "rgba(0,0,0,0.5)",
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white p-4 space-y-2 rounded">
                {children}
                <button
                    className="px-4 py-2 rounded-lg bg-red-400 border-2 border-red-600"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
