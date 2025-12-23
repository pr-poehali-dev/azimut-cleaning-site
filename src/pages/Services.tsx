import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    {
      icon: 'Home',
      title: 'Уборка квартир',
      price: 'от 2500 ₽',
      description: 'Профессиональная уборка квартир любой площади',
      features: [
        'Влажная уборка всех поверхностей',
        'Уборка кухни и санузла',
        'Пылесос и мытье полов',
        'Вынос мусора',
      ],
    },
    {
      icon: 'Building2',
      title: 'Уборка офисов',
      price: 'от 1800 ₽',
      description: 'Поддерживающая и генеральная уборка офисных помещений',
      features: [
        'Ежедневная поддерживающая уборка',
        'Уборка рабочих мест',
        'Санузлы и кухни',
        'Гибкий график работы',
      ],
    },
    {
      icon: 'Sparkles',
      title: 'Генеральная уборка',
      price: 'от 3500 ₽',
      description: 'Комплексная глубокая уборка всех помещений',
      features: [
        'Мытье всех поверхностей',
        'Уборка труднодоступных мест',
        'Чистка бытовой техники',
        'Дезинфекция помещений',
      ],
    },
    {
      icon: 'Sofa',
      title: 'Химчистка мебели',
      price: 'от 1500 ₽',
      description: 'Профессиональная химчистка мягкой мебели',
      features: [
        'Удаление пятен и загрязнений',
        'Устранение неприятных запахов',
        'Безопасные средства',
        'Быстрая сушка',
      ],
    },
    {
      icon: 'Droplets',
      title: 'Мытье окон',
      price: 'от 800 ₽',
      description: 'Качественное мытье окон на любой высоте',
      features: [
        'Внутренняя и наружная мойка',
        'Мытье рам и подоконников',
        'Без разводов',
        'Работа на высоте',
      ],
    },
    {
      icon: 'Wind',
      title: 'Уборка после ремонта',
      price: 'от 4000 ₽',
      description: 'Удаление строительной пыли и загрязнений',
      features: [
        'Удаление строительного мусора',
        'Мытье всех поверхностей',
        'Чистка окон и полов',
        'Полная готовность к заселению',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-heading font-bold text-primary mb-6">
              Наши услуги
            </h1>
            <p className="text-xl text-muted-foreground">
              Предоставляем полный спектр профессиональных клининговых услуг
              для частных клиентов и организаций
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all hover-scale"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-2">
                    {service.title}
                  </h3>
                  <div className="text-2xl font-bold text-accent mb-4">
                    {service.price}
                  </div>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon
                          name="Check"
                          className="text-accent flex-shrink-0 mt-0.5"
                          size={18}
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
              Дополнительные услуги
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: 'Refrigerator', name: 'Мытье холодильника', price: 'от 500 ₽' },
                { icon: 'Waves', name: 'Чистка духовки', price: 'от 600 ₽' },
                { icon: 'Shirt', name: 'Глажка белья', price: 'от 300 ₽' },
                { icon: 'Wind', name: 'Озонирование', price: 'от 800 ₽' },
                { icon: 'Home', name: 'Уборка балкона', price: 'от 400 ₽' },
                { icon: 'Sparkles', name: 'Мытье люстры', price: 'от 350 ₽' },
              ].map((service, index) => (
                <Card key={index} className="border-none shadow">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon name={service.icon as any} className="text-accent" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold">{service.name}</div>
                        <div className="text-sm text-muted-foreground">{service.price}</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Добавить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Нужна консультация?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Поможем подобрать оптимальный пакет услуг и рассчитаем стоимость
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
              Получить консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8"
              asChild
            >
              <a href="tel:+73852000000">+7 (3852) 00-00-00</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
