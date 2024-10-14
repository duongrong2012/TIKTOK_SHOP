'use client'

import TikTokConnected from '@/Components/TikTokConected';
import TikTokConnectedLayout from '@/Components/TikTokConnectedLayout';

import React from 'react';

export default function Connecttiktok() {

    const renderChildren = React.useMemo(() => {
        return (
            <TikTokConnected />
        )
    }, []);

    return (
        <TikTokConnectedLayout childrenCompnent={renderChildren} />
    );
}
