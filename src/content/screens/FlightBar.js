import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { styled, alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandRoundedIcon from '@mui/icons-material/FlightLandRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import styles from '../styles/App.module.scss'

const months = {
    0: "января",
    1: "февраля",
    2: "марта",
    3: "апреля",
    4: "мая",
    5: "июня",
    6: "июля",
    7: "августа",
    8: "сентября",
    9: "октября",
    10: "ноября",
    11: "декабря"
}

const flights = [
    {
        id: 1,
        date: {
            day: 22,
            month: 4,
        },
        number: "77-717",
        from: {
            place: "YKT",
            time: {
                hour: 12,
                minutes: 50
            }
        },
        to: {
            place: "MSC",
            time: {
                hour: 11,
                minutes: 40
            }
        },
        typeAC: "СУ",
        status: "Открыт",
        rule: "ASR"
    },
    {
        id: 0,
        date: {
            day: 25,
            month: 2,
        },
        number: "77-717",
        from: {
            place: "AER",
            time: {
                hour: 15,
                minutes: 40
            }
        },
        to: {
            place: "IST",
            time: {
                hour: 15,
                minutes: 40
            }
        },
        typeAC: "СУ",
        status: "Открыт",
        rule: "ASR"
    },
    
]

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
        width: "20ch"
        }
    }
}));

const FlightBar = () => {
    const [currentFlight, setFlightDate] = useState(0)
    const handleFlight = ((direction) => {
        setFlightDate((currentState) => {
            if (direction === 'right') 
                if (currentState + 1 === flights.length)
                    return 0 
                else return currentState + 1
            if (currentState - 1 < 0)
                return flights.length() - 1
            return currentState - 1
        })
    })
    return (
        <div className={styles.flBar} >
            <div className='flex justify-between h-24 align-center'>
                <div className="flex flex-row justify-between h-fit my-auto w-64">
                    <IconButton aria-label="delete" onClick={() => {handleFlight('left')}}>
                        <KeyboardArrowLeftRoundedIcon />
                    </IconButton>
                    <p className="my-auto text-lg">
                        {flights[currentFlight].date.day + " " 
                        + months[flights[currentFlight].date.month] + ", " 
                        + " Сб, " + flights[currentFlight].number}
                    </p>
                    <IconButton aria-label="delete" onClick={() => {handleFlight('right')}}>
                        <KeyboardArrowRightRoundedIcon />
                    </IconButton>
                </div>
                <div className="h-fit my-auto bg-gray-100 rounded-md">
                    <div className='h-fit absolute flex justify-center align-center p-2 px-3'>
                        <SearchIcon />
                    </div>
                    <StyledInputBase
                        placeholder="Поиск"
                        inputProps={{ "aria-label": "search" }}
                    />
                </div>
            </div>
            <div className='flex flex-row justify-between'/*style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}*/ key={flights[currentFlight].id}>
                <div className={styles.fBarItem}>
                    <div>Вылет</div>
                    <div>{flights[currentFlight].from.place}</div>
                    <div><FlightTakeoffIcon /></div>
                    <div>{flights[currentFlight].from.time.hour + ':' + flights[currentFlight].from.time.minutes}</div>
                </div>
                <div className={styles.fBarItem}>
                    <div>Прилет</div>
                    <div>{flights[currentFlight].to.place}</div>
                    <div><FlightLandRoundedIcon /></div>
                    <div>{flights[currentFlight].to.time.hour + ':' + flights[currentFlight].to.time.minutes}</div>
                </div>
                <div className={styles.fBarItem}>
                    <div>Тип ВС</div>
                    <div>{flights[currentFlight].typeAC}</div>
                </div>
                <div className={styles.fBarItem}>
                    <div>Статус</div>
                    <div>{flights[currentFlight].status}</div>
                </div>
                <div className={styles.fBarItem}>
                    <div>Бизнес-правило</div>
                    <div>{flights[currentFlight].rule}</div>
                </div>
            </div>
        </div>
    )
}

export default FlightBar;