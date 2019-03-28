import React, {Component} from 'react';
import { View, Text, StyleSheet, 
  Image, Platform, TextInput, TouchableOpacity}  from 'react-native';
import message from '../../images/message-square.png';


class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentDescription: ''
    }
  }

  handleCommentDescription = (text) => {
    this.setState({commentDescription: text});
  }

  render() {
    let {cardId, addComment} = this.props
    return (
      <View style={styles.addCommentMain}>
      <TouchableOpacity 
        style={styles.addCommentImg} 
        onPress={ () => {
          addComment(this.state.commentDescription, cardId);
          this.handleCommentDescription('');
        } }>
        <Image source={message}/>
      </TouchableOpacity>
        <TextInput 
          style={styles.addCommentInput} 
          placeholder='Add a Comment'
          value={this.state.commentDescription}
          onChangeText={this.handleCommentDescription}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    addCommentMain: {
      flexDirection: 'row',
      width: '100%',
      paddingBottom: 30
    },
    addCommentImg: {
      marginTop: 17,
      marginLeft: 15
    },
    addCommentInput: {
      marginTop: Platform.OS === 'ios' ? 17 : 0,
      marginLeft: 15,
      fontSize: 17,
      width: '89%'
    }
  }
)

export default AddComment;