import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Text } from '@rneui/themed';
import { Rental } from '../types/rental';

interface Props {
  rental: Rental;
  onPress: (rental: Rental) => void;
  style?: object;
}

export const RentalCard = ({ rental, onPress, style }: Props) => {
  return (
    <TouchableOpacity 
      style={[styles.card, style]} 
      onPress={() => onPress(rental)}
    >
      <Image 
        source={{ uri: rental.imageUrl }} 
        style={styles.image} 
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text h4>{rental.title}</Text>
        <Text style={styles.location}>{rental.location}</Text>
        <Text h4 style={styles.price}>${rental.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 16,
  },
  image: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    padding: 16,
  },
  location: {
    color: '#666',
    marginVertical: 4,
  },
  price: {
    color: '#2089dc',
  },
});