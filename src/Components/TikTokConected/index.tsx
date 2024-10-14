import images from '@/app/assets'
import Image from 'next/image'
import React from 'react'

function TikTokConnected() {
    return (
        <div className='flex flex-col gap-4'>
            <div className='bg-[#FFFFFF] flex flex-row gap-8 rounded-[4px] px-1 py-6 items-center tb:rounded-[20px] tb:p-[24px]'>
                <Image alt='' src={images.checkIcon} className='hidden w-[52px] h-[52px] tb:block' />
                <div className='flex flex-col gap-[6px]'>
                    <div className='text-[20px] leading-[28px]'>TikTok Shop Account</div>
                    <div className='text-[#16213EB2]'>Connect to TikTok Shop to access all of your Store’s information.</div>
                </div>
                <div className='hidden tb:flex flex-1' />
                <Image alt='' src={images.arrowDown3} className='w-[24px] h-[24px]' />
            </div>
            <div className='bg-[#FFFFFF] flex flex-col gap-8 rounded-[4px] px-1 py-6 tb:rounded-[20px] tb:p-[24px]'>
                <div className='flex flex-row gap-8 items-center'>
                    <Image alt='' src={images.checkIcon} className='hidden w-[52px] h-[52px] tb:block' />
                    <div className='flex flex-col gap-[6px]'>
                        <div className='text-[20px] leading-[28px]'>Seller Information</div>
                        <div className='text-[#16213EB2]'>Get detail your information.</div>
                    </div>
                    <div className='hidden tb:flex flex-1' />
                    <Image alt='' src={images.arrowDown3} className='w-[24px] h-[24px] rotate-180' />
                </div>
                <div className='flex flex-row gap-3 items-center border-[1px] border-[#16213E1A] rounded-[16px] py-5 px-1 tb:px-5'>
                    <Image alt='' src={images.shopppingBag} className='hidden w-[52px] h-[52px] tb:block' />
                    <div className='flex flex-col gap-[6px]'>
                        <div>openapi uk 208</div>
                        <div className='text-[#16213EB2]'>Shop Code: GBLC6LWL24</div>
                    </div>
                </div>
            </div>
            <div className='bg-[#FFFFFF] flex flex-row gap-8 rounded-[4px] px-1 py-6 items-center tb:rounded-[20px] tb:p-[24px]'>
                <div className='hidden bg-[#16213E0D] h-[52px] w-[52px] rounded-full tb:flex items-center justify-center'>
                    <Image alt='' src={images.boxAdd2} className='w-[24px] h-[24px] tb:block' />
                </div>
                <div className='flex flex-col gap-[6px]'>
                    <div className='text-[20px] leading-[28px]'>Synchronized Product from Shopify</div>
                    <div className='text-[#16213EB2]'>Get your product from shopify and place it in “import product”.</div>
                </div>
                <div className='flex flex-1' />
                <Image alt='' src={images.arrowRight} className='w-[24px] h-[24px]' />
            </div>
        </div>
    )
}

export default TikTokConnected