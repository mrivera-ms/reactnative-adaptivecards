import React from 'react';
import {styles} from '../styles/mainTheme';
import {View, TouchableOpacity, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Timer from '../icons/Timer';
import Weather from '../icons/Weather';
import SignOut from '../icons/SignOut';
import Airplane from '../icons/Airplane';

const HomeScreen = ({navigation}: NativeStackScreenProps) => {
  return (
    <View>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Adaptive Cards Samples</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AdaptiveCardSample1Screen')}>
          <View style={styles.buttonRow}>
            <Timer />
            <Text style={styles.buttonText}>Action Card</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AdaptiveCardSample2Screen')}>
          <View style={styles.buttonRow}>
            <Airplane/>
            <Text style={styles.buttonText}>Flight Reservation</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AdaptiveCardSample3Screen')}>
          <View style={styles.buttonRow}>
            <Weather />
            <Text style={styles.buttonText}>Weather Card</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AdaptiveCardSample4Screen')}>
          <View style={styles.buttonRow}>
            <SignOut />
            <Text style={styles.buttonText}>Login Card</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
