import React from "react";
import { CalendarIcon } from "@heroicons/react/solid";
import moment from "moment";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj.href) {
      return (
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={obj.href}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      );
    }

    if (obj) {
      if (obj.bold) {
        modifiedText = (
          <b className="text-2xl" key={index}>
            {text}
          </b>
        );
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8 text-lg">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );

      default:
        return modifiedText;
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
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
        <h1 className="mb-8 text-4xl font-semibold text-black">{post.title}</h1>
        <div className="text-black">
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) =>
              getContentFragment(itemIndex, item.text, item)
            );
            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
