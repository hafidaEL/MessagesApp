import React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap'
import './ListMessages.css'
import {fetchMessages} from '../../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLock, faUsers } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

class ListMessages extends React.Component {

    componentDidMount() {
        this.props.fetchMessages();
    }

    render() {
        const privateMsg = <FontAwesomeIcon icon={faUserLock} color="red"/>
        const publicMsg = <FontAwesomeIcon icon={faUsers} color="green"/>
        return (
            <div>

                {
                    this.props.messages.map((msg) => {
                        return (
                           <ListGroup.Item key={msg.id} className='listgroup'>
                                <p>{msg.message}</p>
                                <p>{
                                        msg.isPrivate ? 
                                            privateMsg
                                        : 
                                            publicMsg
                                    }
                                </p>
                            </ListGroup.Item>
                        );
                    })
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchMessages: () => {
            dispatch(fetchMessages())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListMessages);

ListMessages.propTypes = {
    fetchMessages : PropTypes.func.isRequired,
    messages : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
            isPrivate: PropTypes.bool.isRequired,
        })
    )
}

