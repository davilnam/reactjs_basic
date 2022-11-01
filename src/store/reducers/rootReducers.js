const initState = {
  users: [
    { id: 1, name: "nam" },
    { id: 2, name: "dien" },
    { id: 3, name: "hoang" }
  ],
  posts: []
}
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      let users = state.users;
      users = users.filter(item => item.id !== action.payload.id);

      return {
        ...state, users
      }
    case 'CREATE_USER':
      let id = Math.floor(Math.random() * 10001);
      let user = { id: id, name: `random ${id}` };
      return {
        ...state, users: [...state.users, user]
      }
    default:
      return state;
  }
}

export default rootReducer;