import React from "react";
import Poll from "../Other/Poll";

function FactsSection() {
    return (
        <div className="w-1/4 mx-auto mt-8 mb-20 flex flex-col gap-6">
            <h1 className="font-bold text-3xl text-white mt-6">
                Facts / Polls
            </h1>

            <Poll />

            <div className="bg-widget-bg p-4 rounded-xl">
                <img
                    src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/228800/228895.4.jpg"
                    alt="On This Day: Happy birthday, James Pattinson"
                    className="rounded-lg"
                />
                <p className="px-4 text-white pt-2">
                    On This Day: Wasim's Akram's second ODI hat-trick
                </p>
            </div>

            <div className="bg-widget-bg p-4 rounded-xl">
                <img
                    src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/338700/338725.png"
                    alt="Quote Unquote: who's saying what?"
                    className="rounded-lg"
                />
                <p className="px-4 text-white pt-2">
                    Quote Unquote: who's saying what?
                </p>
            </div>
        </div>
    );
}

export default FactsSection;
