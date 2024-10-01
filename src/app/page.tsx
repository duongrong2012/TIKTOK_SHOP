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
          <div className={styles.leftMenuHeader}>
            <Image alt='' src={images.Group19624} className='w-[119.85px] h-[40px]' />
            <Image alt='' src={images.arrowLeft} className='w-[24px] h-[24px]' />
          </div>
          <div className={styles.border}></div>
          <div className='flex flex-row gap-3 items-center'>
            <Image alt='' src={images.arrowleft2} className='w-[14px] h-[14px]' />
            <div className=''>Switch to ads account center</div>
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
                  <div className='xs:hidden'>{item.title}</div>
                </div>
                {item.hasDropDown && (
                  <Image alt='' src={images.arrowDown} className='w-[14px] h-[14px]' />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='px-[16px] py-[10px]'>Terms of Policy</div>
      </div>
      <div className={styles.secondCol}>
        <div className='w-[1176px] marg xs:bg-red-700'>aaaaaaaaaa</div>
      </div>
    </div>
  );
}
