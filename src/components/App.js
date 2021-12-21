import React, {Component} from 'react';
import './App.css';
import CitySearch from './CitySearch';
import ResultCity from './ResultCity';



class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temperature: "",
    pressure: "",
    wind: "",
    error: "",
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmitForm = e => {
    e.preventDefault()
    console.log("Potwierdzony formularz")
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=aa6dd97573b2006f7f7377c095f1392a&units=metric`;

    fetch(API)
    .then(response => {
      if(response.ok) {
        return response
      }
      //throw Error("Nie udało się!!")
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        error: false,
        date: data.dt,
        city: this.state.value,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temperature: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
      })
    })
    .catch(
      this.setState(prevState => ({
        error: true,
        city: prevState.value
      }))
    )
  }

  render() {
    return(
      <div className="App">
        <CitySearch 
          inputValue={this.state.value} 
          inputChange={this.handleInputChange}
          submitForm = {this.handleSubmitForm}
        />
        <ResultCity 
          weather = {this.state}  
        />
      </div>
    )
  }
}

export default App;