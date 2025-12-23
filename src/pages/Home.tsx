import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  const services = [
    {
      icon: 'Home',
      title: 'Уборка квартир',
      description: 'Комплексная уборка квартир любой площади с профессиональным оборудованием',
    },
    {
      icon: 'Building2',
      title: 'Уборка офисов',
      description: 'Поддерживающая и генеральная уборка офисных помещений',
    },
    {
      icon: 'Sparkles',
      title: 'Генеральная уборка',
      description: 'Глубокая уборка всех помещений с дезинфекцией',
    },
    {
      icon: 'Sofa',
      title: 'Химчистка мебели',
      description: 'Профессиональная химчистка мягкой мебели и ковров',
    },
    {
      icon: 'Droplets',
      title: 'Мытье окон',
      description: 'Качественное мытье окон на любой высоте',
    },
    {
      icon: 'Wind',
      title: 'Уборка после ремонта',
      description: 'Удаление строительной пыли и загрязнений',
    },
  ];

  const benefits = [
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Даем гарантию на все виды выполненных работ',
    },
    {
      icon: 'Clock',
      title: 'Пунктуальность',
      description: 'Работаем строго по графику, ценим ваше время',
    },
    {
      icon: 'Users',
      title: 'Опытный персонал',
      description: 'Команда профессионалов с опытом более 5 лет',
    },
    {
      icon: 'Wrench',
      title: 'Свое оборудование',
      description: 'Используем профессиональное оборудование и средства',
    },
  ];

  const stats = [
    { number: '500+', label: 'Довольных клиентов' },
    { number: '1500+', label: 'Выполненных заказов' },
    { number: '5 лет', label: 'Опыт работы' },
    { number: '24/7', label: 'Поддержка клиентов' },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
                Профессиональный клининг в Барнауле
              </h1>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Полный спектр услуг по уборке квартир, домов и офисов. Гарантия качества,
                опытная команда и современное оборудование.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
                  Заказать уборку
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Узнать цены
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Star" className="text-accent fill-accent" size={20} />
                  <span className="font-semibold">4.9/5</span>
                  <span>на основе 300+ отзывов</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/fe52c4ba-95a3-44ae-9f37-a223f2c0a19f/files/fa3ae8d9-54f0-48e0-bfc3-59a671d43279.jpg"
                alt="Профессиональная уборка"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Предоставляем полный спектр клининговых услуг для частных клиентов и организаций
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover-scale border-none shadow-lg hover:shadow-xl transition-all"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-accent font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Подробнее
                    <Icon name="ArrowRight" size={16} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/services">Все услуги</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/fe52c4ba-95a3-44ae-9f37-a223f2c0a19f/files/500554ee-8fa5-427f-a731-3d45a657f7bf.jpg"
                alt="Чистая квартира"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                Почему выбирают нас
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Мы создали сервис, которому доверяют сотни клиентов в Барнауле
              </p>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={benefit.icon as any} className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
                  <Link to="/about">О компании</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Готовы заказать уборку?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Оставьте заявку, и мы перезвоним вам в течение 15 минут
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-lg px-8"
            >
              Оставить заявку
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8"
              asChild
            >
              <a href="tel:+73852000000">Позвонить сейчас</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
