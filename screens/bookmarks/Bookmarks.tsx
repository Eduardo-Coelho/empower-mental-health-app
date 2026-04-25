import { Layout } from '@/components/layout/layout';
import { Text, View } from 'react-native';

interface BookmarksProps {
  navigation: any;
}

export const Bookmarks = ({ navigation }: BookmarksProps) => {
  return (
    <Layout navigation={navigation}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Bookmarks Screen</Text>
      </View>
    </Layout>
  );
};
