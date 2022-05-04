import Pill from "./Pill";
import { Link } from "react-router-dom";

function LiveMatch() {
    return (
        <Link
            to="#"
            className="bg-widget-bg flex gap-4 flex-col items-start rounded-lg p-4"
        >
            <Pill status="live" />
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                    <img
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313419.logo.png"
                        alt="KKR"
                        className="w-12"
                    />
                    <p className="text-white font-mulish">
                        <span>143</span>/<span>2</span>
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <img
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313423.logo.png"
                        alt="RR"
                        className="w-12"
                    />
                    <p className="text-white font-mulish">Yet to bat</p>
                </div>
            </div>
            <div className="text-white">KKR has opted to bat first</div>
        </Link>
    );
}

export default LiveMatch;
