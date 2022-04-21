import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    POSTS:[]
  };

  componentDidMount(){
    this.setState({
      POSTS: [
        {
          ID: 1,
          TITLE: "UMA VES",
          BODY: "ERA UMA VEZ UMA GILINAH MUITO DOIDA",
        },
        {
          ID: 2,
          TITLE: "MALUKO E BRABO",
          BODY: "O MENINO QUE NAO TINHA NADA",
        },
        {
          ID: 3,
          TITLE: "ANDANDO DE BUS",
          BODY: "CONTUDO A PASSAGEM ERA 3,90",
        },
        {
          ID: 4,
          TITLE: "POR MAIS QUE ESTUDASE MUITO",
          BODY: "NAO IMPORTAVA O QUE ELE FAZIA ELE SEMPRE ERA O MELHOR",
        },
      ]
    })
  }
  render() {
    const { POSTS } = this.state;
    return (
      <div className="posts">
        {POSTS.map((POST) => (
          <div key={POST.ID} className="post-card">
            <h1>{POST.TITLE}</h1>
            <p>{POST.BODY}</p>
          </div>
        ))}
      </div>
    );
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
