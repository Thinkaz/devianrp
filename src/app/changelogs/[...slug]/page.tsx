import { notFound } from "next/navigation";
import { allChangelogs } from "contentlayer/generated";
import { Metadata } from "next";

import { Mdx } from "@/components/mdx-components";

interface ChangelogProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: ChangelogProps["params"]) {
  const slug = params?.slug?.join("/");
  const changelog = allChangelogs.find((changelog) => changelog.slugAsParams === slug);

  if (!changelog) {
    null;
  }

  return changelog;
}

export async function generateMetadata({
  params,
}: ChangelogProps): Promise<Metadata> {
  const changelog = await getPostFromParams(params);

  if (!changelog) {
    return {};
  }

  return {
    title: changelog.title,
  };
}

export async function generateStaticParams(): Promise<ChangelogProps["params"][]> {
  return allChangelogs.map((changelog) => ({
    slug: changelog.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: ChangelogProps) {
  const changelog = await getPostFromParams(params);

  if (!changelog) {
    notFound();
  }

  const date = new Date(changelog.date);
  const formattedDate = date.toLocaleDateString("fr-FR");

  return (
    <div className="w-full flex justify-center">
      <article className="py-6 prose max-w-3xl prose-invert">
        <h1 className="mb-2">{changelog.title} du {formattedDate}</h1>
        <hr className="my-8" />
        <Mdx code={changelog.body.code} />
      </article>
    </div>
  );
}
