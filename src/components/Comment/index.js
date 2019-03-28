import React, {Component} from 'react';
import moment from 'moment';
import { View, Text, StyleSheet, 
  Image, Platform}  from 'react-native';
import commentUser1 from '../../../images/commentUser1.png';

class Comment extends Component {
  render() {
    let { commentDescription, author, dateAdding } = this.props;
    return (
      <View style={styles.commentMain}>
        <Image source={commentUser1} />
        <View style={styles.commentContText}>
          <View style={styles.commentContTextTop}>
            <Text style={styles.commentUserName}>
              {author}
            </Text>
            <Text style={styles.commentTime}>
              { moment(dateAdding).fromNow() }
            </Text>
          </View>
            <Text style={styles.commentText}>
              {commentDescription}
            </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  commentMain: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    height: 74,
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15
  },
  commentContText: {
    flexDirection: 'column',
    marginLeft: 9,

  },
  commentContTextTop: {
    flexDirection: 'row'
  },
  commentImg: {

  },
  commentUserName: {
    color: '#514D47',
    fontSize: 17,
    fontWeight: 'bold',
  },
  commentTime: {
    color: '#9C9C9C',
    fontSize: 13,
    marginLeft: 6,
    marginTop: 3
  },
  commentText: {
    fontSize: 17
  }


})

export default Comment;