import { Orders, Stat } from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";

const MarketplaceWithUrl: React.FC = () => {
  const wallet = useAnchorWallet();

  return (
    <DesContainer>
      <Stat
        candyShop={candyShop}
        title={"Marketplace"}
        description={
          "Buy an Sell NFT here"
        }
        style={{ paddingBottom: 50 }}
      />
      <Orders
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={<WalletMultiButton />}
        // redirect to single NFT order URL instead of using buy modal
        url={"/marketplace/:tokenMint"}
      />
    </DesContainer>
  );
};

export default MarketplaceWithUrl;

const DesContainer = styled.div`
  width: 100%;
`;
