'use client'
import { usePathname } from 'next/navigation'
import MatrixBackground from '@/components/MatrixBackground'

export default function ConditionalMatrix() {
  const pathname = usePathname()
  const showOn = ['/']  // add pages here

  return showOn.includes(pathname) ? <MatrixBackground /> : null
}
