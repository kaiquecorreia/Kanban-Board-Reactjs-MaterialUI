export const Types = {
  ADD_TASK: 'ADD_TASK',
  REMOVE_TASK: 'REMOVE_TASK',
  FORWARD_TASK: 'FORWARD_TASK',
  BACKWARD_TASK: 'BACKWARD_TASK',
};

const INITIAL_STATE = {
  tasks: [],
  types: ['Backlog', 'To Do', 'In Progess', 'Testing', 'Done'],
};

export default function board(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_TASK:
      return { ...state, tasks: action.payload };

    default:
      return state;
  }
}

export const Creators = {
  newTasks: task => ({ type: Types.ADD_TASK, payload: { task, type: 1 } }),
};
