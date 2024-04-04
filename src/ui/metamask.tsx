'use client'

import React, { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected } from "./interact";

export function Metamask() {
    const [walletAddress, setWalletAddress] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        const initialize = async () => {
            try {
                const { address, status } = await getCurrentWalletConnected();
                setWalletAddress(address);
                setStatus(String(status)); // Convert status to string
                addWalletListener();
            } catch (error) {
                setStatus("🔴");
            }
        };

        initialize();

        return () => {
            // Clean up any event listeners or subscriptions here if necessary
        };
    }, []);


    const addWalletListener = () => {
        const ethereum = (window as any).ethereum;

        if (ethereum) {
            ethereum.on("accountsChanged", (accounts: string[]) => {
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                    setStatus("🟢");
                } else {
                    setWalletAddress("");
                    setStatus("");
                }
            });
        } else {
            setStatus("");
        }
    };


    const connectWalletPressed = async () => {
        try {
            const walletResponse = await connectWallet();
            setStatus(walletResponse.status);
            setWalletAddress(walletResponse.address);
        } catch (error) {
            setStatus("🔴");
        }
    };


    return (
        <>
            <button
                id="walletButton"
                onClick={connectWalletPressed}
                className="button-88"
            >
                {walletAddress.length > 0 ? (
                    walletAddress.substring(0, 6) + "..." + walletAddress.substring(38)
                ) : (
                    <span className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <svg className="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Connect Wallet
                    </span>
                )}

            </button>
            <p>{status}</p>

        </>
    );
}
