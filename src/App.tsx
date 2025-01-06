import { Outlet } from 'react-router-dom';
import './App.css'
import MainNavbar from './components/shared/MainNavbar';



function App() {

  return (
    <main className="max-w-screen-xl mx-auto">
    <MainNavbar/>
    <Outlet/>
    </main>
  );
}

export default App
