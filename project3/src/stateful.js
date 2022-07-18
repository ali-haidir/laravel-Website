'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked Stateful';
    }

    return (
      <button onClick={() => this.setState({ liked: true }) }>
        Like Stateful
      </button>
    );
  }
}

let stateful = document.querySelector('#stateful');
ReactDOM.render(<LikeButton />, stateful);

