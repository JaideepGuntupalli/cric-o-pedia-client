import BlogThumbnail from "./BlogThumbnail";
import { useQuery } from "react-query";
import axios from "axios";

function BlogSection() {
    const { data, isSuccess } = useQuery("news-articles", async () => {
        return await axios.get(
            " https://frozen-brook-98254.herokuapp.com/news"
        );
    });

    let key = 0;

    return (
        <div className="w-4/5 mx-auto mt-8 mb-20">
            <h1 className="font-bold text-3xl text-white my-6">
                Latest Updates
            </h1>
            <div className="grid grid-cols-2 gap-8 w-full">
                {isSuccess
                    ? data.data.map((ele) => {
                          return (
                              <BlogThumbnail
                                  key={key++}
                                  title={ele.title}
                                  summary={ele.summary}
                                  imgUrl={ele.imgUrl}
                                  storyUrl={ele.storyUrl}
                                  imgAlt={ele.imgAlt}
                              />
                          );
                      })
                    : console.log("waiting...")}
            </div>
            <div className="flex gap-6"></div>
        </div>
    );
}

export default BlogSection;
