const mockedStore = (state = [], payload = [], action = ' ') => {
  const currentstate = state;
  if (action === 'addTostore') {
    currentstate.push(payload);
  }
  return currentstate;
};
export default mockedStore;
