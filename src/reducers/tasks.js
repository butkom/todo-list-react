const initialState = [
    {
        content: 'task 1',
        checked: 1,
        updateInProgress: 0
    },
    {
        content: 'task 2',
        checked: 0,
        updateInProgress: 0
    },
];

export default function createTasks(state = initialState, action) {
    console.log('action from createTasks func. ', action);
    if (action.type == 'ADD_TASK') {
        return [...state, action.payload];
    }
}
