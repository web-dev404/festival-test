import { Footer, Header } from '@components/layout'
import React from 'react'

export const Wrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <Header />

      <div className='wrapper'>{children}</div>

      <Footer />
    </>
  )
}
