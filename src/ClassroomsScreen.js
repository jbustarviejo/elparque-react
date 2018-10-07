import React from 'react';
import { StyleSheet, Text, ScrollView, Image, WebView } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ClassroomsScreen extends React.Component {
  static navigationOptions = {
    title: 'Clases',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.backgroundVideo}>Sala roja</Text>
          <WebView
          style={styles.backgroundVideo}
          automaticallyAdjustContentInsets={true}
          scalesPageToFit={true}
          startInLoadingState={false}

          scrollEnabled={false}
          source={{html: this.formatHtml1(), baseUrl: '/'}} />
        <Text style={styles.backgroundVideo}>Sala amarilla</Text>
          <WebView
          style={styles.backgroundVideo}
          automaticallyAdjustContentInsets={true}
          scalesPageToFit={true}
          startInLoadingState={false}

          scrollEnabled={false}
          source={{html: this.formatHtml2(), baseUrl: '/'}} />
        <Text style={styles.backgroundVideo}>Sala morada</Text>
          <WebView
          style={styles.backgroundVideo}
          automaticallyAdjustContentInsets={true}
          scalesPageToFit={true}
          startInLoadingState={false}

          scrollEnabled={false}
          source={{html: this.formatHtml3(), baseUrl: '/'}} />
      </ScrollView>
    );
  }

  formatHtml1 () {
    return ('<html><body><img style="width: 100%; height: 100%; position: absolute; top:0; bottom: 0; left: 0; right: 0; text-align: center;margin:auto;" alt="Cargando..." src="http://80.224.5.16:6751/axis-cgi/mjpg/video.cgi" ></body></html>');
  }
  formatHtml2 () {
    return ('<html><body><img style="width: 100%; height: 100%; position: absolute; top:0; bottom: 0; left: 0; right: 0; text-align: center;margin:auto;" alt="Cargando..." src="http://80.224.5.16:6742/axis-cgi/mjpg/video.cgi" ></body></html>');
  }
  formatHtml3 () {
    return ('<html><body><img style="width: 100%; height: 100%; position: absolute; top:0; bottom: 0; left: 0; right: 0; text-align: center;margin:auto;" alt="Cargando..." src="http://80.224.5.16:6745/axis-cgi/mjpg/video.cgi" ></body></html>');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
     flexDirection: 'column',
     justifyContent: 'center',
     textAlign: 'center',
  },
  backgroundVideo: {
    alignItems: 'center',
     flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    width: 300;
  }
});
