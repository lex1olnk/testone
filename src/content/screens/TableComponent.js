import React from 'react';
import Typography from "@mui/material/Typography";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const texts = [
    "ЭКОНОМ", "КР 100", "БЛК 0", "ДКР 100", "МКС 100", 
]

const rows = [
    "КБ", "СТС", "РСС", "РСВ", "Изменения", "ЛМТ", "МИН", "ЛС", "СБ", "БР", "ДСТ", "RQ/SA", "ГР", "Rec"
]

const styles = {
    first: {
        borderTopRightRadius: 4,
    },
    last: {

    }
}

const data = [
    {
        id: 0,
        kb: "Y",
        status: "открыт",
        rss: 100,
        rsv: 50,
        changes: null,
        lmt: 0,
        min: 0,
        ls: true,
        sb: 0,
        br: 0,
        dst: 98,
        rqsa: 0,
        rec: null,
        kek: 12,
    },
    {
        id: 1,
        kb: "Y",
        status: "открыт",
        rss: 100,
        rsv: 50,
        changes: null,
        lmt: 0,
        min: 0,
        ls: true,
        sb: 0,
        br: 0,
        dst: 98,
        rqsa: 0,
        rec: null,
    },
    {
        id: 2,
        kb: "Y",
        status: "открыт",
        rss: 100,
        rsv: 50,
        changes: null,
        lmt: 0,
        min: 0,
        ls: true,
        sb: 0,
        br: 0,
        dst: 98,
        rqsa: 0,
        gr: 0,
        rec: null,
    }
]

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    [`&.${linearProgressClasses.colorPrimary}`]: {
      borderRadius: 1,
      backgroundColor: theme.palette.mode === 'light' ? "#5147E4" : 'white',
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 1,
      backgroundColor: theme.palette.mode === 'light' ? '#E6E4FB' : '#308fe8',
    },
  }));

const TableComponent = () => {

    return (
        <div className="w-fit bg-white p-3 rounded-lg h-2/5 mb-20">
            <div className="flex flex-row h-20 align-center ">
                {texts.map((txt) => {
                    return (        
                        <div key={txt} className="flex flex-row my-auto">
                            <Typography
                                variant="h8"
                                noWrap
                                component="div"
                                sx={{ display: { xs: "none", sm: "block", margin: "auto 1em" } }}
                            >
                                {txt}
                            </Typography>
                            <div className="inline-block w-px h-8 bg-gray-300">
                            </div>
                        </div>        

                    )
                })}
                <Typography
                    variant="h8"
                    noWrap
                    component="div"
                    sx={{ display: { xs: "none", sm: "block", margin: "auto 1em" } }}
                >
                    БР2
                </Typography>
                <BorderLinearProgress 
                    variant="determinate" 
                    value={20} 
                    className="w-8 my-auto rounded-1em"
                />
                <Typography
                    variant="h8"
                    noWrap
                    component="div"
                    sx={{ display: { xs: "none", sm: "block", margin: "auto 1em" } }}
                >
                    БР2
                </Typography>
            </div>
            <table className="border-spacing-2">
                <thead>
                    <tr>
                    {rows.map(row => { 
                        return(
                            <th className="text-violet-700" key={row} scope="col">
                                {row}
                            </th>
                        )
                    })}
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    {item.kb}
                                </td>
                                <td>
                                    {item.status}
                                </td>
                                <td>
                                    {item.rss}
                                </td>
                                <td>
                                    {item.rsv}
                                </td>
                                <td>
                                    {item.changes}
                                </td>
                                <td>
                                    {item.lmt}
                                </td>
                                <td>
                                    {item.min}
                                </td>
                                <td>
                                    {item.ls ? <CheckRoundedIcon className="text-violet-700" /> : null}
                                </td>
                                <td>
                                    {item.sb}
                                </td>
                                <td>
                                    {item.br}
                                </td>
                                <td>
                                    {item.dst}
                                </td>
                                <td>
                                    {item.rqsa}
                                </td>
                                <td>
                                    0
                                </td>
                                <td>
                                    {item.rec}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent;