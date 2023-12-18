import { Card, Typography } from "@mui/material";

function HumidityInfoCard() {
    return (
        <>
            <Card style={{width: 300, display: "flex", flexDirection: "column" , textAlign: "center", minHeight: 250}} >
                <div style={{fontSize: 40, borderBottom: "1px solid #aaa", padding: "10px 0 "}} >
                    <Typography variant={"h5"}>Humidity</Typography>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 40 }} >
                    <Typography variant={"subtitle1"}>%</Typography>
                    <Typography variant={"subtitle1"}>Cloud PCT is </Typography>
                    <Typography variant={"subtitle1"}>Feels like </Typography>
                    <Typography variant={"subtitle1"}>Humidity </Typography>
                </div>
            </Card>
        </>
    );
}

export default HumidityInfoCard;