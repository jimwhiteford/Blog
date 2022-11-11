import React from "react";
import moment from "moment";
import Link from "next/link";
import { CalendarIcon } from "@heroicons/react/solid";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition duration-300 text-center mb-8 cursor-pointer hover:text-purple-700 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />
          <p className="inline align-middle text-gray-700 ml-2 text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="flexfont-sm text-gray-700">
          <CalendarIcon className="h-5 w-5 inline mr-2" />
          <span className="content-center">
            {moment(post.createdAt).format("DD MMM YYYY")}
          </span>
        </div>
      </div>
      <p className="text-center text-large text-gray-600 font-normal px-5 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-200 transform hover:-translate-y-1 inline-block bg-purple-700 text-lg font-medium rounded-full text-white px-8 py-2 cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
