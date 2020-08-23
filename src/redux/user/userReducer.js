export const catchUser = user => ({
    type: 'CATCH_A_USER',
    payload: user
});


const INITIAL_USER = {
    currentUser: null
}

const userReducer = (state = INITIAL_USER, catchUser) => {
    switch (catchUser.type) {
        case 'CATCH_A_USER':
            
            return ({...state,
                currentUser: catchUser.payload
            });
    
        default:
            return state;
    }
}

export default userReducer;