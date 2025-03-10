import React, { FormEvent, useRef } from 'react'

const UncontrolledForm = () => {
    const nameInput = useRef<HTMLInputElement>(null);
    const ageInput = useRef<HTMLInputElement>(null);
    const colorInput = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const name = nameInput.current ? nameInput.current.value : '';
        const age = ageInput.current ? ageInput.current.value : '';
        const color = colorInput.current ? colorInput.current.value : '';

        console.log(name, age, color);

    };

    return (
        <form
            onSubmit={handleSubmit}
            className='w-[25rem] mx-auto mt-10 flex flex-col space-y-2 border border-red-100
        p-4 rounded-lg bg-teal-100 shadow-lg'>
            <label htmlFor="name">Name:</label>
            <input ref={nameInput} id="name" type="text" className='border p-2 rounded-lg' name='name' placeholder='Name' />
            <label htmlFor="age">Age:</label>
            <input ref={ageInput} id="age" type="number" className='border p-2 rounded-lg' name='age' placeholder='Age' />
            <label htmlFor="color">Color:</label>
            <input ref={colorInput} id="color" type="text" className='border p-2 rounded-lg' name='hairColor' placeholder='Hair Color' />
            <input className='px-4 py-2 bg-teal-400 rounded-lg text-white hover:bg-teal-300 transition 
            duration-300' type="submit" name='submit' />
        </form>
    );
};

export default UncontrolledForm;
