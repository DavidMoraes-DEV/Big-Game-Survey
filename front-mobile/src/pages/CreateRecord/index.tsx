import { StyleSheet, Text, TextInput, View } from "react-native";
import Header from "../../components/Header";
import PlatformCard from "./PlatformCard";
import { useState } from "react";
import { GamePlatform } from "./types";
import { Picker } from "@react-native-picker/picker";

const placeholder = {
  label: "Selecione o game",
  value: null,
};

const CreateRecord = () => {
  const [platform, setPlatform] = useState<GamePlatform>();

  const handleChangePlatform = (selectedPlatform: GamePlatform) => {
    setPlatform(selectedPlatform);
  };

  const [selectedGame, setSelectedGame] = useState("");

  return (
    <>
      <Header />
      <View style={styles.container}>
        <TextInput
          style={[styles.inputText, { backgroundColor: "#888" }]}
          placeholder="Nome"
          placeholderTextColor="#333"
        />
        <TextInput
          keyboardType="numeric"
          style={[styles.inputText, { backgroundColor: "#888" }]}
          placeholder="Idade"
          placeholderTextColor="#333"
          maxLength={2}
        />
        <View style={styles.platformContainer}>
          <PlatformCard
            platform="PC"
            icon="laptop"
            activePlatform={platform}
            onChange={handleChangePlatform}
          />
          <PlatformCard
            platform="XBOX"
            icon="xbox"
            activePlatform={platform}
            onChange={handleChangePlatform}
          />
          <PlatformCard
            platform="PLAYSTATION"
            icon="playstation"
            activePlatform={platform}
            onChange={handleChangePlatform}
          />
        </View>
        <Picker
          selectedValue={"Selecione o Game"}
          onValueChange={(value) => {
            setSelectedGame(value);
          }}
          style={[
            pickerSelectStyles.iconContainer,
            { backgroundColor: "#888", borderRadius: 10 },
          ]}
        >
          <Picker.Item
            label="Selecione o Game"
            value={"null"}
            style={pickerSelectStyles.placeholder}
          />
          <Picker.Item
            label="Game 1"
            value={"Nome do Game 1"}
            style={pickerSelectStyles.inputAndroid}
          />
          <Picker.Item
            label="Game 2"
            value={"Nome do Game 2"}
            style={pickerSelectStyles.inputAndroid}
          />
          <Picker.Item
            label="Game 3"
            value={"Nome do Game 3"}
            style={pickerSelectStyles.inputAndroid}
          />
        </Picker>
      </View>
    </>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    color: "#ED7947",
    paddingRight: 30,
    fontFamily: "Play_700Bold",
    height: 50,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    color: "#ED7947",
    paddingRight: 30,
    fontFamily: "Play_700Bold",
    height: 50,
  },
  placeholder: {
    color: "#9E9E9E",
    fontSize: 16,
    fontFamily: "Play_700Bold",
  },
  iconContainer: {
    top: 10,
    borderRadius: 10,
  },
});

const styles = StyleSheet.create({
  container: {
    marginTop: "15%",
    paddingRight: "5%",
    paddingLeft: "5%",
    paddingBottom: 50,
  },
  inputText: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 10,
    color: "#FFF",
    fontFamily: "Play_700Bold",
    fontSize: 16,
    paddingLeft: 20,
    marginBottom: 21,
  },
  platformContainer: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    marginTop: "15%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#00D4FF",
    flexDirection: "row",
    borderRadius: 10,
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Play_700Bold",
    fontWeight: "bold",
    fontSize: 18,
    color: "#0B1F34",
  },
});

export default CreateRecord;
