import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { TrendingUp, MapPin, Clock, Users, Briefcase, Target, Info } from "lucide-react"
import type { MarketOpportunity } from "@/lib/data"

interface MarketIntelligenceCardProps {
  marketIntelligence: {
    demandLevel: "alta" | "média" | "baixa"
    growthProjection: string
    averageHiringTime: string
    topHiringCompanies: string[]
    realOpportunities: MarketOpportunity[]
    skillsInDemand: string[]
    marketInsights: string[]
  }
}

export function MarketIntelligenceCard({ marketIntelligence }: MarketIntelligenceCardProps) {
  const getDemandColor = (level: string) => {
    switch (level) {
      case "alta":
        return "bg-green-100 text-green-800 border-green-200"
      case "média":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "baixa":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "alta":
        return "bg-red-500"
      case "média":
        return "bg-yellow-500"
      case "baixa":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Header com indicadores principais */}
        <Card className="border-l-4 border-l-emerald-500">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-emerald-600" />
                Inteligência de Mercado
              </CardTitle>
              <Badge className={getDemandColor(marketIntelligence.demandLevel)}>
                Demanda {marketIntelligence.demandLevel}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Crescimento</p>
                  <p className="font-semibold">{marketIntelligence.growthProjection}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Tempo médio de contratação</p>
                  <p className="font-semibold">{marketIntelligence.averageHiringTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-emerald-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Empresas contratando</p>
                  <p className="font-semibold">{marketIntelligence.topHiringCompanies.length}+ empresas</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Oportunidades reais */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-emerald-600" />
              Oportunidades Reais Disponíveis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {marketIntelligence.realOpportunities.map((opportunity, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-4 hover:bg-muted/50 transition-colors ${
                    index >= 2 ? "blur-sm opacity-70" : ""
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold">{opportunity.position}</h4>
                      <p className="text-sm text-muted-foreground">{opportunity.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {opportunity.location}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {opportunity.type}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {opportunity.applicants} candidatos
                    </div>
                    <span className="text-xs">{opportunity.postedDays}d atrás</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {opportunity.requirements.slice(0, 3).map((req, reqIndex) => (
                        <Badge key={reqIndex} variant="secondary" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                      {opportunity.requirements.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{opportunity.requirements.length - 3}
                        </Badge>
                      )}
                    </div>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-1 cursor-help">
                          <p className="font-semibold text-emerald-600">{opportunity.salary}</p>
                          <Info className="h-3 w-3 text-muted-foreground" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm">
                          Esses valores são uma média das últimas vagas ofertadas
                          <br />
                          R$ 6.500 - R$ 8.500
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              ))}
              {marketIntelligence.realOpportunities.length > 2 && (
                <div className="text-center text-sm text-muted-foreground pt-2">
                  +{marketIntelligence.realOpportunities.length - 2} oportunidades adicionais disponíveis
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Skills em demanda */}
        <Card>
          <CardHeader>
            <CardTitle>Skills Mais Procuradas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {marketIntelligence.skillsInDemand.map((skill, index) => (
                <Badge key={index} variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Insights do mercado */}
        <Card>
          <CardHeader>
            <CardTitle>Insights do Mercado</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {marketIntelligence.marketInsights.map((insight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <p className="text-sm">{insight}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Empresas que mais contratam */}
        <Card>
          <CardHeader>
            <CardTitle>Empresas que Mais Contratam</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {marketIntelligence.topHiringCompanies.map((company, index) => (
                <Badge key={index} variant="outline" className="justify-center py-2">
                  {company}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  )
}
