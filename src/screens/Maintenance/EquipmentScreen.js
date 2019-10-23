import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Text,
  Right,
  Body,
  Card,
  CardItem,
  Header,
  Button
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { equipment_action_creator } from '../../actions/equipments.actions';
import { Ionicons} from '@expo/vector-icons';

class EquipmentScreen extends Component {
  
  static navigationOptions = ({navigation}) => {
    const { params } = navigation.state;
    this.requestTypeId = navigation.getParam('domainId');
    return { 
      title: params ? params.title: ''
    }
  };
  componentDidMount(){
    const { params } = this.props.navigation.state;
    console.log("DID MOUNT ", this.props.asset, params);
    this.props.getEquipments(this.props.asset.assetType,this.props.asset.id, /*params.domainId*/null);
  }
  render() {
    const { params } = this.props.navigation.state;
    const mapListItems = (data) => {
      return (
        
        <TouchableOpacity  onPress={() => {
          console.log("CLICKED ", data);
            this.props.navigation.navigate("TakePicture", {
              title: params.title,
            }) }}>
            <CardItem style={styles.container} >  
                <Body style={{flex: 0.8}}>
                    <Text style={{fontSize: 14}}>{data.item.label}</Text>
                </Body>
                <Right style={{flex:0.2}}>
                    <Ionicons name='ios-arrow-forward' size={25}/>
                </Right>
          </CardItem>
        </TouchableOpacity>
      );
}
    return (
      <Container>
        <Content>  
          {this.props.equipments ? <Card transparent dataArray={this.props.equipments} 
            renderRow={(data) =>
                mapListItems(data)}>
            </Card> : null 
          }
          {(this.props.equipments && this.props.equipments.length <= 0) ?
            (<Button>
              <Text style={{color:'black', fontSize: 18}}>Skip</Text>
            </Button>) : null
          }
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
    paddingLeft:20,
    margin:3,
    borderColor: '#b5b5b5',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 25,
    fontSize: 12
  }
}); 


function mapStateToProps(state) {
  console.log("EQUIPMENT SCREEN STATE >>>>>> ", state);
  return {
    equipments: state.equipments.data,
    asset: state.asset,
    assetDetails: state.assetDetails
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getEquipments: equipment_action_creator
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EquipmentScreen); 