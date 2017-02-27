const postComments = (state = [], action) => {
    console.log(state, action);

	switch(action.type) {
		case "ADD_COMMENT":
            console.log('adding comment');
			// return the new state with the new comment
			return [...state, {
				user: action.author,
				text: action.comment
			}];
		case "REMOVE_COMMENT":
            // console.log('removing a comment');

            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];

            // return [
            //     ...state.slice(0, action.i),
            //     ...state.slice(action.i + 1)
            // ];
		default:
			return state;
	}
    return state;
};

const comments = (state = [], action) => {
    // console.log(state, action);
	if (typeof action.postId !== 'undefined') {
		return {
			// current state
			...state,
			// overwrite this post with a new one
			[action.postId]: postComments(state[action.postId], action)
		}
	}
    return state;
};

export default comments;
