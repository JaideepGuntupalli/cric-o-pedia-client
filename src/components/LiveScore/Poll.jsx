import React, { useState } from "react";

function Poll() {
    const [hasVoted, setHasVoted] = useState(false);
    const [isBlue, setIsBlue] = useState(false);

    function handleClick1(e) {
        e.preventDefault();
        setHasVoted(true);
        setIsBlue(true);
        console.log("lol");
    }

    function handleClick2(e) {
        e.preventDefault();
        setHasVoted(true);
        setIsBlue(false);
    }
    return (
        <div
            className={
                " p-4 rounded-xl text-white " +
                (hasVoted
                    ? isBlue
                        ? "bg-blue-600"
                        : "bg-orange-500"
                    : "bg-widget-bg")
            }
        >
            <div className="flex items-center justify-around">
                <button
                    className="hover:bg-black p-2 rounded-full"
                    onClick={handleClick1}
                >
                    <img
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313422.logo.png"
                        alt=""
                        className="h-20"
                    />
                </button>
                <p>vs</p>
                <button
                    className="hover:bg-black p-2 rounded-full"
                    onClick={handleClick2}
                >
                    <img
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313480.logo.png"
                        alt="Sunrisers Hyderabad logo"
                        className="h-20"
                    />
                </button>
            </div>
            <p className="mt-2 text-center text-white">
                Support your favourite Team for tonight clash
            </p>
        </div>
    );
}

export default Poll;
