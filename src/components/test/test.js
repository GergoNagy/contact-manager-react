import React, { Component } from "react";

export default class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // componentWillMount() {
  //   console.log("Component will mount");
  // }

  // componentDidUpdate() {
  //   console.log("Component did update");
  // }

  // componentWillUpdate() {
  //   console.log("Component will update");
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   //it will be out from react
  //   console.log("componentWillReceiveProps");
  // }

  // static getDerivedStateFromProps(nextProps, nextState) {
  //   return {
  //     test: "bla"
  //   };
  // }

  // getSnapshotBeforeUpdate(prevPropm, prevState) {
  //   console.log("getSnapshotBeforeUpdate");
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <h1>{body}</h1>
      </div>
    );
  }
}
