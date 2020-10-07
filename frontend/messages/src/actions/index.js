import { ADD_MESSAGE, REQUEST_MESSAGES, RECEIVE_MESSAGES, RECEIVE_NEW_MESSAGE} from './actionsTypes'

/* ADD NEW MESSAGE */
export const addMessage = (id,message, isPrivate) => {
    return (dispatch) => {
        dispatch(requestAddMessage(id,message, isPrivate));
        return fetch("http://localhost:3001/messages",{
            method:"POST",
            headers: {
                "Content-Type" : "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ id: id, message: message, isPrivate: isPrivate})
        })
        .then(response =>  response.json() )
        .then( data => dispatch(receiveNewMessage(data)))
    } 
}

export const requestAddMessage =  (id,message, isPrivate) => ({
    type : ADD_MESSAGE,
    id,
    message,
    isPrivate
})

const receiveNewMessage = (json) =>({
        type: RECEIVE_NEW_MESSAGE,
        payload: json
})


/* GET ALL MESSAGES */
export const fetchMessages = () => {
    console.log('fetchMessages')
    return (dispatch) => {
        dispatch(requestMessages());
        return fetch("http://localhost:3001/messages")
        .then(response =>  response.json() )
        .then( data => dispatch(receiveMessages(data)))
    } 
}

const requestMessages = () => ({
    type : REQUEST_MESSAGES
})

const receiveMessages = (json) =>({
        type: RECEIVE_MESSAGES,
        payload: json
})