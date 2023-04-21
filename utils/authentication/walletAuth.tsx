import { useCallback, useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { supabase } from "@/utils/supabaseClient";

interface User {
  email: string;
}
declare global {
  interface Window {
    ethereum?: any;
  }
}
export const useWeb3Auth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userAddress, setUserAddress] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const checkAuthStatus = useCallback(async () => {
    setLoading(true);
    const provider = new Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const { data: user, error } = await supabase
      .from("users")
      .select("email")
      .eq("eth_address", address)
      .single();
    if (error) {
      console.log("Error fetching user:", error.message);
    } else if (user) {
      setIsAuthenticated(true);
      setUserAddress(address);
      setUserEmail(user.email);
    }
    setLoading(false);
  }, []);

  const authenticate = useCallback(async () => {
    try {
      setLoading(true);
      await window.ethereum.enable();
      const provider = new Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const { data: user, error } = await supabase
        .from("users")
        .select("email")
        .eq("eth_address", address)
        .single();
      if (error) {
        console.log("Error fetching user:", error.message);
      } else if (!user) {
        const email = window.prompt("Please enter your email address");
        if (!email) {
          throw new Error("Email address is required");
        }
        const { data: newUser, error: newUserError } = await supabase
          .from("users")
          .insert({ eth_address: address, email })
          .single();

        if (newUserError) {
          console.log("Error creating new user:", newUserError.message);
        } else {
          setIsAuthenticated(true);
          setUserAddress(address);
          setUserEmail(email);
        }
      } else {
        setIsAuthenticated(true);
        setUserAddress(address);
        setUserEmail(user.email);
      }
    } catch (error) {
      console.log("Error authenticating with Web3:");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", checkAuthStatus);
    }
    return () => {
      if (window.ethereum) {
        window.ethereum.off("accountsChanged", checkAuthStatus);
      }
    };
  }, [checkAuthStatus]);

  return { authenticate, isAuthenticated, loading, userAddress, userEmail };
};