import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">Азимут Клининг</h3>
                <p className="text-xs text-white/70">Барнаул</p>
              </div>
            </div>
            <p className="text-sm text-white/80 mb-4">
              Профессиональные услуги клининга для частных клиентов и организаций
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Icon name="Instagram" size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Icon name="Facebook" size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Icon name="Phone" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Уборка квартир
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Уборка офисов
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Генеральная уборка
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Химчистка мебели
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Мытье окон
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-accent transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-accent transition-colors">
                  Отзывы клиентов
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-accent transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-accent transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={18} className="mt-0.5 flex-shrink-0" />
                <span>г. Барнаул, ул. Ленина, д. 123</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={18} className="flex-shrink-0" />
                <a href="tel:+73852000000" className="hover:text-accent transition-colors">
                  +7 (3852) 00-00-00
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={18} className="flex-shrink-0" />
                <a
                  href="mailto:info@azimut-cleaning.ru"
                  className="hover:text-accent transition-colors"
                >
                  info@azimut-cleaning.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={18} className="flex-shrink-0" />
                <span>Пн-Вс: 8:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>© {currentYear} Азимут Клининг. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
