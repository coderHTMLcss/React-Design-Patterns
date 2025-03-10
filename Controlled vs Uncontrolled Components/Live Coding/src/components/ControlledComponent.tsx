import { useState, useEffect, ChangeEvent } from "react";

const ControlledForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        hairColor: ''
    });
    const [nameInputError, setNameInputError] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    useEffect(() => {
        if (formData.name.length < 2) {
            setNameInputError("Name must be at least 2 characters long");
        } else {
            setNameInputError("");
        }
    }, [formData.name]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (nameInputError) {
            return;
        }
        console.log(formData);
    };

    return (
        <form
            className="w-[25rem] mx-auto mt-10 flex flex-col space-y-2 border border-red-100
            p-4 rounded-lg bg-teal-100 shadow-lg"
            onSubmit={handleSubmit}
        >
            {nameInputError && <p className="text-red-500">{nameInputError}</p>}
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 rounded-lg"
            />
            <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="border p-2 rounded-lg"
            />
            <input
                type="text"
                name="hairColor"
                placeholder="Hair Color"
                value={formData.hairColor}
                onChange={handleChange}
                className="border p-2 rounded-lg"
            />

            <button
                type="submit"
                className="px-4 py-2 bg-teal-400 rounded-lg text-white hover:bg-teal-300 transition
                duration-300"
            >
                Submit
            </button>
        </form>
    );
};

export default ControlledForm;
