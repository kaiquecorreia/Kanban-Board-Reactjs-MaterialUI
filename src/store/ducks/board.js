//  Types responsáveis por manipular os reducers da aplição
export const Types = {
  ADD_TASK: 'ADD_TASK',
  REMOVE_TASK: 'REMOVE_TASK',
  FORWARD_TASK: 'FORWARD_TASK',
  BACKWARD_TASK: 'BACKWARD_TASK',
};

// Estado inicial dos reducers da aplicação
const INITIAL_STATE = {
  tasks: [],
  types: ['Backlog', 'To Do', 'In Progress', 'Testing', 'Done'],
};

// Retorna os estados da aplicação para a store
export default function board(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case Types.FORWARD_TASK:
      return { ...state, tasks: action.payload.data };
    case Types.BACKWARD_TASK:
      return { ...state, tasks: action.payload.data };
    case Types.REMOVE_TASK:
      return { ...state, tasks: action.payload.data };

    default:
      return state;
  }
}
// Action creators responsáveis por enviar informações aos reducers
export const Creators = {
  newTask: task => ({
    type: Types.ADD_TASK,
    payload: { id: Math.random() * (+1 - +10) + +1, type: 'Backlog', description: task },
  }),
  forwardTaskType: data => ({
    type: Types.FORWARD_TASK,
    payload: { data },
  }),
  backTaskType: data => ({
    type: Types.BACKWARD_TASK,
    payload: { data },
  }),
  removeTask: data => ({
    type: Types.REMOVE_TASK,
    payload: { data },
  }),
};
