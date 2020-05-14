const citiesReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  // TODO: Handle actions
  switch (action.type) {
    case "SET_CITIES":
      return action.payload;
    default:
      return state;
  }
};
export default citiesReducer;
