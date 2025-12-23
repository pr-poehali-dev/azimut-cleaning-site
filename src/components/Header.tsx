import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Главная', path: '/' },
    { name: 'Услуги', path: '/services' },
    { name: 'О компании', path: '/about' },
    { name: 'Портфолио', path: '/portfolio' },
    { name: 'Отзывы', path: '/reviews' },
    { name: 'Блог', path: '/blog' },
    { name: 'Контакты', path: '/contacts' },
    { name: 'Калькулятор', path: '/calculator' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
              <Icon name="Sparkles" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-primary">
                Азимут Клининг
              </h1>
              <p className="text-xs text-muted-foreground">Барнаул</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-foreground/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+73852000000" className="text-sm font-semibold text-primary">
              +7 (3852) 00-00-00
            </a>
            <Button className="bg-accent hover:bg-accent/90">
              Заказать звонок
            </Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 animate-fade-in">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-foreground/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 space-y-3">
              <a
                href="tel:+73852000000"
                className="block text-sm font-semibold text-primary"
              >
                +7 (3852) 00-00-00
              </a>
              <Button className="w-full bg-accent hover:bg-accent/90">
                Заказать звонок
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;