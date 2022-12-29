export default function TwoXl({ children }: { children: React.ReactNode }) {
  return <div className='hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block'>{children}</div>
}
