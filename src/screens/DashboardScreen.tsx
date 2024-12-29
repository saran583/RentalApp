import React from 'react';
import { ScrollView, StyleSheet, View, FlatList } from 'react-native';
import { Button, Text } from '@rneui/themed';
import { RentalCard } from '../components/RentalCard';
import { useNavigation } from '@react-navigation/native';
import { mockRentals } from '../data/mockData';

export const DashboardScreen = () => {
  const navigation = useNavigation();

  const renderTrendingItem = ({ item }) => (
    <RentalCard
      rental={item}
      onPress={(rental) => navigation.navigate('ViewRental', { rental })}
      style={styles.trendingCard}
    />
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text h3>Rentals</Text>
        <Button
          title="Create"
          onPress={() => navigation.navigate('CreateRental')}
        />
      </View>

      <Text h4 style={styles.sectionTitle}>Trending</Text>
      <FlatList
        horizontal
        data={mockRentals.filter(r => r.isTrending)}
        renderItem={renderTrendingItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.trendingList}
      />

      <Text h4 style={styles.sectionTitle}>Sponsored</Text>
      {mockRentals
        .filter(r => r.isSponsored)
        .map(rental => (
          <RentalCard
            key={rental.id}
            rental={rental}
            onPress={(rental) => navigation.navigate('ViewRental', { rental })}
          />
        ))}

      <Text h4 style={styles.sectionTitle}>Latest</Text>
      {mockRentals
        .slice(0, 5)
        .map(rental => (
          <RentalCard
            key={rental.id}
            rental={rental}
            onPress={(rental) => navigation.navigate('ViewRental', { rental })}
          />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  sectionTitle: {
    marginVertical: 16,
  },
  trendingList: {
    paddingRight: 16,
  },
  trendingCard: {
    width: 280,
    marginRight: 16,
  },
});