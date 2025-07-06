"use client";

import { useEffect, useState } from "react";
import { getArticles } from "../api/article";
import { format } from "date-fns";
import Link from "next/link";

function truncateText(text: string, lenght: number): string {
  const maxLength = 200; // The maximum allowed length for the final string
  const ellipsis = "...";
  const ellipsisLength = ellipsis.length;

  // Check if the text length is greater than the maxLength
  if (text.length > maxLength) {
    // Return a substring up to (maxLength - ellipsisLength) characters,
    // then append the ellipsis.
    return text.substring(0, maxLength - ellipsisLength) + ellipsis;
  }

  return text;
}

type Article = {
  id: number;
  user_id: number;
  title: string;
  content: string;
  image: string;
  image_name: string;
  school: string;
  facebook_link: string;
  is_publishable: boolean | number;
  created_at: string;
};

export default function Page() {
  const [articles, setArticles] = useState<Article[]>([]);


  useEffect(() => {
    async function fetchData() {
      const data = await getArticles();
      if (data) {
        setArticles(data);
      }
      // alert(data)
    }

    fetchData();
  }, []);

  return (
    <div className=" mx-auto max-w-6xl py-8">
      <h1 className="text-xl font-bold ">Articles</h1>

      <ul className="mt-10 grid md:grid-cols-3 md:gap-6">
        {articles.map((article) => (
          // when clicked... go to articles/[id] // send the article id
          
          <li
            key={article.id}
            className="bg-gray-50 mt-3 border-1 border-gray-100"
          >
            <Link href={`/articles/${article.id}`}>
              {article.image && (
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/storage/${article.image}`}
                  alt={article.image_name || "Article Image"}
                  className="w-full h-48 object-cover"
                />
              )}
              <h2 className="text-base font-semibold px-4 mt-3">
                {" "}
                {truncateText(article.title, 100)}
              </h2>
              <p className="text-xs px-4  font-semibold">{article.school}</p>
              <p className="text-xs font-bold text-gray-600 px-4 my-3">
                {article.created_at
                  ? format(new Date(article.created_at), "MMMM dd, yyyy")
                  : "Unknown date"}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
