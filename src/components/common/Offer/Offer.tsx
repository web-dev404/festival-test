import Image from 'next/image'
import styles from './Offer.module.scss'
const Offer = () => {
  return (
    <div className={styles.offer}>
      <div className={'container'}>
        <div className={'flex justify-end'}>
          <div
            className={
              'relative pt-[100px] pb-[140px] pl-[120px] pr-[150px] after:absolute after:left-0 after:top-0 after:h-full after:w-screen after:rounded-tl-[50px] after:bg-white after:bg-opacity-50 after:backdrop-blur-[25px] xl:pt-[60px] xl:pb-[80px] xl:pl-[70px] xl:pr-[70px] lg:pr-0 md:p-[40px] md:p-[30px] md:pr-0 xxs:w-full xxs:max-w-none xxs:p-[20px] xxs:after:left-[-16px] xxs:after:rounded-tl-[0px]'
            }
          >
            <div
              className={
                'relative z-10 flex max-w-[460px] flex-col lg:max-w-[380px] xxs:max-w-none'
              }
            >
              <h4
                className={
                  'mb-[90px] text-[40px] leading-[56px] lg:mb-[60px] lg:text-[25px] lg:leading-[30px] md:mb-[30px] md:mb-[20px] md:text-[20px] md:leading-[22px]'
                }
              >
                Пройди регистрацию, получи скидку 25%
              </h4>
              <div
                className={
                  'max-w-[400px] md:w-full md:max-w-[330px] xxs:max-w-none'
                }
              >
                <form
                  action='#'
                  className={'mb-5 flex flex-col gap-2.5'}
                >
                  <label>
                    <span className={styles.offer__supfield}>
                      Телефон или адрес эл. почты
                    </span>
                    <input
                      type='text'
                      className={styles.offer__field}
                    />
                  </label>
                  <label>
                    <span className={styles.offer__supfield}>
                      Пароль
                    </span>
                    <input
                      type='text'
                      className={styles.offer__field}
                    />
                  </label>
                  <button className={styles.offer__send}>
                    Зарегистрироваться
                  </button>
                </form>
                <h6
                  className={
                    'mb-2.5 text-center text-[14px] leading-[17px] lg:text-[12px]'
                  }
                >
                  Авторизоваться с помощью:
                </h6>
                <div className={'flex justify-center gap-2.5'}>
                  <a href={'#'}>
                    <Image
                      src={'/img/vk.png'}
                      alt={'vk'}
                      width={40}
                      height={40}
                      className={'md:w-[30px]'}
                    />
                  </a>
                  <a href={'#'}>
                    <Image
                      src={'/img/classmates.png'}
                      alt={'classmates'}
                      width={40}
                      height={40}
                      className={'md:w-[30px]'}
                    />
                  </a>
                  <a href={'#'}>
                    <Image
                      src={'/img/mail.png'}
                      alt={'mail'}
                      width={40}
                      height={40}
                      className={'md:w-[30px]'}
                    />
                  </a>
                  <a href={'#'}>
                    <Image
                      src={'/img/yandex.png'}
                      alt={'yandex'}
                      width={40}
                      height={40}
                      className={'md:w-[30px]'}
                    />
                  </a>
                  <a href={'#'}>
                    <Image
                      src={'/img/google.png'}
                      alt={'google'}
                      width={40}
                      height={40}
                      className={'md:w-[30px]'}
                    />
                  </a>
                  <a href={'#'}>
                    <Image
                      src={'/img/apple.png'}
                      alt={'apple'}
                      width={40}
                      height={40}
                      className={'md:w-[30px]'}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer
