import React from 'react';

class FriendBar extends React.Component {
    constructor(props){
      debugger
      super(props);
    }

    componentDidMount() {
      this.props.getAllUsers();
    }

    render(){
      let friends;
      if(this.props.friends.length > 0){
        friends = this.props.friends;
      }
      return (
        <div>
          {friends}
        </div>
      );
    }


}

export default FriendBar;
