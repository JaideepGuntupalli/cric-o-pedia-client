import LiveMatch from "./LiveMatch";
import PostMatch from "./PostMatch";
import PreMatch from "./PreMatch";
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

function MatchSection() {
    const { data, isSuccess } = useQuery("home-matches", async () => {
        return await axios.get(
            " https://frozen-brook-98254.herokuapp.com/homeMatches"
        );
    });

    const types = new Set();

    let initSeries = isSuccess ? data.data[0].series : "waiting";

    const [series, setseries] = useState(initSeries);

    const handleClick = (stype) => {
        console.log(stype);
        setseries(stype);
    };

    return (
        <div className="w-4/5 mx-auto">
            <h1 className="font-bold text-3xl text-white my-6">Matches</h1>
            <div className="flex gap-4 py-4 overflow-auto scrollbar-hide">
                {isSuccess
                    ? data.data.map((ele) => {
                          let seriesName = ele.series;
                          if (!types.has(seriesName)) {
                              types.add(seriesName);
                              if (seriesName === series) {
                                  return (
                                      <div
                                          className="text-black font-raleway font-semibold p-1 px-3 rounded-full bg-yellow-500 text-xs inline min-w-fit cursor-pointer"
                                          onClick={(e) =>
                                              handleClick(e.target.innerHTML)
                                          }
                                      >
                                          {seriesName}
                                      </div>
                                  );
                              } else {
                                  return (
                                      <div
                                          className="text-white font-raleway font-semibold p-1 px-3 rounded-full border-2 hover:bg-yellow-500/75 border-yellow-500 text-xs inline min-w-fit cursor-pointer"
                                          onClick={(e) =>
                                              handleClick(e.target.innerHTML)
                                          }
                                      >
                                          {seriesName}
                                      </div>
                                  );
                              }
                          }
                      })
                    : console.log("waiting...")}
            </div>
            <div className="flex gap-6 overflow-auto scrollbar-hide">
                {isSuccess
                    ? data.data.map((ele) => {
                          if (ele.series === series) {
                              if (ele.state === "POST") {
                                  return (
                                      <PostMatch
                                          id={ele.id}
                                          slug={ele.slug}
                                          statusText={ele.statusText}
                                          team1Score={ele.teams[0].score}
                                          team1scoreInfo={
                                              ele.teams[0].scoreInfo
                                          }
                                          teamUrl1={ele.teams[0].image.url}
                                          caption1={ele.teams[0].image.caption}
                                          team2Score={ele.teams[1].score}
                                          team2scoreInfo={
                                              ele.teams[1].scoreInfo
                                          }
                                          teamUrl2={ele.teams[1].image.url}
                                          caption2={ele.teams[1].image.caption}
                                      />
                                  );
                              } else if (ele.state === "PRE") {
                                  return (
                                      <PreMatch
                                          id={ele.id}
                                          slug={ele.slug}
                                          startTime={ele.startTime}
                                          statusText={ele.statusText}
                                          team1Abbr={ele.teams[0].abbreviation}
                                          teamUrl1={ele.teams[0].image.url}
                                          caption1={ele.teams[0].image.caption}
                                          team2Abbr={ele.teams[1].abbreviation}
                                          teamUrl2={ele.teams[1].image.url}
                                          caption2={ele.teams[1].image.caption}
                                      />
                                  );
                              } else {
                                  return (
                                      <LiveMatch
                                          id={ele.id}
                                          slug={ele.slug}
                                          statusText={ele.statusText}
                                          team1Score={ele.teams[0].score}
                                          team1scoreInfo={
                                              ele.teams[0].scoreInfo
                                          }
                                          teamUrl1={ele.teams[0].image.url}
                                          caption1={ele.teams[0].image.caption}
                                          team2Score={ele.teams[1].score}
                                          team2scoreInfo={
                                              ele.teams[1].scoreInfo
                                          }
                                          teamUrl2={ele.teams[1].image.url}
                                          caption2={ele.teams[1].image.caption}
                                      />
                                  );
                              }
                          }
                      })
                    : console.log("waiting..")}
            </div>
        </div>
    );
}

export default MatchSection;
