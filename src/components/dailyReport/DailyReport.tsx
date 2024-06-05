import { Text, TouchableOpacity, View } from 'react-native';
import { dailyReportStyles } from './DailyReport.styles';
import { BlurView } from 'expo-blur';
import { colors, commonStyles } from '../../styles';
import { useState } from 'react';

const i18Text = {
  title: 'Daily report',
  dailyMessage: 'Rise and shine, Jo! How do you feel today?',
  conditionTitle: 'Your symptoms',
};

export const DailyReport = () => {
  const [controls, setControls] = useState({
    ['today']: true,
    ['show all']: false,
  });

  const renderButtons = () => (
    <View style={dailyReportStyles.buttonsContainer}>
      <TouchableOpacity
        onPress={() =>
          setControls({
            ['today']: true,
            ['show all']: false,
          })
        }
        style={[
          dailyReportStyles.button,
          controls['today']
            ? { backgroundColor: colors.ghostWhite }
            : { backgroundColor: 'rgba(255, 255, 255, 0)' },
        ]}
      >
        <Text
          style={[
            dailyReportStyles.label,
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
          dailyReportStyles.button,
          controls['show all']
            ? { backgroundColor: colors.ghostWhite }
            : { backgroundColor: 'rgba(255, 255, 255, 0)' },
        ]}
      >
        <Text
          style={[
            dailyReportStyles.label,
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
      <View style={dailyReportStyles.container}>
        <Text style={dailyReportStyles.h2}>{i18Text.title}</Text>
        <Text style={dailyReportStyles.h1}>{i18Text.dailyMessage}</Text>
      </View>

      <View style={dailyReportStyles.container}>
        <View style={dailyReportStyles.conditionsContainer}>
          <Text style={[dailyReportStyles.h2, { marginTop: 18 }]}>
            {i18Text.conditionTitle}
          </Text>
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
          <View style={dailyReportStyles.conditionsContainer}>
            <View
              style={[
                dailyReportStyles.container,
                { margin: 10, alignItems: 'flex-start' },
              ]}
            >
              <Text style={dailyReportStyles.h1}>12</Text>
              <Text style={dailyReportStyles.h1}>April</Text>
            </View>
            <View
              style={[
                dailyReportStyles.container,
                { margin: 10, overflow: 'scroll' },
              ]}
            ></View>
          </View>
        </BlurView>
      </View>
    </>
  );
};
