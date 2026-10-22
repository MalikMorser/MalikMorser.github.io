// Content for the expanding detail sheets. Each entry: shared meta + ru/en copy.
// Links: download (primary), youtube, github, site, tg.
const DL = 'https://github.com/MalikMorser/downloads/releases/download/';

window.DETAILS = {
  /* ======================= MOHO ======================= */
  'pose-library': {
    name: 'Pose Library', version: '3.0', accent: '#9b6bff',
    image: '/assets/img/work/pose-promo.webp',
    gallery: ['/assets/img/work/pose-window.webp', '/assets/img/work/pose-poses.webp', '/assets/img/work/pose-install.webp', '/assets/img/work/pose-tutorial.webp'],
    links: [
      { href: DL + 'pose-library-3.0/Pose_Library_3.0_for_Moho_14.4.zip', icon: 'download', primary: true, ru: 'Скачать RU · 1.9 MB', en: 'Download RU · 1.9 MB' },
      { href: DL + 'pose-library-3.0/Pose_Library_3.0_EN_for_Moho_14.4.zip', icon: 'download', ru: 'English · 0.2 MB', en: 'English · 0.2 MB' },
      { href: 'https://youtu.be/EPBy7-sN-aI', icon: 'youtube', ru: 'Смотреть на YouTube', en: 'Watch on YouTube' },
    ],
    sha: 'RU ca699fa97811d6599bec0aefed73149d9e4c1a75b070c2bc6eca96f4e806639a · EN cd0aa5165739565b7216cfe5a877defdc73e4da2095916051930eb7cb06f4102',
    ru: {
      kind: 'Плагин · Moho Pro 14.4', status: 'Бесплатно · релиз 3.0',
      short: 'Позы персонажа — в один клик.',
      desc: ['Библиотека поз в родном плавающем окне Moho. Сохраняй позы с фото-превью, ищи их по названию, раскладывай по категориям и применяй одним щелчком — на любом кадре, полностью или частично.', 'Есть русская и английская версии: интерфейс отличается только языком, библиотеки поз совместимы. Устанавливай одну из них.'],
      meta: [['Платформа', 'Moho Pro 14.4 · Windows'], ['Версия', '3.0'], ['Лицензия', 'Бесплатно'], ['Языки', 'Русский · English']],
      features: [['Без лимита поз', 'Индекс + файл на позу, мгновенное сохранение'], ['Карточки с фото', 'Снимок персонажа в один клик'], ['Поиск и категории', 'Избранное, сортировка, сетка до 6×6'], ['Сила применения', '25 / 50 / 100% или своё значение'], ['Только выделенное', 'Поза на выбранные кости'], ['Без лишних ключей', 'Раньше — до 1500 ключей за клик'], ['Частичное применение', 'На изменённом риге — с отчётом'], ['Перенос 2.x', 'Старые библиотеки .mpl переносятся сами']],
      stepsTitle: 'Установка за минуту',
      steps: ['Распакуй архив (Свойства → «Разблокировать», если есть)', 'Moho: Scripts → Install Script…', 'Выбери папку scripts из архива', 'Подтверди замену файлов — «Да»', 'Перезапусти Moho: Tools → Other → Pose Library'],
    },
    en: {
      kind: 'Plugin · Moho Pro 14.4', status: 'Free · release 3.0',
      short: 'Character poses — in one click.',
      desc: ['A pose library inside a native floating Moho window. Save poses with thumbnails, search by name, sort into categories and apply with one click — on any frame, fully or partially.', 'Russian and English editions differ only in UI language; pose libraries are compatible. Install one of them.'],
      meta: [['Platform', 'Moho Pro 14.4 · Windows'], ['Version', '3.0'], ['License', 'Free'], ['Languages', 'Russian · English']],
      features: [['No pose limit', 'Index + one file per pose, instant saving'], ['Visual cards', 'One-click character snapshot'], ['Search & categories', 'Favourites, sorting, grid up to 6×6'], ['Blend strength', '25 / 50 / 100% or custom'], ['Only selected', 'Apply to chosen bones'], ['No extra keys', 'Used to be up to 1500 keys per click'], ['Partial apply', 'On a changed rig — with a report'], ['2.x migration', 'Old .mpl libraries move over automatically']],
      stepsTitle: 'Install in a minute',
      steps: ['Unpack the archive (Properties → «Unblock» if present)', 'Moho: Scripts → Install Script…', 'Pick the scripts folder from the archive', 'Confirm replacing files — «Yes»', 'Restart Moho: Tools → Other → Pose Library'],
    },
  },

  'rig-controllers': {
    name: 'Rig Controllers', version: '2.0', accent: '#ffb547',
    image: '/assets/img/work/rig-promo.webp',
    gallery: ['/assets/img/work/rig-flow.webp', '/assets/img/work/rig-face.webp', '/assets/img/work/rig-moho.webp', '/assets/img/work/rig-tutorial.webp'],
    links: [
      { href: DL + 'rig-controllers-2.0/Rig_Controllers_2.0_for_Moho_14.4.zip', icon: 'download', primary: true, ru: 'Скачать RU · 1.8 MB', en: 'Download RU · 1.8 MB' },
      { href: DL + 'rig-controllers-2.0/Rig_Controllers_2.0_EN_for_Moho_14.4.zip', icon: 'download', ru: 'English · 0.15 MB', en: 'English · 0.15 MB' },
      { href: 'https://youtu.be/9efL1hT4iKk', icon: 'youtube', ru: 'Урок на YouTube', en: 'Tutorial on YouTube' },
    ],
    sha: 'RU 7d55350d41c0401c61cadf393a91c7cea076861c0625301701b6eba9b02f2c25 · EN 6c26e81b84a6ffe9aa01bf2ae382be11e6d652e5938d9803585cd630be59ee51',
    ru: {
      kind: 'Плагин · Moho Pro 14.4', status: 'Бесплатно · релиз 2.0',
      short: 'Один жест. Две оси.',
      desc: ['XY-джойстики и ползунки прямо поверх костного слоя. Контроллер двигает кости-драйверы, а они запускают Smart Bone Actions: поворот головы, эмоции, моргание и рот — одним движением на холсте.', 'Ключи пишутся в обычные каналы и видны на Timeline. Риги версии 1.x открываются без конвертации.'],
      meta: [['Платформа', 'Moho Pro 14.4 · Windows'], ['Версия', '2.0'], ['Лицензия', 'Бесплатно'], ['Языки', 'Русский · English']],
      features: [['Джойстики и ползунки', 'XY, горизонтальные и вертикальные'], ['Smart Bone Actions', 'Action X+ / X− / Y+ / Y− из меню'], ['Точность и привязка', 'Shift — 15 %, Ctrl — к 0 / ±50 / ±100 %'], ['Диагональные коррекции', 'Правка смешанных поз для XY'], ['Бережно к ригу', 'Del никогда не удаляет кости, один Undo на жест'], ['Быстро на больших ригах', 'Кэш настроек, оверлей не мешает воспроизведению'], ['Связка с Pose Library', 'Кнопка «Позы» открывает библиотеку'], ['Примеры в комплекте', 'Готовые риги 1.1–1.5 для изучения']],
      stepsTitle: 'Как это работает',
      steps: ['Кадр 0, Mainline: выбери костный слой → «Новый»', 'Smart Bones → Action X+ … — поставь позу на последнем кадре', 'Кадры 1+: тяни ромб — ключи пишутся сами'],
    },
    en: {
      kind: 'Plugin · Moho Pro 14.4', status: 'Free · release 2.0',
      short: 'One gesture. Two axes.',
      desc: ['XY joysticks and sliders drawn right over the bone layer. A controller moves driver bones, which trigger Smart Bone Actions: head turns, emotions, blinks and mouth shapes in a single move on the canvas.', 'Keys go into regular channels and show on the Timeline. 1.x rigs open without conversion.'],
      meta: [['Platform', 'Moho Pro 14.4 · Windows'], ['Version', '2.0'], ['License', 'Free'], ['Languages', 'Russian · English']],
      features: [['Joysticks & sliders', 'XY, horizontal and vertical'], ['Smart Bone Actions', 'Action X+ / X− / Y+ / Y− from the menu'], ['Precision & snapping', 'Shift — 15 %, Ctrl — to 0 / ±50 / ±100 %'], ['Diagonal corrections', 'Fix blended poses on XY'], ['Safe for your rig', 'Del never deletes bones, one Undo per gesture'], ['Fast on big rigs', 'Cached settings, no overlay during playback'], ['Works with Pose Library', 'The «Poses» button opens the library'], ['Example rigs included', 'Rigs 1.1–1.5 to learn from']],
      stepsTitle: 'How it works',
      steps: ['Frame 0, Mainline: pick the bone layer → «New»', 'Smart Bones → Action X+ … — pose the last frame', 'Frames 1+: drag the handle — keys are written for you'],
    },
  },

  'tgs-exporter': {
    name: 'TGS Exporter', version: '1.0', accent: '#5aa2ff', pro: true,
    image: '/assets/img/work/tgs-promo.webp',
    gallery: ['/assets/img/work/tgs-reels.webp', '/assets/img/work/tgs-install.webp'],
    links: [{ href: 'https://t.me/Malik_anim', icon: 'tg', primary: true, ru: 'Купить · написать в Telegram', en: 'Buy · message on Telegram' }],
    ru: {
      kind: 'Плагин · Moho Pro 14.4', status: 'PRO · $5',
      short: 'Анимация Moho → живой стикер Telegram.',
      desc: ['Превращает анимацию персонажа в анимированный стикер Telegram (.tgs) прямо внутри Moho. Не нужны ни After Effects, ни Bodymovin, ни интернет.', 'Ты анимируешь как обычно — костями, Smart Bones, масками. Плагин запекает всё в чистый вектор в копии проекта (твой риг не трогается), ужимает файл под лимит Telegram и проверяет его перед сохранением.'],
      meta: [['Платформа', 'Moho Pro 14.4 · Windows'], ['Версия', '1.0'], ['Стикер', '512×512 · до 3 с · до 64 КБ'], ['Цена', '$5 · через Telegram']],
      features: [['Кости и Smart Bones', 'Автоматически → чистый вектор'], ['Маски и булевы формы', 'Разрешаются движком Moho в контуры'], ['Проверка Telegram', '512×512, ≤3 с, 60 fps, ≤64 КБ'], ['Оптимизация', 'Стандартная, максимальная, без потерь'], ['Отчёт совместимости', 'Что пройдёт, что упростится, что нет'], ['Риг в безопасности', 'Запекание — в копии проекта'], ['Кириллица в путях', 'Сохраняет куда угодно'], ['Чистый Lua', 'Без exe и dll']],
      stepsTitle: 'Как это работает',
      steps: ['Анимируй на Mainline до 3 секунд и сохрани проект', 'Scripts → TGS Exporter → «Запечь» — создаётся копия _TGS_bake', '«Проверить размер» → «Экспорт стикера»', 'Перетащи .tgs в Telegram или собери пак через @Stickers'],
    },
    en: {
      kind: 'Plugin · Moho Pro 14.4', status: 'PRO · $5',
      short: 'Moho animation → a live Telegram sticker.',
      desc: ['Turns a character animation into an animated Telegram sticker (.tgs) right inside Moho. No After Effects, no Bodymovin, no internet.', 'Animate as usual — bones, Smart Bones, masks. The plugin bakes everything into clean vector in a copy of the project (your rig stays untouched), squeezes the file under Telegram\'s limit and validates it before saving.'],
      meta: [['Platform', 'Moho Pro 14.4 · Windows'], ['Version', '1.0'], ['Sticker', '512×512 · up to 3 s · up to 64 KB'], ['Price', '$5 · via Telegram']],
      features: [['Bones & Smart Bones', 'Automatically → clean vector'], ['Masks & booleans', 'Resolved into contours by Moho'], ['Telegram check', '512×512, ≤3 s, 60 fps, ≤64 KB'], ['Optimisation', 'Standard, maximum, lossless'], ['Compatibility report', 'What passes, what gets simplified, what doesn\'t'], ['Your rig is safe', 'Baking happens in a copy'], ['Any folder', 'Non-Latin paths are fine'], ['Pure Lua', 'No exe or dll']],
      stepsTitle: 'How it works',
      steps: ['Animate on the Mainline, up to 3 seconds, and save', 'Scripts → TGS Exporter → «Bake» — a _TGS_bake copy is created', '«Check size» → «Export sticker»', 'Drop the .tgs into Telegram or build a pack via @Stickers'],
    },
  },

  'show-all-layers': {
    name: 'Show All Layers', version: '1.0', accent: '#2fe0a6',
    links: [
      { href: 'https://github.com/MalikMorser/Show-All-Layers-Moho/archive/refs/heads/main.zip', icon: 'download', primary: true, ru: 'Скачать бесплатно', en: 'Download free' },
      { href: 'https://github.com/MalikMorser/Show-All-Layers-Moho', icon: 'github', ru: 'GitHub', en: 'GitHub' },
    ],
    ru: {
      kind: 'Скрипт · Moho · Lua', status: 'Бесплатно · open source',
      short: 'Все скрытые слои — одним щелчком.',
      desc: ['Утилита для Moho, которая мгновенно показывает все скрытые слои во всём проекте. Незаменима в сложных ригах и больших сценах, где управлять видимостью вручную утомительно.'],
      meta: [['Программа', 'Moho 13.5+'], ['Язык', 'Lua'], ['Версия', '1.0.0'], ['Лицензия', 'Бесплатно']],
      features: [['Один клик', 'Видимость всех слоёв'], ['Рекурсивно', 'Все группы и вложенные слои'], ['Moho 13.5+', 'Под новые версии'], ['Без нагрузки', 'Не тормозит программу']],
    },
    en: {
      kind: 'Script · Moho · Lua', status: 'Free · open source',
      short: 'Every hidden layer — in one click.',
      desc: ['A Moho utility that instantly reveals every hidden layer across the project. Essential for complex rigs and large scenes where managing visibility by hand gets tedious.'],
      meta: [['App', 'Moho 13.5+'], ['Language', 'Lua'], ['Version', '1.0.0'], ['License', 'Free']],
      features: [['One click', 'Visibility of all layers'], ['Recursive', 'Every group and nested layer'], ['Moho 13.5+', 'For recent versions'], ['Zero overhead', 'No slowdown']],
    },
  },

  /* ======================= BLENDER ======================= */
  'mrm-metrics': {
    name: 'MRM Metrics Pro', version: '10.1', accent: '#ff9a3c', video: 'jzIKiHBdppc',
    image: '/assets/img/work/mrm-banner.webp',
    links: [
      { href: DL + 'mrm-metrics-pro-10.1.0/mrm_metrics_pro_10.1.0.zip', icon: 'download', primary: true, ru: 'Скачать · 31 KB', en: 'Download · 31 KB' },
      { href: 'https://youtu.be/jzIKiHBdppc?list=PLFqEIbySjhq5mVgTODciVDuC3GXPv-ddu', icon: 'youtube', ru: 'Урок на YouTube', en: 'Tutorial on YouTube' },
    ],
    sha: 'ab654ce84c33702c3d056075035db8e06aa57cb5cf10819da6f270be66c83d77',
    ru: {
      kind: 'Аддон · Blender 4.5+', status: 'Бесплатно · новая версия 10.1',
      short: 'Живые измерения прямо во вьюпорте.',
      desc: ['Профессиональный инструмент измерений для Blender. Измерения хранятся по вершинам, поэтому обновляются в реальном времени, пока ты моделируешь.', 'Вкладка «MRM» в боковой панели: списки измерений по типам, свои цвета, толщина, размер шрифта и единицы.'],
      meta: [['Программа', 'Blender 4.5+'], ['Язык', 'Python'], ['Версия', '10.1.0'], ['Лицензия', 'Бесплатно']],
      features: [['Расстояние', 'Между двумя вершинами'], ['Угол', 'По трём вершинам'], ['Диаметр', 'Или окружность по петле рёбер'], ['Радиус', 'Точная или подобранная окружность'], ['Click Meter', 'Полилиния с привязкой к поверхности'], ['Привязки', 'Ctrl — к вершине, середине ребра, центру грани'], ['Единицы', 'Авто, м, см, мм, Blender Units'], ['Стили', 'Цвета, толщина, размер текста']],
    },
    en: {
      kind: 'Add-on · Blender 4.5+', status: 'Free · new version 10.1',
      short: 'Live measurements right in the viewport.',
      desc: ['A professional measuring tool for Blender. Measurements are stored by vertex, so they update in real time while you model.', 'The «MRM» sidebar tab: per-type lists, custom colours, thickness, font size and units.'],
      meta: [['App', 'Blender 4.5+'], ['Language', 'Python'], ['Version', '10.1.0'], ['License', 'Free']],
      features: [['Distance', 'Between two vertices'], ['Angle', 'From three vertices'], ['Diameter', 'Or a circle fitted to an edge loop'], ['Radius', 'Exact or best-fit circle'], ['Click Meter', 'Polyline snapping to surfaces'], ['Snapping', 'Ctrl — vertex, edge middle, face centre'], ['Units', 'Auto, m, cm, mm, Blender Units'], ['Styles', 'Colours, thickness, text size']],
    },
  },

  'piano-rig-pro': {
    name: 'Piano Rig Pro', version: '0.14', accent: '#ff9a3c', video: 'HVE_EVkQ3ec',
    image: '/assets/img/work/piano-banner.webp',
    links: [
      { href: DL + 'piano-rig-pro-0.14/piano_rig_pro_0.14.zip', icon: 'download', primary: true, ru: 'Скачать · 5.7 MB', en: 'Download · 5.7 MB' },
      { href: 'https://youtu.be/HVE_EVkQ3ec', icon: 'youtube', ru: 'Урок на YouTube', en: 'Tutorial on YouTube' },
    ],
    sha: '717ea38c74438c3ca0118bdc206b43ffc67daabef11c7448b45e273c6eabb050',
    ru: {
      kind: 'Аддон · Blender 3.0+', status: 'Бесплатно',
      short: 'Игра на пианино — с настоящей физикой.',
      desc: ['Помощник для анимации игры на пианино. Сферы-коллайдеры следуют за костями пальцев и физически нажимают клавиши готового рига пианино (rigid body).', 'Сцена с ригом пианино уже в комплекте — подключается одной кнопкой.'],
      meta: [['Программа', 'Blender 3.0+'], ['Язык', 'Python'], ['Версия', '0.14'], ['Лицензия', 'Бесплатно']],
      features: [['Риг пианино', 'Импорт готовой сцены одной кнопкой'], ['Коллизии пальцев', 'Сфера на каждую выбранную кость'], ['Живые настройки', 'Положение на кости, размер, цвет'], ['Rigid Body', 'Мир физики создаётся сам'], ['Apply Scale', 'Запечь масштаб всех сфер'], ['Чистая сцена', 'Сферы не видны на рендере']],
      stepsTitle: 'Как работать',
      steps: ['Укажи путь к piano_scene.blend в настройках аддона и нажми Import Rig', 'Выдели арматуру → Pose Mode → кости пальцев', 'Create Finger Collision — сферы готовы', 'Настрой размер и положение, анимируй руки'],
    },
    en: {
      kind: 'Add-on · Blender 3.0+', status: 'Free',
      short: 'Piano playing — with real physics.',
      desc: ['A helper for animating piano playing. Collider spheres follow the finger bones and physically press the keys of a ready rigged piano (rigid bodies).', 'The rigged piano scene is included and connects with one button.'],
      meta: [['App', 'Blender 3.0+'], ['Language', 'Python'], ['Version', '0.14'], ['License', 'Free']],
      features: [['Piano rig', 'Import the ready scene in one click'], ['Finger collisions', 'A sphere for every selected bone'], ['Live controls', 'Position along bone, size, colour'], ['Rigid Body', 'Physics world set up for you'], ['Apply Scale', 'Bake the scale of all spheres'], ['Clean scene', 'Spheres are hidden in renders']],
      stepsTitle: 'How to use',
      steps: ['Set the path to piano_scene.blend in preferences and press Import Rig', 'Select the armature → Pose Mode → finger bones', 'Create Finger Collision — spheres are ready', 'Tune size and position, animate the hands'],
    },
  },

  'texture-scatter': {
    name: 'Texture Scatter', version: '0.1 α', accent: '#d6b46a',
    image: '/assets/img/work/scatter-leaf.webp',
    links: [{ href: DL + 'texture-scatter-0.1.0-alpha.1/texture_scatter-0.1.0-alpha.1.zip', icon: 'download', primary: true, ru: 'Скачать альфу · 62 KB', en: 'Download alpha · 62 KB' }],
    sha: '45935b0fa02f0db153af09e5e93991946d24996b71e2f6566f4af22204c19156',
    ru: {
      kind: 'Расширение · Blender 5.2+', status: 'Бесплатно · альфа-версия',
      short: 'Разброс текстур прямо внутри материала.',
      desc: ['Разбрасывает PNG-текстуры с прозрачностью — бумагу, грязь, пятна, листья, трещины, декали — прямо в существующем материале объекта. Работает неразрушающими слоями из шейдерных нод и не создаёт лишних объектов.', 'Это ранняя альфа: основа готова, маски по рисунку появятся позже.'],
      meta: [['Программа', 'Blender 5.2+'], ['Тип', 'Extension'], ['Версия', '0.1.0-alpha.1'], ['Лицензия', 'GPL-3.0 · бесплатно']],
      features: [['Слои как в Photoshop', 'Соло, видимость, порядок, дубли'], ['Любые PNG', 'Выбор с превью, папка или drag & drop'], ['Случайность', 'Позиция, поворот, масштаб, seed'], ['Смешивание слоёв', 'Элементы разных слоёв перемешиваются по глубине'], ['EEVEE и Cycles', 'Подмешивается в Base Color'], ['Атлас в .blend', 'Текстуры упаковываются в проект'], ['Indicator EEVEE', 'Счётчик бюджета текстур n/30'], ['Remove', 'Точное восстановление материала']],
      stepsTitle: 'Установка',
      steps: ['Blender 5.2+: Edit → Preferences → Get Extensions', 'Install from Disk → выбери zip', 'Sidebar → вкладка Texture Scatter → Enable'],
    },
    en: {
      kind: 'Extension · Blender 5.2+', status: 'Free · alpha',
      short: 'Scatter textures inside the material itself.',
      desc: ['Scatters alpha PNG textures — paper, dirt, stains, leaves, cracks, decals — inside the object\'s existing material. Works as non-destructive shader-node layers and creates no extra objects.', 'This is an early alpha: the core is ready, painted masks come later.'],
      meta: [['App', 'Blender 5.2+'], ['Type', 'Extension'], ['Version', '0.1.0-alpha.1'], ['License', 'GPL-3.0 · free']],
      features: [['Photoshop-like layers', 'Solo, visibility, order, duplicates'], ['Any PNG', 'Browser with thumbnails, folder or drag & drop'], ['Randomness', 'Position, rotation, scale, seed'], ['Interlayer mix', 'Elements of different layers interleave in depth'], ['EEVEE & Cycles', 'Mixed into Base Color'], ['Atlas in .blend', 'Textures are packed into the project'], ['EEVEE indicator', 'Texture budget counter n/30'], ['Remove', 'Exact restore of the material']],
      stepsTitle: 'Install',
      steps: ['Blender 5.2+: Edit → Preferences → Get Extensions', 'Install from Disk → pick the zip', 'Sidebar → Texture Scatter tab → Enable'],
    },
  },

  'material-cleaner': {
    name: 'Material Cleaner', version: '1.0', accent: '#7ab8ff',
    links: [{ href: DL + 'material-cleaner-1.0.0/material_cleaner_1.0.0.zip', icon: 'download', primary: true, ru: 'Скачать бесплатно', en: 'Download free' }],
    ru: {
      kind: 'Аддон · Blender 4.0+', status: 'Бесплатно',
      short: 'Чистые объекты без лишних материалов.',
      desc: ['Маленький, но очень полезный аддон: одной кнопкой убирает все слоты материалов с выделенных объектов. Удобно перед экспортом, перед новой текстурой или когда после импорта на модели висят десятки ненужных материалов.', 'Действие отменяется через Ctrl+Z.'],
      meta: [['Программа', 'Blender 4.0+'], ['Язык', 'Python'], ['Версия', '1.0.0'], ['Где', 'Sidebar → Materials']],
      features: [['Одна кнопка', 'Remove Materials from Selected'], ['Любые объекты', 'Меши, кривые, текст, объёмы'], ['Сводка', 'Сколько объектов и слотов выбрано'], ['По одному', 'Удаление отдельного слота крестиком']],
    },
    en: {
      kind: 'Add-on · Blender 4.0+', status: 'Free',
      short: 'Clean objects, no stray materials.',
      desc: ['A tiny but handy add-on: one button strips all material slots from the selected objects. Great before export, before re-texturing, or when an import leaves dozens of unwanted materials.', 'Fully undoable with Ctrl+Z.'],
      meta: [['App', 'Blender 4.0+'], ['Language', 'Python'], ['Version', '1.0.0'], ['Where', 'Sidebar → Materials']],
      features: [['One button', 'Remove Materials from Selected'], ['Any object', 'Meshes, curves, text, volumes'], ['Summary', 'How many objects and slots are selected'], ['One by one', 'Remove a single slot with the X']],
    },
  },

  'magic-bone': {
    name: 'Magic Bone', version: '1.0', accent: '#ff9a3c',
    links: [
      { href: 'https://github.com/MalikMorser/Magic-Bone-Blender/archive/refs/heads/main.zip', icon: 'download', primary: true, ru: 'Скачать бесплатно', en: 'Download free' },
      { href: 'https://github.com/MalikMorser/Magic-Bone-Blender', icon: 'github', ru: 'GitHub', en: 'GitHub' },
    ],
    ru: {
      kind: 'Аддон · Blender · Python', status: 'Бесплатно · open source',
      short: 'Кости прямо из геометрии.',
      desc: ['Инструмент для быстрого риггинга в Blender: генерирует кости прямо из геометрии меша с математической точностью и экономит часы ручного выравнивания.'],
      meta: [['Программа', 'Blender'], ['Язык', 'Python'], ['Версия', '1.0.0'], ['Лицензия', 'Бесплатно']],
      features: [['Кости по нормалям', 'Направление из геометрии'], ['По мировым осям', 'Ровные кости по X / Y / Z'], ['Между двумя вершинами', 'Точное размещение'], ['Математическая точность', 'Без ручной подгонки']],
    },
    en: {
      kind: 'Add-on · Blender · Python', status: 'Free · open source',
      short: 'Bones straight from geometry.',
      desc: ['A rapid-rigging tool for Blender that generates bones directly from mesh geometry with mathematical precision, saving hours of manual alignment.'],
      meta: [['App', 'Blender'], ['Language', 'Python'], ['Version', '1.0.0'], ['License', 'Free']],
      features: [['Bones from normals', 'Direction from geometry'], ['By world axis', 'Clean bones along X / Y / Z'], ['Between 2 vertices', 'Exact placement'], ['Mathematical precision', 'No manual tweaking']],
    },
  },

  /* ======================= SOFTWARE ======================= */
  'flect': {
    name: 'FLECT', version: '0.1', accent: '#8f7bff',
    image: '/assets/img/software/flect/ui.webp',
    gallery: ['/assets/img/software/flect/bones.webp', '/assets/img/software/flect/graph.webp', '/assets/img/software/flect/vector.webp', '/assets/img/software/flect/switch.webp'],
    links: [{ href: 'https://t.me/Malik_anim', icon: 'tg', primary: true, ru: 'Следить в Telegram', en: 'Follow on Telegram' }],
    ru: {
      kind: 'Программа · Windows', status: 'В разработке', soon: 'Релиз — позже',
      short: '2D-анимация нового поколения.',
      desc: ['FLECT — профессиональная программа для 2D-анимации: векторное рисование, кости и риггинг, таймлайн и редактор графиков в одном окне. Мощь риггинга в духе Moho и скорость работы в духе Blender.', 'Написана с нуля на C++23 и рисует всё на видеокарте через Direct3D 12 — поэтому быстрая даже на сложных персонажах.'],
      meta: [['Платформа', 'Windows 10/11'], ['Технологии', 'C++23 · Direct3D 12 · ImGui'], ['Версия', '0.1 · в разработке'], ['Релиз', 'Позже']],
      features: [['Векторный движок', 'Сваренные точки, кривые Безье, MSAA на GPU'], ['Кисть и перо', 'Нажим пера, сглаживание кривых'], ['Кости и smart bones', 'Гибкая и жёсткая привязка, IK с полюсами'], ['Стек ограничений', 'IK, Track To, Copy и Limit — с влиянием'], ['Таймлайн и графики', 'Безье, Ease, Bounce, Elastic, циклы'], ['Слои', 'Вектор, картинки, группы, Switch, звук, камера'], ['Маски и смешивание', 'Живые маски слоями, 8 режимов смешивания'], ['Экспорт', 'MP4 H.264 и PNG-секвенция']],
      note: 'Скачать пока нельзя — программа в активной разработке.',
    },
    en: {
      kind: 'Application · Windows', status: 'In development', soon: 'Release — later',
      short: '2D animation software of a new generation.',
      desc: ['FLECT is a professional 2D animation application: vector drawing, bones and rigging, timeline and graph editor in one window. Moho-style rigging power with Blender-style speed.', 'Written from scratch in C++23 and rendered entirely on the GPU via Direct3D 12 — fast even on complex characters.'],
      meta: [['Platform', 'Windows 10/11'], ['Stack', 'C++23 · Direct3D 12 · ImGui'], ['Version', '0.1 · in development'], ['Release', 'Later']],
      features: [['Vector engine', 'Welded points, Bezier curves, GPU MSAA'], ['Brush & pen', 'Pen pressure, curve fitting'], ['Bones & smart bones', 'Flexible and rigid binding, IK with poles'], ['Constraints stack', 'IK, Track To, Copy and Limit — with influence'], ['Timeline & graphs', 'Bezier, Ease, Bounce, Elastic, cycles'], ['Layers', 'Vector, images, groups, Switch, audio, camera'], ['Masks & blending', 'Live layer masks, 8 blend modes'], ['Export', 'MP4 H.264 and PNG sequence']],
      note: 'Not available for download yet — in active development.',
    },
  },

  'playtime': {
    name: 'PlayTime Pro', version: '10.2', accent: '#5fb7ff',
    links: [{ href: DL + 'playtime-pro-10.2.0/PlayTime-Pro-10.2.0.exe', icon: 'download', primary: true, ru: 'Скачать · 99 MB', en: 'Download · 99 MB' }],
    ru: {
      kind: 'Программа · Windows', status: 'Бесплатно · v10.2.0',
      short: 'Учёт времени и оплат для клубов.',
      desc: ['Система учёта для бильярдных, PlayStation-клубов и компьютерных клубов. Все столы и приставки на одном экране: кто играет, сколько времени прошло и сколько к оплате.', 'Продажи бара, долги, отчёты и экспорт — без бумажек и Excel.'],
      meta: [['Платформа', 'Windows 10/11'], ['Технологии', 'Angular · Electron'], ['Версия', '10.2.0'], ['Лицензия', 'Бесплатно']],
      features: [['Сетка устройств', 'Бильярд, PlayStation, ПК — перетаскиванием'], ['Типы сеансов', 'Открытый, по времени, по сумме, пауза'], ['Бар и товары', 'Корзина на каждый стол'], ['Оплаты и долги', 'Отметка «оплачено» или «в долг»'], ['Отчёты', 'Аналитика за смену и период'], ['Журнал действий', 'Всё записывается'], ['Экспорт CSV', 'И резервные копии'], ['Горячие клавиши', 'Быстрая работа администратора']],
    },
    en: {
      kind: 'Application · Windows', status: 'Free · v10.2.0',
      short: 'Time and billing for clubs.',
      desc: ['A management system for billiard clubs, PlayStation lounges and PC gaming centres. Every table and console on one screen: who is playing, how long, and how much is due.', 'Bar sales, debts, reports and export — no paper, no spreadsheets.'],
      meta: [['Platform', 'Windows 10/11'], ['Stack', 'Angular · Electron'], ['Version', '10.2.0'], ['License', 'Free']],
      features: [['Device grid', 'Billiards, PlayStation, PC — drag to reorder'], ['Session types', 'Open, fixed time, fixed budget, pause'], ['Bar & products', 'A cart per table'], ['Payments & debts', 'Mark as paid or as debt'], ['Reports', 'Analytics per shift and period'], ['Audit log', 'Everything is recorded'], ['CSV export', 'Plus backups'], ['Hotkeys', 'Fast for the operator']],
    },
  },

  'niceshoots': {
    name: 'NiceShoot', version: '1.0', accent: '#ff5d5d',
    links: [{ href: DL + 'niceshoots-1.0.0/NiceShoot.Setup.1.0.0.exe', icon: 'download', primary: true, ru: 'Скачать · 78 MB', en: 'Download · 78 MB' }],
    ru: {
      kind: 'Программа · Windows', status: 'Бесплатно · v1.0.0',
      short: 'Свой прицел поверх любой игры.',
      desc: ['Настраиваемый оверлей-прицел для шутеров. Прозрачное окно поверх всех окон и полноэкранных игр, клики проходят сквозь него — игра ничего не замечает.'],
      meta: [['Платформа', 'Windows 10/11'], ['Технологии', 'Electron'], ['Версия', '1.0.0'], ['Лицензия', 'Бесплатно']],
      features: [['12 стилей', 'Точка, крест, круг, T-образный, Predator…'], ['Внешний вид', 'Цвет, размер, толщина, прозрачность'], ['Обводка и свечение', 'Свой цвет и сила'], ['Смещение', 'X / Y и кнопка «по центру»'], ['Поверх игр', 'Работает в полноэкранном режиме'], ['F2', 'Настройки одной клавишей, иконка в трее']],
    },
    en: {
      kind: 'Application · Windows', status: 'Free · v1.0.0',
      short: 'Your own crosshair over any game.',
      desc: ['A customizable crosshair overlay for shooters. A transparent click-through window above every window and full-screen game — the game never notices it.'],
      meta: [['Platform', 'Windows 10/11'], ['Stack', 'Electron'], ['Version', '1.0.0'], ['License', 'Free']],
      features: [['12 styles', 'Dot, cross, circle, T-shape, Predator…'], ['Look', 'Colour, size, thickness, opacity'], ['Outline & glow', 'Own colour and strength'], ['Offset', 'X / Y and a Center button'], ['Over games', 'Works in full screen'], ['F2', 'Settings in one key, tray icon']],
    },
  },

  'prisma': {
    name: 'Prisma', version: 'demo', accent: '#2fe0a6', keys: ['G', 'R', 'S'],
    image: '/assets/img/software/prisma-banner.webp',
    links: [{ href: DL + 'prisma-demo-0.1.0/Prisma-Setup-0.1.0-demo.exe', icon: 'download', primary: true, ru: 'Скачать демо · 75 MB', en: 'Download demo · 75 MB' }],
    ru: {
      kind: 'Программа · Windows', status: 'В разработке · демо',
      short: 'Бесконечный холст и доска референсов.',
      desc: ['Prisma — бесконечный холст для художников и дизайнеров: картинки, текст, фигуры, заметки, кисть и связи между объектами. Альтернатива PureRef и Miro, которая работает локально.', 'Проект ещё в разработке. Демо-сборка — чтобы попробовать и протестировать: возможны шероховатости.'],
      meta: [['Платформа', 'Windows 10/11'], ['Технологии', 'React · Electron'], ['Версия', '0.1 · демо'], ['Статус', 'В разработке']],
      features: [['Бесконечный холст', 'Миникарта, зум, выделение рамкой'], ['Всё на доске', 'Картинки, текст, фигуры, чекбоксы, связи'], ['Кисть и ластик', 'Сглаженные штрихи'], ['Хоткеи Blender', 'G — перемещение, R — вращение, S — масштаб'], ['Слои и иерархия', 'Привязка виджетов к родителю'], ['Свой формат .prsm', 'Автосохранение и недавние файлы']],
      note: 'Демо-версия для теста. Полный релиз — позже.',
    },
    en: {
      kind: 'Application · Windows', status: 'In development · demo',
      short: 'Infinite canvas & reference board.',
      desc: ['Prisma is an infinite canvas for artists and designers: images, text, shapes, notes, a brush and connectors between objects. A local alternative to PureRef and Miro.', 'Still in development. The demo build is for trying it out and testing: expect rough edges.'],
      meta: [['Platform', 'Windows 10/11'], ['Stack', 'React · Electron'], ['Version', '0.1 · demo'], ['Status', 'In development']],
      features: [['Infinite canvas', 'Minimap, zoom, marquee selection'], ['Everything on a board', 'Images, text, shapes, checkboxes, connectors'], ['Brush & eraser', 'Smoothed strokes'], ['Blender hotkeys', 'G — grab, R — rotate, S — scale'], ['Layers & hierarchy', 'Attach widgets to a parent'], ['Own .prsm format', 'Autosave and recent files']],
      note: 'Demo build for testing. Full release later.',
    },
  },

  'mrpbr': {
    name: 'MR PBR', version: '0.1', accent: '#4f8dff',
    image: '/assets/img/software/mrpbr-sphere.webp',
    gallery: ['/assets/img/software/mrpbr-normal.webp'],
    links: [],
    ru: {
      kind: 'Программа · Windows', status: 'В разработке', soon: 'Релиз — позже',
      short: 'Одно фото → полный набор PBR-текстур.',
      desc: ['Перетащи фотографию — и MR PBR сразу создаёт все карты для 3D: Base Color, Normal, Roughness, Metallic, Ambient Occlusion, Height и Displacement. Результат виден на 3D-модели в реальном времени.', 'Каждую карту можно доработать как в Photoshop — неразрушающими коррекциями — и выгрузить готовым пресетом под нужный движок. Работает без интернета.'],
      meta: [['Платформа', 'Windows'], ['Технологии', 'Rust · Tauri · React · three.js'], ['Версия', '0.1 · в разработке'], ['Релиз', 'Позже']],
      features: [['7 карт из одного фото', 'Цвет, нормали, шероховатость, AO, высота…'], ['3D-превью', 'Сфера, куб, плоскость, цилиндр, тор'], ['8 HDRI-окружений', 'Студия, город, лес, закат и другие'], ['Коррекции', 'Levels, Curves, Hue/Sat, Color Balance'], ['ИИ-апскейл', '×4 с сравнением до/после'], ['Пресеты экспорта', 'Unreal, Unity URP/HDRP, Blender, Maya, ZBrush']],
    },
    en: {
      kind: 'Application · Windows', status: 'In development', soon: 'Release — later',
      short: 'One photo → a full PBR texture set.',
      desc: ['Drop a photo and MR PBR instantly generates every 3D map: Base Color, Normal, Roughness, Metallic, Ambient Occlusion, Height and Displacement — shown live on a 3D model.', 'Refine each map with non-destructive Photoshop-style adjustments and export with a preset for your engine. Works offline.'],
      meta: [['Platform', 'Windows'], ['Stack', 'Rust · Tauri · React · three.js'], ['Version', '0.1 · in development'], ['Release', 'Later']],
      features: [['7 maps from one photo', 'Colour, normal, roughness, AO, height…'], ['3D preview', 'Sphere, cube, plane, cylinder, torus'], ['8 HDRI environments', 'Studio, city, forest, sunset and more'], ['Adjustments', 'Levels, Curves, Hue/Sat, Color Balance'], ['AI upscale', '×4 with before/after'], ['Export presets', 'Unreal, Unity URP/HDRP, Blender, Maya, ZBrush']],
    },
  },

  'crm': {
    name: 'TVR CRM', version: '1.0', accent: '#1fe08a',
    image: '/assets/img/software/crm-hero.webp',
    gallery: ['/assets/img/software/crm-signin.webp'],
    links: [{ href: 'https://t.me/Malik_anim', icon: 'tg', primary: true, ru: 'Получить доступ · Telegram', en: 'Get access · Telegram' }],
    ru: {
      kind: 'Веб-приложение · PWA', status: 'Готово · по подписке',
      short: 'Одна система — у каждой компании свои разделы.',
      desc: ['CRM для бизнеса: салону — курсы процедур и календарь мастеров, сервисному центру — заявки и склад. Общее остаётся общим: клиенты, касса, роли, отчёты. Лишнее не мешается под руками.', 'Работает в браузере и устанавливается на телефон как приложение. Чтобы получить доступ — напиши мне в Telegram.'],
      meta: [['Платформа', 'Браузер · телефон (PWA)'], ['Технологии', 'React · Supabase'], ['Языки', 'Русский · Таджикский · English'], ['Доступ', 'По запросу']],
      features: [['Модули под бизнес', 'Разделы включаются под задачи'], ['Клиенты и записи', 'Без ограничений'], ['Касса, склад, отчёты', 'Всё в одном месте'], ['Роли', 'От ресепшена до владельца'], ['Календарь, чат, задачи', 'Командная работа'], ['Изоляция данных', 'Данные компании отделены на уровне базы']],
    },
    en: {
      kind: 'Web app · PWA', status: 'Ready · subscription',
      short: 'One system — each company gets its own sections.',
      desc: ['A CRM for business: a salon gets treatment courses and a staff calendar, a service centre gets tickets and stock. The shared parts stay shared: clients, cash desk, roles, reports. Nothing extra gets in the way.', 'Runs in the browser and installs on a phone like an app. To get access, message me on Telegram.'],
      meta: [['Platform', 'Browser · phone (PWA)'], ['Stack', 'React · Supabase'], ['Languages', 'Russian · Tajik · English'], ['Access', 'On request']],
      features: [['Modules per business', 'Sections switch on as needed'], ['Clients & bookings', 'Unlimited'], ['Cash, stock, reports', 'All in one place'], ['Roles', 'From reception to owner'], ['Calendar, chat, tasks', 'Teamwork'], ['Data isolation', 'Company data separated at database level']],
    },
  },

  'pq360': {
    name: 'PQ360', version: '0.1', accent: '#8fb4ff',
    image: '/assets/img/software/pq360-pano.webp',
    links: [],
    ru: {
      kind: 'Веб-приложение · 360°', status: 'В разработке', soon: 'Демо — скоро',
      short: 'Своя студия виртуальных 360°-туров.',
      desc: ['PQ360 превращает панорамы 360° в интерактивные туры. Загрузи панораму (например, рендер интерьера из Blender), обработай её прямо в браузере, свяжи комнаты точками перехода и опубликуй — с ссылкой и QR-кодом.', 'Альтернатива Kuula, которая работает на своём сервере. Сейчас в разработке; демо-версия появится позже.'],
      meta: [['Платформа', 'Браузер · сервер'], ['Технологии', 'React · three.js · Node'], ['Версия', '0.1 · в разработке'], ['Демо', 'Скоро']],
      features: [['Просмотр 360°', 'Мышь, касания, гироскоп телефона'], ['Обработка как в Camera Raw', 'Экспозиция, кривые, HSL, dehaze, зерно'], ['Свет и Bloom', 'Перетаскиваемые источники света'], ['Многокомнатные туры', 'Точки перехода и плавные переходы'], ['Публикация', 'Публичная ссылка и QR-код'], ['Быстрая загрузка', 'Прогрессивные WebP до 4K']],
    },
    en: {
      kind: 'Web app · 360°', status: 'In development', soon: 'Demo — soon',
      short: 'Your own 360° virtual tour studio.',
      desc: ['PQ360 turns 360° panoramas into interactive tours. Upload a panorama (say, an interior render from Blender), grade it right in the browser, link rooms with hotspots and publish — with a link and a QR code.', 'A self-hosted alternative to Kuula. In development; a demo is coming later.'],
      meta: [['Platform', 'Browser · server'], ['Stack', 'React · three.js · Node'], ['Version', '0.1 · in development'], ['Demo', 'Soon']],
      features: [['360° viewer', 'Mouse, touch, phone gyroscope'], ['Camera Raw-style grading', 'Exposure, curves, HSL, dehaze, grain'], ['Lights & bloom', 'Draggable fake lights'], ['Multi-room tours', 'Hotspots and smooth transitions'], ['Publishing', 'Public link and QR code'], ['Fast loading', 'Progressive WebP up to 4K']],
    },
  },
};
