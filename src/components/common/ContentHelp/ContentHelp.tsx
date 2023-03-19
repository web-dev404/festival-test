import clsx from 'clsx'
import styles from './ContentHelp.module.scss'
interface IContentHelp {
  className?: string
  blue?: boolean
}
const ContentHelp = ({
  className = 'col-span-12',
  blue = false,
}: IContentHelp) => {
  return (
    <div
      className={clsx(
        styles.item,
        {
          [styles.item__blue]: blue,
        },
        className
      )}
    >
      <h4
        className={
          'mb-2.5 text-[24px] font-bold leading-[22px] lg:text-[20px] md:text-[14px] xxs:text-[10px]'
        }
      >
        Помочь с выбором? Оставьте свой телефон - мы вам перезвоним
      </h4>
      <form
        action='#'
        className={'flex gap-x-2.5 md:grid md:grid-cols-2 md:gap-y-3'}
      >
        <input
          type='text'
          className={clsx(
            styles.item__field,
            'min-w-[130px] max-w-[220px] md:w-full md:max-w-none'
          )}
          placeholder={'Имя'}
        />
        <input
          className={clsx(
            styles.item__field,
            'min-w-[130px] max-w-[220px] md:w-full md:max-w-none'
          )}
          type='text'
          placeholder={'+7'}
        />
        <input
          className={clsx('grow', styles.item__field)}
          type='text'
          placeholder={'Сообщение...'}
        />

        <button className={styles.item__button}>
          Отправить заявку
        </button>
      </form>
    </div>
  )
}

export default ContentHelp
