import React, { Component } from "react";
import Chart from "./components/Charts/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Card from "./components/Cards/Cards";
import style from "./app.module.css";
import { fetchData } from "./api";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={style.container}>
        <Card data={data} />

        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
