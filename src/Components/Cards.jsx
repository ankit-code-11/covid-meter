import React from "react";
import "../card.css";

const Cards = ({ data }) => {
  console.log(data);
  return (
    <>
      <div class="cards-list">
        <div class="card card-1">
          <div class="card_image">
            <div class="data">
              {data.active}
              <div className="per">
                Today Recovered: {data.todayRecovered}
                <br />
                Active per million: {data.activePerOneMillion}
              </div>
            </div>
          </div>
          <div class="card_title title-infected">
            <p>Infected</p>
          </div>
        </div>

        <div class="card card-2">
          <div class="card_image">
            <div class="data">
              {data.recovered}
              <div className="per">
                Today Recovered: {data.todayRecovered}
                <br />
                Active per million: {data.activePerOneMillion}
              </div>
            </div>
          </div>
          <div class="card_title title-recovered">
            <p>Recovered</p>
          </div>
        </div>

        <div class="card card-3">
          <div class="card_image">
            <div class="data">
              {data.deaths}
              <div className="per">
                Today Deaths: {data.todayDeaths}
                <br />
                Active per million: {data.deathsPerOneMillion}
              </div>
            </div>
          </div>
          <div class="card_title title-death">
            <p>Death</p>
          </div>
        </div>

        <div class="card card-4">
          <div class="card_image">
            <div class="data">
              {data.critical}
              <div className="per">Today Critical : "NO DATA AVAILABLE"</div>
            </div>
          </div>

          <div></div>
          <div class="card_title title-critical">
            <p>Critical</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
