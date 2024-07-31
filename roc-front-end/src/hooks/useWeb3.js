import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers5/react";

const useWeb3 = () => {
  const { open } = useWeb3Modal();
  const { isConnected, address, chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return {
    open,
    isConnected,
    address,
    chainId,
    walletProvider,
    isSepolia: chainId === 11155111,
  };
};

export { useWeb3 };
