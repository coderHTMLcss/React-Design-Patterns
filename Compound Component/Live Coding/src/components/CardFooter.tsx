import React from 'react'

const CardFooter = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className="mt-4">
                <p className="text-gray-500 text-xs">{children}</p>
            </div>
        </div>
    );
};

export default CardFooter;
