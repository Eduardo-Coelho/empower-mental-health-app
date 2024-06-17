import { Text, View } from 'react-native';
import { DailyReport, Layout } from '../../components';

interface HomeProps {
  navigation: any;
}

const mockData = {
  join: 'Sat Apr 06 2024 10:00:00 GMT+0100',
  firstName: 'jon',
  lastName: 'Smith',
  recordedSymptoms: [
    {
      title: 'Feeling Anxious',
      description: 'I woke up today feeling anxious.',
      date: 'Fri Jun 07 2024 12:58:11 GMT+0100',
    },
    {
      title: 'Depressed Mood',
      description:
        'I felt a persistent sadness and lost interest in activities I usually enjoy.',
      date: 'Fri Jun 05 2024 12:30:00 GMT+0100',
    },
    {
      title: 'Irritability',
      description:
        "I've been feeling unusually irritable and frustrated throughout the day.",
      date: 'Fri Jun 05 2024 14:00:00 GMT+0100',
    },
    {
      title: 'Social Withdrawal',
      description: 'I avoided social interactions and preferred to stay alone.',
      date: 'Fri Jun 05 2024 16:00:00 GMT+0100',
    },
    {
      title: 'Panic Attack',
      description:
        'I experienced a sudden episode of intense fear and physical symptoms.',
      date: 'Fri Jun 05 2024 17:30:00 GMT+0100',
    },
    {
      title: 'Lack of Concentration',
      description:
        'I found it difficult to focus on tasks and my mind often wandered.',
      date: 'Fri Jun 05 2024 19:00:00 GMT+0100',
    },
    {
      title: 'Insomnia',
      description:
        'I had trouble falling asleep and woke up several times during the night.',
      date: 'Fri Jun 05 2024 22:00:00 GMT+0100',
    },
    {
      title: 'Excessive Worrying',
      description:
        'I spent a lot of time worrying about various things, even minor issues.',
      date: 'Fri Jun 05 2024 23:30:00 GMT+0100',
    },
    {
      title: 'Mood Swings',
      description:
        'My mood changed rapidly from feeling happy to feeling sad or angry.',
      date: 'Sat Jun 06 2024 08:00:00 GMT+0100',
    },
    {
      title: 'Fatigue',
      description:
        'I felt extremely tired and lacked energy despite getting enough sleep.',
      date: 'Sat Jun 06 2024 10:00:00 GMT+0100',
    },
  ],
};

export const Home = ({ navigation }: HomeProps) => {
  return (
    <Layout navigation={navigation}>
      <DailyReport report={mockData} />
    </Layout>
  );
};
