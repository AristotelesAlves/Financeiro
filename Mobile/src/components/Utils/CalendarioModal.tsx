import { useState } from "react";
import DateTimePicker from "react-native-modal-datetime-picker";

interface IcalendarioModal {
    openModal: boolean;
}

export default function CalendarioModal({ openModal }: IcalendarioModal) {

    const [modalData, setModalData] = useState({
        aberto: openModal,
        dataSelecionada: new Date()
    });

    function lidandoConfirmacao(date: Date) {
        setModalData({
            ...modalData,
            dataSelecionada: date,
            aberto: false
        });
    }

    function lidandoCancelamento() {
        setModalData({
            ...modalData,
            aberto: false
        });
    }

    return (
        <DateTimePicker
            isVisible={modalData.aberto}
            mode='datetime'
            date={modalData.dataSelecionada}
            onConfirm={lidandoConfirmacao}
            onCancel={lidandoCancelamento} // corrected this line
        />
    );
}
