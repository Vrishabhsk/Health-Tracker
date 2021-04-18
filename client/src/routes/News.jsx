import React, { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import Navbar from "../components/Navbar";
import Info from "../components/Info";

export default function News() {
  const [info, setInfo] = useState({});
  const [page, setPage] = useState("1");
  const [view, setView] = useState(false);
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    newsInfo();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function newsInfo() {
    var options = {
      method: "GET",
      url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-health-news/${page}`,
      headers: {
        "x-rapidapi-key": "e17eacf3f1msh06d7f04b07f68c4p17405bjsn8bbff59a2454",
        "x-rapidapi-host":
          "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        if (response.data.news) {
          setInfo(response.data.news);
          setView(true);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div className="news">
      {view ? (
        <div className="top">
          <Navbar news={true} />
          <h1 className="head">HealthCare News</h1>{" "}
        </div>
      ) : null}
      {view ? (
        info.map((news) => {
          return (
            <Info
              headline={news.title}
              pub={news.pubDate.slice(0, 10)}
              img={news.urlToImage}
              link={news.link}
            />
          );
        })
      ) : (
        <div className="progress">
          <CircularProgress />
        </div>
      )}
      <br />
      <br />
      <div className="pagination">
        {view
          ? pages.map((page) => {
              return (
                <button
                  className="pagi"
                  onClick={() => {
                    setView(false);
                    setPage(`${page}`);
                  }}
                >
                  {page}
                </button>
              );
            })
          : null}
      </div>
    </div>
  );
}
