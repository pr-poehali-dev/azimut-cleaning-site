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

interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  status: 'published' | 'draft';
}

const AdminBlog = () => {
  const [articles, setArticles] = useState<Article[]>([
    {
      id: '1',
      category: 'Советы',
      title: 'Как часто нужно делать генеральную уборку квартиры',
      excerpt:
        'Рассказываем о периодичности генеральной уборки и факторах, которые на неё влияют.',
      content: 'Полный текст статьи...',
      date: '20 декабря 2024',
      readTime: '5 мин',
      image: 'https://cdn.poehali.dev/projects/fe52c4ba-95a3-44ae-9f37-a223f2c0a19f/files/500554ee-8fa5-427f-a731-3d45a657f7bf.jpg',
      status: 'published',
    },
    {
      id: '2',
      category: 'Лайфхаки',
      title: 'Топ-10 средств для эффективной уборки дома',
      excerpt:
        'Подборка проверенных средств, которые сделают уборку быстрой и качественной.',
      content: 'Полный текст статьи...',
      date: '18 декабря 2024',
      readTime: '7 мин',
      image: 'https://cdn.poehali.dev/projects/fe52c4ba-95a3-44ae-9f37-a223f2c0a19f/files/9acb1946-fc6a-49a6-9c9d-67660ff76bcd.jpg',
      status: 'published',
    },
    {
      id: '3',
      category: 'Гайды',
      title: 'Новая статья о химчистке',
      excerpt: 'Черновик статьи...',
      content: '',
      date: '23 декабря 2024',
      readTime: '4 мин',
      image: 'https://cdn.poehali.dev/projects/fe52c4ba-95a3-44ae-9f37-a223f2c0a19f/files/fa3ae8d9-54f0-48e0-bfc3-59a671d43279.jpg',
      status: 'draft',
    },
  ]);

  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState<'all' | Article['status']>('all');

  const handleStatusChange = (id: string, status: Article['status']) => {
    setArticles(articles.map((a) => (a.id === id ? { ...a, status } : a)));
  };

  const handleDelete = (id: string) => {
    if (confirm('Удалить эту статью?')) {
      setArticles(articles.filter((a) => a.id !== id));
    }
  };

  const handleSave = (article: Article) => {
    if (editingArticle) {
      setArticles(articles.map((a) => (a.id === article.id ? article : a)));
    } else {
      setArticles([
        ...articles,
        {
          ...article,
          id: Date.now().toString(),
          date: new Date().toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }),
        },
      ]);
    }
    setIsDialogOpen(false);
    setEditingArticle(null);
  };

  const filteredArticles =
    filterStatus === 'all'
      ? articles
      : articles.filter((a) => a.status === filterStatus);

  const statusBadge = (status: Article['status']) => {
    const variants = {
      published: { label: 'Опубликовано', className: 'bg-green-100 text-green-700' },
      draft: { label: 'Черновик', className: 'bg-gray-100 text-gray-700' },
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
              Управление блогом
            </h1>
            <p className="text-muted-foreground">
              Создание и редактирование статей блога
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
                  onClick={() => setEditingArticle(null)}
                >
                  <Icon name="Plus" size={20} className="mr-2" />
                  Написать статью
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingArticle ? 'Редактировать' : 'Новая'} статья
                  </DialogTitle>
                </DialogHeader>
                <ArticleForm
                  article={editingArticle}
                  onSave={handleSave}
                  onCancel={() => {
                    setIsDialogOpen(false);
                    setEditingArticle(null);
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
            Все ({articles.length})
          </Button>
          <Button
            variant={filterStatus === 'published' ? 'default' : 'outline'}
            onClick={() => setFilterStatus('published')}
          >
            Опубликованные ({articles.filter((a) => a.status === 'published').length})
          </Button>
          <Button
            variant={filterStatus === 'draft' ? 'default' : 'outline'}
            onClick={() => setFilterStatus('draft')}
          >
            Черновики ({articles.filter((a) => a.status === 'draft').length})
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="border-none shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-white">{article.category}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  {statusBadge(article.status)}
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
                <div className="flex gap-2 pt-4 border-t">
                  {article.status === 'draft' && (
                    <Button
                      size="sm"
                      onClick={() => handleStatusChange(article.id, 'published')}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      <Icon name="Send" size={16} className="mr-1" />
                      Опубликовать
                    </Button>
                  )}
                  {article.status === 'published' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleStatusChange(article.id, 'draft')}
                      className="flex-1"
                    >
                      <Icon name="Archive" size={16} className="mr-1" />
                      В черновики
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setEditingArticle(article);
                      setIsDialogOpen(true);
                    }}
                  >
                    <Icon name="Edit" size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(article.id)}
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

const ArticleForm = ({
  article,
  onSave,
  onCancel,
}: {
  article: Article | null;
  onSave: (article: Article) => void;
  onCancel: () => void;
}) => {
  const [formData, setFormData] = useState<Article>(
    article || {
      id: '',
      category: 'Советы',
      title: '',
      excerpt: '',
      content: '',
      date: '',
      readTime: '5 мин',
      image: 'https://cdn.poehali.dev/projects/fe52c4ba-95a3-44ae-9f37-a223f2c0a19f/files/500554ee-8fa5-427f-a731-3d45a657f7bf.jpg',
      status: 'draft',
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const categories = ['Советы', 'Лайфхаки', 'Гайды'];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="category">Категория</Label>
        <select
          id="category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Label htmlFor="title">Заголовок статьи</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Как эффективно убрать квартиру"
          required
        />
      </div>

      <div>
        <Label htmlFor="excerpt">Краткое описание</Label>
        <Textarea
          id="excerpt"
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          placeholder="Краткое описание статьи для превью"
          rows={2}
          required
        />
      </div>

      <div>
        <Label htmlFor="content">Полный текст статьи</Label>
        <Textarea
          id="content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          placeholder="Полный текст статьи в формате Markdown"
          rows={10}
          required
        />
      </div>

      <div>
        <Label htmlFor="readTime">Время чтения</Label>
        <Input
          id="readTime"
          value={formData.readTime}
          onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
          placeholder="5 мин"
          required
        />
      </div>

      <div>
        <Label htmlFor="image">URL изображения</Label>
        <Input
          id="image"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          placeholder="https://..."
          required
        />
      </div>

      <div>
        <Label>Статус</Label>
        <div className="flex gap-4 mt-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="status"
              value="draft"
              checked={formData.status === 'draft'}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value as Article['status'],
                })
              }
            />
            <span>Черновик</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="status"
              value="published"
              checked={formData.status === 'published'}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value as Article['status'],
                })
              }
            />
            <span>Опубликовать</span>
          </label>
        </div>
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

export default AdminBlog;
