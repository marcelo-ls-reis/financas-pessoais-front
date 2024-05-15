import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";

class CadastroUsuario extends React.Component {
    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    };

    cadastrar = () => {
        console.log('Nome: ', this.state.nome);
        console.log('Email: ', this.state.email);
        console.log('Senha: ', this.state.senha);
        console.log('Senha Repeticao: ', this.state.senhaRepeticao);
    }

    cancelar = () => {
        this.props.history.push('/login');
    };

    render() {
        return (

            <div className="container">
                <Card title="Cadastro de Usúario">


                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <fieldset>
                                    <FormGroup label="Nome: *" htmlFor="inputNome">
                                        <input type="text"
                                            className="form-control"
                                            id="inputNome"
                                            placeholder="Digite o Nome"
                                            nome="nome"
                                            onChange={e => this.setState({ nome: e.target.value })} />
                                    </FormGroup>

                                    <FormGroup label="Email: *" htmlFor="inputEmail">
                                        <input type="email"
                                            className="form-control"
                                            id="inputEmail"
                                            placeholder="Digite o Email"
                                            nome="email"
                                            onChange={e => this.setState({ email: e.target.value })} />
                                    </FormGroup>

                                    <FormGroup label="Senha: *" htmlFor="inputSenha">
                                        <input type="password"
                                            className="form-control"
                                            id="inputSenha"
                                            placeholder="Digite a Senha"
                                            nome="senha"
                                            onChange={e => this.setState({ senha: e.target.value })} />
                                    </FormGroup>

                                    <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                                        <input type="password"
                                            className="form-control"
                                            id="inputRepitaSenha"
                                            placeholder="Repita a Senha"
                                            nome="senhaRepeticao"
                                            onChange={e => this.setState({ senhaRepeticao: e.target.value })} />
                                    </FormGroup>

                                    <button onClick={this.cadastrar} className="btn btn-success">Salvar</button>
                                    <button onClick={this.cadastrar} className="btn btn-danger">Voltar</button>
                                    <button onClick={this.cancelar} className="btn btn-danger">Cancelar</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default CadastroUsuario;