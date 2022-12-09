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

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha("#AAA", 0.15),
    "&:hover": {
      backgroundColor: alpha("#F3F6FD", 1)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  }));
  
const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));

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
        <div style={{
            display: 'flex',
            width: "665px",
            aspectRatio: 4.33,
            background: "white",
            borderRadius: "15px",
            padding: "10px",
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <div style={{
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: "space-between", 
                alignItems: 'center',
            }}>
                <div style={{
                    display: 'flex', 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    width: "100%"
                }}>
                    <IconButton aria-label="delete" onClick={() => {handleFlight('left')}}>
                        <KeyboardArrowLeftRoundedIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: "none", sm: "block" } }}
                    >
                        {flights[currentFlight].date.day + " " 
                        + months[flights[currentFlight].date.month] + ", " 
                        + " Сб, " + flights[currentFlight].number}
                    </Typography>
                    <IconButton aria-label="delete" onClick={() => {handleFlight('right')}}>
                        <KeyboardArrowRightRoundedIcon />
                    </IconButton>
                </div>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Поиск"
                    inputProps={{ "aria-label": "search" }}
                    />
                </Search>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} key={flights[currentFlight].id}>
                <div className='flightBarItem'>
                    <div className='topleft'>Вылет</div>
                    <div className='topright'><FlightTakeoffIcon style={{transform: "scale(1)"}}/></div>
                    <div className='bottomleft'>{flights[currentFlight].from.place}</div>
                    <div className='bottomright'>{flights[currentFlight].from.time.hour + ':' + flights[currentFlight].from.time.minutes}</div>
                </div>
                <div className='flightBarItem'>
                    <div className='topleft'>Прилет</div>
                    <div className='topright'><FlightLandRoundedIcon style={{transform: "scale(1)"}}/></div>
                    <div className='bottomleft'>{flights[currentFlight].to.place}</div>
                    <div className='bottomright'>{flights[currentFlight].to.time.hour + ':' + flights[currentFlight].to.time.minutes}</div>
                </div>
                <div className='flightBarItem'>
                    <div className='topleft'>Тип ВС</div>
                    <div className='bottomleft'>{flights[currentFlight].typeAC}</div>
                </div>
                <div className='flightBarItem'>
                    <div className='topleft'>Статус</div>
                    <div className='bottomleft'>{flights[currentFlight].status}</div>
                </div>
                <div className='flightBarItem'>
                    <div className='topleft'>Бизнес-правило</div>
                    <div className='bottomleft'>{flights[currentFlight].rule}</div>
                </div>
            </div>
        </div>
    )
}

export default FlightBar;