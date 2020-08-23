const INITIAL_STATE = {
    learn: 'none',
    test: 'none',
    blog: 'none'
}

export const DisplayLearn = action => ({
    type: "LEARN"
})

export const DisplayTest = action => ({
    type: "TEST"
})

export const DisplayBlog = action => ({
    type: "BLOG"
})

const DisplayReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LEARN':
            
            return {learn: 'flex', test:'none', blog:'none'};
        case 'TEST':
            
            return {learn: 'none', test:'flex', blog:'none'};
        case 'BLOG':
            
            return {learn: 'none', test:'none', blog:'flex'};
        default:
            return state;
    }
}

export default DisplayReducer;