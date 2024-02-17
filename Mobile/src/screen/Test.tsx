import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CalendarioModal from "../components/CalendarioModal";

export function Test(){
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [data, setData] = useState<Date>( new Date())


  function carregandoData(data: Date){
    setData(data)
  }

  return (
    <View>
      <CalendarioModal 
        onChangueDate={carregandoData} 
        Children={ 
            <View className="p-2 bg-blueWeight1">
                <Text className="text-white">
                    {data.getDate()}/{data.getMonth()}/{data.getFullYear()}
                </Text>
            </View>
        } 
        />
    </View>
  );
};
