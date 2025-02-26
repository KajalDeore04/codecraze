"use client"
import { useUser } from '@clerk/nextjs';
import React from 'react';

const Page = () => {

    const {user} = useUser()
    return (
        <div>
            Hi {user?.fullName}
        </div>
    );
}

export default Page;
