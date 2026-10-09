// Trip content. Edit this file to update the page; index.html only handles layout.
// Source of truth for planning is the markdown in the parent folder; this file is the family-facing version.
// Every text field has zh (Traditional Chinese, shown by default) and en.
//
// Shapes
//   places[id]: { zh, en, ja (taxi card), q (Google Maps search), url (official site, optional) }
//   calendar[]: { date, plan: idea code or null, fixed: text (arrival/departure), notes: [text] }
//   ideas[]:    { code, pick: "suggested" | "either" | "alt", hours, walk 1-3, title, why, items: [...] }
//   items[]:    place row { time?, place | name, sub?, status? } | { type: "leg", from, to, via, dur } | { type: "tbd" | "note", text }
//   hotels[]:   { place, status, area, facts: [text], note }
//   food[]:     { title, intro?, empty?, items?: [row], sub?: [{ title, plan?, items: [row] }] (sub groups render collapsed) }
//               row = { place, kind, price?, status?, note?, plan? }
//   status:     "booked" (已訂) | "tobook" (未訂) | "first" (優先考慮) | "idea" (候選) | "review" (保留？)
//   leg dur:    "80 min", "~40 min" (~ = approx, shown as 約), "2.5h"

window.TRIP = {
  version: 6,
  updated: "2026-10-09",
  changes: {
    zh: "新設計：下面有分頁（首頁、行程、日曆、酒店、餐廳）。每個地方都有自己一頁，有相片、介紹、做咩好同小貼士。撳「的士卡」可以俾司機睇日文地址。",
    en: "New design: tabs along the bottom (Home, Plans, Calendar, Hotels, Food). Every place has its own page with a photo, what it is, what to do and tips. Tap Taxi card to show the driver the Japanese name."
  },
  status: { zh: "計劃中 · 全部未訂", en: "Still planning · nothing booked" },
  start: "2026-12-20",
  end: "2026-12-30",
  datesConfirmed: false,
  people: { zh: "Ben、Christine、John、Vanjai", en: "Ben, Christine, John, Vanjai" },

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
    seishin:   { zh: "Menya Seishin", en: "Menya Seishin", q: "Menya Seishin Ochiai" },
    sincere:   { zh: "Sincère", en: "Sincère", q: "Sincere restaurant Sendagaya", url: "https://www.tablecheck.com/ja/shops/sincere/reserve" },
    lature:    { zh: "LATURE", en: "LATURE", q: "LATURE Shibuya", url: "https://www.lature.jp/" },
    monolith:  { zh: "MONOLITH", en: "MONOLITH", q: "MONOLITH Shibuya French", url: "https://neo-monolith.com/information/" },
    maerge:    { zh: "mærge", en: "mærge", q: "maerge Minami-Aoyama", url: "https://maerge.tokyo/access/" },
    narisawa:  { zh: "NARISAWA", en: "NARISAWA", q: "NARISAWA Minami-Aoyama", url: "https://www.narisawa-yoshihiro.com/reservation" },
    esquisse:  { zh: "ESqUISSE", en: "ESqUISSE", q: "ESqUISSE Ginza", url: "https://www.esquissetokyo.com/en/reserve/" },
    sezanne:   { zh: "SÉZANNE", en: "SÉZANNE", q: "SEZANNE Four Seasons Marunouchi", url: "https://www.sezanne.tokyo/" },
    gomei:     { zh: "秋田牛鐵板燒 銀座 Gomei", en: "Akita Beef Teppanyaki Ginza Gomei", q: "Akita Beef Teppanyaki Ginza Gomei", url: "https://tabelog.com/tokyo/A1301/A130101/13187289/" },
    yamashina: { zh: "本店 山科", en: "Honten Yamashina", q: "Honten Yamashina Ginza", url: "https://honten-yamashina.jp/" },
    kitafuku:  { zh: "Kita Fuku", en: "Kita Fuku", q: "Kani Kita Fuku Ginza", url: "https://kanikitafuku.com/" },
    nakamura:  { zh: "麻布台 Nakamura", en: "Azabudai Nakamura", q: "Azabudai Nakamura teppanyaki", url: "https://naka-mura.net/" },
    sugalabo:  { zh: "SUGALABO", en: "SUGALABO", q: "SUGALABO Kamiyacho", url: "https://sugalabo.com/" },
    hommage:   { zh: "Hommage", en: "Hommage", q: "Hommage Asakusa", url: "https://www.hommage-arai.com/en/" },
    metis:     { zh: "Métis", en: "Métis", q: "Metis Roppongi", url: "https://www.tablecheck.com/en/shops/metis-roppongi/reserve" },
    bia:       { zh: "Bia 美会", en: "Bia", q: "Bia Roppongi Nogizaka", url: "https://www.tablecheck.com/zh-TW/bia-roppongi" },
    heritage:  { zh: "Héritage by Kei Kobayashi", en: "Héritage by Kei Kobayashi", q: "Heritage by Kei Kobayashi Tokyo Midtown", url: "https://www.heritagebykei.com/restaurants-in-tokyo" },
    leffervescence: { zh: "L'Effervescence", en: "L'Effervescence", q: "L'Effervescence Nishiazabu", url: "https://www.leffervescence.jp/en/" },
    asahina:   { zh: "ASAHINA Gastronome", en: "ASAHINA Gastronome", q: "ASAHINA Gastronome Kayabacho", url: "https://asahinagastronome.com/en/" },
    jambo:     { zh: "燒肉 Jambo Hanare", en: "Yakiniku Jambo Hanare", q: "Yakiniku Jambo Hanare Hongo", url: "https://yakiniku-jambo.com/hanare.html" },
    satobriand:{ zh: "SATO Briand 本店", en: "SATO Briand Honten", q: "SATO Briand Asagaya", url: "https://satobriand.yoyaku.at/" },
    fransuya:  { zh: "銀座 Fransuya", en: "Ginza Fransuya", q: "Ginza Fransuya cafe" },
    petitmec:  { zh: "Le Petit Mec 日比谷", en: "Le Petit Mec Hibiya", q: "Le Petit Mec Hibiya", url: "https://www.lepetitmec.com/" },
    coffeerin: { zh: "Coffee Rin 並木通本店", en: "Coffee Rin, Namiki-dori", q: "Coffee Rin Ginza Namiki-dori", url: "https://coffee-rin.com/mainshop/" },
    hanayama:  { zh: "花山烏冬 銀座", en: "Hanayama Udon Ginza", q: "Hanayama Udon Ginza", url: "https://www.kappo-shimizuya.pro/ginza/" },
    nanakura:  { zh: "Nanakura", en: "Nanakura", q: "Nanakura Shimbashi lunch", url: "https://nanakura.co.jp/company/" },
    viron:     { zh: "VIRON 丸之內", en: "VIRON Marunouchi", q: "VIRON Marunouchi" },
    burdigala: { zh: "BURDIGALA TOKYO", en: "BURDIGALA TOKYO", q: "BURDIGALA TOKYO Gransta", url: "https://burdigala.co.jp/shop/burdigala-tokyo" },
    landemaine:{ zh: "Maison Landemaine 麻布台", en: "Maison Landemaine Azabudai", q: "Maison Landemaine Azabudai", url: "https://www.maisonlandemainejapon.com/access" },
    anpuku:    { zh: "Anpuku 池袋", en: "Anpuku Ikebukuro", q: "Anpuku Ikebukuro", url: "https://anpuku.net/reservation/" },

    // Hotels
    sequence:  { zh: "sequence MIYASHITA PARK", en: "sequence MIYASHITA PARK", ja: "sequence MIYASHITA PARK（渋谷 ミヤシタパーク）", q: "sequence MIYASHITA PARK", url: "https://www.sequencehotels.com/miyashita-park/eng/" },
    tokyustay: { zh: "東急 Stay 新宿 Eastside", en: "Tokyu Stay Shinjuku Eastside", ja: "東急ステイ新宿イーストサイド", q: "Tokyu Stay Shinjuku Eastside", url: "https://www.tokyustay.co.jp/chn_tc/hotel/SE/" },
    stream:    { zh: "澀谷 Stream Excel 東急酒店", en: "Shibuya Stream Excel Hotel Tokyu", ja: "渋谷ストリームエクセルホテル東急", q: "Shibuya Stream Excel Hotel Tokyu", url: "https://www.tokyuhotels.co.jp/en/shibuyastream/index.html" },

    azur:      { zh: "AZUR et MASA UEKI", en: "AZUR et MASA UEKI", ja: "アズール エ マサ ウエキ 西麻布", q: "AZUR et MASA UEKI", url: "https://restaurant-azur.com/" }
  },

  calendar: [
    { date: "2026-12-20", fixed: { zh: "抵達東京，夜晚輕鬆啲", en: "Arrive in Tokyo, easy evening" }, notes: [{ zh: "航班、酒店待定", en: "Flights and hotel TBC" }] },
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
        { time: { zh: "中午", en: "Midday" }, place: "ginza", sub: { zh: "John 自己食拉麵（銀座 八五），其他人行街", en: "John's solo ramen (Ginza Hachigo) while the others browse" } },
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
      title: { zh: "John 嘅興趣日：秋葉原 → 中野", en: "John's hobby day: Akihabara → Nakano" },
      why: { zh: "John 一定想去。Ben、Christine、Vanjai 可以一齊，或者另外行自己鍾意嘅地方。", en: "A must for John. The other three can join or do something else." },
      items: [
        { time: { zh: "上晝", en: "Morning" }, place: "akiba", sub: { zh: "電器、模型、動漫舖", en: "Electronics, models, anime shops" } },
        { time: { zh: "中午", en: "Midday" }, place: "honda", sub: { zh: "John 自己食拉麵，可能要等位", en: "John's solo ramen; may need to queue" } },
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

  hotels: [
    {
      place: "sequence", status: "idea",
      area: { zh: "澀谷・原宿之間", en: "Between Shibuya and Harajuku" },
      facts: [
        { zh: "澀谷站行 3–7 分鐘，明治神宮前行 8 分鐘", en: "3–7 min walk to Shibuya Station, 8 min to Meiji-jingumae" },
        { zh: "下晝 5 點先入住，2 點退房", en: "Check-in 17:00, check-out 14:00" },
        { zh: "房間兩日先清潔一次", en: "Rooms cleaned every two days" }
      ],
      note: { zh: "位置好、有氣氛。但入住好夜，抵達日同箱根返嚟要留意。去東邊（淺草、築地）要搭耐啲車。", en: "Great location and feel. Late check-in matters on arrival day and after Hakone. East-side days need longer train rides." }
    },
    {
      place: "tokyustay", status: "idea",
      area: { zh: "新宿東邊", en: "East Shinjuku" },
      facts: [
        { zh: "東新宿站行 3 分鐘；唔係 JR 新宿站", en: "3 min to Higashi-shinjuku Station; not at JR Shinjuku itself" },
        { zh: "房間有洗衣乾衣機同微波爐", en: "In-room washer/dryer and microwave" },
        { zh: "雙床房 23–25 平方米，有相連房", en: "Twin rooms 23–25 m², adjoining rooms exist" }
      ],
      note: { zh: "住 10 晚好實用，可以洗衫。去中野同搭車去箱根都方便。", en: "Practical for 10 nights with laundry. Handy for Nakano and the Hakone train." }
    },
    {
      place: "stream", status: "idea",
      area: { zh: "澀谷站上面", en: "Above Shibuya Station" },
      facts: [
        { zh: "直接連住澀谷站，拖行李最方便", en: "Directly connected to Shibuya Station; easiest with luggage" },
        { zh: "下晝 2 點入住，11 點退房", en: "Check-in 14:00, check-out 11:00" },
        { zh: "雙床房 30 平方米起", en: "Twin rooms from 30 m²" }
      ],
      note: { zh: "較高級。房間唔保證望到澀谷十字路口，要另外問清楚。", en: "The premium option. Rooms don't guarantee a Shibuya Crossing view; ask before paying extra." }
    }
  ],

  food: [
    {
      title: { zh: "John 自己食嘅拉麵", en: "John's solo ramen" },
      intro: { zh: "東京拉麵大賞 (TRY) 得獎店。", en: "Tokyo Ramen of the Year (TRY) winners." },
      items: [
        { place: "honda", plan: "K", kind: { zh: "醬油沾麵", en: "Shoyu tsukemen" }, status: "first", note: { zh: "可以網上預約「優先到店時間」，但都可能要等。逢星期三休息。", en: "Can request a priority arrival time online; may still wait. Closed Wednesdays." } },
        { place: "hachigo", plan: "C", kind: { zh: "鹽味拉麵，法國廚師背景", en: "Shio ramen, French-chef background" }, price: { zh: "訂位費 ¥500", en: "¥500 booking fee" }, status: "first", note: { zh: "每個星期六朝早 9 點（日本時間）開放下個星期嘅訂位。", en: "Bookings for the following week open Saturdays 9:00 Japan time." } },
        { place: "seishin", kind: { zh: "2025 新店大獎 · 落合（中野附近）", en: "2025 newcomer grand prize · Ochiai (near Nakano)" }, status: "idea", note: { zh: "得 8 個位，唔接受訂位，可能排好耐。", en: "Eight seats, no reservations, possibly a long queue." } }
      ]
    },
    {
      title: { zh: "Vanjai 揀嘅創意菜", en: "Vanjai's creative dinners" },
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
      title: { zh: "留一餐俾 Christine 揀", en: "One dinner for Christine" },
      empty: { zh: "Christine 想食咩？話我哋知，我哋配埋附近嗰日。", en: "What would Christine like? Tell us and we'll match it to a nearby day." }
    },
    {
      title: { zh: "更多晚餐候選", en: "More dinner options" },
      intro: { zh: "嚟自去年嘅餐廳清單，按地區分。全部未查位，價錢係舊資料或者要再確認。撳開睇。", en: "From last year's restaurant list, by area. No availability checked; prices need rechecking. Tap to open." },
      sub: [
        {
          title: { zh: "表參道・澀谷", en: "Omotesando · Shibuya" }, plan: "B",
          items: [
            { place: "sincere", kind: { zh: "法國菜 · 千駄谷", en: "French · Sendagaya" }, status: "idea", note: { zh: "12 月 19–26 日有聖誕套餐，最多 4 位。", en: "Christmas course 19–26 Dec; max four." } },
            { place: "lature", kind: { zh: "法國菜（野味）· 澀谷", en: "French (game meats) · Shibuya" }, status: "idea", note: { zh: "有野味，要問大家食唔食。", en: "Game meats; check everyone's OK with that." } },
            { place: "monolith", kind: { zh: "古典法國菜 · 澀谷至表參道之間", en: "Classic French · between Shibuya and Omotesando" }, status: "idea" },
            { place: "maerge", kind: { zh: "現代法國菜 · 南青山", en: "Modern French · Minami-Aoyama" }, status: "idea", note: { zh: "較貴，同 DEN KUSHI FLORI 比較。", en: "Higher spend; compare with DEN KUSHI FLORI." } },
            { place: "narisawa", kind: { zh: "創新菜 · 南青山", en: "Innovative · Minami-Aoyama" }, status: "idea", note: { zh: "每月 1 號朝早 10 點（日本時間）開放下個月訂位，好難訂。", en: "Next month's bookings open on the 1st, 10:00 Japan time; very limited." } }
          ]
        },
        {
          title: { zh: "銀座・東京站", en: "Ginza · Tokyo Station" }, plan: "C",
          items: [
            { place: "esquisse", kind: { zh: "法國菜 · 銀座", en: "French · Ginza" }, price: { zh: "聖誕套餐（23–25 日）每位 ¥52,000 + 12%", en: "Christmas menu (23–25 Dec) ¥52,000 pp + 12%" }, status: "idea", note: { zh: "26–29 日只做午餐，30–31 日休息。", en: "Lunch only 26–29 Dec; closed 30–31." } },
            { place: "sezanne", kind: { zh: "法國菜 · 東京站", en: "French · Tokyo Station" }, price: { zh: "每位 ¥56,925", en: "¥56,925 pp" }, status: "idea", note: { zh: "最貴嘅選擇。", en: "The splurge option." } },
            { place: "gomei", kind: { zh: "秋田牛鐵板燒 · 銀座", en: "Akita beef teppanyaki · Ginza" }, status: "idea" },
            { place: "yamashina", kind: { zh: "鐵板燒 · 銀座", en: "Teppanyaki · Ginza" }, status: "idea" },
            { place: "kitafuku", kind: { zh: "蟹料理 · 銀座／新富", en: "Crab · Ginza / Shintomi" }, status: "idea", note: { zh: "赤坂分店已經冇咗，要揀其他分店。", en: "The Akasaka branch has closed; pick another branch." } },
            { place: "ushigoro", kind: { zh: "高級燒肉 · 銀座", en: "Upscale yakiniku · Ginza" }, status: "review", note: { zh: "去年計劃入面有。", en: "From last year's plan." } }
          ]
        },
        {
          title: { zh: "麻布台", en: "Azabudai" }, plan: "E",
          items: [
            { place: "nakamura", kind: { zh: "鐵板燒 · 麻布台之丘", en: "Teppanyaki · Azabudai Hills" }, price: { zh: "每位約 ¥60,000–100,000", en: "About ¥60,000–100,000 pp" }, status: "idea", note: { zh: "2024 年由神樂坂搬咗嚟。", en: "Moved here from Kagurazaka in 2024." } },
            { place: "sugalabo", kind: { zh: "創新菜 · 神谷町", en: "Innovative · Kamiyacho" }, status: "idea", note: { zh: "冇公開訂位，要有人介紹。", en: "No public booking; introduction only." } }
          ]
        },
        {
          title: { zh: "淺草", en: "Asakusa" }, plan: "A",
          items: [
            { place: "hommage", kind: { zh: "法國菜 · 淺草", en: "French · Asakusa" }, price: { zh: "每位 ¥50,000 + 15%", en: "¥50,000 pp + 15%" }, status: "idea", note: { zh: "12 月 26 日同 29 日起休息。好貴。", en: "Closed 26 Dec and from 29 Dec. Very costly." } }
          ]
        },
        {
          title: { zh: "六本木・西麻布（未有行程配合）", en: "Roppongi · Nishiazabu (no day plan here yet)" },
          items: [
            { place: "metis", kind: { zh: "法國菜 · 六本木", en: "French · Roppongi" }, price: { zh: "每位約 ¥30,239（已包服務費）", en: "About ¥30,239 pp incl. service" }, status: "idea", note: { zh: "有私人房（2–5 位）。好啱 Vanjai 口味。", en: "Private room for 2–5. A strong match for Vanjai." } },
            { place: "bia", kind: { zh: "日泰融合 · 乃木坂", en: "Japanese-Thai · Nogizaka" }, price: { zh: "每位 ¥35,455 + 服務費", en: "¥35,455 pp + service" }, status: "idea" },
            { place: "heritage", kind: { zh: "法國菜 · 東京中城", en: "French · Tokyo Midtown" }, status: "idea", note: { zh: "逢星期二、三休息。", en: "Closed Tuesdays and Wednesdays." } },
            { place: "leffervescence", kind: { zh: "創新菜 · 西麻布", en: "Innovative · Nishiazabu" }, status: "idea", note: { zh: "好難訂。", en: "High demand." } },
            { place: "azur", kind: { zh: "法國菜 · 西麻布", en: "French · Nishiazabu" }, status: "review", note: { zh: "去年計劃入面有。聖誕新年期間只做特別套餐。", en: "From last year's plan. Special Christmas/New Year course only." } }
          ]
        },
        {
          title: { zh: "其他地區", en: "Other areas" },
          items: [
            { place: "asahina", kind: { zh: "法國菜 · 茅場町", en: "French · Kayabacho" }, status: "idea", note: { zh: "年尾有休息，要查日子。", en: "Year-end closures; check dates." } },
            { place: "jambo", kind: { zh: "燒肉 · 本鄉三丁目", en: "Yakiniku · Hongo-sanchome" }, status: "idea", note: { zh: "最多 6 位，限時 2 個鐘。", en: "Up to six, two-hour seating." } },
            { place: "satobriand", kind: { zh: "燒肉 · 阿佐谷（中野再過啲）", en: "Yakiniku · Asagaya (past Nakano)" }, status: "idea", note: { zh: "12 月訂位 10 月 25 日中午（日本時間）開放。", en: "December bookings open 25 Oct, noon Japan time." } }
          ]
        }
      ]
    },
    {
      title: { zh: "早餐・咖啡・午餐", en: "Breakfast · coffee · lunch" },
      intro: { zh: "唔使訂位，路過就入。", en: "Walk-in places, no booking needed." },
      sub: [
        {
          title: { zh: "銀座・日比谷", en: "Ginza · Hibiya" }, plan: "C",
          items: [
            { place: "fransuya", kind: { zh: "早餐 · 朝早 8 點開", en: "Breakfast · opens 8:00" } },
            { place: "petitmec", kind: { zh: "麵包早餐 · 朝早 8 點開", en: "Bakery breakfast · opens 8:00" } },
            { place: "coffeerin", kind: { zh: "咖啡 · 10 點開", en: "Coffee · opens 10:00" } },
            { place: "hanayama", kind: { zh: "烏冬午餐 · 11 點開", en: "Udon lunch · opens 11:00" }, note: { zh: "唔接受訂位，買飛排隊。", en: "No bookings; ticket machine queue." } },
            { place: "nanakura", kind: { zh: "平日午餐 · 新橋", en: "Weekday lunch · Shimbashi" } }
          ]
        },
        {
          title: { zh: "東京站", en: "Tokyo Station" }, plan: "C",
          items: [
            { place: "viron", kind: { zh: "麵包店 · 9 點開", en: "Bakery · opens 9:00" } },
            { place: "burdigala", kind: { zh: "麵包咖啡 · 站內 · 7 點開", en: "Bakery café · inside the station · opens 7:00" } }
          ]
        },
        {
          title: { zh: "麻布台", en: "Azabudai" }, plan: "E",
          items: [
            { place: "landemaine", kind: { zh: "麵包早餐 · 8 點開", en: "Bakery breakfast · opens 8:00" } }
          ]
        },
        {
          title: { zh: "池袋", en: "Ikebukuro" },
          items: [
            { place: "anpuku", kind: { zh: "未有行程去池袋", en: "No Ikebukuro day planned yet" } }
          ]
        }
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
