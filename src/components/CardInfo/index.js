import React, {Component} from 'react';
import { View, Text, StyleSheet, 
  TouchableOpacity, Image, 
  ScrollView, Platform, FlatList}  from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import uuid from 'uuid';
import moment from 'moment';
import back from '../../../images/back.png'; 
import whiteHands from '../../../images/white_hands.png';
import state from '../../../images/state.png';
import group from '../../../images/Group.png';
import user1 from '../../../images/user1.png';
import user2 from '../../../images/user2.png';
import Comment from '../Comment';
import AddComment from '../AddComment';
import { TO_PRAY, ADD_COMMENT } from '../../../store/actions';

class CardInfo extends Component {
  static navigationOptions = ({navigation}) => ({
		headerStyle: {
			elevation: 0,
			shadowOpacity: 0,
      borderBottomWidth: 0,
      backgroundColor: '#BFB393'
    },
    headerBackImage: () => (<MyCustomHeaderBackImage/>),
    headerRight: (
			<TouchableOpacity
        onPress={() => { 
          navigation.getParam('toPray')(navigation.getParam('cardId'));
        }}
				style={ { marginRight: 20 } }>
        <Image source={whiteHands}/>
			</TouchableOpacity>
		)
  })

  _keyExtractor = (item, index) => uuid();

  render() {
    let cardId = this.props.navigation.getParam('cardId', {});
    let { comments, addComment, cards } = this.props;
    return (
        <View style={styles.mainContainer}>

          <View style={styles.prayerTitleContainer}>
            <Text style={styles.prayerTitleText}>
              {cards[cardId].cardDescription}
            </Text>
          </View>
          <ScrollView contentContainerStyle={styles.scrollViewCont}>
            <View style={styles.lastPrayingCont}>
              <Image style={styles.lastPrayingImage} source={state}/>
              <Text style={styles.lastPrayingText}>
                {'Last prayed ' + moment(cards[cardId].lastPrayed).fromNow()}
              </Text>
            </View>
            <View style={styles.containerDataMain}>
              <View style={[styles.containerData, styles.borderRightBottom]}>
                <Text style={[styles.dataTextMain, {fontSize: 22}]}>
                  { cards[cardId].dateAdding }
                </Text>
                <Text style={styles.dataTextDescription}>Date Added</Text>
                <Text style={styles.dataTextBlue}>Opened for 4 days</Text>
              </View>
              <View style={[styles.containerData, styles.borderBottom]}>
                <Text style={styles.dataTextMain}>
                  {cards[cardId].timesPrayedByMe + cards[cardId].timesPrayedByOthers}
                </Text>
                <Text style={styles.dataTextDescription}>Times Prayed Total</Text>
              </View>
            </View>
            <View style={styles.containerDataMain}>
              <View style={[styles.containerData, styles.borderRightBottom]}>
                <Text style={styles.dataTextMain}>
                  {cards[cardId].timesPrayedByMe}
                </Text>
                <Text style={styles.dataTextDescription}>Times Prayed by Me</Text>
              </View>
              <View style={[styles.containerData, styles.borderBottom]}>
                <Text style={styles.dataTextMain}>
                  {cards[cardId].timesPrayedByOthers}
                </Text>
                <Text style={styles.dataTextDescription}>Times Prayed by Others</Text>
              </View>
            </View>
            <View style={styles.membersMain}>
              <Text style={styles.memberText}>
                MEMBERS
              </Text>
              <View style={styles.memberRow}>
                <Image source={user1} style={styles.memberImg} />
                <Image source={user2} style={styles.memberImg}/>
                <TouchableOpacity
                  onPress={ () => alert('Congratulations! You added the member!')}
                  // onPress={ () => console.warn(cards[cardId].timesPrayedByMe)}
                  style={ styles.memberButton }>
                  <Image source={group}/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.commentsMain}>
              <View style={styles.commentName}>
                <Text style={styles.memberText}>
                  COMMENTS
                </Text>
              </View>
              <FlatList
                  data={cards[cardId].comments}
                  extraData={comments}
                  keyExtractor={this._keyExtractor}
                  renderItem = {({item}) => (
                    <Comment 
                      commentDescription = {comments[item.id].commentDescription}
                      author = {comments[item.id].author} 
                      dateAdding = {comments[item.id].dateAdding}
                    />
                  ) }
                />
            </View>
            <AddComment 
              addComment={addComment}
              cardId={cardId}
              />
          </ScrollView>
        </View>
    )
  }
}

class MyCustomHeaderBackImage extends Component {
  render() {
    return (
      <Image
        source={back}
        style={styles.backImage}
      />
    );
  }
}

const styles = StyleSheet.create({
  backImage: {
    marginLeft: Platform.OS === 'ios' ? 15 : 0
  },
  mainContainer: {
    flexDirection: 'column',
    height: '100%'
  },
  scrollViewCont: {
  },
  prayerTitleContainer: {
    backgroundColor: '#BFB393'
  },
  prayerTitleText: {
    color: '#fff',
    fontSize: 17,
    marginLeft: 15,
    marginTop: 15,
    marginRight: 15,
    marginBottom: 23,

  },
  lastPrayingCont: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5'

  },
  lastPrayingImage: {
    marginLeft: 15,
    marginTop: 15,
  },
  lastPrayingText: {
    fontSize: 17,
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 15
  },
  containerDataMain: {
    flexDirection: 'row',
    minWidth: '100%'
  },
  containerData: {
    minWidth: '50%',
    paddingLeft: 15,
    paddingTop: 25,
    height: 108
  },
  dataTextMain: {
    fontSize: 32,
    color: '#BFB393'

  },
  dataTextDescription: {
    fontSize: 13,
    color: '#514D47'
  },
  dataTextBlue: {
    fontSize: 13,
    color: '#72A8BC'
  },
  borderRightBottom: {
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    borderRightColor: '#E5E5E5',
    borderRightWidth: 1
  },
  borderBottom: {
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1
  },
  membersMain: {
    paddingTop: 20,
    paddingBottom: 15
    
  },
  memberRow: {
    flexDirection: 'row',
    color: '#72A8BC',
    fontSize: 13,
    marginTop: 13,
    marginLeft: 10
  },
  memberText: {
    color: '#72A8BC',
    fontSize: 13,
    marginLeft: 15
  },
  memberImg: {
    marginLeft: 4

  },
  memberButton: {
    marginLeft: 7

  },
  commentsMain: {
    flexDirection: 'column',
  },
  commentName: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 15,
    paddingTop: 5
  }
})

let mapStateToProps = (state, ownProps) => {
  return {
    cards: state.cards,
    comments: state.comments,
  }
  
}

let mapDispatchToProps = (dispatch) => {
  return {
    toPray: bindActionCreators(TO_PRAY, dispatch),
    addComment: bindActionCreators(ADD_COMMENT, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardInfo);
