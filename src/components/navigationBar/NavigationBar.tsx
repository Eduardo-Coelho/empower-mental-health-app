import { TouchableOpacity, View } from 'react-native';
import IconFoundation from 'react-native-vector-icons/Foundation';
import { navigationStyles } from './NavigationBar.styles';
import { color } from '../../styles';

interface NavigationBarProps {
  navigation: any;
}

export const NavigationBar = ({ navigation }: NavigationBarProps) => {
  return (
    <View style={navigationStyles.container}>
      <View style={navigationStyles.item}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <IconFoundation name="home" size={30} color={color.ghostWhite} />
        </TouchableOpacity>
      </View>
      <View style={navigationStyles.item}>
        <TouchableOpacity onPress={() => navigation.navigate('Appointments')}>
          <IconFoundation name="clock" size={30} color={color.ghostWhite} />
        </TouchableOpacity>
      </View>
      <View style={navigationStyles.item}>
        <TouchableOpacity onPress={() => navigation.navigate('Bookmarks')}>
          <IconFoundation name="bookmark" size={30} color={color.ghostWhite} />
        </TouchableOpacity>
      </View>

      <View></View>
    </View>
  );
};
