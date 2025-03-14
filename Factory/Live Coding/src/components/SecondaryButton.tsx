const SecondaryButton = ({ label }: { label: string }) => {
    return (
        <button className='bg-orange-300 p-4 btn-secondary'>
            {label}
        </button>
    );
};

export default SecondaryButton;
