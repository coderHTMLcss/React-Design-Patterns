import React, { ReactNode, useState } from 'react'

const Modal = ({ children }: { children: ReactNode }) => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div>
            <button
                className='border p-5 bg-gray-300'
                onClick={() => setShow(true)}>
                Show Modal
            </button>

            {show && (
                <section
                    onClick={() => setShow(false)}
                    className='fixed left-0 top-0 bg-zinc-10 w-screen h-full overflow-auto
                bg-black bg-opacity-50'>
                    <div
                        className='bg-white mx-[10%] my-auto p-[20px] w-[50%]'
                        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                            e.stopPropagation()
                        }>
                        <button
                            className='border p-5 bg-gray-300'
                            onClick={() => setShow(false)}
                        >
                            Hide Modal
                        </button>
                        {children}
                    </div>
                </section>
            )}
        </div>
    )
}

export default Modal
