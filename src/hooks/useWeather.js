import { useEffect, useState } from "react";
import { WEATHER_KEY } from "../shared/keys";

const useWeather = () => {
  const [weather, setWeather] = useState();
  const [isLoading, setIsloading] = useState(true);
  const [errMess, setErrMess] = useState();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${WEATHER_KEY}&units=metric`,
        {
          method: "GET",
        }
      )
        .then(
          (response) => {
            if (response.ok) {
              return response;
            } else {
              let error = new Error(
                "Error " + response.status + ":" + response.statusText
              );
              error.response = response;
              throw error;
            }
          },
          (err) => {
            let error = new Error(err.message);
            throw error;
          }
        )
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
          setIsloading(false);
        })
        .catch((error) => {
          setErrMess(error.message);
          setIsloading(false);
        });
    });
  }, []);
  return { weather, errMess, isLoading };
};

export default useWeather;
