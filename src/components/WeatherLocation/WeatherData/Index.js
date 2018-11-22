import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import { CLOUD} from './../../../constants/weathers';



const WeatherData = () =>(
	<div>
		<WeatherTemperature temperature={50} weatherState={CLOUD}/>
		<WeatherExtraInfo humidity={50} wind={"10 m/s"}/>
	</div>
	);


     export default WeatherData;