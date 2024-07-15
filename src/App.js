import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Menu from './DashBoard/Home';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row'>
            <div className='col-3'>
              <SideBar />
            </div>
            <div className='col-9'>
              <Menu />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
