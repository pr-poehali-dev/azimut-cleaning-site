import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Все');

  const filters = ['Все', 'Квартиры', 'Офисы', 'После ремонта', 'Генеральная'];

  const projects = [
    {
      category: 'Квартиры',
      title: '3-комнатная квартира',
      area: '85 м²',
      type: 'Генеральная уборка',
      description: 'Комплексная уборка квартиры с химчисткой мебели',
      image: 'https://cdn.poehali.dev/projects/fe52c4ba-95a3-44ae-9f37-a223f2c0a19f/files/500554ee-8fa5-427f-a731-3d45a657f7bf.jpg',
    },
    {
      category: 'Офисы',
      title: 'Офис IT-компании',
      area: '120 м²',
      type: 'Поддерживающая уборка',
      description: 'Ежедневная уборка офисного пространства',
      image: 'https://cdn.poehali.dev/projects/fe52c4ba-95a3-44ae-9f37-a223f2c0a19f/files/fa3ae8d9-54f0-48e0-bfc3-59a671d43279.jpg',
    },
    {
      category: 'После ремонта',
      title: 'Коттедж после ремонта',
      area: '200 м²',
      type: 'Уборка после ремонта',
      description: 'Удаление строительной пыли и подготовка к заселению',
      image: 'https://cdn.poehali.dev/projects/fe52c4ba-95a3-44ae-9f37-a223f2c0a19f/files/9acb1946-fc6a-49a6-9c9d-67660ff76bcd.jpg',
    },
    {
      category: 'Квартиры',
      title: '2-комнатная квартира',
      area: '60 м²',
      type: 'Поддерживающая уборка',
      description: 'Регулярная уборка 2 раза в неделю',
      image: 'https://cdn.poehali.dev/projects/fe52c4ba-95a3-44ae-9f37-a223f2c0a19f/files/500554ee-8fa5-427f-a731-3d45a657f7bf.jpg',
    },
    {
      category: 'Офисы',
      title: 'Торговый центр',
      area: '500 м²',
      type: 'Комплексная уборка',
      description: 'Уборка торговых помещений и общих зон',
      image: 'https://cdn.poehali.dev/projects/fe52c4ba-95a3-44ae-9f37-a223f2c0a19f/files/fa3ae8d9-54f0-48e0-bfc3-59a671d43279.jpg',
    },
    {
      category: 'Генеральная',
      title: 'Загородный дом',
      area: '150 м²',
      type: 'Генеральная уборка',
      description: 'Глубокая уборка всех помещений дома',
      image: 'https://cdn.poehali.dev/projects/fe52c4ba-95a3-44ae-9f37-a223f2c0a19f/files/500554ee-8fa5-427f-a731-3d45a657f7bf.jpg',
    },
  ];

  const filteredProjects =
    activeFilter === 'Все'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-heading font-bold text-primary mb-6">
              Портфолио работ
            </h1>
            <p className="text-xl text-muted-foreground">
              Примеры наших выполненных проектов в Барнауле и области
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? 'default' : 'outline'}
                className={
                  activeFilter === filter
                    ? 'bg-accent hover:bg-accent/90'
                    : ''
                }
              >
                {filter}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all overflow-hidden hover-scale"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Home" size={16} />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Sparkles" size={16} />
                      <span>{project.type}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button variant="outline" className="w-full">
                    Подробнее
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
              Этапы работы
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  icon: 'Phone',
                  title: 'Заявка',
                  description: 'Оставляете заявку на сайте или по телефону',
                },
                {
                  step: '02',
                  icon: 'Calendar',
                  title: 'Согласование',
                  description: 'Согласовываем дату, время и стоимость',
                },
                {
                  step: '03',
                  icon: 'Users',
                  title: 'Выполнение',
                  description: 'Наша команда выполняет уборку',
                },
                {
                  step: '04',
                  icon: 'CheckCircle',
                  title: 'Приемка',
                  description: 'Принимаете работу и оплачиваете',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-4">
                    <div className="text-6xl font-heading font-bold text-accent/20">
                      {item.step}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Icon name={item.icon as any} className="text-white" size={28} />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Хотите так же?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Закажите уборку прямо сейчас и получите скидку 10% на первый заказ
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

export default Portfolio;
