"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  BookOpen,
  Users,
  Clock,
  CheckCircle,
  Youtube,
  FileText,
  DollarSign,
  ArrowLeft,
  ExternalLink,
  Trophy,
  Target,
  Shuffle,
} from "lucide-react"
import { trilhasData } from "@/lib/data"

interface CompletedContent {
  [key: string]: boolean
}

interface CourseCompletion {
  [key: string]: boolean
}

export default function TrilhaProgressoPage({ params }: { params: { slug: string } }) {
  const [completedContent, setCompletedContent] = useState<CompletedContent>({})
  const [courseCompleted, setCourseCompleted] = useState(false)
  const [mounted, setMounted] = useState(false)

  const trilha = trilhasData[params.slug]

  useEffect(() => {
    setMounted(true)
    // Load progress from localStorage
    const savedProgress = localStorage.getItem(`trilha-progress-${params.slug}`)
    if (savedProgress) {
      setCompletedContent(JSON.parse(savedProgress))
    }

    const savedCompletion = localStorage.getItem(`trilha-completed-${params.slug}`)
    if (savedCompletion) {
      setCourseCompleted(JSON.parse(savedCompletion))
    }
  }, [params.slug])

  useEffect(() => {
    if (mounted) {
      // Save progress to localStorage
      localStorage.setItem(`trilha-progress-${params.slug}`, JSON.stringify(completedContent))
    }
  }, [completedContent, params.slug, mounted])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(`trilha-completed-${params.slug}`, JSON.stringify(courseCompleted))
    }
  }, [courseCompleted, params.slug, mounted])

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

  const totalContent = trilha.modules.reduce((total, module) => total + module.contents.length, 0)
  const completedCount = Object.values(completedContent).filter(Boolean).length
  const progressPercentage = totalContent > 0 ? Math.round((completedCount / totalContent) * 100) : 0

  const handleContentToggle = (contentId: string) => {
    setCompletedContent((prev) => ({
      ...prev,
      [contentId]: !prev[contentId],
    }))
  }

  const handleCourseCompletion = () => {
    setCourseCompleted(!courseCompleted)
  }

  const getAlternativeFreeContent = (contentId: string) => {
    // This would typically fetch from an API or database
    // For now, we'll return a mock alternative
    return {
      title: "Alternativa Gratuita - Introdução ao Conceito",
      platform: "YouTube",
      url: "https://youtube.com/watch?v=example",
      duration: "15 min",
      description: "Conteúdo gratuito equivalente disponível no YouTube",
    }
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

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-8 px-4 bg-muted/30 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <a href={`/trilhas/${params.slug}`}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </a>
            </Button>
          </div>

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
              </div>

              <h1 className="text-3xl font-bold text-foreground mb-4">{trilha.title}</h1>

              {/* Progress Section */}
              <Card className="mb-6">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        Seu Progresso
                      </CardTitle>
                      <CardDescription>
                        {completedCount} de {totalContent} conteúdos concluídos
                      </CardDescription>
                    </div>
                    {progressPercentage === 100 && (
                      <div className="flex items-center gap-2 text-green-600">
                        <Trophy className="w-5 h-5" />
                        <span className="font-semibold">Concluído!</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progresso</span>
                        <span className="font-medium">{progressPercentage}%</span>
                      </div>
                      <Progress value={progressPercentage} className="h-3" />
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t">
                      <Checkbox
                        checked={courseCompleted}
                        onCheckedChange={handleCourseCompletion}
                        className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                      />
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-yellow-600" />
                        <span
                          className={`font-medium ${courseCompleted ? "text-green-600 line-through" : "text-foreground"}`}
                        >
                          Marcar curso como concluído
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-card border-0">
                <CardHeader>
                  <CardTitle className="text-lg">Estatísticas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{completedCount}</div>
                      <div className="text-xs text-muted-foreground">Concluídos</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">{totalContent - completedCount}</div>
                      <div className="text-xs text-muted-foreground">Restantes</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Conteúdo da Trilha</h2>
            <p className="text-muted-foreground">Marque os conteúdos conforme for concluindo</p>
          </div>

          <div className="space-y-6">
            {trilha.modules.map((module, moduleIndex) => {
              const moduleCompleted = module.contents.every((content) => completedContent[content.id])
              const moduleProgress = module.contents.filter((content) => completedContent[content.id]).length

              return (
                <Card key={module.id} className="bg-card border-0">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            moduleCompleted ? "bg-green-100 text-green-700" : "bg-primary/10 text-primary"
                          }`}
                        >
                          {moduleCompleted ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <span className="text-sm font-medium">{moduleIndex + 1}</span>
                          )}
                        </div>
                        <div>
                          <CardTitle className="text-xl">{module.title}</CardTitle>
                          <CardDescription>{module.description}</CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">
                          {moduleProgress}/{module.contents.length}
                        </div>
                        <div className="text-xs text-muted-foreground">conteúdos</div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3">
                      {module.contents.map((content) => {
                        const isCompleted = completedContent[content.id]

                        return (
                          <div
                            key={content.id}
                            className={`flex items-center gap-4 p-4 rounded-lg border transition-colors ${
                              isCompleted
                                ? "bg-green-50 border-green-200"
                                : "bg-muted/30 border-muted hover:bg-muted/50"
                            }`}
                          >
                            <Checkbox
                              checked={isCompleted}
                              onCheckedChange={() => handleContentToggle(content.id)}
                              className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                            />

                            <div className="flex items-center gap-3 flex-1">
                              <div className="flex items-center gap-2 text-muted-foreground">
                                {getContentIcon(content.type)}
                                <span className={`text-sm font-medium ${getPlatformColor(content.platform)}`}>
                                  {content.platform}
                                </span>
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <h4
                                    className={`font-medium ${isCompleted ? "line-through text-muted-foreground" : "text-foreground"}`}
                                  >
                                    {content.title}
                                  </h4>
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

                              {!content.free && (
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button
                                        size="sm"
                                        variant="ghost"
                                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                        onClick={() => {
                                          const alternative = getAlternativeFreeContent(content.id)
                                          window.open(alternative.url, "_blank")
                                        }}
                                      >
                                        <Shuffle className="w-3 h-3 mr-1" />
                                        Gratuito
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>Alterar recomendação para conteúdo gratuito.</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              )}

                              <Button size="sm" variant="outline" asChild>
                                <a href={content.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                  Acessar
                                </a>
                              </Button>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
