'use client'
import { getSpecificArticle } from "@/app/api/article";
import { FC, useEffect, useState } from "react";
import Link from "next/link";


type Article = {
  title: string;
  school: string;
  created_at: string;
  image?: string;
  image_name?: string;
  content: string;
  facebook_link?: string;
}; 

type ArticlePageProps = {
  params: Promise<{id: string}>
};

export default function DynamicArticlePage( { params }: ArticlePageProps) {
  const [article, setArticle] = useState<any>(null); // or use a proper type if you have one

  // const article = await getSpecificArticle(params.id);

  useEffect(() => {
    async function fetchData() {
      const data = await getSpecificArticle((await params).id);
      if (data) {
        setArticle(data);
      }
    }

    fetchData();
  }, []);

  if (!article) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="mx-auto max-w-6xl py-16">
      <div className="max-w-3xl flex flex-col">
        <h1 className="text-2xl font-extrabold">{article.title}</h1>

        <p className="text-sm font-medium text-gray-500">
          <span>{article.school} - </span>
          <span> {article.created_at
            ? new Date(article.created_at).toLocaleDateString()
            : "Unknown"}</span>
        </p>
          {article.image && (
            <img
              src={`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/storage/${article.image}`}
              alt={article.image_name || "Article image"}
              className="mt-6 w-full max-h-[45vh] object-cover border border-gray-200"
            />
          )}
        

        {article.content.split('\n').map((line: string, i: number) => (
            <p key={i} className="text-gray-700 mt-2 break-words">
              {line}
            </p>
          ))}

        <div className="my-10">

          {article.facebook_link && (
            <Link
              href={article.facebook_link}
               target="_blank"
              rel="noopener noreferrer"
              // open new tab and go there
              className="bg-blue-700 rounded py-2 px-4 text-white/90"
            >
              See Facebook
            </Link>
          )}

        </div>
      </div>
    </div>
  );
}
