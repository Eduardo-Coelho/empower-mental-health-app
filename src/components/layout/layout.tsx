import { Image, Text, View } from 'react-native';
import { layoutStyles } from './layout.styles';
import React, { ReactNode, useMemo } from 'react';
import { NavigationBar } from '..';
import { BlurView } from 'expo-blur';
import { commonStyles } from '../../styles';

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
  const cachedURL = useMemo(() => require('../../assets/background.jpg'), []);
  return (
    <>
      <View style={layoutStyles.container}>
        <View>
          <Text>The nav</Text>
        </View>
        <View>{children}</View>
      </View>
      <View>
        <BlurView
          intensity={100}
          tint={'default'}
          style={commonStyles.blurContainer()}
        >
          <NavigationBar navigation={navigation} />
        </BlurView>
      </View>
      <Image source={cachedURL} style={layoutStyles.background} />
    </>
  );
};
