import './App.css'
import {useState} from 'react';

import Header from './components/Header';
import LoginPage from './components/LoginPage';
import FriendsPage from './components/MainPage';
import Input from './components/Input';
import FriendList from './components/FriendList';

import mockData from './_mocks_/friends';

function App() {
  const [user, setUser] = useState();
  //If the user is logged in, I want to show only 'MainPage'.
  //If the user is not logged in, I want to show only 'LoginPage'.
  //For this, we have React trick called 'Conditional Rendering'
  //Looks like a multiple pages app with using 'conditional rendering'
  //    {!user && <LoginPage login={login}/>}
  //    {user && <FriendsPage />}

  const login = function(username, password) {
    // console.log("login():", username, password);
    setUser({id: 1, name: username});
  };

  const logout = function(username, password) {
    // console.log("login():", username, password);
    setUser(null);
  };

  const mockFunction = function (text) {
    console.log("mockFunction Called", text);
  } //you can see the 'mockFunction Called' in console in Inspect when you typed thing in input box

  return (
    <div className="App">
    <Header text="RSVP.Me" logout={logout} user={user} />
    {!user && <LoginPage login={login}/>}
    {user && <FriendsPage />}

    {/* <FriendsPage /> */}
    {/* <Input onSubmit={mockFunction} /> */}

    {/* <FriendList items={mockData} onClick={mockFunction} /> */}
    </div>
  )
}

export default App




