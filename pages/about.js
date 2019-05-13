import React, { Component } from "react";
import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import Error from "./_error";

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/4ortytwo");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();

    return { user: data, statusCode };
  }

  render() {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="About">
        <p>{user.name}</p>
        <p>A javascript programmer</p>
        <img src={user.avatar_url} alt="Arthur" height="200px" />
      </Layout>
    );
  }
}
