'use client'

import Image from 'next/image';
import styles from './styles.module.css';
import images from './assets';
import classNames from 'classnames';

const leftMenuList = [
  {
    icon: images.cloudConnection,
    title: "Connect TikTok Shop",
    hasDropDown: false,
  },
  {
    icon: images.shop,
    title: "Stores Management",
    hasDropDown: false,
  },
  {
    icon: images.boxAdd,
    title: "Import Products to shop",
    hasDropDown: false,
  },
  {
    icon: images.box,
    title: "Products Management",
    hasDropDown: true,
  },
  {
    icon: images.bag2,
    title: "Orders Management",
    hasDropDown: true,
  },
  {
    icon: images.setting3,
    title: "Sync Setting",
    hasDropDown: false,
  },
]

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.leftMenu}>
        <div className={styles.groupTop}>
          <div className={`${styles.leftMenuHeader} justify-center dt:justify-between`}>
            <Image alt='' src={images.miniLogo} className='w-[24px] h-[24px] dt:hidden' />
            <Image alt='' src={images.Group19624} className='hidden w-[119.85px] h-[40px] dt:block' />
            <Image alt='' src={images.arrowLeft} className='hidden w-[24px] h-[24px] dt:block' />
          </div>
          <div className={styles.border}></div>
          <div className='flex flex-row gap-3 items-center'>
            <Image alt='' src={images.arrowleft2} className='hidden w-[14px] h-[14px]' />
            <div className='hidden'>Switch to ads account center</div>
          </div>
          <div className={'flex flex-col gap-3'}>
            {leftMenuList.map((item) => (
              <div className={classNames({
                [styles.leftMenuItem]: true,
                [styles.isSelected]: item.title === "Connect TikTok Shop"
              })}
                key={item.title}
              >
                <div className='flex flex-row gap-[10px]'>
                  <Image alt='' src={item.icon} className='w-[20px] h-[20px]' />
                  <div className={`hidden dt:block`}>{item.title}</div>
                </div>
                {item.hasDropDown && (
                  <Image alt='' src={images.arrowDown} className='hidden w-[14px] h-[14px]' />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='hidden flex-1 dt:flex'></div>
        <div className='hidden px-[16px] py-[10px] dt:block'>Terms of Policy</div>
      </div>
      <div className={`ml-[92px] flex flex-1 flex-col dt:ml-[250px]`}>
        <div className='marg flex flex-row mt-8 items-center tb:px-5 dt:px-11'>
          <div className='hidden tb:block'>Connect TikTok Shop</div>
          <div className='flex flex-1' />
          <div className='flex flex-row items-center'>
            <Image alt='' src={images.notificationBell} className='w-[40px] h-[40px] mr-5' />
            <Image alt='' src={images.avatarRound} className='w-[40px] h-[40px] mr-1' />
            <div>David</div>
            <Image alt='' src={images.arrowDown2} className='w-[24px] h-[24px]' />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
