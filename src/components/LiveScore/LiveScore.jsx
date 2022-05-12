import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
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
    const params = useParams();
    const id = params.id;
    const { data, isSuccess } = useQuery("live-score", async () => {
        return await axios.get(
            ` https://frozen-brook-98254.herokuapp.com/score?matchId=${id}`
        );
    });

    if (isSuccess) {
        return (
            <div className="my-8 font-mulish text-white grid lg:grid-cols-3 grid-rows-[repeat(6,_minmax(0,_200px))] gap-10 w-4/5 mx-auto">
                <div className="rounded-xl bg-widget-bg p-6 col-span-2 row-span-2">
                    <h1 className=" text-xl ml-6 font-semibold">
                        {" "}
                        Score |{" "}
                        {data.data.match.startDate.charAt(8) +
                            data.data.match.startDate.charAt(9)}
                        th May, 2022
                    </h1>

                    <div className="flex items-center gap-40 my-12 justify-center">
                        <div className="flex flex-col items-center gap-2">
                            <img
                                src={
                                    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/" +
                                    data.data.match.teams[0].team.image.url
                                }
                                alt=""
                                className="h-24"
                            />
                            <p className="font-bold text-3xl">
                                {console.log(data.data.recentBallCommentary)}
                                {data.data.match.teams[0].team.abbreviation}
                            </p>
                            <div className="flex flex-col items-center">
                                <p>{data.data.match.teams[0].score}</p>
                                {data.data.match.teams[0].scoreInfo !== null ? (
                                    <p className="opacity-90 text-xs">
                                        {data.data.match.teams[0].scoreInfo}
                                    </p>
                                ) : (
                                    console.log("null")
                                )}
                            </div>
                        </div>
                        <div>VS</div>
                        <div className="flex flex-col items-center gap-2">
                            <img
                                src={
                                    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/" +
                                    data.data.match.teams[1].team.image.url
                                }
                                alt=""
                                className="h-24"
                            />
                            <p className="font-bold text-3xl">
                                {data.data.match.teams[1].team.abbreviation}
                            </p>
                            <div className="flex flex-col items-center">
                                <p>{data.data.match.teams[1].score}</p>
                                {data.data.match.teams[1].scoreInfo !== null ? (
                                    <p className="opacity-90 text-xs">
                                        {data.data.match.teams[1].scoreInfo}
                                    </p>
                                ) : (
                                    console.log("null")
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="text-center font-bold">
                        {data.data.match.statusText}
                    </div>
                </div>
                <Poll />

                <LiveChat
                    socket={socket}
                    username={currentUser ? currentUser.email : "guest"}
                    room="1"
                />

                <LiveComm />

                {data.data.match.state !== "LIVE" && (
                    <>
                        <div className="ds-p-3 bg-widget-bg p-3 rounded-xl">
                            <div className="ds-border-line ds-pb-3">
                                <div className="ds-flex">
                                    <div className="ds-border ds-border-ui-stroke ds-font-bold ds-text-ui-typo ds-bg-fill ds-rounded-full ds-overflow-hidden ds-w-10 ds-h-10 ds-text-title-xs">
                                        <img
                                            width="40"
                                            height="40"
                                            alt={
                                                data.data.bestPerformance
                                                    .batsmen[0].player.image
                                                    .longCaption
                                            }
                                            className="ds-block"
                                            src={`https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci${data.data.bestPerformance.batsmen[0].player.image.url}`}
                                        />
                                    </div>
                                    <div className="ds-ml-2">
                                        <span className="ds-text-tight-m ds-font-bold">
                                            {
                                                data.data.bestPerformance
                                                    .batsmen[0].player
                                                    .battingName
                                            }{" "}
                                        </span>
                                        <span className="ds-text-tight-s ds-font-regular ds-text-typo-paragraph-light">
                                            {
                                                data.data.bestPerformance
                                                    .batsmen[0].teamAbbreviation
                                            }
                                        </span>
                                        <div className="ds-flex ds-items-center">
                                            <div className="ds-flex">
                                                <span className="text-yellow-500 ds-text-tight-s ds-font-bold ">
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0].runs
                                                    }{" "}
                                                    runs&nbsp;
                                                </span>
                                                <span className="ds-text-tight-s ds-font-regular ds-text-typo-paragraph-light">
                                                    (
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0].balls
                                                    }
                                                    )
                                                </span>
                                            </div>
                                            <div className="ds-flex ds-items-center">
                                                <span className="ds-ml-2 ds-mr-1 ds-inline-flex ds-rounded-full ds-bg-fill-success ds-w-1.5 ds-h-1.5"></span>
                                                <span className="ds-text-tight-s ds-font-regular">
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0].fours
                                                    }{" "}
                                                    fours
                                                </span>
                                                <span className="ds-ml-2 ds-mr-1 ds-inline-flex ds-rounded-full ds-bg-fill-primary ds-w-1.5 ds-h-1.5"></span>
                                                <span className="ds-text-tight-s ds-font-regular">
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0].sixes
                                                    }{" "}
                                                    sixes
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ds-flex ds-items-center ds-justify-between">
                                    <div className="ds-w-1/2">
                                        <div>
                                            <div className="ds-text-tight-xs ds-font-bold ds-uppercase ds-text-ui-typo-light">
                                                Control
                                            </div>
                                            <div className="ds-text-tight-s ds-font-bold ds-mb-1">
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[0].control
                                                }
                                                %
                                            </div>
                                            <div className="ds-relative ds-w-full ds-h-2 ds-bg-fill-content-alternate ds-rounded-full ds-overflow-hidden">
                                                <span className="ds-absolute ds-rounded-full ds-bg-fill-primary ds-inline-block ds-h-full"></span>
                                            </div>
                                        </div>
                                        <div className="ds-mt-4">
                                            <div className="ds-text-tight-xs ds-font-bold ds-uppercase ds-text-ui-typo-light">
                                                Productive shot
                                            </div>
                                            <div className="ds-text-tight-s ds-font-bold ds-capitalize">
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[0].shot
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ds-w-1/2 ds-max-w-[140px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 133.02 133.02"
                                            id="cricket-pie-chart"
                                            className="ds-overflow-hidden ds-max-w-full"
                                        >
                                            <g>
                                                <circle
                                                    stroke="white"
                                                    fill="white"
                                                    className="ds-fill-ui-stroke"
                                                    cx="66.51"
                                                    cy="66.51"
                                                    r="64.52"
                                                ></circle>
                                                <path
                                                    className="ds-fill-fill-content-prime"
                                                    d="M20.56,111.87,65.49,67.1H2A63.09,63.09,0,0,0,20.56,111.87Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-ui-stroke"
                                                    d="M65.28,130.38h0Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-fill-primary"
                                                    d="M65.95,131l.11-63.44-44.9,44.9A63.09,63.09,0,0,0,65.95,131Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-ui-stroke"
                                                    d="M110.65,112.49l.15-.16-.3.3Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-fill-content-prime"
                                                    d="M112.43,111.87,67.49,67.1H131A63.09,63.09,0,0,1,112.43,111.87Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-fill-content-prime"
                                                    d="M67,131l-.11-63.44,44.9,44.9A63.09,63.09,0,0,1,67,131Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-ui-stroke"
                                                    d="M22.33,112.49l-.15-.16.3.3Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-fill-content-prime"
                                                    d="M20.56,21.44,65.49,66.22H2A63.09,63.09,0,0,1,20.56,21.44Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-ui-stroke"
                                                    d="M65.28,2.94h0Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-fill-content-prime"
                                                    d="M65.95,2.29l.11,63.44-44.9-44.9A63.09,63.09,0,0,1,65.95,2.29Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-ui-stroke"
                                                    d="M110.65,20.83l.15.16-.3-.3Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-fill-content-prime"
                                                    d="M112.43,21.44,67.49,66.22H131A63.09,63.09,0,0,0,112.43,21.44Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-ui-stroke"
                                                    d="M67.71,2.94h0Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-fill-content-prime"
                                                    d="M67,2.29l-.11,63.44,44.9-44.9A63.09,63.09,0,0,0,67,2.29Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-ui-stroke"
                                                    d="M22.33,20.83l-.15.16.3-.3Z"
                                                ></path>
                                                <text
                                                    className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                    transform="translate(45.32 29.22)"
                                                >
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0]
                                                            .wagonData[0]
                                                    }
                                                </text>
                                                <text
                                                    className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                    transform="translate(80.32 29.22)"
                                                >
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0]
                                                            .wagonData[1]
                                                    }
                                                </text>
                                                <text
                                                    className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                    transform="translate(105.65 55.84)"
                                                >
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0]
                                                            .wagonData[2]
                                                    }
                                                </text>
                                                <text
                                                    className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                    transform="translate(17.44 55.84)"
                                                >
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0]
                                                            .wagonData[3]
                                                    }
                                                </text>
                                                <text
                                                    className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                    transform="translate(19.44 89.59)"
                                                >
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0]
                                                            .wagonData[4]
                                                    }
                                                </text>
                                                <text
                                                    className="ds-font-bold ds-text-tight-xs ds-fill-raw-white"
                                                    transform="translate(44.32 115.93)"
                                                >
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0]
                                                            .wagonData[5]
                                                    }
                                                </text>
                                                <text
                                                    className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                    transform="translate(80.32 116.16)"
                                                >
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0]
                                                            .wagonData[6]
                                                    }
                                                </text>
                                                <text
                                                    className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                    transform="translate(105.65 88.16)"
                                                    fill="#ffffff"
                                                >
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0]
                                                            .wagonData[7]
                                                    }
                                                </text>
                                                <circle
                                                    stroke="white"
                                                    fill="white"
                                                    className="ds-fill-[transparent] ds-stroke-ui-stroke ds-stroke-1"
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
                        <div className="ds-p-3 bg-widget-bg p-3 rounded-xl">
                            <div className="flex">
                                <div className="ds-border ds-border-ui-stroke ds-font-bold ds-text-ui-typo ds-bg-fill ds-rounded-full ds-overflow-hidden ds-w-10 ds-h-10 ds-text-title-m">
                                    <img
                                        width="40"
                                        height="40"
                                        alt={
                                            data.data.bestPerformance.batsmen[1]
                                                .player.image.longCaption
                                        }
                                        className="ds-block"
                                        src={`https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci${data.data.bestPerformance.batsmen[1].player.image.url}`}
                                    />
                                </div>
                                <div className="ds-ml-2 ">
                                    <span className=" ds-font-bold text-sm">
                                        {
                                            data.data.bestPerformance.batsmen[1]
                                                .player.battingName
                                        }{" "}
                                    </span>
                                    <span className="ds-text-tight-s ds-font-regular ds-text-typo-paragraph-light">
                                        {
                                            data.data.bestPerformance.batsmen[1]
                                                .teamAbbreviation
                                        }
                                    </span>
                                    <div className="ds-flex ds-items-center ds-justify-between">
                                        <div className="ds-flex">
                                            <span className="text-xs ds-font-bold  text-yellow-500">
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].runs
                                                }{" "}
                                                runs&nbsp;
                                            </span>
                                            <span className="text-xs ds-font-regular ds-text-typo-paragraph-light">
                                                (
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].balls
                                                }
                                                )
                                            </span>
                                        </div>
                                        <div className="ds-flex ds-items-center">
                                            <span className="ds-ml-2 ds-mr-1 ds-inline-flex ds-rounded-full ds-bg-fill-success ds-w-2.5 ds-h-2.5"></span>
                                            <span className="ds-text-tight-s ds-font-regular">
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].fours
                                                }{" "}
                                                fours
                                            </span>
                                            <span className="ds-ml-2 ds-mr-1 ds-inline-flex ds-rounded-full ds-bg-fill-primary ds-w-2.5 ds-h-2.5"></span>
                                            <span className="ds-text-tight-s ds-font-regular">
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].sixes
                                                }{" "}
                                                sixes
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ds-flex ds-items-center ds-justify-between">
                                <div className="ds-w-1/2">
                                    <div>
                                        <div className="ds-text-tight-xs ds-font-bold ds-uppercase ds-text-ui-typo-light">
                                            Control
                                        </div>
                                        <div className="ds-text-tight-m ds-font-bold ds-mb-1">
                                            {
                                                data.data.bestPerformance
                                                    .batsmen[1].control
                                            }
                                            %
                                        </div>
                                        <div className="ds-relative ds-w-full ds-h-2 ds-bg-fill-content-alternate ds-rounded-full ds-overflow-hidden">
                                            <span className="ds-absolute ds-rounded-full ds-bg-fill-primary ds-inline-block ds-h-full"></span>
                                        </div>
                                    </div>
                                    <div className="ds-mt-4">
                                        <div className="ds-text-tight-xs ds-font-bold ds-uppercase ds-text-ui-typo-light">
                                            Productive shot
                                        </div>
                                        <div className="ds-text-tight-m ds-font-bold ds-capitalize">
                                            {
                                                data.data.bestPerformance
                                                    .batsmen[1].shot
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="ds-w-1/2 ds-max-w-[140px] ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 133.02 133.02"
                                        id="cricket-pie-chart"
                                        className="ds-overflow-hidden ds-max-w-full"
                                    >
                                        <g>
                                            <circle
                                                stroke="white"
                                                fill="white"
                                                className="ds-fill-ui-stroke"
                                                cx="66.51"
                                                cy="66.51"
                                                r="64.52"
                                            ></circle>
                                            <path
                                                className="ds-fill-fill-content-prime"
                                                d="M20.56,111.87,65.49,67.1H2A63.09,63.09,0,0,0,20.56,111.87Z"
                                            ></path>
                                            <path
                                                className="ds-fill-ui-stroke"
                                                d="M65.28,130.38h0Z"
                                            ></path>
                                            <path
                                                className="ds-fill-fill-primary"
                                                d="M65.95,131l.11-63.44-44.9,44.9A63.09,63.09,0,0,0,65.95,131Z"
                                            ></path>
                                            <path
                                                className="ds-fill-ui-stroke"
                                                d="M110.65,112.49l.15-.16-.3.3Z"
                                            ></path>
                                            <path
                                                className="ds-fill-fill-primary"
                                                d="M112.43,111.87,67.49,67.1H131A63.09,63.09,0,0,1,112.43,111.87Z"
                                            ></path>
                                            <path
                                                className="ds-fill-fill-content-prime"
                                                d="M67,131l-.11-63.44,44.9,44.9A63.09,63.09,0,0,1,67,131Z"
                                            ></path>
                                            <path
                                                className="ds-fill-ui-stroke"
                                                d="M22.33,112.49l-.15-.16.3.3Z"
                                            ></path>
                                            <path
                                                className="ds-fill-fill-content-prime"
                                                d="M20.56,21.44,65.49,66.22H2A63.09,63.09,0,0,1,20.56,21.44Z"
                                            ></path>
                                            <path
                                                className="ds-fill-ui-stroke"
                                                d="M65.28,2.94h0Z"
                                            ></path>
                                            <path
                                                className="ds-fill-fill-content-prime"
                                                d="M65.95,2.29l.11,63.44-44.9-44.9A63.09,63.09,0,0,1,65.95,2.29Z"
                                            ></path>
                                            <path
                                                className="ds-fill-ui-stroke"
                                                d="M110.65,20.83l.15.16-.3-.3Z"
                                            ></path>
                                            <path
                                                className="ds-fill-fill-content-prime"
                                                d="M112.43,21.44,67.49,66.22H131A63.09,63.09,0,0,0,112.43,21.44Z"
                                            ></path>
                                            <path
                                                className="ds-fill-ui-stroke"
                                                d="M67.71,2.94h0Z"
                                            ></path>
                                            <path
                                                className="ds-fill-fill-content-prime"
                                                d="M67,2.29l-.11,63.44,44.9-44.9A63.09,63.09,0,0,0,67,2.29Z"
                                            ></path>
                                            <path
                                                className="ds-fill-ui-stroke"
                                                d="M22.33,20.83l-.15.16.3-.3Z"
                                            ></path>
                                            <text
                                                className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                transform="translate(45.32 29.22)"
                                            >
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].wagonData[0]
                                                }
                                            </text>
                                            <text
                                                className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                transform="translate(80.32 29.22)"
                                            >
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].wagonData[1]
                                                }
                                            </text>
                                            <text
                                                className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                transform="translate(105.65 55.84)"
                                            >
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].wagonData[2]
                                                }
                                            </text>
                                            <text
                                                className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                transform="translate(17.44 55.84)"
                                            >
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].wagonData[3]
                                                }
                                            </text>
                                            <text
                                                className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                transform="translate(19.44 89.59)"
                                            >
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].wagonData[4]
                                                }
                                            </text>
                                            <text
                                                className="ds-font-bold ds-text-tight-xs ds-fill-raw-white"
                                                transform="translate(44.32 115.93)"
                                            >
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].wagonData[5]
                                                }
                                            </text>
                                            <text
                                                className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                transform="translate(80.32 116.16)"
                                            >
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].wagonData[6]
                                                }
                                            </text>
                                            <text
                                                className="ds-font-bold ds-text-tight-xs ds-fill-raw-white"
                                                transform="translate(105.65 88.16)"
                                                fill="#ffffff"
                                            >
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].wagonData[7]
                                                }
                                            </text>
                                            <circle
                                                stroke="white"
                                                fill="white"
                                                className="ds-fill-[transparent] ds-stroke-ui-stroke ds-stroke-1"
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
                            <div className="p-8">
                                <div className="ds-flex">
                                    <div className="ds-border ds-border-ui-stroke ds-font-bold ds-text-ui-typo ds-bg-fill ds-rounded-full ds-overflow-hidden ds-w-16 ds-h-16 ds-text-title-m">
                                        <img
                                            width="64"
                                            height="64"
                                            alt={
                                                data.data.bestPerformance
                                                    .bowlers[0].player.image
                                                    .longCaption
                                            }
                                            className="ds-block"
                                            src={`https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci${data.data.bestPerformance.bowlers[0].player.image.url}`}
                                        />
                                    </div>
                                    <div className="ds-text-tight-s ds-font-bold ds-ml-2">
                                        <div className="ds-text-tight-l ds-font-bold">
                                            {
                                                data.data.bestPerformance
                                                    .bowlers[0].player.longName
                                            }
                                            <span className="ds-text-tight-s ds-font-regular ds-text-typo-paragraph-light">
                                                {
                                                    data.data.bestPerformance
                                                        .bowlers[0].player
                                                        .teamAbbreviation
                                                }
                                            </span>
                                        </div>
                                        <div className="ds-flex ds-mt-2">
                                            <div className="ds-mr-4">
                                                <div className="ds-text-tight-xs ds-font-bold">
                                                    O
                                                </div>
                                                <div>
                                                    {console.log(
                                                        data.data
                                                            .bestPerformance
                                                            .bowlers[0]
                                                    )}
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .bowlers[0].overs
                                                    }
                                                </div>
                                            </div>
                                            <div className="ds-mr-4">
                                                <div className="ds-text-tight-xs ds-font-bold">
                                                    M
                                                </div>
                                                <div>
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .bowlers[0].maidens
                                                    }
                                                </div>
                                            </div>
                                            <div className="ds-mr-4">
                                                <div className="ds-text-tight-xs ds-font-bold">
                                                    R
                                                </div>
                                                <div>
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .bowlers[0].conceded
                                                    }
                                                </div>
                                            </div>
                                            <div className="ds-mr-4">
                                                <div className="ds-text-tight-xs ds-font-bold">
                                                    W
                                                </div>
                                                <div>
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .bowlers[0].wickets
                                                    }
                                                </div>
                                            </div>
                                            <div className="ds-mr-4">
                                                <div className="ds-text-tight-xs ds-font-bold">
                                                    ECO
                                                </div>
                                                <div>
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .bowlers[0].economy
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ds-flex ds-pt-6">
                                    <div className="ds-text-tight-s ds-font-regular ds-text-ui-typo-mid ds-pt-12">
                                        <span className="ds-block ds-p-2 ds-border-line ds-border-b">
                                            FT
                                        </span>
                                        <span className="ds-block ds-p-2 ds-border-line ds-border-b">
                                            Y
                                        </span>
                                        <span className="ds-block ds-p-2 ds-border-line ds-border-b">
                                            FL
                                        </span>
                                        <span className="ds-block ds-p-2 ds-border-line ds-border-b">
                                            GL
                                        </span>
                                        <span className="ds-block ds-p-2 ds-border-line ds-border-b">
                                            SG
                                        </span>
                                        <span className="ds-block ds-p-2 ds-border-line ds-border-b">
                                            S
                                        </span>
                                    </div>
                                    <div className="ds-w-[104px]">
                                        <div className="ds-text-tight-s ds-font-regular">
                                            <div className="ds-flex ds-justify-between ds-text-ui-typo-mid ds-mb-2">
                                                <span className="ds-px-1 ds-border-line ds-border-b">
                                                    OFF
                                                </span>

                                                <span className="ds-px-1 ds-border-line ds-border-b">
                                                    LEG
                                                </span>
                                            </div>
                                            <div className="text-black ds-text-tight-xs ds-font-bold ds-w-[106px] ds-py-1.5 ds-bg-fill-content-alternate ds-text-center">
                                                RHB
                                            </div>
                                        </div>
                                        <table className="ds-w-full ds-table ds-table-sm ds-table-bordered ds-border-collapse ds-border ds-border-line ds-table-auto  ds-text-tight-xs">
                                            <tbody className="">
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center">
                                                            1W
                                                        </div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="ds-w-[104px] ds-ml-4">
                                        <div className="ds-text-tight-s ds-font-regular">
                                            <div className="ds-flex ds-justify-between ds-text-ui-typo-light ds-mb-2">
                                                <span className="ds-px-1 ds-border-line ds-border-b">
                                                    LEG
                                                </span>

                                                <span className="ds-px-1 ds-border-line ds-border-b">
                                                    OFF
                                                </span>
                                            </div>
                                            <div className="text-black ds-text-tight-xs ds-font-bold ds-w-[106px] ds-py-1.5 ds-bg-fill-content-alternate ds-text-center">
                                                LHB
                                            </div>
                                        </div>
                                        <table className="ds-w-full ds-table ds-table-sm ds-table-bordered ds-border-collapse ds-border ds-border-line ds-table-auto  ds-text-tight-xs">
                                            <tbody className="">
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center">
                                                            1W
                                                        </div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center">
                                                            1W
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* {data.data.match.state === "LIVE" && (
                    <>
                        <div className="ds-p-3 bg-widget-bg p-3 rounded-xl">
                            <div className="ds-border-line ds-pb-3">
                                <div className="ds-flex">
                                    <div className="ds-border ds-border-ui-stroke ds-font-bold ds-text-ui-typo ds-bg-fill ds-rounded-full ds-overflow-hidden ds-w-10 ds-h-10 ds-text-title-xs">
                                        <img
                                            width="40"
                                            height="40"
                                            alt={
                                                data.data.bestPerformance
                                                    .batsmen[0].player.image
                                                    .longCaption
                                            }
                                            className="ds-block"
                                            src={`https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci${data.data.bestPerformance.batsmen[0].player.image.url}`}
                                        />
                                    </div>
                                    <div className="ds-ml-2">
                                        <span className="ds-text-tight-m ds-font-bold">
                                            {
                                                data.data.bestPerformance
                                                    .batsmen[0].player
                                                    .battingName
                                            }{" "}
                                        </span>
                                        <span className="ds-text-tight-s ds-font-regular ds-text-typo-paragraph-light">
                                            {
                                                data.data.bestPerformance
                                                    .batsmen[0].teamAbbreviation
                                            }
                                        </span>
                                        <div className="ds-flex ds-items-center">
                                            <div className="ds-flex">
                                                <span className="text-yellow-500 ds-text-tight-s ds-font-bold ">
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0].runs
                                                    }{" "}
                                                    runs&nbsp;
                                                </span>
                                                <span className="ds-text-tight-s ds-font-regular ds-text-typo-paragraph-light">
                                                    (
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0].balls
                                                    }
                                                    )
                                                </span>
                                            </div>
                                            <div className="ds-flex ds-items-center">
                                                <span className="ds-ml-2 ds-mr-1 ds-inline-flex ds-rounded-full ds-bg-fill-success ds-w-1.5 ds-h-1.5"></span>
                                                <span className="ds-text-tight-s ds-font-regular">
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0].fours
                                                    }{" "}
                                                    fours
                                                </span>
                                                <span className="ds-ml-2 ds-mr-1 ds-inline-flex ds-rounded-full ds-bg-fill-primary ds-w-1.5 ds-h-1.5"></span>
                                                <span className="ds-text-tight-s ds-font-regular">
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0].sixes
                                                    }{" "}
                                                    sixes
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ds-flex ds-items-center ds-justify-between">
                                    <div className="ds-w-1/2">
                                        <div>
                                            <div className="ds-text-tight-xs ds-font-bold ds-uppercase ds-text-ui-typo-light">
                                                Control
                                            </div>
                                            <div className="ds-text-tight-s ds-font-bold ds-mb-1">
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[0].control
                                                }
                                                %
                                            </div>
                                            <div className="ds-relative ds-w-full ds-h-2 ds-bg-fill-content-alternate ds-rounded-full ds-overflow-hidden">
                                                <span className="ds-absolute ds-rounded-full ds-bg-fill-primary ds-inline-block ds-h-full"></span>
                                            </div>
                                        </div>
                                        <div className="ds-mt-4">
                                            <div className="ds-text-tight-xs ds-font-bold ds-uppercase ds-text-ui-typo-light">
                                                Productive shot
                                            </div>
                                            <div className="ds-text-tight-s ds-font-bold ds-capitalize">
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[0].shot
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ds-w-1/2 ds-max-w-[140px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 133.02 133.02"
                                            id="cricket-pie-chart"
                                            className="ds-overflow-hidden ds-max-w-full"
                                        >
                                            <g>
                                                <circle
                                                    stroke="white"
                                                    fill="white"
                                                    className="ds-fill-ui-stroke"
                                                    cx="66.51"
                                                    cy="66.51"
                                                    r="64.52"
                                                ></circle>
                                                <path
                                                    className="ds-fill-fill-content-prime"
                                                    d="M20.56,111.87,65.49,67.1H2A63.09,63.09,0,0,0,20.56,111.87Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-ui-stroke"
                                                    d="M65.28,130.38h0Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-fill-primary"
                                                    d="M65.95,131l.11-63.44-44.9,44.9A63.09,63.09,0,0,0,65.95,131Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-ui-stroke"
                                                    d="M110.65,112.49l.15-.16-.3.3Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-fill-content-prime"
                                                    d="M112.43,111.87,67.49,67.1H131A63.09,63.09,0,0,1,112.43,111.87Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-fill-content-prime"
                                                    d="M67,131l-.11-63.44,44.9,44.9A63.09,63.09,0,0,1,67,131Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-ui-stroke"
                                                    d="M22.33,112.49l-.15-.16.3.3Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-fill-content-prime"
                                                    d="M20.56,21.44,65.49,66.22H2A63.09,63.09,0,0,1,20.56,21.44Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-ui-stroke"
                                                    d="M65.28,2.94h0Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-fill-content-prime"
                                                    d="M65.95,2.29l.11,63.44-44.9-44.9A63.09,63.09,0,0,1,65.95,2.29Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-ui-stroke"
                                                    d="M110.65,20.83l.15.16-.3-.3Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-fill-content-prime"
                                                    d="M112.43,21.44,67.49,66.22H131A63.09,63.09,0,0,0,112.43,21.44Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-ui-stroke"
                                                    d="M67.71,2.94h0Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-fill-content-prime"
                                                    d="M67,2.29l-.11,63.44,44.9-44.9A63.09,63.09,0,0,0,67,2.29Z"
                                                ></path>
                                                <path
                                                    className="ds-fill-ui-stroke"
                                                    d="M22.33,20.83l-.15.16.3-.3Z"
                                                ></path>
                                                <text
                                                    className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                    transform="translate(45.32 29.22)"
                                                >
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0]
                                                            .wagonData[0]
                                                    }
                                                </text>
                                                <text
                                                    className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                    transform="translate(80.32 29.22)"
                                                >
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0]
                                                            .wagonData[1]
                                                    }
                                                </text>
                                                <text
                                                    className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                    transform="translate(105.65 55.84)"
                                                >
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0]
                                                            .wagonData[2]
                                                    }
                                                </text>
                                                <text
                                                    className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                    transform="translate(17.44 55.84)"
                                                >
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0]
                                                            .wagonData[3]
                                                    }
                                                </text>
                                                <text
                                                    className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                    transform="translate(19.44 89.59)"
                                                >
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0]
                                                            .wagonData[4]
                                                    }
                                                </text>
                                                <text
                                                    className="ds-font-bold ds-text-tight-xs ds-fill-raw-white"
                                                    transform="translate(44.32 115.93)"
                                                >
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0]
                                                            .wagonData[5]
                                                    }
                                                </text>
                                                <text
                                                    className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                    transform="translate(80.32 116.16)"
                                                >
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0]
                                                            .wagonData[6]
                                                    }
                                                </text>
                                                <text
                                                    className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                    transform="translate(105.65 88.16)"
                                                    fill="#ffffff"
                                                >
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .batsmen[0]
                                                            .wagonData[7]
                                                    }
                                                </text>
                                                <circle
                                                    stroke="white"
                                                    fill="white"
                                                    className="ds-fill-[transparent] ds-stroke-ui-stroke ds-stroke-1"
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
                        <div className="ds-p-3 bg-widget-bg p-3 rounded-xl">
                            <div className="flex">
                                <div className="ds-border ds-border-ui-stroke ds-font-bold ds-text-ui-typo ds-bg-fill ds-rounded-full ds-overflow-hidden ds-w-10 ds-h-10 ds-text-title-m">
                                    <img
                                        width="40"
                                        height="40"
                                        alt={
                                            data.data.bestPerformance.batsmen[1]
                                                .player.image.longCaption
                                        }
                                        className="ds-block"
                                        src={`https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci${data.data.bestPerformance.batsmen[1].player.image.url}`}
                                    />
                                </div>
                                <div className="ds-ml-2 ">
                                    <span className=" ds-font-bold text-sm">
                                        {
                                            data.data.bestPerformance.batsmen[1]
                                                .player.battingName
                                        }{" "}
                                    </span>
                                    <span className="ds-text-tight-s ds-font-regular ds-text-typo-paragraph-light">
                                        {
                                            data.data.bestPerformance.batsmen[1]
                                                .teamAbbreviation
                                        }
                                    </span>
                                    <div className="ds-flex ds-items-center ds-justify-between">
                                        <div className="ds-flex">
                                            <span className="text-xs ds-font-bold  text-yellow-500">
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].runs
                                                }{" "}
                                                runs&nbsp;
                                            </span>
                                            <span className="text-xs ds-font-regular ds-text-typo-paragraph-light">
                                                (
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].balls
                                                }
                                                )
                                            </span>
                                        </div>
                                        <div className="ds-flex ds-items-center">
                                            <span className="ds-ml-2 ds-mr-1 ds-inline-flex ds-rounded-full ds-bg-fill-success ds-w-2.5 ds-h-2.5"></span>
                                            <span className="ds-text-tight-s ds-font-regular">
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].fours
                                                }{" "}
                                                fours
                                            </span>
                                            <span className="ds-ml-2 ds-mr-1 ds-inline-flex ds-rounded-full ds-bg-fill-primary ds-w-2.5 ds-h-2.5"></span>
                                            <span className="ds-text-tight-s ds-font-regular">
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].sixes
                                                }{" "}
                                                sixes
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ds-flex ds-items-center ds-justify-between">
                                <div className="ds-w-1/2">
                                    <div>
                                        <div className="ds-text-tight-xs ds-font-bold ds-uppercase ds-text-ui-typo-light">
                                            Control
                                        </div>
                                        <div className="ds-text-tight-m ds-font-bold ds-mb-1">
                                            {
                                                data.data.bestPerformance
                                                    .batsmen[1].control
                                            }
                                            %
                                        </div>
                                        <div className="ds-relative ds-w-full ds-h-2 ds-bg-fill-content-alternate ds-rounded-full ds-overflow-hidden">
                                            <span className="ds-absolute ds-rounded-full ds-bg-fill-primary ds-inline-block ds-h-full"></span>
                                        </div>
                                    </div>
                                    <div className="ds-mt-4">
                                        <div className="ds-text-tight-xs ds-font-bold ds-uppercase ds-text-ui-typo-light">
                                            Productive shot
                                        </div>
                                        <div className="ds-text-tight-m ds-font-bold ds-capitalize">
                                            {
                                                data.data.bestPerformance
                                                    .batsmen[1].shot
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="ds-w-1/2 ds-max-w-[140px] ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 133.02 133.02"
                                        id="cricket-pie-chart"
                                        className="ds-overflow-hidden ds-max-w-full"
                                    >
                                        <g>
                                            <circle
                                                stroke="white"
                                                fill="white"
                                                className="ds-fill-ui-stroke"
                                                cx="66.51"
                                                cy="66.51"
                                                r="64.52"
                                            ></circle>
                                            <path
                                                className="ds-fill-fill-content-prime"
                                                d="M20.56,111.87,65.49,67.1H2A63.09,63.09,0,0,0,20.56,111.87Z"
                                            ></path>
                                            <path
                                                className="ds-fill-ui-stroke"
                                                d="M65.28,130.38h0Z"
                                            ></path>
                                            <path
                                                className="ds-fill-fill-primary"
                                                d="M65.95,131l.11-63.44-44.9,44.9A63.09,63.09,0,0,0,65.95,131Z"
                                            ></path>
                                            <path
                                                className="ds-fill-ui-stroke"
                                                d="M110.65,112.49l.15-.16-.3.3Z"
                                            ></path>
                                            <path
                                                className="ds-fill-fill-primary"
                                                d="M112.43,111.87,67.49,67.1H131A63.09,63.09,0,0,1,112.43,111.87Z"
                                            ></path>
                                            <path
                                                className="ds-fill-fill-content-prime"
                                                d="M67,131l-.11-63.44,44.9,44.9A63.09,63.09,0,0,1,67,131Z"
                                            ></path>
                                            <path
                                                className="ds-fill-ui-stroke"
                                                d="M22.33,112.49l-.15-.16.3.3Z"
                                            ></path>
                                            <path
                                                className="ds-fill-fill-content-prime"
                                                d="M20.56,21.44,65.49,66.22H2A63.09,63.09,0,0,1,20.56,21.44Z"
                                            ></path>
                                            <path
                                                className="ds-fill-ui-stroke"
                                                d="M65.28,2.94h0Z"
                                            ></path>
                                            <path
                                                className="ds-fill-fill-content-prime"
                                                d="M65.95,2.29l.11,63.44-44.9-44.9A63.09,63.09,0,0,1,65.95,2.29Z"
                                            ></path>
                                            <path
                                                className="ds-fill-ui-stroke"
                                                d="M110.65,20.83l.15.16-.3-.3Z"
                                            ></path>
                                            <path
                                                className="ds-fill-fill-content-prime"
                                                d="M112.43,21.44,67.49,66.22H131A63.09,63.09,0,0,0,112.43,21.44Z"
                                            ></path>
                                            <path
                                                className="ds-fill-ui-stroke"
                                                d="M67.71,2.94h0Z"
                                            ></path>
                                            <path
                                                className="ds-fill-fill-content-prime"
                                                d="M67,2.29l-.11,63.44,44.9-44.9A63.09,63.09,0,0,0,67,2.29Z"
                                            ></path>
                                            <path
                                                className="ds-fill-ui-stroke"
                                                d="M22.33,20.83l-.15.16.3-.3Z"
                                            ></path>
                                            <text
                                                className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                transform="translate(45.32 29.22)"
                                            >
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].wagonData[0]
                                                }
                                            </text>
                                            <text
                                                className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                transform="translate(80.32 29.22)"
                                            >
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].wagonData[1]
                                                }
                                            </text>
                                            <text
                                                className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                transform="translate(105.65 55.84)"
                                            >
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].wagonData[2]
                                                }
                                            </text>
                                            <text
                                                className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                transform="translate(17.44 55.84)"
                                            >
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].wagonData[3]
                                                }
                                            </text>
                                            <text
                                                className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                transform="translate(19.44 89.59)"
                                            >
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].wagonData[4]
                                                }
                                            </text>
                                            <text
                                                className="ds-font-bold ds-text-tight-xs ds-fill-raw-white"
                                                transform="translate(44.32 115.93)"
                                            >
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].wagonData[5]
                                                }
                                            </text>
                                            <text
                                                className="ds-font-bold ds-text-tight-xs ds-fill-typo-title"
                                                transform="translate(80.32 116.16)"
                                            >
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].wagonData[6]
                                                }
                                            </text>
                                            <text
                                                className="ds-font-bold ds-text-tight-xs ds-fill-raw-white"
                                                transform="translate(105.65 88.16)"
                                                fill="#ffffff"
                                            >
                                                {
                                                    data.data.bestPerformance
                                                        .batsmen[1].wagonData[7]
                                                }
                                            </text>
                                            <circle
                                                stroke="white"
                                                fill="white"
                                                className="ds-fill-[transparent] ds-stroke-ui-stroke ds-stroke-1"
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
                            <div className="p-8">
                                <div className="ds-flex">
                                    <div className="ds-border ds-border-ui-stroke ds-font-bold ds-text-ui-typo ds-bg-fill ds-rounded-full ds-overflow-hidden ds-w-16 ds-h-16 ds-text-title-m">
                                        <img
                                            width="64"
                                            height="64"
                                            alt={
                                                data.data.bestPerformance
                                                    .bowlers[0].player.image
                                                    .longCaption
                                            }
                                            className="ds-block"
                                            src={`https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci${data.data.bestPerformance.bowlers[0].player.image.url}`}
                                        />
                                    </div>
                                    <div className="ds-text-tight-s ds-font-bold ds-ml-2">
                                        <div className="ds-text-tight-l ds-font-bold">
                                            {
                                                data.data.bestPerformance
                                                    .bowlers[0].player.longName
                                            }
                                            <span className="ds-text-tight-s ds-font-regular ds-text-typo-paragraph-light">
                                                {
                                                    data.data.bestPerformance
                                                        .bowlers[0].player
                                                        .teamAbbreviation
                                                }
                                            </span>
                                        </div>
                                        <div className="ds-flex ds-mt-2">
                                            <div className="ds-mr-4">
                                                <div className="ds-text-tight-xs ds-font-bold">
                                                    O
                                                </div>
                                                <div>
                                                    {console.log(
                                                        data.data
                                                            .bestPerformance
                                                            .bowlers[0]
                                                    )}
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .bowlers[0].overs
                                                    }
                                                </div>
                                            </div>
                                            <div className="ds-mr-4">
                                                <div className="ds-text-tight-xs ds-font-bold">
                                                    M
                                                </div>
                                                <div>
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .bowlers[0].maidens
                                                    }
                                                </div>
                                            </div>
                                            <div className="ds-mr-4">
                                                <div className="ds-text-tight-xs ds-font-bold">
                                                    R
                                                </div>
                                                <div>
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .bowlers[0].conceded
                                                    }
                                                </div>
                                            </div>
                                            <div className="ds-mr-4">
                                                <div className="ds-text-tight-xs ds-font-bold">
                                                    W
                                                </div>
                                                <div>
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .bowlers[0].wickets
                                                    }
                                                </div>
                                            </div>
                                            <div className="ds-mr-4">
                                                <div className="ds-text-tight-xs ds-font-bold">
                                                    ECO
                                                </div>
                                                <div>
                                                    {
                                                        data.data
                                                            .bestPerformance
                                                            .bowlers[0].economy
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ds-flex ds-pt-6">
                                    <div className="ds-text-tight-s ds-font-regular ds-text-ui-typo-mid ds-pt-12">
                                        <span className="ds-block ds-p-2 ds-border-line ds-border-b">
                                            FT
                                        </span>
                                        <span className="ds-block ds-p-2 ds-border-line ds-border-b">
                                            Y
                                        </span>
                                        <span className="ds-block ds-p-2 ds-border-line ds-border-b">
                                            FL
                                        </span>
                                        <span className="ds-block ds-p-2 ds-border-line ds-border-b">
                                            GL
                                        </span>
                                        <span className="ds-block ds-p-2 ds-border-line ds-border-b">
                                            SG
                                        </span>
                                        <span className="ds-block ds-p-2 ds-border-line ds-border-b">
                                            S
                                        </span>
                                    </div>
                                    <div className="ds-w-[104px]">
                                        <div className="ds-text-tight-s ds-font-regular">
                                            <div className="ds-flex ds-justify-between ds-text-ui-typo-mid ds-mb-2">
                                                <span className="ds-px-1 ds-border-line ds-border-b">
                                                    OFF
                                                </span>

                                                <span className="ds-px-1 ds-border-line ds-border-b">
                                                    LEG
                                                </span>
                                            </div>
                                            <div className="text-black ds-text-tight-xs ds-font-bold ds-w-[106px] ds-py-1.5 ds-bg-fill-content-alternate ds-text-center">
                                                RHB
                                            </div>
                                        </div>
                                        <table className="ds-w-full ds-table ds-table-sm ds-table-bordered ds-border-collapse ds-border ds-border-line ds-table-auto  ds-text-tight-xs">
                                            <tbody className="">
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center">
                                                            1W
                                                        </div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="ds-w-[104px] ds-ml-4">
                                        <div className="ds-text-tight-s ds-font-regular">
                                            <div className="ds-flex ds-justify-between ds-text-ui-typo-light ds-mb-2">
                                                <span className="ds-px-1 ds-border-line ds-border-b">
                                                    LEG
                                                </span>

                                                <span className="ds-px-1 ds-border-line ds-border-b">
                                                    OFF
                                                </span>
                                            </div>
                                            <div className="text-black ds-text-tight-xs ds-font-bold ds-w-[106px] ds-py-1.5 ds-bg-fill-content-alternate ds-text-center">
                                                LHB
                                            </div>
                                        </div>
                                        <table className="ds-w-full ds-table ds-table-sm ds-table-bordered ds-border-collapse ds-border ds-border-line ds-table-auto  ds-text-tight-xs">
                                            <tbody className="">
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center">
                                                            1W
                                                        </div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center">
                                                            1W
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                                <tr className="ds-border-b ds-border-line">
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                    <td className="ds-min-w-max !ds-p-0">
                                                        <div className="ds-w-[20px] ds-h-[32px] ds-flex ds-items-center ds-justify-center"></div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )} */}

                <div className=" col-span-2 row-span-2 bg-widget-bg p-3 rounded-xl">
                    <div className="ds-w-full ds-bg-fill-content-prime ds-overflow-hidden ds-rounded-xl ds-border ds-border-line ds-mb-4">
                        <div className="bg-gray-700 ds-flex ds-px-4 ds-border-b ds-border-line ds-py-3">
                            <div className="ds-flex ds-flex-col ds-grow ds-justify-center">
                                <span className="ds-text-title-xs ds-font-bold ds-text-typo-title">
                                    <span className="text-white">Worm</span>
                                </span>
                            </div>
                            <div className="ds-flex ds-flex-row ds-items-center">
                                <span className="ds-pl-2">
                                    <div className="ds-flex">
                                        <div className="ds-flex ds-items-center ds-mr-4">
                                            <span className="ds-w-4 ds-h-4 ds-rounded-full ds-inline-flex bg-white"></span>
                                            <span className="ds-pl-2 ds-text-tight-s">
                                                Wickets
                                            </span>
                                        </div>
                                        <div className="ds-flex ds-items-center ds-mr-4">
                                            <span className="ds-w-4 ds-h-4 ds-rounded-full ds-inline-flex bg-red-500"></span>
                                            <span className="ds-pl-2 ds-text-tight-s">
                                                {
                                                    data.data.match.teams[0]
                                                        .team.longName
                                                }
                                            </span>
                                        </div>
                                        <div className="ds-flex ds-items-center ds-mr-4">
                                            <span className="ds-w-4 ds-h-4 ds-rounded-full ds-inline-flex bg-yellow-500"></span>
                                            <span className="ds-pl-2 ds-text-tight-s">
                                                {
                                                    data.data.match.teams[1]
                                                        .team.longName
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="ds-p-4 bg-gray-700">
                            <div className="ci-chart-container">
                                <div>
                                    <div className="rv-xy-plot ">
                                        <svg
                                            className="rv-xy-plot__inner"
                                            width="690"
                                            height="300"
                                        >
                                            <g
                                                transform="translate(40,10)"
                                                className="rv-xy-plot__grid-lines undefined"
                                            >
                                                <line
                                                    y1="250"
                                                    y2="250"
                                                    x1="0"
                                                    x2="640"
                                                    className="rv-xy-plot__grid-lines__line"
                                                ></line>
                                                <line
                                                    y1="177.7456647398844"
                                                    y2="177.7456647398844"
                                                    x1="0"
                                                    x2="640"
                                                    className="rv-xy-plot__grid-lines__line"
                                                ></line>
                                                <line
                                                    y1="105.49132947976878"
                                                    y2="105.49132947976878"
                                                    x1="0"
                                                    x2="640"
                                                    className="rv-xy-plot__grid-lines__line"
                                                ></line>
                                                <line
                                                    y1="33.23699421965318"
                                                    y2="33.23699421965318"
                                                    x1="0"
                                                    x2="640"
                                                    className="rv-xy-plot__grid-lines__line"
                                                ></line>
                                            </g>
                                            <path
                                                d="M0,250L35.125,235.4368932038835L70.25,223.3009708737864L105.375,199.02912621359224L140.5,172.33009708737865L175.625,167.4757281553398L210.75,162.62135922330094L245.875,148.05825242718444L281,138.3495145631068L316.125,116.50485436893204L351.25,89.80582524271844L386.375,72.81553398058252L421.5,55.8252427184466L456.625,48.54368932038835L491.75,33.98058252427186L526.875,0"
                                                className="stroke-red-500 rv-xy-plot__series rv-xy-plot__series--line "
                                                transform="translate(40,10)"
                                            ></path>

                                            <path
                                                d="M0,250L35.125,237.8640776699029L70.25,237.8640776699029L105.375,235.4368932038835L140.5,208.73786407766988L175.625,189.32038834951456L210.75,172.33009708737865L245.875,165.04854368932038L281,140.7766990291262L316.125,118.93203883495146L351.25,92.23300970873785L386.375,77.66990291262135L421.5,75.24271844660194L456.625,55.8252427184466L491.75,43.68932038834952L526.875,38.83495145631069L562,14.563106796116498"
                                                className="stroke-yellow-500 rv-xy-plot__series rv-xy-plot__series--line "
                                                transform="translate(40,10)"
                                            ></path>
                                            <g
                                                class="rv-xy-plot__series rv-xy-plot__series--mark undefined"
                                                transform="translate(40,10)"
                                            >
                                                <circle
                                                    r="3.5"
                                                    cx="35.125"
                                                    cy="237.8640776699029"
                                                    stroke="white"
                                                    fill="white"
                                                ></circle>
                                                <circle
                                                    r="3.5"
                                                    cx="35.125"
                                                    cy="236.6504854368932"
                                                    stroke="white"
                                                    fill="white"
                                                ></circle>
                                                <circle
                                                    r="3.5"
                                                    cx="70.25"
                                                    cy="237.8640776699029"
                                                    stroke="white"
                                                    fill="white"
                                                ></circle>
                                                <circle
                                                    r="3.5"
                                                    cx="175.625"
                                                    cy="189.32038834951456"
                                                    stroke="white"
                                                    fill="white"
                                                ></circle>
                                                <circle
                                                    r="3.5"
                                                    cx="210.75"
                                                    cy="172.33009708737865"
                                                    stroke="white"
                                                    fill="white"
                                                ></circle>
                                                <circle
                                                    r="3.5"
                                                    cx="281"
                                                    cy="140.7766990291262"
                                                    stroke="white"
                                                    fill="white"
                                                ></circle>
                                                <circle
                                                    r="3.5"
                                                    cx="456.625"
                                                    cy="55.8252427184466"
                                                    stroke="white"
                                                    fill="white"
                                                ></circle>
                                                <circle
                                                    r="3.5"
                                                    cx="456.625"
                                                    cy="54.6116504854369"
                                                    stroke="white"
                                                    fill="white"
                                                ></circle>
                                                <circle
                                                    r="3.5"
                                                    cx="491.75"
                                                    cy="43.68932038834952"
                                                    stroke="white"
                                                    fill="white"
                                                ></circle>
                                                <circle
                                                    r="3.5"
                                                    cx="562"
                                                    cy="14.563106796116498"
                                                    stroke="white"
                                                    fill="white"
                                                ></circle>
                                            </g>

                                            <g
                                                class="rv-xy-plot__series rv-xy-plot__series--mark undefined"
                                                transform="translate(40,10)"
                                            >
                                                <circle
                                                    r="3.5"
                                                    cx="35.125"
                                                    cy="235.4368932038835"
                                                    stroke="white"
                                                    fill="white"
                                                ></circle>
                                                <circle
                                                    r="3.5"
                                                    cx="140.5"
                                                    cy="172.33009708737865"
                                                    stroke="white"
                                                    fill="white"
                                                ></circle>
                                                <circle
                                                    r="3.5"
                                                    cx="175.625"
                                                    cy="167.4757281553398"
                                                    stroke="white"
                                                    fill="white"
                                                ></circle>
                                                <circle
                                                    r="3.5"
                                                    cx="175.625"
                                                    cy="166.2621359223301"
                                                    stroke="white"
                                                    fill="white"
                                                ></circle>
                                                <circle
                                                    r="3.5"
                                                    cx="456.625"
                                                    cy="48.54368932038835"
                                                    stroke="white"
                                                    fill="white"
                                                ></circle>
                                            </g>

                                            <g
                                                transform="translate(40,260)"
                                                className="rv-xy-plot__axis rv-xy-plot__axis--horizontal "
                                            >
                                                <line
                                                    x1="0"
                                                    x2="640"
                                                    y1="0"
                                                    y2="0"
                                                    className="rv-xy-plot__axis__line"
                                                ></line>
                                                <g
                                                    transform="translate(0, 0)"
                                                    className="rv-xy-plot__axis__ticks"
                                                >
                                                    <g
                                                        transform="translate(0, 0)"
                                                        className="rv-xy-plot__axis__tick"
                                                    >
                                                        <line
                                                            x1="0"
                                                            x2="0"
                                                            y1="-6"
                                                            y2="6"
                                                            className="rv-xy-plot__axis__tick__line"
                                                        ></line>
                                                        <text
                                                            textAnchor="middle"
                                                            dy="0.72em"
                                                            transform="translate(0, 14)"
                                                            className="rv-xy-plot__axis__tick__text"
                                                        >
                                                            0
                                                        </text>
                                                    </g>
                                                    <g
                                                        transform="translate(64, 0)"
                                                        className="rv-xy-plot__axis__tick"
                                                    >
                                                        <line
                                                            x1="0"
                                                            x2="0"
                                                            y1="-6"
                                                            y2="6"
                                                            className="rv-xy-plot__axis__tick__line"
                                                        ></line>
                                                        <text
                                                            textAnchor="middle"
                                                            dy="0.72em"
                                                            transform="translate(0, 14)"
                                                            className="rv-xy-plot__axis__tick__text"
                                                        >
                                                            2
                                                        </text>
                                                    </g>
                                                    <g
                                                        transform="translate(128, 0)"
                                                        className="rv-xy-plot__axis__tick"
                                                    >
                                                        <line
                                                            x1="0"
                                                            x2="0"
                                                            y1="-6"
                                                            y2="6"
                                                            className="rv-xy-plot__axis__tick__line"
                                                        ></line>
                                                        <text
                                                            textAnchor="middle"
                                                            dy="0.72em"
                                                            transform="translate(0, 14)"
                                                            className="rv-xy-plot__axis__tick__text"
                                                        >
                                                            4
                                                        </text>
                                                    </g>
                                                    <g
                                                        transform="translate(192, 0)"
                                                        className="rv-xy-plot__axis__tick"
                                                    >
                                                        <line
                                                            x1="0"
                                                            x2="0"
                                                            y1="-6"
                                                            y2="6"
                                                            className="rv-xy-plot__axis__tick__line"
                                                        ></line>
                                                        <text
                                                            textAnchor="middle"
                                                            dy="0.72em"
                                                            transform="translate(0, 14)"
                                                            className="rv-xy-plot__axis__tick__text"
                                                        >
                                                            6
                                                        </text>
                                                    </g>
                                                    <g
                                                        transform="translate(256, 0)"
                                                        className="rv-xy-plot__axis__tick"
                                                    >
                                                        <line
                                                            x1="0"
                                                            x2="0"
                                                            y1="-6"
                                                            y2="6"
                                                            className="rv-xy-plot__axis__tick__line"
                                                        ></line>
                                                        <text
                                                            textAnchor="middle"
                                                            dy="0.72em"
                                                            transform="translate(0, 14)"
                                                            className="rv-xy-plot__axis__tick__text"
                                                        >
                                                            8
                                                        </text>
                                                    </g>
                                                    <g
                                                        transform="translate(320, 0)"
                                                        className="rv-xy-plot__axis__tick"
                                                    >
                                                        <line
                                                            x1="0"
                                                            x2="0"
                                                            y1="-6"
                                                            y2="6"
                                                            className="rv-xy-plot__axis__tick__line"
                                                        ></line>
                                                        <text
                                                            textAnchor="middle"
                                                            dy="0.72em"
                                                            transform="translate(0, 14)"
                                                            className="rv-xy-plot__axis__tick__text"
                                                        >
                                                            10
                                                        </text>
                                                    </g>
                                                    <g
                                                        transform="translate(384, 0)"
                                                        className="rv-xy-plot__axis__tick"
                                                    >
                                                        <line
                                                            x1="0"
                                                            x2="0"
                                                            y1="-6"
                                                            y2="6"
                                                            className="rv-xy-plot__axis__tick__line"
                                                        ></line>
                                                        <text
                                                            textAnchor="middle"
                                                            dy="0.72em"
                                                            transform="translate(0, 14)"
                                                            className="rv-xy-plot__axis__tick__text"
                                                        >
                                                            12
                                                        </text>
                                                    </g>
                                                    <g
                                                        transform="translate(448, 0)"
                                                        className="rv-xy-plot__axis__tick"
                                                    >
                                                        <line
                                                            x1="0"
                                                            x2="0"
                                                            y1="-6"
                                                            y2="6"
                                                            className="rv-xy-plot__axis__tick__line"
                                                        ></line>
                                                        <text
                                                            textAnchor="middle"
                                                            dy="0.72em"
                                                            transform="translate(0, 14)"
                                                            className="rv-xy-plot__axis__tick__text"
                                                        >
                                                            14
                                                        </text>
                                                    </g>
                                                    <g
                                                        transform="translate(512, 0)"
                                                        className="rv-xy-plot__axis__tick"
                                                    >
                                                        <line
                                                            x1="0"
                                                            x2="0"
                                                            y1="-6"
                                                            y2="6"
                                                            className="rv-xy-plot__axis__tick__line"
                                                        ></line>
                                                        <text
                                                            textAnchor="middle"
                                                            dy="0.72em"
                                                            transform="translate(0, 14)"
                                                            className="rv-xy-plot__axis__tick__text"
                                                        >
                                                            16
                                                        </text>
                                                    </g>
                                                    <g
                                                        transform="translate(576, 0)"
                                                        className="rv-xy-plot__axis__tick"
                                                    >
                                                        <line
                                                            x1="0"
                                                            x2="0"
                                                            y1="-6"
                                                            y2="6"
                                                            className="rv-xy-plot__axis__tick__line"
                                                        ></line>
                                                        <text
                                                            textAnchor="middle"
                                                            dy="0.72em"
                                                            transform="translate(0, 14)"
                                                            className="rv-xy-plot__axis__tick__text"
                                                        >
                                                            18
                                                        </text>
                                                    </g>
                                                    <g
                                                        transform="translate(640, 0)"
                                                        className="rv-xy-plot__axis__tick"
                                                    >
                                                        <line
                                                            x1="0"
                                                            x2="0"
                                                            y1="-6"
                                                            y2="6"
                                                            className="rv-xy-plot__axis__tick__line"
                                                        ></line>
                                                        <text
                                                            textAnchor="middle"
                                                            dy="0.72em"
                                                            transform="translate(0, 14)"
                                                            className="rv-xy-plot__axis__tick__text"
                                                        >
                                                            20
                                                        </text>
                                                    </g>
                                                </g>
                                            </g>
                                            <g
                                                transform="translate(0,10)"
                                                className="rv-xy-plot__axis rv-xy-plot__axis--vertical "
                                            >
                                                <line
                                                    x1="40"
                                                    x2="40"
                                                    y1="0"
                                                    y2="250"
                                                    className="rv-xy-plot__axis__line"
                                                ></line>
                                                <g
                                                    transform="translate(40, 0)"
                                                    className="rv-xy-plot__axis__ticks"
                                                >
                                                    <g
                                                        transform="translate(0, 250)"
                                                        className="rv-xy-plot__axis__tick"
                                                    >
                                                        <line
                                                            y1="0"
                                                            y2="0"
                                                            x1="6"
                                                            x2="-6"
                                                            className="rv-xy-plot__axis__tick__line"
                                                        ></line>
                                                        <text
                                                            textAnchor="end"
                                                            dy="0.32em"
                                                            transform="translate(-14, 0)"
                                                            className="rv-xy-plot__axis__tick__text"
                                                        >
                                                            0
                                                        </text>
                                                    </g>
                                                    <g
                                                        transform="translate(0, 177.7456647398844)"
                                                        className="rv-xy-plot__axis__tick"
                                                    >
                                                        <line
                                                            y1="0"
                                                            y2="0"
                                                            x1="6"
                                                            x2="-6"
                                                            className="rv-xy-plot__axis__tick__line"
                                                        ></line>
                                                        <text
                                                            textAnchor="end"
                                                            dy="0.32em"
                                                            transform="translate(-14, 0)"
                                                            className="rv-xy-plot__axis__tick__text"
                                                        >
                                                            50
                                                        </text>
                                                    </g>
                                                    <g
                                                        transform="translate(0, 105.49132947976878)"
                                                        className="rv-xy-plot__axis__tick"
                                                    >
                                                        <line
                                                            y1="0"
                                                            y2="0"
                                                            x1="6"
                                                            x2="-6"
                                                            className="rv-xy-plot__axis__tick__line"
                                                        ></line>
                                                        <text
                                                            textAnchor="end"
                                                            dy="0.32em"
                                                            transform="translate(-14, 0)"
                                                            className="rv-xy-plot__axis__tick__text"
                                                        >
                                                            100
                                                        </text>
                                                    </g>
                                                    <g
                                                        transform="translate(0, 33.23699421965318)"
                                                        className="rv-xy-plot__axis__tick"
                                                    >
                                                        <line
                                                            y1="0"
                                                            y2="0"
                                                            x1="6"
                                                            x2="-6"
                                                            className="rv-xy-plot__axis__tick__line"
                                                        ></line>
                                                        <text
                                                            textAnchor="end"
                                                            dy="0.32em"
                                                            transform="translate(-14, 0)"
                                                            className="rv-xy-plot__axis__tick__text"
                                                        >
                                                            150
                                                        </text>
                                                    </g>
                                                </g>
                                            </g>
                                            <g
                                                transform="translate(345, 310)"
                                                className="rv-xy-plot__axis__title alt-x-label"
                                            >
                                                <text>OVERS</text>
                                            </g>
                                            <g
                                                transform="translate(0, 100)"
                                                className="rv-xy-plot__axis__title alt-y-label"
                                            >
                                                <text
                                                    transform="rotate(-90)"
                                                    textAnchor="end"
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
                        {data.data.match.ground.longName}
                    </p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="text-white h-[80vh] text-2xl font-semibold flex justify-center items-center">
                Loading...
            </div>
        );
    }
}

export default LiveScore;
