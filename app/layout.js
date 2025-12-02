import Link from 'next/link'
import './globals.css'
import { JetBrains_Mono } from 'next/font/google'

const jetbrains_mono = JetBrains_Mono({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrains_mono.className}>
      <title>banan</title>
      <body>
        <div className='flex sticky top-2 bottom-2 left-2 right-2 ml-2 mr-2 rounded-4xl mb-2 backdrop-blur-3xl border-2 border-neutral-500/15'>
          <div className='flex gap-5 ml-auto mr-auto p-3'>
            <Link href="/" className='no-underline hover:underline'>Home</Link>
            <Link href="/about" className='no-underline hover:underline'>About</Link>
            <Link href="/contact" className='no-underline hover:underline'>Contact</Link>
          </div>
        </div>
        <main>{children}</main>
      </body>
    </html>
  )
}