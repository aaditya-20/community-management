import React, { useState } from "react";
import { signInWithEmail} from '../utils/authentication/passwordLessAuth'
// const[email,setEmail]= useState('')




export default function MagicLinkPopup() {
  const [email, setEmail] = useState("");
  const [signInStatus, setSignInStatus] = useState('');

  async function handleSignIn() {
    const redirectTo = 'http://localhost:3000//WelcomeScreen1'; 
    const status = await signInWithEmail(email, redirectTo);
    setSignInStatus(status);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center">
          Sign in with your email address
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <input
          className="px-4 py-2 border border-gray-400 rounded-md mb-4 w-full max-w-xs"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
        />
        <button
          className="px-4 py-2 text-gray-800 bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          onClick={handleSignIn}
        >
          Sign in
        </button>
      </div>
      <p>{signInStatus}</p>
    </div>
  );
}
