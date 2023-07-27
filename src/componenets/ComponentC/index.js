import React from 'react'
import ComponentD from '../ComponentD/Index'

let ComponentC =()=> {
  return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="clo-md-4">
                    <h1 className='text-primary'><ComponentD/></h1>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ComponentC