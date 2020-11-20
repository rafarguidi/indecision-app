class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {visibility: !prevState.visibility}
    })
  }
  render() {
    return (
      <div>
        <h1>Exibir / Ocultar Detalhes</h1>
        <button onClick={this.handleToggleVisibility}>
          { this.state.visibility ? 'Exibir' : 'Ocultar'}
        </button>
        <p hidden= {this.state.visibility}>Detalhes da aplicação</p>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));