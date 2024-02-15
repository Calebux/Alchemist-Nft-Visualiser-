/* eslint-disable react/prop-types */

function CreatorStat({ statName, children }) {
  return (
    <div className="flex flex-col gap-y-2 ">
      <h4 className="text-[10px] text-[#3a3a3a] dark:text-white sm:text-sm">
        {statName}
      </h4>
      <div className="flex items-center gap-x-[5px] text-[10px] text-black dark:text-white">
        {children}
      </div>
    </div>
  );
}

export default CreatorStat;
