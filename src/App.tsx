import Provider from './store/Provider';
import ShopRoutes from './routes/ShopRoutes';

function App() {
  return (
    <Provider>
      <ShopRoutes />
    </Provider>
  );
}

export default App;
