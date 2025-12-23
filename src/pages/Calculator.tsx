import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Calculator = () => {
  const [serviceType, setServiceType] = useState('apartment');
  const [area, setArea] = useState([50]);
  const [cleaningType, setCleaningType] = useState('maintaining');
  const [rooms, setRooms] = useState([2]);
  const [bathrooms, setBathrooms] = useState([1]);
  const [additionalServices, setAdditionalServices] = useState<string[]>([]);

  const serviceTypes = [
    { id: 'apartment', name: 'Квартира', icon: 'Home', basePrice: 50 },
    { id: 'house', name: 'Дом', icon: 'Building2', basePrice: 60 },
    { id: 'office', name: 'Офис', icon: 'Briefcase', basePrice: 45 },
  ];

  const cleaningTypes = [
    { id: 'maintaining', name: 'Поддерживающая', multiplier: 1 },
    { id: 'general', name: 'Генеральная', multiplier: 1.5 },
    { id: 'afterRepair', name: 'После ремонта', multiplier: 2 },
  ];

  const additionalOptions = [
    { id: 'windows', name: 'Мытье окон', price: 800 },
    { id: 'furniture', name: 'Химчистка мебели', price: 1500 },
    { id: 'fridge', name: 'Мытье холодильника', price: 500 },
    { id: 'oven', name: 'Чистка духовки', price: 600 },
    { id: 'balcony', name: 'Уборка балкона', price: 400 },
    { id: 'ironing', name: 'Глажка белья', price: 300 },
  ];

  const toggleAdditionalService = (id: string) => {
    setAdditionalServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const calculatePrice = () => {
    const selectedService = serviceTypes.find((s) => s.id === serviceType);
    const selectedCleaning = cleaningTypes.find((c) => c.id === cleaningType);
    
    if (!selectedService || !selectedCleaning) return 0;

    let basePrice = selectedService.basePrice * area[0];
    basePrice *= selectedCleaning.multiplier;

    const roomsBonus = (rooms[0] - 1) * 200;
    const bathroomsBonus = (bathrooms[0] - 1) * 300;

    const additionalPrice = additionalServices.reduce((sum, id) => {
      const service = additionalOptions.find((s) => s.id === id);
      return sum + (service?.price || 0);
    }, 0);

    return Math.round(basePrice + roomsBonus + bathroomsBonus + additionalPrice);
  };

  const totalPrice = calculatePrice();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-heading font-bold text-primary mb-6">
                Калькулятор стоимости
              </h1>
              <p className="text-xl text-muted-foreground">
                Рассчитайте предварительную стоимость уборки онлайн
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-heading font-bold mb-6">
                      Тип помещения
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      {serviceTypes.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => setServiceType(service.id)}
                          className={`p-6 rounded-xl border-2 transition-all hover-scale ${
                            serviceType === service.id
                              ? 'border-accent bg-accent/5'
                              : 'border-border hover:border-accent/50'
                          }`}
                        >
                          <Icon
                            name={service.icon as any}
                            className={
                              serviceType === service.id
                                ? 'text-accent'
                                : 'text-muted-foreground'
                            }
                            size={32}
                          />
                          <p className="font-semibold mt-3">{service.name}</p>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-heading font-bold mb-6">
                      Тип уборки
                    </h3>
                    <div className="space-y-3">
                      {cleaningTypes.map((cleaning) => (
                        <button
                          key={cleaning.id}
                          onClick={() => setCleaningType(cleaning.id)}
                          className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                            cleaningType === cleaning.id
                              ? 'border-accent bg-accent/5'
                              : 'border-border hover:border-accent/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">{cleaning.name}</span>
                            <span className="text-sm text-muted-foreground">
                              x{cleaning.multiplier}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-heading font-bold mb-6">
                      Параметры помещения
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <Label className="text-base mb-3 block">
                          Площадь: <span className="font-bold">{area[0]} м²</span>
                        </Label>
                        <Slider
                          value={area}
                          onValueChange={setArea}
                          min={20}
                          max={200}
                          step={5}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label className="text-base mb-3 block">
                          Количество комнат:{' '}
                          <span className="font-bold">{rooms[0]}</span>
                        </Label>
                        <Slider
                          value={rooms}
                          onValueChange={setRooms}
                          min={1}
                          max={6}
                          step={1}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label className="text-base mb-3 block">
                          Санузлов:{' '}
                          <span className="font-bold">{bathrooms[0]}</span>
                        </Label>
                        <Slider
                          value={bathrooms}
                          onValueChange={setBathrooms}
                          min={1}
                          max={4}
                          step={1}
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-heading font-bold mb-6">
                      Дополнительные услуги
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {additionalOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => toggleAdditionalService(option.id)}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${
                            additionalServices.includes(option.id)
                              ? 'border-accent bg-accent/5'
                              : 'border-border hover:border-accent/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">
                              {option.name}
                            </span>
                            <span className="text-accent font-semibold text-sm">
                              +{option.price} ₽
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-1">
                <Card className="border-none shadow-xl sticky top-24 bg-primary text-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-heading font-bold mb-6">
                      Итоговая стоимость
                    </h3>
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/80">Базовая уборка</span>
                        <span>
                          {Math.round(
                            serviceTypes.find((s) => s.id === serviceType)
                              ?.basePrice! *
                              area[0] *
                              cleaningTypes.find((c) => c.id === cleaningType)
                                ?.multiplier!
                          )}{' '}
                          ₽
                        </span>
                      </div>
                      {rooms[0] > 1 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-white/80">
                            Комнаты (+{rooms[0] - 1})
                          </span>
                          <span>{(rooms[0] - 1) * 200} ₽</span>
                        </div>
                      )}
                      {bathrooms[0] > 1 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-white/80">
                            Санузлы (+{bathrooms[0] - 1})
                          </span>
                          <span>{(bathrooms[0] - 1) * 300} ₽</span>
                        </div>
                      )}
                      {additionalServices.map((id) => {
                        const service = additionalOptions.find((s) => s.id === id);
                        return (
                          <div key={id} className="flex justify-between text-sm">
                            <span className="text-white/80">{service?.name}</span>
                            <span>{service?.price} ₽</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="pt-6 border-t border-white/20">
                      <div className="text-5xl font-heading font-bold mb-6">
                        {totalPrice.toLocaleString()} ₽
                      </div>
                      <Button
                        size="lg"
                        className="w-full bg-accent hover:bg-accent/90 mb-3"
                      >
                        Заказать уборку
                      </Button>
                      <p className="text-xs text-white/70 text-center">
                        Точная цена будет уточнена после осмотра
                      </p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/20">
                      <div className="flex items-center gap-2 text-sm text-white/80 mb-3">
                        <Icon name="Info" size={16} />
                        <span>В стоимость входит:</span>
                      </div>
                      <ul className="space-y-2 text-sm text-white/90">
                        <li className="flex items-start gap-2">
                          <Icon
                            name="Check"
                            size={16}
                            className="mt-0.5 flex-shrink-0"
                          />
                          <span>Профессиональное оборудование</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon
                            name="Check"
                            size={16}
                            className="mt-0.5 flex-shrink-0"
                          />
                          <span>Все моющие средства</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon
                            name="Check"
                            size={16}
                            className="mt-0.5 flex-shrink-0"
                          />
                          <span>Работа опытной команды</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon
                            name="Check"
                            size={16}
                            className="mt-0.5 flex-shrink-0"
                          />
                          <span>Гарантия качества</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Calculator;
