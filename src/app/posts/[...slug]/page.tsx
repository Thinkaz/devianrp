import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";

import { Mdx } from "@/components/mdx-components";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  const date = new Date(post.date);
  const formattedDate = date.toLocaleDateString("fr-FR");

  return (
    <div className="w-full flex justify-center">
      <article className="py-6 prose max-w-3xl prose-invert">
        <h1 className="mb-2">{post.title}</h1>
        {post.description && (
          <p className="text-xl mt-0 text-slate-200">
            {post.description}
          </p>
        )}
        <p>Par {post.author}, le {formattedDate}</p>
        <hr className="my-8" />
        <Mdx code={post.body.code} />
      </article>
    </div>
  );
}
