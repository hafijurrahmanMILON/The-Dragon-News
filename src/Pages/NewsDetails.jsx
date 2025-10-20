import { useLoaderData, useParams } from "react-router";
import Header from "../Components/Header";
import RightAside from "../Components/RightAside";
import NewsDetailsCard from "../Components/NewsDetailsCard";

const NewsDetails = () => {
  const { id } = useParams();
  const allNews = useLoaderData();
  //   console.log(allNews);

  const detailedNews = allNews.find((singleNews) => singleNews.id == id);

  return (
    <div className="bg-base-200">
      <Header></Header>

      <main className="w-8/12 mx-auto gap-12  grid grid-cols-12 mt-12">
        <div className="col-span-9">
          <h1 className="font-bold text-xl">News Details</h1>
          <NewsDetailsCard detailedNews={detailedNews}></NewsDetailsCard>
        </div>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
