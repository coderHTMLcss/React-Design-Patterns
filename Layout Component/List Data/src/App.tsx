import ProductInfo from './components/ProductInfo.tsx';
import RenderList from './components/RenderList.tsx';
import { electronics, clothing, homeGoods } from './data/data.ts';
const App = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <RenderList
        data={electronics}
        resourceName="product"
        dataToRender={ProductInfo}
      />

      <RenderList
        data={clothing}
        resourceName="product"
        dataToRender={ProductInfo}
      />

      <RenderList
        data={homeGoods}
        resourceName="product"
        dataToRender={ProductInfo}
      />
    </div>
  );
};

export default App;
