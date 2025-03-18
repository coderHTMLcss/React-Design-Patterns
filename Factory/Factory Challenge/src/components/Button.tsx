import { ButtonProps } from '../utils/component-types';

const Button = ({ label, onClick, disabled }: ButtonProps) => {
    return (
        <button
            className='px-4 py-3 w-max bg-teal-400 rounded text-white'
            onClick={onClick}
            disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;
