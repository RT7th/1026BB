"use client";

import {
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
  useConnect,
  useAccount,
  useSwitchChain,
} from "wagmi";

import { baseSepolia } from "wagmi/chains";
import { contractAddress, contractABI } from "./contract";
import { useState, useEffect } from "react";

export default function Home() {
  const { connect, connectors } = useConnect();
  const { address, isConnected, chain } = useAccount();
  const { switchChain } = useSwitchChain();

  const [txHash, setTxHash] = useState<`0x${string}` | undefined>();

  const { data, refetch } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "counter",
    chainId: baseSepolia.id, // ✅ FORCE CHAIN
  });

  const { writeContractAsync } = useWriteContract();

  const { isSuccess } = useWaitForTransactionReceipt({
    hash: txHash,
  });

  useEffect(() => {
    if (isSuccess) {
      refetch();
      setTxHash(undefined);
    }
  }, [isSuccess, refetch]);

  const ensureCorrectNetwork = async () => {
    if (chain?.id !== baseSepolia.id) {
      await switchChain({ chainId: baseSepolia.id });
    }
  };

  const increment = async () => {
    if (!isConnected) return alert("Connect wallet first");

    await ensureCorrectNetwork();

    const hash = await writeContractAsync({
      chainId: baseSepolia.id, // ✅ FORCE CHAIN
      address: contractAddress,
      abi: contractABI,
      functionName: "increment",
    });

    setTxHash(hash);
  };

  const decrement = async () => {
    if (!isConnected) return alert("Connect wallet first");

    await ensureCorrectNetwork();

    const hash = await writeContractAsync({
      chainId: baseSepolia.id,
      address: contractAddress,
      abi: contractABI,
      functionName: "decrement",
    });

    setTxHash(hash);
  };

  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>Counter DApp (Base Sepolia)</h1>

      {!isConnected ? (
        <button onClick={() => connect({ connector: connectors[0] })}>
          Connect Wallet
        </button>
      ) : (
        <>
          <p>Connected: {address}</p>
          <p>
            Network:{" "}
            {chain?.id === baseSepolia.id
              ? "Base Sepolia ✅"
              : "Wrong Network ❌"}
          </p>
        </>
      )}

      <h2>Value: {data?.toString() ?? "0"}</h2>

      <button onClick={increment} style={{ marginRight: "10px" }}>
        Increment
      </button>

      <button onClick={decrement}>Decrement</button>
    </main>
  );
}