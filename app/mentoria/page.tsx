"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  MessageCircle,
  Search,
  Filter,
  MapPin,
  Briefcase,
  Calendar,
  Send,
  Phone,
  Video,
  Clock,
  Globe,
  Award,
  Bot,
  Zap,
  Brain,
  Sparkles,
  Crown,
  TrendingUp,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { Mentor } from "@/types/Mentoria"
import { mentorsData } from "@/lib/data"

type AIMentor = {
  id: string
  name: string
  description: string
  specialties: string[]
  features: string[]
  responseTime: string
  available: boolean
  avatar: string
}

const aiMentors: AIMentor[] = [
  {
    id: "ai-career-coach",
    name: "CareerBot Pro",
    description:
      "IA especializada em orientação de carreira e transições profissionais. Analisa seu perfil e sugere caminhos personalizados.",
    specialties: ["Orientação de Carreira", "Transição Profissional", "Análise de Perfil", "Planejamento de Estudos"],
    features: ["Disponível 24/7", "Respostas Instantâneas", "Análise de CV", "Sugestões Personalizadas"],
    responseTime: "Instantâneo",
    available: true,
    avatar: "/ai-robot-mentor-blue.png",
  },
  {
    id: "ai-tech-mentor",
    name: "TechMentor AI",
    description:
      "IA focada em tecnologia e desenvolvimento. Ajuda com dúvidas técnicas, roadmaps de estudo e preparação para entrevistas.",
    specialties: ["Desenvolvimento Web", "Programação", "Entrevistas Técnicas", "Roadmaps de Estudo"],
    features: ["Exercícios Práticos", "Code Review", "Mock Interviews", "Recursos Atualizados"],
    responseTime: "Instantâneo",
    available: true,
    avatar: "/ai-robot-coding.png",
  },
]

interface UserData {
  id: string
  email: string
  signature: "free" | "premium"
  isAuthenticated: boolean
  loginTime: string
}

