import { StyleSheet, Text } from "react-native";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import { GamePlatform } from "./types";
import { RectButton } from "react-native-gesture-handler";

type Props = {
  platform: GamePlatform;
  onChange: (platform: GamePlatform) => void;
  icon: string;
  activePlatform?: GamePlatform;
};

const PlatformCard = ({ platform, onChange, icon, activePlatform }: Props) => {
  
    const isActive = platform === activePlatform;
    const backgroundColor = isActive ? '#fad7c8' : '#888';
    const textColor = isActive ? '#ED7947' : '#9E9E9E'
  
    return (
    <RectButton
      style={[styles.platformCard, { backgroundColor: backgroundColor }]}
      onPress={() => onChange(platform)}
    >
      <Icon name={icon} size={60} color={textColor} />
      <Text style={[styles.platformCardText, { color: textColor }]}>
        {platform === 'PLAYSTATION' ? 'PS' : platform}
      </Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  platformCard: {
    paddingTop: 30,
    paddingBottom: 20,
    width: "30%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  platformCardText: {
    marginTop: 40,
    color: "#9E9E9E",
    fontSize: 24,
    fontFamily: "Play_700Bold",
    textAlign: "center",
  },
});

export default PlatformCard;
