import {View, Text, FlatList, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useAuthContext} from '../../src/Context/AuthContext';
import axios from 'axios';
import {USER_IP} from '@env';
import DynamicWorkshopComponent from '../../components/ComboScreenComponent/DynamicWorkshopComponent';
const DynamicWorkshopSelectScreen = () => {
  const {tokens} = useAuthContext();
  const [event, setEvent] = useState([]);
  useEffect(() => {
    events();
  }, []);
  const events = async () => {
    const response = await axios.get(
      `http://${USER_IP}/api/v1/user/events/category`,
      {headers: {Authorization: `Bearer ${tokens}`}},
    );
    // console.log(response.data.data.Tech);
    setEvent(response.data.data.Workshop);
  };
  return (
    <View>
      <Text>TechEvents</Text>
      <FlatList
        style={{marginBottom: 30, marginTop: 5}}
        data={event}
        renderItem={({item}) => <DynamicWorkshopComponent tech={item} />}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DynamicWorkshopSelectScreen;
