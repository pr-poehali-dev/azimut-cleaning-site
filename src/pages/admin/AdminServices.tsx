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

interface Service {
  id: string;
  icon: string;
  title: string;
  price: string;
  description: string;
  features: string[];
}

const AdminServices = () => {
  const [services, setServices] = useState<Service[]>([
    {
      id: '1',
      icon: 'Home',
      title: 'Уборка квартир',
      price: 'от 2500 ₽',
      description: 'Профессиональная уборка квартир любой площади',
      features: [
        'Влажная уборка всех поверхностей',
        'Уборка кухни и санузла',
        'Пылесос и мытье полов',
      ],
    },
    {
      id: '2',
      icon: 'Building2',
      title: 'Уборка офисов',
      price: 'от 1800 ₽',
      description: 'Поддерживающая и генеральная уборка офисных помещений',
      features: [
        'Ежедневная уборка',
        'Уборка рабочих мест',
        'Гибкий график',
      ],
    },
  ]);

  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSave = (service: Service) => {
    if (editingService) {
      setServices(services.map((s) => (s.id === service.id ? service : s)));
    } else {
      setServices([...services, { ...service, id: Date.now().toString() }]);
    }
    setIsDialogOpen(false);
    setEditingService(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Удалить эту услугу?')) {
      setServices(services.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-heading font-bold text-primary mb-2">
              Управление услугами
            </h1>
            <p className="text-muted-foreground">
              Редактирование услуг клининговой компании
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
                  onClick={() => setEditingService(null)}
                >
                  <Icon name="Plus" size={20} className="mr-2" />
                  Добавить услугу
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingService ? 'Редактировать' : 'Добавить'} услугу
                  </DialogTitle>
                </DialogHeader>
                <ServiceForm
                  service={editingService}
                  onSave={handleSave}
                  onCancel={() => {
                    setIsDialogOpen(false);
                    setEditingService(null);
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon
                      name={service.icon as any}
                      className="text-primary"
                      size={28}
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditingService(service);
                        setIsDialogOpen(true);
                      }}
                      className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                    >
                      <Icon name="Edit" className="text-accent" size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(service.id)}
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Icon name="Trash2" className="text-red-500" size={18} />
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">
                  {service.title}
                </h3>
                <div className="text-2xl font-bold text-accent mb-3">
                  {service.price}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Icon
                        name="Check"
                        className="text-accent flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceForm = ({
  service,
  onSave,
  onCancel,
}: {
  service: Service | null;
  onSave: (service: Service) => void;
  onCancel: () => void;
}) => {
  const [formData, setFormData] = useState<Service>(
    service || {
      id: '',
      icon: 'Home',
      title: '',
      price: '',
      description: '',
      features: ['', '', ''],
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ''] });
  };

  const removeFeature = (index: number) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index),
    });
  };

  const iconOptions = [
    'Home',
    'Building2',
    'Sparkles',
    'Sofa',
    'Droplets',
    'Wind',
    'Briefcase',
    'Wrench',
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label>Иконка</Label>
        <div className="grid grid-cols-4 gap-2 mt-2">
          {iconOptions.map((icon) => (
            <button
              key={icon}
              type="button"
              onClick={() => setFormData({ ...formData, icon })}
              className={`p-3 rounded-lg border-2 transition-all ${
                formData.icon === icon
                  ? 'border-accent bg-accent/5'
                  : 'border-border hover:border-accent/50'
              }`}
            >
              <Icon name={icon as any} size={24} />
            </button>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="title">Название услуги</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Уборка квартир"
          required
        />
      </div>

      <div>
        <Label htmlFor="price">Цена</Label>
        <Input
          id="price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          placeholder="от 2500 ₽"
          required
        />
      </div>

      <div>
        <Label htmlFor="description">Описание</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder="Краткое описание услуги"
          rows={3}
          required
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <Label>Особенности услуги</Label>
          <Button type="button" size="sm" variant="outline" onClick={addFeature}>
            <Icon name="Plus" size={16} className="mr-1" />
            Добавить
          </Button>
        </div>
        <div className="space-y-2">
          {formData.features.map((feature, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={feature}
                onChange={(e) => updateFeature(index, e.target.value)}
                placeholder={`Особенность ${index + 1}`}
              />
              {formData.features.length > 1 && (
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={() => removeFeature(index)}
                >
                  <Icon name="X" size={16} />
                </Button>
              )}
            </div>
          ))}
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

export default AdminServices;
