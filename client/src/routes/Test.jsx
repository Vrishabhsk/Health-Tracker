import React from "react";
import * as Survey from "survey-react";

export default function Test() {
  var surveyJSON = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "question1",
            title: "  What is your date of birth?",
            inputType: "date",
          },
          {
            type: "radiogroup",
            name: "question2",
            title: "What is your gender?",
            choices: ["Male", "Female", "Other", "Prefer not to say"],
          },
          {
            type: "checkbox",
            name: "question3",
            title: "Do you experience any of the below symptoms?",
            choices: [
              "Cold",
              "Fever",
              "Cough",
              "Shortness of Breath",
              "Headache",
              "Sore Throat",
            ],
          },
          {
            type: "checkbox",
            name: "question4",
            title: "Do you suffer from any of the below diseases?",
            choices: [
              "Cardiovascular diseases",
              "Asthma",
              "Cancer",
              "Diabetes",
              "Bronchitis",
              "Other",
            ],
          },
          {
            type: "radiogroup",
            name: "question11",
            title: "Do you smoke?",
            choices: ["yes", "no"],
          },
          {
            type: "radiogroup",
            name: "question6",
            title: "Do you work in any of these high risk occupations?",
            choices: [
              "Healthcare",
              "Assisted-living",
              "Military Institution",
              "Aged Care Facility",
              "Other",
              "NA",
            ],
          },
        ],
        title: "Covid Checker",
        description: "uses questions to tell the level of covid",
      },
    ],
  };

  function sendDataToServer(survey) {
      alert("Your COVID-19 report will be sent to your email account! Thank You");
  }

  return (
    <div className="survey">
      <Survey.Survey json={surveyJSON} onComplete={sendDataToServer} />
    </div>
  );
}
