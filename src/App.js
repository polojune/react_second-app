import React, { Component } from "react";
import Post from "./post";
import styled from "styled-components";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "제목1",
      },
      {
        id: 2,
        title: "제목2",
      },
      {
        id: 3,
        title: "제목3",
      },
    ],
  };

  add = () => {
    this.setState({
      posts: this.state.posts.concat({
        id: 4,
        title: "제목4",
      }),
    });
  };

  del = () => {
    this.setState({
      posts: this.state.posts.filter((post) => {
        return post.id !== 2;
      }),
    });
  };

  render() {
    const ContainerBox = styled.div`
      display: grid;
      justify-content: center;
    `;

    return (
      <ContainerBox>
        <button onClick={this.del}>삭제</button>
        <button onClick={this.add}>추가</button>
        {this.state.posts.map((post) => {
          return <Post id={post.id} title={post.title} />;
        })}
      </ContainerBox>
    );
  }
}

export default App;
