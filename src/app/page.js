'use client'
import Router from 'next/navigation'
import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import { useAuthContext } from '@/context/AuthContext';
import { app } from '@/firebase/config';
export default function Home(props) {
  const db = app.firestore();
  const [user, loading, error] = useAuthState(app.auth());

    return (<main>
      helo
    </main>);
}
