import React from 'react';

const ModalBody = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='mt-2'>
            <p className='text-sm text-gray-600'>{children}</p>
        </div>
    );
};

export default ModalBody;
