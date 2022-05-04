export default function BlogThumbnail({
    title,
    summary,
    imgUrl,
    imgAlt,
    storyUrl,
}) {
    return (
        <a
            href={storyUrl}
            target="_blank"
            rel="noreferrer"
            className="block bg-widget-bg p-4 rounded-xl"
        >
            <img src={imgUrl} alt={imgAlt} className="rounded-lg" />
            <div className="px-2 text-white py-4 ">
                <h2 className="text-xl font-bold pb-2 hover:underline">
                    {title}
                </h2>
                <p>{summary}</p>
            </div>
        </a>
    );
}
