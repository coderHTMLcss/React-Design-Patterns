import { useState } from 'react';
import Modal from './components/Modal';

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <button
        onClick={handleOpen}
        className='px-4 py-2 font-semibold bg-orange-400 text-gray-600
       rounded shadow-lg hover:bg-orange-200 duration-300 transition'>Open Modal</button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Modal.Title>Modal Title</Modal.Title>
        <Modal.Body>Modal Body</Modal.Body>
        <Modal.Footer>Modal Footer</Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
