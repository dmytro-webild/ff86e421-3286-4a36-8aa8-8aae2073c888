"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { Gauge, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumLargeSizeLargeTitles"
        background="noise"
        cardStyle="layered-gradient"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Главная",
          id: "hero",
        },
        {
          name: "О нас",
          id: "about",
        },
        {
          name: "Услуги",
          id: "features",
        },
        {
          name: "Продукты",
          id: "products",
        },
        {
          name: "Достижения",
          id: "metrics",
        },
        {
          name: "Контакты",
          id: "contact",
        },
      ]}
      brandName="Комбит Про"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      imagePosition="right"
      title="Комбит Про: Точность и Надежность в Измерении Уровней"
      description="Ваш эксперт в поставках, внедрении и обслуживании высокоточных радарных уровнемеров ЛИМАКО для самых сложных промышленных задач."
      testimonials={[
        {
          name: "Анна Сидорова",
          handle: "@AnnaS",
          testimonial: "«Комбит Про продемонстрировала исключительный профессионализм. Их уровнемеры изменили наш производственный процесс!»",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/successful-senior-businessman-standing-window_1262-3120.jpg",
          imageAlt: "Анна Сидорова",
        },
        {
          name: "Иван Петров",
          handle: "@IvanP",
          testimonial: "«Благодаря Комбит Про мы получили не только высококачественное оборудование, но и отличную поддержку на всех этапах.»",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-standing-inside-office-center_1303-22415.jpg",
          imageAlt: "Иван Петров",
        },
        {
          name: "Мария Козлова",
          handle: "@MariaK",
          testimonial: "«Решения Комбит Про по измерению сыпучих продуктов превзошли все наши ожидания по точности и надежности.»",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-solar-panel-manufacturing-facility-presents-green-energy-production_482257-118152.jpg",
          imageAlt: "Мария Козлова",
        },
        {
          name: "Дмитрий Смирнов",
          handle: "@DmitryS",
          testimonial: "«Техническое обслуживание от Комбит Про всегда на высоте. Быстро, качественно, эффективно.»",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/column-business-working-mobile-tie_1157-3667.jpg",
          imageAlt: "Дмитрий Смирнов",
        },
        {
          name: "Елена Волкова",
          handle: "@ElenaV",
          testimonial: "«Инновационные 3D-системы измерения – это будущее. Мы рады, что Комбит Про внедряет такие передовые технологии.»",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/analyst-conducts-research-into-global-economies-deliver-knowledge-company-advancements-finance-before-investing-capital-investor-prepares-simulations-studies-laws_482257-73482.jpg",
          imageAlt: "Елена Волкова",
        },
      ]}
      testimonialRotationInterval={5000}
      buttons={[
        {
          text: "Посмотреть решения",
          href: "#features",
        },
        {
          text: "Связаться",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/car-being-taking-care-workshop_23-2149580607.jpg",
          alt: "Инженер 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-worker-standing-beside-heavy-machinery-warehouse-facility-wearing-safety-glasses_482257-135639.jpg",
          alt: "Техник 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/conference-with-help-digital-tablet_329181-10287.jpg",
          alt: "Менеджер 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/confident-handsome-middle-aged-entrepreneur_1262-4871.jpg",
          alt: "Специалист 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-foreman-auto-mechanic-workshop-using-touchpad-looking-camera_637285-9410.jpg",
          alt: "Мастер цеха",
        },
      ]}
      avatarText="Присоединяйтесь к нашим довольным клиентам!"
      imageSrc="http://img.b2bpic.net/free-photo/air-force-officer-performing-tactical-level-surveillance-command-room_482257-100230.jpg"
      imageAlt="Радарный уровнемер в промышленном резервуаре"
      mediaAnimation="slide-up"
      fixedMediaHeight={true}
      marqueeItems={[
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/european-union-using-radar-system-detect-missiles-attacking-member-states_482257-89727.jpg",
          alt: "Радарная система ЕС",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/wonder-wheel-movement-red-lights-with-light-bulb_23-2148328065.jpg",
          alt: "Промышленное оборудование",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/digital-led-scoreboard-display_187299-47308.jpg",
          alt: "Цифровой дисплей",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/closeup-tower-viewer-ground-surrounded-by-cliffs-sea-cloudy-sky_181624-56288.jpg",
          alt: "Точная оптика",
        },
        {
          type: "text-icon",
          text: "Технологии будущего",
          icon: Sparkles,
        },
      ]}
      marqueeSpeed={40}
      showMarqueeCard={true}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="О компании"
      title="Комбит Про: Ваш эксперт в измерении уровней"
      description="Мы являемся ведущей дилерской организацией, специализирующейся на поставках и обслуживании высокоточных радарных уровнемеров компании ЛИМАКО. Предлагаем передовые решения для измерения уровней жидких и сыпучих продуктов в различных отраслях промышленности."
      subdescription="Наша команда экспертов обеспечивает полный цикл услуг: от подбора оборудования и проектирования до профессионального монтажа, пусконаладки и долгосрочного технического сопровождения. Мы гарантируем надежность, точность и бесперебойную работу вашего оборудования."
      icon={Gauge}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-engineer-using-tablet-design-solar-panels-factory-layouts_482257-126176.jpg"
      imageAlt="Индустриальная установка с радарными уровнемерами"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      carouselMode="buttons"
      features={[
        {
          title: "Коммерческое измерение уровней жидких продуктов",
          description: "Бесконтактное измерение в типовых конструкциях резервуаров: РВС, РВСП, РВСПК, ЖБР, РГС, а также в байпасных трубах технологических установок.",
          imageSrc: "http://img.b2bpic.net/free-vector/flat-design-food-manufacturing-illustration_23-2149477751.jpg",
          imageAlt: "Коммерческое измерение уровней жидкостей",
        },
        {
          title: "Технологическое измерение уровней жидкостей",
          description: "Бесконтактный контроль в различных технологических сосудах, вспомогательных емкостях, открытых и закрытых резервуарах, включая емкости под давлением.",
          imageSrc: "http://img.b2bpic.net/free-photo/airplane-cockpit-with-flying-command-control-panel-dashboard-navigation-engine-throttle-radar-compass-plane-cabin-with-windscreen-buttons-handle-close-up_482257-46831.jpg",
          imageAlt: "Технологическое измерение уровней жидкостей",
        },
        {
          title: "Измерение уровня сыпучих продуктов",
          description: "Контроль уровня сыпучих пищевых и непищевых продуктов в бункерах, силосах, хранилищах. Мониторинг просадок и смещений грунта.",
          imageSrc: "http://img.b2bpic.net/free-photo/wireless-television-antenna-sign-download_1172-230.jpg",
          imageAlt: "Измерение уровня сыпучих продуктов",
        },
        {
          title: "Инновационная многолучевая система 3D-измерения",
          description: "Высокоточная система для бесконтактного измерения 3D-уровня и объема сыпучих продуктов. Моделирование поверхности, расчет массы, контроль перемещений установок.",
          imageSrc: "http://img.b2bpic.net/free-photo/specialist-uses-device-inspect-solar-plant-machinery-closeup_482257-120431.jpg",
          imageAlt: "3D-система измерения уровня сыпучих продуктов",
        },
        {
          title: "Шефмонтаж и пусконаладка",
          description: "Полный комплекс услуг по профессиональному монтажу и вводу в эксплуатацию поставляемого оборудования, обеспечивая его бесперебойную работу.",
          imageSrc: "http://img.b2bpic.net/free-photo/technician-optimizing-energy-supply-solar-panel-manufacturing-plant_482257-120594.jpg",
          imageAlt: "Шефмонтаж и пусконаладка оборудования",
        },
        {
          title: "Гарантийное и постгарантийное обслуживание",
          description: "Полная поддержка на протяжении всего срока службы оборудования, включая техническое обслуживание, ремонт и поставку запасных частей.",
          imageSrc: "http://img.b2bpic.net/free-photo/industrial-worker-working-production-line-factory_342744-177.jpg",
          imageAlt: "Техническое обслуживание и ремонт",
        },
        {
          title: "Импортозамещение и разработка отечественных систем",
          description: "Участие в программах импортозамещения, предлагая аналоги импортного оборудования и содействуя в разработке отечественных систем, таких как многоточечные датчики температуры и системы объемно-массового учета по ГОСТ 8.587–2019.",
          imageSrc: "http://img.b2bpic.net/free-photo/logistics-means-transport-together-with-technological-futuristic-holograms_23-2151662916.jpg",
          imageAlt: "Импортозамещение в промышленных измерениях",
        },
      ]}
      title="Комплексные решения для точного измерения"
      description="От коммерческого учета до инновационных 3D-систем — мы предлагаем полный спектр услуг и высокотехнологичного оборудования."
      tag="Наши услуги"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      carouselMode="buttons"
      products={[
        {
          id: "p1",
          name: "Уровнемер для жидкостей ЛИМАКО",
          price: "По запросу",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-laboratory-samples_23-2151108832.jpg",
          imageAlt: "Стандартный радарный уровнемер для жидкостей",
        },
        {
          id: "p2",
          name: "Высокоточный уровнемер ЛИМАКО",
          price: "По запросу",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-laboratory-samples_23-2151108790.jpg",
          imageAlt: "Высокоточный радарный уровнемер",
        },
        {
          id: "p3",
          name: "Уровнемер для сыпучих продуктов ЛИМАКО",
          price: "По запросу",
          imageSrc: "http://img.b2bpic.net/free-photo/technologist-white-coat-with-laptop-his-hands-controls-production-process-dairy-shop-quality-control-dairy-plant_645730-797.jpg",
          imageAlt: "Радарный уровнемер для сыпучих продуктов",
        },
        {
          id: "p4",
          name: "3D-сканер уровня сыпучих продуктов",
          price: "По запросу",
          imageSrc: "http://img.b2bpic.net/free-photo/milk-bottle-with-funnel_23-2148356795.jpg",
          imageAlt: "3D-сканер для измерения уровня сыпучих",
        },
        {
          id: "p5",
          name: "Коррозионностойкий уровнемер",
          price: "По запросу",
          imageSrc: "http://img.b2bpic.net/free-photo/water-pump-pressure-switch-pump-controller-automatically-flow-electronic-switch_627829-7487.jpg",
          imageAlt: "Коррозионностойкий радарный уровнемер",
        },
        {
          id: "p6",
          name: "Взрывозащищенный уровнемер",
          price: "По запросу",
          imageSrc: "http://img.b2bpic.net/free-photo/emf-warning-sign-5g-tower-causing-radiation-blue-sky_181624-61555.jpg",
          imageAlt: "Взрывозащищенный радарный уровнемер",
        },
      ]}
      title="Радарные уровнемеры ЛИМАКО"
      description="Ознакомьтесь с нашей линейкой современных и высокоточных радарных уровнемеров, предназначенных для любых промышленных задач."
      tag="Продукция"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      carouselMode="buttons"
      metrics={[
        {
          id: "m1",
          value: "10+",
          description: "Лет успешной работы на рынке промышленного оборудования",
        },
        {
          id: "m2",
          value: "500+",
          description: "Успешно реализованных проектов по внедрению уровнемеров",
        },
        {
          id: "m3",
          value: "99.9%",
          description: "Точность измерений, подтвержденная нашими клиентами",
        },
        {
          id: "m4",
          value: "24/7",
          description: "Техническая поддержка и сервис для наших партнеров",
        },
      ]}
      title="Наши достижения и опыт"
      description="Многолетний опыт и успешные проекты подтверждают нашу экспертизу и приверженность качеству."
      tag="Надежность в цифрах"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "LIMACO",
        "Газпром",
        "Роснефть",
        "СИБУР",
        "Лукойл",
        "Северсталь",
        "Новатэк",
      ]}
      title="Ведущие компании выбирают Комбит Про"
      description="Гордимся сотрудничеством с лидерами нефтегазовой, химической и металлургической промышленности."
      tag="Доверяют нам"
      speed={40}
      showCard={false}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",
          title: "Что такое радарный уровнемер и как он работает?",
          content: "Радарный уровнемер — это прибор для бесконтактного измерения уровня жидкости или сыпучего продукта в резервуарах. Он излучает микроволновые импульсы, которые отражаются от поверхности продукта и возвращаются к датчику. Время прохождения импульса позволяет с высокой точностью определить расстояние до поверхности и, соответственно, уровень.",
        },
        {
          id: "faq2",
          title: "Какие преимущества у радарных уровнемеров ЛИМАКО?",
          content: "Уровнемеры ЛИМАКО отличаются высокой точностью, надежностью, устойчивостью к агрессивным средам, давлению, температуре и пыли. Они не требуют контакта с измеряемой средой, что исключает износ и загрязнение, и обеспечивают стабильные показания в сложных условиях эксплуатации.",
        },
        {
          id: "faq3",
          title: "Выполняете ли вы монтаж и пусконаладку оборудования?",
          content: "Да, Комбит Про предоставляет полный комплекс услуг по шефмонтажу и пусконаладке поставляемого оборудования. Наши квалифицированные специалисты обеспечат правильную установку, калибровку и запуск системы, гарантируя ее оптимальную работу.",
        },
        {
          id: "faq4",
          title: "Какие гарантии вы предоставляете?",
          content: "На все поставляемое оборудование предоставляется гарантия согласно условиям производителя. Мы также предлагаем постгарантийное техническое обслуживание, ремонт и поставку оригинальных запасных частей для обеспечения долгой и бесперебойной работы ваших систем.",
        },
        {
          id: "faq5",
          title: "Возможно ли импортозамещение с вашей помощью?",
          content: "Безусловно. Мы активно участвуем в программах импортозамещения, предлагая аналоги импортного оборудования и содействуя в разработке отечественных систем, таких как многоточечные датчики температуры и системы объемно-массового учета по ГОСТ 8.587–2019.",
        },
      ]}
      sideTitle="Часто задаваемые вопросы"
      sideDescription="Найдите ответы на самые популярные вопросы о наших услугах, оборудовании и технической поддержке."
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Свяжитесь с нами"
      title="Готовы обсудить ваш проект?"
      description="Наша команда экспертов готова ответить на все ваши вопросы и предложить оптимальные решения для ваших задач по измерению уровней."
      buttons={[
        {
          text: "Позвонить: +7 (499) 922-40-10",
          href: "tel:+74999224010",
        },
        {
          text: "Написать: info@kombit.ru",
          href: "mailto:info@kombit.ru",
        },
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Услуги",
          items: [
            {
              label: "Коммерческое измерение",
              href: "#features",
            },
            {
              label: "Технологическое измерение",
              href: "#features",
            },
            {
              label: "Измерение сыпучих",
              href: "#features",
            },
            {
              label: "3D-системы",
              href: "#features",
            },
            {
              label: "Шефмонтаж и ПНР",
              href: "#features",
            },
            {
              label: "Обслуживание",
              href: "#features",
            },
            {
              label: "Импортозамещение",
              href: "#features",
            },
          ],
        },
        {
          title: "Компания",
          items: [
            {
              label: "О нас",
              href: "#about",
            },
            {
              label: "Продукты",
              href: "#products",
            },
            {
              label: "Достижения",
              href: "#metrics",
            },
            {
              label: "Партнеры",
              href: "#social-proof",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
          ],
        },
        {
          title: "Контакты",
          items: [
            {
              label: "Адрес: Багратионовский пр., 7, корп. 20В",
              href: "#contact",
            },
            {
              label: "Телефон: +7 (499) 922-40-10",
              href: "tel:+74999224010",
            },
            {
              label: "Email: info@kombit.ru",
              href: "mailto:info@kombit.ru",
            },
            {
              label: "Время работы: Пн-Пт до 18:00",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="Комбит Про"
      copyrightText="© 2024 Комбит Про. Все права защищены."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
