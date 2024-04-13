'use client'
import Router from 'next/navigation'
import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import { useAuthContext } from '@/context/AuthContext';

export default function Home(props) {
  
  const { user } = useAuthContext()
   
    return (<main>
      helo
    </main>);
}
