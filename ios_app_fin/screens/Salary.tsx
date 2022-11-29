import {StyleSheet, Text, View, Button, RefreshControl} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Config} from 'react-native-config';
import {GlobalStyles} from '../constants/styles';
import Payslip from '../components/Payslip';
import React from 'react';

const wait = (timeout: any) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

function Salary() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  async function checkEmployeeid() {
    try {
      const requestOptions = {
        method: 'Get',
      };
      console.log(Config);
      console.log(Config.REACT_APP_BACKEND_URL);

      const res = await fetch(
        `${Config.REACT_APP_BACKEND_URL}/user/count`,
        requestOptions,
      );
      const jsonData = await res.json();
      console.log(jsonData);
    } catch (error) {
      console.log('Fetch fail');
    }
  }
  return (
    <View style={styles.pageContainer}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{width: '100%', flex: 1}}>
        <Payslip />
        <Button title="Try fetch" onPress={checkEmployeeid} />
      </ScrollView>
    </View>
  );
}

export default Salary;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.backgroundColor,
  },
});
