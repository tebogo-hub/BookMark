import React, { useState } from 'react';

function BookMark(props) {
  const [ArtistName, setArtistName] = useState('');
  const [Track, setTrack] = useState('');
  const [Album, setAlbum] = useState('');
  const [Webside, setWebside] = useState('');

  const handleSubmit = e => {
    props.handleSubmit(ArtistName, Track, Album, Webside)
   
    e.preventDefault(); 
  };



  const handleChangeArtistName = e => {
   
    setArtistName(e.target.value);
  };
  const handleChangeTrack = e => {

    setTrack(e.target.value);
  };
  const handleChangeAlbum = e => {
   
    setAlbum(e.target.value);
  };
  const handleChangeWebside = e => {
 
    setWebside(e.target.value);
  };
  const find = e => {
   props.Tracks(e.target.value)
  }



  return (
    <div>
      <div class="card">
        <div class="card-header">
          BookMark U'r Artist
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-headphones ml-2"
            viewBox="0 0 16 16"
          >
            <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z" />
          </svg>
        </div>
      
        

        <div class="card-body">
          <h5 class="card-title">Quality Over Everything</h5>
          <p class="card-text">
            <input
              type="text"
              placeholder=" Artist Name "
              className="form-control w-75 mt-3"
              onChange={handleChangeArtistName}
              required
            />

            <input
              type="text"
              placeholder=" Track "
              className="form-control w-75 mt-3"
              onChange={handleChangeTrack}
              required
            />

            <input
              type="text"
              placeholder=" Album "
              className="form-control w-75 mt-3"
              onChange={handleChangeAlbum}
              required
            />

            <input
              type="text"
              placeholder=" Webside "
              className="form-control w-75 mt-3"
              onChange={handleChangeWebside}
              required
            />
          </p>
          <a href="#" class="btn btn-primary" onClick={handleSubmit}>
            Add BookMark
          </a>
          <input className="btn btn-success  ml-2" type="reset" />

          <input
              type="text"
              placeholder=" Search "
              className="form-control w-75 mt-3"
              onChange={find}
              required
            />

        <div className="box" >

          <div class="box-body" name="I-will">
           
            <p>Jay-nation</p>
            <iframe src="https://audiomack.com/embed/song/teejay-534/i-will-by-tee-jay?background=1" scrolling="no" width="100%" height="" scrollbars="no" frameborder="0"></iframe>
          </div>
          <div class="box-body ml-2" name="sad">
            
            <p>Jay-nation</p>
            <iframe src="https://audiomack.com/embed/song/teejay-534/sad?background=1" scrolling="no" width="100%" height="" scrollbars="no" frameborder="0"></iframe>
          </div>
          
            <div className="box-body ml-2" name="cant-stop">
            
            <p>Jay-nation</p>
            <iframe src="https://audiomack.com/embed/song/teejay-534/cant-stop?background=1" scrolling="no" width="100%" height="" scrollbars="no" frameborder="0"></iframe>
            </div>
        </div>

        <div className="box">


          <div className="box-body" name="b3st-4-m3">
            
            <p>Jay-nation</p>
            <iframe src="https://audiomack.com/embed/song/teejay-534/b3st-4-m3?background=1" scrolling="no" width="100%" height="" scrollbars="no" frameborder="0"></iframe>
          </div>

          <div className="box-body ml-2" name="sacrifice">
            
            <p>Jay-nation</p>
            <iframe src="https://audiomack.com/embed/song/teejay-534/sacrifice?background=1" scrolling="no" width="100%" height="" scrollbars="no" frameborder="0"></iframe>
          </div>

          <div name="" className="box-body ml-2" name="only-one-friend">
        
            <p>Jay-nation</p>
            <iframe src="https://audiomack.com/embed/song/teejay-534/only-one-friend-prod-by-tee-jay?background=1" scrolling="no" width="100%" height="" scrollbars="no" frameborder="0"></iframe>
          </div>

        </div>

        </div>
      </div>
    </div>
  );
}
export default BookMark;
