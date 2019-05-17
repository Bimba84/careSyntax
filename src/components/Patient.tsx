import * as React from 'react';

class Patient extends React.Component<any> {

    public render() {
        return (
            <div className="App-patient">
                <div className="App-patient-card">
                    <div>
                        <div className="App-label">Patient name: </div>
                        {this.props.location.patientParams && <div>{this.props.location.patientParams.name}</div>}
                    </div>
                    <div>
                        <div  className="App-label">Sex: </div>
                        {this.props.location.patientParams && <div>{this.props.location.patientParams.sex}</div>}
                    </div>
                    <div>
                        <div  className="App-label">Day of birth: </div>
                        {this.props.location.patientParams && <div>{this.props.location.patientParams.bDay}</div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Patient;