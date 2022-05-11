/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Airplane, SignOut, Timer, Weather} from './src/icons/Icons';
import {Registry} from 'adaptivecards-reactnative/src/components/registration/registry';


Registry.getManager().registerComponent('AirplaneIcon', Airplane);
Registry.getManager().registerComponent('SignoutIcon', SignOut);
Registry.getManager().registerComponent('TimerIcon', Timer);
Registry.getManager().registerComponent('WeatherIcon', Weather);

AppRegistry.registerComponent(appName, () => App);