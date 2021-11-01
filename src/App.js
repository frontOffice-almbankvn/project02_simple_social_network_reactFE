import logo from './logo.svg';
import './App.css';
import Wall from './components/Wall'
import Login from './components/Login';
import React, {useState } from 'react';
import FollowView from './components/FollowSearch/FollowView';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WallVisit from './components/WallVisit';


function App() {
  const [token, setToken] = useState();
  //const {token, setToken} = useToken();

  const addToken = (tk) => {
    // console.log("Token đây này: " + tk)
    sessionStorage.setItem('token',tk)
    setToken(tk)
  }

  //token = sessionStorage.getItem('token')
  // const m = "abc"
  if(!sessionStorage.getItem('token')) {
    return <Login addToken = {addToken} />
  }
  
  // return (
  //   <Wall token = {token}/>
  // );
  return (
    <div>

      {/* <Wall/> */}
      <BrowserRouter>
        <Switch>
          <Route path="/follows"> <FollowView/></Route>
          <Route path="/visit"> <WallVisit/> </Route>
          <Route path="/"> <Wall/></Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  )

}

export default App;
