//
// const Pusher = require('pusher');
// var currentUser = {
//   name: 'Tommy',
//   id: 42
// };
//
// var pusher = new Pusher('YOUR_PUSHER_KEY', {
//   authEndpoint: '/pusher/auth',
//   auth: {
//     params: currentUser
//   }
// });
//
// var channel = pusher.subscribe('presence-chat');
//
// channel.bind('pusher:subscription_succeeded', function() {
//   console.log('Channel members:', channel.members);
// });

import React from 'react';
import FriendBarContainer from './friend_bar_container';
var Peer = require('simple-peer');

// var peer1 = new SimplePeer({initiator: true});

class Main extends React.Component {
  constructor(props){
    super(props);


    this.gotMedia = this.gotMedia.bind(this);
    this.state = {video: false, audio: true};
  }

  componentDidMount() {
    // navigator.getUserMedia({ video: true, audio: true }, this.gotMedia, function() {});
    // this.p = new Peer ({ initiator: location.hash === this.props.username, stream: stream });
  }

  componentWillUnMount(){
    navigator.getUserMedia({ video: {width: 200, height: 300}, audio: false }, this.gotMedia, function() {});
  }

  gotMedia(stream) {
    var peer1 = new Peer({ initiator: true, stream: stream });
    var peer2 = new Peer();
    this.peer1.on('signal', function (data) {
      peer2.signal(data);
    });

    this.peer2.on('signal', function (data) {
      peer1.signal(data);
    });

    this.peer2.on('stream', function () {
      // got remote video stream, now let's show it in a video tag
      let video = document.querySelector('video');
      video.src = window.URL.createObjectURL(stream);
      video.play();

    });
  }

  createSignal() {

  }

  render() {
    return(
      <main>
        Hi
        <FriendBarContainer />
      </main>
    );
  }



}

export default Main;
