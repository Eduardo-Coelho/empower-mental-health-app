import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { dailyReportStyles } from './DailyReport.styles';
import { BlurView } from 'expo-blur';
import { colors, commonStyles } from '../../styles';
import { useState } from 'react';

const i18Text = {
  title: 'Daily report',
  dailyMessage: 'Rise and shine, Jo! How do you feel today?',
  conditionTitle: 'Your symptoms',
};

const mockData = {
  join: 'Sat Apr 06 2024 10:00:00 GMT+0100',
  firstName: 'jon',
  lastName: 'Smith',
  recordedSymptoms: [
    {
      title: 'Feeling Anxious',
      description: 'I woke up today feeling anxious.',
      date: 'Fri Jun 05 2024 11:16:56 GMT+0100',
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

export const DailyReport = () => {
  const [controls, setControls] = useState({
    ['today']: true,
    ['show all']: false,
  });

  const {
    big,
    h1,
    h2,
    h3,
    container,
    conditionsContainer,
    button,
    label,
    buttonsContainer,
    symptomCard,
    symptomCardBody,
    symptomCardFooter,
    small,
  } = dailyReportStyles;

  /**
   *
   * @todo move into a deferent file and refactor
   */
  const formatDate = (str: string) => {
    const date = new Date(str);
    const options: any = { weekday: 'short', day: '2-digit', month: 'short' };
    return date.toLocaleDateString('en-GB', options);
  };

  /**
   *
   * @todo move into a deferent file and refactor
   */
  const calculateWeeksPassed = (str: string) => {
    const givenDate: any = new Date(str);
    const currentDate: any = new Date();
    const differenceInMs: number = currentDate - givenDate;
    const weeksPassed = differenceInMs / (1000 * 60 * 60 * 24 * 7);
    return Math.floor(weeksPassed);
  };

  const renderButtons = () => (
    <View style={buttonsContainer}>
      <TouchableOpacity
        onPress={() =>
          setControls({
            ['today']: true,
            ['show all']: false,
          })
        }
        style={[
          button,
          controls['today']
            ? { backgroundColor: colors.ghostWhite }
            : { backgroundColor: 'rgba(255, 255, 255, 0)' },
        ]}
      >
        <Text
          style={[
            label,
            controls['today']
              ? { color: colors.dark }
              : { color: colors.ghostWhite },
          ]}
        >
          Today
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          setControls({
            ['today']: false,
            ['show all']: true,
          })
        }
        style={[
          button,
          controls['show all']
            ? { backgroundColor: colors.ghostWhite }
            : { backgroundColor: 'rgba(255, 255, 255, 0)' },
        ]}
      >
        <Text
          style={[
            label,
            controls['show all']
              ? { color: colors.dark }
              : { color: colors.ghostWhite },
          ]}
        >
          Show all
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <View style={container}>
        <Text style={h2}>{i18Text.title}</Text>
        <Text style={h1}>{i18Text.dailyMessage}</Text>
      </View>

      <View style={container}>
        <View style={conditionsContainer}>
          <Text style={[h2, { marginTop: 18 }]}>{i18Text.conditionTitle}</Text>
          <View>
            <BlurView
              intensity={100}
              tint={'default'}
              style={commonStyles.blurContainer(30, 1)}
            >
              {renderButtons()}
            </BlurView>
          </View>
        </View>

        <BlurView
          intensity={100}
          tint={'default'}
          style={commonStyles.blurContainer(30, 1)}
        >
          <View style={conditionsContainer}>
            <View
              style={[
                container,
                {
                  alignItems: 'center',
                  flex: 1,
                },
              ]}
            >
              <Text style={[big, { marginBottom: 30 }]}>
                {calculateWeeksPassed(mockData.join)}
              </Text>
              <Text style={h3}>Weeks</Text>
            </View>
            <View style={[container, { maxHeight: 150, flex: 2 }]}>
              <ScrollView persistentScrollbar={true}>
                {mockData.recordedSymptoms.map((item, index) => (
                  <View key={index} style={symptomCard}>
                    <Text style={h2}>{item.title}</Text>
                    <View style={symptomCardBody}>
                      <Text style={[small, { fontWeight: '700' }]}>
                        {item.description}
                      </Text>
                    </View>

                    <View style={symptomCardFooter}>
                      <Text
                        style={[
                          small,
                          { textAlign: 'right', fontWeight: '600' },
                        ]}
                      >
                        {formatDate(item.date)}
                      </Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </BlurView>
      </View>
    </>
  );
};
