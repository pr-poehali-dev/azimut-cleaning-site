import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Reviews = () => {
  const reviews = [
    {
      name: 'Екатерина Смирнова',
      rating: 5,
      date: '15 декабря 2024',
      service: 'Генеральная уборка квартиры',
      text: 'Отличная работа! Ребята приехали вовремя, все сделали качественно и быстро. Квартира просто сияет. Особенно порадовала химчистка дивана - как новый стал. Буду заказывать еще!',
      avatar: 'E',
    },
    {
      name: 'Алексей Петров',
      rating: 5,
      date: '10 декабря 2024',
      service: 'Уборка офиса',
      text: 'Заказываем регулярную уборку офиса уже полгода. Всегда приезжают в одно и то же время, работают аккуратно и тихо, не мешают работе. Очень довольны сервисом!',
      avatar: 'А',
    },
    {
      name: 'Мария Иванова',
      rating: 5,
      date: '5 декабря 2024',
      service: 'Уборка после ремонта',
      text: 'После ремонта в квартире был полный кошмар. Спасибо огромное команде Азимут за спасение! Убрали всю строительную пыль, помыли окна и полы. Сделали все идеально!',
      avatar: 'М',
    },
    {
      name: 'Дмитрий Соколов',
      rating: 5,
      date: '28 ноября 2024',
      service: 'Мытье окон',
      text: 'Заказывал мытье окон в частном доме. Работали два специалиста, справились за 3 часа. Окна блестят, никаких разводов. Цена адекватная. Рекомендую!',
      avatar: 'Д',
    },
    {
      name: 'Светлана Новикова',
      rating: 5,
      date: '20 ноября 2024',
      service: 'Генеральная уборка',
      text: 'Заказывала генеральную уборку перед приездом родственников. Девочки молодцы, убрали все до блеска! Особенно понравилось, что используют безопасные средства. У меня маленький ребенок, это важно.',
      avatar: 'С',
    },
    {
      name: 'Игорь Волков',
      rating: 5,
      date: '15 ноября 2024',
      service: 'Химчистка мебели',
      text: 'Профессиональный подход! Почистили два дивана и ковер. Удалили все пятна, которые я уже считал безнадежными. Очень доволен результатом!',
      avatar: 'И',
    },
  ];

  const stats = [
    { icon: 'Star', number: '4.9', label: 'Средний рейтинг' },
    { icon: 'MessageCircle', number: '300+', label: 'Отзывов' },
    { icon: 'Users', number: '500+', label: 'Клиентов' },
    { icon: 'Award', number: '98%', label: 'Повторных заказов' },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-heading font-bold text-primary mb-6">
              Отзывы клиентов
            </h1>
            <p className="text-xl text-muted-foreground">
              Реальные отзывы наших клиентов о качестве услуг
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon as any} className="text-accent" size={28} />
                  </div>
                  <div className="text-4xl font-heading font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all hover-scale"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold mb-1">
                        {review.name}
                      </h3>
                      <div className="flex gap-1 mb-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            className="text-accent fill-accent"
                            size={16}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full">
                      {review.service}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {review.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-primary text-center mb-8">
              Оставьте свой отзыв
            </h2>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="ivan@example.com"
                      />
                    </div>
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
                      Оценка
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="hover:scale-110 transition-transform"
                        >
                          <Icon
                            name="Star"
                            className="text-muted hover:text-accent hover:fill-accent cursor-pointer"
                            size={28}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Ваш отзыв
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Расскажите о вашем опыте..."
                    />
                  </div>
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90">
                    Отправить отзыв
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Станьте нашим клиентом
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к сотням довольных клиентов
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
            Заказать уборку
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
