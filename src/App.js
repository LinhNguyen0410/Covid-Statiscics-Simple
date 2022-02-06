import { Container, Grid, Typography } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import Clock from "react-clock-interval";
import countriesApi from "./Apis/countriesApi";
import CountrySelect from "./Components/CountrySelect";

function App() {
  const [country, setCountry] = useState([]);

  // call API countries
  useEffect(() => {
    (async () => {
      try {
        const responseCountry = await countriesApi.getAll();
        setCountry(responseCountry);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="App">
      <Container sx={{ p: 5 }}>
        <Grid container sx={{ display: "flex", flexDirection: "column" }}>
          <Grid item xs={12}>
            <Typography sx={{ fontWeight: "bold", fontSize: "30px" }}>
              SỐ LIỆU COVID-19
            </Typography>
            <Clock>
              {(dateTime) => (
                <div>
                  {moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a")}
                </div>
              )}
            </Clock>
            <CountrySelect countries={country} />
          </Grid>
        </Grid>

        <Grid container></Grid>
      </Container>
    </div>
  );
}

export default App;
