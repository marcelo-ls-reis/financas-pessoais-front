import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
    state = {
        email: '',
        senha: ''
    };

    


    prepararCadastro = () => {
        this.props.history.push('/cadastro-usuarios');
    };  

    entrar = () => {
        axios.post('http://localhost:8080/api/usuarios/autenticar', {
            email: this.state.email,
            senha: this.state.senha
        }).then(response => {
            console.log(response);
        }).catch(erro => {
            console.error(erro.response);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{ position: "relative", left: "300px" }} >
                        <div className="bs-docs-selection">
                            <Card title="Login">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <fileldset>
                                                <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                                    <input type="email" 
                                                            value={this.state.email} 
                                                            onChange={e => this.setState({ email: e.target.value })}
                                                            className="form-control" 
                                                            id="exampleInputEmail1" 
                                                            aria-describedby="emailHelp" 
                                                            placeholder="Digite o Email" />
                                                </FormGroup>
                                                <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                    <input type="password" 
                                                            value={this.state.senha}
                                                            onChange={e => this.setState({ senha: e.target.value })}
                                                            className="form-control" 
                                                            id="exampleInputPassword1" 
                                                            placeholder="Password" />
                                                </FormGroup>
                                                <button onClick={this.entrar}  className="btn btn-success">Entrar</button>
                                                <button onClick={this.prepararCadastro} className="btn btn-danger">Cadastrar</button>
                                            </fileldset>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter (Login);