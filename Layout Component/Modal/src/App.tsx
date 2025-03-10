import GameInfo from './components/GameInfo';
import Modal from './components/Modal.tsx';
import { games } from './data/data.ts';

const App = () => {
  return (
    <>
      <Modal>
        <GameInfo data={games} />
      </Modal>
    </>
  );
};

export default App;
