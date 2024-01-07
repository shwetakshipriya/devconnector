import {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import {loadUser} from './action/auth';
// Redux

import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import setAuthToken from './utils/setAuthToken';



if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => (

  useEffect(() => {
    store.dispatch(loadUser());
  }
  , []),

  <Provider store={store}>
    <Router>
   
        <Navbar />
     

        <Alert/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>

    
   
    </Router>
  </Provider>
);
export default App;