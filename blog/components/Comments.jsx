import React, { useState, useEffect, useRef } from "react";
import { submitComment } from "../services";

const Comments = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentElement = useRef();
  const nameElement = useRef();
  const emailElement = useRef();
  const storeDataElement = useRef();

  useEffect(() => {
    nameElement.current.value = window.localStorage.getItem("name");
    emailElement.current.value = window.localStorage.getItem("email");
  }, []);

  const handleCommentSubmission = () => {
    setError(false);
    const { value: comment } = commentElement.current;
    const { value: name } = nameElement.current;
    const { value: email } = emailElement.current;
    const { checked: storeData } = storeDataElement.current;
    if (!comment || !name || !email) {
      setError(true);
      return;
    }
    const commentObject = { comment, name, email, slug };
    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }
    submitComment(commentObject).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-black text-xl mb-8 font-semibold border-b pb-4">
        Leave a Comment
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentElement}
          className="text-gray-800 p-4 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
          placeholder="Comment"
          name="comment"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          ref={nameElement}
          className="text-gray-800 px-4 p-2 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
          placeholder="Name"
          name="name"
        ></input>
        <input
          ref={emailElement}
          className="text-gray-800 px-4 p-2 outline-none w-full rounded-lg focus:ring-1 focus: ring-gray-200 bg-gray-100"
          placeholder="Email"
          name="email"
        ></input>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            className="text-white"
            ref={storeDataElement}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            className="text-gray-600 cursor-pointer ml-2 hover:text-purple-700"
            htmlFor="storeData"
          >
            Save my e-mail and name for the next time I comment.
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-600">All fields are required.</p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="transition duration-200 transform hover:-translate-y-1 hover:bg-purple-500 inline-block bg-purple-700 text-lg font-medium rounded-full text-white px-8 py-2 cursor-pointer"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-green-600">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default Comments;
