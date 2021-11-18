import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import UserProfile from './Pages/PublicProfile';
import PrivateProfile from './Pages/PrivateProfile';
import CreateUser from './Pages/RegisterUser';
import Login from './Pages/LoginUser';
import Navbar from './components/Navbar';
import Messages from './Pages/Messages';
import Home from './Pages/Home';

// import messageForm from "./components/message-form.components.js";
import stripeForm from "./components/Stripe";

import Cookies from 'js-cookie';
const Username = Cookies.get('username');

function App() {
  return (
    // <Navbar />
    <Router>
      <Navbar />
      <div id='area'>
        <Route path='/hello' component={Home} />
        <Route path='/register' component={CreateUser} />
        <Route path={`/${Username}`} component={PrivateProfile} />
        <Route path='/user/:username' component={UserProfile} />
        <Route path='/login' component={Login} />
        <Route path='/inbox' component={Messages} />
        <Route path="/p-form" component={stripeForm} />
        {/* <Route path="/m-form" component={messageForm} /> */}
      </div>
    </Router>
  );
}

export default App;
