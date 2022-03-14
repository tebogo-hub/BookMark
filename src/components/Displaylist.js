import React, { useState } from 'react';

function Displaylist(props){
 const handleDelete = function(id){
    props.Delete(id)

    }
  return(
    <div className="container">
    <div className="row">
      {props.data.map(item=>(
        <div className="col-sm-6">
          <div className="card2">
            <div className="card-body">
             <h6 key={item.id}>ArtistName:{item.ArtistName}</h6>
             <h6 key={item.id}>Track:{item.Track}</h6>
             <h6 key={item.id}>Album:{item.Album}</h6>
             <iframe src="https://audiomack.com/embed/song/teejay-534/i-will-by-tee-jay?background=1" scrolling="no" width="100%" height="252" scrollbars="no" frameborder="0"></iframe>
             <button
               onClick={()=>handleDelete(item.id)}
                type="button" 
                className="btn btn-success ml-10"  
               >Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
   </div>
  )
}
export default Displaylist;