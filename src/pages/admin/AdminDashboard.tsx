import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Всего услуг',
      value: '12',
      icon: 'Sparkles',
      change: '+2 за месяц',
      trend: 'up',
    },
    {
      title: 'Отзывов',
      value: '300',
      icon: 'MessageCircle',
      change: '+15 за неделю',
      trend: 'up',
    },
    {
      title: 'Статей в блоге',
      value: '24',
      icon: 'FileText',
      change: '+3 за месяц',
      trend: 'up',
    },
    {
      title: 'Проектов',
      value: '45',
      icon: 'Briefcase',
      change: '+7 за месяц',
      trend: 'up',
    },
  ];

  const recentActivity = [
    {
      action: 'Добавлен новый отзыв',
      user: 'Екатерина Смирнова',
      time: '2 часа назад',
      icon: 'MessageCircle',
    },
    {
      action: 'Опубликована статья',
      user: 'Администратор',
      time: '5 часов назад',
      icon: 'FileText',
    },
    {
      action: 'Обновлена услуга',
      user: 'Менеджер',
      time: '1 день назад',
      icon: 'Sparkles',
    },
    {
      action: 'Добавлен проект в портфолио',
      user: 'Администратор',
      time: '2 дня назад',
      icon: 'Briefcase',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-heading font-bold text-primary mb-2">
              Панель управления
            </h1>
            <p className="text-muted-foreground">
              Управление контентом сайта Азимут Клининг
            </p>
          </div>
          <a
            href="/"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-all"
          >
            <Icon name="Home" size={20} />
            <span>На сайт</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name={stat.icon as any} className="text-accent" size={24} />
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      stat.trend === 'up'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <div className="text-3xl font-heading font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-heading">
                  Быстрые действия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <a href="/admin/services" className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl hover:shadow-md transition-all text-left group block">
                    <Icon
                      name="Plus"
                      className="text-accent mb-3 group-hover:scale-110 transition-transform"
                      size={28}
                    />
                    <h3 className="font-heading font-semibold mb-1">
                      Добавить услугу
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Создать новую услугу на сайте
                    </p>
                  </a>
                  <a href="/admin/blog" className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl hover:shadow-md transition-all text-left group block">
                    <Icon
                      name="FileText"
                      className="text-primary mb-3 group-hover:scale-110 transition-transform"
                      size={28}
                    />
                    <h3 className="font-heading font-semibold mb-1">
                      Написать статью
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Опубликовать новую статью в блоге
                    </p>
                  </a>
                  <a href="/admin/reviews" className="p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl hover:shadow-md transition-all text-left group block">
                    <Icon
                      name="MessageCircle"
                      className="text-green-600 mb-3 group-hover:scale-110 transition-transform"
                      size={28}
                    />
                    <h3 className="font-heading font-semibold mb-1">
                      Модерировать отзывы
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Проверить новые отзывы клиентов
                    </p>
                  </a>
                  <a href="/portfolio" className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-xl hover:shadow-md transition-all text-left group block">
                    <Icon
                      name="Image"
                      className="text-blue-600 mb-3 group-hover:scale-110 transition-transform"
                      size={28}
                    />
                    <h3 className="font-heading font-semibold mb-1">
                      Управление портфолио
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Посмотреть проекты на сайте
                    </p>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-heading">
                  Последняя активность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex gap-4 pb-4 border-b last:border-0"
                    >
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon
                          name={activity.icon as any}
                          className="text-accent"
                          size={20}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium mb-1">
                          {activity.action}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.user} • {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;