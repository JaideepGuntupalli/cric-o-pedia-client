import Pill from "./Pill";
import { Link } from "react-router-dom";

function PreMatch({
    id,
    slug,
    startTime,
    statusText,
    team1Abbr,
    teamUrl1,
    caption1,
    team2Abbr,
    teamUrl2,
    caption2,
}) {
    return (
        <Link
            to={`score/${id}`}
            className="bg-widget-bg flex gap-4 flex-col items-start rounded-lg p-6 w-1/5"
        >
            <Pill status="pre" startTime={startTime} />
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                    <img src={teamUrl1} alt={caption1} className="w-12" />
                    <p className="text-white font-mulish">{team1Abbr}</p>
                </div>
                <div className="flex items-center gap-4">
                    <img src={teamUrl2} alt={caption2} className="w-12" />
                    <p className="text-white font-mulish">{team2Abbr}</p>
                </div>
            </div>
            <div className="text-white">{statusText}</div>
        </Link>
    );
}

export default PreMatch;
