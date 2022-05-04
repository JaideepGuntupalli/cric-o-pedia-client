import MatchSection from "../components/MatchSection/MatchSection";
import BlogSection from "../components/Blog/BlogSection";
import FactsSection from "../components/Facts/FactsSection";

function Home() {
    return (
        <>
            <MatchSection />
            <div className="flex w-4/5 mx-auto gap-8">
                <BlogSection />
                <FactsSection />
            </div>
        </>
    );
}

export default Home;
