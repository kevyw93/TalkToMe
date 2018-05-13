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


// var peer1 = new SimplePeer({initiator: true});

class Main extends React.Component {
  constructor(props){
    super(props);
    // this.state = {video: false, audio: true};
  }

  render() {
    return(
      <main className="main-page-container">

        <FriendBarContainer />
        <button className="logout" onClick={this.props.logout}>Logout</button>
      </main>
    );
  }



}

export default Main;
