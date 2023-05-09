import React from "react";

const BeAchamp = (props: any) => {
  return (
    <div className="bg-gray-800 absolute w-[346px] h-[267px] left-[1142px] top-[219px] rounded-2xl ">
      <div className="text-2xl font-bold mb-4 text-white w-[292px] h-[64px] left-[1166px] top-[242px] ml-[15px] mt-[15px]">
        {props.title}
      </div>
      <div className="text-gray-500">
        <hr className="border-gray-500" />
      </div>
      <div className="flex ">
        <div>
          <div>
            <div className="inline-flex items-center px-2 py-1 bg-gray mb-3 text-white mt-2 mr-2">
              <span className="inline-flex items-center px-2 py-1 bg-gray mb-3 text-white mt-2">
                <span className="text-sm text-gray-400 mr-2">Reward</span>
                <span className="ml-2">
                  <button className="inline-flex items-center justify-center bg-yellow-600 rounded-lg w-20 h-8 text-yellow-400 font-bold">
                    <p className="text-sm">{props.val} USDC</p>
                  </button>
                </span>
              </span>
            </div>
          </div>
          <div className="inline-flex">
            <span className="m-3 bg-gray mb-4 text-white mr-2">
              <p className="text-sm text-gray-400 mr-2 ml-[4px]">Tags</p>
            </span>
            {props.tags?.map((tag: any) => (
              <span key={tag}>
                <button className="bg-gray-600 text-m m-1 p-1 mb-3 text-white h-8 w-30">
                  <p>{tag}</p>
                </button>
              </span>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default BeAchamp;
