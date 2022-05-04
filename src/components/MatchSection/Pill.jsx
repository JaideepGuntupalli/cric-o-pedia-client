import Countdown from "react-countdown";

function Pill({ status, startTime }) {
    if (status === "live") {
        return (
            <div className="text-white font-raleway font-semibold p-1 px-3 rounded-full bg-red-600 text-xs inline">
                Live
            </div>
        );
    } else if (status === "pre") {
        return (
            <div className="text-white font-raleway font-semibold p-1 px-3 rounded-full bg-yellow-600 text-xs inline">
                <Countdown date={startTime} />
            </div>
        );
    } else if (status === "post") {
        return (
            <div className="text-white font-raleway font-semibold p-1 px-3 rounded-full bg-green-600 text-xs inline">
                Result
            </div>
        );
    }
}

export default Pill;
