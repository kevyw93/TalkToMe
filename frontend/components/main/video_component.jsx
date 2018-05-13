import React from 'react';
var Peer = require('simple-peer');

class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // onClick video reducer will be turned true
    // navigator.getUserMedia({ video: true, audio: true }, this.gotMedia, function() {});
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

  render() {
    return (
      <main>

      </main>
    );
  }


}
