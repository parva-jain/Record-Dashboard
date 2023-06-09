import React from "react";
import Navbar from "../components/navbar";
import Chart from "../components/Chart";
import { genderDataCalculator, natDataCalculator } from "../utils/dataCal.js";

const dashboard = () => {
  const genderData = genderDataCalculator();
  const genderColors = ["#0088FE", "#00C49F"];

  const natData = natDataCalculator();
  const natColors = ["#138185", "#26a0a7", "#ec983d", "#cbe989"];

  return (
    <div className="w-full h-full overflow-x-hidden  ">
      <Navbar></Navbar>
      <div className="flex w-full h-full ">
        <div className=" bg-richblack-800 h-full">
          <div className="bg-yellow-200 text-[1.5rem] text-center px-12 py-2 border border-black">
            DASHBOARD
          </div>
        </div>
        <div className="bg-richblack-100  w-[100%] h-[100%] p-10">
          <div className="w-full h-full bg-richblack-400 mb-10 border border-black rounded-3xl ">
            <h2 className="text-[2rem] font-semibold leading-[2rem] text-richblack-5 mt-6 ml-6 font-edu-sa">
              Key Perfromance Indicator
            </h2>
            <div className="flex w-full h-[45%] mt">
              <div className="text-[1.5rem] font-semibold leading-[1.5rem] text-richblack-5 mt-20 ml-12 w-[10%] font-edu-sa italic">
                Gender
              </div>
              <Chart
                data={genderData}
                color={genderColors}
                reverse={false}
              ></Chart>
            </div>

            <hr class="h-px mx-8 bg-gray-200 border-0 dark:bg-richblack-800 mb-4"></hr>

            <div className="flex w-full h-[45%]">
              <div className="text-[1.5rem] font-semibold leading-[1.5rem] text-richblack-5 mt-20 ml-12 w-[10%] font-edu-sa italic">
                Nationality
              </div>
              <Chart data={natData} color={natColors} reverse={true}></Chart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
