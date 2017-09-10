import React from 'react';
import { StyleSheet, Text, ScrollView, Image, WebView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Sala roja</Text>
          <WebView
          style={styles.backgroundVideo}
          automaticallyAdjustContentInsets={true}
          scalesPageToFit={true}
          startInLoadingState={false}

          scrollEnabled={false}
          source={{html: this.formatHtml1(), baseUrl: '/'}} />
        <Text>Sala amarilla</Text>
          <WebView
          style={styles.backgroundVideo}
          automaticallyAdjustContentInsets={true}
          scalesPageToFit={true}
          startInLoadingState={false}

          scrollEnabled={false}
          source={{html: this.formatHtml2(), baseUrl: '/'}} />
        <Text>Sala morada</Text>
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
    return ('<html><body><img style="width: 100%; height: 100%" src="http://80.224.5.16:6751/axis-cgi/mjpg/video.cgi" ></body></html>');
  }
  formatHtml2 () {
    return ('<html><body><img style="width: 100%; height: 100%" src="http://80.224.5.16:6742/axis-cgi/mjpg/video.cgi" ></body></html>');
  }
  formatHtml3 () {
    return ('<html><body><img style="width: 100%; height: 100%" src="http://80.224.5.16:6745/axis-cgi/mjpg/video.cgi" ></body></html>');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundVideo: {
    width:300,
    height:300
  }
});
