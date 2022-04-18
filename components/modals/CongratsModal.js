import React, { forwardRef, useImperativeHandle, useState } from "react";
import { StyleSheet, Text, View, Pressable, Modal, Button } from "react-native";

import ModalThreeCoin from "../../assets/modal-three-coin.svg";

const CongratsModal = forwardRef((props, ref) => {
  const [modalVisible, setModalVisible] = useState(false);
  const currLevel = "1";
  const pointsEarned = "100";

  useImperativeHandle(ref, () => ({
    onPress: () => setModalVisible(true),
  }));

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
      // onShow={() => {
      //   setTimeout(() => {
      //     setModalVisible(false);
      //   }, 5000);
      // }}
    >
      <View style={styles.genericDisplay}>
        <View style={styles.modalStyle}>
          <ModalThreeCoin></ModalThreeCoin>
          <Text style={styles.pointsEarned}>x{pointsEarned}</Text>
          <View>
            <Text style={styles.modalText}>Congrats!</Text>
            <View style={styles.line}></View>
            <Text style={{ marginBottom: 20, fontSize: 18 }}>
              You have earned {pointsEarned} points from the mini game.
            </Text>
            <Text style={{ marginBottom: 20, fontSize: 18 }}>
              Let’s go back to Level {currLevel}.
            </Text>
          </View>
        </View>
        <Pressable
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.goButton}
        >
          <Text style={{ fontWeight: "700" }}>GO!</Text>
        </Pressable>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  genericDisplay: {
    // marginTop: "50%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    flex: 1,
  },
  modalStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: "45%",
    width: "90%",
    borderRadius: 44,
    paddingHorizontal: 40,
  },
  pointsEarned: {
    fontSize: 18,
    fontWeight: "700",
    position: "absolute",
    right: 110,
    top: 145,
  },
  modalText: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "left",
    alignSelf: "flex-start",
    marginBottom: 20,
    marginTop: 30,
  },
  line: {
    height: 1,
    backgroundColor: "#EBEDEC",
    shadowOffset: { height: 2, width: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    marginBottom: 20,
  },
  goButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EBEDEC",
    width: 268,
    height: 58,
    borderRadius: 30,
    position: "absolute",
    shadowOffset: { height: 3, width: 1 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    bottom: 205,
  },
});

export default CongratsModal;
