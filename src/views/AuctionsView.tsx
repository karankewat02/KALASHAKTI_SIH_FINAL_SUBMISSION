import { Auctions } from "@liqnft/candy-shop";
import{CreateAuction}from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";

const AuctionsView: React.FC = () => {
  const wallet = useAnchorWallet();

  return (
    <DesContainer>
      {/* <CreateAuction
        candyShop={candyShop}
        wallet={wallet}
        walletConnectComponent={<WalletMultiButton />}
        cacheUserNFT={true}
      /> */}
      <Auctions candyShop={candyShop} wallet={wallet} walletConnectComponent={<WalletMultiButton />} />
    </DesContainer>
  );
};

export default AuctionsView;
const DesContainer = styled.div`
  width: 100%;

  p > a {
    color: #fff;
    text-decoration: underline;
  }
`;
