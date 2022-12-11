import React from "react";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
import response from "../response.json";

async function HomePage() {
  // fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(","));
  //  response ||
  console.log(news);

  return (
    <div>
      {/* NewsList */}
      <NewsList news={news} />
    </div>
  );
}

export default HomePage;
