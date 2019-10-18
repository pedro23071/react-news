import React from 'react';

class Formulario extends React.Component{
    state = {
        categoria: ''
    }

    //inicializamos el estado con la categoria general
    componentDidMount(){
        this.setState({
            categoria: 'general'
        })
    }

    //agregamos el valor del select al estado 
    handleChange = (e) => { 
        this.setState({
            categoria: e.target.value
        })
    }
    render(){
        return(
            <div className="buscador row">
                <div className="col s12 m8 offset-2">
                    <form>
                        <h2>Encuentra Noticias por categoria</h2>

                        <div className="input-field col s12 m8">
                            <select onChange={this.handleChange}>
                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnologia</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Formulario;