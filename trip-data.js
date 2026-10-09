// Trip content. Edit this file to update the page; index.html only handles layout.
// Source of truth for planning is the markdown in the parent folder; this file is the family-facing version.
// Every text field has zh (Traditional Chinese, shown by default) and en.
//
// Shapes
//   places[id]: { zh, en, ja (taxi card), q (Google Maps search), url (official site, optional) }
//   calendar[]: { date, plan: idea code or null, fixed: text (arrival/departure), notes: [text] }
//   ideas[]:    { code, pick: "suggested" | "either" | "alt", hours, walk 1-3, title, why, items: [...] }
//   items[]:    place row { time?, place | name, sub?, status? } | { type: "leg", from, to, via, dur } | { type: "tbd" | "note", text }
//   food[]:     { title, intro?, empty?, items: [{ place, kind, price?, status, note?, plan? }] }
//   status:     "booked" (已訂) | "tobook" (未訂) | "first" (優先考慮) | "idea" (候選) | "review" (保留？)
//   leg dur:    "80 min", "~40 min" (~ = approx, shown as 約), "2.5h"

window.TRIP = {
  version: 4,
  updated: "2026-10-09",
  changes: {
    zh: "日子改為 12 月 20 至 30 日（10 晚）。行程改為 11 個選擇（A 至 K），未排日子。新增餐廳候選，同埋留咗一餐俾阿姨揀。字大咗、按鈕大咗，手機易睇啲。",
    en: "Dates now 20–30 Dec (10 nights). The plan is now 11 day options (A–K), not yet placed on dates. New restaurant shortlist, with one dinner kept for Dad's partner to choose. Bigger text and buttons for phones."
  },
  status: { zh: "計劃中 · 全部未訂", en: "Still planning · nothing booked" },
  start: "2026-12-20",
  end: "2026-12-30",
  datesConfirmed: false,
  people: { zh: "4 人", en: "4 people" },

  places: {
    // A · Old Tokyo
    sensoji:   { zh: "淺草寺", en: "Senso-ji, Asakusa", ja: "浅草寺", q: "Senso-ji Temple" },
    sumida:    { zh: "隅田川河畔", en: "Sumida riverside", ja: "隅田公園", q: "Sumida Park" },
    skytree:   { zh: "東京晴空塔", en: "Tokyo Skytree", ja: "東京スカイツリー", q: "Tokyo Skytree" },
    // B · Harajuku to Shibuya
    meiji:     { zh: "明治神宮", en: "Meiji Jingu", ja: "明治神宮", q: "Meiji Jingu" },
    omotesando:{ zh: "表參道", en: "Omotesando", ja: "表参道駅", q: "Omotesando" },
    shibuya:   { zh: "澀谷", en: "Shibuya", ja: "渋谷駅", q: "Shibuya Scramble Crossing" },
    // C · Central
    tsukiji:   { zh: "築地場外市場", en: "Tsukiji Outer Market", ja: "築地場外市場", q: "Tsukiji Outer Market" },
    ginza:     { zh: "銀座", en: "Ginza", ja: "銀座四丁目交差点", q: "Ginza 4-chome" },
    marunouchi:{ zh: "東京站・丸之內", en: "Tokyo Station, Marunouchi", ja: "東京駅 丸の内駅舎", q: "Tokyo Station Marunouchi" },
    // D · Toyosu
    toyosu:    { zh: "豐洲市場", en: "Toyosu Market", ja: "豊洲市場", q: "Toyosu Market" },
    planets:   { zh: "teamLab Planets", en: "teamLab Planets", ja: "チームラボプラネッツ TOKYO", q: "teamLab Planets TOKYO" },
    shintoyosu:{ zh: "新豐洲聖誕市集", en: "Shin-Toyosu Christmas Market", ja: "新豊洲駅", q: "Tokyo Christmas Market Shin-Toyosu" },
    // E · Azabudai / Tokyo Tower
    borderless:{ zh: "teamLab Borderless（麻布台之丘）", en: "teamLab Borderless (Azabudai Hills)", ja: "麻布台ヒルズ チームラボボーダレス", q: "teamLab Borderless Azabudai Hills" },
    tower:     { zh: "東京鐵塔", en: "Tokyo Tower", ja: "東京タワー", q: "Tokyo Tower" },
    shiba:     { zh: "芝公園聖誕市集", en: "Shiba Park Christmas Market", ja: "芝公園", q: "Tokyo Christmas Market Shiba Park" },
    // F · Disney
    disney:    { zh: "東京迪士尼度假區", en: "Tokyo Disney Resort", ja: "東京ディズニーリゾート", q: "Tokyo Disney Resort" },
    // G · Hakone
    tenyu:     { zh: "箱根小涌園 天悠", en: "Hakone Kowakien Ten-yu", ja: "箱根小涌園 天悠", q: "Hakone Kowakien Ten-yu", url: "https://www.ten-yu.com/en/" },
    hakoneShrine: { zh: "箱根神社・蘆之湖", en: "Hakone Shrine, Lake Ashi", ja: "箱根神社", q: "Hakone Shrine" },
    // H · Kamakura
    hachimangu:{ zh: "鶴岡八幡宮・小町通", en: "Tsurugaoka Hachimangu, Komachi-dori", ja: "鶴岡八幡宮", q: "Tsurugaoka Hachimangu" },
    daibutsu:  { zh: "鎌倉大佛", en: "Great Buddha of Kamakura", ja: "鎌倉大仏 高徳院", q: "Kotoku-in Great Buddha" },
    // I · Yokohama
    minatomirai:{ zh: "港未來", en: "Minato Mirai", ja: "みなとみらい", q: "Minato Mirai Yokohama" },
    chinatown: { zh: "橫濱中華街", en: "Yokohama Chinatown", ja: "横浜中華街", q: "Yokohama Chinatown" },
    // J · Slow day
    kichijoji: { zh: "吉祥寺・井之頭公園", en: "Kichijoji, Inokashira Park", ja: "井の頭恩賜公園", q: "Inokashira Park" },
    yanaka:    { zh: "谷中・根津", en: "Yanaka and Nezu", ja: "谷中銀座商店街", q: "Yanaka Ginza" },
    // K · Hobby day
    akiba:     { zh: "秋葉原", en: "Akihabara", ja: "秋葉原駅", q: "Akihabara Station" },
    nakano:    { zh: "中野百老匯", en: "Nakano Broadway", ja: "中野ブロードウェイ", q: "Nakano Broadway" },

    // Restaurants
    honda:     { zh: "麵處 本田（秋葉原本店）", en: "Mendokoro Honda, Akihabara", ja: "麺処 ほん田 秋葉原本店", q: "Mendokoro Honda Akihabara", url: "https://www.tablecheck.com/en/shops/mendokoro-honda-akihabara/reserve" },
    hachigo:   { zh: "銀座 八五", en: "Ginza Hachigo", ja: "銀座 八五", q: "Ginza Hachigo ramen", url: "https://www.tablecheck.com/en/shops/ginza-hachigou/reserve" },
    denkushi:  { zh: "DEN KUSHI FLORI", en: "DEN KUSHI FLORI", ja: "デンクシフロリ", q: "DEN KUSHI FLORI", url: "https://www.denkushiflori.com/" },
    florilege: { zh: "Florilège", en: "Florilège", ja: "フロリレージュ 麻布台ヒルズ", q: "Florilege Azabudai Hills", url: "https://www.aoyama-florilege.jp/en/reservations" },
    bistro0711:{ zh: "0711 GiNZA BiSTRO", en: "0711 GiNZA BiSTRO", ja: "銀座8丁目 0711 GiNZA BiSTRO", q: "0711 GiNZA BiSTRO", url: "https://www.0711ginzabistro.com/" },
    largent:   { zh: "L'ARGENT", en: "L'ARGENT", ja: "ラルジャン 霞が関", q: "L'ARGENT Kasumigaseki", url: "https://largent.tokyo/en/reservation/" },
    maz:       { zh: "MAZ", en: "MAZ", ja: "東京ガーデンテラス紀尾井町 MAZ", q: "MAZ Tokyo Garden Terrace Kioicho", url: "https://maztokyo.jp/?lang=en" },
    ushigoro:  { zh: "USHIGORO S. 銀座", en: "USHIGORO S. Ginza", ja: "銀座 USHIGORO S.", q: "USHIGORO S. GINZA", url: "https://ushigoro-s.com/menu.html" },
    azur:      { zh: "AZUR et MASA UEKI", en: "AZUR et MASA UEKI", ja: "アズール エ マサ ウエキ 西麻布", q: "AZUR et MASA UEKI", url: "https://restaurant-azur.com/" }
  },

  calendar: [
    { date: "2026-12-20", fixed: { zh: "抵達東京，夜晚輕鬆啲", en: "Arrive in Tokyo, easy evening" }, notes: [{ zh: "航班待定", en: "Flights TBC" }] },
    { date: "2026-12-21", plan: null },
    { date: "2026-12-22", plan: null, notes: [{ zh: "迪士尼門票比 24、25 日平", en: "Disney tickets cheaper than on 24–25 Dec" }] },
    { date: "2026-12-23", plan: null, notes: [{ zh: "豐洲市場休市", en: "Toyosu Market closed" }] },
    { date: "2026-12-24", plan: null, notes: [{ zh: "平安夜", en: "Christmas Eve" }] },
    { date: "2026-12-25", plan: null, notes: [{ zh: "迪士尼聖誕活動、聖誕市集最後一日", en: "Last day of Disney Christmas and the Christmas markets" }] },
    { date: "2026-12-26", plan: null, notes: [{ zh: "teamLab Borderless 26–30 日開到夜晚", en: "teamLab Borderless open late 26–30 Dec" }] },
    { date: "2026-12-27", plan: null, notes: [{ zh: "豐洲市場特別星期日開放", en: "Toyosu Market has a special Sunday opening" }] },
    { date: "2026-12-28", plan: null },
    { date: "2026-12-29", plan: null },
    { date: "2026-12-30", fixed: { zh: "回程，唔去遠", en: "Fly home, nothing far" }, notes: [{ zh: "航班時間待定", en: "Flight time TBC" }] }
  ],

  periods: [
    { from: "2026-12-21", to: "2026-12-25", title: { zh: "聖誕期間", en: "Christmas days" }, hint: { zh: "迪士尼同聖誕市集要喺呢幾日", en: "Disney and the Christmas markets must fit in here" } },
    { from: "2026-12-26", to: "2026-12-29", title: { zh: "聖誕之後", en: "After Christmas" }, hint: { zh: "箱根、近郊一日遊、行街或者休息", en: "Hakone, a day trip, shopping or rest" } }
  ],

  ideas: [
    {
      code: "A", pick: "suggested", hours: "6–8", walk: 2,
      title: { zh: "舊東京：淺草、晴空塔", en: "Old Tokyo: Asakusa and Skytree" },
      why: { zh: "寺廟、老街小食，再上晴空塔睇全東京。新舊對比好易明。", en: "Temple streets and traditional snacks, then the city view from Skytree." },
      items: [
        { time: { zh: "上晝", en: "Morning" }, place: "sensoji", sub: { zh: "雷門、仲見世通小食", en: "Kaminarimon gate, Nakamise snack street" } },
        { time: { zh: "中午", en: "Midday" }, place: "sumida", sub: { zh: "沿河散步過去", en: "Riverside walk across" } },
        { time: { zh: "下晝", en: "Afternoon" }, place: "skytree", sub: { zh: "觀景台、下面商場 Solamachi", en: "Observation deck, Solamachi mall below" } },
        { type: "note", text: { zh: "想輕鬆啲可以唔上晴空塔。", en: "Skip Skytree for a lighter day." } }
      ]
    },
    {
      code: "B", pick: "suggested", hours: "5–8", walk: 3,
      title: { zh: "原宿、表參道、澀谷", en: "Harajuku, Omotesando, Shibuya" },
      why: { zh: "神社、建築同行街，夜晚睇澀谷燈光。", en: "Shrine, architecture and shopping, then Shibuya lights at night." },
      items: [
        { time: { zh: "上晝", en: "Morning" }, place: "meiji", sub: { zh: "森林入面嘅神社", en: "Shrine in a forest" } },
        { time: { zh: "下晝", en: "Afternoon" }, place: "omotesando", sub: { zh: "由原宿行過去約 10 分鐘", en: "About 10 min walk from Harajuku" } },
        { time: { zh: "夜晚", en: "Evening" }, place: "shibuya", sub: { zh: "由表參道行過去約 20 分鐘", en: "About 20 min walk from Omotesando" } },
        { type: "note", text: { zh: "行攰咗可以搭車或者的士。晚餐可以配表參道嘅 DEN KUSHI FLORI。", en: "Train or taxi if legs are tired. Dinner could be DEN KUSHI FLORI in Omotesando." } }
      ]
    },
    {
      code: "C", pick: "suggested", hours: "5–8", walk: 2,
      title: { zh: "築地、銀座、東京站", en: "Tsukiji, Ginza, Tokyo Station" },
      why: { zh: "朝早食海鮮，銀座行街，夜晚東京站丸之內燈飾。", en: "Seafood breakfast, Ginza shopping, Marunouchi lights in the evening." },
      items: [
        { time: { zh: "朝早", en: "Morning" }, place: "tsukiji", sub: { zh: "9 點至 2 點最好，唔好帶大行李", en: "Best 9:00–14:00; no big luggage" } },
        { time: { zh: "中午", en: "Midday" }, place: "ginza", sub: { zh: "我自己食拉麵（銀座 八五），你哋行街", en: "My solo ramen (Ginza Hachigo) while you browse" } },
        { time: { zh: "夜晚", en: "Evening" }, place: "marunouchi", sub: { zh: "紅磚車站同燈飾", en: "Red-brick station and lights" } },
        { type: "note", text: { zh: "唔好同去箱根嗰日排喺同一日。", en: "Keep this separate from the Hakone travel day." } }
      ]
    },
    {
      code: "D", pick: "either", hours: "6–8", walk: 2,
      title: { zh: "豐洲：市場、teamLab Planets、聖誕市集", en: "Toyosu: market, teamLab Planets, Christmas market" },
      why: { zh: "三個地方都喺新豐洲附近，唔使走來走去。", en: "Three stops all close to Shin-Toyosu." },
      items: [
        { time: { zh: "朝早", en: "Morning" }, place: "toyosu", sub: { zh: "睇魚市場，食海鮮", en: "Fish market and seafood" } },
        { time: { zh: "下晝", en: "Afternoon" }, place: "planets", sub: { zh: "沉浸式藝術，要赤腳行水", en: "Immersive art; you walk barefoot through water" } },
        { time: { zh: "夜晚", en: "Evening" }, place: "shintoyosu" },
        { type: "tbd", text: { zh: "同 E 二揀一（兩個都係 teamLab）。要揀市場開門、又喺 25 日或之前嘅日子。", en: "Pick D or E (both feature teamLab). Needs a market-open day on or before 25 Dec." } }
      ]
    },
    {
      code: "E", pick: "either", hours: "5–8", walk: 2,
      title: { zh: "麻布台、東京鐵塔、芝公園", en: "Azabudai, Tokyo Tower, Shiba Park" },
      why: { zh: "視覺效果最強嘅一日。", en: "The most visual day." },
      items: [
        { time: { zh: "下晝", en: "Afternoon" }, place: "borderless", sub: { zh: "要預約入場時間", en: "Timed entry, book ahead" } },
        { time: { zh: "黃昏", en: "Dusk" }, place: "tower" },
        { time: { zh: "夜晚", en: "Evening" }, place: "shiba", sub: { zh: "開到 12 月 25 日", en: "Open until 25 Dec" } },
        { type: "note", text: { zh: "可以拆開兩日：teamLab 一日，聖誕市集另一日。晚餐可以配麻布台嘅 Florilège。", en: "Can be split: teamLab one day, Christmas market another. Dinner could be Florilège in Azabudai." } }
      ]
    },
    {
      code: "F", pick: "suggested", hours: { zh: "全日", en: "Full day" }, walk: 3,
      title: { zh: "迪士尼", en: "Disney" },
      why: { zh: "聖誕活動做到 12 月 25 日。", en: "Christmas events run until 25 Dec." },
      items: [
        { time: { zh: "全日", en: "All day" }, place: "disney" },
        { type: "tbd", text: { zh: "去迪士尼海洋定迪士尼樂園？", en: "DisneySea or Disneyland?" } },
        { type: "note", text: { zh: "22 日門票比 24、25 日平。睇完夜場唔好再趕去遠嘅餐廳，第二日朝早輕鬆啲。", en: "22 Dec tickets are cheaper than 24–25. No far-away dinner booking after the night show; keep the next morning easy." } }
      ]
    },
    {
      code: "G", pick: "suggested", hours: { zh: "兩日一夜", en: "2 days, 1 night" }, walk: 2,
      title: { zh: "箱根溫泉一晚", en: "Hakone onsen overnight" },
      why: { zh: "浸溫泉、睇湖景。要用兩日，同搬一次酒店。", en: "Hot springs and lake views. Uses two days and one hotel change." },
      items: [
        { type: "leg", from: { zh: "新宿", en: "Shinjuku" }, to: { zh: "箱根湯本", en: "Hakone-Yumoto" }, via: { zh: "小田急浪漫特快", en: "Odakyu Romancecar" }, dur: "80 min" },
        { type: "leg", from: { zh: "箱根湯本", en: "Hakone-Yumoto" }, to: { zh: "強羅", en: "Gora" }, via: { zh: "登山電車，再轉酒店接駁車", en: "Mountain railway, then hotel shuttle" }, dur: "~40 min" },
        { time: { zh: "第一晚", en: "Night 1" }, place: "tenyu", sub: { zh: "或者其他溫泉旅館", en: "Or another ryokan" } },
        { time: { zh: "第二日", en: "Day 2" }, place: "hakoneShrine", sub: { zh: "湖邊紅色鳥居，之後返東京", en: "Red gate on the lake, then back to Tokyo" } },
        { type: "note", text: { zh: "去箱根嗰日唔好再去市場。返東京嗰晚唔好排嘢。", en: "No market stop on the way there. Keep the return evening free." } },
        { type: "tbd", text: { zh: "箱根住一晚，定係多留東京一日？", en: "One night in Hakone, or an extra day in Tokyo?" } }
      ]
    },
    {
      code: "K", pick: "suggested", hours: "6–8", walk: 2,
      title: { zh: "我嘅興趣日：秋葉原 → 中野", en: "My hobby day: Akihabara → Nakano" },
      why: { zh: "我一定想去。你哋可以一齊，或者另外行自己鍾意嘅地方。", en: "A must for me. Join, or the three of you can do something else." },
      items: [
        { time: { zh: "上晝", en: "Morning" }, place: "akiba", sub: { zh: "電器、模型、動漫舖", en: "Electronics, models, anime shops" } },
        { time: { zh: "中午", en: "Midday" }, place: "honda", sub: { zh: "我自己食拉麵，可能要等位", en: "My solo ramen; may need to queue" } },
        { type: "leg", from: { zh: "秋葉原", en: "Akihabara" }, to: { zh: "中野", en: "Nakano" }, via: { zh: "JR 中央・總武線", en: "JR Chuo-Sobu Line" }, dur: "30 min" },
        { time: { zh: "下晝", en: "Afternoon" }, place: "nakano", sub: { zh: "出站行 5 分鐘", en: "5 min walk from the station" } }
      ]
    },
    {
      code: "H", pick: "alt", hours: "7–9", walk: 3,
      title: { zh: "鎌倉一日遊", en: "Kamakura day trip" },
      why: { zh: "古都風景，代替多一日東京行街。", en: "Historic town, instead of another Tokyo shopping day." },
      items: [
        { type: "leg", from: { zh: "東京站", en: "Tokyo Station" }, to: { zh: "鎌倉", en: "Kamakura" }, via: { zh: "JR", en: "JR" }, dur: "55 min" },
        { time: { zh: "上晝", en: "Morning" }, place: "hachimangu" },
        { time: { zh: "下晝", en: "Afternoon" }, place: "daibutsu", sub: { zh: "要轉江之電", en: "Change to the local Enoden line" } }
      ]
    },
    {
      code: "I", pick: "alt", hours: "6–8", walk: 2,
      title: { zh: "橫濱一日遊", en: "Yokohama day trip" },
      why: { zh: "海港景色加中華街食嘢，比鎌倉輕鬆。", en: "Harbour views and Chinatown food; lighter than Kamakura." },
      items: [
        { time: { zh: "下晝", en: "Afternoon" }, place: "minatomirai", sub: { zh: "由東京市中心去唔使一個鐘", en: "Under an hour from central Tokyo" } },
        { time: { zh: "夜晚", en: "Evening" }, place: "chinatown" }
      ]
    },
    {
      code: "J", pick: "alt", hours: "4–6", walk: 1,
      title: { zh: "慢活一日", en: "Slow day" },
      why: { zh: "散步、咖啡店、小店。迪士尼或者箱根之後休息用。", en: "Strolls, cafés and small shops. A rest day after Disney or Hakone." },
      items: [
        { time: { zh: "揀一個", en: "Pick one" }, place: "kichijoji" },
        { time: { zh: "或者", en: "Or" }, place: "yanaka" }
      ]
    }
  ],

  food: [
    {
      title: { zh: "我自己食嘅拉麵", en: "My solo ramen" },
      intro: { zh: "兩間都係東京拉麵大賞 (TRY) 得獎店。", en: "Both are Tokyo Ramen of the Year (TRY) winners." },
      items: [
        { place: "honda", plan: "K", kind: { zh: "醬油沾麵", en: "Shoyu tsukemen" }, status: "first", note: { zh: "可以網上預約「優先到店時間」，但都可能要等。逢星期三休息。", en: "Can request a priority arrival time online; may still wait. Closed Wednesdays." } },
        { place: "hachigo", plan: "C", kind: { zh: "鹽味拉麵，法國廚師背景", en: "Shio ramen, French-chef background" }, price: { zh: "訂位費 ¥500", en: "¥500 booking fee" }, status: "first", note: { zh: "每個星期六朝早 9 點（日本時間）開放下個星期嘅訂位。", en: "Bookings for the following week open Saturdays 9:00 Japan time." } }
      ]
    },
    {
      title: { zh: "太太揀嘅創意菜", en: "My wife's creative dinners" },
      intro: { zh: "揀嗰日行程完結附近嘅餐廳，唔使專登過區。", en: "Chosen to match where that day ends, so no cross-town trips." },
      items: [
        { place: "denkushi", plan: "B", kind: { zh: "日法融合 · 表參道", en: "Japanese-French · Omotesando" }, price: { zh: "每位 ¥13,000 + 10%", en: "¥13,000 pp + 10%" }, status: "first" },
        { place: "florilege", plan: "E", kind: { zh: "創意法國菜 · 麻布台", en: "Creative French · Azabudai" }, price: { zh: "每位 ¥24,000 + 10%", en: "¥24,000 pp + 10%" }, status: "idea", note: { zh: "大約三個鐘。", en: "About three hours." } },
        { place: "bistro0711", plan: "C", kind: { zh: "法式小館 · 銀座", en: "French bistro · Ginza" }, status: "idea", note: { zh: "散叫，比套餐輕鬆。", en: "À la carte; lighter than a tasting menu." } },
        { place: "largent", kind: { zh: "現代法國菜 · 霞關", en: "Modern French · Kasumigaseki" }, status: "idea", note: { zh: "去年計劃入面有。最遲 7:30pm 落單，逢星期四休息。", en: "From last year's plan. Last order 7:30pm, closed Thursdays." } },
        { place: "maz", kind: { zh: "秘魯菜配日本食材 · 紀尾井町（赤坂見附）", en: "Peruvian with Japanese produce · Kioicho (Akasaka-mitsuke)" }, price: { zh: "每位 ¥33,000 + 10%", en: "¥33,000 pp + 10%" }, status: "idea", note: { zh: "唔順路，除非嗰日剛好喺附近。", en: "Off-route unless we're already nearby." } }
      ]
    },
    {
      title: { zh: "留一餐俾阿姨揀", en: "One dinner for Dad's partner" },
      empty: { zh: "阿姨想食咩？話我哋知，我哋配埋附近嗰日。", en: "What would she like? Tell us and we'll match it to a nearby day." }
    },
    {
      title: { zh: "去年計劃嘅餐廳", en: "From last year's plan" },
      items: [
        { place: "ushigoro", kind: { zh: "高級燒肉 · 銀座", en: "Upscale yakiniku · Ginza" }, status: "review" },
        { place: "azur", kind: { zh: "法國菜 · 西麻布", en: "French · Nishiazabu" }, status: "review", note: { zh: "聖誕新年期間只做特別套餐。", en: "Special Christmas/New Year course only." } }
      ]
    }
  ],

  facts: [
    { title: { zh: "聖誕活動做到 25 日", en: "Christmas ends on the 25th" }, text: { zh: "迪士尼聖誕、芝公園同新豐洲聖誕市集，全部 12 月 25 日完。", en: "Disney Christmas and both Christmas markets end on 25 Dec." } },
    { title: { zh: "豐洲市場", en: "Toyosu Market" }, text: { zh: "23 日休市；27 日（星期日）特別開放。", en: "Closed 23 Dec; special Sunday opening on 27 Dec." } },
    { title: { zh: "東京國立博物館", en: "Tokyo National Museum" }, text: { zh: "呢段時間唔適合：22–25 日只開少部分，26–31 日休館。", en: "Not a good fit: only partly open 22–25 Dec, closed 26–31 Dec." } },
    { title: { zh: "每日兩個區", en: "Two areas a day" }, text: { zh: "每日大約去兩個區，中間食飯同搭車，唔會太攰。", en: "About two areas a day, with a meal and travel between, keeps the pace comfortable." } },
    { title: { zh: "時間係估計", en: "Times are estimates" }, text: { zh: "上面寫嘅時數係大概，未計門口到門口。訂咗酒店再計準。", en: "Durations are rough, not door to door. We'll firm them up once the hotel is booked." } }
  ]
};
