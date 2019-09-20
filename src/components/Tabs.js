import React from 'react'

import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import {
    Container,
    Header,
    Tab,
    Tabs,
    TabHeading,
    Icon,
  } from 'native-base';


function SrTabs() {
    const [currentTab, setCurrentTab] = React.useState(0);
    const initialArr = [{title: 'Maintenance', icon: 'camera'}, {title: 'Services', icon: 'camera'}, 
    {title: 'Journel', icon: 'camera'},{title: 'Profile', icon: 'camera'}]
    return (
        <Container> 

          <Tabs
            tabBarPosition={'bottom'}
            locked
            tabBarUnderlineStyle={{ backgroundColor: 'transparent', height: 5 }}
            initialPage={currentTab} 
            onChangeTab={({ i }) => setCurrentTab(i)}
          >
          { initialArr.map((prop, key) => {
                return (
                    <Tab
                        key={key}
                        style={styles.tabHeading}
                        heading={
                        <TabHeading style={currentTab == key ? styles.activeTabStyle : styles.inactiveTabStyle}>
                            <Icon name={prop.icon} style={currentTab == key ? styles.activeTextStyle : null}/>
                            <Text style={[currentTab == key ? styles.activeTextStyle : styles.inactiveTextStyle, {
                                fontSize:12  }]}>{prop.title}</Text>
                        </TabHeading>
                        }
                    >
                        <Text>{prop.title} </Text>
                    </Tab>
                    );
                })
            }
             
          </Tabs>
        </Container>
    )
}

const styles = StyleSheet.create({
    inactiveTextStyle: { 
        fontSize:12  
    },
    activeTextStyle: {
      color:'#0564A4',
      fontWeight: 'bold'
    },
    activeTabStyle: {
      borderTopWidth:3,
      borderTopColor:'#0564A4',
      backgroundColor:'white',
      flex:1,
      flexDirection: "column",
      color:'#0564A4'
    },
    inactiveTabStyle: {
      borderTopWidth:3,
      borderTopColor:'#0564A4',
      backgroundColor:'white',
      color:'red',
      flex:1,
      fontSize:12,
      flexDirection: "column"
    }
  });
export default SrTabs
