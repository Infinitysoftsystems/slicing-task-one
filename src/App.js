import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';
import AppRoutes from './routes';

// We are following functional component architechter. Here we are integrating routing.

function App() {
  return (
    <AppRoutes />
  );
}

export default App;
