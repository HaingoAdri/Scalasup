import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Menu from './DashBoard/Home';
import Content_Table from './DashBoard/Content_Table';

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
              <div className='py-3'>
                <Content_Table />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
