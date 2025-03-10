import DataSource from './components/shared/DataSource';
import ProductList from './components/ProductList';
import axios from 'axios';
import UserList from './components/UserList';

const getServerData = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

const App = () => {
  return (
    <div className='mt-[20px]'>
      <h1 className='text-2xl font-bold text-center'>Welcome to the Store</h1>
      <DataSource
        getDataFunc={() => getServerData("https://fakestoreapi.com/products")}
        resourceName="products"
      >
        <ProductList />
      </DataSource>

      <hr />
      <br />

      <DataSource
        getDataFunc={() => getServerData("https://fakestoreapi.com/users")}
        resourceName="users"
      >
        <UserList />
      </DataSource>
    </div>
  );
};

export default App;
