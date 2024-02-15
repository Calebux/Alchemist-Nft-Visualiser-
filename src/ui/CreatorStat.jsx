/* eslint-disable react/prop-types */

function CreatorStat({ statName, children }) {
  return (
    <div className="flex flex-col gap-x-1 lg:gap-y-2 ">
      <h4 className="text-[9px] text-[#3a3a3a] dark:text-white lg:text-sm">
        {statName}
      </h4>
      <div className="flex items-center gap-x-[2px] lg:gap-x-[5px] lg:text-[10px] text-[8px] text-black dark:text-white">
        {children}
      </div>
    </div>
  );
}

export default CreatorStat;
