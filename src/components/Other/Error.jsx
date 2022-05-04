import bowled from "./../../assets/bowled.webp";

function Error() {
    return (
        <div className="text-white font-mulish h-[60vh] flex gap-28 justify-center items-center">
            <img src={bowled} alt="" className="invert h-2/3" />
            <div className="flex flex-col gap-6">
                <h1 className="text-5xl">404 Error</h1>
                <p className="text-center text-2xl">Page Not found</p>
            </div>
        </div>
    );
}

export default Error;
