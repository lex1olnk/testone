import React from 'react';
import FlightBar from './FlightBar';
import HeaderComponent from './HeaderComponent'
import BasicSelect from './BasicSelect';
import TableComponent from './TableComponent';

const sales = [
    {
        name: "Вариант1",
        value: 0,
    },
    {
        name: "Вариант2",
        value: 1,
    }
]


const MainComponent = () => {
    return(
        <div>
            <div className='h-screen w-11/12 m-auto flex flex-col justify-between'>
                <HeaderComponent />
                <FlightBar />    
                <div className="h-1/12 flex flex-row justify-between">
                <BasicSelect data={sales} name="Выручка плановая"/>
                <BasicSelect data={sales} name="Загрузка плановая"/>
                <BasicSelect data={sales} name="Средняя доходная ставка"/>
                </div>
                <BasicSelect data={sales} name="Изменения с рейсом"/>
                <TableComponent />
            </div>
        </div>
    )
}

export default MainComponent;
