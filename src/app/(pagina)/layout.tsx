import Pagina from '@/src/components/template/Pagina'

export default function PaginaLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Pagina>{children}</Pagina>
}
