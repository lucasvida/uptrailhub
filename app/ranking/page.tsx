"use client"

import { useState, useEffect } from "react"
import { Trophy, Star, Award, Target, Users, TrendingUp, Medal, Crown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockRanking } from "@/lib/data"
import { UserStats, UserRanking } from "@/types/Ranking"

export default function RankingPage() {
  const [userStats, setUserStats] = useState<UserStats | null>(null)
  const [ranking, setRanking] = useState<UserRanking[]>([])
  const [currentUser, setCurrentUser] = useState<any>(null)

  useEffect(() => {
    const userData = localStorage.getItem("userData")
    let user = null
    if (userData) {
      user = JSON.parse(userData)
      setCurrentUser(user)
    }

    const mockUserStats: UserStats = {
      totalPoints: 2450,
      level: 8,
      trilhasCompletas: 3,
      mentoriasRealizadas: 5,
      nextLevelPoints: 3000,
      currentLevelPoints: 2000,
    }

    setUserStats(mockUserStats)

    setRanking(mockRanking)
  }, [])

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Especialista":
        return "bg-purple-100 text-purple-800"
      case "Mentor Master":
        return "bg-blue-100 text-blue-800"
      case "Aprendiz Avançado":
        return "bg-green-100 text-green-800"
      case "Desenvolvedor":
        return "bg-orange-100 text-orange-800"
      case "Explorador":
        return "bg-yellow-100 text-yellow-800"
      case "Iniciante Plus":
        return "bg-pink-100 text-pink-800"
      case "Aprendiz":
        return "bg-indigo-100 text-indigo-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />
      default:
        return (
          <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-gray-600">#{position}</span>
        )
    }
  }

  if (!userStats) {
    return <div>Carregando...</div>
  }

  const progressPercentage =
    ((userStats.totalPoints - userStats.currentLevelPoints) /
      (userStats.nextLevelPoints - userStats.currentLevelPoints)) *
    100

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">TrilhaXP</h1>
          <p className="text-gray-600">Acompanhe seu progresso, conquiste medalhas e mostre seu destaque. Os melhores colocados aparecem no topo — e no radar das empresas.</p>
        </div>

        {/* Stats do Usuário */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pontos Totais</CardTitle>
              <Star className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{userStats.totalPoints.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+150 esta semana</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Nível Atual</CardTitle>
              <Trophy className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{userStats.level}</div>
              <div className="mt-2">
                <Progress value={progressPercentage} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  {userStats.nextLevelPoints - userStats.totalPoints} pontos para o próximo nível
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Trilhas Completas</CardTitle>
              <Target className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{userStats.trilhasCompletas}</div>
              <p className="text-xs text-muted-foreground">500 pontos cada</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Mentorias</CardTitle>
              <Users className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{userStats.mentoriasRealizadas}</div>
              <p className="text-xs text-muted-foreground">100 pontos cada</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="ranking" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ranking">Ranking Geral</TabsTrigger>
            <TabsTrigger value="pontuacao">Sistema de Pontuação</TabsTrigger>
          </TabsList>

          <TabsContent value="ranking">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Ranking de Usuários</span>
                </CardTitle>
                <CardDescription>Veja como você está se saindo comparado a outros usuários</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ranking.map((user) => (
                    <div
                      key={user.id}
                      className={`flex items-center justify-between p-4 rounded-lg border ${
                        user.name === "Você" ? "bg-green-50 border-green-200" : "bg-white"
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center">{getPositionIcon(user.position)}</div>
                        <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                          <span className="text-sm font-medium">{user.avatar}</span>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{user.name}</h3>
                          <p className="text-sm text-gray-500">Nível {user.level}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className={getBadgeColor(user.badge)}>{user.badge}</Badge>
                        <div className="text-right">
                          <p className="font-bold text-green-600">{user.points.toLocaleString()} pts</p>
                          <p className="text-xs text-gray-500">
                            {user.trilhasCompletas} trilhas • {user.mentoriasRealizadas} mentorias
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pontuacao">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Como Ganhar Pontos</CardTitle>
                  <CardDescription>Atividades que geram pontos na plataforma</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Completar Trilha</span>
                    </div>
                    <Badge variant="secondary">+500 pts</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-green-600" />
                      <span className="font-medium">Sessão de Mentoria</span>
                    </div>
                    <Badge variant="secondary">+100 pts</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-purple-600" />
                      <span className="font-medium">Completar Módulo</span>
                    </div>
                    <Badge variant="secondary">+50 pts</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-yellow-600" />
                      <span className="font-medium">Login Diário</span>
                    </div>
                    <Badge variant="secondary">+10 pts</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Níveis e Badges</CardTitle>
                  <CardDescription>Conquiste badges conforme progride</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Nível 1-2: Novato</span>
                      <Badge className="bg-gray-100 text-gray-800">0-1000 pts</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Nível 3-5: Aprendiz</span>
                      <Badge className="bg-blue-100 text-blue-800">1000-2500 pts</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Nível 6-8: Explorador</span>
                      <Badge className="bg-green-100 text-green-800">2500-4000 pts</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Nível 9-12: Desenvolvedor</span>
                      <Badge className="bg-purple-100 text-purple-800">4000-6000 pts</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Nível 13+: Especialista</span>
                      <Badge className="bg-yellow-100 text-yellow-800">6000+ pts</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
