import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Input, Text } from '@rneui/themed';
import { ButtonGroup } from '@rneui/base';

export const CreateRentalScreen = () => {
  const [type, setType] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    // Handle form submission
    console.log({ type, title, description, location, price });
  };

  return (
    <ScrollView style={styles.container}>
      <Text h3 style={styles.title}>Create New Rental</Text>

      <ButtonGroup
        buttons={['House', 'Car']}
        selectedIndex={type}
        onPress={setType}
        containerStyle={styles.buttonGroup}
      />

      <Input
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />

      <Input
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />

      <Input
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />

      <Input
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <Button
        title="Upload Image"
        type="outline"
        containerStyle={styles.button}
      />

      <Button
        title="Create Rental"
        containerStyle={styles.button}
        onPress={handleSubmit}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    marginBottom: 24,
  },
  buttonGroup: {
    marginBottom: 24,
  },
  button: {
    marginVertical: 8,
  },
});