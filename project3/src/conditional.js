class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.LoginButton = this.LoginButton.bind(this);
    this.LogoutButton = this.LogoutButton.bind(this);
    this.renderOnce = this.renderOnce.bind(this);
    this.state = {authenticated: false,displayed:false};
  }
  renderOnce(){
    this.setState({displayed: true});
  }
  handleLoginClick() {
    this.renderOnce();
    this.setState({authenticated: true});
  }
  handleLogoutClick() {
    this.renderOnce();
    this.setState({authenticated: false});
  }
  LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }
  render() {
    let once;
    if(!this.state.displayed){
      once=<h1>Once</h1>;
    }
    if (this.state.authenticated) {
      return (<div>
      {once}
      <this.LogoutButton onClick={this.handleLogoutClick} />
      </div>);
    }
    return (
    <div>
    {once}
    <this.LoginButton onClick={this.handleLoginClick} />
    </div>);
  }
}

ReactDOM.render(
  <Auth />,
  document.getElementById('conditional')
);