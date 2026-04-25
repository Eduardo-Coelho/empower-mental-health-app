import { Layout } from '@/components/layout/layout';
import { Text, View } from 'react-native';

interface AppointmentsProps {
  navigation: any;
}

export const Appointments = ({ navigation }: AppointmentsProps) => {
  return (
    <Layout navigation={navigation}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Appointments Screen</Text>
      </View>
    </Layout>
  );
};
