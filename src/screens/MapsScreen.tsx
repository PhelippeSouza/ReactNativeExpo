import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const MapsScreen = () => {
  const navigation = useNavigation();
  const [pin, setPin] = useState({
    latitude: -21.80472,
    longitude: -48.17305,
  });
  const [region, setRegion] = useState({
    latitude: -21.80472,
    longitude: -48.17305,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [destination, setDestination] = useState(null);
  const handleGoBack = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={{ marginTop: 50, flex: 1 }}>
      <GooglePlacesAutocomplete
      placeholder='Enter Location'
      minLength={2}
      autoFocus={false}
      returnKeyType={'default'}
      fetchDetails={true}
      styles={{
        textInputContainer: {
          backgroundColor: 'grey',
        },
        textInput: {
          height: 38,
          color: '#5d5d5d',
          fontSize: 16,
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
      }}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          setRegion({
            latitude:details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
        query={{
          key: "AIzaSyBvw580UagFnkfqAhK-reRJsRX7_e2k_IM",
          language: "en",
          components: "country:us",
          types: "establishment",
          radius: 30000,
          location: `${region.latitude}, ${region.longitude}`,
        }}
        styles={{
          container: {
            flex: 0,
            position: "absolute",
            width: "100%",
            zIndex: 1,
          },
          listView: { backgroundColor: "white" },
        }}
      />
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: -21.80472,
          longitude: -48.17305,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        />
        <Marker
          coordinate={pin}
          pinColor="black"
          draggable={true}
          onDragStart={(e) => {
            console.log("Drag start", e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            setPin({
              latitude:e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text> Alouuuu </Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={1000} />
      </MapView>

      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleGoBack}>
          <Text style={styles.buttonText}> Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
  gobackbutton: {
    marginTop: 400,
    fontWeight: "bold",
    fontSize: 200,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#00008B",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 70,
    height: 50,
  },

});

export default MapsScreen;
