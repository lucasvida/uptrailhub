import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MarketIntelligenceCard } from "@/components/market-intelligence-card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  BookOpen,
  Users,
  Star,
  Clock,
  CheckCircle,
  Youtube,
  FileText,
  DollarSign,
  TrendingUp,
  ChevronDown,
  Play,
} from "lucide-react"
import { trilhasData } from "@/lib/data"

export default async function TrilhaPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const trilha = trilhasData[slug]

  if (!trilha) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Trilha não encontrada</h1>
          <Button asChild>
            <a href="/trilhas">Voltar às Trilhas</a>
          </Button>
        </div>
      </div>
    )
  }

  const getContentIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Youtube className="w-4 h-4" />
      case "article":
        return <FileText className="w-4 h-4" />
      case "course":
        return <BookOpen className="w-4 h-4" />
      default:
        return <BookOpen className="w-4 h-4" />
    }
  }

  const getPlatformColor = (platform: string) => {
    if (platform.toLowerCase().includes("youtube")) return "text-red-600"
    if (platform.toLowerCase().includes("udemy")) return "text-purple-600"
    if (platform.toLowerCase().includes("udacity")) return "text-blue-600"
    if (platform.toLowerCase().includes("coursera")) return "text-blue-500"
    return "text-muted-foreground"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                  {trilha.level}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  {trilha.duration}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-1" />
                  {trilha.students} alunos
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="w-4 h-4 mr-1 fill-current text-yellow-500" />
                  {trilha.rating}
                </div>
              </div>

              <h1 className="text-4xl font-bold text-foreground mb-4">{trilha.title}</h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{trilha.longDescription}</p>

              <div className="grid md:grid-cols-3 gap-4 mb-6 p-4 bg-card rounded-lg border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{trilha.salary}</div>
                  <div className="text-sm text-muted-foreground">Salário médio</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{trilha.jobOpportunities}</div>
                  <div className="text-sm text-muted-foreground">Vagas abertas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {trilha.marketIntelligence.growthProjection}
                  </div>
                  <div className="text-sm text-muted-foreground">Crescimento</div>
                </div>
              </div>
              <Button className="flex-1 cursor-pointer">
                <Play className="w-4 h-4 mr-2" /> {/* Added play icon to button */}
                Iniciar Trilha
              </Button>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-card border-0">
                <CardHeader>
                  <CardTitle className="text-lg">Sobre esta trilha</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Habilidades que você vai desenvolver</h4>
                    <div className="flex flex-wrap gap-2">
                      {trilha.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Pré-requisitos</h4>
                    <ul className="space-y-1">
                      {trilha.prerequisites.map((prereq, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center">
                          <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                          {prereq}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Oportunidades de Carreira</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <TrendingUp className="w-3 h-3 mr-2 text-green-600" />
                        Demanda {trilha.marketIntelligence.demandLevel} no mercado
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-3 h-3 mr-2 text-purple-600" />
                        {trilha.marketIntelligence.realOpportunities.length} vagas reais disponíveis
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Módulos</h2>
            <p className="text-muted-foreground">Veja o que você vai aprender nesta trilha</p>
          </div>

          <div className="space-y-4">
            {trilha.modules.map((module, moduleIndex) => (
              <Collapsible key={module.id}>
                <Card className="bg-card border-0">
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                            <span className="text-sm font-medium">{moduleIndex + 1}</span>
                          </div>
                          <div className="text-left">
                            <CardTitle className="text-xl">{module.title}</CardTitle>
                            <CardDescription>{module.description}</CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {module.contents.length} conteúdos
                          </Badge>
                          <ChevronDown className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        {module.contents.map((content) => (
                          <div
                            key={content.id}
                            className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-muted"
                          >
                            <div className="flex items-center gap-3 flex-1">
                              <div className="flex items-center gap-2 text-muted-foreground">
                                {getContentIcon(content.type)}
                                <span className={`text-sm font-medium ${getPlatformColor(content.platform)}`}>
                                  {content.platform}
                                </span>
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <h4 className="font-medium text-foreground">{content.title}</h4>
                                  {!content.free && (
                                    <Badge
                                      variant="outline"
                                      className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200"
                                    >
                                      <DollarSign className="w-3 h-3 mr-1" />
                                      Pago
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground">{content.description}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <span className="text-sm text-muted-foreground">{content.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Oportunidades de Mercado</h2>
          <MarketIntelligenceCard marketIntelligence={trilha.marketIntelligence} />
        </div>
      </section>
    </div>
  )
}
