
import './App.css';
import axios from 'axios';

import React, { Component } from 'react'
import Search from './components/Search';
import { Display } from './components/Display';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      wdata: null,
      city: "Toronto"
    }
  }
  changeCity = (newCity) =>{
    this.setState({city : newCity})
  }
  componentDidMount(){
    this.fetchFromApi(this.state.city)
  }
  fetchFromApi = (city) =>{
    const key = "dff4601c69f3da87dba8c295d2137e9c"
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    
    axios.get(url)
      .then(response => {this.setState({wdata: response.data})})
      .catch(e =>{
        console.error("Couldn't fetch weather data: ", e)
      })
  }
 
  handleSearch= () =>{
    this.fetchFromApi(this.state.city)
  }

  render() {
    return (
      <div className="App">
        <Search onChangeCity={this.changeCity} onSearch={this.handleSearch} />
        {this.state.wdata && <Display data={this.state.wdata} />}
      </div>
    )
  }
}

