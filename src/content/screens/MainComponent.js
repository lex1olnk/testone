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
            <div className='container' style={{
                    display: 'flex',
                    height: "100vh",
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                <HeaderComponent />
                <FlightBar />    
                <div style={{
                    width: "800px",
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
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
