import WalletAuth from "@/utils/authentication/walletAuth";
import GoogleSignInButton from "@/utils/authentication/googleAuth";
import { useRouter } from "next/router";
// import SignInButton from "@/utils/authentication/magicLink";

const LoginCard = () => {
  const onConnect = WalletAuth();
  const onSign = GoogleSignInButton();
  const router = useRouter();
  return (
    
    <div className="card w-[420px] relative left-[540px] top-[280px] bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Login Here!</h2>
        <div className="card-actions flex justify-centre">
          <button className="btn btn-primary" onClick={onSign}>Google Login</button>
          <button className="btn btn-primary" onClick={()=>router.push('/MagicLinkPopup')}>Magic Link</button>
          <button className="btn btn-primary" onClick={onConnect}>Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
