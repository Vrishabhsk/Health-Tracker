import React, { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import CardStyle from "../components/Card";
import Navbar from "../components/Navbar";

export default function Cases() {
  const [worldData, setWorldData] = useState([]);
  const [view, setView] = useState(false);

  var options = {
    method: "GET",
    url:
      "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world",
    headers: {
      "x-rapidapi-key": "e17eacf3f1msh06d7f04b07f68c4p17405bjsn8bbff59a2454",
      "x-rapidapi-host":
        "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      if (response.data) {
        setWorldData(response.data);
        setView(true);
      }
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div className="cases">
      {view ? (
        <div className="top">
          <Navbar cas={true} />
          <h1 className="head">Worldwide Covid-19 Data</h1>
          <div className="cards">
            <CardStyle 
              text="TOTAL COVID CASES"
              data={worldData[0].TotalCases}
            />
            <CardStyle 
              text="TOTAL DEATH WORLDWIDE"
              data={worldData[0].TotalDeaths}
            />
          </div>
          <div className="cards">
            <CardStyle text="NEW COVID CASES" data={worldData[0].NewCases} />
            <CardStyle text="NEW DEATHS" data={worldData[0].NewDeaths} />
          </div>
          <div className="cards">
            <CardStyle
              text="TOTAL RECOVERED"
              data={worldData[0].TotalRecovered}
            />
            <CardStyle
              text="NEWLY RECOVERED"
              data={worldData[0].NewRecovered}
            />
          </div>
          <div className="cards extra">
            <CardStyle text="ACTIVE CASES" data={worldData[0].ActiveCases} />
          </div>
        </div>
      ) : (
        <div className="progress">
          <CircularProgress />
        </div>
      )}
    <iframe title="Heat Map" src="https://www.healthmap.org/covid-19/" />
    </div>
  );
}
