import { Users, MessageCircle, Star, Clock, TrendingUp, User } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b border-green-700 bg-[#063825] backdrop-blur supports-[backdrop-filter]:bg-[#063825] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">UpTrail Hub</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/trilhas" className="text-white hover:text-green-200 transition-colors font-medium">
            Trilhas
          </Link>
          <Link href="/mentoria" className="text-white hover:text-green-200 transition-colors font-medium">
            Mentoria
          </Link>
          <Link href="/login" className="text-white hover:text-green-200 transition-colors font-medium flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>Login</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
