import React, { useState } from "react";
import {half_star_svg, full_star_svg, empty_star_svg} from "../../../svg/customer"
import customer_img from "../../../images/customer.png";
import customer1_img from "../../../images/customer1.png";
import customer2_img from "../../../images/customer2.png";
import customer3_img from "../../../images/customer3.png";
import customer5_img from "../../../images/customer5.png";
import customer8_img from "../../../images/customer8.png";

function CustomersReview() {
  const [comments, setComments] = useState([
    {
      id: 0,
      image: customer_img,
      fullName: "Aminjon Usmonov",
      foodName: "Big Burgers",
      date: "June 28, 2019",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.",
      ball: 9,
    },
    {
      id: 1,
      image: customer1_img,
      fullName: "Hakim Bakirov",
      foodName: "Clab-Sandviches",
      date: "June 28, 2019",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.",
      ball: 9,
    },
    {
      id: 2,
      image: null,
      fullName: "Karimjon Usmonov",
      foodName: "Big Burgers",
      date: "June 28, 2019",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.",
      ball: 6,
    },
    {
      id: 3,
      image: customer3_img,
      fullName: "Elyor Olimov",
      foodName: "Choykhona Osh",
      date: "June 28, 2019",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.",
      ball: 9,
    },
    {
      id: 4,
      image: customer8_img,
      fullName: "Mahliyo Ilhamova",
      foodName: "Fries",
      date: "June 28, 2019",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.",
      ball: 7,
    },
    {
      id: 5,
      image: customer2_img,
      fullName: "Guli Yoldasheva",
      foodName: "Big Burgers",
      date: "June 28, 2019",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.",
      ball: 9,
    },
    {
      id: 6,
      image: customer5_img,
      fullName: "Aminjon Usmonov",
      foodName: "Big Burgers",
      date: "June 28, 2019",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.",
      ball: 8,
    }
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
                <div key={comment.id} className="flex mb-7">
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
                  <div className="grow">
                    <div className="flex justify-between">
                      <span className="font-medium">
                        <span className="mr-12 text-lg text-black">{comment.fullName}</span>
                        <span className="text-base text-Primary/03">{comment.foodName}</span>
                      </span>
                      <span className="text-black/40 text-base">{comment.date}</span>
                    </div>
                    <div className="flex">
                      {
                        [1, 3, 5, 7, 9].map((number)=> {
                          return <span key={number} className="mx-1 mt-2.5 mb-3">{comment.ball > number ? full_star_svg : comment.ball === number ? half_star_svg : empty_star_svg}</span>
                        })
                      }
                    </div>
                    <div className="text-[15px] text-[#6F767E] pr-36">
                      {comment.text}
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
