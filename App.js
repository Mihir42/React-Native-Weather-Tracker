import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import API from './src/components/API/API';
import WeatherInformationScreen from './src/components/API/screens/WeatherInformationScreen';

export default function App() {
  // Intialisation ------------------------------------
  const weatherEndpoint =
    'http://api.weatherapi.com/v1/current.json?key=8c36386ccc784250871133222242102&q=London&aqi=no';
  // 'https://softwarehub.uk/unibase/api/modules/1';

  // State --------------------------------------------
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadWeather = async (endpoint) => {
    const response = await API.get(endpoint);
    setIsLoading(false);
    if (response.isSuccess) setWeather(response.result);
  };
  // Handlers -----------------------------------------
  useEffect(() => {
    loadWeather(weatherEndpoint);
  }, []);

  console.log(weather);

  // View ---------------------------------------------
  return (
    <View style={styles.container}>
      {!isLoading && weather ? (
        <Text> Location = {weather.location.name} </Text>
      ) : (
        <Text>Fooked</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
