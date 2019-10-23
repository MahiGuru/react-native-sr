import React, { Component } from 'react';
import { Text,Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail,  Left, Body, Icon, Button, Content } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default class DeckSwiperExample extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <Container style={{backgroundColor: 'blue'}}>
      
      <View>

      
      <Header transparent style={{position:"absolute", top: 0, zIndex: 111}}>
        <Left>
          <Button transparent>
            <Ionicons name='md-arrow-round-back' size={24} color={'white'} />
          </Button>
        </Left>
        <Body>
           <Text></Text>
        </Body> 
      </Header>
        {this.props.source ? 
          (<DeckSwiper
            dataSource={this.props.source}
            renderItem={item =>
              <Card style={{ elevation: 3 }}> 
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={{uri: item.image}} />
                </CardItem>
                 
              </Card>
            }
          />)
          : null }</View>
      </Container>
    );
  }
}