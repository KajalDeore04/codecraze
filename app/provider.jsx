"use client"
import { useUser } from '@clerk/nextjs';
import React from 'react';

const Provider = ({children}) => {

    const {user} = useUser();

    

    return (
        <div>
           {children} 
        </div>
    );
}

export default Provider;
