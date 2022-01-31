import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Availableappointments from './Diagnosisheader/Availableappointments/Availableappointments';
import DiagnosisHeader from './Diagnosisheader/DiagnosisHeader';

const Phonediagnosis = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <DiagnosisHeader date={date} setDate={setDate}></DiagnosisHeader>
            <Availableappointments date={date}></Availableappointments>

        </div>
    );
};

export default Phonediagnosis;