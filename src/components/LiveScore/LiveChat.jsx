import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { useAuth } from "./../../contexts/AuthContext";

function LiveChat({ socket, username, room }) {
    const { currentUser } = useAuth();

    let name = currentUser.email;

    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [socket]);

    return (
        <div className="bg-widget-bg row-span-2 p-4 rounded-xl">
            <div className="font-semibold text-lg">
                <p>Live Chat</p>
            </div>
            <div className=" bg-gray-600 h-4/5 rounded-lg my-3 p-3 overflow-y-auto">
                <ScrollToBottom className="message-container">
                    {messageList.map((messageContent) => {
                        return (
                            <div
                                className="message"
                                id={
                                    username === messageContent.author
                                        ? "you"
                                        : "other"
                                }
                            >
                                <div className="flex flex-col">
                                    <div className="message-meta font-bold text-gray-400 text-lg">
                                        <p id="author">
                                            {currentUser
                                                ? name
                                                : messageContent.author}
                                        </p>
                                    </div>
                                    <div className="message-content">
                                        <p>{messageContent.message}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </ScrollToBottom>
            </div>
            <div className="chat-footer">
                <input
                    type="text"
                    className="p-1 px-3 rounded-full w-4/5 text-black"
                    value={currentMessage}
                    placeholder="Send a Message..."
                    onChange={(event) => {
                        setCurrentMessage(event.target.value);
                    }}
                    onKeyPress={(event) => {
                        event.key === "Enter" && sendMessage();
                    }}
                />
                <button
                    className="bg-yellow-600 ml-4 px-2 rounded-full"
                    onClick={sendMessage}
                >
                    &#9658;
                </button>
            </div>
        </div>
    );
}

export default LiveChat;
