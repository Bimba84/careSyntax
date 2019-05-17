import * as React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {IPatients} from "../interfaces/patient-list";
import {IPatient} from "../interfaces/patient";
import {connect} from "react-redux";

class Patients extends React.Component<IPatients> {
    public render() {
        return (
            <div className="App-column-left">
                <div className="App-home"><Link to='/'>Dashboard Schedule</Link></div>
                <h4>My Patients</h4>
                <ul className="App-patient-list">
                    {this.props.list!.map((item: IPatient) => {
                        return <li key={item.id}>
                            <Link to={{
                                pathname: '/patient/' + item.id,
                                patientParams: {
                                    name: item.name,
                                    sex: item.sex,
                                    bDay: item.bDay
                                }
                            }}>{item.name}</Link >
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