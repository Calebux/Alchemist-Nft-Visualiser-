import CreatorStat from "./CreatorStat";
import avatar from "../assets/covalentAvatar.png";

function CreatorStats() {
  return (
    <div className="flex flex-col justify-between gap-y-4 lg:flex-row lg:items-center lg:justify-start lg:gap-x-[47px]">
      <CreatorStat statName={"First minter"}>
        <img src={avatar} className="h-3 w-3" alt="" />
        Covalent
      </CreatorStat>
      <CreatorStat statName={"Top minter"}>
        <img src={avatar} className="h-[10px] w-[10px] sm:h-3 sm:w-3" alt="" />
        Covalent x16
      </CreatorStat>
      <CreatorStat statName={"Creator earnings"}>0.005328 ETH</CreatorStat>
      <CreatorStat statName={"Unique minters"}>16</CreatorStat>
      <CreatorStat statName={"Network"}>Zora-mainnet</CreatorStat>
    </div>
  );
}

export default CreatorStats;
