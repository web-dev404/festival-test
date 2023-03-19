import clsx from 'clsx'
import styles from './FirstScreen.module.scss'
interface IFirstScreen {
  blue?: boolean
}
const FirstScreen = ({ blue = false }: IFirstScreen) => {
  return (
    <div
      className={clsx(styles.screen, { [styles.screen__blue]: blue })}
    >
      <div className='container relative'>
        <div
          className={
            'relative h-[800px] xl:h-[500px] lg:h-[400px] md:h-[300px] xxs:h-[250px]'
          }
        >
          <div className={styles.screen__block}>СКИДКА 25%</div>
        </div>
      </div>
      <div className={styles.screen__bottom}>
        <div className='container'>
          <div
            className={
              'grid grid-cols-3 items-center gap-5 xxs:gap-x-3'
            }
          >
            <div
              className={clsx(
                styles.screen__item,
                styles.screen__itemActive
              )}
            >
              Виды пошива костюмов
            </div>
            <div className={styles.screen__item}>
              Виды проката костюмов
            </div>
            <div className={styles.screen__item}>
              Виды выездных мероприятий
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstScreen
