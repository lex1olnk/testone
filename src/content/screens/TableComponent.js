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
        <div style={{
            aspectRatio: 2.4, 
            height: 400,
            width: 960,
            marginBottom: 50,
            borderRadius: 10,
            background: 'white',
            padding: 20,
        }}>
            <div style={{
                height: 50,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                {texts.map((txt) => {
                    return (        
                        <div key={txt} style={{
                            display: 'flex', 
                            flexDirection: 'row', 
                            alignItems: 'center'
                        }}>
                            <Typography
                                variant="h8"
                                noWrap
                                component="div"
                                sx={{ display: { xs: "none", sm: "block", margin: "0 15px" } }}
                            >
                                {txt}
                            </Typography>
                            <div style={{
                                display: 'inline-block',
                                width: .2,
                                height: "30px",
                                background: "#AAA",
                                border: "1px solid #ddd"
                            }}>
                                
                            </div>
                        </div>        

                    )
                })}
                <Typography
                    variant="h8"
                    noWrap
                    component="div"
                    sx={{ display: { xs: "none", sm: "block", margin: "0 15px" } }}
                >
                    БР2
                </Typography>
                <BorderLinearProgress 
                    variant="determinate" 
                    value={20} 
                    sx={{
                        height: "8px", 
                        width: "50px", 
                        borderRadius: 1}
                }/>
                <Typography
                    variant="h8"
                    noWrap
                    component="div"
                    sx={{ display: { xs: "none", sm: "block", margin: "0 15px" } }}
                >
                    БР2
                </Typography>
            </div>
            <table className="table" style={{borderSpacing: "0 5px"}}>
                <thead>
                    <tr>
                    {rows.map(row => { 
                        return(
                            <th 
                                style={{color: '#565194'}}
                                key={row} 
                                scope="col"
                            >
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
                                <td className="">
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
                                    {item.ls ? <CheckRoundedIcon sx={{color: "#565194"}}/> : null}
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