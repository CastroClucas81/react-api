import React, { Component } from 'react';
import api from './api';

class App extends Component {

  //armazenando os filmes
  state = {
    filmes: [],
  }

  //componentDidMount é executado assim que a página é renderizada
  async componentDidMount() {
    //pegando os filmes... está vazio pois eu nao estou retornando nada
    const resposta = await api.get('star%20wars  ');
    //setar os valores que eu receber em filmes
    this.setState({
      filmes: resposta.data
    })
  }

  render() {
    //atribundo os registros a uma constante    
    const { filmes } = this.state;

    return (
      <div>
        <h1> Listar filmes </h1>
        {filmes.map(filme => (
          <li key={filme.show.id}>
            <h2> <strong>Título do filme: </strong> {filme.show.name} {filme.show.url}</h2>
          </li>
        ))}
      </div>
    );
  }
}

export default App;
