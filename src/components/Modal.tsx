import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import {IPatient} from "../interfaces/patient";
import {connect} from "react-redux";

class ModalWindow extends React.Component<any> {
    state = {
        modalShow: false,
        formGridPatient: '',
        formGridStatus: '',
        formGridDescription: '',
        formGridStartTime: '',
        formGridEndTime: '',
        proceduresArr: [],
        status: [{id: 1, name: 'Planned'}, {id: 2, name: 'In Progress'}, {id: 3, name: 'Finished'}]
    };

    changeFormGridPatient = (event: any) => {
        this.setState({
            formGridPatient: event.target.value
        });
    }
    changeformGridDescription = (event: any) => {
        this.setState({
            formGridDescription: event.target.value
        });
    }
    changeFormGridEndTime = (event: any) => {
        this.setState({
            formGridEndTime: event.target.value
        });
    }
    changeFormGridStartTime = (event: any) => {
        this.setState({
            formGridStartTime: event.target.value
        });
    }

    changeformGridStatus = (event: any) => {
        this.setState({
            formGridStatus: event.target.value
        });
    }

    addBlock = () => {
        this.props.onHide();
        this.props.procedure.push(
            {
                name: this.state.formGridPatient,
                status: this.state.formGridStatus,
                descr: this.state.formGridDescription,
                start: this.state.formGridStartTime,
                end: this.state.formGridEndTime
            });
        this.clearFields();
    };

    clearFields = () =>  {
        this.state.formGridPatient = '';
        this.state.formGridStatus = '';
        this.state.formGridDescription = '';
        this.state.formGridStartTime = '';
        this.state.formGridEndTime = '';
    }

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        New procedure
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPatient">
                                <Form.Label>Patient</Form.Label>
                                <Form.Control as="select" value={this.state.formGridPatient} onChange={this.changeFormGridPatient}>
                                    <option>Choose a Patient ...</option>
                                    {this.props.list!.map((item: IPatient) => {
                                        return <option key={item.id}>{item.name}</option>
                                    })}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridStatus">
                                <Form.Label>Status</Form.Label>
                                <Form.Control as="select" value={this.state.formGridStatus} onChange={this.changeformGridStatus}>
                                    <option>Select ...</option>

                                    {this.state.status!.map((item: any) => {
                                        return <option key={item.id}>{item.name}</option>
                                    })}
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}
                                        controlId="formGridStartTime">
                                <Form.Label>Start time</Form.Label>
                                <Form.Control value={this.state.formGridStartTime} onChange={this.changeFormGridStartTime} placeholder="Start time" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEndTime">
                                <Form.Label>End time</Form.Label>
                                <Form.Control placeholder="End time" value={this.state.formGridEndTime} onChange={this.changeFormGridEndTime}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control placeholder="..."  value={this.state.formGridDescription} onChange={this.changeformGridDescription} />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={this.addBlock}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}

function mapStateToProps(state:any){
    return {
        procedure: state.procedure
    }
}

export default connect(mapStateToProps)(ModalWindow);