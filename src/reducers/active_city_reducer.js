const activeCityReducer = (state, action) => {
  if (state === undefined) {
    return null;
  }

  // TODO: Handle actions
  switch (action.type) {
    case "SET_CITY":
      return action.payload;
    default:
      return state;
  }
};
export default activeCityReducer;
