import React, { Component } from 'react';
import { View, TextInput, Picker, Text, StyleSheet } from 'react-native';

const MAX_STARTING_PLAYERS = 10;
const MAX_SUBSTITUTE_PLAYERS = 8;
const MAX_RESERVE_PLAYERS = 3;

export default class PlayersInput extends Component {
  state = {
    startingPlayers: [],
    substitutePlayers: [],
    reservePlayers: [],
    specialPlayer: null
  }

  handleAddPlayer = (player) => {
    if (this.state.startingPlayers.length < MAX_STARTING_PLAYERS) {
      this.setState(prevState => ({
        startingPlayers: [...prevState.startingPlayers, player]
      }));
    } else if (this.state.substitutePlayers.length < MAX_SUBSTITUTE_PLAYERS) {
      this.setState(prevState => ({
        substitutePlayers: [...prevState.substitutePlayers, player]
      }));
    } else if (this.state.reservePlayers.length < MAX_RESERVE_PLAYERS) {
      this.setState(prevState => ({
        reservePlayers: [...prevState.reservePlayers, player]
      }));
    }
  }

  handleSpecialPlayer = (player) => {
    this.setState({ specialPlayer: player });
  }

  render() {
    const { startingPlayers, substitutePlayers, reservePlayers, specialPlayer } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>Starting Players:</Text>
        <View>
          {startingPlayers.map((player, index)
 (
    <View key={index} style={styles.playerContainer}>
    <Text style={styles.player}>{player}</Text>
    <Text style={styles.playerPosition}>Starting Player</Text>
    </View>
    ))}
    </View>
    <Text style={styles.label}>Substitute Players:</Text>
    <View>
    {substitutePlayers.map((player, index) => (
    <View key={index} style={styles.playerContainer}>
    <Text style={styles.player}>{player}</Text>
    <Text style={styles.playerPosition}>Substitute Player</Text>
    </View>
    ))}
    </View>
    <Text style={styles.label}>Reserve Players:</Text>
    <View>
    {reservePlayers.map((player, index) => (
    <View key={index} style={styles.playerContainer}>
    <Text style={styles.player}>{player}</Text>
    <Text style={styles.playerPosition}>Reserve Player</Text>
    </View>
    ))}
    </View>
    {specialPlayer && (
    <View style={styles.specialPlayerContainer}>
    <Text style={styles.specialPlayer}>Special Player: {specialPlayer}</Text>
    </View>
    )}
    <TextInput
    style={styles.input}
    placeholder="Enter player name"
    onSubmitEditing={event => this.handleAddPlayer(event.nativeEvent.text)}
    />
    <TextInput
    style={styles.input}
    placeholder="Enter  player name"
    onSubmitEditing={event => this.handleSpecialPlayer(event.nativeEvent.text)}
    />
    </View>
    );
    }
    }
    
    const styles = StyleSheet.create({
    container: {
    padding: 20
    },
    label: {
    fontSize: 1,
    marginBottom: 5
    },
    input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 18,
    marginBottom: 20
    },
    playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
    },
    player: {
    fontSize: 18,
    marginRight: 10
    },
    playerPosition: {
    fontSize: 14,
    color: 'gray'
    },
    specialPlayerContainer: {
    marginTop: 20,
    alignItems: 'center'
    },
    specialPlayer: {
    fontSize: 18,
    fontWeight: 'bold'
    }
    });