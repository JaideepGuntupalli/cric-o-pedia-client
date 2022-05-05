import React from "react";
// import { useParams } from "react-router-dom";
// import { useQuery } from "react-query";
// import axios from "axios";
import Poll from "./Poll";
import LiveChat from "./LiveChat";
import { useAuth } from "./../../contexts/AuthContext";
import LiveComm from "./LiveComm";
import "./index.css";
import io from "socket.io-client";

const socket = io.connect("https://frozen-hamlet-50888.herokuapp.com");
socket.emit("join_room", "1");

function LiveScore() {
    const { currentUser } = useAuth();
    // const params = useParams();
    // const id = params.id;
    // const { data, isSuccess } = useQuery("home-matches", async () => {
    //     return await axios.get(
    //         ` https://frozen-brook-98254.herokuapp.com/score?matchId=${id}`
    //     );
    // });
    // console.log(data.data);
    return (
        <div className="my-8 font-mulish text-white grid lg:grid-cols-3 grid-rows-[repeat(6,_minmax(0,_200px))] gap-10 w-4/5 mx-auto">
            <div className="rounded-xl bg-widget-bg p-6 col-span-2 row-span-2">
                <h1 className=" text-xl ml-6 font-semibold">
                    {" "}
                    Score | 4th May, 2022
                </h1>

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
                            {/* <p className="opacity-90 text-xs">(20 ov, T:174)</p> */}
                        </div>
                    </div>
                    <div>VS</div>
                    <div className="flex flex-col items-center gap-2">
                        <img
                            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313421.logo.png"
                            alt=""
                            className="h-24"
                        />
                        <p className="font-bold text-3xl">CSK</p>
                        <div className="flex flex-col items-center">
                            <p>160/8</p>
                            <p className="opacity-90 text-xs">(20 ov, T:174)</p>
                        </div>
                    </div>
                </div>

                <div className="text-center font-bold">RCB won by 13 runs</div>
            </div>
            <Poll />

            <LiveChat
                socket={socket}
                username={currentUser ? currentUser.email : "guest"}
                room="1"
            />

            <LiveComm />

            <div class="ds-p-3 bg-widget-bg p-3 rounded-xl">
                <div class="ds-border-line ds-pb-3">
                    <div class="ds-flex">
                        <div class="ds-border ds-border-ui-stroke ds-font-bold ds-text-ui-typo ds-bg-fill ds-rounded-full ds-overflow-hidden ds-w-10 ds-h-10 ds-text-title-xs">
                            <img
                                width="40"
                                height="40"
                                alt="DP Conway"
                                class="ds-block"
                                src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/318500/318588.1.jpg"
                            />
                        </div>
                        <div class="ds-ml-2">
                            <span class="ds-text-tight-m ds-font-bold">
                                DP Conway{" "}
                            </span>
                            <span class="ds-text-tight-s ds-font-regular ds-text-typo-paragraph-light">
                                CSK
                            </span>
                            <div class="ds-flex ds-items-center">
                                <div class="ds-flex">
                                    <span class="text-yellow-500 ds-text-tight-s ds-font-bold ">
                                        56 runs&nbsp;
                                    </span>
                                    <span class="ds-text-tight-s ds-font-regular ds-text-typo-paragraph-light">
                                        (37)
                                    </span>
                                </div>
                                <div class="ds-flex ds-items-center">
                                    <span class="ds-ml-2 ds-mr-1 ds-inline-flex ds-rounded-full ds-bg-fill-success ds-w-1.5 ds-h-1.5"></span>
                                    <span class="ds-text-tight-s ds-font-regular">
                                        6 fours
                                    </span>
                                    <span class="ds-ml-2 ds-mr-1 ds-inline-flex ds-rounded-full ds-bg-fill-primary ds-w-1.5 ds-h-1.5"></span>
                                    <span class="ds-text-tight-s ds-font-regular">
                                        2 sixes
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ds-flex ds-items-center ds-justify-between">
                        <div class="ds-w-1/2">
                            <div>
                                <div class="ds-text-tight-xs ds-font-bold ds-uppercase ds-text-ui-typo-light">
                                    Control
                                </div>
                                <div class="ds-text-tight-s ds-font-bold ds-mb-1">
                                    83%
                                </div>
                                <div class="ds-relative ds-w-full ds-h-2 ds-bg-fill-content-alternate ds-rounded-full ds-overflow-hidden">
                                    <span class="ds-absolute ds-rounded-full ds-bg-fill-primary ds-inline-block ds-h-full"></span>
                                </div>
                            </div>
                            <div class="ds-mt-4">
                                <div class="ds-text-tight-xs ds-font-bold ds-uppercase ds-text-ui-typo-light">
                                    Productive shot
                                </div>
                                <div class="ds-text-tight-s ds-font-bold ds-capitalize">
                                    on drive
                                </div>
                            </div>
                        </div>
                        <div class="ds-w-1/2 ds-max-w-[140px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 133.02 133.02"
                                id="cricket-pie-chart"
                                class="ds-overflow-hidden ds-max-w-full"
                            >
                                <g>
                                    <circle
                                        class="ds-fill-ui-stroke"
                                        cx="66.51"
                                        cy="66.51"
                                        r="64.52"
                                    ></circle>
                                    <path
                                        class="ds-fill-fill-content-prime"
                                        d="M20.56,111.87,65.49,67.1H2A63.09,63.09,0,0,0,20.56,111.87Z"
                                    ></path>
                                    <path
                                        class="ds-fill-ui-stroke"
                                        d="M65.28,130.38h0Z"
                                    ></path>
                                    <path
                                        class="ds-fill-fill-primary"
                                        d="M65.95,131l.11-63.44-44.9,44.9A63.09,63.09,0,0,0,65.95,131Z"
                                    ></path>
                                    <path
                                        class="ds-fill-ui-stroke"
                                        d="M110.65,112.49l.15-.16-.3.3Z"
                                    ></path>
                                    <path
                                        class="ds-fill-fill-content-prime"
                                        d="M112.43,111.87,67.49,67.1H131A63.09,63.09,0,0,1,112.43,111.87Z"
                                    ></path>
                                    <path
                                        class="ds-fill-fill-content-prime"
                                        d="M67,131l-.11-63.44,44.9,44.9A63.09,63.09,0,0,1,67,131Z"
                                    ></path>
                                    <path
                                        class="ds-fill-ui-stroke"
                                        d="M22.33,112.49l-.15-.16.3.3Z"
                                    ></path>
                                    <path
                                        class="ds-fill-fill-content-prime"
                                        d="M20.56,21.44,65.49,66.22H2A63.09,63.09,0,0,1,20.56,21.44Z"
                                    ></path>
                                    <path
                                        class="ds-fill-ui-stroke"
                                        d="M65.28,2.94h0Z"
                                    ></path>
                                    <path
                                        class="ds-fill-fill-content-prime"
                                        d="M65.95,2.29l.11,63.44-44.9-44.9A63.09,63.09,0,0,1,65.95,2.29Z"
                                    ></path>
                                    <path
                                        class="ds-fill-ui-stroke"
                                        d="M110.65,20.83l.15.16-.3-.3Z"
                                    ></path>
                                    <path
                                        class="ds-fill-fill-content-prime"
                                        d="M112.43,21.44,67.49,66.22H131A63.09,63.09,0,0,0,112.43,21.44Z"
                                    ></path>
                                    <path
                                        class="ds-fill-ui-stroke"
                                        d="M67.71,2.94h0Z"
                                    ></path>
                                    <path
                                        class="ds-fill-fill-content-prime"
                                        d="M67,2.29l-.11,63.44,44.9-44.9A63.09,63.09,0,0,0,67,2.29Z"
                                    ></path>
                                    <path
                                        class="ds-fill-ui-stroke"
                                        d="M22.33,20.83l-.15.16.3-.3Z"
                                    ></path>
                                    <text
                                        class="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                        transform="translate(45.32 29.22)"
                                    >
                                        0
                                    </text>
                                    <text
                                        class="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                        transform="translate(80.32 29.22)"
                                    >
                                        7
                                    </text>
                                    <text
                                        class="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                        transform="translate(105.65 55.84)"
                                    >
                                        2
                                    </text>
                                    <text
                                        class="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                        transform="translate(17.44 55.84)"
                                    >
                                        12
                                    </text>
                                    <text
                                        class="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                        transform="translate(19.44 89.59)"
                                    >
                                        9
                                    </text>
                                    <text
                                        class="ds-font-bold ds-text-tight-xs ds-fill-raw-white"
                                        transform="translate(44.32 115.93)"
                                    >
                                        15
                                    </text>
                                    <text
                                        class="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                        transform="translate(80.32 116.16)"
                                    >
                                        1
                                    </text>
                                    <text
                                        class="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                        transform="translate(105.65 88.16)"
                                        fill="#ffffff"
                                    >
                                        10
                                    </text>
                                    <circle
                                        class="ds-fill-[transparent] ds-stroke-ui-stroke ds-stroke-1"
                                        cx="66.51"
                                        cy="66.51"
                                        r="64.52"
                                    ></circle>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ds-p-3 bg-widget-bg p-3 rounded-xl">
                <div class="flex">
                    <div class="ds-border ds-border-ui-stroke ds-font-bold ds-text-ui-typo ds-bg-fill ds-rounded-full ds-overflow-hidden ds-w-10 ds-h-10 ds-text-title-m">
                        <img
                            width="40"
                            height="40"
                            alt="MK Lomror"
                            class="ds-block"
                            src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/315000/315015.jpg"
                        />
                    </div>
                    <div class="ds-ml-2 ">
                        <span class=" ds-font-bold text-sm">MK Lomror </span>
                        <span class="ds-text-tight-s ds-font-regular ds-text-typo-paragraph-light">
                            RCB
                        </span>
                        <div class="ds-flex ds-items-center ds-justify-between">
                            <div class="ds-flex">
                                <span class="text-xs ds-font-bold  text-yellow-500">
                                    42 runs&nbsp;
                                </span>
                                <span class="text-xs ds-font-regular ds-text-typo-paragraph-light">
                                    (27)
                                </span>
                            </div>
                            <div class="ds-flex ds-items-center">
                                <span class="ds-ml-2 ds-mr-1 ds-inline-flex ds-rounded-full ds-bg-fill-success ds-w-2.5 ds-h-2.5"></span>
                                <span class="ds-text-tight-s ds-font-regular">
                                    3 fours
                                </span>
                                <span class="ds-ml-2 ds-mr-1 ds-inline-flex ds-rounded-full ds-bg-fill-primary ds-w-2.5 ds-h-2.5"></span>
                                <span class="ds-text-tight-s ds-font-regular">
                                    2 sixes
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ds-flex ds-items-center ds-justify-between">
                    <div class="ds-w-1/2">
                        <div>
                            <div class="ds-text-tight-xs ds-font-bold ds-uppercase ds-text-ui-typo-light">
                                Control
                            </div>
                            <div class="ds-text-tight-m ds-font-bold ds-mb-1">
                                86%
                            </div>
                            <div class="ds-relative ds-w-full ds-h-2 ds-bg-fill-content-alternate ds-rounded-full ds-overflow-hidden">
                                <span class="ds-absolute ds-rounded-full ds-bg-fill-primary ds-inline-block ds-h-full"></span>
                            </div>
                        </div>
                        <div class="ds-mt-4">
                            <div class="ds-text-tight-xs ds-font-bold ds-uppercase ds-text-ui-typo-light">
                                Productive shot
                            </div>
                            <div class="ds-text-tight-m ds-font-bold ds-capitalize">
                                sweep shot
                            </div>
                        </div>
                    </div>
                    <div class="ds-w-1/2 ds-max-w-[140px] ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 133.02 133.02"
                            id="cricket-pie-chart"
                            class="ds-overflow-hidden ds-max-w-full"
                        >
                            <g>
                                <circle
                                    class="ds-fill-ui-stroke"
                                    cx="66.51"
                                    cy="66.51"
                                    r="64.52"
                                ></circle>
                                <path
                                    class="ds-fill-fill-content-prime"
                                    d="M20.56,111.87,65.49,67.1H2A63.09,63.09,0,0,0,20.56,111.87Z"
                                ></path>
                                <path
                                    class="ds-fill-ui-stroke"
                                    d="M65.28,130.38h0Z"
                                ></path>
                                <path
                                    class="ds-fill-fill-primary"
                                    d="M65.95,131l.11-63.44-44.9,44.9A63.09,63.09,0,0,0,65.95,131Z"
                                ></path>
                                <path
                                    class="ds-fill-ui-stroke"
                                    d="M110.65,112.49l.15-.16-.3.3Z"
                                ></path>
                                <path
                                    class="ds-fill-fill-primary"
                                    d="M112.43,111.87,67.49,67.1H131A63.09,63.09,0,0,1,112.43,111.87Z"
                                ></path>
                                <path
                                    class="ds-fill-fill-content-prime"
                                    d="M67,131l-.11-63.44,44.9,44.9A63.09,63.09,0,0,1,67,131Z"
                                ></path>
                                <path
                                    class="ds-fill-ui-stroke"
                                    d="M22.33,112.49l-.15-.16.3.3Z"
                                ></path>
                                <path
                                    class="ds-fill-fill-content-prime"
                                    d="M20.56,21.44,65.49,66.22H2A63.09,63.09,0,0,1,20.56,21.44Z"
                                ></path>
                                <path
                                    class="ds-fill-ui-stroke"
                                    d="M65.28,2.94h0Z"
                                ></path>
                                <path
                                    class="ds-fill-fill-content-prime"
                                    d="M65.95,2.29l.11,63.44-44.9-44.9A63.09,63.09,0,0,1,65.95,2.29Z"
                                ></path>
                                <path
                                    class="ds-fill-ui-stroke"
                                    d="M110.65,20.83l.15.16-.3-.3Z"
                                ></path>
                                <path
                                    class="ds-fill-fill-content-prime"
                                    d="M112.43,21.44,67.49,66.22H131A63.09,63.09,0,0,0,112.43,21.44Z"
                                ></path>
                                <path
                                    class="ds-fill-ui-stroke"
                                    d="M67.71,2.94h0Z"
                                ></path>
                                <path
                                    class="ds-fill-fill-content-prime"
                                    d="M67,2.29l-.11,63.44,44.9-44.9A63.09,63.09,0,0,0,67,2.29Z"
                                ></path>
                                <path
                                    class="ds-fill-ui-stroke"
                                    d="M22.33,20.83l-.15.16.3-.3Z"
                                ></path>
                                <text
                                    class="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                    transform="translate(45.32 29.22)"
                                >
                                    0
                                </text>
                                <text
                                    class="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                    transform="translate(80.32 29.22)"
                                >
                                    0
                                </text>
                                <text
                                    class="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                    transform="translate(105.65 55.84)"
                                >
                                    3
                                </text>
                                <text
                                    class="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                    transform="translate(17.44 55.84)"
                                >
                                    4
                                </text>
                                <text
                                    class="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                    transform="translate(19.44 89.59)"
                                >
                                    9
                                </text>
                                <text
                                    class="ds-font-bold ds-text-tight-xs ds-fill-raw-white"
                                    transform="translate(44.32 115.93)"
                                >
                                    10
                                </text>
                                <text
                                    class="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                    transform="translate(80.32 116.16)"
                                >
                                    6
                                </text>
                                <text
                                    class="ds-font-bold ds-text-tight-xs ds-fill-raw-white"
                                    transform="translate(105.65 88.16)"
                                    fill="#ffffff"
                                >
                                    10
                                </text>
                                <circle
                                    class="ds-fill-[transparent] ds-stroke-ui-stroke ds-stroke-1"
                                    cx="66.51"
                                    cy="66.51"
                                    r="64.52"
                                ></circle>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>

            <div className=" row-span-2 bg-widget-bg p-3 rounded-xl">
                <div class="p-8">
                    <div class="ds-flex">
                        <div class="ds-border ds-border-ui-stroke ds-font-bold ds-text-ui-typo ds-bg-fill ds-rounded-full ds-overflow-hidden ds-w-16 ds-h-16 ds-text-title-m">
                            <img
                                width="64"
                                height="64"
                                alt="HV Patel"
                                class="ds-block"
                                src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/309100/309102.png"
                            />
                        </div>
                        <div class="ds-text-tight-s ds-font-bold ds-ml-2">
                            <div class="ds-text-tight-l ds-font-bold">
                                HV Patel{" "}
                                <span class="ds-text-tight-s ds-font-regular ds-text-typo-paragraph-light">
                                    RCB
                                </span>
                            </div>
                            <div class="ds-flex ds-mt-2">
                                <div class="ds-mr-4">
                                    <div class="ds-text-tight-xs ds-font-bold">
                                        O
                                    </div>
                                    <div>4</div>
                                </div>
                                <div class="ds-mr-4">
                                    <div class="ds-text-tight-xs ds-font-bold">
                                        M
                                    </div>
                                    <div>0</div>
                                </div>
                                <div class="ds-mr-4">
                                    <div class="ds-text-tight-xs ds-font-bold">
                                        R
                                    </div>
                                    <div>35</div>
                                </div>
                                <div class="ds-mr-4">
                                    <div class="ds-text-tight-xs ds-font-bold">
                                        W
                                    </div>
                                    <div>3</div>
                                </div>
                                <div class="ds-mr-4">
                                    <div class="ds-text-tight-xs ds-font-bold">
                                        ECO
                                    </div>
                                    <div>8.75</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ds-flex ds-pt-6">
                        <div class="ds-text-tight-s ds-font-regular ds-text-ui-typo-mid ds-pt-12">
                            <span class="ds-block ds-p-2 ds-border-line ds-border-b">
                                FT
                            </span>
                            <span class="ds-block ds-p-2 ds-border-line ds-border-b">
                                Y
                            </span>
                            <span class="ds-block ds-p-2 ds-border-line ds-border-b">
                                FL
                            </span>
                            <span class="ds-block ds-p-2 ds-border-line ds-border-b">
                                GL
                            </span>
                            <span class="ds-block ds-p-2 ds-border-line ds-border-b">
                                SG
                            </span>
                            <span class="ds-block ds-p-2 ds-border-line ds-border-b">
                                S
                            </span>
                        </div>
                        <div class="ds-w-[104px]">
                            <div class="ds-text-tight-s ds-font-regular">
                                <div class="ds-flex ds-justify-between ds-text-ui-typo-mid ds-mb-2">
                                    <span class="ds-px-1 ds-border-line ds-border-b">
                                        OFF
                                    </span>

                                    <span class="ds-px-1 ds-border-line ds-border-b">
                                        LEG
                                    </span>
                                </div>
                                <div class="ds-text-tight-xs ds-font-bold ds-w-[106px] ds-py-1.5 ds-bg-fill-content-alternate ds-text-center">
                                    RHB
                                </div>
                            </div>
                            <table class="ds-w-full ds-table ds-table-sm ds-table-bordered ds-border-collapse ds-border ds-border-line ds-table-auto  ds-text-tight-xs">
                                <tbody class="">
                                    <tr class="ds-border-b ds-border-line">
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                    </tr>
                                    <tr class="ds-border-b ds-border-line">
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                    </tr>
                                    <tr class="ds-border-b ds-border-line">
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                    </tr>
                                    <tr class="ds-border-b ds-border-line">
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                    </tr>
                                    <tr class="ds-border-b ds-border-line">
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                    </tr>
                                    <tr class="ds-border-b ds-border-line">
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center">
                                                1W
                                            </div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="ds-w-[104px] ds-ml-4">
                            <div class="ds-text-tight-s ds-font-regular">
                                <div class="ds-flex ds-justify-between ds-text-ui-typo-light ds-mb-2">
                                    <span class="ds-px-1 ds-border-line ds-border-b">
                                        LEG
                                    </span>

                                    <span class="ds-px-1 ds-border-line ds-border-b">
                                        OFF
                                    </span>
                                </div>
                                <div class="ds-text-tight-xs ds-font-bold ds-w-[106px] ds-py-1.5 ds-bg-fill-content-alternate ds-text-center">
                                    LHB
                                </div>
                            </div>
                            <table class="ds-w-full ds-table ds-table-sm ds-table-bordered ds-border-collapse ds-border ds-border-line ds-table-auto  ds-text-tight-xs">
                                <tbody class="">
                                    <tr class="ds-border-b ds-border-line">
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                    </tr>
                                    <tr class="ds-border-b ds-border-line">
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                    </tr>
                                    <tr class="ds-border-b ds-border-line">
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                    </tr>
                                    <tr class="ds-border-b ds-border-line">
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center">
                                                1W
                                            </div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center">
                                                1W
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="ds-border-b ds-border-line">
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                    </tr>
                                    <tr class="ds-border-b ds-border-line">
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                        <td class="ds-min-w-max !ds-p-0">
                                            <div class="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" col-span-2 row-span-2 bg-widget-bg p-3 rounded-xl">
                <div class="ds-w-full ds-bg-fill-content-prime ds-overflow-hidden ds-rounded-xl ds-border ds-border-line ds-mb-4">
                    <div class="ds-flex ds-px-4 ds-border-b ds-border-line ds-py-3">
                        <div class="ds-flex ds-flex-col ds-grow ds-justify-center">
                            <span class="ds-text-title-xs ds-font-bold ds-text-typo-title">
                                <span>Worm</span>
                            </span>
                        </div>
                        <div class="ds-flex ds-flex-row ds-items-center">
                            <span class="ds-pl-2">
                                <div class="ds-flex">
                                    <div class="ds-flex ds-items-center ds-mr-4">
                                        <span class="ds-w-4 ds-h-4 ds-rounded-full ds-inline-flex bg-red-500"></span>
                                        <span class="ds-pl-2 ds-text-tight-s text-black">
                                            Royal Challengers Bangalore
                                        </span>
                                    </div>
                                    <div class="ds-flex ds-items-center ds-mr-4">
                                        <span class="ds-w-4 ds-h-4 ds-rounded-full ds-inline-flex bg-yellow-500"></span>
                                        <span class="ds-pl-2 ds-text-tight-s text-black">
                                            Chennai Super Kings
                                        </span>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div class="ds-p-4 bg-transparent">
                        <div class="ci-chart-container">
                            <div>
                                <div class="rv-xy-plot ">
                                    <svg
                                        class="rv-xy-plot__inner"
                                        width="690"
                                        height="300"
                                    >
                                        <g
                                            transform="translate(40,10)"
                                            class="rv-xy-plot__grid-lines undefined"
                                        >
                                            <line
                                                y1="250"
                                                y2="250"
                                                x1="0"
                                                x2="640"
                                                class="rv-xy-plot__grid-lines__line"
                                            ></line>
                                            <line
                                                y1="177.7456647398844"
                                                y2="177.7456647398844"
                                                x1="0"
                                                x2="640"
                                                class="rv-xy-plot__grid-lines__line"
                                            ></line>
                                            <line
                                                y1="105.49132947976878"
                                                y2="105.49132947976878"
                                                x1="0"
                                                x2="640"
                                                class="rv-xy-plot__grid-lines__line"
                                            ></line>
                                            <line
                                                y1="33.23699421965318"
                                                y2="33.23699421965318"
                                                x1="0"
                                                x2="640"
                                                class="rv-xy-plot__grid-lines__line"
                                            ></line>
                                        </g>
                                        <path
                                            d="M0,250L32,241.32947976878614L64,229.76878612716763L96,221.09826589595377L128,202.3121387283237L160,176.30057803468208L192,167.63005780346822L224,160.40462427745666L256,154.6242774566474L288,140.17341040462426L320,135.83815028901736L352,128.61271676300578L384,112.71676300578035L416,106.9364161849711L448,91.04046242774567L480,72.2543352601156L512,60.69364161849711L544,52.02312138728324L576,26.011560693641606L608,23.121387283236984L640,0"
                                            class="stroke-red-500 rv-xy-plot__series rv-xy-plot__series--line "
                                            transform="translate(40,10)"
                                        ></path>
                                        <path
                                            d="M0,250L32,236.9942196531792L64,232.65895953757226L96,218.20809248554912L128,213.8728323699422L160,196.53179190751447L192,176.30057803468208L224,164.7398843930636L256,160.40462427745666L288,145.95375722543352L320,138.72832369942196L352,127.16763005780346L384,117.0520231213873L416,102.60115606936415L448,92.48554913294798L480,79.47976878612717L512,73.69942196531792L544,66.47398843930635L576,54.91329479768786L608,43.35260115606937L640,18.786127167630063"
                                            class="stroke-yellow-500 rv-xy-plot__series rv-xy-plot__series--line "
                                            transform="translate(40,10)"
                                        ></path>
                                        <g
                                            class="rv-xy-plot__series rv-xy-plot__series--mark undefined"
                                            transform="translate(40,10)"
                                        >
                                            <circle
                                                r="3.5"
                                                cx="256"
                                                cy="154.6242774566474"
                                            ></circle>
                                            <circle
                                                r="3.5"
                                                cx="288"
                                                cy="140.17341040462426"
                                            ></circle>
                                            <circle
                                                r="3.5"
                                                cx="320"
                                                cy="135.83815028901736"
                                            ></circle>
                                            <circle
                                                r="3.5"
                                                cx="512"
                                                cy="60.69364161849711"
                                            ></circle>
                                            <circle
                                                r="3.5"
                                                cx="608"
                                                cy="23.121387283236984"
                                            ></circle>
                                            <circle
                                                r="3.5"
                                                cx="608"
                                                cy="22.39884393063585"
                                            ></circle>
                                            <circle
                                                r="3.5"
                                                cx="608"
                                                cy="21.676300578034684"
                                            ></circle>
                                            <circle
                                                r="3.5"
                                                cx="640"
                                                cy="0"
                                            ></circle>
                                        </g>
                                        <g
                                            class="rv-xy-plot__series rv-xy-plot__series--mark undefined"
                                            transform="translate(40,10)"
                                        >
                                            <circle
                                                r="3.5"
                                                cx="224"
                                                cy="164.7398843930636"
                                            ></circle>
                                            <circle
                                                r="3.5"
                                                cx="256"
                                                cy="160.40462427745666"
                                            ></circle>
                                            <circle
                                                r="3.5"
                                                cx="320"
                                                cy="138.72832369942196"
                                            ></circle>
                                            <circle
                                                r="3.5"
                                                cx="480"
                                                cy="79.47976878612717"
                                            ></circle>
                                            <circle
                                                r="3.5"
                                                cx="512"
                                                cy="73.69942196531792"
                                            ></circle>
                                            <circle
                                                r="3.5"
                                                cx="576"
                                                cy="54.91329479768786"
                                            ></circle>
                                            <circle
                                                r="3.5"
                                                cx="608"
                                                cy="43.35260115606937"
                                            ></circle>
                                            <circle
                                                r="3.5"
                                                cx="640"
                                                cy="18.786127167630063"
                                            ></circle>
                                        </g>
                                        <g
                                            transform="translate(40,260)"
                                            class="rv-xy-plot__axis rv-xy-plot__axis--horizontal "
                                        >
                                            <line
                                                x1="0"
                                                x2="640"
                                                y1="0"
                                                y2="0"
                                                class="rv-xy-plot__axis__line"
                                            ></line>
                                            <g
                                                transform="translate(0, 0)"
                                                class="rv-xy-plot__axis__ticks"
                                            >
                                                <g
                                                    transform="translate(0, 0)"
                                                    class="rv-xy-plot__axis__tick"
                                                >
                                                    <line
                                                        x1="0"
                                                        x2="0"
                                                        y1="-6"
                                                        y2="6"
                                                        class="rv-xy-plot__axis__tick__line"
                                                    ></line>
                                                    <text
                                                        text-anchor="middle"
                                                        dy="0.72em"
                                                        transform="translate(0, 14)"
                                                        class="rv-xy-plot__axis__tick__text"
                                                    >
                                                        0
                                                    </text>
                                                </g>
                                                <g
                                                    transform="translate(64, 0)"
                                                    class="rv-xy-plot__axis__tick"
                                                >
                                                    <line
                                                        x1="0"
                                                        x2="0"
                                                        y1="-6"
                                                        y2="6"
                                                        class="rv-xy-plot__axis__tick__line"
                                                    ></line>
                                                    <text
                                                        text-anchor="middle"
                                                        dy="0.72em"
                                                        transform="translate(0, 14)"
                                                        class="rv-xy-plot__axis__tick__text"
                                                    >
                                                        2
                                                    </text>
                                                </g>
                                                <g
                                                    transform="translate(128, 0)"
                                                    class="rv-xy-plot__axis__tick"
                                                >
                                                    <line
                                                        x1="0"
                                                        x2="0"
                                                        y1="-6"
                                                        y2="6"
                                                        class="rv-xy-plot__axis__tick__line"
                                                    ></line>
                                                    <text
                                                        text-anchor="middle"
                                                        dy="0.72em"
                                                        transform="translate(0, 14)"
                                                        class="rv-xy-plot__axis__tick__text"
                                                    >
                                                        4
                                                    </text>
                                                </g>
                                                <g
                                                    transform="translate(192, 0)"
                                                    class="rv-xy-plot__axis__tick"
                                                >
                                                    <line
                                                        x1="0"
                                                        x2="0"
                                                        y1="-6"
                                                        y2="6"
                                                        class="rv-xy-plot__axis__tick__line"
                                                    ></line>
                                                    <text
                                                        text-anchor="middle"
                                                        dy="0.72em"
                                                        transform="translate(0, 14)"
                                                        class="rv-xy-plot__axis__tick__text"
                                                    >
                                                        6
                                                    </text>
                                                </g>
                                                <g
                                                    transform="translate(256, 0)"
                                                    class="rv-xy-plot__axis__tick"
                                                >
                                                    <line
                                                        x1="0"
                                                        x2="0"
                                                        y1="-6"
                                                        y2="6"
                                                        class="rv-xy-plot__axis__tick__line"
                                                    ></line>
                                                    <text
                                                        text-anchor="middle"
                                                        dy="0.72em"
                                                        transform="translate(0, 14)"
                                                        class="rv-xy-plot__axis__tick__text"
                                                    >
                                                        8
                                                    </text>
                                                </g>
                                                <g
                                                    transform="translate(320, 0)"
                                                    class="rv-xy-plot__axis__tick"
                                                >
                                                    <line
                                                        x1="0"
                                                        x2="0"
                                                        y1="-6"
                                                        y2="6"
                                                        class="rv-xy-plot__axis__tick__line"
                                                    ></line>
                                                    <text
                                                        text-anchor="middle"
                                                        dy="0.72em"
                                                        transform="translate(0, 14)"
                                                        class="rv-xy-plot__axis__tick__text"
                                                    >
                                                        10
                                                    </text>
                                                </g>
                                                <g
                                                    transform="translate(384, 0)"
                                                    class="rv-xy-plot__axis__tick"
                                                >
                                                    <line
                                                        x1="0"
                                                        x2="0"
                                                        y1="-6"
                                                        y2="6"
                                                        class="rv-xy-plot__axis__tick__line"
                                                    ></line>
                                                    <text
                                                        text-anchor="middle"
                                                        dy="0.72em"
                                                        transform="translate(0, 14)"
                                                        class="rv-xy-plot__axis__tick__text"
                                                    >
                                                        12
                                                    </text>
                                                </g>
                                                <g
                                                    transform="translate(448, 0)"
                                                    class="rv-xy-plot__axis__tick"
                                                >
                                                    <line
                                                        x1="0"
                                                        x2="0"
                                                        y1="-6"
                                                        y2="6"
                                                        class="rv-xy-plot__axis__tick__line"
                                                    ></line>
                                                    <text
                                                        text-anchor="middle"
                                                        dy="0.72em"
                                                        transform="translate(0, 14)"
                                                        class="rv-xy-plot__axis__tick__text"
                                                    >
                                                        14
                                                    </text>
                                                </g>
                                                <g
                                                    transform="translate(512, 0)"
                                                    class="rv-xy-plot__axis__tick"
                                                >
                                                    <line
                                                        x1="0"
                                                        x2="0"
                                                        y1="-6"
                                                        y2="6"
                                                        class="rv-xy-plot__axis__tick__line"
                                                    ></line>
                                                    <text
                                                        text-anchor="middle"
                                                        dy="0.72em"
                                                        transform="translate(0, 14)"
                                                        class="rv-xy-plot__axis__tick__text"
                                                    >
                                                        16
                                                    </text>
                                                </g>
                                                <g
                                                    transform="translate(576, 0)"
                                                    class="rv-xy-plot__axis__tick"
                                                >
                                                    <line
                                                        x1="0"
                                                        x2="0"
                                                        y1="-6"
                                                        y2="6"
                                                        class="rv-xy-plot__axis__tick__line"
                                                    ></line>
                                                    <text
                                                        text-anchor="middle"
                                                        dy="0.72em"
                                                        transform="translate(0, 14)"
                                                        class="rv-xy-plot__axis__tick__text"
                                                    >
                                                        18
                                                    </text>
                                                </g>
                                                <g
                                                    transform="translate(640, 0)"
                                                    class="rv-xy-plot__axis__tick"
                                                >
                                                    <line
                                                        x1="0"
                                                        x2="0"
                                                        y1="-6"
                                                        y2="6"
                                                        class="rv-xy-plot__axis__tick__line"
                                                    ></line>
                                                    <text
                                                        text-anchor="middle"
                                                        dy="0.72em"
                                                        transform="translate(0, 14)"
                                                        class="rv-xy-plot__axis__tick__text"
                                                    >
                                                        20
                                                    </text>
                                                </g>
                                            </g>
                                        </g>
                                        <g
                                            transform="translate(0,10)"
                                            class="rv-xy-plot__axis rv-xy-plot__axis--vertical "
                                        >
                                            <line
                                                x1="40"
                                                x2="40"
                                                y1="0"
                                                y2="250"
                                                class="rv-xy-plot__axis__line"
                                            ></line>
                                            <g
                                                transform="translate(40, 0)"
                                                class="rv-xy-plot__axis__ticks"
                                            >
                                                <g
                                                    transform="translate(0, 250)"
                                                    class="rv-xy-plot__axis__tick"
                                                >
                                                    <line
                                                        y1="0"
                                                        y2="0"
                                                        x1="6"
                                                        x2="-6"
                                                        class="rv-xy-plot__axis__tick__line"
                                                    ></line>
                                                    <text
                                                        text-anchor="end"
                                                        dy="0.32em"
                                                        transform="translate(-14, 0)"
                                                        class="rv-xy-plot__axis__tick__text"
                                                    >
                                                        0
                                                    </text>
                                                </g>
                                                <g
                                                    transform="translate(0, 177.7456647398844)"
                                                    class="rv-xy-plot__axis__tick"
                                                >
                                                    <line
                                                        y1="0"
                                                        y2="0"
                                                        x1="6"
                                                        x2="-6"
                                                        class="rv-xy-plot__axis__tick__line"
                                                    ></line>
                                                    <text
                                                        text-anchor="end"
                                                        dy="0.32em"
                                                        transform="translate(-14, 0)"
                                                        class="rv-xy-plot__axis__tick__text"
                                                    >
                                                        50
                                                    </text>
                                                </g>
                                                <g
                                                    transform="translate(0, 105.49132947976878)"
                                                    class="rv-xy-plot__axis__tick"
                                                >
                                                    <line
                                                        y1="0"
                                                        y2="0"
                                                        x1="6"
                                                        x2="-6"
                                                        class="rv-xy-plot__axis__tick__line"
                                                    ></line>
                                                    <text
                                                        text-anchor="end"
                                                        dy="0.32em"
                                                        transform="translate(-14, 0)"
                                                        class="rv-xy-plot__axis__tick__text"
                                                    >
                                                        100
                                                    </text>
                                                </g>
                                                <g
                                                    transform="translate(0, 33.23699421965318)"
                                                    class="rv-xy-plot__axis__tick"
                                                >
                                                    <line
                                                        y1="0"
                                                        y2="0"
                                                        x1="6"
                                                        x2="-6"
                                                        class="rv-xy-plot__axis__tick__line"
                                                    ></line>
                                                    <text
                                                        text-anchor="end"
                                                        dy="0.32em"
                                                        transform="translate(-14, 0)"
                                                        class="rv-xy-plot__axis__tick__text"
                                                    >
                                                        150
                                                    </text>
                                                </g>
                                            </g>
                                        </g>
                                        <g
                                            transform="translate(345, 310)"
                                            class="rv-xy-plot__axis__title alt-x-label"
                                        >
                                            <text>OVERS</text>
                                        </g>
                                        <g
                                            transform="translate(0, 100)"
                                            class="rv-xy-plot__axis__title alt-y-label"
                                        >
                                            <text
                                                transform="rotate(-90)"
                                                text-anchor="end"
                                            >
                                                RUNS
                                            </text>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-widget-bg p-6 rounded-xl">
                <img
                    src="https://static.toiimg.com/photo/imgsize-385930,msid-56181779/56181779.jpg"
                    alt=""
                    className="h-5/6 object-cover w-full rounded-lg"
                />
                <p className="font-semibold text-lg text-center mt-2">
                    D Y Patil Sports Stadium
                </p>
            </div>
        </div>
    );
}

export default LiveScore;
