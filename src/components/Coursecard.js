"use client";
import React, { useState } from "react";
import c from "@/asset/c.jpg";
import Image from "next/image";
import saved from "@/asset/saved.png";
import notsaved from "@/asset/notsaved.png";
import Link from "next/link";

const CourseCard = ({ course }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveToggle = () => {
    setIsSaved(!isSaved);
  };

  const handlecourseinfo = () => {};
  return (
    <div className="bg-lime-50 shadow-md rounded-lg overflow-hidden min-w-[200px]">
      <Image src={c} alt="course.title" className=" w-full h-48 object-cover" />

      <div className="p-4 bg-emerald-200">
        <h3 className="text-lg font-bold mb-2">{course.title}</h3>
        <p className="mt-4 text-gray-500">{`Instructor: ${course.instructor}`}</p>
        <p className="mt-2 text-gray-900 font-bold">{`Price: $${course.price}`}</p>
        <div className="flex flex-row justify-between align-center ">
          <div>
            <button
              onClick={handlecourseinfo}
              className="mt-4 bg-emerald-700 text-white py-2 px-4 rounded-lg self-start"
            >
              <Link href={`/courses/${course.id}`}>
                Show Course
              </Link>
            </button>
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="align-center">
              <div onClick={handleSaveToggle} className="cursor-pointer">
                {isSaved ? (
                  <Image
                    src={saved} // URL of the saved icon image
                    alt="saved"
                    width={36} // Set width of the icon
                    height={36} // Set height of the icon
                  />
                ) : (
                  <Image
                    src={notsaved} // URL of the not-saved icon image
                    alt="not saved"
                    width={36} // Set width of the icon
                    height={36} // Set height of the icon
                  />
                )}
              </div>
            </div>
            <button className="mt-4 bg-red-700 text-white py-2 px-4 rounded-lg">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
