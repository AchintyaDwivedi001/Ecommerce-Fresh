import './globals.css'

export const metadata = {
  title: 'E-Commerce Store',
  description: 'Find the perfect shoes for your style',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}