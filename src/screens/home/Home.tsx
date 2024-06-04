import { Text, View } from 'react-native';
import { Layout } from '../../components';

interface HomeProps {
  navigation: any;
}

export const Home = ({ navigation }: HomeProps) => {
  return (
    <Layout navigation={navigation}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red' }}>Home Screen</Text>
      </View>
    </Layout>
  );
};
