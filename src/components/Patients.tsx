import * as React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {IPatients} from "../interfaces/patient-list";
import {IPatient} from "../interfaces/patient";
import {connect} from "react-redux";

class Patients extends React.Component<IPatients> {
    public render() {
        return (
            <div className="App-column-left">
                <div className="App-home"><NavLink to='/' exact={true} activeClassName='is-active'>Dashboard Schedule</NavLink></div>
                <h4>My Patients</h4>
                <ul className="App-patient-list">
                    {this.props.list!.map((item: IPatient) => {
                        return <li key={item.id}>
                            <NavLink activeClassName='is-active' to={{
                                pathname: '/patient/' + item.id,
                                patientParams: {
                                    name: item.name,
                                    sex: item.sex,
                                    bDay: item.bDay
                                }
                            }}>{item.name}</NavLink >
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state:any){
    return {
        list: state.patients
    }
}

export default connect(mapStateToProps)(Patients);