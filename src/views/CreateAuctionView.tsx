import{CreateAuction}from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";
import { OrderDetail } from '@liqnft/candy-shop';


const CreateAuctionView: React.FC = () => {
  const wallet = useAnchorWallet();

  return (
    <DesContainer>
      <CreateAuction
        candyShop={candyShop}
        wallet={wallet}
        walletConnectComponent={<WalletMultiButton />}
        cacheUserNFT={true}
      />

    </DesContainer>
  );
};

export default CreateAuctionView;
const DesContainer = styled.div`
  width: 100%;

  p > a {
    color: #fff;
    text-decoration: underline;
  }
`;
