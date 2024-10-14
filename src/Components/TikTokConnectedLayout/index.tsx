'use client'

import ShopLayout1 from '@/Components/ShopLayout1/page';
import React from 'react';

interface Props {
    childrenCompnent?: React.ReactNode
}

export default function TikTokConnectedLayout(
    { childrenCompnent }: Props
) {
    const renderChildren = React.useMemo(() => {
        return (
            <div>
                <div className='my-5 text-[16px] leading-[24px] tb:mt-0 tb:mb-9 tb:text-[32px] tb:leading-[42px] text-[#16213E]'>
                    A quick guide for setup TikTok Shop
                </div>
                {childrenCompnent}
            </div>
        )
    }, [childrenCompnent]);

    return (
        <ShopLayout1 childrenCompnent={renderChildren} />
    );
}
