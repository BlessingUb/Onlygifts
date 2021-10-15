import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import UserProfile from './Pages/ProfileUser';

import CreateUser from './Pages/RegisterUser';
import Login from './Pages/LoginUser';
import Navbar from './components/Navbar';
import Messages from './Pages/Messages';
import Particles from 'react-particles-js';

// import messageForm from "./components/message-form.components.js";
// import Form from "./components/stripe.components.js";
import Home from "./components/home"
import Cookies from 'js-cookie';

const Username = Cookies.get('username');
// const UserId = Cookies.get('id');

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/' component={Home} />
      <Route path='/register' component={CreateUser} />
      <Route path={`/${Username}`} component={UserProfile} />
      <Route path='/login' component={Login} />
      <Route path='/messages' component={Messages} />
      {/* <Route path="/p-form" component={Form} /> */}
      {/* <Route path="/m-form" component={messageForm} /> */}
    </Router>
  );
}

export default App;
