import React from 'react';
import App from "../App";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewsPage from "./NewsPage";

const Router = (props) => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/:value' component={NewsPage}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
