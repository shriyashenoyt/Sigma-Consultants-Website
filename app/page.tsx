'use client'
import dynamic from 'next/dynamic'

// Using the absolute alias '@/' to point to your components folder
const HomeContent = dynamic(() => import('@/components/HomeContent'), { 
  ssr: false,
  loading: () => <div className="min-h-screen bg-engineering-bg animate-pulse" /> 
})

export default function Home() {
  return (
    <main>
      <HomeContent />
    </main>
  )
}