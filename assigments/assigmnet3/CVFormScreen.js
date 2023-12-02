import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, AsyncStorage } from 'react-native';

const CVForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [experience, setExperience] = useState('');
  const [formColor, setFormColor] = useState('white');

  const handleAddCV = async () => {
    try {
      // Save CV data to AsyncStorage
      await AsyncStorage.setItem('CVData', JSON.stringify({ name, description, experience }));
      console.log('CV added and saved to AsyncStorage:', { name, description, experience });
    } catch (error) {
      console.error('Error saving CV data:', error);
    }
  };

  const changeFormColor = () => {
    setFormColor('black');
  };

  return (
    <View style={[styles.container, { backgroundColor: formColor }]}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={(text) => setDescription(text)}
        placeholder="Enter description"
      />

      <Text style={styles.label}>Experience:</Text>
      <TextInput
        style={styles.input}
        value={experience}
        onChangeText={(text) => setExperience(text)}
        placeholder="Enter your experience"
      />

      <Button title="Add CV" onPress={handleAddCV} />

      <Button title="Change Color" onPress={changeFormColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default CVForm;
