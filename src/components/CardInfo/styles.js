import { StyleSheet, Platform } from 'react-native';

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
  prayerTitleTextInput: {
    color: '#fff',
    marginLeft: 15,
    fontSize: 17,
    marginBottom: Platform.OS === 'ios' ? 15 : 0
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

export default styles;