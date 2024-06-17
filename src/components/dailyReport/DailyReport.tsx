import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { dailyReportStyles } from './DailyReport.styles';
import { BlurView } from 'expo-blur';
import { colors, commonStyles } from '../../styles';
import { useState } from 'react';
import { calculateWeeksPassed, formatDate } from './config';

interface DailyReportProps {
  report: {
    join: string;
    firstName: string;
    lastName: string;
    recordedSymptoms: any[];
  };
}

const i18Text = {
  title: 'Daily report',
  dailyMessage: 'Rise and shine, Jo! How do you feel today?',
  conditionTitle: 'Your symptoms',
};

export const DailyReport = ({ report }: DailyReportProps) => {
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

  const renderSymptoms = () => {
    const today = new Date();
    const todayString = today.toDateString();
    const symptomsRecorded = controls['today']
      ? report.recordedSymptoms.filter((symptom) => {
          const symptomDate = new Date(symptom.date);
          return symptomDate.toDateString() === todayString;
        })
      : report.recordedSymptoms;
    return (
      <ScrollView persistentScrollbar={true}>
        {symptomsRecorded.length ? (
          symptomsRecorded.map((item, index) => (
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
                    {
                      textAlign: 'right',
                      fontWeight: '600',
                    },
                  ]}
                >
                  {formatDate(item.date)}
                </Text>
              </View>
            </View>
          ))
        ) : (
          <View style={{ marginTop: '10%' }}>
            <Text style={[small, { textAlign: 'center' }]}>
              No Symptoms added today
            </Text>
          </View>
        )}
      </ScrollView>
    );
  };

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
                {calculateWeeksPassed(report.join)}
              </Text>
              <Text style={h3}>Weeks</Text>
            </View>
            <View style={[container, { height: 120, flex: 3 }]}>
              {renderSymptoms()}
            </View>
          </View>
        </BlurView>
      </View>
    </>
  );
};
