import { Cloud, LocationOn, WbSunny } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useWeather from "../../hooks/useWeather";

function Header(props) {
  const { weather, isLoading: weatherIsLoading, errMess } = useWeather();
  if (weatherIsLoading) {
    return <Typography>Loading ...</Typography>;
  }
  if (errMess) {
    return <Typography>{errMess}</Typography>;
  }
  return (
    <Box
      component={Paper}
      sx={{ backgroundColor: "secondary.light", mt: 4, p: 5.5 }}
      elevation={13}
    >
      <Grid container columnSpacing={4} rowSpacing={4}>
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="row" gap={1} alignItems="center">
            {weather.weather[0].main === "Clear" ? (
              <WbSunny fontSize="large" />
            ) : (
              <Cloud fontSize="large" />
            )}
            <Typography variant="h4" fontWeight="400">
              {weather.main.temp}&deg;{", " + weather.weather[0].description}
            </Typography>
          </Box>

          <Box
            display="flex"
            gap={1}
            flexDirection="row"
            alignItems="center"
            mt={2}
          >
            <LocationOn size="large" />
            <Typography variant="h5" sx={{ mt: 1 }}>
              {weather.name}
            </Typography>
          </Box>
          <Button color="info" variant="contained" sx={{ mt: 2 }}>
            See more
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="assets\images\undraw_weather_re_qsmd.svg"
            alt="weather"
            style={{ maxWidth: "90%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
