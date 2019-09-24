import React, { Component } from "react";
import { View, Text, Container } from "native-base";
import PrimaryButton from "../../utils/Button";
import { request_type_action_creator } from "../../actions/request-types.action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class RequestTypeScreen extends Component {
  componentDidMount() {
    this.props.getRequestTypes();
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "flex-start" }}>
        <Text>RequestTypeScreen!</Text>
        <Container
          style={{
            flex: 1
          }}
        >
          {this.props.requestTypes ? (
            <View>
              <Text>{this.props.requestTypes.email}</Text>
              <Text>
                {this.props.requestTypes.first_name}
                {this.props.requestTypes.last_name}
              </Text>
            </View>
          ) : null}

          <Text>USER INFO : {JSON.stringify(this.props.users)}</Text>
          {this.props.users ? (
            <View>
              <Text>{this.props.users.email}</Text>
              <Text>
                {this.props.users.first_name}
                {this.props.users.last_name}
              </Text>
            </View>
          ) : null}
          <PrimaryButton
            title="GO TO Task"
            onPress={() => this.props.navigation.navigate("Task")}
            style={{
              marginHorizontal: 15,
              paddingVertical: 30,
              marginTop: 20
            }}
          />
        </Container>
      </View>
    );
  }
}

function mapStateToProps({ requestTypes, users }) {
  return {
    requestTypes: requestTypes.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getRequestTypes: request_type_action_creator
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestTypeScreen);
