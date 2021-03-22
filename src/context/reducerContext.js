import React from 'react';

const ReducerContext = React.createContext({
  state: {},
  dispatch: () => {},
});

ReducerContext.displayName = 'AuthContext';

export default ReducerContext;