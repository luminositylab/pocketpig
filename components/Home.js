import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
  Button,
} from "react-native";
// import Modal from "react-native-modal";
import CongratsModal from "./modals/CongratsModal";
import AvatarImg from "../assets/avatar.svg";

const Home = () => {
  const today = new Date().toLocaleDateString();
  const modaldRef = useRef();
  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => modaldRef.current.onPress()}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>

      <View>
        <CongratsModal ref={modaldRef} />
      </View>

      <View style={styles.header}>
        <Text style={{ fontSize: 18, textAlign: "center" }}>{today}</Text>
        <View style={styles.avatarSettings}>
          <View style={styles.avatar}>
            <AvatarImg width="48" height="48" />
          </View>
          <Image
            style={styles.setting}
            source={require("../assets/setting.png")}
          />
        </View>
      </View>

      <View>
        <Text style={{ fontWeight: "bold", fontSize: 24, textAlign: "center" }}>
          My Title
        </Text>
        <View style={styles.amountContainer}>
          <Image
            source={require("../assets/coin.png")}
            style={{ width: 22, height: 22, marginRight: 5 }}
          ></Image>
          <Text style={{ fontSize: 18, paddingBottom: 2 }}>30,000</Text>
        </View>
        <ImageBackground
          source={require("../assets/home-page-image.png")}
          resizeMode="cover"
          style={styles.homeImage}
        ></ImageBackground>
      </View>

      <View style={styles.footerTab}>
        <Image
          source={require("../assets/game.png")}
          style={{ width: 50, height: 40 }}
        ></Image>
        <Image
          source={require("../assets/pig.png")}
          style={{ width: 40, height: 40 }}
        ></Image>
        <Image
          source={require("../assets/chart.png")}
          style={{ width: 40, height: 40 }}
        ></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
  },
  header: {
    width: 303,
    textAlign: "center",
  },
  avatarSettings: {
    marginTop: 10,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 50,
    backgroundColor: "gray",
  },
  setting: {
    height: 27,
    width: 27,
  },
  amountContainer: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  homeImage: {
    width: 388,
    height: 388,
    marginBottom: 50,
  },
  footerTab: {
    width: 335,
    borderRadius: 50,
    borderStyle: "solid",
    borderColor: "#EDF0EF",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
    shadowColor: "lightgray",
    shadowOpacity: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
  },
  genericDisplay: {
    alignItems: "center",
    justifyContent: "center",
  },
  modalStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: "70%",
    width: "90%",
    borderRadius: 44,
  },
});

export default Home;
