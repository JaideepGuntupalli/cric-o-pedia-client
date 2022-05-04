import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import Poll from "./../Other/Poll";

function LiveScore() {
    const params = useParams();
    const id = params.id;
    const { data, isSuccess } = useQuery("home-matches", async () => {
        return await axios.get(`http://localhost:8080/score?matchId=${id}`);
    });
    // console.log(data.data);
    return (
        <div className="font-mulish text-white grid grid-cols-3 grid-rows-[repeat(6,_minmax(0,_0.5fr))] gap-10 w-4/5 mx-auto">
            <div className="rounded-xl bg-widget-bg p-6 col-span-2 row-span-2">
                <h1 className=" text-xl ml-6 font-semibold"> Score</h1>

                <div className="flex items-center gap-40 my-12 justify-center">
                    <div className="flex flex-col items-center gap-2">
                        <img
                            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313418.logo.png"
                            alt=""
                            className="h-24"
                        />
                        <p className="font-bold text-3xl">RCB</p>
                        <div className="flex flex-col items-center">
                            <p>173/8</p>
                            <p className="opacity-90 text-xs">(20 ov, T:174)</p>
                        </div>
                    </div>
                    <div>VS</div>
                    <div className="flex flex-col items-center gap-2">
                        <img
                            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313418.logo.png"
                            alt=""
                            className="h-24"
                        />
                        <p className="font-bold text-3xl">RCB</p>
                        <div className="flex flex-col items-center">
                            <p>173/8</p>
                            <p className="opacity-90 text-xs">(20 ov, T:174)</p>
                        </div>
                    </div>
                </div>

                <div className="text-center font-bold">RCB won by 13 runs</div>
            </div>
            <Poll />
        </div>
    );
}

export default LiveScore;
