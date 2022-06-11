import Pill from "./Pill";
import { Link } from "react-router-dom";

function LiveMatch({
    id,
    slug,
    statusText,
    team1Score,
    team1scoreInfo,
    teamUrl1,
    caption1,
    team2Score,
    team2scoreInfo,
    teamUrl2,
    caption2,
}) {
    return (
        <Link
            to={`score/${id}`}
            className="bg-widget-bg flex gap-4 flex-col items-start rounded-lg p-6 min-w-[20%] w-1/4"
        >
            <Pill status="live" />
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                    <img src={teamUrl1} alt={caption1} className="w-12" />
                    <div>
                        <p className="text-white font-mulish">
                            {team1Score !== null ? team1Score : "Yet to bat"}
                        </p>
                        {team1scoreInfo === null ? (
                            console.log("null")
                        ) : (
                            <p className="text-white text-xs">
                                {team1scoreInfo}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <img src={teamUrl2} alt={caption2} className="w-12" />
                    <div>
                        <p className="text-white font-mulish">
                            {team2Score !== null ? team2Score : "Yet to bat"}
                        </p>
                        {team2scoreInfo === null ? (
                            console.log("null")
                        ) : (
                            <p className="text-white text-xs">
                                {team2scoreInfo}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="text-white">{statusText}</div>
        </Link>
    );
}

export default LiveMatch;
