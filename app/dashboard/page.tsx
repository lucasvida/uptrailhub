"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  BookOpen, 
  MessageCircle, 
  TrendingUp, 
  Clock, 
  Star, 
  Play,
  Target,
  Users,
  Calendar,
  ArrowRight,
  Trophy,
  Lightbulb
} from "lucide-react"
import Link from "next/link"
import { trilhasData } from "@/lib/data"
import AuthGuard from "@/components/auth-guard"

interface UserData {
  id: string
  email: string
  signature: "free" | "premium"
  isAuthenticated: boolean
  loginTime: string
}

interface Mentoria {
  id: string
  mentor: string
  topic: string
  date: string
  duration: string
  rating: number
}

export default function DashboardPage() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const router = useRouter()

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData')
    if (storedUserData) {
      try {
        const user = JSON.parse(storedUserData)
        setUserData(user)
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error)
      }
    }
  }, [])

  // Dados simulados de mentorias recentes
  const recentMentorias: Mentoria[] = [
    {
      id: "1",
      mentor: "Ana Silva",
      topic: "React Hooks Avançados",
      date: "2024-01-15",
      duration: "1h 30min",
      rating: 5
    },
    {
      id: "2",
      mentor: "Carlos Mendes",
      topic: "Machine Learning Básico",
      date: "2024-01-10",
      duration: "2h",
      rating: 4
    },
    {
      id: "3",
      mentor: "Mariana Costa",
      topic: "Design Systems",
      date: "2024-01-05",
      duration: "1h 45min",
      rating: 5
    }
  ]

  // Trilhas em andamento (simuladas)
  const trilhasEmAndamento = [
    {
      id: "frontend-developer",
      title: "Desenvolvedor Front-end Jr.",
      progress: 65,
      lastActivity: "2 dias atrás",
      nextModule: "React Fundamentals",
      image: "/frontend-coding-screen.png"
    },
    {
      id: "data-scientist",
      title: "Cientista de Dados",
      progress: 32,
      lastActivity: "1 semana atrás",
      nextModule: "Estatística e Probabilidade",
      image: "/data-science-analytics.png"
    }
  ]

  // Sugestões de próximas trilhas
  const sugestoesTrilhas = [
    {
      id: "ux-ui-designer",
      title: "Designer UX/UI",
      description: "Crie experiências digitais incríveis",
      demandLevel: "alta",
      salary: "R$ 5.000 - R$ 12.000",
      duration: "5 meses",
      image: "/professional-woman-designer.png"
    },
    {
      id: "devops-engineer",
      title: "Engenheiro DevOps",
      description: "Automatize e otimize infraestrutura",
      demandLevel: "alta",
      salary: "R$ 6.000 - R$ 15.000",
      duration: "6 meses",
      image: "/professional-devops-engineer.png"
    }
  ]



  return (
    <AuthGuard>
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-primary" />
                <h1 className="text-xl font-bold">Dashboard</h1>
              </div>
              <Badge variant={userData?.signature === "premium" ? "default" : "secondary"}>
                {userData?.signature === "premium" ? "Premium" : "Free"}
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                Olá, {userData?.email}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Cards de Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Trilhas Ativas</p>
                  <p className="text-2xl font-bold">{trilhasEmAndamento.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Mentorias Realizadas</p>
                  <p className="text-2xl font-bold">{recentMentorias.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Horas de Estudo</p>
                  <p className="text-2xl font-bold">24h</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Trophy className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Conquistas</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trilhas em Andamento */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Trilhas em Andamento</span>
                </CardTitle>
                <CardDescription>
                  Continue de onde parou nas suas trilhas de aprendizado
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {trilhasEmAndamento.map((trilha) => (
                  <div key={trilha.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                      <img 
                        src={trilha.image} 
                        alt={trilha.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{trilha.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Próximo módulo: {trilha.nextModule}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progresso</span>
                          <span className="font-medium">{trilha.progress}%</span>
                        </div>
                        <Progress value={trilha.progress} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                          Última atividade: {trilha.lastActivity}
                        </p>
                      </div>
                    </div>
                    <Button size="sm" asChild>
                      <Link href={`/trilhas/${trilha.id}`}>
                        <Play className="w-4 h-4 mr-1" />
                        Continuar
                      </Link>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Últimas Mentorias */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Últimas Mentorias</span>
                </CardTitle>
                <CardDescription>
                  Suas sessões de mentoria recentes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentMentorias.map((mentoria) => (
                  <div key={mentoria.id} className="p-3 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{mentoria.topic}</h4>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">{mentoria.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {mentoria.mentor}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{mentoria.duration}</span>
                      <span>{new Date(mentoria.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/mentoria">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Agendar Mentoria
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sugestões de Próximas Trilhas */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="w-5 h-5" />
                <span>Sugestões para Você</span>
              </CardTitle>
              <CardDescription>
                Trilhas recomendadas baseadas no seu perfil e mercado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sugestoesTrilhas.map((trilha) => (
                  <div key={trilha.id} className="flex space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                      <img 
                        src={trilha.image} 
                        alt={trilha.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{trilha.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {trilha.description}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {trilha.demandLevel}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {trilha.duration}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-green-600 mb-3">
                        {trilha.salary}
                      </p>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/trilhas/${trilha.id}`}>
                          <ArrowRight className="w-4 h-4 mr-1" />
                          Ver Trilha
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </AuthGuard>
  )
}
