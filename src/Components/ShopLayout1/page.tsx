'use client'

import Image from 'next/image';
import styles from './styles.module.css';

import classNames from 'classnames';
import images from '@/app/assets';
import React, { ReactNode } from 'react';
import { dtBreakpoint } from '@/Constant';

interface State {
  isOpenLeftBar: boolean
}

interface Props {
  childrenCompnent?: ReactNode
}

export default function ShopLayout1(
  { childrenCompnent }: Props
) {
  const [state, setState] = React.useState<State>({
    isOpenLeftBar: false
  })

  const onClickOpenLeftBar = React.useCallback(() => {
    setState((prevState) => ({ ...prevState, isOpenLeftBar: true }))
  }, []);

  const onClickCloseLeftBar = React.useCallback(() => {
    setState((prevState) => ({ ...prevState, isOpenLeftBar: false }))
  }, []);

  const leftMenuList = React.useMemo(() => {
    return [
      {
        id: "Connect TikTok Shop",
        icon: images.cloudConnection,
        title: "Connect TikTok Shop",
        hasDropDown: false,
      },
      {
        id: "Stores Managemen",
        icon: images.shop,
        title: "Stores Management",
        hasDropDown: false,
      },
      {
        id: "Import Products to shop",
        icon: images.boxAdd,
        title: "Import Products to shop",
        hasDropDown: false,
      },
      {
        id: "Products Management",
        icon: images.box,
        title: "Products Management",
        hasDropDown: true,
      },
      {
        id: "Orders Management",
        icon: images.bag2,
        title: "Orders Management",
        hasDropDown: true,
      },
      {
        id: "Sync Setting",
        icon: images.setting3,
        title: "Sync Setting",
        hasDropDown: false,
      },
      {
        id: "arrowRotate",
        icon: images.arrowLeft,
        title: "",
        hasDropDown: false,
        onClickItem: onClickOpenLeftBar
      },
    ]
  }, [onClickOpenLeftBar])

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${dtBreakpoint})`);

    if (mediaQuery.matches) {
      const handleMediaChange = () => {
        setState((prevState) => ({ ...prevState, isOpenLeftBar: true }));
      };

      mediaQuery.addEventListener('change', handleMediaChange);

      handleMediaChange();

      return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }

  }, [])

  return (
    <div className={styles.container}>
      <div className={`py-8 px-[5px] tb:px-5 ${styles.leftMenu}`}>
        <div className={styles.groupTop}>
          <div className={classNames({
            [styles.leftMenuHeader]: true,
            'justify-between': state.isOpenLeftBar,
            'justify-center': !state.isOpenLeftBar
          })}>
            <Image alt='' src={images.miniLogo} className={classNames({
              'w-[24px] h-[24px]': true,
              'hidden': state.isOpenLeftBar,
            })}
            />
            <Image alt='' src={images.Group19624} className={classNames({
              'w-[119.85px] h-[40px]': true,
              'hidden': !state.isOpenLeftBar
            })}
            />
            <Image
              alt=''
              src={images.arrowLeft}
              className={classNames({
                'hidden': !state.isOpenLeftBar,
                'w-[24px] h-[24px] cursor-pointer': true
              })}
              onClick={onClickCloseLeftBar}
            />
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
                [styles.isSelected]: item.id === "Connect TikTok Shop",
                'rotate-180': item.id === "arrowRotate"
              })}
                key={item.id}
                onClick={item.onClickItem}
              >
                <div className='flex flex-row gap-[10px]'>
                  <Image alt='' src={item.icon} className={classNames({
                    'w-[20px] h-[20px]': true,
                    'hidden': item.id === "arrowRotate" && state.isOpenLeftBar
                  })} />
                  <div className={classNames({
                    'hidden': !state.isOpenLeftBar,
                  })}>
                    {item.title}
                  </div>
                </div>
                {item.hasDropDown && (
                  <Image alt='' src={images.arrowDown} className='hidden w-[14px] h-[14px]' />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={classNames({
          'flex-1 dt:flex': true,
          'hidden': !state.isOpenLeftBar
        })}
        />
        <div className={classNames({
          'px-[16px] py-[10px]': true,
          'hidden': !state.isOpenLeftBar
        })}>Terms of Policy</div>
      </div>
      <div className={`ml-[64px] flex flex-1 flex-col tb:ml-[94px] dt:ml-[250px]`}>
        <div className='flex flex-row mt-8 items-center tb:px-5 dt:px-11'>
          <div className='hidden tb:block'>Connect TikTok Shop</div>
          <div className='flex flex-1' />
          <div className='flex flex-row items-center'>
            <Image alt='' src={images.notificationBell} className='w-[40px] h-[40px] mr-5' />
            <Image alt='' src={images.avatarRound} className='w-[40px] h-[40px] mr-1' />
            <div>David</div>
            <Image alt='' src={images.arrowDown2} className='w-[24px] h-[24px]' />
          </div>
        </div>
        <div className='items-center justify-center flex flex-col flex-1 text-[#16213E]'>
          {childrenCompnent}
        </div>
      </div>
    </div>
  );
}
