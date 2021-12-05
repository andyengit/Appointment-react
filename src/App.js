import "boxicons"
import './App.css';
import AuthProvider from './Auth/AuthProvider';
import AppRouter from './routers/AppRouter';
function App() {



  return (
    <>
      <AuthProvider>
          <AppRouter/>
      </AuthProvider>
    </>);
}

export default App;
