import * as React from 'react';
import Button from 'react-bootstrap/Button';
import ModalWindow from "./Modal";
import {connect} from "react-redux";

class Calendar extends React.Component<any, any> {
    state = {
        modalShow: false
    };

    public render() {
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <div className="App-schedule">
                <div className="App-schedule-grid">
                    {!this.props.procedure.length ? <span>No procedures</span> :
                        this.props.procedure.map( (item:any, index: number) => {
                            return <div key={index} className="App-procedure">
                                <div className="App-procedure-row"><label>Name</label><span>{item.name}</span></div>
                                <div className="App-procedure-row"><label>Status</label><span>{item.status}</span></div>
                                <div className="App-procedure-row"><label>Description</label><span>{item.descr}</span></div>
                                <div className="App-procedure-row"><label>Start time </label><span>{item.start}</span></div>
                                <div className="App-procedure-row"><label>End time</label><span>{item.end}</span></div>
                            </div>
                        })
                    }
                </div>
                <div className="App-schedule-buttonGroup">
                    <Button variant="info"
                            onClick={() => this.setState({ modalShow: true })}>Add procedure</Button>
                    <ModalWindow
                        list={this.props.list}
                        show={this.state.modalShow}
                        onHide={modalClose}
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state:any){
    return {
        list: state.patients,
        procedure: state.procedure
    }
}

export default connect(mapStateToProps)(Calendar);