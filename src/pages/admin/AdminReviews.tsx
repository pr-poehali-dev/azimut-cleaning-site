import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  service: string;
  text: string;
  avatar: string;
  status: 'published' | 'pending' | 'rejected';
}

const AdminReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '1',
      name: 'Екатерина Смирнова',
      rating: 5,
      date: '15 декабря 2024',
      service: 'Генеральная уборка квартиры',
      text: 'Отличная работа! Ребята приехали вовремя, все сделали качественно и быстро.',
      avatar: 'Е',
      status: 'published',
    },
    {
      id: '2',
      name: 'Алексей Петров',
      rating: 5,
      date: '10 декабря 2024',
      service: 'Уборка офиса',
      text: 'Заказываем регулярную уборку офиса уже полгода. Очень довольны!',
      avatar: 'А',
      status: 'published',
    },
    {
      id: '3',
      name: 'Мария Иванова',
      rating: 4,
      date: '5 декабря 2024',
      service: 'Уборка после ремонта',
      text: 'Хорошо убрали, но хотелось бы чуть быстрее.',
      avatar: 'М',
      status: 'pending',
    },
  ]);

  const [editingReview, setEditingReview] = useState<Review | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState<'all' | Review['status']>('all');

  const handleStatusChange = (id: string, status: Review['status']) => {
    setReviews(reviews.map((r) => (r.id === id ? { ...r, status } : r)));
  };

  const handleDelete = (id: string) => {
    if (confirm('Удалить этот отзыв?')) {
      setReviews(reviews.filter((r) => r.id !== id));
    }
  };

  const handleSave = (review: Review) => {
    if (editingReview) {
      setReviews(reviews.map((r) => (r.id === review.id ? review : r)));
    } else {
      setReviews([
        ...reviews,
        { ...review, id: Date.now().toString(), status: 'published' },
      ]);
    }
    setIsDialogOpen(false);
    setEditingReview(null);
  };

  const filteredReviews =
    filterStatus === 'all'
      ? reviews
      : reviews.filter((r) => r.status === filterStatus);

  const statusBadge = (status: Review['status']) => {
    const variants = {
      published: { label: 'Опубликован', className: 'bg-green-100 text-green-700' },
      pending: { label: 'На модерации', className: 'bg-yellow-100 text-yellow-700' },
      rejected: { label: 'Отклонен', className: 'bg-red-100 text-red-700' },
    };
    const variant = variants[status];
    return (
      <Badge className={variant.className} variant="outline">
        {variant.label}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-heading font-bold text-primary mb-2">
              Управление отзывами
            </h1>
            <p className="text-muted-foreground">
              Модерация и редактирование отзывов клиентов
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/admin"
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-all"
            >
              <Icon name="ArrowLeft" size={20} />
              <span>Назад</span>
            </a>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  className="bg-accent hover:bg-accent/90"
                  onClick={() => setEditingReview(null)}
                >
                  <Icon name="Plus" size={20} className="mr-2" />
                  Добавить отзыв
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>
                    {editingReview ? 'Редактировать' : 'Добавить'} отзыв
                  </DialogTitle>
                </DialogHeader>
                <ReviewForm
                  review={editingReview}
                  onSave={handleSave}
                  onCancel={() => {
                    setIsDialogOpen(false);
                    setEditingReview(null);
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          <Button
            variant={filterStatus === 'all' ? 'default' : 'outline'}
            onClick={() => setFilterStatus('all')}
          >
            Все ({reviews.length})
          </Button>
          <Button
            variant={filterStatus === 'published' ? 'default' : 'outline'}
            onClick={() => setFilterStatus('published')}
          >
            Опубликованные ({reviews.filter((r) => r.status === 'published').length})
          </Button>
          <Button
            variant={filterStatus === 'pending' ? 'default' : 'outline'}
            onClick={() => setFilterStatus('pending')}
          >
            На модерации ({reviews.filter((r) => r.status === 'pending').length})
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <Card key={review.id} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {review.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{review.name}</h3>
                      <div className="flex gap-1 mb-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            className="text-accent fill-accent"
                            size={14}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-3">{statusBadge(review.status)}</div>

                <div className="mb-3">
                  <span className="inline-block bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>

                <p className="text-sm text-foreground/80 mb-4 line-clamp-3">
                  {review.text}
                </p>

                <div className="flex gap-2 pt-4 border-t">
                  {review.status !== 'published' && (
                    <Button
                      size="sm"
                      onClick={() => handleStatusChange(review.id, 'published')}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      <Icon name="Check" size={16} className="mr-1" />
                      Опубликовать
                    </Button>
                  )}
                  {review.status !== 'rejected' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleStatusChange(review.id, 'rejected')}
                      className="flex-1"
                    >
                      <Icon name="X" size={16} className="mr-1" />
                      Отклонить
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setEditingReview(review);
                      setIsDialogOpen(true);
                    }}
                  >
                    <Icon name="Edit" size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(review.id)}
                  >
                    <Icon name="Trash2" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const ReviewForm = ({
  review,
  onSave,
  onCancel,
}: {
  review: Review | null;
  onSave: (review: Review) => void;
  onCancel: () => void;
}) => {
  const [formData, setFormData] = useState<Review>(
    review || {
      id: '',
      name: '',
      rating: 5,
      date: new Date().toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      service: '',
      text: '',
      avatar: '',
      status: 'published',
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const avatar = formData.name.charAt(0).toUpperCase();
    onSave({ ...formData, avatar });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Имя клиента</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Иван Иванов"
          required
        />
      </div>

      <div>
        <Label>Оценка: {formData.rating} звезд</Label>
        <div className="flex gap-2 mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setFormData({ ...formData, rating: star })}
              className="hover:scale-110 transition-transform"
            >
              <Icon
                name="Star"
                className={
                  star <= formData.rating
                    ? 'text-accent fill-accent'
                    : 'text-muted'
                }
                size={28}
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="service">Услуга</Label>
        <Input
          id="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          placeholder="Генеральная уборка квартиры"
          required
        />
      </div>

      <div>
        <Label htmlFor="text">Текст отзыва</Label>
        <Textarea
          id="text"
          value={formData.text}
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          placeholder="Расскажите об опыте клиента..."
          rows={5}
          required
        />
      </div>

      <div className="flex gap-3 justify-end pt-4 border-t">
        <Button type="button" variant="outline" onClick={onCancel}>
          Отмена
        </Button>
        <Button type="submit" className="bg-accent hover:bg-accent/90">
          Сохранить
        </Button>
      </div>
    </form>
  );
};

export default AdminReviews;
