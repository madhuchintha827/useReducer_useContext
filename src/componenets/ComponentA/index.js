import React, { useContext } from 'react'

import { CountContext } from '../../App'



let ComponentA =()=> {
    let countContext = useContext(CountContext)
  return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="clo-md-10 text-center">
                    <h1 className='text-primary'>ComponentA- <span className='text-success'>{countContext.countState.count} </span></h1>
                    <button onClick={() => countContext.countDispatch({type : "increment" , value: 2})} className='btn btn-sm btn-secondary m-2'> Increment</button>
                    <button onClick={() => countContext.countDispatch({type : "decrement" , value: 2})} className='btn btn-sm btn-info m-2'> Decrement</button>

                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ComponentA