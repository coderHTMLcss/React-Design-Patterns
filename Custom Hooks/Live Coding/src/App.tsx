// import TodoList from './components/TodoList';
// import FormComponent from './components/FormComponent';
// import ThemeToggle from "./components/ThemeToggle"
import Modal from "./components/Modal"
import useModal from "./hooks/useModal";

const App = () => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <div>
      {/* <TodoList /> */}
      {/* <FormComponent /> */}
      {/* <ThemeToggle /> */}
      <div>
        <h1>Modal Window</h1>
        <button
          className="px-4 py-2 bg-teal-200 border-2 border-teal-600 rounded"
          onClick={openModal}
        >
          Open Modal
        </button>
        <Modal isOpen={isOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default App;
