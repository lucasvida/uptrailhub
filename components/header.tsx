import { BookOpen, Users, MessageCircle, Star, Clock, TrendingUp, User } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">EduHub</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/trilhas" className="text-foreground hover:text-primary transition-colors font-medium">
            Trilhas
          </Link>
          <Link href="/mentoria" className="text-foreground hover:text-primary transition-colors font-medium">
            Mentoria
          </Link>
          <Link href="/login" className="text-foreground hover:text-primary transition-colors font-medium flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>Login</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
