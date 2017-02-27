// reducer takes 2 things:

// 1. the action (info about what happened)

// 2. Copy of the current state

const posts = (state = [], action) => {

	// console.log('post reducer', state, action);
    switch(action.type) {
        case 'INCREMENT_LIKES':
        // return updated state
            console.log('incrementing likes');
            const i = action.index;
            
            return [
                ...state.slice(0, i), // before one updating
                {
                    ...state[i],
                    likes: state[i].likes + 1
                }, // the one we are updating
                ...state.slice(i + 1), // one after updating
            ];

        default:
            return state;
    }
};

export default posts;
