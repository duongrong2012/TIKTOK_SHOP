import images from '@/app/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TikTokUnconected() {
    return (
        <div className='flex flex-col gap-4'>
            <div className='bg-[#FFFFFF] flex flex-col gap-8 rounded-[4px] px-1 py-6 tb:rounded-[20px] tb:p-[24px]'>
                <div className='flex flex-row items-center'>
                    <Image alt='' src={images.shopAdd} className='hidden w-[32px] h-[32px] tb:block tb:w-[52px] tb:h-[52px]' />
                    <div className='tb:ml-5 w-full flex flex-col gap-[6px]'>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='text-[16px] tb:text-[20px] tb:leading-[28px]'>TikTok Shop Account</div>
                            <Link href={""} className='text-[#E11C4E] text-[16px]'>Create New</Link>
                        </div>
                        <div className='text-[#16213EB2]'>Connect to TikTok Shop to access all of your Store’s information.</div>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-row items-center justify-between border-[1px] border-[#16213E1A] rounded-[16px] py-5 px-1 tb:px-5'>
                        <div className='text-[#16213EB2]'>Connect TikTok Shop</div>
                        <Link href={'/connecttiktok/connected'} className='bg-[#E11C4E] text-[#FFFFFF] px-4 py-3 text-[16px] rounded-[100px]'>Connect</Link>
                    </div>
                    <div>
                        By connecting your account, you agree to our&nbsp;
                        <Link href={""}>
                            <span className="text-[#6E44FF]">TikTok Shop Terms</span>
                            <Image alt='' src={images.exportIcon} className='w-[14px] h-[14px] ml-1 inline' />
                        </Link>
                    </div>

                </div>
            </div>
            <div className='bg-[#FFFFFF] flex flex-row gap-8 rounded-[4px] px-1 py-6 items-center tb:rounded-[20px] tb:p-[24px]'>
                <div className='hidden bg-[#16213E0D] h-[52px] w-[52px] rounded-full items-center justify-center tb:flex'>
                    <Image alt='' src={images.profileCircle} className='w-[24px] h-[24px] opacity-30 tb:block' />
                </div>
                <div className='flex flex-col gap-[6px] opacity-30'>
                    <div className='text-[20px] leading-[28px]'>Seller Information</div>
                    <div className=''>Get detail your store information.</div>
                </div>
                <div className='hidden tb:flex flex-1' />
                <Image alt='' src={images.arrowDown3} className='w-[24px] h-[24px] opacity-30' />
            </div>
            <div className='bg-[#FFFFFF] flex flex-row gap-8 rounded-[4px] px-1 py-6 items-center tb:rounded-[20px] tb:p-[24px]'>
                <div className='hidden bg-[#16213E0D] h-[52px] w-[52px] rounded-full tb:flex items-center justify-center'>
                    <Image alt='' src={images.boxAdd2} className='w-[24px] h-[24px] opacity-30 tb:block' />
                </div>
                <div className='flex flex-col gap-[6px] opacity-30'>
                    <div className='text-[20px] leading-[28px]'>Synchronized Product from Shopify</div>
                    <div className=''>Get your product from shopify and place it in “import product”.</div>
                </div>
                <div className='hidden tb:flex flex-1' />
                <Image alt='' src={images.arrowRight} className='w-[24px] h-[24px] opacity-30' />
            </div>
        </div>
    )
}

export default TikTokUnconected