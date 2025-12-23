import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contacts = () => {
  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Адрес',
      info: 'г. Барнаул, ул. Ленина, д. 123',
      link: '#',
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      info: '+7 (3852) 00-00-00',
      link: 'tel:+73852000000',
    },
    {
      icon: 'Mail',
      title: 'Email',
      info: 'info@azimut-cleaning.ru',
      link: 'mailto:info@azimut-cleaning.ru',
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      info: 'Пн-Вс: 8:00 - 22:00',
      link: null,
    },
  ];

  const socials = [
    { icon: 'Instagram', name: 'Instagram', link: '#' },
    { icon: 'Facebook', name: 'Facebook', link: '#' },
    { icon: 'MessageCircle', name: 'WhatsApp', link: '#' },
    { icon: 'Send', name: 'Telegram', link: '#' },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-heading font-bold text-primary mb-6">
              Контакты
            </h1>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом или приезжайте в офис
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((contact, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all text-center hover-scale"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={contact.icon as any} className="text-accent" size={28} />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{contact.title}</h3>
                  {contact.link ? (
                    <a
                      href={contact.link}
                      className="text-primary hover:text-accent transition-colors"
                    >
                      {contact.info}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{contact.info}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-bold mb-6">
                    Оставьте заявку
                  </h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="ivan@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Услуга
                      </label>
                      <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                        <option>Выберите услугу</option>
                        <option>Уборка квартиры</option>
                        <option>Уборка офиса</option>
                        <option>Генеральная уборка</option>
                        <option>Химчистка мебели</option>
                        <option>Мытье окон</option>
                        <option>Уборка после ремонта</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Сообщение
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                        placeholder="Расскажите о ваших требованиях..."
                      />
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90"
                    >
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой
                      конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-heading font-bold mb-6">
                    Мы в социальных сетях
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socials.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg hover:bg-accent hover:text-white transition-all hover-scale"
                      >
                        <Icon name={social.icon as any} size={24} />
                        <span className="font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-heading font-bold mb-4">
                    Часто задаваемые вопросы
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        q: 'Сколько времени занимает уборка?',
                        a: 'В среднем 2-4 часа в зависимости от площади',
                      },
                      {
                        q: 'Нужно ли покупать средства для уборки?',
                        a: 'Нет, мы приезжаем со всем необходимым',
                      },
                      {
                        q: 'Можно ли заказать уборку на выходные?',
                        a: 'Да, мы работаем 7 дней в неделю',
                      },
                    ].map((faq, index) => (
                      <div key={index} className="pb-4 border-b last:border-0">
                        <h4 className="font-semibold mb-2">{faq.q}</h4>
                        <p className="text-sm text-muted-foreground">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-primary text-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-heading font-bold mb-4">
                    Срочная уборка?
                  </h3>
                  <p className="text-white/90 mb-6">
                    Звоните прямо сейчас, и мы приедем в течение 2 часов
                  </p>
                  <Button
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90"
                    asChild
                  >
                    <a href="tel:+73852000000">
                      <Icon name="Phone" className="mr-2" size={20} />
                      +7 (3852) 00-00-00
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-8">
            Как нас найти
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-muted rounded-2xl shadow-xl flex items-center justify-center">
              <div className="text-center">
                <Icon name="MapPin" className="text-accent mx-auto mb-4" size={48} />
                <p className="text-xl font-heading font-semibold text-primary mb-2">
                  г. Барнаул, ул. Ленина, д. 123
                </p>
                <p className="text-muted-foreground mb-4">
                  Рядом с центральным рынком
                </p>
                <Button variant="outline">Построить маршрут</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
