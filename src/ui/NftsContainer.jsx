import { FaAngleDown } from "react-icons/fa";
import "@calebux/goldrush-kit/styles.css";
import {
  GoldRushProvider,
  NFTWalletTokenListView,
} from "@calebux/goldrush-kit";
import { useNavigate } from "react-router-dom";
import { useNft } from "../context/NftContext";

function NftsContainer() {
  const navigate = useNavigate();
  const { dispatch } = useNft();
  return (
    <div className="w-full overflow-x-hidden py-[21px]">
      <button className="flex items-center gap-x-2 text-base font-medium leading-6 text-[#3a3a3a] dark:text-white">
        Latest <FaAngleDown />
      </button>
      <div className="mt-6 flex flex-wrap justify-around gap-x-5 gap-y-6">
        <GoldRushProvider
          apikey={import.meta.env.VITE_COVALENT_API_KEY}
          mode="light"
          theme="classic"
        >
          <NFTWalletTokenListView
            address="0xadfb97961950b5894438c1c2f461695c023e2e14"
            chain_names={["zora-mainnet"]}
            onMint={(nft) => {
              console.log(nft);
              dispatch({ type: "new-nft", payload: nft });
              navigate(`/nft/${nft.token_id.toString().slice(0, 2)}`);
            }}
          />
        </GoldRushProvider>
      </div>
    </div>
  );
}

export default NftsContainer;
