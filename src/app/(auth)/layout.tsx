export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='min-h-screen bg-muted/50'>
      <main>{children}</main>
    </div>
  )
}
