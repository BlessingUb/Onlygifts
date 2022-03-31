import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PublicProfile from './Pages/PublicProfile';
import PrivateProfile from './Pages/PrivateProfile';
import CreateUser from './Pages/RegisterUser';
import Login from './Pages/LoginUser';
import Navbar from './Pages/Navbar';
import Messages from './Pages/Messages';
import Home from './Pages/Home';
// import messageForm from "./components/message-form.components.js";
// import Form from "./components/stripe.components.js";

import Cookies from 'js-cookie';

const Username = Cookies.get('username');
// const UserId = Cookies.get('id');

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/' component={Home} />
      <Route path='/register' component={CreateUser} />
      <Route path={`/${Username}`} component={PrivateProfile} />
      <Route path={`/user/:username`} component={PublicProfile} />
      <Route path='/login' component={Login} />
      <Route path='/inbox' component={Messages} />
      {/* <Route path="/p-form" component={Form} /> */}
      {/* <Route path="/m-form" component={messageForm} /> */}
    </Router>
  );
}

export default App;
