import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const Home = () => {
  const today = new Date().toLocaleDateString();

  return (
    <>
      <View style={styles.header}>
        <Text style={{ fontSize: 18 }}>{today}</Text>
        <View style={styles.avatarSettings}>
          <Image
            style={styles.avatar}
            source={require("../assets/avatar.svg")}
          />
          <Image
            style={styles.setting}
            source={require("../assets/setting.svg")}
          />
        </View>
      </View>

      <View>
        <Text style={{ fontWeight: "bold", fontSize: 24, textAlign: "center" }}>
          My Title
        </Text>
        <View style={styles.amountContainer}>
          <Image
            source={require("../assets/coin.svg")}
            style={{ width: 22, height: 22, marginRight: 5 }}
          ></Image>
          <Text style={{ fontSize: 18, paddingBottom: 2 }}>30,000</Text>
        </View>
        <ImageBackground
          source={require("../assets/home-page-image.svg")}
          resizeMode="cover"
          style={styles.homeImage}
        ></ImageBackground>
      </View>

      <View style={styles.footerTab}>
        <Image
          source={require("../assets/game.svg")}
          style={{ width: 50, height: 40 }}
        ></Image>
        <Image
          source={require("../assets/pig.svg")}
          style={{ width: 50, height: 40 }}
        ></Image>
        <Image
          source={require("../assets/chart.svg")}
          style={{ width: 50, height: 40 }}
        ></Image>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
});

export default Home;
