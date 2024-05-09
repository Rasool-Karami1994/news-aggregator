import { useEffect } from "react";
import CardsList from "./CardsList";
import FilterMenu from "./FilterMenu";
import Header from "./Header";
import {
  getGauardianNews,
  // getGoogleApiNews,
  getNewsApiNews,
} from "../api/newsAPI";

const AppContainer = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getGauardianNews({
          // category: "world",
        });

        const secondRes = await getNewsApiNews({
          category: "Tesla",
        });

        // const thirdRes = await getGoogleApiNews({ category: "Tesla" });
        console.log(secondRes?.data?.articles);
        console.log(response?.data?.response?.results);
        const transformData = (arr1, arr2) => {
          const combinedArr = arr1.concat(arr2);
          return combinedArr.map((obj) => {
            const {
              title,
              webTitle,
              url,
              webUrl,
              publishedAt,
              urlToImage,
              webPublicationDate,
              sectionName,
            } = obj;
            const date = webPublicationDate
              ? new Date(webPublicationDate).toLocaleDateString()
              : new Date(publishedAt).toLocaleDateString();
            const source = obj.pillarName ?? obj.source.name;
            const section = sectionName ?? "";
            const name = webTitle ?? title;
            const urlName = webUrl ?? url;
            return {
              name,
              date,
              source,
              urlName,
              imageUrl: urlToImage || "",
              section,
            };
          });
        };
        const makedData = transformData(
          secondRes?.data?.articles,
          response?.data?.response?.results
        );
        console.log(makedData);
        // console.log(thirdRes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <FilterMenu />
      <CardsList />
    </div>
  );
};
export default AppContainer;
