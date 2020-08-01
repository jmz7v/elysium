// Libraries
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// Components
import Title from "components/title";
import Form from "components/form";
import Loading from "components/loading";
import Column, { Columns } from "components/columns";

const form = {
  title: "Ingresa",
  fields: [
    {
      name: "email",
      label: "email",
      type: "text",
      defaultValue: "test@domain.com",
      required: true,
      isEmail: true,
    },
    {
      name: "password",
      label: "password",
      type: "password",
      defaultValue: "password",
      required: true,
    },
    {
      name: "integer",
      label: "integer",
      type: "text",
      defaultValue: "1",
      isInteger: true,
    },
    {
      name: "number",
      label: "number",
      type: "text",
      defaultValue: "1.0",
      isNumber: true,
    },
    {
      name: "options",
      label: "options",
      type: "options",
      // defaultValue: '1',
      required: true,
      options: [
        { value: "1", label: "Hola" },
        { value: "2", label: "como" },
        { value: "3", label: "estás?" },
      ],
    },
    {
      name: "select",
      label: "select",
      type: "select",
      defaultValue: "3",
      required: true,
      options: [
        { value: "1", label: "Hola" },
        { value: "2", label: "como" },
        { value: "3", label: "estás?" },
      ],
    },
  ],
  primary: "Ingresar",
  secondary: "Olvidé mi contraseña",
};

class Login extends Component {
  constructor() {
    super();
    this.data = {
      loading: false,
      loggedIn: false,
      forgotPassword: false,
    };
    this.state = { ...this.data };
  }

  redirectToDashboard() {
    return this.state.loggedIn ? <Redirect to="/dashboard" /> : null;
  }

  redirectToRecover() {
    return this.state.forgotPassword ? <Redirect to="/recover" /> : null;
  }

  handlePrimary = (data) => {
    console.log(data);
    // TODO: Call to api
    // this.setState({loggedIn: true})
  };

  handleSecondary = () => {
    this.setState({ forgotPassword: true });
  };

  render() {
    const { loading } = this.state;
    return (
      <section className="section">
        <div className="container">
          <Title title="Inicia sesión" subtitle="O crea una cuenta" />
          <Columns>
            <Column>
              <Form
                loading={loading}
                handlePrimary={this.handlePrimary}
                handleSecondary={this.handleSecondary}
                {...form}
              />
            </Column>
            <Column>
              <Loading />
            </Column>
          </Columns>
          {this.redirectToDashboard()}
          {this.redirectToRecover()}
        </div>
      </section>
    );
  }
}

export default Login;
