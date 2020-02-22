import React, { useState } from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import SendIcon from "@material-ui/icons/Send"
import { IconButton } from "@material-ui/core";


const SalimHeader = styled.h1`
font-family: SOV_Tejo;
font-style: normal;
font-weight: bold;
font-size: 114px;
line-height: 130px;
color: ${props => props.color || "#000000"};
`

const SalimParam = styled.p`
font-family: SOV_Tejo;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 49px;
color: #4B3B24;
`
const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            background: "#E0E4EB",
            boxShadow: " inset 9px 9px 16px #A3B1C6, inset -9px -9px 16px rgba(255, 255, 255, 0.25)",
            borderRadius: "10px",
            border: "none",
            width: "100%",
            height: "75px",
        }
    },
    SendButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#FF1111",
        background: "#E0E4EB",
        boxShadow: "9px 9px 16px #A3B1C6, -9px -9px 16px rgba(255, 255, 255, 0.25)",
        borderRadius: "10px",
        maxWidth: "63px"
    },
    inputFocus: {
        width: '40%',
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        backgroundColor: "#00FF00",
    },
    SalimCard: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#E0E4EB",
        boxShadow: "9px 9px 16px #A3B1C6, -9px -9px 16px rgba(255, 255, 255, 0.25)",
        borderRadius: "10px",
        minWidth: "320px"
    },
    SalimContainer: {
        height: "100vh"
    }

}))
    ;

function App() {
    const classes = useStyles()
    const [msg, setMsg] = useState("")
    const [data, setData] = useState("")

    const getData = async (msg) => {
        let formData = new FormData();
        formData.append('msg', msg);

        fetch("http://52ac67f6.ngrok.io/check",{method:'post',body:formData})
        .then(res=>res.text())
        .then(data=>setData(data))
    }

    return (
        <Container className={classes.SalimContainer}>
            <Grid container justify="center">
                <SalimHeader color="#A51931">
                    S
                </SalimHeader>
                <SalimHeader color="#F4F5F8">
                    A
                </SalimHeader>
                <SalimHeader color="#2D2A4A">
                    L
                </SalimHeader>
                <SalimHeader color="#F4F5F8">
                    I
                </SalimHeader>
                <SalimHeader color="#A51931">
                    M
                </SalimHeader>
            </Grid>
            <form>
                <Grid container spacing={4} justify="center" alignItems="center">
                    <Grid item md={2}></Grid>
                    <Grid item xs={12} md={7}>
                        <TextField onChange={(event) => {setMsg(event.target.value)}}
                         className={classes.root} 
                         classes={{ focused: classes.inputFocus }} 
                         variant="outlined"
                            fullWidth />
                    </Grid>
                    <Grid item xs={12} md={1} justify="center" style={{ display: "flex" }}>
                        <Card className={classes.SendButton}>
                            <IconButton onClick={()=>{getData(msg)}}>
                                <SendIcon fontSize="large" style={{ color: "#FF1111" }}></SendIcon>
                            </IconButton>
                        </Card>
                    </Grid>
                    <Grid item md={2}></Grid>
                </Grid>
            </form>
            <Grid container justify="center" style={{ paddingTop: "97PX" }}>
                <Card className={classes.SalimCard}>
                    <SalimParam> {data} </SalimParam>
                </Card>
            </Grid>
        </Container>
    );
}

export default App;
