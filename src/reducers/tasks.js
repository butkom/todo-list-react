const initialState = [
    {
        id: Date.now().toString(),
        content: 'task 1',
        checked: true,
        updateInProgress: 0
    }
];

export default function createTasks(state = initialState, action) {
    if (action.type === 'ADD_TASK') {
        state = [...state, action.payload];
    } else if (action.type === 'UPDATE_TASK') {
        state = state.map(todo =>
            todo.id === action.payload.id ?
                {
                    ...todo,
                    todo,
                } :
                todo
        );
    } else if (action.type === 'DELETE_TASK') {
        state = [...state];
        state = state.filter(function( todo ) {
            return todo.id !== action.payload.id;
        });

    }

    return state;
}
