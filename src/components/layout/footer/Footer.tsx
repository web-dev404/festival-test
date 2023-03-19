import clsx from 'clsx'
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.scss'

interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

export const Footer: React.FC<IFooter> = ({ className }) => {
  return (
    <footer className={clsx(className, styles.footer)}>
      <div className={'container'}>
        <div
          className={
            'grid grid-cols-12 gap-6 pt-5 lg:grid-cols-10 md:gap-3 xs:grid-cols-6 xxs:grid-cols-4 xxs:gap-y-5'
          }
        >
          <div className={'col-span-2 col-start-2 lg:col-start-1'}>
            <span className={styles.footer__name}>Клиентам</span>
            <div className={'flex flex-col gap-2.5'}>
              <Link href={'#'} className={styles.footer__link}>
                Годовая подписка на костюмы
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Условия и способы оплаты
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Правила проката
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Правила выездных мероприятий
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Правила пошива
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Защита личных данных
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Вопросы и ответы
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Личный кабинет
              </Link>
            </div>
          </div>
          <div className={'col-span-2'}>
            <span className={styles.footer__name}>
              Каталог костюмов
            </span>
            <div className={'flex flex-col gap-2.5'}>
              <Link href={'#'} className={styles.footer__link}>
                Карнавальные
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Кино и сказки
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Национальные
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Исторические
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Вечерние
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Промо костюмы
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                AR-костюмы
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Реквизит
              </Link>
            </div>
          </div>
          <div className={'col-span-2'}>
            <span className={styles.footer__name}>Услуги</span>
            <div className={'flex flex-col gap-2.5'}>
              <Link href={'#'} className={styles.footer__link}>
                Прокат костюмов
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Пошив костюмов
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Брендирование
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Выездная фотостудия
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Выездная костюмерная
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Выездная гримерка
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Фотодни
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Костюмированный бал
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Аниматоры в костюмах
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Аниматор boх
              </Link>
            </div>
          </div>
          <div className={'col-span-2'}>
            <span className={styles.footer__name}>О нас</span>
            <div className={'flex flex-col gap-2.5'}>
              <Link href={'#'} className={styles.footer__link}>
                Портфолио
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                О нас
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Отзывы
              </Link>
            </div>
          </div>
          <div className={'col-span-2'}>
            <span className={styles.footer__name}>Контакты</span>
            <div className={'flex flex-col gap-2.5'}>
              <Link href={'#'} className={styles.footer__link}>
                Социальные сети:
              </Link>
              <div className={'flex gap-5 xl:gap-x-2.5 md:gap-x-1'}>
                <Image
                  src={'/icons/telegram.svg'}
                  alt={'telegram'}
                  width={30}
                  height={30}
                  className={'md:w-5'}
                />
                <Image
                  src={'/icons/vk.svg'}
                  alt={'telegram'}
                  width={30}
                  height={30}
                  className={'md:w-5'}
                />
                <Image
                  src={'/icons/whatsapp.svg'}
                  alt={'telegram'}
                  width={30}
                  height={30}
                  className={'md:w-5'}
                />
              </div>
              <Link href={'#'} className={styles.footer__link}>
                Написать в чат:
              </Link>
              <div className={'flex gap-5 xl:gap-x-2.5 md:gap-x-1'}>
                <Image
                  src={'/icons/telegram.svg'}
                  alt={'telegram'}
                  width={30}
                  height={30}
                  className={'md:w-5'}
                />
                <Image
                  src={'/icons/vk.svg'}
                  alt={'telegram'}
                  width={30}
                  height={30}
                  className={'md:w-5'}
                />
                <Image
                  src={'/icons/viber.svg'}
                  alt={'telegram'}
                  width={30}
                  height={30}
                  className={'md:w-5'}
                />
                <Image
                  src={'/icons/whatsapp.svg'}
                  alt={'telegram'}
                  width={30}
                  height={30}
                  className={'md:w-5'}
                />
              </div>
              <Link href={'#'} className={styles.footer__link}>
                Позвонить: +7 (495) 645-76-73
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Написать на почту
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Заказать обратный звонок
              </Link>
              <Link href={'#'} className={styles.footer__link}>
                Адрес: 117218, Москва, Россия, ул. Новочеремушкинская
                25, 5 этаж, метро Академическая, офис Фестиваль-парк
              </Link>
            </div>
          </div>
          <div
            className={
              'col-span-6 col-start-3 text-center xs:col-start-1 xxs:col-span-4'
            }
          >
            <p className={'text-xs md:text-[10px]'}>
              www.festival-park.ru Мастерская исторического костюма-
              аренда, прокат и пошив карнавальных костюмов. Выездные
              костюмированные фотосессии. Исторические балы.
            </p>
            <span className={'text-xs md:text-[10px]'}>
              © 2006 Фестиваль-парк. Все права защищены
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
