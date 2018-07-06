import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Button';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
        <div className = "wrapper"> 
          <SayFullName name="Ivan" surname="Petrov" link="vk.com"/>
          <SayFullName name="opa" surname="net" link="vk.com"/>
          <SayFullName name="izi" surname="ad" link="vk.com"/>
        </div>
    );
  }
}
function Hello() {
  let phrace = "world"
  return (
    <h1>Hello {1+21}</h1>
  )
}
function SayFullName(props) {
  return (
    <div>
    <h2>Мое имя {props.name}, фамилия - {props.surname}</h2>
    <a href={props.link}>Prof link</a>
    </div>
  )
}

export default App;
