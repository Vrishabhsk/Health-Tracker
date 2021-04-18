import React from "react";
import icon from "../pics/4.jpg";
import icon2 from "../pics/2.jpg";

export default function Content() {
  return (
    <div className="content">
      <div className="marg">
        <img src={icon} alt="img" width="400" className="im" height="300" />
        <div className="cont">
          Comprehensive, up-to-date news coverage related to Healthcare,
          aggregated from sources all over the world. Also see the latest
          coverage of the coronavirus (COVID-19) and Vaccines.
        </div>
      </div>
      <div>
        <img src={icon2} alt="img" width="400" className="im" height="300" />
        <div className="cont2">
          Get curated and verified Coronavirus (COVID-19) data. It includes
          confirmed and probable cases and it’s constantly updated from
          resources around the world.
        </div>
      </div>
      <div id="paraGraph">
        This questionnaire includes the ability to select symptoms by a set of
        questions and the consecutive user inputs. We hope this makes it easier
        for you to identify your symptoms and possible conditions relating to
        Covid-19.
      </div>
    </div>
  );
}
