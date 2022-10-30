import Head from "next/head";

const posts = [
  { title: "Dog Training", excerpt: "Learn dog training" },
  { title: "Dog Training 2", excerpt: "Learn dog training 2" },
  { title: "Dog Training 3", excerpt: "Learn dog training 3" },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>The Blog</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-black">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <div>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8"></div>
        </div>
      </div>
    </div>
  );
}
