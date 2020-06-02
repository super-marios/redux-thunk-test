import React from 'react';
import './App.css';


import {store} from './index'
import {AddNum} from './store/reducer'

function App(props) {
    
  return (
    <div className="App">
      <h1>Redux thunk</h1>
      <button onClick={()=> store.dispatch(AddNum())}>Add 1</button>
    </div>

  );
}

export default App;
