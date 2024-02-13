'use client'

import React, { useContext, useEffect } from 'react';
import Header from './_components/Header';
import SideNav from './_components/SideNav';
import { useUser } from '@clerk/nextjs';
import GlobalApi from '../_utils/GlobalApi';
import { UserMemberContext } from '../_context/UserMemberContext';

const Layout = ({ children }) => {
    const { user } = useUser();
    const { isMember, setIsMember } = useContext(UserMemberContext);

    useEffect(() => {
        if (user) {
            chcekUserMembership();
        }
    }, [user]);

    const chcekUserMembership = async () => {
        try {
            const res = await GlobalApi.checkForMemberShip(user.primaryEmailAddress.emailAddress);
            if (res?.memberships?.length > 0) {
                setIsMember(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className='sm:w-64 sm:block hidden fixed'>
                <SideNav />
            </div>
            <div className='sm:ml-64'>
                <Header />
                {children}
            </div>
        </div>
    );
}

export default Layout;
