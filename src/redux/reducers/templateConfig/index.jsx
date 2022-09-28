import options from './configOptions'

const Configur = (state = options, action) => {
  switch (action.type) {
    case "LAYOUT": return {
      ...state,
    };
    default: return state;
  }
}

export default Configur



