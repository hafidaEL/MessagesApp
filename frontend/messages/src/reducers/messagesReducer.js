import {ADD_MESSAGE, RECEIVE_MESSAGES} from '../actions/actionsTypes'


// const initialState = [
// { id: "1", message: "Something", isPrivate: true },
// { id: "2", message: "Something more", isPrivate: true },
// { id: "3", message: "Something else", isPrivate: false },
// { id: "4", message: "Something again", isPrivate: true },
// ]; 

const messagesReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return  [...state, 
                    { id : action.id,
                      message :action.message,
                      isPrivate: action.isPrivate
                    }];
        case RECEIVE_MESSAGES:   
            return action.payload  
        default:
            return state;
    }
}


export default messagesReducer;