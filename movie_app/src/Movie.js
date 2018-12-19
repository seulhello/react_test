import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Movie.css';

class Movie extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <MoivePoster poster={this.props.poster} title={this.props.title} />
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

class MoivePoster extends Component {
  //propTypes : 부모 컴포넌트에서 받은 정보 체크 
  //isRequired : 해당 정보는 필수로 받아야한다 라고 표시함, 내용이 없을 경우 console에서 에러 메세지 표시
  static propTypes = {
    poster: PropTypes.string.isRequired
  }
  render() {
    return (
      <img src={this.props.poster} alt={this.props.title} />
    )
  }
}


export default Movie;