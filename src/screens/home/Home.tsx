import { Text, View } from 'react-native';
import { DailyReport, Layout } from '../../components';

interface HomeProps {
  navigation: any;
}

export const Home = ({ navigation }: HomeProps) => {
  return (
    <Layout navigation={navigation}>
      <DailyReport />
    </Layout>
  );
};
