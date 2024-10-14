'use client'

import TikTokConnectedLayout from '@/Components/TikTokConnectedLayout';
import TikTokUnconected from '@/Components/TikTokUnconnected';
import React from 'react';

export default function Connecttiktok() {

    const renderChildren = React.useMemo(() => {
        return (
            <TikTokUnconected />
        )
    }, []);

    return (
        <TikTokConnectedLayout childrenCompnent={renderChildren} />
    );
}
