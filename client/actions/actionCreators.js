// increment
const increment = (index) => {
    return {
        type: 'INCREMENT_LIKES',
        index,
    };
};

// add comment
const addComment = (postId, author, comment) => {
	console.log('testing dispatch comments');
    return {
        type: 'ADD_COMMENT',
        comment,
        author,
        postId,
    };
};

// remove comment
const removeComment = (postId, index) => {
    return {
        type: 'REMOVE_COMMENT',
        index,
        postId
    };
};

export { increment, addComment, removeComment };
