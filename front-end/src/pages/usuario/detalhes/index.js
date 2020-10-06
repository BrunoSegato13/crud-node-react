import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import "./index.css";

export default class Usuario extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            usuario: {}
        };
    }

    componentDidMount(){
        const {id} = this.props.match.params;
    
        fetch(`http://localhost:3003/sistema/usuario/${id}`)
        .then(usuario =>
            usuario.json().then(usuario => this.setState({usuario}))
        );
    }

    render(){
        const {usuario} = this.state;

        if(usuario.ativo){
            usuario.ativo = "Usuário Ativo";
        } else {
            usuario.ativo = "Usuário Inativo";
        }

        return(
            <>
            <div className="usuario-info">
                <h2>{usuario.nome}</h2>
                <p>{usuario.salario}</p>
                <p>{usuario.ativo}</p>
                <p>{usuario.dataNascimento}</p>
                <br/>

            </div>
            <Link to={'/usuario'}>Voltar</Link> <br/>
            <Link to={'/editarusuario/${usuario.id}'}>Editar</Link> <br/>
            <Link to={'/deletarusuario/${usuario.id}'}>Deletar</Link>
            </>
        );
     
    }


}

