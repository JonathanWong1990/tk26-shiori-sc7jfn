// What each place is and what to do there. Keyed by the place id in trip-data.js.
// { about: text, todo: [text], tips: [text] } — every text is { zh, en }.
// Keep facts general and stable; date-specific hours belong in trip-data.js notes.

window.PLACE_INFO = {
  sensoji: {
    about: { zh: "東京最古老嘅寺廟，入口係掛住大紅燈籠嘅「雷門」。由雷門行入去本堂，兩邊係老街小食舖。", en: "Tokyo's oldest temple. You enter through Kaminarimon, the gate with the giant red lantern, then walk a street of old snack shops to the main hall." },
    todo: [
      { zh: "喺雷門大燈籠下面影相", en: "Photo under the big lantern at Kaminarimon" },
      { zh: "行仲見世通，食人形燒、炸饅頭、仙貝", en: "Walk Nakamise street for ningyo-yaki cakes, fried manju and rice crackers" },
      { zh: "喺本堂前面抽籤（100 円），抽到凶就綁返喺度", en: "Draw an omikuji fortune (¥100) by the main hall; tie a bad one to the rack" },
      { zh: "行埋附近傳法院通，有好多老舖", en: "Browse the old shops on Denboin-dori nearby" }
    ],
    tips: [
      { zh: "免費入場。朝早 9 點前人少好多", en: "Free. Far quieter before 9am" },
      { zh: "本堂冬天大約朝早 6 點半開、5 點關；外面範圍全日開", en: "Main hall roughly 6:30–17:00 in winter; grounds always open" }
    ]
  },
  sumida: {
    about: { zh: "淺草同晴空塔之間嘅河邊公園。由淺草過河，一路行一路望住晴空塔。（相片係春天櫻花，12 月冇櫻花。）", en: "Riverside park between Asakusa and Skytree, with Skytree in view the whole way. (Photo shows spring blossoms; none in December.)" },
    todo: [
      { zh: "沿隅田川散步", en: "Stroll along the Sumida River" },
      { zh: "行「隅田河步道」：鐵路橋旁邊嘅行人橋", en: "Cross the Sumida River Walk, a footbridge beside the railway bridge" },
      { zh: "對岸東京水岸街 (Tokyo Mizumachi) 有咖啡小店", en: "Cafés and small shops at Tokyo Mizumachi on the far bank" }
    ],
    tips: [
      { zh: "淺草行到晴空塔大約 20 分鐘，平路", en: "About 20 minutes on foot from Asakusa to Skytree, all flat" }
    ]
  },
  skytree: {
    about: { zh: "634 米高，全世界最高嘅電視塔。上面兩層觀景台，下面係大商場「東京晴空街道 (Solamachi)」。", en: "At 634m, the world's tallest broadcasting tower, with two observation decks above and the big Solamachi mall below." },
    todo: [
      { zh: "上 350 米嘅天望甲板睇全東京", en: "Ride up to the 350m Tembo Deck for the whole city" },
      { zh: "天晴可能見到富士山", en: "On a clear day you may see Mt Fuji" },
      { zh: "黃昏上去，一次過睇日落同夜景", en: "Go at dusk to catch both sunset and night view" },
      { zh: "落嚟喺 Solamachi 行街、食嘢，有水族館", en: "Shop and eat in Solamachi below; there's also an aquarium" }
    ],
    tips: [
      { zh: "網上買飛可以揀時段，黃昏最多人", en: "Buy timed tickets online; sunset slots are busiest" },
      { zh: "冬天空氣清，見富士山機會最高", en: "Winter air is clearest, the best chance of seeing Fuji" }
    ]
  },
  meiji: {
    about: { zh: "供奉明治天皇同皇后嘅神社，藏喺原宿站旁邊一大片森林入面。一入去就好靜，好難想像隔籬係澀谷。", en: "Shrine to Emperor Meiji and Empress Shoken, hidden in a forest right beside Harajuku Station. Quiet the moment you step in." },
    todo: [
      { zh: "行過大鳥居同森林參道", en: "Walk through the great torii gate and forest path" },
      { zh: "睇參道旁邊一排排清酒桶", en: "See the wall of sake barrels along the path" },
      { zh: "喺本殿參拜，寫繪馬許願", en: "Pray at the main hall and write a wish on an ema plaque" }
    ],
    tips: [
      { zh: "免費。日出開門，日落關門", en: "Free. Open sunrise to sunset" },
      { zh: "由鳥居行到本殿約 10 分鐘碎石路", en: "About 10 minutes on gravel from the gate to the main hall" }
    ]
  },
  omotesando: {
    about: { zh: "兩邊種滿櫸樹嘅大道，有「東京香榭麗舍」之稱。名店、設計建築、咖啡店都喺度。", en: "A tree-lined avenue often called Tokyo's Champs-Élysées: flagship stores, striking architecture and cafés." },
    todo: [
      { zh: "沿大道行，睇名店建築", en: "Walk the avenue and admire the flagship architecture" },
      { zh: "行 Omotesando Hills 商場", en: "Browse Omotesando Hills" },
      { zh: "轉入橫街「裏原宿」，有好多細咖啡店同小店", en: "Duck into the Ura-Harajuku backstreets for small cafés and shops" }
    ],
    tips: [
      { zh: "由原宿站行過去約 10 分鐘", en: "About 10 minutes on foot from Harajuku Station" }
    ]
  },
  shibuya: {
    about: { zh: "全世界最繁忙嘅十字路口，一次綠燈可以有過千人一齊過馬路。四周都係大電視牆同商場。", en: "The world's busiest pedestrian crossing, with up to a thousand people per green light, surrounded by giant screens and malls." },
    todo: [
      { zh: "親身過一次十字路口", en: "Walk the scramble crossing yourself" },
      { zh: "上 Shibuya Sky 天台睇夜景", en: "See the night view from the Shibuya Sky rooftop" },
      { zh: "同忠犬八公銅像影相", en: "Photo with the Hachiko statue" },
      { zh: "行 Scramble Square、PARCO 等商場", en: "Shop at Scramble Square, PARCO and others" }
    ],
    tips: [
      { zh: "夜晚燈光最靚", en: "Best at night with the lights" },
      { zh: "Shibuya Sky 要早啲網上訂，日落時段最搶手", en: "Book Shibuya Sky online early; sunset slots go fast" }
    ]
  },
  tsukiji: {
    about: { zh: "舊魚市場搬咗去豐洲之後，外面嘅「場外市場」仲有幾百間舖，賣海鮮、刺身、玉子燒同廚具。", en: "The wholesale market moved to Toyosu, but the outer market still has hundreds of stalls for seafood, sashimi, tamagoyaki and kitchenware." },
    todo: [
      { zh: "食海鮮丼或者壽司做早餐", en: "Seafood rice bowl or sushi for breakfast" },
      { zh: "食串玉子燒、燒海鮮小食", en: "Snack on tamagoyaki skewers and grilled seafood" },
      { zh: "買日本刀具、乾貨做手信", en: "Pick up Japanese knives and dried goods as gifts" }
    ],
    tips: [
      { zh: "朝早 9 點至下晝 2 點最好，好多舖下晝就收", en: "Best 9:00–14:00; many stalls close early afternoon" },
      { zh: "星期日、假期同部分星期三好多舖休息", en: "Many stalls close Sundays, holidays and some Wednesdays" },
      { zh: "巷好窄，唔好帶大行李", en: "Narrow lanes; no big luggage" }
    ]
  },
  ginza: {
    about: { zh: "東京最高級嘅購物區。和光大樓個鐘樓係銀座地標，四周係百貨公司同名店。", en: "Tokyo's most upscale shopping district. The Wako clock tower is its landmark, surrounded by department stores and flagships." },
    todo: [
      { zh: "喺和光鐘樓影相", en: "Photo at the Wako clock tower" },
      { zh: "行三越、松屋、GINZA SIX 等百貨公司", en: "Browse Mitsukoshi, Matsuya, GINZA SIX" },
      { zh: "百貨公司地庫美食街試食、買手信", en: "Taste and buy gifts in the basement food halls" },
      { zh: "伊東屋：好大間文具舖", en: "Itoya, a huge stationery store" }
    ],
    tips: [
      { zh: "星期六日中午至黃昏，中央通封路俾人行", en: "Chuo-dori becomes pedestrian-only on weekend afternoons" }
    ]
  },
  marunouchi: {
    about: { zh: "紅磚東京站係 1914 年建，修復返原貌。站前嘅丸之內一帶冬天有金色燈飾。", en: "The red-brick Tokyo Station dates from 1914 and has been restored. The Marunouchi streets around it glow with golden lights in winter." },
    todo: [
      { zh: "喺站前廣場影紅磚車站", en: "Photograph the red-brick station from the plaza" },
      { zh: "行丸之內仲通睇燈飾", en: "Walk Naka-dori under the winter lights" },
      { zh: "上 KITTE 商場天台花園，由上面望車站", en: "View the station from the KITTE rooftop garden" },
      { zh: "車站入面 Gransta 買手信、便當", en: "Gifts and bento at Gransta inside the station" }
    ],
    tips: [
      { zh: "夜晚燈飾最靚；KITTE 天台免費", en: "Best after dark; the KITTE rooftop is free" }
    ]
  },
  toyosu: {
    about: { zh: "2018 年由築地搬過嚟嘅新魚市場。可以喺參觀通道隔住玻璃睇吞拿魚拍賣，市場入面有壽司店。", en: "The new fish market that replaced Tsukiji in 2018. Watch the tuna auction through glass from visitor walkways, then eat sushi inside." },
    todo: [
      { zh: "朝早睇吞拿魚拍賣", en: "Watch the early-morning tuna auction" },
      { zh: "喺市場入面食壽司、海鮮丼", en: "Sushi or a seafood bowl inside the market" },
      { zh: "上屋頂綠化廣場望海", en: "Rooftop garden with bay views" }
    ],
    tips: [
      { zh: "拍賣好早，大約 5 點半至 6 點半", en: "The auction is very early, roughly 5:30–6:30" },
      { zh: "休市日全部唔開，要睇日曆（23 日休市）", en: "Closed on market holidays; check the calendar (closed 23 Dec)" }
    ]
  },
  planets: {
    about: { zh: "沉浸式數碼藝術館。要除鞋赤腳，有啲房要行入水入面，水最深去到膝頭。", en: "Immersive digital art museum. You go barefoot, and some rooms have you wading through knee-deep water." },
    todo: [
      { zh: "行入光影錦鯉水池", en: "Wade through the pool of projected koi" },
      { zh: "喺花海房瞓低睇", en: "Lie back in the room of floating flowers" },
      { zh: "鏡面球房影相", en: "Photos in the mirrored-sphere room" }
    ],
    tips: [
      { zh: "要預約時段，大約玩 1.5 至 2 個鐘", en: "Timed booking; allow 1.5–2 hours" },
      { zh: "著可以捲高嘅褲", en: "Wear trousers you can roll up" }
    ]
  },
  shintoyosu: {
    about: { zh: "德國式聖誕市集：大聖誕樹、小木屋攤位、熱紅酒同德國香腸。", en: "German-style Christmas market: a big tree, wooden stalls, mulled wine and sausages." },
    todo: [
      { zh: "飲熱紅酒，紀念杯可以帶走", en: "Mulled wine in a souvenir mug you can keep" },
      { zh: "食德國香腸、聖誕小食", en: "German sausages and Christmas treats" },
      { zh: "買聖誕手作小禮物", en: "Handmade Christmas gifts" }
    ],
    tips: [
      { zh: "開到 12 月 25 日；入場可能要收費", en: "Runs until 25 Dec; there may be an entry fee" }
    ]
  },
  borderless: {
    about: { zh: "喺麻布台之丘嘅數碼藝術館。冇固定路線，作品會喺房與房之間流動，要自己慢慢搵。（相片係麻布台之丘外面。）", en: "Digital art museum in Azabudai Hills with no set route; artworks drift between rooms for you to discover. (Photo shows Azabudai Hills outside.)" },
    todo: [
      { zh: "隨意行，搵唔同嘅房間", en: "Wander and discover the rooms" },
      { zh: "燈海房：成千盞燈", en: "The room of thousands of lamps" },
      { zh: "EN TEA HOUSE：杯茶入面會開花", en: "EN TEA HOUSE, where flowers bloom in your tea" }
    ],
    tips: [
      { zh: "要預約時段，大約 2 至 3 個鐘", en: "Timed booking; allow 2–3 hours" },
      { zh: "26 至 30 日開到夜晚，聖誕後好選擇", en: "Open late 26–30 Dec, a good post-Christmas pick" }
    ]
  },
  tower: {
    about: { zh: "1958 年建成、333 米高嘅紅白色鐵塔，東京最經典嘅地標。夜晚亮燈好靚。", en: "The red-and-white 333m tower from 1958, Tokyo's classic landmark, beautifully lit at night." },
    todo: [
      { zh: "上 150 米 Main Deck 觀景台", en: "Go up to the 150m Main Deck" },
      { zh: "250 米 Top Deck 要預約導覽", en: "The 250m Top Deck needs a booked tour" },
      { zh: "喺芝公園或者增上寺影鐵塔全景", en: "Full-tower photos from Shiba Park or Zojo-ji temple" }
    ],
    tips: [
      { zh: "夜晚亮燈最靚", en: "Best after dark when lit" }
    ]
  },
  shiba: {
    about: { zh: "東京鐵塔腳下嘅公園。12 月有聖誕市集，可以一路飲熱紅酒一路望住鐵塔。", en: "The park at the foot of Tokyo Tower. In December it hosts a Christmas market with the tower as backdrop." },
    todo: [
      { zh: "聖誕市集：熱紅酒、德國小食", en: "Christmas market: mulled wine and German snacks" },
      { zh: "影東京鐵塔", en: "Photograph Tokyo Tower" },
      { zh: "行埋鐵塔前面嘅增上寺", en: "Visit Zojo-ji temple in front of the tower" }
    ],
    tips: [
      { zh: "市集開到 12 月 25 日；入場可能要收費", en: "Market runs until 25 Dec; there may be an entry fee" },
      { zh: "天黑之後最有氣氛", en: "Most atmospheric after dark" }
    ]
  },
  disney: {
    about: { zh: "兩個園：迪士尼海洋 (DisneySea) 全世界獨有，有火山、威尼斯運河，好多大人鍾意；迪士尼樂園 (Disneyland) 有城堡同巡遊，比較經典。", en: "Two parks. DisneySea is unique to Tokyo, with a volcano and Venetian canals, and a favourite with adults. Disneyland is the classic castle-and-parades park." },
    todo: [
      { zh: "海洋：2024 年開嘅新區 Fantasy Springs（冰雪奇緣、魔髮奇緣、小飛俠）", en: "DisneySea: Fantasy Springs, opened 2024 (Frozen, Tangled, Peter Pan)" },
      { zh: "聖誕裝飾同聖誕表演（做到 25 日）", en: "Christmas decorations and shows (until 25 Dec)" },
      { zh: "夜間表演", en: "The nighttime show" }
    ],
    tips: [
      { zh: "門票要網上預先買，唔同日子唔同價", en: "Buy tickets online in advance; prices vary by date" },
      { zh: "可以加錢買快速通行 (Premier Access)", en: "Premier Access fast passes cost extra" },
      { zh: "成日行路，著好鞋", en: "A full day on your feet; wear good shoes" }
    ]
  },
  tenyu: {
    about: { zh: "箱根高級溫泉酒店。每間房都有自己嘅露天溫泉，望住山景。", en: "Upscale Hakone onsen hotel where every room has its own open-air hot-spring bath with mountain views." },
    todo: [
      { zh: "喺房間露天溫泉浸", en: "Soak in your room's open-air bath" },
      { zh: "試埋大浴場", en: "Try the large shared baths too" },
      { zh: "酒店晚餐", en: "Dinner at the hotel" }
    ],
    tips: [
      { zh: "由強羅站有酒店接駁車", en: "Hotel shuttle from Gora Station" }
    ]
  },
  hakoneShrine: {
    about: { zh: "蘆之湖邊嘅神社。紅色「平和鳥居」企喺湖水入面，係箱根最出名嘅影相位。", en: "Lakeside shrine whose red Peace Torii stands in the water of Lake Ashi, Hakone's most famous photo spot." },
    todo: [
      { zh: "喺湖邊鳥居影相", en: "Photo at the torii in the lake" },
      { zh: "行上杉樹林參拜神社", en: "Climb through the cedar forest to the shrine" },
      { zh: "坐海賊船遊蘆之湖", en: "Cruise Lake Ashi on the pirate ship" },
      { zh: "天晴可以望到富士山", en: "Mt Fuji appears on clear days" }
    ],
    tips: [
      { zh: "影鳥居要排隊，可能 30 分鐘以上", en: "The torii photo queue can top 30 minutes" },
      { zh: "去神社有樓梯", en: "There are stairs up to the shrine" },
      { zh: "冬天朝早最易見富士山", en: "Winter mornings give the best Fuji odds" }
    ]
  },
  hachimangu: {
    about: { zh: "鎌倉最重要嘅神社，有九百幾年歷史。神社前面嘅小町通係熱鬧嘅小食街。", en: "Kamakura's most important shrine, over 900 years old. Komachi-dori in front is a lively snack street." },
    todo: [
      { zh: "行大參道入神社", en: "Walk the grand approach to the shrine" },
      { zh: "行樓梯上本宮，望返成條參道", en: "Climb to the main hall for the view down the approach" },
      { zh: "小町通食小食、買手信", en: "Snacks and souvenirs on Komachi-dori" }
    ],
    tips: [
      { zh: "鎌倉站行過去約 10 分鐘", en: "About 10 minutes on foot from Kamakura Station" }
    ]
  },
  daibutsu: {
    about: { zh: "高德院嘅鎌倉大佛：七百幾年前鑄造、十幾米高嘅露天青銅佛像。", en: "The Great Buddha of Kotoku-in: an open-air bronze Buddha over ten metres tall, cast more than 700 years ago." },
    todo: [
      { zh: "睇大佛，影相", en: "See and photograph the Buddha" },
      { zh: "行埋附近長谷寺，可以望到海", en: "Visit nearby Hase-dera for its sea view" }
    ],
    tips: [
      { zh: "要由鎌倉轉江之電，喺長谷站落車行 7 分鐘", en: "Take the Enoden line to Hase, then walk 7 minutes" },
      { zh: "入場要收少少錢", en: "Small entry fee" }
    ]
  },
  minatomirai: {
    about: { zh: "橫濱海旁新區：Landmark Tower、摩天輪、紅磚倉庫同海邊散步道。", en: "Yokohama's waterfront district: Landmark Tower, the big Ferris wheel, the Red Brick Warehouses and harbour promenades." },
    todo: [
      { zh: "行紅磚倉庫", en: "Explore the Red Brick Warehouses" },
      { zh: "坐摩天輪", en: "Ride the Ferris wheel" },
      { zh: "杯麵博物館：自己設計杯麵", en: "Cup Noodles Museum: design your own cup" },
      { zh: "海邊散步睇夜景", en: "Harbourside walk for the night view" }
    ],
    tips: [
      { zh: "黃昏至夜晚最靚", en: "Best from sunset into the evening" }
    ]
  },
  chinatown: {
    about: { zh: "日本最大嘅唐人街，幾百間中菜館同小食檔。", en: "Japan's largest Chinatown, with hundreds of Chinese restaurants and food stalls." },
    todo: [
      { zh: "喺彩色牌樓影相", en: "Photos at the colourful gates" },
      { zh: "食小籠包、肉包、街邊小食", en: "Soup dumplings, pork buns and street snacks" },
      { zh: "睇關帝廟", en: "Visit the Kanteibyo temple" }
    ],
    tips: [
      { zh: "元町・中華街站出站就到", en: "Right outside Motomachi-Chukagai Station" }
    ]
  },
  kichijoji: {
    about: { zh: "東京人最鍾意嘅住宅區之一。井之頭公園有大湖，周圍係咖啡店同小店。", en: "One of Tokyo's best-loved neighbourhoods. Inokashira Park has a big pond, with cafés and small shops around it." },
    todo: [
      { zh: "繞湖散步，划天鵝船", en: "Walk around the pond or pedal a swan boat" },
      { zh: "行吉祥寺站附近商店街同咖啡店", en: "Browse the shopping streets and cafés near the station" },
      { zh: "公園南邊有吉卜力美術館", en: "The Ghibli Museum is at the park's south end" }
    ],
    tips: [
      { zh: "吉卜力美術館一定要預早訂飛", en: "The Ghibli Museum needs tickets booked well ahead" }
    ]
  },
  yanaka: {
    about: { zh: "東京保留得最好嘅舊城區，戰時冇被燒，仲係木屋、寺廟同老舖。", en: "Tokyo's best-preserved old neighbourhood, spared in the war: wooden houses, temples and old shops." },
    todo: [
      { zh: "谷中銀座商店街食炸肉餅等小食", en: "Fried menchi-katsu and other snacks on Yanaka Ginza" },
      { zh: "喺「夕陽階段」睇日落", en: "Sunset from the Yuyake Dandan steps" },
      { zh: "行到根津神社睇紅色鳥居", en: "Walk on to Nezu Shrine and its red torii tunnel" }
    ],
    tips: [
      { zh: "由日暮里站行過去；大部分係平路", en: "Walk from Nippori Station; mostly flat" }
    ]
  },
  akiba: {
    about: { zh: "電器、動漫、模型嘅天堂。成條街都係電器舖、模型舖同扭蛋機。", en: "Paradise for electronics, anime and models: streets of gadget shops, hobby stores and capsule-toy machines." },
    todo: [
      { zh: "Yodobashi Akiba 大型電器舖", en: "Yodobashi Akiba megastore" },
      { zh: "Radio Kaikan：成棟都係模型、動漫舖", en: "Radio Kaikan, a whole building of models and anime" },
      { zh: "扭蛋專門店", en: "Capsule-toy (gacha) shops" }
    ],
    tips: [
      { zh: "星期日下晝中央通封路俾人行", en: "Chuo-dori is pedestrian-only on Sunday afternoons" }
    ]
  },
  nakano: {
    about: { zh: "1966 年開嘅舊商場，入面幾百間二手動漫、模型、古董錶舖，係 Mandarake 嘅大本營。", en: "A 1966 shopping complex packed with hundreds of second-hand anime, model and vintage watch shops; home base of Mandarake." },
    todo: [
      { zh: "行勻 Mandarake 各間分店", en: "Explore the many Mandarake branches" },
      { zh: "睇舊玩具、古董錶", en: "Vintage toys and watches" },
      { zh: "地庫有超市同小食", en: "Supermarket and snacks in the basement" }
    ],
    tips: [
      { zh: "好多舖中午先開", en: "Many shops open around noon" },
      { zh: "中野站北口經 Sun Mall 行 5 分鐘", en: "5 minutes from Nakano Station's north exit through Sun Mall" }
    ]
  }
};
