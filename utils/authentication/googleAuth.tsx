import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../../pages/config/supabaseClient';
import * as React from 'react'
const clientID = "";

function GoogleSignInButton() {
  const router = useRouter()

  useEffect(() => {
    // Initialize the Google Sign-In API
    gapi.load('auth2', function () {
      gapi.auth2.init({
        client_id: clientID,
      })
    })
  }, [])

  async function handleSignIn() {
    try {
      // Authenticate with Supabase using the Google provider
      const { data , error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      })
    } catch (error) {
      console.error(error)
    }
  }

  async function handleSignOut() {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error(error)
      } else {
        router.push('/signin') // Redirect the user to the sign-in page on successful sign-out
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <button onClick={handleSignIn}>Sign in with Google</button>
      <button onClick={handleSignOut}>Sign out</button>
    </>
  );
}

export default GoogleSignInButton;
