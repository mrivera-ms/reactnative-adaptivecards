import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import WeatherThunderstorm from "@fluentui/svg-icons/icons/weather_thunderstorm_24_regular.svg";

const Weather = () => <SvgXml height="40" width="40" fill="grey" xml={WeatherThunderstorm} />;
export default Weather;