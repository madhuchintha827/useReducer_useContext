import React, { useContext } from 'react'

import { CountContext } from '../../App'



let ComponentB =()=> {
    let countContext = useContext(CountContext)
  return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="clo-md-10 text-center">
                    <h1 className='text-primary'>ComponentB- <span className='text-success'>{countContext.countState.countTwo} </span></h1>
                    <button onClick={() => countContext.countDispatch({type : "increment2" , value: 2})} className='btn btn-sm btn-secondary m-2'> Increment2</button>
                    <button onClick={() => countContext.countDispatch({type : "decrement2" , value: 2})} className='btn btn-sm btn-info m-2'> Decrement2</button>
                    

                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ComponentB