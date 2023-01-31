import React from "react";
import TeacherCard from "../components/TeacherCard";
import gautam from "../../public/gautam.png";
import ashfaq from "../../public/ashfaq.png";

function TopTeacher() {
   return (
      <section className="w-full flex flex-col items-center">
         <h1 className="font-inter font-bold text-[40px] text-center mt-14">
            TOP REACTING TEACHER
         </h1>
         <div className="flex flex-row gap-20 mt-14">
            <TeacherCard
               name="Gautam Gondaliya"
               branch="Electronics And Communications"
               stars={4}
               imageSrc={gautam}
               colour=""
            />
            <TeacherCard
               name="Manihar Ashfaq"
               branch="Electronics And Communications"
               stars={5}
               imageSrc={ashfaq}
            />
         </div>
      </section>
   );
}

export default TopTeacher;
