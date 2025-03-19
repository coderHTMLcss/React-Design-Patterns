import React from 'react'

const ModalFooter = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='mt-4 justify-end space-x-2'>
            <footer>{children}</footer>
        </div>
    );
};

export default ModalFooter;
