"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Settings, Bell, Moon, Sun, Globe, Shield } from "lucide-react"
import Link from "next/link"
import AuthGuard from "@/components/auth-guard"

export default function PreferenciasPage() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState("pt-BR")
  const [emailUpdates, setEmailUpdates] = useState(true)

  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        <header className="border-b bg-card">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center space-x-2">
                <Settings className="w-6 h-6 text-primary" />
                <h1 className="text-xl font-bold">Preferências</h1>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Notificações */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="w-5 h-5" />
                  <span>Notificações</span>
                </CardTitle>
                <CardDescription>
                  Gerencie suas notificações e alertas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Notificações push</Label>
                    <p className="text-sm text-muted-foreground">
                      Receba notificações sobre novos conteúdos e mentorias
                    </p>
                  </div>
                  <Switch
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Atualizações por email</Label>
                    <p className="text-sm text-muted-foreground">
                      Receba resumos semanais e novidades por email
                    </p>
                  </div>
                  <Switch
                    checked={emailUpdates}
                    onCheckedChange={setEmailUpdates}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Aparência */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                  <span>Aparência</span>
                </CardTitle>
                <CardDescription>
                  Personalize a aparência da plataforma
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Modo escuro</Label>
                    <p className="text-sm text-muted-foreground">
                      Ative o tema escuro para melhor experiência
                    </p>
                  </div>
                  <Switch
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Idioma */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Idioma</span>
                </CardTitle>
                <CardDescription>
                  Escolha o idioma da interface
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="language">Idioma preferido</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um idioma" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Privacidade */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>Privacidade</span>
                </CardTitle>
                <CardDescription>
                  Gerencie suas configurações de privacidade
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Perfil público</Label>
                    <p className="text-sm text-muted-foreground">
                      Permite que outros usuários vejam seu progresso
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Análise de dados</Label>
                    <p className="text-sm text-muted-foreground">
                      Ajude-nos a melhorar com dados anônimos
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            {/* Assinatura */}
            <Card>
              <CardHeader>
                <CardTitle>Assinatura</CardTitle>
                <CardDescription>
                  Gerencie sua assinatura e planos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Plano atual</p>
                    <Badge variant="secondary" className="mt-1">Free</Badge>
                  </div>
                  <Button variant="outline">
                    Upgrade para Premium
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end space-x-4">
              <Button>
                Salvar alterações
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
