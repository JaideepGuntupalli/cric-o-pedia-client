import React from "react";

function Poll() {
    let hasVoted = false;

    function handleClick(e) {
        e.preventDefault();
        hasVoted = true;
    }
    return (
        <div className="bg-widget-bg p-4 rounded-xl text-white">
            <div className="flex items-center justify-around">
                <button
                    disabled={hasVoted}
                    className="hover:bg-black p-2 rounded-full"
                    onClick={handleClick}
                >
                    <img
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313418.logo.png"
                        alt=""
                        className="h-20"
                    />
                </button>
                <p>vs</p>
                <button
                    disabled={hasVoted}
                    className="hover:bg-black p-2 rounded-full"
                    onClick={handleClick}
                >
                    <img
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313418.logo.png"
                        alt=""
                        className="h-20"
                    />
                </button>
            </div>
            <p className="mt-2 text-center">Support your favourite Team</p>
        </div>
    );
}

export default Poll;
