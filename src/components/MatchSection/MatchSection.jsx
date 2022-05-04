import LiveMatch from "./LiveMatch";
import PostMatch from "./PostMatch";
import PreMatch from "./PreMatch";
import { useQuery } from "react-query";
import axios from "axios";

function MatchSection() {
    const { data, isSuccess } = useQuery("home-matches", async () => {
        return await axios.get(
            " https://frozen-brook-98254.herokuapp.com/homeMatches"
        );
    });

    return (
        <div className="w-4/5 mx-auto">
            <h1 className="font-bold text-3xl text-white my-6">Matches</h1>
            <div className="flex gap-6">
                {isSuccess
                    ? data.data.map((ele) => {
                          if (ele.state === "POST") {
                              return (
                                  <PostMatch
                                      id={ele.id}
                                      slug={ele.slug}
                                      statusText={ele.statusText}
                                      team1Score={ele.teams[0].score}
                                      team1scoreInfo={ele.teams[0].scoreInfo}
                                      teamUrl1={ele.teams[0].image.url}
                                      caption1={ele.teams[0].image.caption}
                                      team2Score={ele.teams[1].score}
                                      team2scoreInfo={ele.teams[1].scoreInfo}
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
                              return <LiveMatch />;
                          }
                      })
                    : console.log("waiting..")}
            </div>
        </div>
    );
}

export default MatchSection;
