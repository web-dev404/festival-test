import clsx from 'clsx'
import Image from 'next/image'
import styles from './ContentItem.module.scss'
interface IContentBtns {
  text?: string
}
interface IContentItem {
  name: string
  img: string
  buttons?: IContentBtns[],
  order?: boolean
  className?: string
}
const ContentItem = ({
  name,
  img,
  className,
  buttons,
  order = false,
}: IContentItem) => {
  return (
    <div className={clsx(styles.item, className)}>
      <span
        className={
          'flex h-[55px] w-full items-center justify-center px-6 text-center text-[20px] leading-[22px] xl:text-[16px] md:h-[40px] md:px-2 md:text-[14px] md:leading-[18px]'
        }
      >
        {name}
      </span>
      <Image
        src={img}
        alt={name}
        width={600}
        height={500}
        className={'block h-auto max-h-[422px] w-full object-cover'}
      ></Image>
      {buttons && (
        <div className={'flex gap-x-2.5 p-2'}>
          {buttons.map((element, index) => {
            return (
              <button className={styles.item__button} key={index}>
                {element.text}
              </button>
            )
          })}
        </div>
      )}
      {order && (
        <div className={'flex justify-center gap-x-2.5 p-2'}>
          <button className={styles.item__info}>Подробнее</button>
          <button className={styles.item__order}>Заказать</button>
        </div>
      )}
    </div>
  )
}

export default ContentItem
