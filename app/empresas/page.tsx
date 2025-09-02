"use client"

import { useState } from "react"
import { Search, MapPin, Users, Building2, Star } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

const empresasParceiras = [
  {
    id: 1,
    slug: "nubank",
    nome: "Nubank",
    logo: "/placeholder.svg?height=80&width=80&text=Nu",
    descricao: "Fintech líder em inovação financeira na América Latina",
    setor: "Fintech",
    funcionarios: "5000+",
    localizacao: "São Paulo, SP",
    rating: 4.8,
    totalVagas: 12,
  },
  {
    id: 2,
    slug: "ifood",
    nome: "iFood",
    logo: "/placeholder.svg?height=80&width=80&text=iF",
    descricao: "Maior plataforma de delivery de comida da América Latina",
    setor: "Marketplace",
    funcionarios: "3000+",
    localizacao: "São Paulo, SP",
    rating: 4.6,
    totalVagas: 8,
  },
  {
    id: 3,
    slug: "stone",
    nome: "Stone",
    logo: "/placeholder.svg?height=80&width=80&text=ST",
    descricao: "Empresa de tecnologia financeira focada em soluções de pagamento",
    setor: "Fintech",
    funcionarios: "4000+",
    localizacao: "Rio de Janeiro, RJ",
    rating: 4.7,
    totalVagas: 6,
  },
  {
    id: 4,
    slug: "mercado-livre",
    nome: "Mercado Livre",
    logo: "/placeholder.svg?height=80&width=80&text=ML",
    descricao: "Maior plataforma de e-commerce da América Latina",
    setor: "E-commerce",
    funcionarios: "8000+",
    localizacao: "São Paulo, SP",
    rating: 4.5,
    totalVagas: 15,
  },
  {
    id: 5,
    slug: "spotify",
    nome: "Spotify",
    logo: "/placeholder.svg?height=80&width=80&text=SP",
    descricao: "Plataforma global de streaming de música e podcasts",
    setor: "Streaming",
    funcionarios: "2000+",
    localizacao: "São Paulo, SP",
    rating: 4.9,
    totalVagas: 4,
  },
  {
    id: 6,
    slug: "globo",
    nome: "Globo",
    logo: "/placeholder.svg?height=80&width=80&text=GL",
    descricao: "Maior conglomerado de mídia e comunicação do Brasil",
    setor: "Mídia",
    funcionarios: "15000+",
    localizacao: "Rio de Janeiro, RJ",
    rating: 4.3,
    totalVagas: 9,
  },
  {
    id: 7,
    slug: "magazine-luiza",
    nome: "Magazine Luiza",
    logo: "/placeholder.svg?height=80&width=80&text=ML",
    descricao: "Maior varejista omnichannel do Brasil",
    setor: "Varejo",
    funcionarios: "6000+",
    localizacao: "São Paulo, SP",
    rating: 4.4,
    totalVagas: 11,
  },
  {
    id: 8,
    slug: "banco-inter",
    nome: "Banco Inter",
    logo: "/placeholder.svg?height=80&width=80&text=BI",
    descricao: "Banco digital com foco em inovação e experiência do cliente",
    setor: "Fintech",
    funcionarios: "3500+",
    localizacao: "Belo Horizonte, MG",
    rating: 4.5,
    totalVagas: 7,
  },
]

export default function EmpresasPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSetor, setSelectedSetor] = useState("todos")

  const setores = [...new Set(empresasParceiras.map((empresa) => empresa.setor))]

  const empresasFiltradas = empresasParceiras.filter((empresa) => {
    const matchNome = empresa.nome.toLowerCase().includes(searchTerm.toLowerCase())
    const matchSetor = selectedSetor === "todos" || empresa.setor === selectedSetor
    return matchNome && matchSetor
  })

  const totalVagas = empresasFiltradas.reduce((acc, empresa) => acc + empresa.totalVagas, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Empresas Parceiras</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conecte-se diretamente com as melhores empresas do mercado. Clique em uma empresa para ver vagas disponíveis
            e descobrir se você tem match.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-6">
            <div className="flex items-center space-x-2">
              <Building2 className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">{empresasFiltradas.length} Empresas</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">{totalVagas} Vagas Abertas</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Buscar empresa..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="w-full md:w-48">
            <Select value={selectedSetor} onValueChange={setSelectedSetor}>
              <SelectTrigger>
                <SelectValue placeholder="Todos os setores" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os setores</SelectItem>
                {setores.map((setor) => (
                  <SelectItem key={setor} value={setor}>
                    {setor}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {empresasFiltradas.map((empresa, index) => (
            <Link key={empresa.id} href={`/empresas/${empresa.slug}`}>
              <Card
                className={`h-full hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer ${
                  index >= 2 ? "blur-[2px] opacity-70" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <img
                      src={empresa.logo || "/placeholder.svg"}
                      alt={`Logo ${empresa.nome}`}
                      className="w-20 h-20 rounded-lg object-cover border mx-auto mb-4"
                    />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{empresa.nome}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{empresa.descricao}</p>

                    <div className="space-y-2 mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {empresa.setor}
                      </Badge>
                      <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{empresa.localizacao}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
                        <Users className="w-3 h-3" />
                        <span>{empresa.funcionarios} funcionários</span>
                      </div>
                      <div className="flex items-center justify-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-gray-700">{empresa.rating}</span>
                      </div>
                    </div>

                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {empresa.totalVagas} vaga{empresa.totalVagas !== 1 ? "s" : ""} disponível
                      {empresa.totalVagas !== 1 ? "is" : ""}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {empresasFiltradas.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nenhuma empresa encontrada</h3>
            <p className="text-gray-600">Tente ajustar os filtros para encontrar mais resultados.</p>
          </div>
        )}
      </div>
    </div>
  )
}
