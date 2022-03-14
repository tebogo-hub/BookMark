import React, { useState } from react;

function DisplaySong(props){
  return(
    <div className="container">
      <div className="row">
        {props.data.map(item=>(
          <div className="col-sm-6">
            <div className="card2">
              <div className="card-body">
             
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default DisplaySong;