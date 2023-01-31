import React from "react";
import ReactStars from "react-rating-stars-component";

function TeacherCard({ imageSrc, name, branch, stars, color }) {
   return (
      <>
         <div>
            <div className="bg-blue-200 w-[500px] h-[760px] rounded-3xl flex items-center flex-col">
               <div className="border-8 h-[238px] w-[238px] border-black flex justify-center items-center rounded-full mt-20">
                  <img
                     className="h-[160px] w-[160px]"
                     src={imageSrc}
                     alt={name}
                  />
               </div>
               <h2 className="text-3xl font-inter font-bold mt-10">{name}</h2>
               <h4 className="text-3xl font-inter font-bold mt-10">{branch}</h4>
               <div className="mt-10">
                  <ReactStars
                     count={5}
                     value={stars}
                     size={50}
                     edit={false}
                     activeColor="#ffd700"
                  />
               </div>
               <div className="w-11/12 mt-20">
                  <button className="border-2 border-black rounded-2xl w-full bg-white py-5 text-3xl font-inter font-bold">
                     View Message
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}

export default TeacherCard;
