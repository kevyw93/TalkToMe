import React from 'react';
var Peer = require('simple-peer');
var pusher = require('pusher');

class FriendBar extends React.Component {
    constructor(props){
      super(props);
      // this.openVideo = this.openVideo.bind(this);
      this.gotMedia = this.gotMedia.bind(this);
    }

    componentDidMount() {
      this.props.getAllUsers();
    }

    // openVideo(){
    //   // put it on button so you can send peer code to another person
    //   // what else i need to do figure it the fuck out
    //
    //
    // }

    sendData(data){
      // send data to back in in form of JSON
      const dataStr = JSON.stringify(data);
      // create an action that sends to channel
      // take whatever is sent back and return it
      // if receive a yes
    }
    createPrivateChannel() {
        pusher.subscribe("stream-talk");
    }

    gotMedia() {
        // create a channel so you can send info back and forth
      return navigator.webkitGetUserMedia({video: true, audio: true}, function(stream){
        var peer1 = new Peer({ initiator: true, stream: stream });
        var peer2 = new Peer();
        peer1.on('signal', function (data) {
          // figure out what signal does
          // figure out if i have to store data as a string and then pull from the database from peer2
          // figure out if i have to make an popup when someone is calling
          //
          // peer2.signal(data);
          this.sendData(data);
          // take whatever data is sent back and input it to peer1

        });

        // peer2.on('signal', function (data) {
        //   peer1.signal(data);
        // });

  //       peer1.on('connect', function () {
  // // wait for 'connect' event before using the data channel
  //         peer1.send('hey peer2, how is it going?');
  //       });
  //
  //       peer2.on('data', function (data) {
  //         // got a data channel message
  //         console.log('got a message from peer1: ' + data);
  //       });

        // peer2.on('stream', function () {
        //   // got remote video stream, now let's show it in a video tag
        //   let video = document.createElement('video');
        //   document.body.appendChild(video);
        //   // let video = document.querySelector('video');
        //   video.src = window.URL.createObjectURL(stream);
        //   video.play();
        //
        // });
      }, function(err){
        console.log(err);
      });
    }

    render(){
      let friends;
      if(this.props.friends.length > 0){
        friends = this.props.friends.map((el, i) => <button onClick={this.gotMedia} key={i}>
          {el}
        </button>);
      }
      return (
        <main className="friend-bar-container">
          {friends}
        </main>
      );
    }


}

export default FriendBar;
