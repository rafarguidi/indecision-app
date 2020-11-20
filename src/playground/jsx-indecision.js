console.log('App.js is running!')

const app = {
  title: 'Indecision App',
  subtitle: 'This is my first React App',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault(); //impede o redirecionamento da página (ativa apenas o refresh)

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
}

const clearOptions = () => {
  app.options = [];
  renderTemplate();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  alert(app.options[randomNum]);
};

const appRoot = document.getElementById('app');

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
      <button disabled={!app.options.length} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={clearOptions}>Clear All</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderTemplate();