import React from "react";
import "./WeatherInformation.css";
import Sunset from "../../assets/temp.svg";
import Sunrise from "../../assets/temp.svg";
import Humidity from "../../assets/humidity.svg";
import Wind from "../../assets/wind.svg";
import Pressure from "../../assets/pressure.svg";
import Night from "../../assets/night.svg";
import Day from "../../assets/day.svg";
import CloudyNight from "../../assets/cloudy-night.svg";
import Cloudy from "../../assets/cloudy.svg";
import PerfectDay from "../../assets/perfect-day.svg";
import Rain from "../../assets/rain.svg";
import RainNight from "../../assets/rain-night.svg";
import Storm from "../../assets/storm.svg";
import Sunny from "../../assets/sunny.svg";
import SnowDay from "../../assets/snow-day.svg";

const WeatherInfoIcons = {
  sunset: Sunset,
  sunrise: Sunrise,
  humidity: Humidity,
  wind: Wind,
  pressure: Pressure,
};

const WeatherIcons = {
  "01d": Sunny,
  "01n": Night,
  "02d": Day,
  "02n": CloudyNight,
  "03d": Cloudy,
  "03n": Cloudy,
  "04d": PerfectDay,
  "04n": CloudyNight,
  "09d": Rain,
  "09n": RainNight,
  "10d": Rain,
  "10n": RainNight,
  "11d": Storm,
  "11n": Storm,
  "13d": SnowDay,
  "13n": SnowDay,
  "50d": Sunny,
  "50n": Sunny,
};

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <div className="infoContainer">
      <img className="infoIcon" src={WeatherInfoIcons[name]} />
      <span className="infoLabel">
        {value}
        <span>{name}</span>
      </span>
    </div>
  );
};

function WeatherInformation(props) {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  console.log(weather);
  return (
    <>
      <div className="container">
        <span className="condition">
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
          {`  |  ${weather?.weather[0].description}`}
        </span>
        <img
          className="weatherIcon"
          src={WeatherIcons[weather?.weather[0].icon]}
        />
      </div>
      <span className="location">{`${weather?.name}, ${weather?.sys?.country}`}</span>

      <span className="infoLabel">Weather Info</span>
      <div className="weatherInfoContainer">
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
        />
        <WeatherInfoComponent
          name={"humidity"}
          value={weather?.main?.humidity}
        />
        <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed} />
        <WeatherInfoComponent
          name={"pressure"}
          value={weather?.main?.pressure}
        />
      </div>
    </>
  );
}
export default WeatherInformation;
