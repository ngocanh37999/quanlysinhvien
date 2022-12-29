export default function Md({ children }: { children: React.ReactNode }) {
  return <div className='hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden'>{children}</div>
}
