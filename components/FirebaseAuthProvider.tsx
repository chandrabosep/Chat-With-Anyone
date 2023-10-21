'use client';

import {auth} from '@/firebase'
import {signInWithCustomToken} from 'firebase/auth'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Session } from 'next-auth';

async function syncFirebaseAuth(session: Session){
    if(session && session.firebaseToken){
        try{
            await signInWithCustomToken(auth,session.firebaseToken)
        } catch(e){
            console.log("Error signing in with custom token:",e)
        }
    } else{
        auth.signOut()
    }
}

function FirebaseAuthProvider({
    children,
}: {
    children: React.ReactNode;
}){ 
    const {data: session} = useSession()
    useEffect(() => {
        if (!session) return;

        syncFirebaseAuth(session)
    })
  return <> {children} </>
  
}
export default FirebaseAuthProvider