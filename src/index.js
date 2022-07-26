import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Navigate as Redirect, Route, Routes as Switch} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import routes from "./routes/index";



ReactDOM.render(
  // 开启严格模式，开启后，可以检测到app组件里的规范，例如使用字符串的 ref=""
  <React.StrictMode>
  <BrowserRouter> 
    <App />
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//     // <React.StrictMode>
//     <Provider store={store}>
//         <HashRouter>
//             <App>
//                 <Switch> {/*Switch 只匹配一个， 不使用switch的话，全部被渲染的都会被匹配*/}
//                     <Route path='/' exact render={() => (
//                         <Redirect to="/dashboard"/>
//                     )}/>
//                     {routes.map((route, index) => (
//                         <Route
//                             key={index}
//                             path={route.path}
//                             exact={route.exact}
//                             render={() => {
//                                 if(route.meta.title){
//                                     document.title = route.meta.title
//                                 }
//                                 return <route.component/>
//                             }}

//                         />
//                     ))}
//                 </Switch>
//             </App>
//         </HashRouter>
//     </Provider>
//     // </React.StrictMode>
//     ,
//     document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
