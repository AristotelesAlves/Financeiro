import { Children, ReactNode, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

interface IcalendarioModal {
    onChangueDate: (data: Date) => void;
    Children: ReactNode
}

export default function CalendarioModal({ onChangueDate, Children }: IcalendarioModal) {

    const [modalConfig, setModalConfig] = useState({
        aberto: false,
        dataSelecionada: new Date()
    });

    function firmacao(date: Date) {
        setModalConfig({
            ...modalConfig,
            dataSelecionada: date,
            aberto: false
        });
        onChangueDate(date)
    }

    function Cancelamento() {
        setModalConfig({
            ...modalConfig,
            aberto: false
        });
    }

    return (
        <View>
            <TouchableOpacity onPress={() => setModalConfig({...modalConfig, aberto: !modalConfig.aberto})}>
                {Children}
            </TouchableOpacity>
            <DateTimePicker 
              isVisible={modalConfig.aberto}
              mode="date"
              onCancel={Cancelamento}
              onConfirm={firmacao}
            />
        </View>
    );
}
