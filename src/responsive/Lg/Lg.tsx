export default function Lg({ children }: { children: React.ReactNode }) {
  return <div className='hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden'>{children}</div>
}
