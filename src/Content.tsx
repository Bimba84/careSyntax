import * as React from 'react';
import Calendar from "./components/Calendar";
import Menu from "./Menu";
import {Route, Switch} from "react-router";
import Patient from "./components/Patient";


class Content extends React.Component<any> {

    public render() {
        return (
            <div className="App-content">
                <Menu/>
                <Switch>
                    <Route exact path='/' component={Calendar}/>
                    <Route path='/patient/:value' component={Patient}/>
                </Switch>
            </div>
        )

    }
}

export default Content;