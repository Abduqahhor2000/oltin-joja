import React, { useState } from "react";

function CustomersReview() {
  const [comments, setComments] = useState([
    {
      id: 0,
      image: null,
      fullName: "Aminjon Usmonov",
      foodName: "Big Burgers",
      date: "June 28, 2019",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.",
      ball: 8,
    },
  ]);
  return (
    <div>
      <div className="py-5 px-10">
        <div className="bg-white rounded-[10px] text-lg leading-6 pl-7 py-2 text-Neutral/04 mb-5">
          Customer detail
        </div>
        <div className="bg-white rounded-[10px] overflow-hidden">
          <div className="max-h-[calc(100vh-180px)] overflow-y-auto py-5 px-7">
            {comments.map((comment) => {
              return (
                <div className="flex">
                  <div className="w-20 flex-none flex justify-center">
                    {comment.image ? (
                      <img
                        className="w-14 h-14 rounded-full object-cover"
                        src={comment.image}
                        alt=""
                      />
                    ) : (
                      <>
                        <span className="w-14 h-14 rounded-full bg-default-img text-xl leading-6 font-semibold text-white flex justify-center items-center">
                          {comment?.fullName.substring(0, 1)}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="grow bg-gray-200">
                    <div className="flex justify-between">
                      <span className="font-medium">
                        <span className="mr-12 text-lg text-black">{comment.fullName}</span>
                        <span className="text-base text-Primary/03">{comment.foodName}</span>
                      </span>
                      <span className="text-black/40 text-base">{comment.date}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomersReview;
