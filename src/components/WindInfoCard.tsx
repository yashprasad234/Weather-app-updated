import { Card, Typography } from "@mui/material";

function WindInfoCard() {
    return (
        <>
            <Card style={{width: 300, display: "flex", flexDirection: "column" , textAlign: "center", minHeight: 250}} >
                <div style={{fontSize: 40, borderBottom: "1px solid #aaa", padding: "10px 0 "}} >
                    <Typography variant={"h5"}>Wind</Typography>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 40 }} >
                    <Typography variant={"subtitle1"}>m/s</Typography>
                    <Typography variant={"subtitle1"}>Wind Speed is</Typography>
                    <Typography variant={"subtitle1"}>Sunrise at </Typography>
                    <Typography variant={"subtitle1"}>Sunset at </Typography>
                </div>
            </Card>
        </>
    );
}

export default WindInfoCard;