import { ComponentFactory } from "./utils/ComponentFactory";
import { useConfiguration } from "./hooks/useConfiguration";

const App = () => {
  const [buttonConfig, cardConfig, modalConfig] = useConfiguration()
  return (
    <div className="flex flex-col items-center gap-3">
      {[buttonConfig, cardConfig, modalConfig].map((config, index) => (
        <div key={index}>{ComponentFactory(config)}</div>
      ))}
    </div>
  );
};

export default App;
