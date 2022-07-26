import React from 'react'
import GlobalLayOut from './layout/globalLayout';
import {HashRouter, Navigate as Redirect, Route, Routes as Switch} from "react-router-dom";
import routes from "./routes/index";
import O1 from './views/O1/index';
const SwitchRoute=()=>{
 
  return <>
  <Switch> {/*Switch 只匹配一个， 不使用switch的话，全部被渲染的都会被匹配*/}
  <Route key={0} path='/' exact element={routes[0].component}/> 
  {/* <Route key={1} path={routes[0].path}  element={routes[0].component}/>
  <Route key={2} path={routes[1].path}  element={<O1></O1>}/>
  <Route key={3} path={routes[2].path} element={routes[2].component}/> */}

    {routes.map((route) => {
        return (
        <Route
            key={route.meta.key[0]}
            path={route.path}
            exact={route.exact}
            element={route.component}
        />
        )

          })}
</Switch>
</>
}
class App extends React.Component {

  render() {
  return (

      <GlobalLayOut content={<SwitchRoute/>}></GlobalLayOut>

    
  )
  }
}

export default App;
