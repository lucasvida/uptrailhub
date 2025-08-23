import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, MessageCircle, Star, Clock, TrendingUp } from "lucide-react"

export default function LearningHub() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">EduHub</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/trilhas" className="text-foreground hover:text-primary transition-colors font-medium">
              Trilhas
            </a>
            <a href="/mentoria" className="text-foreground hover:text-primary transition-colors font-medium">
              Mentoria
            </a>
            <a href="#comunidade" className="text-foreground hover:text-primary transition-colors font-medium">
              Comunidade
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Transforme sua Carreira com a <span className="text-primary">Educação</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Conectamos você a oportunidades reais de mercado com trilhas de aprendizado práticas e mentoria
            especializada.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 rounded-xl">
            <TrendingUp className="w-5 h-5 mr-2" />
            <a href="/trilhas">Explore nossas trilhas</a>
          </Button>

          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">89%</div>
              <div className="text-sm text-muted-foreground">Conseguem emprego em 6 meses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">+156%</div>
              <div className="text-sm text-muted-foreground">Aumento salarial médio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
              <div className="text-sm text-muted-foreground">Avaliação dos alunos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Tracks Section */}
      <section id="trilhas" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trilhas em Destaque</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha sua jornada de transformação profissional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Frontend Developer Track */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
              <a href="/trilhas/frontend-developer" className="block">
                <CardHeader className="pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
                    <img
                      src="/frontend-coding-screen.png"
                      alt="Desenvolvedor Frontend"
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                      Iniciante
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />6 meses
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Desenvolvedor Front-end Jr.
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Domine React, TypeScript e Next.js para criar interfaces modernas e responsivas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progresso</span>
                      <span className="font-medium text-primary">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        1.2k alunos
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="w-4 h-4 mr-1 fill-current text-yellow-500" />
                        4.8
                      </div>
                    </div>
                  </div>
                </CardContent>
              </a>
            </Card>

            {/* Data Science Track */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
              <a href="/trilhas/data-scientist" className="block">
                <CardHeader className="pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg mb-4 flex items-center justify-center">
                    <img
                      src="/data-science-analytics.png"
                      alt="Cientista de Dados"
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-0">
                      Intermediário
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />8 meses
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Cientista de Dados
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Aprenda Python, Machine Learning e análise de dados para tomar decisões estratégicas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progresso</span>
                      <span className="font-medium text-accent">32%</span>
                    </div>
                    <Progress value={32} className="h-2" />
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        856 alunos
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="w-4 h-4 mr-1 fill-current text-yellow-500" />
                        4.9
                      </div>
                    </div>
                  </div>
                </CardContent>
              </a>
            </Card>

            {/* UX/UI Design Track */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
              <a href="/trilhas/ux-ui-designer" className="block">
                <CardHeader className="pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
                    <img
                      src="/placeholder-l3tdo.png"
                      alt="Designer UX/UI"
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                      Iniciante
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />5 meses
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">Designer UX/UI</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Crie experiências digitais incríveis com Figma, prototipagem e pesquisa de usuário.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progresso</span>
                      <span className="font-medium text-primary">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        2.1k alunos
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="w-4 h-4 mr-1 fill-current text-yellow-500" />
                        4.7
                      </div>
                    </div>
                  </div>
                </CardContent>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section id="mentoria" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Conecte-se com Mentores</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Receba orientação de profissionais experientes em sua área de interesse. Nossa comunidade de mentores está
            pronta para acelerar sua jornada de aprendizado.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">500+ Mentores</h3>
              <p className="text-sm text-muted-foreground">Profissionais experientes de grandes empresas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Chat Direto</h3>
              <p className="text-sm text-muted-foreground">Converse diretamente com seu mentor</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Crescimento Real</h3>
              <p className="text-sm text-muted-foreground">89% dos mentorados conseguem nova posição</p>
            </div>
          </div>

          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 rounded-xl border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <a href="/mentoria">Encontre um Mentor</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
