'use client'
import { useRouter } from 'next/navigation'
import menuIcon from '@/assets/menu-white.svg'
import messageIcon from '@/assets/send-white.svg'
import Image from 'next/image'
import { useState } from 'react'

export default function HomeNavBar() {
  const router = useRouter()

  const [showMenu, setShowMenu] = useState<boolean>(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="flex w-full justify-between">
      <button className="cursor-pointer" onClick={toggleMenu}>
        <Image src={menuIcon} alt="menu button" width={32} height={32} />
      </button>
      <span className="text-4xl bold">valse</span>
      <button className="cursor-pointer" onClick={() => router.back()}>
        <Image src={messageIcon} alt="message button" width={24} height={24} />
      </button>
    </div>
  )
}
