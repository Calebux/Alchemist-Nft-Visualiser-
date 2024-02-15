/* eslint-disable react/prop-types */

function CreatorStat({ statName, children }) {
  return (
    <div className="flex flex-row justify-between gap-x-1 lg:flex-col lg:gap-y-2 ">
      <h4 className="text-sm text-[#3a3a3a] dark:text-white lg:text-base">
        {statName}
      </h4>
      <div className="flex items-center gap-x-[2px] text-[14px] text-black dark:text-white lg:gap-x-[5px]">
        {children}
      </div>
    </div>
  );
}

export default CreatorStat;
