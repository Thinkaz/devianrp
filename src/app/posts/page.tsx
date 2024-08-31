"use client";

import { useState } from "react";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TtPosts() {
  const [search, setSearch] = useState("");
  const posts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const filteredPosts = posts.filter((post) => {
    const { date, title, author } = post;
    const searchQuery = search.toLowerCase();

    return (
      date.toLowerCase().includes(searchQuery) ||
      title.toLowerCase().includes(searchQuery) ||
      author.toLowerCase().includes(searchQuery)
    );
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col justify-center gap-0 pb-5">
        <h1 className="text-5xl font-bold tracking-wide font-space-grotesk">
          Nos posts
        </h1>
      </div>
      <div className="flex justify-center pt-3 pb-9 group">
        <span className="flex items-center pl-3 border-neutral-800 rounded-l-md bg-neutral-800 text-neutral-400">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input
          type="text"
          placeholder="Rechercher un post..."
          className="px-4 py-2 border border-neutral-800 bg-neutral-800 rounded-r-md w-4/5 focus:outline-none transition duration-200 placeholder-neutral-400 group"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      {filteredPosts.length === 0 ? (
        <div className="flex justify-center items-center h-20 flex-col">
          <p className="font-semibold">On a pas, dasole.</p>
          <p className="text-neutral-400 pt-1 text-sm">Essaye de chercher avec d'autres termes</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2 transition duration-200">
          {filteredPosts.map((post) => (
            <article
              key={post._id}
              className="bg-neutral-900 rounded-md group flex flex-row justify-between items-center border border-neutral-800 hover:bg-neutral-800 transition-all duration-200"
            >
              <Link href={post.slug}>
                <div className="p-8">
                  <p className="font-space-grotesk text-lg font-bold underline group-hover:text-pink-700 transition duration-200 ease-in-out pb-1">
                    {post.title}
                  </p>
                  {post.description && <p>{post.description}</p>}
                  <p className="text-left text-neutral-700 transition duration-200 ease-in-out italic text-sm pt-1">
                    {new Date(post.date).toLocaleDateString()} • {post.author}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export function LastPosts() {
  const posts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const lastPosts = posts.slice(posts.length - 4, posts.length);

  return (
    <div className="flex pb-12 z-10">
      <div className="grid grid-cols-2 max-w-4xl gap-12">
        {lastPosts.map((post) => (
          <article className="pb-5 max-w-sm" key={post._id}>
            <Link href={post.slug}>
              <h2 className="font-space-grotesk text-lg font-bold underline hover:text-pink-700 transition duration-150 ease-in-out">
                {post.title}
              </h2>
            </Link>
            {post.description && <p>{post.description}</p>}
            <Link href={post.slug}>
              <p className="text-left text-neutral-700 hover:text-pink-700 transition duration-150 ease-in-out italic text-sm">
                Lire la suite ➜
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
