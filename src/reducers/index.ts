import {combineReducers} from "redux";
import PatientList from './patient-list';
import ProcedureItem from './procedure-item';

const allReducers = combineReducers({
    patients: PatientList,
    procedure: ProcedureItem
});

export default allReducers;