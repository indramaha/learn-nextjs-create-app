import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Go to <Link href="posts/first-post">first page</Link></h1>
      <Image 
        src="/images/profile.jpg" 
        alt='profile' 
        width={144}
        height={144}
      />
    </div>
  )
}
