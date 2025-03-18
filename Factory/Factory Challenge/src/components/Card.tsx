import { CardProps } from '../utils/component-types';

const Card = ({ title, content, footer }: CardProps) => {
    return (
        <div className='p-4 bg-gray-300 w-max border-gray-500 border-2 shadow-lg rounded-lg'>
            <h3>{title}</h3>
            <p>{content}</p>
            <footer>{footer}</footer>
        </div>
    );
};

export default Card;
