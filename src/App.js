import React, { Component } from "react";
import BookMark from './components/BookMark';
import Displaylist from './components/Displaylist';
// import DisplaySong from './components/DisplaySong';
import "./style.css";

class App extends Component {
  state = {
    list: [
      // { ArtistName:'jay-nation',
      //   Track:'i-will',
      //   Album:'Single',
      //   Webside:'https://audiomack.com/embed/song/teejay-534/i-will-by-tee-jay?background=1',
      // },
      // {
      //   ArtistName:'jay-nation',
      //   Track:'sad',
      //   Album:'Single',
      //   Webside:'https://audiomack.com/embed/song/teejay-534/sad?background=1',
      // },
      // {
      //   ArtistName:'jay-nation',
      //   Track:'cant-stop',
      //   Album:'Single',
      //   Webside:'https://audiomack.com/embed/song/teejay-534/cant-stop?background=1',
      // },
      // {
      //   ArtistName:'jay-nation',
      //   Track:'best-4-m3',
      //   Album:'Single',
      //   Webside:'https://audiomack.com/embed/song/teejay-534/b3st-4-m3?background=1',
      // },
      // {
      //   ArtistName:'jay-nation',
      //   Track:'sacrifice',
      //   Album:'Single',
      //   Webside:'https://audiomack.com/embed/song/teejay-534/sacrifice?background=1',
      // },
      // {
      //   ArtistName:'jay-nation',
      //   Track:'only-one-friend',
      //   Album:'Single',
      //   Webside:'https://audiomack.com/embed/song/teejay-534/only-one-friend-prod-by-tee-jay?background=1',
      // },
    

    

    ]
  };

  handleSubmit = (ArtistName, Track, Album, Webside) =>{
    let obj={
      ArtistName:ArtistName,
      Track:Track,
      Album:Album,
      Webside:Webside,
      
      
    }
    


    if(ArtistName === ""){
      alert("please enter ArtistName")
    }
    else if(Track === ""){
      alert("please enter Track")
    }
    else if(Album === ""){
      alert("plaese enter Album")
    }
    else if(Webside === ""){
      alert("please enter Webside")
    }
    else{
      this.setState({
        list:[...this.state.list, obj]
      })
    } 
    }
    handleDelete = id =>{
      this.setState({
        list: this.state.list.filter(item =>item.id !==id)
         

      });
     
    }
   
    Tracks(song){
     this.setState({
       list: this.state.list.filter(item =>item.Track !==id)

     })

    }
    render(){
      return(

        <div>
          
          <BookMark handleSubmit={this.handleSubmit} />
          <Displaylist data={this.state.list}/>
          {/* <DisplaySong Tracks={this.Tracks} /> */}
        </div>
      )
    }
}
export default App;