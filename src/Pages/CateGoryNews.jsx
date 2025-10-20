import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CateGoryNews = () => {
  const { id } = useParams();
  const allNews = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);
  // console.log(categoryNews);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(allNews);
      return;
    } else if (id == "1") {
      const filteredNews = allNews.filter(
        (news) => news.others.is_today_pick === true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = allNews.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [allNews, id]);

  //   console.log(filteredNews);
  return (
    <div>
      <h1 className='font-bold text-xl'>Dragon News Home</h1>
      <div className="grid grid-cols-1 gap-4 mt-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CateGoryNews;
