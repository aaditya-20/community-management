import { useEffect, useState, useRef } from "react";
import { ChartDataset } from "chart.js";
import { Chart } from "chart.js/auto";
import { registerables } from 'chart.js';
import { supabase } from "../../utils/supabaseClient";
import { fr } from "date-fns/locale";

Chart.register(...registerables);


function AnalyticsCardMainDashboard() {
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    console.log("hello");
    setOpen(!isOpen);
  };
  let k=0;
  async function chartData() {

    var canvas = document.getElementById("myChart") as HTMLCanvasElement;
    var ctx = canvas.getContext("2d")!;

    async function fetchdata() {
      const result = localStorage.getItem("data");
      const jsonData = JSON.parse(result ?? "{}");
      const email = jsonData.email;
      // Fetch data from discord Details
      const { data, error } = await supabase
        .from("discordDetails")
        .select("*")
        .eq("email", email);
      return data;
    }

    const DiscordArray: any[] = [];
    const monthNumber: any = await fetchdata();

    for (let i = 0; i < 12; i++) {
      if (monthNumber[0][i] == null) {
        DiscordArray.push(0);
      } else {
        DiscordArray.push(monthNumber[0][i]);
      }
    }

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#5DDCFE');
    gradient.addColorStop(1, '#00BFF3');



    let myChart: any = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [
          {
            data: DiscordArray,
            label: "Discord",
            borderSkipped: 'middle',
            barThickness: 25,
            backgroundColor: gradient,
            borderRadius: {
              topLeft: 10,
              topRight: 10,
              bottomLeft: 10,
              bottomRight: 10,
            },
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
            labels: {
              boxWidth: 13,
              useBorderRadius: true,
              borderRadius: 6,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#8C89B4",
              display: true,
            },
            grid: {
              color: "black",
              display: false,
            },
            stacked: true,
          },
          y: {
            display: false,
            grid: {},
            stacked: false,
          },
        },
      },
    });
  
    k++;
    // myChart.destroy();
    // if(myChart.current){
    //   myChart.current.destroy();
    // }
    return () => {
      myChart.destroy()
    }


  }
  useEffect(() => {
    chartData();
  }, []);

  // useEffect(() => {
  //  chartData();
  // }, []);
  // async function chartData(){
  //   var canvas = document.getElementById("myChart") as HTMLCanvasElement;
  //   var ctx = canvas.getContext("2d")!;
  //   async function fetchdata() {
  //     const result = localStorage.getItem("data");
  //     const jsonData = JSON.parse(result ?? "{}");
  //     const email = jsonData.email;
  //     //Fetch data from discord Details
  //     const { data, error } = await supabase
  //       .from("discordDetails")
  //       .select("*")
  //       .eq("email", email);
  //     return data;
  //   }
  //   const DiscordArray:any=[];
  //   const monthNumber:any=await fetchdata();
  //   //console.log(monthNumber[0],"=monthNumber")
  //   for(let i=0;i<12;i++){
  //     // DiscordArray.push(data[i].discordName);
  //     if(monthNumber[0][i]==null){
  //      DiscordArray.push(0);
  //     }
  //     else{
  //      DiscordArray.push(monthNumber[0][i]);
  //     }

  //    }
  //   console.log("Discord Array=",DiscordArray);



  //   const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  //   gradient.addColorStop(0, '#5DDCFE');
  //   gradient.addColorStop(1, '#00BFF3');
  //   console.log(DiscordArray.length);

  //   var myChart = new Chart(ctx, {
  //     type: "bar",
  //     data: {
  //       labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JULY","AUG", "SEP", "OCT", "NOV","DEC"],
  //       datasets: [
  //         {
  //           data: [20, 25, 15, 20, 30, 10, 20, 10, 20, 20, 10,10],
  //           label: "Discord",


  //           borderSkipped:'middle',
  //           barThickness: 25,
  //           backgroundColor: gradient,

  //           borderRadius: {
  //               topLeft:10,
  //               topRight:10,
  //               bottomLeft:10,
  //               bottomRight:10,
  //           },
  //           // borderWidth: 2
  //         },
  //         // {
  //         //   data: [30, 40, 25, 30, 40, 30, 40, 25, 30, 35, 30,20],
  //         //   label: "Discord",
  //         //   // borderSkipped:false,
  //         //   borderRadius: {
  //         //       topLeft:10,
  //         //       topRight:10,
  //         //       bottomLeft:10,
  //         //       bottomRight:10,
  //         //   },
  //         //   barThickness: 25,
  //         //   backgroundColor: "#313031",


  //         // },
  //       ],
  //     },

  //     options: {
  //       responsive: true,
  //       maintainAspectRatio: false,
  //       plugins: {
  //         legend: {

  //           display: false,
  //           labels: {
  //             boxWidth:13,
  //             useBorderRadius:true,
  //             borderRadius:6,
  //           },
  //         },
  //       },
  //       scales: {
  //         x: {
  //           ticks: {
  //             //labels at x-axis are ticks
  //             color: "#8C89B4",
  //             display: true,
  //           },
  //           grid: {
  //             color: "black",
  //             display: false,
  //           },

  //           stacked: true,
  //         },
  //         y: {
  //           display: false,
  //           grid: {
  //             // borderColor:"black",
  //             // display:false,
  //           },
  //           stacked: false,
  //         },
  //       },
  //     },
  //   });

  //   return () => {
  //     console.log("hi aa raha")
  //     myChart.destroy();
  //   };

  // }
  return (
    <>

      <div className="relative border-[0px] border-[#1D1D1D] w-[400px] h-[399px] bg-[#1D1D1D] justify-center rounded-3xl">

        <span className="absolute text-[#FFFFFF] top-[5px] left-[24px] font-[General Sans] text-[24px]">
          Analytics
        </span>

        {/*for legend */}
        <div className="flex justify-center space-x-4 absolute h-[5px] left-[140px] top-[25px]">

          <label className="inline-flex items-center">
            <div className="h-[15px] w-[15px] rounded-full bg-[#5DDCFE]"></div>
            <span className="text-[#FFFFFF] opacity-[.4]  ml-2 font-['generalsans']  text-[15px]">
              Discord
            </span>
          </label>
          <label className="inline-flex items-center">
            <div className="h-[15px] w-[15px] rounded-full bg-[#b727dbf7]"></div>
            {<span className="text-[#FFFFFF] opacity-[.4]  ml-2 font-['generalsans']  text-[15px]">
              Twitch~Upcoming
            </span>}
          </label>
        </div>
        {/* legend over */}



        {/* <button className="absolute text-[#FFFFFF] top-[13px] rounded-[4px] w-[74px] h-[26px] left-[300px] font-[Public Sans] text-[12px] bg-[#393939]">
          full stats
        </button> */}
        <div className="relative overflow-scroll no-scrollbar w-[400px] h-[300px] top-[70px]">
          <div className="w-[660px] h-[250px]">
            <canvas
              id="myChart"
              width={400}
              height={300}
              className="absolute"
            ></canvas>
          </div>
        </div>




        {/*  */}
        <div id="" className="absolute  top-[325px] left-[25px] justify-center">
          {/* <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-[#FFFFFF]   font-[500] text-[16px] rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center h-[61px] w-[342px] bg-[#212021]"
            type="button"
            onClick={handleDropDown}
          > */}
          {/* Member growth{" "} */}
          {/* <svg
              className="absolute w-4 h-4 ml-2 left-[300px]"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button> */}
          {/* <!-- Dropdown menu --> */}
          <div
            id="dropdown"
            className={`z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${isOpen ? "block" : "hidden"}`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/*  */}

      </div>
    </>
  );
}

export default AnalyticsCardMainDashboard;
