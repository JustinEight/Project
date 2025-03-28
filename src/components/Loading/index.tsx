import React, { PureComponent } from "react";

import { Animated, StyleSheet, View } from "react-native";

import LoadingDots from "./LoadingDots";

interface Props {}

interface States {
  visible: boolean;
  text: string;
}

export default class Loading extends PureComponent<Props, States> {
  private animate: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
      text: "",
    };
    this.animate = new Animated.Value(0);
  }

  show(text: string = "") {
    this.setState({ visible: true, text: text }, this.fadeIn);
  }

  hide() {
    this.faseOut();
    setTimeout(() => {
      this.setState({ visible: false, text: "" });
    }, 250);
  }

  isLoading() {
    return this.state.visible;
  }

  fadeIn() {
    Animated.timing(this.animate, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }

  faseOut() {
    Animated.timing(this.animate, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }

  //*********************** */
  render() {
    return (
      <>
        {this.state.visible && (
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              { opacity: this.animate },
            ]}
          >
            <View style={styles.container}>
              <View style={styles.child}>
                <LoadingDots />
              </View>
            </View>
          </Animated.View>
        )}
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00000080",
    justifyContent: "center",
    alignItems: "center",
  },
  child: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 36,
    justifyContent: "center",
    alignItems: "center",
  },
});
