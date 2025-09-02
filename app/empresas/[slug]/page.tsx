"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { ArrowLeft, MapPin, DollarSign, Users, Star, Clock, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const empresasDetalhadas = {
  nubank: {
    id: 1,
    nome: "Nubank",
    logo: "/placeholder.svg?height=100&width=100&text=Nu",
    descricao: "Fintech líder em inovação financeira na América Latina",
    setor: "Fintech",
    funcionarios: "5000+",
    localizacao: "São Paulo, SP",
    rating: 4.8,
    sobre:
      "O Nubank é uma das maiores fintechs do mundo, revolucionando o sistema financeiro brasileiro com produtos simples, transparentes e livres de burocracias desnecessárias.",
    vagas: [
      {
        id: 1,
        titulo: "Desenvolvedor Frontend React",
        nivel: "Pleno",
        salarioMin: 8000,
        salarioMax: 12000,
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        modalidade: "Remoto",
        urgencia: "alta",
        match: 85,
        descricao: "Desenvolver interfaces modernas e responsivas para nossos produtos financeiros.",
      },
      {
        id: 2,
        titulo: "Product Designer",
        nivel: "Senior",
        salarioMin: 10000,
        salarioMax: 15000,
        skills: ["Figma", "Design System", "UX Research", "Prototyping"],
        modalidade: "Híbrido",
        urgencia: "media",
        match: 45,
        descricao: "Criar experiências excepcionais para milhões de usuários do Nubank.",
      },
    ],
  },
  // ... outras empresas podem ser adicionadas aqui
}

export default function EmpresaDetalhePage() {
  const params = useParams()
  const slug = params.slug as string
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData")
    if (storedUserData) {
      try {
        const user = JSON.parse(storedUserData)
        setUserData(user)
      } catch (error) {
        console.error("Erro ao carregar dados do usuário:", error)
      }
    }
  }, [])

  const empresa = empresasDetalhadas[slug as keyof typeof empresasDetalhadas]

  if (!empresa) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Empresa não encontrada</h1>
          <Link href="/empresas">
            <Button>Voltar para empresas</Button>
          </Link>
        </div>
      </div>
    )
  }

  const getMatchColor = (match: number) => {
    if (match >= 80) return "bg-green-100 text-green-800 border-green-200"
    if (match >= 60) return "bg-yellow-100 text-yellow-800 border-yellow-200"
    return "bg-red-100 text-red-800 border-red-200"
  }

  const getMatchIcon = (match: number) => {
    if (match >= 80) return <CheckCircle className="w-4 h-4" />
    if (match >= 60) return <Clock className="w-4 h-4" />
    return <XCircle className="w-4 h-4" />
  }

  const getUrgenciaColor = (urgencia: string) => {
    switch (urgencia) {
      case "alta":
        return "bg-red-100 text-red-800 border-red-200"
      case "media":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-green-100 text-green-800 border-green-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/empresas">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para empresas
            </Button>
          </Link>

          <Card>
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <img
                  src={empresa.logo || "/placeholder.svg"}
                  alt={`Logo ${empresa.nome}`}
                  className="w-24 h-24 rounded-lg object-cover border"
                />
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{empresa.nome}</h1>
                  <p className="text-lg text-gray-600 mb-4">{empresa.descricao}</p>
                  <div className="flex items-center space-x-6 mb-4">
                    <Badge variant="secondary">{empresa.setor}</Badge>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{empresa.localizacao}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{empresa.funcionarios} funcionários</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{empresa.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{empresa.sobre}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Vagas Disponíveis ({empresa.vagas.length})</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {empresa.vagas.map((vaga) => (
              <Card
                key={vaga.id}
                className="overflow-hidden bg-white border border-gray-200 hover:shadow-md transition-shadow"
              >
                <CardHeader className="bg-gray-50 border-b border-gray-100 p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-gray-900">{vaga.titulo}</CardTitle>
                      <p className="text-gray-600 mt-1 text-sm line-clamp-2">{vaga.descricao}</p>
                      <div className="flex items-center space-x-2 mt-3">
                        <Badge variant="outline" className="text-xs">
                          {vaga.nivel}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {vaga.modalidade}
                        </Badge>
                        <Badge className={`${getUrgenciaColor(vaga.urgencia)} text-xs`}>
                          {vaga.urgencia === "alta" ? "Urgente" : vaga.urgencia === "media" ? "Moderada" : "Normal"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="font-semibold text-gray-900 text-sm">
                        R$ {vaga.salarioMin.toLocaleString()} - R$ {vaga.salarioMax.toLocaleString()}
                      </span>
                    </div>
                    {userData && (
                      <Badge className={`${getMatchColor(vaga.match)} flex items-center space-x-1 text-xs`}>
                        {getMatchIcon(vaga.match)}
                        <span>{vaga.match}% Match</span>
                      </Badge>
                    )}
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-gray-700 mb-2">Skills necessárias:</h4>
                    <div className="flex flex-wrap gap-1">
                      {vaga.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {vaga.skills.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{vaga.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>2 dias</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>15 candidatos</span>
                      </div>
                    </div>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs px-3 py-1">
                      Candidatar-se
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
