import React, { Component } from 'react';
import { View, Card, CardItem, Text, Content, Container } from 'native-base';
import CameraView from './CameraView';
import {Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";


class Photocard extends Component {
    constructor(props) {
        super(props);
        this.handleThumb = this.handleThumbView.bind(this); 
        this.state = {
          isCameraOpen: false,
          thumbImageSrc: null          
        };
    }
    handleThumbView(data) {
        console.log('handleThumbView ', data);
        if(data){
        this.setState({ isCameraOpen: false, thumbImageSrc: 'data:image/jpeg;base64,'+data.base64 });
        }
    } 

    render() {
        return ( 
                <Card style={{ justifyContent:'center', borderRadius: 10, overflow:'hidden', textAlign: 'center'}}> 
                    <CardItem cardBody button style={{ justifyContent:'center', borderRadius: 10, overflow:'hidden', minHeight:'100%', textAlign: 'center'}}>
                    {
                        this.props.previewSrc ? (
                            <View style={{width:'100%', height: '100%'}}>
                                <View style={{position:'absolute', right:10, top:10, zIndex: 111, padding:5}}>
                                    <TouchableOpacity onPress={() => {
                                        this.props.removeImageTriggered(this.props.type, null); 
                                    }}>
                                        <Ionicons name='ios-close-circle' size={25}  color={'white'}/>   
                                    </TouchableOpacity>
                                </View>
                                <Image source={{uri: this.props.previewSrc}}  style={{ width: '100%', height: '100%'}} />
                            </View> 
                        ) 
                        : 
                        (
                            <View style={{ width: '100%', height: '100%', flex:1, justifyContent:'center'}}>
                                <TouchableOpacity style={{ width: '100%', height: '100%', justifyContent:'center', alignItems:'center'}} onPress={() => {
                                    this.props.cameraTriggered(this.props.type, true)
                                 }}>
                                    
                                    <Ionicons name="ios-camera" size={90} color={'#004796'}></Ionicons>
                                    <Text style={{color:'#004796'}}>{this.props.title} </Text>
                                </TouchableOpacity>
                            </View>
                                ) 
                    }
                    
                    </CardItem>
                        
                    
                </Card>  
        );
    }
}

export default Photocard;