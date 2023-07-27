
import React, { useReducer } from 'react';


import ComponentA from './componenets/ComponentA';
import ComponentB from './componenets/ComponentB';
import ComponentC from './componenets/ComponentC';

export let CountContext =React.createContext()

let initialState ={
  count : 0,
  countTwo : 10
}

let reducer = (state, action) =>{
  switch (action.type) {
    case "increment":
      return {...state, count :state.count + action.value}
    case "decrement":
      return {...state, count :state.count - action.value}
    case "increment2":
      return {...state, countTwo :state.countTwo + action.value}
    case "decrement2":
      return {...state, countTwo :state.countTwo - action.value}
    case "reset":
      return initialState
    default:
      return state
  }
}


function App() {

 let [state, dispatch] = useReducer(reducer, initialState)
  return (
    <React.Fragment>
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <a href="/" className='navbar-brand'>useReducer With useContext</a>
      </nav>
      <CountContext.Provider value={{countState : state, countDispatch : dispatch}}>
        <h1 className='fw-bold text-center'> count : {state.count}</h1>
        <h1 className='fw-bold text-center'> countTwo : {state.countTwo}</h1>
        <ComponentA/>     
        <ComponentC/>
        <ComponentB/>
        <div className='d-flex flex-row justify-content-center'>
            <button onClick={() => dispatch({type:"reset"})} className='btn btn-lg btn-primary m-2'> Reset</button>
        </div>
        
        
      </CountContext.Provider>
      

    </React.Fragment>
  );
}

export default App;
