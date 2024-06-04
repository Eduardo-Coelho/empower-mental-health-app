import { Image, Text, View } from 'react-native';
import { layoutStyles } from './layout.styles';
import React, { ReactNode } from 'react';
import { NavigationBar } from '..';
import { BlurView } from 'expo-blur';

type Screens = 'Home' | 'Appointments' | 'Bookmarks' | 'Settings';

interface LayoutProps {
  children: ReactNode;
  currentScreen?: Screens;
  navigation: any;
}

export const Layout = ({
  children,
  currentScreen,
  navigation,
}: LayoutProps) => {
  return (
    <>
      <View style={layoutStyles.container}>
        <View>
          <Text>The nav</Text>
        </View>

        <View style={{ flex: 1 }}>{children}</View>
      </View>
      <View>
        <BlurView intensity={30} style={layoutStyles.blurContainer}>
          <NavigationBar navigation={navigation} />
        </BlurView>
      </View>
      <Image
        source={require('../../assets/background.jpg')}
        style={layoutStyles.background}
        blurRadius={1}
      />
    </>
  );
};
