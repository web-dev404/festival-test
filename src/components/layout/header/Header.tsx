import clsx from 'clsx'
import React, { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'

export interface IHeader
  extends React.ComponentPropsWithoutRef<'header'> {}

export const Header: FC<IHeader> = ({ className }) => {
  return (
    <div className={clsx(styles.header__wrapper, 'header')}>
      <div className='container'>
        <div
          className={
            'flex items-center justify-between gap-x-2.5 pt-8 pb-5 xl:gap-x-2 xl:pt-5 xl:pb-3 xxs:grid xxs:grid-cols-1 xxs:gap-y-3'
          }
        >
          <div className={'flex shrink-0 items-center'}>
            <Image
              src={'/icons/logo.svg'}
              alt={'logo'}
              width={89}
              height={100}
              className={
                'mr-2.5 lg:h-[80px] lg:w-[60px] md:mr-1 md:h-[60px] md:w-[40px]'
              }
            />
            <span
              className={
                '2xl:text-2 text-3xl font-bold xl:text-xl lg:text-sm md:text-[12px] md:leading-[12px]'
              }
            >
              Фестиваль<br></br>Парк
            </span>
          </div>
          <div
            className={
              'flex gap-5 2xl:gap-x-2.5 md:gap-x-1.5 xs:grid xs:grid-cols-2 xs:gap-2'
            }
          >
            <div className={styles.header__item}>
              <Image
                src={'icons/star.svg'}
                alt={'star'}
                width={40}
                height={40}
                className={'lg:h-5 lg:w-5'}
              />
              <div>
                <span>Более 2000 костюмов</span>
                <br />
                <span>Более 15 лет на рынке</span>
              </div>
            </div>
            <div className={styles.header__item}>
              <Image
                src={'icons/place.svg'}
                alt={'place'}
                width={30}
                height={30}
                className={'lg:h-5 lg:w-5'}
              />
              <p
                className={
                  'w-[290px] xl:w-[220px] lg:w-[180px] md:w-[150px]'
                }
              >
                г. Москва, метро Академическая, ул. Новочеремушкинская
                25, 5 этаж
              </p>
            </div>
            <div className={styles.header__number}>
              <Link
                href={'#'}
                className={
                  'block bg-white text-lg font-bold leading-6 xl:min-w-0 xl:text-sm lg:text-[12px] md:text-[10px] md:leading-3'
                }
              >
                +7 (495) 645-76-73
              </Link>
            </div>
            <div className={styles.header__reg}>
              <Link
                href={'#'}
                className={
                  'min-w-[220px] text-center text-xl leading-6 xl:min-w-0 xl:text-sm lg:text-[12px] md:text-[10px] md:leading-3'
                }
              >
                Регистрация
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