export default function MentoriaPage() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null)
  const [selectedAIMentor, setSelectedAIMentor] = useState<AIMentor | null>(null)
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "user" | "mentor"; message: string; time: string }>>(
    [],
  )
  const [newMessage, setNewMessage] = useState("")
  const router = useRouter();

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData')
    if (storedUserData) {
      try {
        const user = JSON.parse(storedUserData)
        if (user.isAuthenticated) {
          setUserData(user)
        }
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error)
      }
    } else {
    }
  }, [])

  useEffect(() => {
    if ((selectedMentor || selectedAIMentor) && !userData) {
      const timer = setTimeout(() => {
        router.push("/login");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [selectedMentor, selectedAIMentor, userData, router]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || (!selectedMentor && !selectedAIMentor)) return

    const now = new Date()
    const time = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })

    setChatMessages([...chatMessages, { sender: "user", message: newMessage, time }])

    setTimeout(
      () => {
        let responses: string[]

        if (selectedAIMentor) {
          responses = [
            `Olá! Sou ${selectedAIMentor.name}, sua IA mentora especializada. Analisei sua mensagem e posso te ajudar com estratégias personalizadas. Vamos começar?`,
            `Excelente pergunta! Com base nos dados de mercado mais recentes e minha análise de ${selectedAIMentor.specialties.join(
              ", ",
            )}, posso te dar insights valiosos.`,
            `Entendo perfeitamente sua situação. Vou criar um plano personalizado baseado no seu perfil e objetivos. Que tal começarmos identificando seus pontos fortes?`,
            `Ótimo! Posso te ajudar com isso 24/7. Baseado em milhares de casos similares, aqui estão as melhores estratégias para sua situação...`,
          ]
        } else if (selectedMentor) {
          responses = [
            `Olá! Obrigado(a) pela mensagem. Vou analisar sua dúvida e te responder em breve. Como posso te ajudar hoje?`,
            `Ótima pergunta! Baseado na minha experiência de ${selectedMentor.experience}, posso te dar algumas dicas valiosas sobre isso.`,
            `Entendo sua situação. Já passei por algo similar no início da minha carreira. Vamos conversar sobre as melhores estratégias.`,
          ]
        } else {
          responses = ["Olá! Como posso te ajudar hoje?"]
        }

        const randomResponse = responses[Math.floor(Math.random() * responses.length)]

        setChatMessages((prev) => [
          ...prev,
          {
            sender: "mentor",
            message: randomResponse,
            time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
          },
        ])
      },
      selectedAIMentor ? 1000 : 2000,
    )

    setNewMessage("")
  }

  if (userData && (selectedMentor || selectedAIMentor)) { 
    const currentMentor = selectedMentor || selectedAIMentor
    const isAI = !!selectedAIMentor

    return (
      <div className="min-h-screen bg-background">

        {/* Chat Interface */}
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
            {/* Mentor Info Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-card border-0 h-full">
                <CardHeader className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={currentMentor?.avatar || "/placeholder.svg"} alt={currentMentor?.name} />
                    <AvatarFallback>
                      {isAI ? (
                        <Bot className="w-8 h-8" />
                      ) : (
                        currentMentor?.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                      )}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CardTitle className="text-lg">{currentMentor?.name}</CardTitle>
                    {isAI && <Bot className="w-5 h-5 text-primary" />}
                  </div>
                  <CardDescription>{isAI ? selectedAIMentor!.description : selectedMentor!.title}</CardDescription>
                  {!isAI && (
                    <div className="flex items-center justify-center gap-1 mt-2">
                      <Star className="w-4 h-4 fill-current text-yellow-500" />
                      <span className="text-sm font-medium">{selectedMentor!.rating}</span>
                      <span className="text-sm text-muted-foreground">({selectedMentor!.reviews})</span>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  {isAI ? (
                    <>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Zap className="w-4 h-4" />
                        {selectedAIMentor!.responseTime}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        Disponível 24/7
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Brain className="w-4 h-4" />
                        IA Especializada
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-semibold text-sm mb-2">Recursos</h4>
                        <div className="space-y-1">
                          {selectedAIMentor!.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Sparkles className="w-3 h-3" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        {selectedMentor!.company}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {selectedMentor!.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {selectedMentor!.experience} de experiência
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Globe className="w-4 h-4" />
                        {selectedMentor!.languages.join(", ")}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award className="w-4 h-4" />
                        {selectedMentor!.sessionsCompleted} sessões
                      </div>
                    </>
                  )}

                  <Separator />

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Especialidades</h4>
                    <div className="flex flex-wrap gap-1">
                      {currentMentor?.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {!isAI && (
                    <>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Tempo de Resposta</h4>
                        <p className="text-sm text-muted-foreground">{selectedMentor!.responseTime}</p>
                      </div>

                      <Separator />

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          <Phone className="w-4 h-4 mr-1" />
                          Ligar
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          <Video className="w-4 h-4 mr-1" />
                          Vídeo
                        </Button>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-3">
              <Card className="bg-card border-0 h-full flex flex-col">
                <CardHeader className="border-b border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        Chat com {currentMentor?.name}
                        {isAI && <Bot className="w-5 h-5 text-primary" />}
                      </CardTitle>
                      <CardDescription>
                        {isAI ? (
                          <span className="text-green-600">● Online - Resposta instantânea</span>
                        ) : selectedMentor!.available ? (
                          <span className="text-green-600">● Online agora</span>
                        ) : (
                          <span className="text-muted-foreground">
                            ● Offline - responde em {selectedMentor!.responseTime}
                          </span>
                        )}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{isAI ? "Gratuito" : selectedMentor!.price}</div>
                      <div className="text-xs text-muted-foreground">{isAI ? "Ilimitado" : "por sessão"}</div>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                  {chatMessages.length === 0 ? (
                    <div className="text-center text-muted-foreground py-8">
                      {isAI ? (
                        <Bot className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      ) : (
                        <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      )}
                      <p>Inicie uma conversa com {currentMentor?.name}</p>
                      <p className="text-sm">
                        {isAI
                          ? "Faça qualquer pergunta - estou aqui para te ajudar 24/7!"
                          : "Faça sua primeira pergunta ou apresente-se!"}
                      </p>
                      <div className="mt-4 p-3 bg-muted/50 rounded-lg text-left max-w-md mx-auto">
                        <p className="text-sm font-medium mb-1">Sugestões de conversa:</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {isAI ? (
                            <>
                              <li>• Analise meu perfil e sugira uma trilha de carreira</li>
                              <li>• Como me preparar para entrevistas técnicas?</li>
                              <li>• Crie um plano de estudos personalizado para mim</li>
                            </>
                          ) : (
                            <>
                              <li>• Como posso me preparar para uma entrevista técnica?</li>
                              <li>• Qual a melhor forma de estudar {selectedMentor!.specialties[0]}?</li>
                              <li>• Como foi sua transição de carreira?</li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    chatMessages.map((msg, index) => (
                      <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                          }`}
                        >
                          <p className="text-sm">{msg.message}</p>
                          <p
                            className={`text-xs mt-1 ${
                              msg.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                            }`}
                          >
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </CardContent>

                {/* Message Input */}
                <div className="border-t border-border p-4">
                  <div className="flex gap-2">
                    <Textarea
                      placeholder={isAI ? "Digite sua pergunta para a IA..." : "Digite sua mensagem..."}
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-1 min-h-[60px] resize-none"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault()
                          handleSendMessage()
                        }
                      }}
                    />
                    <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Pressione Enter para enviar, Shift+Enter para nova linha
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conecte-se com <span className="text-primary">Mentores Especialistas</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Acelere sua carreira com orientação personalizada de profissionais experientes e IA especializada disponível
            24/7
          </p>
        </div>
      </section>

      <section className="px-4 mb-12">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-muted/30 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Mentores Ativos</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
              <div className="text-muted-foreground">Avaliação Média</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">IA Disponível</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 mb-8">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Buscar mentores por especialidade, empresa..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Filter className="w-4 h-4" />
              Filtros
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue={userData?.signature === "free" ? "ai" : "human"} className="w-full">
          {(userData && userData.signature === "free") && (
                <Card className="mb-8 border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                        <Crown className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-purple-800 dark:text-purple-200">
                          🚀 Desbloqueie Mentores Especialistas!
                        </CardTitle>
                        <CardDescription className="text-purple-600 dark:text-purple-300">
                          Dê um upgrade no seu plano e tenha acesso a 5 mentorias especializadas mensais gratuitas
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-medium">5 sessões mensais gratuitas</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium">Mentores experientes</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-purple-600" />
                        <span className="text-sm font-medium">Agendamento flexível</span>
                      </div>
                    </div>
                    <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        <strong>Benefícios Premium:</strong> Acesso completo a mentores especialistas, sessões personalizadas, 
                        networking profissional e trilhas de carreira personalizadas com IA.
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-gray-500 line-through">R$ 39/mês</span>
                          <span className="text-lg font-bold text-green-600 ml-2">R$ 29/mês*</span>
                          <Badge className="ml-2 bg-red-100 text-red-800">30% OFF</Badge>
                        </div>
                        <Button className="bg-purple-600 hover:bg-purple-700">
                          <Crown className="w-4 h-4 mr-2" />
                          Fazer Upgrade
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger 
                value="human" 
                className="flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                Mentores Especializados
              </TabsTrigger>
              <TabsTrigger value="ai" className="flex items-center gap-2 cursor-pointer">
                <Bot className="w-4 h-4" />
                Mentoria com IA
              </TabsTrigger>
            </TabsList>

            <TabsContent value="human">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {mentorsData.map((mentor) => (
                  <Card key={mentor.id} className={`group hover:shadow-lg transition-all duration-300 border-0 bg-card relative`}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} />
                          <AvatarFallback>
                            {mentor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                {mentor.name}
                              </CardTitle>
                              <CardDescription className="text-sm">{mentor.title}</CardDescription>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 fill-current text-yellow-500" />
                                  <span className="text-sm font-medium">{mentor.rating}</span>
                                  <span className="text-sm text-muted-foreground">({mentor.reviews})</span>
                                </div>
                                <Badge
                                  variant={mentor.available ? "default" : "secondary"}
                                  className={mentor.available ? "bg-green-100 text-green-800" : ""}
                                >
                                  {mentor.available ? "Disponível" : "Ocupado"}
                                </Badge>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-primary">{mentor.price}</div>
                              <div className="text-xs text-muted-foreground">Responde em {mentor.responseTime}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Briefcase className="w-4 h-4" />
                          {mentor.company}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {mentor.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {mentor.experience} de experiência
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Award className="w-4 h-4" />
                          {mentor.sessionsCompleted} sessões realizadas
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground">{mentor.bio}</p>

                      <div className="flex flex-wrap gap-2">
                        {mentor.specialties.slice(0, 4).map((specialty) => (
                          <Badge key={specialty} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                        {mentor.specialties.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{mentor.specialties.length - 4}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button
                          className="flex-1 cursor-pointer"
                          onClick={() => setSelectedMentor(mentor)}
                          disabled={!mentor.available}
                        >                         
                          <MessageCircle className="w-4 h-4 mr-2" />
                          {mentor.available ? "Iniciar chat" : "Indisponível"}                        
                        </Button>
                        <Button 
                          className="cursor-pointer"
                          variant="outline" 
                          size="sm"
                        >
                          Ver Perfil
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ai">
              <div className="grid md:grid-cols-2 gap-6">
                {aiMentors.map((aiMentor) => (
                  <Card
                    key={aiMentor.id}
                    className="group hover:shadow-lg transition-all duration-300 border-0 bg-card relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-primary/20 to-transparent w-32 h-32 rounded-bl-full" />
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <Avatar className="w-16 h-16 border-2 border-primary/20">
                          <AvatarImage src={aiMentor.avatar || "/placeholder.svg"} alt={aiMentor.name} />
                          <AvatarFallback className="bg-primary/10">
                            <Bot className="w-8 h-8 text-primary" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg group-hover:text-primary transition-colors flex items-center gap-2">
                                {aiMentor.name}
                                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                  IA
                                </Badge>
                              </CardTitle>
                              <CardDescription className="text-sm mt-1">{aiMentor.description}</CardDescription>
                              <div className="flex items-center gap-2 mt-2">
                                <Badge variant="default" className="bg-green-100 text-green-800">
                                  Disponível 24/7
                                </Badge>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-primary">Gratuito</div>
                              <div className="text-xs text-muted-foreground">Resposta instantânea</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Zap className="w-4 h-4" />
                          Resposta instantânea
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Brain className="w-4 h-4" />
                          IA especializada em mentoria
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          Disponível 24 horas por dia
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">Recursos Especiais</h4>
                        <div className="space-y-1">
                          {aiMentor.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Sparkles className="w-3 h-3 text-primary" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {aiMentor.specialties.map((specialty) => (
                          <Badge key={specialty} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button className="flex-1" onClick={() => setSelectedAIMentor(aiMentor)}>
                          <Bot className="w-4 h-4 mr-2" />
                          Conversar com IA
                        </Button>
                        <Button variant="outline" size="sm">
                          Saiba Mais
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
