import CreatorStat from "./CreatorStat";
import avatar from "../assets/covalentAvatar.png";

function CreatorStats() {
  return (
    <div className="flex items-center justify-between lg:justify-start lg:gap-x-[47px]">
      <CreatorStat statName={"First minter"}>
        <img src={avatar} className="h-3 w-3" alt="" />
        Covalent
      </CreatorStat>
      <CreatorStat statName={"Top minter"}>
        <img src={avatar} className="h-3 w-3" alt="" />
        Covalent x16
      </CreatorStat>
      <CreatorStat statName={"Creator earnings"}>0.005328 ETH</CreatorStat>
      <CreatorStat statName={"Unique minters"}>16</CreatorStat>
    </div>
  );
}

export default CreatorStats;
