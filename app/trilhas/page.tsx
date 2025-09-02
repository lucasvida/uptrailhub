import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  Star,
  Clock,
  ArrowLeft,
  Filter,
  Search,
  TrendingUp,
  DollarSign,
  Target,
  Zap,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { trilhasData } from "@/lib/data"

export default function TrilhasPage() {
  const trilhas = Object.values(trilhasData).concat([
    {
      id: "backend-developer",
      title: "Desenvolvedor Back-end",
      description: "Construa APIs robustas com Node.js, Python e bancos de dados modernos.",
      longDescription: "Torne-se um desenvolvedor back-end completo dominando tecnologias server-side.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=center",
      level: "Intermediário",
      duration: "7 meses",
      progress: 0,
      students: "943",
      rating: 4.6,
      salary: "R$ 6.000 - R$ 12.000",
      jobOpportunities: 1876,
      skills: ["Node.js", "Python", "SQL", "MongoDB", "Docker", "AWS"],
      prerequisites: ["JavaScript básico", "Lógica de programação"],
      modules: [],
      marketIntelligence: {
        demandLevel: "alta" as const,
        growthProjection: "+31% nos próximos 2 anos",
        averageHiringTime: "3-5 semanas",
        topHiringCompanies: ["Spotify", "Netflix", "Uber", "Airbnb"],
        realOpportunities: [
          {
            company: "Spotify",
            position: "Backend Engineer Jr.",
            location: "São Paulo, SP",
            salary: "R$ 8.000 - R$ 11.000",
            type: "hybrid" as const,
            urgency: "alta" as const,
            requirements: ["Node.js", "Python", "PostgreSQL", "Docker"],
            postedDays: 2,
            applicants: 156,
          },
        ],
        skillsInDemand: ["Node.js", "Python", "Docker", "AWS", "PostgreSQL"],
        marketInsights: ["APIs REST são requisito em 95% das vagas", "Conhecimento em cloud aumenta salário em 25%"],
      },
    },
    {
      id: "devops-engineer",
      title: "Engenheiro DevOps",
      description: "Automatize deploys e gerencie infraestrutura com Docker, Kubernetes e AWS.",
      longDescription: "Domine DevOps e cloud computing para automatizar processos de desenvolvimento.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop&crop=center",
      level: "Avançado",
      duration: "10 meses",
      progress: 0,
      students: "567",
      rating: 4.8,
      salary: "R$ 10.000 - R$ 18.000",
      jobOpportunities: 892,
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Linux"],
      prerequisites: ["Conhecimento de Linux", "Experiência com desenvolvimento"],
      modules: [],
      marketIntelligence: {
        demandLevel: "alta" as const,
        growthProjection: "+45% nos próximos 2 anos",
        averageHiringTime: "4-6 semanas",
        topHiringCompanies: ["AWS", "Google Cloud", "Microsoft", "Red Hat"],
        realOpportunities: [
          {
            company: "AWS",
            position: "DevOps Engineer",
            location: "Remote",
            salary: "R$ 12.000 - R$ 16.000",
            type: "remote" as const,
            urgency: "alta" as const,
            requirements: ["Docker", "Kubernetes", "AWS", "Terraform"],
            postedDays: 1,
            applicants: 89,
          },
        ],
        skillsInDemand: ["Kubernetes", "AWS", "Docker", "Terraform", "CI/CD"],
        marketInsights: ["Certificações AWS aumentam salário em 40%", "Kubernetes é skill mais demandada em 2024"],
      },
    },
    {
      id: "product-manager",
      title: "Gerente de Produto",
      description: "Lidere produtos digitais do conceito ao lançamento com metodologias ágeis.",
      longDescription: "Aprenda a gerenciar produtos digitais de forma estratégica e orientada a dados.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center",
      level: "Intermediário",
      duration: "6 meses",
      progress: 0,
      students: "1.5k",
      rating: 4.5,
      salary: "R$ 8.000 - R$ 16.000",
      jobOpportunities: 1234,
      skills: ["Product Strategy", "Agile", "Data Analysis", "User Stories", "Roadmapping"],
      prerequisites: ["Experiência profissional", "Pensamento analítico"],
      modules: [],
      marketIntelligence: {
        demandLevel: "média" as const,
        growthProjection: "+25% nos próximos 2 anos",
        averageHiringTime: "5-7 semanas",
        topHiringCompanies: ["Meta", "Google", "Amazon", "Shopify"],
        realOpportunities: [
          {
            company: "Meta",
            position: "Product Manager Jr.",
            location: "São Paulo, SP",
            salary: "R$ 10.000 - R$ 14.000",
            type: "hybrid" as const,
            urgency: "média" as const,
            requirements: ["Product Strategy", "Analytics", "Agile", "SQL"],
            postedDays: 4,
            applicants: 234,
          },
        ],
        skillsInDemand: ["Product Strategy", "Data Analysis", "SQL", "Agile", "A/B Testing"],
        marketInsights: [
          "Conhecimento técnico é diferencial competitivo",
          "Experiência com dados aumenta aprovação em 50%",
        ],
      },
    },
  ])

  const getDemandIndicator = (trilha: any) => {
    if (!trilha.marketIntelligence) return null

    const { demandLevel, realOpportunities } = trilha.marketIntelligence
    const hasUrgentJobs = realOpportunities.some((job: any) => job.urgency === "alta")

    if (demandLevel === "alta" && hasUrgentJobs) {
      return (
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
          <Zap className="w-3 h-3" />
          Alta Demanda
        </div>
      )
    } else if (demandLevel === "alta") {
      return (
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
          <Target className="w-3 h-3" />
          Alta Demanda
        </div>
      )
    }
    return null
  }

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Escolha sua <span className="text-primary">Trilha de Aprendizado</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Transforme sua carreira com trilhas estruturadas e conteúdos cuidadosamente selecionados
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">12.8k+</div>
              <div className="text-sm text-muted-foreground">Vagas abertas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">R$ 7.2k</div>
              <div className="text-sm text-muted-foreground">Salário médio</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">+23%</div>
              <div className="text-sm text-muted-foreground">Crescimento</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="px-4 mb-8">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Buscar trilhas..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Filter className="w-4 h-4" />
              Filtros
            </Button>
          </div>
        </div>
      </section>

      {/* Trilhas Grid */}
      <section className="px-4 pb-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {trilhas.map((trilha) => (
              <Card
                key={trilha.id}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-card relative"
              >
                {getDemandIndicator(trilha)}
                <a href={`/trilhas/${trilha.id}`} className="block">
                  <CardHeader className="pb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={trilha.image || "/placeholder.svg"}
                        alt={trilha.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                        {trilha.level}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {trilha.duration}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{trilha.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{trilha.description}</CardDescription>

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {trilha.salary}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {trilha.jobOpportunities} vagas
                      </div>
                    </div>

                    {trilha.marketIntelligence && (
                      <div className="mt-2 pt-2 border-t border-border">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">Crescimento:</span>
                          <span className="font-medium text-green-600">
                            {trilha.marketIntelligence.growthProjection}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs mt-1">
                          <span className="text-muted-foreground">Vagas reais:</span>
                          <span className="font-medium text-primary">
                            {trilha.marketIntelligence.realOpportunities.length} disponíveis
                          </span>
                        </div>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="w-4 h-4 mr-1" />
                          {trilha.students} alunos
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="w-4 h-4 mr-1 fill-current text-yellow-500" />
                          {trilha.rating}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
