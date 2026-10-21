// Content for the expanding detail sheets. Each entry: shared meta + ru/en copy.
window.DETAILS = {
  'pose-library': {
    name: 'Pose Library', version: '3.0', accent: '#9b6bff', pro: true,
    image: 'assets/img/work/pose-promo.webp',
    gallery: ['assets/img/work/pose-window.webp', 'assets/img/work/pose-poses.webp', 'assets/img/work/pose-install.webp', 'assets/img/work/pose-tutorial.webp'],
    links: [{ href: 'https://t.me/Malik_anim', icon: 'tg', primary: true, ru: 'Узнать о релизе', en: 'Get notified' }],
    ru: {
      kind: 'Плагин · Moho Pro 14.4', status: 'PRO · скоро в продаже',
      short: 'Позы персонажа — в один клик.',
      desc: ['Библиотека поз в родном плавающем окне Moho. Сохраняйте позы с фото-превью, ищите их по названию, раскладывайте по категориям и применяйте одним щелчком — на любом кадре, полностью или частично.', 'Плагин работает самостоятельно, а вместе с Rig Controllers открывается прямо с его панели.'],
      meta: [['Платформа', 'Moho Pro 14.4 · Windows'], ['Версия', '3.0'], ['Лицензия', 'Платная'], ['Видео', 'Скоро на YouTube']],
      features: [['Карточки с фото', 'Превью каждой позы создаётся автоматически'], ['Поиск и категории', 'Жесты, эмоции, движение, избранное'], ['Сила применения', '25 / 50 / 100% или своё значение'], ['Только выделенное', 'Поза применяется к выбранным костям'], ['Две кнопки в Tools', 'Открыть библиотеку и сохранить позу кадра'], ['Перенос библиотек', 'Позы Pose Library 2.x и Rig Controllers 1.5 — без потерь'], ['Горячие клавиши', 'Назначаются в Edit → Keyboard Shortcuts'], ['Связка с Rig Controllers', 'Кнопка «Позы» открывает окно библиотеки']],
      stepsTitle: 'Установка за минуту',
      steps: ['Распакуйте архив (Свойства → «Разблокировать», если есть)', 'Moho: Scripts → Install Script…', 'Выберите папку scripts из архива', 'Подтвердите замену файлов — «Да»', 'Перезапустите Moho: Tools → Other → Pose Library'],
    },
    en: {
      kind: 'Plugin · Moho Pro 14.4', status: 'PRO · on sale soon',
      short: 'Character poses — in one click.',
      desc: ['A pose library inside a native floating Moho window. Save poses with thumbnails, search them by name, sort them into categories and apply with one click — on any frame, fully or partially.', 'Works on its own, and opens straight from the Rig Controllers panel when both are installed.'],
      meta: [['Platform', 'Moho Pro 14.4 · Windows'], ['Version', '3.0'], ['License', 'Paid'], ['Video', 'Coming to YouTube']],
      features: [['Visual cards', 'Every pose gets an automatic thumbnail'], ['Search & categories', 'Gestures, emotions, motion, favourites'], ['Blend strength', '25 / 50 / 100% or a custom value'], ['Only selected', 'Apply a pose to chosen bones'], ['Two Tools buttons', 'Open the library and save the current pose'], ['Library migration', 'Pose Library 2.x and Rig Controllers 1.5 poses, lossless'], ['Hotkeys', 'Assign them in Edit → Keyboard Shortcuts'], ['Works with Rig Controllers', 'The «Poses» button opens the library']],
      stepsTitle: 'Install in a minute',
      steps: ['Unpack the archive (Properties → «Unblock» if present)', 'Moho: Scripts → Install Script…', 'Pick the scripts folder from the archive', 'Confirm replacing files — «Yes»', 'Restart Moho: Tools → Other → Pose Library'],
    },
  },

  'rig-controllers': {
    name: 'Rig Controllers', version: '2.0', accent: '#ffb547', pro: true,
    image: 'assets/img/work/rig-promo.webp',
    gallery: ['assets/img/work/rig-flow.webp', 'assets/img/work/rig-face.webp', 'assets/img/work/rig-moho.webp', 'assets/img/work/rig-tutorial.webp'],
    links: [{ href: 'https://t.me/Malik_anim', icon: 'tg', primary: true, ru: 'Узнать о релизе', en: 'Get notified' }],
    ru: {
      kind: 'Плагин · Moho Pro 14.4', status: 'PRO · скоро в продаже',
      short: 'Один жест. Две оси.',
      desc: ['XY-джойстики и ползунки прямо поверх костного слоя. Контроллер двигает кости-драйверы, а они запускают Smart Bone Actions: поворот головы, эмоции, моргание и рот задаются одним движением на холсте.', 'Ключи пишутся в обычные каналы и видны на Timeline — никакой магии, только быстрая анимация.'],
      meta: [['Платформа', 'Moho Pro 14.4 · Windows'], ['Версия', '2.0'], ['Лицензия', 'Платная'], ['Видео', 'Скоро на YouTube']],
      features: [['Джойстики и ползунки', 'XY, горизонтальные и вертикальные'], ['Smart Bone Actions', 'Action X+ / X− / Y+ / Y− из меню'], ['Точность и привязка', 'Shift — 15 %, Ctrl — к 0 / ±50 / ±100 %'], ['Диагональные коррекции', 'Правка смешанных поз для XY'], ['Бережно к ригу', 'Del никогда не удаляет кости, один Undo на жест'], ['Быстро на больших ригах', 'Кэш настроек, оверлей не мешает воспроизведению'], ['Связка с Pose Library', 'Кнопка «Позы» открывает библиотеку'], ['Примеры в комплекте', 'Готовые технические риги для изучения']],
      stepsTitle: 'Как это работает',
      steps: ['Кадр 0, Mainline: выберите костный слой → «Новый»', 'Smart Bones → Action X+ … — поставьте позу на последнем кадре', 'Кадры 1+: тяните ромб — ключи пишутся сами'],
    },
    en: {
      kind: 'Plugin · Moho Pro 14.4', status: 'PRO · on sale soon',
      short: 'One gesture. Two axes.',
      desc: ['XY joysticks and sliders drawn right over the bone layer. A controller moves driver bones, which trigger Smart Bone Actions: head turns, emotions, blinks and mouth shapes in a single move on the canvas.', 'Keys go into regular channels and show on the Timeline — no magic, just fast animation.'],
      meta: [['Platform', 'Moho Pro 14.4 · Windows'], ['Version', '2.0'], ['License', 'Paid'], ['Video', 'Coming to YouTube']],
      features: [['Joysticks & sliders', 'XY, horizontal and vertical'], ['Smart Bone Actions', 'Action X+ / X− / Y+ / Y− from the menu'], ['Precision & snapping', 'Shift — 15 %, Ctrl — to 0 / ±50 / ±100 %'], ['Diagonal corrections', 'Fix blended poses on XY'], ['Safe for your rig', 'Del never deletes bones, one Undo per gesture'], ['Fast on big rigs', 'Cached settings, no overlay during playback'], ['Works with Pose Library', 'The «Poses» button opens the library'], ['Example rigs included', 'Technical rigs to learn from']],
      stepsTitle: 'How it works',
      steps: ['Frame 0, Mainline: pick the bone layer → «New»', 'Smart Bones → Action X+ … — pose the last frame', 'Frames 1+: drag the handle — keys are written for you'],
    },
  },

  'show-all-layers': {
    name: 'Show All Layers', version: '1.0', accent: '#2fe0a6',
    links: [
      { href: 'https://github.com/Maxi000001/Show-All-Layers-Moho/archive/refs/heads/main.zip', icon: 'download', primary: true, ru: 'Скачать бесплатно', en: 'Download free' },
      { href: 'https://github.com/Maxi000001/Show-All-Layers-Moho', icon: 'github', ru: 'GitHub', en: 'GitHub' },
    ],
    ru: {
      kind: 'Скрипт · Moho · Lua', status: 'Бесплатно · open source',
      short: 'Все скрытые слои — одним щелчком.',
      desc: ['Утилита для Moho, которая мгновенно показывает все скрытые слои во всём проекте. Незаменима в сложных ригах и больших сценах, где управлять видимостью вручную утомительно.', 'Сканирует слои рекурсивно и не тормозит программу.'],
      meta: [['Программа', 'Moho 13.5+'], ['Язык', 'Lua'], ['Версия', '1.0.0'], ['Лицензия', 'Бесплатно']],
      features: [['Один клик', 'Переключение видимости всех слоёв'], ['Рекурсивно', 'Проходит все группы и вложенные слои'], ['Для Moho 13.5+', 'Оптимизировано под новые версии'], ['Без нагрузки', 'Не влияет на производительность']],
    },
    en: {
      kind: 'Script · Moho · Lua', status: 'Free · open source',
      short: 'Every hidden layer — in one click.',
      desc: ['A Moho utility that instantly reveals every hidden layer across the whole project. Essential for complex rigs and large scenes where managing visibility by hand gets tedious.', 'Scans recursively without slowing the app down.'],
      meta: [['App', 'Moho 13.5+'], ['Language', 'Lua'], ['Version', '1.0.0'], ['License', 'Free']],
      features: [['One click', 'Toggle visibility of all layers'], ['Recursive', 'Walks every group and nested layer'], ['Moho 13.5+', 'Optimised for recent versions'], ['Zero overhead', 'No performance impact']],
    },
  },

  'magic-bone': {
    name: 'Magic Bone', version: '1.0', accent: '#ff9a3c',
    links: [
      { href: 'https://github.com/Maxi000001/Magic-Bone-Blender/archive/refs/heads/main.zip', icon: 'download', primary: true, ru: 'Скачать бесплатно', en: 'Download free' },
      { href: 'https://github.com/Maxi000001/Magic-Bone-Blender', icon: 'github', ru: 'GitHub', en: 'GitHub' },
    ],
    ru: {
      kind: 'Аддон · Blender · Python', status: 'Бесплатно · open source',
      short: 'Кости прямо из геометрии.',
      desc: ['Инструмент для быстрого риггинга в Blender: генерирует кости прямо из геометрии меша с математической точностью.', 'Автоматизирует рутинное создание арматуры, вычисляет точные нормали и экономит часы на выравнивании костей.'],
      meta: [['Программа', 'Blender'], ['Язык', 'Python'], ['Версия', '1.0.0'], ['Лицензия', 'Бесплатно']],
      features: [['Кости по нормалям', 'Направление берётся из геометрии'], ['По мировым осям', 'Ровные кости по X / Y / Z'], ['Между двумя вершинами', 'Точное размещение одной кости'], ['Математическая точность', 'Без ручной подгонки']],
    },
    en: {
      kind: 'Add-on · Blender · Python', status: 'Free · open source',
      short: 'Bones straight from geometry.',
      desc: ['A rapid-rigging tool for Blender that generates bones directly from mesh geometry with mathematical precision.', 'It automates routine armature setup, computes exact normals and saves hours of bone alignment.'],
      meta: [['App', 'Blender'], ['Language', 'Python'], ['Version', '1.0.0'], ['License', 'Free']],
      features: [['Bones from normals', 'Direction taken from geometry'], ['By world axis', 'Clean bones along X / Y / Z'], ['Between 2 vertices', 'Exact single-bone placement'], ['Mathematical precision', 'No manual tweaking']],
    },
  },

  'piano-rig-pro': {
    name: 'Piano Rig Pro', version: '0.14', accent: '#ff9a3c', video: 'HVE_EVkQ3ec',
    image: 'https://i.ytimg.com/vi/HVE_EVkQ3ec/hqdefault.jpg',
    links: [
      { href: 'https://github.com/Maxi000001/Piano-Rig-Pro-Blender/releases/download/v1.0/Piano.Rig.Pro.v.0.14.zip', icon: 'download', primary: true, ru: 'Скачать · 151 MB', en: 'Download · 151 MB' },
      { href: 'https://youtu.be/HVE_EVkQ3ec', icon: 'youtube', ru: 'Урок', en: 'Tutorial' },
      { href: 'https://github.com/Maxi000001/Piano-Rig-Pro-Blender', icon: 'github', ru: 'GitHub', en: 'GitHub' },
    ],
    ru: {
      kind: 'Аддон · Blender · Python', status: 'Бесплатно · open source',
      short: 'Риг пианино — в один клик.',
      desc: ['Комплексное решение для Blender, которое полностью автоматизирует создание скелета и настройку механики пианино.', 'Вся рутина с костями и ограничениями — одной кнопкой, чтобы вы сосредоточились на анимации.'],
      meta: [['Программа', 'Blender'], ['Язык', 'Python'], ['Версия', '0.14'], ['Лицензия', 'Бесплатно']],
      features: [['Мгновенный авто-риг', 'Скелет пианино за секунды'], ['Математическая точность', 'Клавиши стоят идеально ровно'], ['Готовые ограничения', 'Constraints уже настроены'], ['Реалистичная механика', 'Правильный отклик клавиш'], ['Панель в N-меню', 'Всё управление в одном месте'], ['Визуальный контроль', 'Наглядная настройка рига']],
    },
    en: {
      kind: 'Add-on · Blender · Python', status: 'Free · open source',
      short: 'A piano rig — in one click.',
      desc: ['A complete Blender solution that fully automates building the skeleton and setting up piano mechanics.', 'All the bone and constraint routine in one button, so you can focus on animation.'],
      meta: [['App', 'Blender'], ['Language', 'Python'], ['Version', '0.14'], ['License', 'Free']],
      features: [['Instant auto-rig', 'A piano skeleton in seconds'], ['Mathematical precision', 'Perfectly aligned keys'], ['Pre-configured constraints', 'Ready out of the box'], ['Realistic mechanics', 'Correct key response'], ['N-panel UI', 'All controls in one place'], ['Visual control', 'Clear rig setup']],
    },
  },

  'mrm-metrics': {
    name: 'MRM Metrics Pro', version: '1.0', accent: '#ff9a3c', video: 'jzIKiHBdppc',
    image: 'https://i.ytimg.com/vi/jzIKiHBdppc/hqdefault.jpg',
    links: [
      { href: 'https://github.com/Maxi000001/MRM-Metrics-Blender/archive/refs/heads/main.zip', icon: 'download', primary: true, ru: 'Скачать бесплатно', en: 'Download free' },
      { href: 'https://youtu.be/jzIKiHBdppc', icon: 'youtube', ru: 'Урок', en: 'Tutorial' },
      { href: 'https://github.com/Maxi000001/MRM-Metrics-Blender', icon: 'github', ru: 'GitHub', en: 'GitHub' },
    ],
    ru: {
      kind: 'Аддон · Blender · Python', status: 'Бесплатно · open source',
      short: 'Полный контроль над пропорциями.',
      desc: ['Профессиональный аналитический инструмент для Blender: расстояния, углы и диаметры прямо во вьюпорте.', 'Вместо громоздких стандартных измерителей — чистая, понятная и мгновенная визуальная обратная связь.'],
      meta: [['Программа', 'Blender'], ['Язык', 'Python'], ['Версия', '1.0.0'], ['Лицензия', 'Бесплатно']],
      features: [['Точные инструменты', 'Расстояние, угол, диаметр'], ['HUD в реальном времени', 'Значения прямо в 3D-вьюпорте'], ['Свой стиль', 'Настраиваемые цвета и вид'], ['Чистое рабочее место', 'Переключатель в N-панели']],
    },
    en: {
      kind: 'Add-on · Blender · Python', status: 'Free · open source',
      short: 'Absolute control over proportions.',
      desc: ['A professional analysis tool for Blender: distances, angles and diameters right in the viewport.', 'Instead of cluttered default measuring tools — clean, intuitive, instant visual feedback.'],
      meta: [['App', 'Blender'], ['Language', 'Python'], ['Version', '1.0.0'], ['License', 'Free']],
      features: [['Precision tools', 'Distance, angle, diameter'], ['Real-time HUD', 'Values right in the 3D viewport'], ['Custom look', 'Configurable colours and style'], ['Clean workspace', 'N-panel toggle']],
    },
  },

  'prisma': {
    name: 'Prisma', version: '1.0', accent: '#2fe0a6', keys: ['G', 'R', 'S'],
    links: [
      { href: 'https://github.com/Maxi000001/prisma-desktop/releases/download/v1.0.0/Prisma_Setup_v1.0.0.exe', icon: 'download', primary: true, ru: 'Скачать · 113 MB', en: 'Download · 113 MB' },
      { href: 'https://maxi000001.github.io/prisma-desktop/', icon: 'site', ru: 'Сайт и планы', en: 'Website & roadmap' },
      { href: 'https://github.com/Maxi000001/prisma-desktop', icon: 'github', ru: 'GitHub', en: 'GitHub' },
    ],
    ru: {
      kind: 'Приложение · Windows', status: 'Релиз · v1.0.0',
      short: 'Бесконечный холст и доска референсов.',
      desc: ['Быстрый локальный бесконечный холст для художников и дизайнеров — надёжная альтернатива Miro и PureRef.', 'Минималистичный интерфейс и горячие клавиши в стиле Blender: G — перемещение, R — вращение, S — масштаб.'],
      meta: [['Платформа', 'Windows'], ['Технологии', 'React · Electron'], ['Версия', '1.0.0'], ['Размер', '113 MB']],
      features: [['Локально и приватно', 'Без трекинга и облака'], ['Движок рисования', 'Рисуйте прямо на холсте'], ['Компоновка', 'Группы и иерархия объектов'], ['GPU-ускорение', '60 fps даже с 8K-картинками']],
    },
    en: {
      kind: 'App · Windows', status: 'Released · v1.0.0',
      short: 'Infinite canvas & reference board.',
      desc: ['A fast, local-first infinite canvas for artists and designers — a solid alternative to Miro and PureRef.', 'A minimal interface with Blender-style hotkeys: G — grab, R — rotate, S — scale.'],
      meta: [['Platform', 'Windows'], ['Stack', 'React · Electron'], ['Version', '1.0.0'], ['Size', '113 MB']],
      features: [['Local & private', 'No tracking, no cloud'], ['Drawing engine', 'Sketch right on the canvas'], ['Layout', 'Groups and object hierarchy'], ['GPU acceleration', '60 fps even with 8K images']],
    },
  },

  'niceshoots': {
    name: 'NiceShoots', version: '1.0', accent: '#ff5d5d',
    links: [
      { href: 'https://github.com/Maxi000001/NiceShoots/releases/download/v1.0.0/NiceShoot.Setup.1.0.0.exe', icon: 'download', primary: true, ru: 'Скачать · 78 MB', en: 'Download · 78 MB' },
      { href: 'https://github.com/Maxi000001/NiceShoots', icon: 'github', ru: 'GitHub', en: 'GitHub' },
    ],
    ru: {
      kind: 'Приложение · Windows', status: 'Релиз · v1.0.0',
      short: 'Свой прицел поверх любой игры.',
      desc: ['Настраиваемый оверлей-прицел для соревновательных игр. Агрессивный стиль и нулевая задержка дают точность в самых динамичных ситуациях.'],
      meta: [['Платформа', 'Windows'], ['Технологии', 'C# · WPF'], ['Версия', '1.0.0'], ['Размер', '78 MB']],
      features: [['Свои прицелы', 'Форма, цвет и размер'], ['Без задержки', 'Оверлей не влияет на игру'], ['Глобальные хоткеи', 'Управление не выходя из игры'], ['Лёгкий', 'Минимум ресурсов']],
    },
    en: {
      kind: 'App · Windows', status: 'Released · v1.0.0',
      short: 'Your own crosshair over any game.',
      desc: ['A customizable crosshair overlay for competitive gaming. An aggressive look and zero latency deliver precision in the most intense moments.'],
      meta: [['Platform', 'Windows'], ['Stack', 'C# · WPF'], ['Version', '1.0.0'], ['Size', '78 MB']],
      features: [['Custom crosshairs', 'Shape, colour and size'], ['Zero latency', 'The overlay never slows the game'], ['Global hotkeys', 'Control it without leaving the game'], ['Lightweight', 'Minimal resource usage']],
    },
  },

  'playtime': {
    name: 'PlayTime Pro', version: '2.0', accent: '#2fe0a6',
    links: [{ href: 'https://t.me/Malik_anim', icon: 'tg', primary: true, ru: 'Запросить демо', en: 'Request a demo' }],
    ru: {
      kind: 'Коммерческое ПО · Windows', status: 'Релиз · v2.0.0',
      short: 'Учёт времени для бильярдных клубов.',
      desc: ['Комплексная система управления и учёта времени для бильярдных клубов. Автоматизирует занятость столов, расчёт стоимости и финансовую отчётность.'],
      meta: [['Платформа', 'Windows'], ['Технологии', 'C# · .NET'], ['Версия', '2.0.0'], ['Доступ', 'По запросу']],
      features: [['Учёт времени', 'Автоматически по каждому столу'], ['Динамические цены', 'Тарифы по времени и дням'], ['Управление столами', 'Вся загрузка клуба на одном экране'], ['Финансовые отчёты', 'Выручка за смену и период']],
    },
    en: {
      kind: 'Commercial software · Windows', status: 'Released · v2.0.0',
      short: 'Time tracking for billiard clubs.',
      desc: ['A complete management and time-tracking system for billiard clubs. Automates table occupancy, pricing and financial reporting.'],
      meta: [['Platform', 'Windows'], ['Stack', 'C# · .NET'], ['Version', '2.0.0'], ['Access', 'On request']],
      features: [['Time tracking', 'Automatic, per table'], ['Dynamic pricing', 'Rates by time and day'], ['Table management', 'The whole club on one screen'], ['Financial reports', 'Revenue per shift and period']],
    },
  },

  'stb-studio': {
    name: 'STB Studio', version: 'α', accent: '#ffb547',
    links: [{ href: 'https://t.me/Malik_anim', icon: 'tg', primary: true, ru: 'Следить за разработкой', en: 'Follow development' }],
    ru: {
      kind: 'Творческий пакет · C++ · Qt', status: 'В разработке · Alpha',
      short: 'Сторибординг, рисование и 2D-анимация — в одном.',
      desc: ['Творческий пакет 3-в-1, который объединяет сторибординг, профессиональное цифровое рисование и 2D-анимацию в единый пайплайн — от идеи до финального кадра.'],
      meta: [['Технологии', 'C++ · Qt'], ['Стадия', 'Alpha'], ['Платформа', 'Desktop'], ['Статус', 'В разработке']],
      features: [['Сторибординг', 'Встроенные раскадровки'], ['Движок рисования', 'Профессиональные кисти'], ['Таймлайн и анимация', 'Покадровая 2D-анимация'], ['Экспорт', 'Стандартные форматы']],
    },
    en: {
      kind: 'Creative suite · C++ · Qt', status: 'In development · Alpha',
      short: 'Storyboarding, drawing and 2D animation — in one.',
      desc: ['A 3-in-1 creative suite combining storyboarding, professional digital drawing and 2D animation into a single pipeline — from idea to final frame.'],
      meta: [['Stack', 'C++ · Qt'], ['Stage', 'Alpha'], ['Platform', 'Desktop'], ['Status', 'In development']],
      features: [['Storyboarding', 'Built-in boards'], ['Drawing engine', 'Professional brushes'], ['Timeline & animation', 'Frame-by-frame 2D'], ['Export', 'Standard formats']],
    },
  },

  'tjobs': {
    name: 'TJOBS', version: 'β', accent: '#5da9ff',
    links: [{ href: 'https://t.me/Malik_anim', icon: 'tg', primary: true, ru: 'Следить за разработкой', en: 'Follow development' }],
    ru: {
      kind: 'Платформа · React Native', status: 'В разработке · Beta',
      short: 'Поиск работы нового поколения.',
      desc: ['Платформа и мобильное приложение для поиска работы. Продвинутые алгоритмы подбора соединяют специалистов с подходящими вакансиями в реальном времени.'],
      meta: [['Технологии', 'React Native'], ['Стадия', 'Beta'], ['Платформа', 'iOS · Android'], ['Статус', 'В разработке']],
      features: [['Умный подбор', 'Вакансии под навыки'], ['Видео-резюме', 'Покажите себя за минуту'], ['Чат', 'Общение в реальном времени'], ['Верификация навыков', 'Подтверждённый опыт']],
    },
    en: {
      kind: 'Platform · React Native', status: 'In development · Beta',
      short: 'Next-generation job search.',
      desc: ['A job platform and mobile app. Advanced matching connects professionals with the right openings in real time.'],
      meta: [['Stack', 'React Native'], ['Stage', 'Beta'], ['Platform', 'iOS · Android'], ['Status', 'In development']],
      features: [['Smart matching', 'Jobs that fit your skills'], ['Video résumés', 'Show yourself in a minute'], ['Chat', 'Real-time messaging'], ['Skill verification', 'Proven experience']],
    },
  },

  'time-out': {
    name: 'Time OUT', version: 'α', accent: '#2fe0a6',
    links: [{ href: 'https://t.me/Malik_anim', icon: 'tg', primary: true, ru: 'Следить за разработкой', en: 'Follow development' }],
    ru: {
      kind: 'Утилита · Electron', status: 'В разработке · Alpha',
      short: 'Таймер выключения с роботом-компаньоном.',
      desc: ['Умный таймер выключения ПК с интерактивным роботом, у которого есть эмоции. Превращает контроль экранного времени в живой и персональный процесс.'],
      meta: [['Технологии', 'Electron'], ['Стадия', 'Alpha'], ['Платформа', 'Windows'], ['Статус', 'В разработке']],
      features: [['Робот-интерфейс', 'Реагирует эмоциями'], ['Свои таймеры', 'Гибкая настройка'], ['Принудительное выключение', 'Когда время вышло'], ['Статистика', 'Сколько времени у экрана']],
    },
    en: {
      kind: 'Utility · Electron', status: 'In development · Alpha',
      short: 'A shutdown timer with a robot companion.',
      desc: ['A smart PC shutdown timer with an interactive robot that has emotions. Turns screen-time control into something lively and personal.'],
      meta: [['Stack', 'Electron'], ['Stage', 'Alpha'], ['Platform', 'Windows'], ['Status', 'In development']],
      features: [['Robot UI', 'Reacts with emotions'], ['Custom timers', 'Flexible setup'], ['Force shutdown', 'When time is up'], ['Statistics', 'Your screen time']],
    },
  },
};
