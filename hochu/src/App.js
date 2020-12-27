import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/main/Main';
import Cart from './components/cart/Cart';
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className='mainWrap'>
        <div className='contentWrap'>
          <Header />
          <div className = 'mainContainer'>
            <Switch>
              <Route exact path='/' component={Main} />
              <Route exact path='/cart' component={Cart} />
            </Switch>
          </div>
        </div>
        <div className='sidebarWrap'>
          <Sidebar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
