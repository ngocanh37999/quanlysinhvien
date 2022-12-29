import React from 'react'

export default function Xl({ children }: { children: React.ReactNode }) {
  return <div className='hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden'>{children}</div>
}
