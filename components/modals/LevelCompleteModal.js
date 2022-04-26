import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { StyleSheet, Text, View, Pressable, Modal, Button } from "react-native";
import PlantSVG from '../../assets/plant.svg'
import PondSVG from '../../assets/pond.svg'
import ModalThreeCoin from "../../assets/modal-three-coin.svg";

const LevelCompleteModal = forwardRef((props, ref) => {
  const [modalVisible, setModalVisible] = useState(false);
  const currLevel = "1";

  useImperativeHandle(ref, () => ({
    onPress: () => setModalVisible(true),
  }));


  const onPress = () => {
    setModalVisible(!modalVisible)
    props.handleClaim(true)
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.genericDisplay}>
        <View style={styles.modalStyle}>
          {
            props.land === "Plant" && <PlantSVG width = {70} height = {70} />
          }
          {
            props.land === "Pond" && <ModalThreeCoin/>
          }
          {/* <Text style={styles.pointsEarned}>x{lan}</Text> */}
          <View>
            <Text style={styles.modalText}>You have completed Level 1!</Text>
            <View style={styles.line}></View>
            {props.land === 'Plant' && <View>  
                <Text style={{ marginBottom: 20, fontSize: 18 }}>
                    You have earned the Plant from the mini game.
                </Text>
                <Text style={{ marginTop: 10, marginBottom: 60, fontSize: 18 }}>
                Next time,  put your savings knowledge to the test and save up your coins to earn a bigger reward!
                </Text>
            </View>}
            {
              props.land === "Pond" && <View>  
                <Text style={{ marginBottom: 20, fontSize: 18 }}>
                    Great choice, now next level you will unlock the park!
                </Text>
                <Text style={{ marginTop: 10, marginBottom: 60, fontSize: 18 }}>
                    Now you're ready for level 2.
                </Text>
              </View> 
            }
          </View>
        </View>
        <Pressable
          onPress={onPress}
          style={styles.goButton}
        >
          <Text style={{ fontWeight: "700" }}>Claim!</Text>
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
    height: "52%",
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
    bottom: 180,
  },
});

export default LevelCompleteModal;
