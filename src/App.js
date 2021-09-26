import "./styles.css";
import React, { useState } from "react";

const webseries = {
  Siencefiction: [
    { Name: "Wanda Vision", ReleaseDate: "2021" },
    { Name: "Legion", ReleaseDate: "2016" },
    { Name: "What IF??", ReleaseDate: "2021" }
  ],
  RomCom: [
    { Name: "Twilight", ReleaseDate: "2007" },
    { Name: "Little Things", ReleaseDate: "2018" },
    { Name: "Sex Education", ReleaseDate: "2019" }
  ],
  SitCom: [
    { Name: "FRIENDS", ReleaseDate: "1993" },
    { Name: "How I meet your mother?", ReleaseDate: "2004" },
    { Name: "Big Bang", ReleaseDate: "2002" }
  ],
  Action: [
    { Name: "DareDevil", ReleaseDate: "2016" },
    { Name: "Jessica Jones", ReleaseDate: "2017" },
    { Name: "MONEY HEIST", ReleaseDate: "2014" }
  ]
};
const padding = "1rem";

export default function App() {
  var series = Object.keys(webseries);
  const [List_series, setListSeries] = useState(webseries[series[0]]);
  const [current, setcurrent] = useState("Siencefiction");
  function genre_click(item) {
    console.log(webseries[item]);
    setListSeries(webseries[item]);
    setcurrent(item);
  }

  return (
    <div className="App">
      <h1>Entertainment</h1>
      <h2>Checkout my favourite Web/Tv Series. </h2>
      <h2> Select A Genre to get started!!</h2>
      <ul>
        {series.map(function (item) {
          return <button onClick={() => genre_click(item)}>{item} </button>;
        })}
      </ul>
      {/* <ul>
        {
          // setListSeries.map(function(ser){
          //   return(
          //     <div>{ser.Name}</div>
          //   )
          // })
          
     
          <div>
          <div>{List_series[0].Name}</div>
          <div>{List_series[0].ReleaseDate}</div>
          </div>
        }
      </ul> */}
      <ul>
        {webseries[current].map(function (series) {
          return (
            <div
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "100%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div>
                <div style={{ fontSize: "larger" }}>Name: {series.Name} </div>
                <div style={{ fontSize: "smaller" }}>
                  Release Date: {series.ReleaseDate}
                </div>
              </div>
              <br />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
