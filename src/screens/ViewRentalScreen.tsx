import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { Button, Text } from '@rneui/themed';
import { useRoute } from '@react-navigation/native';

export const ViewRentalScreen = () => {
  const route = useRoute();
  const { rental } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: rental.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text h3>{rental.title}</Text>
        <Text style={styles.location}>{rental.location}</Text>
        <Text h4 style={styles.price}>${rental.price}</Text>

        <Text style={styles.description}>{rental.description}</Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Inquire"
            type="outline"
            containerStyle={styles.button}
          />
          <Button
            title="Book Now"
            containerStyle={styles.button}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 16,
  },
  location: {
    color: '#666',
    fontSize: 16,
    marginVertical: 8,
  },
  price: {
    color: '#2089dc',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
});