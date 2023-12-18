import Appbar from "./Appbar";
import TempInfoCard from "./TempInfoCard";
import HumidityInfoCard from "./HumidityInfoCard";
import WindInfoCard from "./WindInfoCard";
import TopCitiesTable from "./TopCItiesTable";
import {Grid, Typography} from "@mui/material"


function Landing() {
    return (
        <>
            <Appbar />
            <div style={{margin: "30px auto"}} ></div>
            <Typography variant={"h3"} >Weather for </Typography>
            <div style={{margin: "40px auto"}} ></div>
            <div style={{width: "95vw", marginLeft: "5.625rem"}} >
            <Grid container={true} direction={"row"} columns={12} spacing={1} >
                <Grid item={true} xs={8} md={6} lg={4}><TempInfoCard /></Grid>
                <Grid item={true} xs={8} md={6} lg={4}><HumidityInfoCard  /></Grid>
                <Grid item={true} xs={8} md={6} lg={4}><WindInfoCard/></Grid>
            </Grid>
            </div>
            <TopCitiesTable />
        </>
    );
}

export default Landing;