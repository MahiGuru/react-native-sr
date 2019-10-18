import React, { Component } from 'react';
import { View, Card, CardItem, Text, Content, Container } from 'native-base';
import CameraView from './CameraView';
import {Image} from 'react-native';
class Photocard extends Component {
    constructor(props) {
        super(props);
        this.handleThumb = this.handleThumbView.bind(this);
        this.closeCamera = this.closeCamera.bind(this);
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
    closeCamera(val) {
        console.log("close Camera");
        this.setState({ isCameraOpen: false});
    }
    render() {
        return ( 
                <Card style={{ justifyContent:'center', borderRadius: 10, overflow:'hidden', textAlign: 'center'}}> 
                    <CardItem cardBody button style={{ justifyContent:'center', borderRadius: 10, overflow:'hidden', minHeight:'90%', textAlign: 'center'}} onPress={() => {
                        this.props.cameraTriggered(true)
                    }}>
                    {
                        this.props.previewSrc ? (<Image source={{uri: this.props.previewSrc}}
                            style={{minWidth:100, height: 100}} />) : (
                                <Text style={{textAlign: 'center'}}>{this.props.title} </Text>
                            ) 
                    }
                    
                        
                    </CardItem>
                    
                </Card>  
        );
    }
}

export default Photocard;