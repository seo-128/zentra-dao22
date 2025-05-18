import { useState } from 'react';
import { ethers } from 'ethers';

export default function ZentraDashboard() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
      } catch (err) {
        console.error('Wallet connection failed:', err);
      }
    } else {
      alert('MetaMask 설치해주세요');
    }
  };

  return (
    <div style={{ padding: "2rem", color: "white", backgroundColor: "black", minHeight: "100vh" }}>
      <h1>ZentraDAO Dashboard</h1>
      {account ? (
        <p>지갑 주소: {account}</p>
      ) : (
        <button onClick={connectWallet}>지갑 연결</button>
      )}
    </div>
  );
}
