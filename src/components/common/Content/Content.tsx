import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'
interface IContent {
  className?: string
}
const Content: FC<PropsWithChildren<IContent>> = ({
  children,
  className,
}) => {
  return (
    <div className={'py-[50px] lg:py-[30px]'}>
      <div className='container'>
        <div
          className={clsx(
            'grid grid-cols-12 gap-x-5 gap-y-[50px] lg:gap-y-[30px] lg:gap-x-3 xxs:gap-y-[20px]',
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Content
