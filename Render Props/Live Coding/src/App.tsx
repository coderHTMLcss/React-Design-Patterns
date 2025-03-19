import Counter from './components/Counter'

const App = () => {
  return (
    <div>
      <Counter render={(counter: number) => <p>The current count is: {counter}</p>} />
    </div>
  );
};

export default App;
