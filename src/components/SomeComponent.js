import React, {Component} from 'react';
import { View, Text, PanResponder }  from 'react-native';

class SomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marginRight: 0
    }

    this.panR = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderRelease: (e, gestureState) => { 
        this.setState({marginRight: this.state.marginRight + 100})
       }
    })
  }

  render() {
    return (
      <View>
        <View style={{width: '100%', backgroundColor: 'red', marginRight: this.state.marginRight }} { ...this.panR.panHandlers }>
          <Text style={{fontSize: 17}}>
            Something wrong!
          </Text>
        </View>
      </View>
    )
  }
  
}
 
export default SomeComponent;
