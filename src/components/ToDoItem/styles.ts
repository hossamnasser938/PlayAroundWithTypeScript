import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#bbb',
    padding: 10,
    margin: 10,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  removeButton: {
    color: '#f00',
    fontSize: 24,
    paddingHorizontal: 10,
  },
  updateButton: {
    color: '#bbb',
    fontSize: 24,
    paddingHorizontal: 10,
  },
  titleInput: {
    flex: 1,
  },
});

export default styles;
