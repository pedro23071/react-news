import React, {Fragment} from 'react';
import Header from './components/Header';
import ListaNoticias  from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends React.Component{

    state = {
      noticias:[]
    }

    componentDidMount(){
      this.consultarNoticias();
    }
    
    consultarNoticias = async (categoria = 'general') => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=f9938759a0c64b8c81df0eba4104b5bf`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      this.setState({
        noticias: noticias.articles
      })
    }

  render(){
    return(
      <Fragment>
        <Header 
          titulo="Noticias React API"
        />
        <div className="container white contenedor-noticias">
            <Formulario 
              consultarNoticias={this.consultarNoticias}
            />
            <ListaNoticias 
              noticias={this.state.noticias}
            />
        </div>

      </Fragment>
    );
  }
}



export default App;
