const DangerousButton = ({ label }: { label: string }) => {
    return (
        <button className='bg-red-300 p-4 btn-primary'>
            {label}
        </button>
    );
};

export default DangerousButton;
