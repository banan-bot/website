import './globals.css'
import Link from 'next/link'

export default function NotFound() {
    return (
        <main className='pt-2'>
            <div className="grid place-items-center justify-center items-center absolute top-0 bottom-0 left-0 right-0 m-auto p-5 bg-neutral-900 border-2 border-neutral-500/25 rounded-xl w-fit h-fit gap-5">
                <h1 className='underline text-red-400 text-6xl'>404 - NOT FOUND</h1>
                <h1 className="text-3xl">Uh Oh! Looks like you <br></br>stumbled upon a non-existing link!</h1>
                <p className="text-md" style={{ color: 'var(--sec-text-color)' }}><Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className='no-underline hover:underline'>How did you even get here?</Link></p>
            </div>

        </main>
    )
}