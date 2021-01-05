import React from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import {Route, Switch} from 'react-router-dom';
import Login from "./container/Auth/Login";
import ChatPanel from "./container/ChatPanel/MainChat";


function App() {

    let routes = (
        <Switch>
            {/* <Route path="/" component={Home} /> */}
            <Route path="/Login" component={Login}/>
            <Route path="/ChatPanel" exact component={ChatPanel}/>
        </Switch>
    )

    return (

        <Layout>
            {routes}
        </Layout>
    );
}

export default App;
