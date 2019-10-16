import React, { Component } from 'react';
import { View, Text } from 'native-base';
import PrimaryButton from '../../utils/Button';
import { task_action_creator } from '../../actions/task.actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TaskScreen extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getTasks();
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <Text>TASK Page</Text>
        <PrimaryButton
          title="GO TO Equipment"
          onPress={() => this.props.navigation.navigate('Equipment')}
          style={{
            marginHorizontal: 15,
            paddingVertical: 30,
            marginTop: 20
          }}
          textStyle={
            {
              /* styles for button title */
            }
          }
        />
      </View>
    );
  }
} 
const mapStateToProps = (state) => {
  console.log('tasks', state)
  return {
    tasks: state
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTasks: task_action_creator
    },
    dispatch
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(TaskScreen);
