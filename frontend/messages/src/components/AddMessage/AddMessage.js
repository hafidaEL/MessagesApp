import React, { Component } from 'react'
import { Form, Button, ListGroup , InputGroup, Col} from 'react-bootstrap'
import './AddMessage.css'
import { connect } from 'react-redux'
import { addMessage } from '../../actions'
import PropTypes from 'prop-types'

class AddMessage extends Component {
    state = {
        message : '',
        isPrivate : false
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value
        this.setState({
            [target.name] : value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {message, isPrivate} = this.state;
        const id = Date.now().toString();
        this.props.addMessage(id,message, isPrivate)
        this.setState({
            message : '',
            isPrivate : false
        })
    }

    render() {
        return (
            <div>
                <ListGroup className='zoneMessage'>
                    <ListGroup.Item>
                        <Form className='inputMsg' onSubmit={this.handleSubmit}>
                            <Form.Row>
                            {/* Zone input  */}
                                <Col xs={8}>
                                    <Form.Group controlId="message" className='message'>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Entrer votre message" 
                                            name="message"
                                            onChange={this.handleChange}
                                            value={this.state.message}
                                        />
                                    </Form.Group>
                                </Col>

                                {/* Checkbox */}
                                <Col xs="auto">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Append>
                                        <InputGroup.Text>Privé</InputGroup.Text>
                                        <InputGroup.Checkbox aria-label="Checkbox for private message"
                                            type="checkbox" 
                                            label="Privé" 
                                            className='checkbox'
                                            name="isPrivate"
                                            onChange={this.handleChange}
                                            checked={this.state.isPrivate}
                                        />
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Col>


                                {/* Submit */}
                                <Col xs="auto">
                                    <Button variant="primary" type="submit" size="sm" className='button'>
                                        Ajouter
                                    </Button>
                                </Col>
                            </Form.Row>
                        </Form>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (id,message, isPrivate) => {
            dispatch(addMessage(id,message, isPrivate))
        }
    }
}

export default connect(null,mapDispatchToProps)(AddMessage);

AddMessage.propTypes = {
    addMessage : PropTypes.func.isRequired,
}
