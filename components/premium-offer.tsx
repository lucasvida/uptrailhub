import { Crown, TrendingUp, MessageCircle, Calendar, Footprints } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function PremiumOfferCard() {
    return(
        <Card className="mb-8 border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                        <Crown className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-purple-800 dark:text-purple-200">
                          🚀 Desbloqueie Seu Acesso!
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-4 gap-4">
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
                      <div className="flex items-center space-x-2">
                        <Footprints className="w-5 h-5 text-red-600" />
                        <span className="text-sm font-medium">Trilhas personalizadas</span>
                      </div>
                    </div>
                    <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        <strong>Benefícios Premium:</strong> Acesso completo a mentores especialistas, sessões personalizadas, mentorias avulsas com descontos,
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
    )

}