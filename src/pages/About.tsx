import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: 'Target',
      title: 'Качество',
      description: 'Гарантируем высокое качество выполнения всех работ',
    },
    {
      icon: 'Heart',
      title: 'Забота',
      description: 'Относимся к вашему имуществу с максимальной заботой',
    },
    {
      icon: 'Clock',
      title: 'Пунктуальность',
      description: 'Всегда приезжаем вовремя и соблюдаем сроки',
    },
    {
      icon: 'Shield',
      title: 'Надежность',
      description: 'Застрахованы и несем ответственность за результат',
    },
  ];

  const team = [
    {
      name: 'Анна Петрова',
      role: 'Директор',
      experience: '10 лет в клининге',
    },
    {
      name: 'Мария Иванова',
      role: 'Старший менеджер',
      experience: '7 лет опыта',
    },
    {
      name: 'Елена Сидорова',
      role: 'Руководитель бригады',
      experience: '8 лет опыта',
    },
    {
      name: 'Ольга Козлова',
      role: 'Менеджер по работе с клиентами',
      experience: '5 лет опыта',
    },
  ];

  const achievements = [
    { number: '500+', label: 'Довольных клиентов' },
    { number: '1500+', label: 'Выполненных заказов' },
    { number: '5 лет', label: 'На рынке' },
    { number: '20+', label: 'Сотрудников' },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-heading font-bold text-primary mb-6">
              О компании
            </h1>
            <p className="text-xl text-muted-foreground">
              Мы создали клининговую компанию, которой доверяют сотни клиентов
              в Барнауле
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/fe52c4ba-95a3-44ae-9f37-a223f2c0a19f/files/fa3ae8d9-54f0-48e0-bfc3-59a671d43279.jpg"
                alt="Наша команда"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Наша история
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Компания "Азимут Клининг" начала свою работу в 2019 году с небольшой
                  команды энтузиастов, которые хотели изменить стандарты клининговых
                  услуг в Барнауле.
                </p>
                <p>
                  За пять лет мы выросли в надежную компанию с опытной командой из 20+
                  профессионалов. Мы обслужили более 500 клиентов и выполнили 1500+
                  заказов различной сложности.
                </p>
                <p>
                  Наша миссия — сделать ваш дом или офис чистым и комфортным, взяв на
                  себя все заботы о поддержании порядка. Мы используем только
                  профессиональное оборудование и экологичные средства, безопасные для
                  здоровья.
                </p>
                <p>
                  Сегодня "Азимут Клининг" — это команда, которой доверяют как частные
                  клиенты, так и крупные организации. Мы постоянно совершенствуем наши
                  услуги и следим за новейшими технологиями в сфере клининга.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
            Наши ценности
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all text-center hover-scale"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon as any} className="text-accent" size={28} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
            Наша команда
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all text-center"
              >
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" className="text-primary" size={40} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
              Почему клиенты выбирают нас
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: 'Award',
                  title: 'Сертифицированные специалисты',
                  text: 'Все наши сотрудники прошли профессиональное обучение',
                },
                {
                  icon: 'Wrench',
                  title: 'Профессиональное оборудование',
                  text: 'Используем современную технику от ведущих производителей',
                },
                {
                  icon: 'Leaf',
                  title: 'Экологичные средства',
                  text: 'Безопасные для здоровья и окружающей среды чистящие средства',
                },
                {
                  icon: 'FileText',
                  title: 'Официальный договор',
                  text: 'Работаем по договору с полной юридической защитой',
                },
                {
                  icon: 'Clock',
                  title: 'Гибкий график',
                  text: 'Работаем 7 дней в неделю в удобное для вас время',
                },
                {
                  icon: 'MessageCircle',
                  title: 'Поддержка 24/7',
                  text: 'Всегда на связи для решения любых вопросов',
                },
              ].map((item, index) => (
                <Card key={index} className="border-none shadow">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
