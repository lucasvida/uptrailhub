"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Target, Briefcase, Brain, Code, X, Plus } from "lucide-react"
import { useRouter } from "next/navigation"

const technicalSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Java",
  "C#",
  "PHP",
  "Ruby",
  "Vue.js",
  "Angular",
  "HTML/CSS",
  "SQL",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "Git",
  "GraphQL",
  "REST APIs",
  "Machine Learning",
  "Data Science",
  "DevOps",
  "Figma",
  "Adobe Creative Suite",
]

const softSkills = [
  "Comunicação",
  "Liderança",
  "Trabalho em equipe",
  "Resolução de problemas",
  "Pensamento crítico",
  "Adaptabilidade",
  "Gestão de tempo",
  "Criatividade",
  "Negociação",
  "Apresentação",
  "Mentoria",
  "Gestão de projetos",
  "Inteligência emocional",
  "Networking",
  "Tomada de decisão",
]

export default function PerfilPage() {
  const router = useRouter()
  const [userData, setUserData] = useState<any>(null)
  const [formData, setFormData] = useState({
    technicalSkills: [] as string[],
    softSkills: [] as string[],
    careerGoals: "",
    salaryExpectation: "",
    jobType: "",
    workMode: "",
    experience: "",
    customTechnicalSkill: "",
    customSoftSkill: "",
  })

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData")
    if (storedUserData) {
      const user = JSON.parse(storedUserData)
      if (user.isAuthenticated) {
        setUserData(user)
        // Load existing profile data if available
        const profileData = localStorage.getItem("userProfile")
        if (profileData) {
          setFormData({ ...formData, ...JSON.parse(profileData) })
        }
      } else {
        router.push("/login")
      }
    } else {
      router.push("/login")
    }
  }, [])

  const handleSkillToggle = (skill: string, type: "technical" | "soft") => {
    const skillKey = type === "technical" ? "technicalSkills" : "softSkills"
    const currentSkills = formData[skillKey]

    if (currentSkills.includes(skill)) {
      setFormData({
        ...formData,
        [skillKey]: currentSkills.filter((s) => s !== skill),
      })
    } else {
      setFormData({
        ...formData,
        [skillKey]: [...currentSkills, skill],
      })
    }
  }

  const addCustomSkill = (type: "technical" | "soft") => {
    const customKey = type === "technical" ? "customTechnicalSkill" : "customSoftSkill"
    const skillKey = type === "technical" ? "technicalSkills" : "softSkills"
    const customSkill = formData[customKey].trim()

    if (customSkill && !formData[skillKey].includes(customSkill)) {
      setFormData({
        ...formData,
        [skillKey]: [...formData[skillKey], customSkill],
        [customKey]: "",
      })
    }
  }

  const removeSkill = (skill: string, type: "technical" | "soft") => {
    const skillKey = type === "technical" ? "technicalSkills" : "softSkills"
    setFormData({
      ...formData,
      [skillKey]: formData[skillKey].filter((s) => s !== skill),
    })
  }

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(formData))
    alert("Perfil salvo com sucesso! A plataforma agora pode gerar recomendações personalizadas.")
  }

  if (!userData) {
    return <div>Carregando...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Meu Perfil</h1>
            <p className="text-gray-600">
              Configure suas habilidades e objetivos para receber recomendações personalizadas
            </p>
          </div>

          <div className="grid gap-6">
            {/* Skills Técnicas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-emerald-600" />
                  <span>Habilidades Técnicas</span>
                </CardTitle>
                <CardDescription>Selecione suas habilidades técnicas atuais</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {technicalSkills.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox
                        id={`tech-${skill}`}
                        checked={formData.technicalSkills.includes(skill)}
                        onCheckedChange={() => handleSkillToggle(skill, "technical")}
                      />
                      <Label htmlFor={`tech-${skill}`} className="text-sm">
                        {skill}
                      </Label>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Input
                    placeholder="Adicionar habilidade personalizada"
                    value={formData.customTechnicalSkill}
                    onChange={(e) => setFormData({ ...formData, customTechnicalSkill: e.target.value })}
                    onKeyPress={(e) => e.key === "Enter" && addCustomSkill("technical")}
                  />
                  <Button onClick={() => addCustomSkill("technical")} size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                {formData.technicalSkills.length > 0 && (
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Habilidades Selecionadas:</Label>
                    <div className="flex flex-wrap gap-2">
                      {formData.technicalSkills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="flex items-center space-x-1">
                          <span>{skill}</span>
                          <X
                            className="w-3 h-3 cursor-pointer hover:text-red-500"
                            onClick={() => removeSkill(skill, "technical")}
                          />
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-emerald-600" />
                  <span>Soft Skills</span>
                </CardTitle>
                <CardDescription>Selecione suas habilidades comportamentais</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {softSkills.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox
                        id={`soft-${skill}`}
                        checked={formData.softSkills.includes(skill)}
                        onCheckedChange={() => handleSkillToggle(skill, "soft")}
                      />
                      <Label htmlFor={`soft-${skill}`} className="text-sm">
                        {skill}
                      </Label>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Input
                    placeholder="Adicionar soft skill personalizada"
                    value={formData.customSoftSkill}
                    onChange={(e) => setFormData({ ...formData, customSoftSkill: e.target.value })}
                    onKeyPress={(e) => e.key === "Enter" && addCustomSkill("soft")}
                  />
                  <Button onClick={() => addCustomSkill("soft")} size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                {formData.softSkills.length > 0 && (
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Soft Skills Selecionadas:</Label>
                    <div className="flex flex-wrap gap-2">
                      {formData.softSkills.map((skill) => (
                        <Badge key={skill} variant="outline" className="flex items-center space-x-1">
                          <span>{skill}</span>
                          <X
                            className="w-3 h-3 cursor-pointer hover:text-red-500"
                            onClick={() => removeSkill(skill, "soft")}
                          />
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Objetivos e Preferências */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    <span>Objetivos de Carreira</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="careerGoals">Descreva seus objetivos profissionais</Label>
                    <Textarea
                      id="careerGoals"
                      placeholder="Ex: Quero me tornar um desenvolvedor full-stack sênior em uma startup de tecnologia..."
                      value={formData.careerGoals}
                      onChange={(e) => setFormData({ ...formData, careerGoals: e.target.value })}
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="experience">Nível de Experiência</Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => setFormData({ ...formData, experience: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione seu nível" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Iniciante (0-2 anos)</SelectItem>
                        <SelectItem value="junior">Júnior (2-4 anos)</SelectItem>
                        <SelectItem value="mid">Pleno (4-7 anos)</SelectItem>
                        <SelectItem value="senior">Sênior (7+ anos)</SelectItem>
                        <SelectItem value="lead">Liderança/Gestão</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Briefcase className="w-5 h-5 text-emerald-600" />
                    <span>Preferências de Trabalho</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="jobType">Tipo de Emprego</Label>
                    <Select
                      value={formData.jobType}
                      onValueChange={(value) => setFormData({ ...formData, jobType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clt">CLT</SelectItem>
                        <SelectItem value="pj">PJ</SelectItem>
                        <SelectItem value="freelance">Freelance</SelectItem>
                        <SelectItem value="both">CLT ou PJ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="workMode">Modalidade de Trabalho</Label>
                    <Select
                      value={formData.workMode}
                      onValueChange={(value) => setFormData({ ...formData, workMode: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a modalidade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="remote">Remoto</SelectItem>
                        <SelectItem value="hybrid">Híbrido</SelectItem>
                        <SelectItem value="onsite">Presencial</SelectItem>
                        <SelectItem value="flexible">Flexível</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="salaryExpectation">Expectativa Salarial (R$)</Label>
                    <Input
                      id="salaryExpectation"
                      placeholder="Ex: 5000 - 8000"
                      value={formData.salaryExpectation}
                      onChange={(e) => setFormData({ ...formData, salaryExpectation: e.target.value })}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline" onClick={() => router.back()}>
                Cancelar
              </Button>
              <Button onClick={handleSave} className="bg-emerald-600 hover:bg-emerald-700">
                Salvar Perfil
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
