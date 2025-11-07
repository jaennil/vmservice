import React, { useState } from 'react';
import { Phone, Clock, MapPin, Star, Menu, X, Wrench, Settings, Gauge, Droplet } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const services = [
    {
      title: 'Замена масла автомобиля',
      description: 'Осуществляем замену масла и масляного фильтра',
      price: '1000 ₽',
      icon: <Droplet className="w-8 h-8" />
    },
    {
      title: 'Ремонт подвески',
      description: 'Ремонт подвески, замена рулевых наконечников',
      price: '1500 ₽',
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: 'Диагностика автомобиля',
      description: 'Проведём комплексную диагностику вашего авто',
      price: '2000 ₽',
      icon: <Gauge className="w-8 h-8" />
    },
    {
      title: 'Замена тормозных колодок',
      description: 'Произведём замену тормозных колодок на всех осях',
      price: '1500 ₽',
      icon: <Wrench className="w-8 h-8" />
    },
    {
      title: 'Шиномонтаж',
      description: 'Шиномонтаж, балансировка колёс',
      price: '1000 ₽',
      icon: <Settings className="w-8 h-8" />
    }
  ];

  const schedule = [
    { day: 'Понедельник', hours: '09:00–23:00' },
    { day: 'Вторник', hours: '09:00–23:00' },
    { day: 'Среда', hours: '09:00–23:00' },
    { day: 'Четверг', hours: '09:00–23:00' },
    { day: 'Пятница', hours: '09:00–23:00' },
    { day: 'Суббота', hours: '09:00–23:00' },
    { day: 'Воскресенье', hours: '09:00–23:00' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <title>VM Service</title>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-3xl font-bold">
                <span className="text-white">VM</span>
                <span className="text-red-500">SERVICE</span>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="hover:text-red-500 transition">Услуги</a>
              <a href="#about" onClick={(e) => smoothScroll(e, '#about')} className="hover:text-red-500 transition">О нас</a>
              <a href="#schedule" onClick={(e) => smoothScroll(e, '#schedule')} className="hover:text-red-500 transition">Режим работы</a>
              <a href="#contacts" onClick={(e) => smoothScroll(e, '#contacts')} className="hover:text-red-500 transition">Контакты</a>
            </nav>

            <a href="tel:+79251569473" className="hidden md:flex items-center space-x-2 bg-red-600 px-6 py-2 rounded-lg hover:bg-red-700 transition">
              <Phone className="w-5 h-5" />
              <span>+7 (925) 156-94-73</span>
            </a>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="block hover:text-red-500 transition">Услуги</a>
              <a href="#about" onClick={(e) => smoothScroll(e, '#about')} className="block hover:text-red-500 transition">О нас</a>
              <a href="#schedule" onClick={(e) => smoothScroll(e, '#schedule')} className="block hover:text-red-500 transition">Режим работы</a>
              <a href="#contacts" onClick={(e) => smoothScroll(e, '#contacts')} className="block hover:text-red-500 transition">Контакты</a>
              <a href="tel:+79251569473" className="flex items-center space-x-2 bg-red-600 px-4 py-2 rounded-lg w-full">
                <Phone className="w-5 h-5" />
                <span>+7 (925) 156-94-73</span>
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Профессиональный автосервис<br />
            <span className="text-red-500">VM SERVICE</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Качественный ремонт и обслуживание вашего автомобиля
          </p>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold">4,8</span>
            <span className="text-gray-300">(18 оценок)</span>
          </div>
          <a href="#contacts" onClick={(e) => smoothScroll(e, '#contacts')} className="inline-block bg-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition transform hover:scale-105">
            Записаться на ремонт
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition border border-gray-200">
                <div className="text-red-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">{service.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Шиномонтаж, переобувка, ремонт шин, балансировка колёс</h3>
            <p className="text-lg mb-6">Сезонная замена шин и профессиональная балансировка</p>
            <div className="text-3xl font-bold">от 1000 ₽</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">О нашем автосервисе</h2>
            <p className="text-lg text-gray-700 mb-6">
              VM Service — это современный автосервис с опытной командой мастеров и профессиональным оборудованием. 
              Мы предоставляем полный спектр услуг по ремонту и обслуживанию автомобилей.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Наши специалисты работают с автомобилями любых марок и моделей. Мы гарантируем качество выполненных работ 
              и используем только проверенные запчасти.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-red-600 mb-2">20+</div>
                <div className="text-gray-600">лет опыта</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-red-600 mb-2">1000+</div>
                <div className="text-gray-600">довольных клиентов</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-red-600 mb-2">4.8</div>
                <div className="text-gray-600">средняя оценка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Режим работы</h2>
          <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-12 h-12 text-red-600" />
            </div>
            {schedule.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                <span className="font-semibold text-gray-700">{item.day}</span>
                <span className="text-red-600 font-bold">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-gray-800 rounded-xl p-8 mb-6">
                <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <a href="tel:+79251569473" className="flex items-center space-x-3 hover:text-red-500 transition">
                    <Phone className="w-6 h-6" />
                    <span className="text-lg">+7 (925) 156-94-73</span>
                  </a>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Ежедневно</div>
                      <div className="text-gray-300">09:00 – 23:00</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                    <a href="https://yandex.ru/maps/-/CLvZRKnY" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">Московская область, городской округ Домодедово, деревня Бехтеево, Владимирская улица, 224</a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Запись на ремонт</h3>
                <p className="text-gray-300 mb-6">
                  Позвоните нам или оставьте заявку, и мы подберём удобное время для вашего визита.
                </p>
                <a href="tel:+79251569473" className="block w-full bg-red-600 text-center px-6 py-4 rounded-lg font-semibold hover:bg-red-700 transition">
                  Позвонить сейчас
                </a>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl overflow-hidden" style={{ height: '600px' }}>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A464f3fd867514f726a85f9dd728bd99fe177ba410536d033b90d1d98970b225c&amp;source=constructor"
                    width="500"
                    height="400"
                    frameBorder="0"
                    title="Яндекс Карты"
                    className="w-full h-full"
                />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="text-2xl font-bold">
              <span className="text-white">VM</span>
              <span className="text-red-500">SERVICE</span>
            </div>
          </div>
          <p className="text-gray-400">
            © 2025 VM Service. Профессиональный автосервис
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
