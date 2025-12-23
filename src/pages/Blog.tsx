import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const articles = [
    {
      category: 'Советы',
      title: 'Как часто нужно делать генеральную уборку квартиры',
      excerpt:
        'Рассказываем о периодичности генеральной уборки и факторах, которые на неё влияют.',
      date: '20 декабря 2024',
      readTime: '5 мин',
      image: 'https://cdn.poehali.dev/projects/fe52c4ba-95a3-44ae-9f37-a223f2c0a19f/files/500554ee-8fa5-427f-a731-3d45a657f7bf.jpg',
    },
    {
      category: 'Лайфхаки',
      title: 'Топ-10 средств для эффективной уборки дома',
      excerpt:
        'Подборка проверенных средств, которые сделают уборку быстрой и качественной.',
      date: '18 декабря 2024',
      readTime: '7 мин',
      image: 'https://cdn.poehali.dev/projects/fe52c4ba-95a3-44ae-9f37-a223f2c0a19f/files/9acb1946-fc6a-49a6-9c9d-67660ff76bcd.jpg',
    },
    {
      category: 'Гайды',
      title: 'Как подготовить квартиру к приходу клинеров',
      excerpt:
        'Простые шаги, которые помогут сделать работу клининговой компании максимально эффективной.',
      date: '15 декабря 2024',
      readTime: '4 мин',
      image: 'https://cdn.poehali.dev/projects/fe52c4ba-95a3-44ae-9f37-a223f2c0a19f/files/fa3ae8d9-54f0-48e0-bfc3-59a671d43279.jpg',
    },
    {
      category: 'Советы',
      title: 'Экологичные средства для уборки: за и против',
      excerpt:
        'Разбираемся, действительно ли экологичные средства безопаснее и эффективнее.',
      date: '12 декабря 2024',
      readTime: '6 мин',
      image: 'https://cdn.poehali.dev/projects/fe52c4ba-95a3-44ae-9f37-a223f2c0a19f/files/500554ee-8fa5-427f-a731-3d45a657f7bf.jpg',
    },
    {
      category: 'Лайфхаки',
      title: 'Как избавиться от пятен на мягкой мебели',
      excerpt:
        'Проверенные методы удаления различных типов пятен с диванов и кресел.',
      date: '10 декабря 2024',
      readTime: '5 мин',
      image: 'https://cdn.poehali.dev/projects/fe52c4ba-95a3-44ae-9f37-a223f2c0a19f/files/9acb1946-fc6a-49a6-9c9d-67660ff76bcd.jpg',
    },
    {
      category: 'Гайды',
      title: 'Уборка после ремонта: пошаговая инструкция',
      excerpt:
        'Подробное руководство по уборке помещения после строительных работ.',
      date: '8 декабря 2024',
      readTime: '8 мин',
      image: 'https://cdn.poehali.dev/projects/fe52c4ba-95a3-44ae-9f37-a223f2c0a19f/files/fa3ae8d9-54f0-48e0-bfc3-59a671d43279.jpg',
    },
  ];

  const categories = [
    { name: 'Все статьи', count: 24 },
    { name: 'Советы', count: 10 },
    { name: 'Лайфхаки', count: 8 },
    { name: 'Гайды', count: 6 },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-heading font-bold text-primary mb-6">
              Блог о клининге
            </h1>
            <p className="text-xl text-muted-foreground">
              Полезные советы, лайфхаки и рекомендации по уборке и уходу за домом
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <Card className="border-none shadow-lg sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold mb-4">Категории</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-accent/10 transition-colors flex justify-between items-center">
                          <span className="text-sm">{category.name}</span>
                          <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                            {category.count}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t">
                    <h3 className="font-heading font-semibold mb-4">
                      Подписка на новости
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Получайте полезные советы по уборке
                    </p>
                    <input
                      type="email"
                      placeholder="Ваш email"
                      className="w-full px-4 py-2 border border-border rounded-lg mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <Button size="sm" className="w-full bg-accent hover:bg-accent/90">
                      Подписаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>

            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article, index) => (
                  <Card
                    key={index}
                    className="border-none shadow-lg hover:shadow-xl transition-all overflow-hidden hover-scale"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-heading font-bold mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full group"
                      >
                        Читать далее
                        <Icon
                          name="ArrowRight"
                          size={16}
                          className="ml-2 group-hover:translate-x-1 transition-transform"
                        />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    <Icon name="ChevronLeft" size={16} />
                  </Button>
                  <Button size="sm" className="bg-accent hover:bg-accent/90">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="ChevronRight" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-primary text-center mb-8">
              Популярные темы
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Генеральная уборка',
                'Химчистка',
                'Мытье окон',
                'Уборка после ремонта',
                'Офисный клининг',
                'Экологичные средства',
                'Удаление пятен',
                'Дезинфекция',
                'Поддерживающая уборка',
              ].map((tag, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-white hover:bg-accent hover:text-white rounded-full text-sm font-medium transition-colors shadow"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Нужна профессиональная уборка?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Закажите услугу клининга и убедитесь в качестве нашей работы
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
            Оставить заявку
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
