import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Shield" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">ФастГарант</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#career" className="text-muted-foreground hover:text-primary transition-colors">Карьера</a>
              <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
              <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/30 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Надежность в каждой <span className="text-primary">сделке</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Мы — сервис безопасных сделок, который выступает в роли третьей стороны между покупателем и продавцом, 
              обеспечивая полную защиту обеих сторон на всех этапах.
            </p>
            <Button size="lg" className="mr-4">
              Начать сделку
            </Button>
            <Button variant="outline" size="lg">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Сотрудничая с нами, вы получаете
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <Icon name="Eye" className="mx-auto text-primary mb-4" size={48} />
                <CardTitle>Полный контроль</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Полный контроль над сделкой на каждом этапе</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <Icon name="ShieldCheck" className="mx-auto text-primary mb-4" size={48} />
                <CardTitle>Защита от мошенничества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Надежная защита от любых видов мошенничества</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <Icon name="Vault" className="mx-auto text-primary mb-4" size={48} />
                <CardTitle>Сохранность активов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Сохранность активов до выполнения всех условий</p>
              </CardContent>
            </Card>
          </div>

          {/* Typical Transactions */}
          <div className="bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Типичные сделки</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Icon name="Home" className="text-primary" size={24} />
                <span>Купля-продажа недвижимости</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Car" className="text-primary" size={24} />
                <span>Автомобили и техника</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Building" className="text-primary" size={24} />
                <span>Сделки с бизнесом</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="FileText" className="text-primary" size={24} />
                <span>Ценные бумаги</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Scale" className="text-primary" size={24} />
                <span>Юридические процедуры</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Truck" className="text-primary" size={24} />
                <span>Перевозка документов</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section id="career" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Присоединяйтесь к ФастГарант
              </h2>
              <p className="text-lg text-muted-foreground">
                Мы активно расширяем команду. Работа в ФастГарант — это стабильный доход, 
                гибкий график и возможности карьерного роста.
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader className="bg-primary text-primary-foreground">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">🚚 Логистический агент (курьер-документовед)</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      от 5 000 ₽ за смену + премии и бонусы
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-white text-primary">
                    Средний доход: 100-200k ₽
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Форматы занятости:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <Icon name="Clock" size={16} />
                        <span>Полный день (5/2, 11:00-21:00)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Icon name="Calendar" size={16} />
                        <span>Частичная занятость (от 3 смен)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Icon name="Briefcase" size={16} />
                        <span>Подработка (по согласованию)</span>
                      </li>
                    </ul>

                    <h4 className="font-semibold text-lg mb-4 mt-6">Что предлагаем:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <Icon name="FileCheck" size={16} />
                        <span>Официальное оформление</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Icon name="GraduationCap" size={16} />
                        <span>Оплачиваемая стажировка</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Icon name="CreditCard" size={16} />
                        <span>Компенсация всех расходов</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-4">Обязанности:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Сопровождение ценных бумаг</li>
                      <li>• Контакт с клиентами</li>
                      <li>• Проверка документов</li>
                      <li>• Связь с координатором</li>
                      <li>• Контроль безопасности</li>
                    </ul>

                    <h4 className="font-semibold text-lg mb-4 mt-6">Требования:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Ответственность и пунктуальность</li>
                      <li>• Ориентация в городе</li>
                      <li>• Возраст от 18 лет</li>
                      <li>• Презентабельный вид</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-lg mb-4">📞 Этапы найма</h4>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                      <p className="text-sm">Персональный звонок</p>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                      <p className="text-sm">Краткий опрос</p>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                      <p className="text-sm">Передача контакта</p>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-2 font-bold">4</div>
                      <p className="text-sm">Консультация</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Button size="lg" className="mr-4">
                    Подать заявку
                  </Button>
                  <Button variant="outline" size="lg">
                    Узнать подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ❓ Частые вопросы
              </h2>
              <p className="text-lg text-muted-foreground">
                Ответы на самые популярные вопросы о работе и услугах
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Где проходят заказы?
                </AccordionTrigger>
                <AccordionContent>
                  В пределах МКАД (Москва) и КАД (Санкт-Петербург)
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Что делать, если что-то случится с документами?
                </AccordionTrigger>
                <AccordionContent>
                  Ситуации рассматриваются индивидуально. В случае ошибки по вине агента применяются штрафы, прописанные в договоре.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Можно узнать ИНН и данные компании?
                </AccordionTrigger>
                <AccordionContent>
                  Такая информация предоставляется только старшим менеджером после прохождения первичного этапа.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Кто генеральный директор?
                </AccordionTrigger>
                <AccordionContent>
                  Зиновьев Андрей Владимирович
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Почему мне позвонили?
                </AccordionTrigger>
                <AccordionContent>
                  Скорее всего, вы оставляли заявку на одном из сайтов по поиску работы (Авито, HeadHunter и т.д.). 
                  Отдел подбора работает по заявкам из открытых источников.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Icon name="Shield" className="text-primary" size={32} />
                <span className="text-2xl font-bold">ФастГарант</span>
              </div>
              <p className="text-gray-400 mb-4">
                Сервис безопасных сделок. Надежность, конфиденциальность и скорость.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  fastgarant.com
                </Button>
                <Button variant="outline" size="sm">
                  fb-consalt.com
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">География работы</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва (в пределах МКАД)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Санкт-Петербург (в пределах КАД)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Краснодар (главный офис)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Юридическая информация</h4>
              <div className="text-gray-400 space-y-2">
                <p>ФастГарант — проект под управлением ООО Финанс Бизнес Консалт</p>
                <div className="flex items-start space-x-2">
                  <Icon name="Building" size={16} className="mt-1 flex-shrink-0" />
                  <span>Головной офис: г. Краснодар, ул. Кирова 141</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 ФастГарант. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;