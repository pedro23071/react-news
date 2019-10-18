import React, {Fragment} from 'react';
import Header from './components/Header';
import listaNoticias  from './components/ListaNoticias';

class App extends React.Component{

    state = {
      noticias:[]
    }

    componentDidMount(){
      this.consultarNoticias();
    }
    
    consultarNoticias = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=f9938759a0c64b8c81df0eba4104b5bf`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      console.log(noticias.articles);
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
            <listaNoticias 
              noticias={this.state.noticias}
            />
        </div>

      </Fragment>
    );
  }
}



export default App;