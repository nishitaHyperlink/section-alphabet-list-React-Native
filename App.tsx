import React from 'react';
import {View, Text, SafeAreaView, SectionList} from 'react-native';

const DataSections = [
  {title: 'A', data: ['ALTERED', 'ABBY', 'ACTION U.S.A', 'AMUCK', 'ANGUISH']},
  {title: 'B', data: ['BEST MEN','BEYOND JUSTICE', 'BLACK GUNN','BLOOD RANCH', 'BEASTIES', ],},
  {title: 'C', data: ['CARTEL', 'CASTLE OF EVR', 'CHANCE']},
  {title: 'D', data: ['DAMON', 'DEVIN', 'DAN', 'DEN', 'DIN']},
  {title: 'E', data: ['ELLA', 'EASHAN', 'EVA']},
  {title: 'F', data: ['FABIAN', 'FAYE', 'FORAM', 'FENNY', 'FARAN']},
  {title: 'G', data: ['GIMMY', 'GULLY', 'GENNY']},
  {title: 'H', data: ['HARSH', 'HEMANGI', 'HEET', 'HETA', 'HITIKHSA']},
  {title: 'K', data: ['KUNAL', 'KAVYA', 'KIMPLE', 'KUMUD']},
  {title: 'M', data: ['MANSI', 'MONIKA', 'MONISH', 'MIRALI']},
  {title: 'N', data: ['NISHITA', 'NITA', 'NITIN']},
  {title: 'P', data: ['PAYAL', 'POOJA']},
  {title: 'R', data: ['RITIK']},
  {title: 'S', data: ['SANGITA', 'SURESH', 'SWETA']},
  {title: 'T', data: ['TINA']},
  {title: 'V', data: ['VANITA', 'VIVEK', 'VEENA']},
  {title: 'Y', data: ['YASH', 'YASHITA', 'YASVI', 'YOGITA']},
];

const App = () => {
  const renderItem = ({item, index}: any) => {
    return (
      <Text
        style={{
          padding: 10,
          fontSize: 20,
          height: 50,
          backgroundColor: '#00AD90',
          fontWeight: '600',
        }}>
        {item}
      </Text>
    );
  };

  const renderHeader = ({section}: any) => {
    return (
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          backgroundColor: '#a6b6ad',
          paddingLeft: 10,
          color: 'white',
        }}>
        {section.title}
      </Text>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <SectionList
        sections={DataSections}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};
export default App;
