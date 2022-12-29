export default function Sm({ children }: { children: React.ReactNode }) {
  return <div className='hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden'>{children}</div>
}
