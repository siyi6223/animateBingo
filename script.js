const STORAGE_KEYS = {
  language: "anime-sedai-static-language",
  selected: "anime-sedai-static-selected",
  range: "anime-sedai-static-range",
};

const copy = {
  zh: {
    pageTitle: "思異的動畫世代Bingo",
    subtitle: "可以左右滑動點選，並支援三種語言切換。",
    heroNote: "共 228 部",
    rangeFilter: "表格長度",
    rangeAll: "全部",
    range10: "近10年",
    range5: "近5年",
    language: "語言",
    chinese: "中文",
    japanese: "日本語",
    english: "English",
    boardTitle: "思異的動畫世代賓果",
    watchedCount: "已看 {{count}}/{{total}} 部",
    selectAll: "全選",
    clear: "清除",
    export: "匯出 PNG",
    watched: "已看",
    notWatched: "未看",
    footerLead: "如果不小心通宵追番，這裡可以幫你看幾點能看到日出",
    footer: "靜態頁面可直接部署到 GitHub Pages，觀看紀錄會保存在本機瀏覽器。",
    exportFileName: "動畫世代bingo",
  },
  ja: {
    pageTitle: "思異のアニメ世代Bingo",
    subtitle: "左右にスライドして選択でき、3 言語切替にも対応しています。",
    heroNote: "合計 228 作品",
    rangeFilter: "表示範囲",
    rangeAll: "すべて",
    range10: "直近10年",
    range5: "直近5年",
    language: "言語",
    chinese: "中文",
    japanese: "日本語",
    english: "English",
    boardTitle: "思異のアニメ世代Bingo",
    watchedCount: "視聴済み {{count}}/{{total}}",
    selectAll: "すべて選択",
    clear: "クリア",
    export: "PNGを書き出す",
    watched: "視聴済み",
    notWatched: "未視聴",
    footerLead: "うっかり徹夜でアニメを見ても、ここで日の出の時間を確認できます。",
    footer: "静的サイトなので GitHub Pages にそのまま配置でき、視聴記録はブラウザに保存されます。",
    exportFileName: "anime-generation-bingo",
  },
  en: {
    pageTitle: "Siyi's Anime Generation Bingo",
    subtitle: "You can swipe horizontally to select titles, with support for switching between three languages.",
    heroNote: "228 titles total",
    rangeFilter: "Table Range",
    rangeAll: "All",
    range10: "Last 10 Years",
    range5: "Last 5 Years",
    language: "Language",
    chinese: "中文",
    japanese: "日本語",
    english: "English",
    boardTitle: "Siyi's Anime Generation Bingo",
    watchedCount: "Watched {{count}}/{{total}}",
    selectAll: "Select all",
    clear: "Clear",
    export: "Export PNG",
    watched: "Watched",
    notWatched: "Not watched",
    footerLead: "If you accidentally stay up all night watching anime, this can tell you when sunrise is.",
    footer: "This static page can be deployed directly to GitHub Pages, and watch data is saved in the browser.",
    exportFileName: "anime-generation-bingo",
  },
};

const groups = [
  {
    label: "~1999",
    items: [
      { id: "01-01", zh: "小魔女DoReMi", ja: "おジャ魔女どれみ", en: "Magical DoReMi" },
      { id: "01-02", zh: "庫洛魔法使", ja: "カードキャプターさくら", en: "Cardcaptor Sakura" },
      { id: "01-03", zh: "哆啦A夢", ja: "ドラえもん", en: "Doraemon" },
      { id: "01-04", zh: "神奇寶貝", ja: "ポケットモンスター", en: "Pokémon" },
      { id: "01-05", zh: "蠟筆小新", ja: "クレヨンしんちゃん", en: "Crayon Shin-chan" },
      { id: "01-06", zh: "小紅帽恰恰", ja: "赤ずきんチャチャ", en: "Akazukin Chacha" },
      { id: "01-07", zh: "咕嚕咕嚕魔法陣", ja: "魔法陣グルグル", en: "Magical Circle Guru Guru" },
      { id: "01-08", zh: "夢幻蠟筆王國", ja: "夢のクレヨン王国", en: "Yume no Crayon Oukoku" },
      { id: "01-09", zh: "快樂小丸日記", ja: "ぐるぐるタウンはなまるくん", en: "Hanamaru" },
      { id: "01-10", zh: "小天使", ja: "アルプスの少女ハイジ", en: "Heidi" },
      { id: "01-11", zh: "北海小英雄", ja: "小さなバイキングビッケ", en: "Vicky the Viking" },
      { id: "01-12", zh: "小英的故事", ja: "ペリーヌ物語", en: "The Story of Perrine" },
    ],
  },
  {
    label: "2000-2003",
    items: [
      { id: "02-01", zh: "我們這一家", ja: "あたしンち", en: "Atashin'chi" },
      { id: "02-02", zh: "真珠美人魚", ja: "ぴちぴちピッチ", en: "Mermaid Melody Pichi Pichi Pitch" },
      { id: "02-03", zh: "哈姆太郎", ja: "とっとこハム太郎", en: "Hamtaro" },
      { id: "02-04", zh: "花田少年史", ja: "花田少年史", en: "Hanada Shōnen Shi" },
      { id: "02-05", zh: "魔法咪路咪路", ja: "ミルモでポン!", en: "Mirmo! Zibang" },
      { id: "02-06", zh: "棋靈王", ja: "ヒカルの碁", en: "Hikaru no Go" },
      { id: "02-07", zh: "幽浮寶貝", ja: "だぁ!だぁ!だぁ!", en: "UFO Baby" },
      { id: "02-08", zh: "小公主優希", ja: "ぷちぷり＊ユーシィ", en: "Petite Princess Yucie" },
      { id: "02-09", zh: "茶犬", ja: "お茶犬", en: "Ocha-Ken" },
      { id: "02-10", zh: "東京喵喵", ja: "東京ミュウミュウ", en: "Tokyo Mew Mew" },
      { id: "02-11", zh: "彗星公主", ja: "Cosmic Baton Girl コメットさん☆", en: "Princess Comet" },
      { id: "02-12", zh: "十二國記", ja: "十二国記", en: "The Twelve Kingdoms" },
    ],
  },
  {
    label: "2004-2006",
    items: [
      { id: "03-01", zh: "光之美少女", ja: "ふたりはプリキュア", en: "Pretty Cure" },
      { id: "03-02", zh: "Keroro軍曹", ja: "ケロロ軍曹", en: "Sgt. Frog" },
      { id: "03-03", zh: "櫻蘭高校男公關部", ja: "桜蘭高校ホスト部", en: "Ouran High School Host Club" },
      { id: "03-04", zh: "飛天小女警Z", ja: "出ましたっ！パワパフガールズZ", en: "Powerpuff Girls Z" },
      { id: "03-05", zh: "魔女的考驗", ja: "シュガシュガルーン", en: "Sugar Sugar Rune" },
      { id: "03-06", zh: "Code Geass 反叛的魯路修", ja: "コードギアス 反逆のルルーシュ", en: "Code Geass Lelouch of the Rebellion" },
      { id: "03-07", zh: "不可思議星球的雙胞胎公主", ja: "ふしぎ星の☆ふたご姫", en: "Twin Princess of Wonder Planet" },
      { id: "03-08", zh: "校園迷糊大王", ja: "スクールランブル", en: "School Rumble" },
      { id: "03-09", zh: "我愛美樂蒂", ja: "おねがいマイメロディ", en: "Onegai My Melody" },
      { id: "03-10", zh: "怪俠佐羅利", ja: "かいけつゾロリ", en: "Kaiketsu Zorori" },
      { id: "03-11", zh: "砂沙美魔法少女俱樂部", ja: "砂沙美☆魔法少女クラブ", en: "Sasami:Magical Girls Club" },
      { id: "03-12", zh: "妄想代理人", ja: "もうそうだいりにん", en: "Paranoia Agent" },
    ],
  },
  {
    label: "2007-2009",
    items: [
      { id: "04-01", zh: "鋼之鍊金術師 BROTHERHOOD", ja: "鋼の錬金術師 FULLMETAL ALCHEMIST", en: "Fullmetal Alchemist:Brotherhood" },
      { id: "04-02", zh: "守護甜心!", ja: "しゅごキャラ！", en: "Shugo Chara!" },
      { id: "04-03", zh: "K-ON！輕音部", ja: "けいおん!", en: "K-On!" },
      { id: "04-04", zh: "閃電十一人", ja: "イナズマイレブン", en: "Inazuma Eleven" },
      { id: "04-05", zh: "科學超電磁砲", ja: "とある科学の超電磁砲", en: "List of A Certain Scientific Railgun episodes" },
      { id: "04-06", zh: "夏目友人帳", ja: "夏目友人帳", en: "Natsume's Book of Friends" },
      { id: "04-07", zh: "夢色蛋糕師", ja: "夢色パティシエール", en: "Yumeiro Patissiere" },
      { id: "04-08", zh: "信蜂", ja: "テガミバチ", en: "Tegami Bachi" },
      { id: "04-09", zh: "天元突破 紅蓮螺巖", ja: "天元突破グレンラガン", en: "Gurren Lagann" },
      { id: "04-10", zh: "物怪", ja: "モノノ怪", en: "Mononoke" },
      { id: "04-11", zh: "電腦線圈", ja: "電脳コイル", en: "Den-noh Coil" },
      { id: "04-12", zh: "BACCANO！大騷動！", ja: "バッカーノ！", en: "Baccano!" },
    ],
  },
  {
    label: "2010-2011",
    items: [
      { id: "05-01", zh: "學生會長是女僕！", ja: "会長はメイド様!", en: "Maid Sama!" },
      { id: "05-02", zh: "命運石之門", ja: "STEINS;GATE", en: "STEINS;GATE" },
      { id: "05-03", zh: "我們仍未知道那天所看見的花名。", ja: "あの日見た花の名前を僕達はまだ知らない。", en: "Anohana" },
      { id: "05-04", zh: "Fate/Zero", ja: "Fate/Zero", en: "Fate/Zero" },
      { id: "05-05", zh: "花牌情緣", ja: "ちはやふる", en: "Chihayafuru" },
      { id: "05-06", zh: "妖怪少爺", ja: "ぬらりひょんの孫", en: "Nura: Rise of the Yokai Clan" },
      { id: "05-07", zh: "魔法少女小圓", ja: "魔法少女まどか☆マギカ", en: "Puella Magi Madoka Magica" },
      { id: "05-08", zh: "天使的脈動", ja: "エンジェルビーツ", en: "Angel Beats!" },
      { id: "05-09", zh: "日常", ja: "日常", en: "Nichijou" },
      { id: "05-10", zh: "花開物語", ja: "花咲くいろは", en: "Hanasaku Iroha" },
      { id: "05-11", zh: "我的朋友很少", ja: "僕は友達が少ない", en: "Haganai" },
      { id: "05-12", zh: "寶石寵物", ja: "Twinkle☆", en: "ジュエルペット てぃんくる☆" },
    ],
  },
  {
    label: "2012",
    items: [
      { id: "06-01", zh: "刀劍神域", ja: "ソードアート・オンライン", en: "Sword Art Online" },
      { id: "06-02", zh: "元氣少女緣結神", ja: "神様はじめました", en: "Kamisama Kiss" },
      { id: "06-03", zh: "櫻花莊的寵物女孩", ja: "さくら荘のペットな彼女", en: "The Pet Girl of Sakurasou" },
      { id: "06-04", zh: "影子籃球員", ja: "黒子のバスケ", en: "Kuroko's Basketball" },
      { id: "06-05", zh: "魔奇少年", ja: "マギ", en: "Magi: The Labyrinth of Magic" },
      { id: "06-06", zh: "中二病也想談戀愛！", ja: "中二病でも恋がしたい！", en: "Love" },
      { id: "06-07", zh: "鄰座的怪同學", ja: "となりの怪物くん", en: "My Little Monster" },
      { id: "06-08", zh: "冰菓", ja: "氷菓", en: "Hyouka" },
      { id: "06-09", zh: "PSYCHO-PASS心靈判官", ja: "PSYCHO-PASS サイコパス", en: "Psycho-Pass" },
      { id: "06-10", zh: "妖狐×僕SS", ja: "妖狐×僕SS", en: "Inu × Boku SS" },
      { id: "06-11", zh: "Another", ja: "アナザー", en: "Another" },
      { id: "06-12", zh: "坂道上的阿波羅", ja: "坂道のアポロン", en: "Kids on the Slope" },
    ],
  },
  {
    label: "2013",
    items: [
      { id: "07-01", zh: "進擊的巨人", ja: "進撃の巨人", en: "Attack on Titan" },
      { id: "07-02", zh: "Love Live!", ja: "ラブライブ！", en: "Love Live!" },
      { id: "07-03", zh: "Free!", ja: "Free!", en: "Free!" },
      { id: "07-04", zh: "境界的彼方", ja: "境界の彼方", en: "Beyond the Boundary" },
      { id: "07-05", zh: "果然我的青春戀愛喜劇搞錯了。", ja: "やはり俺の青春ラブコメはまちがっている。", en: "My Youth Romantic Comedy Is Wrong" },
      { id: "07-06", zh: "銀之匙 Silver Spoon", ja: "銀の匙 Silver Spoon", en: "Silver Spoon" },
      { id: "07-07", zh: "鑽石王牌", ja: "ダイヤのA", en: "Ace of Diamond" },
      { id: "07-08", zh: "來自風平浪靜的明日", ja: "凪のあすから", en: "Nagi-Asu: A Lull in the Sea" },
      { id: "07-09", zh: "有頂天家族", ja: "有頂天家族", en: "The Eccentric Family" },
      { id: "07-10", zh: "記錄的地平線", ja: "ログ・ホライズン", en: "Log Horizon" },
      { id: "07-11", zh: "神不在的星期天", ja: "神さまのいない日曜日", en: "Sunday Without God" },
      { id: "07-12", zh: "兄弟鬥爭", ja: "ブラザーズ コンフリクト", en: "Brothers Conflict" },
    ],
  },
  {
    label: "2014",
    items: [
      { id: "08-01", zh: "排球少年！！", ja: "ハイキュー!!", en: "Haikyu!!" },
      { id: "08-02", zh: "東京喰種", ja: "東京喰種トーキョーグール", en: "Tokyo Ghoul" },
      { id: "08-03", zh: "四月是你的謊言", ja: "四月は君の嘘", en: "Your Lie in April" },
      { id: "08-04", zh: "NO GAME NO LIFE 遊戲人生", ja: "ノーゲーム・ノーライフ", en: "No Game No Life" },
      { id: "08-05", zh: "寄生獸", ja: "寄生獣", en: "Parasyte" },
      { id: "08-06", zh: "晨曦公主", ja: "暁のヨナ", en: "Yona of the Dawn" },
      { id: "08-07", zh: "月刊少女野崎同學", ja: "月刊少女野崎くん", en: "Monthly Girls' Nozaki-kun" },
      { id: "08-08", zh: "流浪神差", ja: "ノラガミ", en: "Noragami" },
      { id: "08-09", zh: "鬼燈的冷徹", ja: "鬼灯の冷徹", en: "Hozuki's Coolheadedness" },
      { id: "08-10", zh: "境界觸發者", ja: "ワールドトリガー", en: "World Trigger" },
      { id: "08-11", zh: "白箱", ja: "SHIROBAKO", en: "SHIROBAKO" },
      { id: "08-12", zh: "乒乓", ja: "ピンポン", en: "Ping Pong" },
    ],
  },
  {
    label: "2015",
    items: [
      { id: "09-01", zh: "暗殺教室", ja: "暗殺教室", en: "Assassination Classroom" },
      { id: "09-02", zh: "一拳超人", ja: "ワンパンマン", en: "One-Punch Man" },
      { id: "09-03", zh: "OVERLORD", ja: "オーバーロード", en: "Overlord" },
      { id: "09-04", zh: "食戟之靈", ja: "食戟のソーマ", en: "Food Wars!: Shokugeki no Soma" },
      { id: "09-05", zh: "在地下城尋求邂逅是否搞錯了什麼", ja: "ダンジョンに出会いを求めるのは間違っているだろうか", en: "Is It Wrong to Try to Pick Up Girls in a Dungeon" },
      { id: "09-06", zh: "赤髮白雪姬", ja: "赤髪の白雪姫", en: "Snow White with the Red Hair" },
      { id: "09-07", zh: "監獄學園", ja: "プリズンスクール", en: "Prison School" },
      { id: "09-08", zh: "吹響吧！上低音號", ja: "響け！ユーフォニアム", en: "Sound! Euphonium" },
      { id: "09-09", zh: "可塑性記憶", ja: "プラスティック・メモリーズ", en: "Plastic Memories" },
      { id: "09-10", zh: "死亡遊行", ja: "デス・パレード", en: "Death Parade" },
      { id: "09-11", zh: "櫻子小姐的腳下埋著屍體", ja: "櫻子さんの足下には死体が埋まっている", en: "Beautiful Bones: Sakurako's Investigation" },
      { id: "09-12", zh: "蒼穹之戰神", ja: "蒼穹のファフナー", en: "Fafner in the Azure" },
    ],
  },
  {
    label: "2016",
    items: [
      { id: "10-01", zh: "Re:從零開始的異世界生活", ja: "Re:ゼロから始める異世界生活", en: "Re:Zero" },
      { id: "10-02", zh: "我的英雄學院", ja: "僕のヒーローアカデミア", en: "My Hero Academia" },
      { id: "10-03", zh: "為美好的世界獻上祝福！", ja: "この素晴らしい世界に祝福を！", en: "KonoSuba" },
      { id: "10-04", zh: "文豪野犬", ja: "文豪ストレイドッグス", en: "Bungo Stray Dogs" },
      { id: "10-05", zh: "齊木楠雄的災難", ja: "斉木楠雄のΨ難", en: "The Disastrous Life of Saiki K." },
      { id: "10-06", zh: "路人超能100", ja: "モブサイコ100", en: "Mob Psycho 100" },
      { id: "10-07", zh: "Yuri!!! on ICE", ja: "ユーリ!!! on ICE", en: "Yuri on Ice" },
      { id: "10-08", zh: "只有我不存在的城市", ja: "僕だけがいない街", en: "Erased" },
      { id: "10-09", zh: "3月的獅子", ja: "3月のライオン", en: "March Comes In like a Lion" },
      { id: "10-10", zh: "灰與幻想的格林姆迦爾", ja: "灰と幻想のグリムガル", en: "Grimgar of Fantasy and Ash" },
      { id: "10-11", zh: "昭和元祿落語心中", ja: "昭和元禄落語心中", en: "Descending Stories: Showa Genroku Rakugo Shinju" },
      { id: "10-12", zh: "飛翔的魔女", ja: "ふらいんぐうぃっち", en: "Flying Witch" },
    ],
  },
  {
    label: "2017",
    items: [
      { id: "11-01", zh: "來自深淵", ja: "メイドインアビス", en: "Made in Abyss" },
      { id: "11-02", zh: "幼女戰記", ja: "幼女戦記", en: "Saga of Tanya the Evil" },
      { id: "11-03", zh: "小林家的龍女僕", ja: "小林さんちのメイドラゴン", en: "Miss Kobayashi's Dragon Maid" },
      { id: "11-04", zh: "寶石之國", ja: "宝石の国", en: "Land of the Lustrous" },
      { id: "11-05", zh: "魔法使的新娘", ja: "魔法使いの嫁", en: "The Ancient Magus' Bride" },
      { id: "11-06", zh: "奇諾之旅", ja: "キノの旅", en: "Kino's Journey" },
      { id: "11-07", zh: "小魔女學園", ja: "リトルウィッチアカデミア", en: "Little Witch Academia" },
      { id: "11-08", zh: "人渣的本願", ja: "クズの本懐", en: "Scum's Wish" },
      { id: "11-09", zh: "月色真美", ja: "月がきれい", en: "As the moon" },
      { id: "11-10", zh: "ACCA13區監察課", ja: "ACCA13区監察課", en: "ACCA: 13-Territory Inspection Dept." },
      { id: "11-11", zh: "情色漫畫老師", ja: "エロマンガ先生", en: "Eromanga Sensei" },
      { id: "11-12", zh: "獨占我的英雄", ja: "ひとりじめマイヒーロー", en: "Hitorijime My Hero" },
    ],
  },
  {
    label: "2018",
    items: [
      { id: "12-01", zh: "紫羅蘭永恆花園", ja: "ヴァイオレット・エヴァーガーデン", en: "Violet Evergarden" },
      { id: "12-02", zh: "工作細胞", ja: "はたらく細胞", en: "Cells at Work!" },
      { id: "12-03", zh: "哥布林殺手", ja: "ゴブリンスレイヤー", en: "Goblin Slayer" },
      { id: "12-04", zh: "黃金神威", ja: "ゴールデンカムイ", en: "Golden Kamuy" },
      { id: "12-05", zh: "遊戲3人娘", ja: "あそびあそばせ", en: "Asobi Asobase" },
      { id: "12-06", zh: "強風吹拂", ja: "風が強く吹いている", en: "Run with the Wind" },
      { id: "12-07", zh: "佐賀偶像是傳奇", ja: "ゾンビランドサガ", en: "Zombie Land Saga" },
      { id: "12-08", zh: "比宇宙更遠的地方", ja: "宇宙よりも遠い場所", en: "A Place Further Than The Universe" },
      { id: "12-09", zh: "極道超女", ja: "ヒナまつり", en: "Hinamatsuri" },
      { id: "12-10", zh: "阿宅的戀愛太難", ja: "ヲタクに恋は難しい", en: "Wotakoi: Love Is Hard for Otaku" },
      { id: "12-11", zh: "弦音－風舞高中弓道部－", ja: "ツルネ－風舞高校弓道部－", en: "Tsurune" },
      { id: "12-12", zh: "書店裡的骷髏店員本田", ja: "ガイコツ書店員本田さん", en: "Skull-face Bookseller Honda-san" },
    ],
  },
  {
    label: "2019",
    items: [
      { id: "13-01", zh: "鬼滅之刃", ja: "鬼滅の刃", en: "Demon Slayer: Kimetsu no Yaiba" },
      { id: "13-02", zh: "輝夜姬想讓人告白～天才們的戀愛頭腦戰～", ja: "かぐや様は告らせたい〜天才たちの恋愛頭脳戦〜", en: "Kaguya-sama: Love Is War" },
      { id: "13-03", zh: "Dr.STONE 新石紀", ja: "Dr.STONE", en: "Dr.STONE" },
      { id: "13-04", zh: "炎炎消防隊", ja: "炎炎ノ消防隊", en: "Fire Force" },
      { id: "13-05", zh: "這個勇者明明超TUEEE卻過度謹慎", ja: "この勇者が俺TUEEEくせに慎重すぎる", en: "Cautious Hero: The Hero Is Overpowered but Overly Cautious" },
      { id: "13-06", zh: "海盜戰記", ja: "ヴィンランド・サガ", en: "Vinland Saga" },
      { id: "13-07", zh: "流汗吧！健身少女", ja: "ダンベル何キロ持てる？", en: "How Heavy Are the Dumbbells You Lift?" },
      { id: "13-08", zh: "小書痴的下剋上", ja: "本好きの下剋上", en: "Ascendance of a Bookworm" },
      { id: "13-09", zh: "萌獸寵物店", ja: "けものみち", en: "Kemono Michi" },
      { id: "13-10", zh: "騷亂時節的少女們。", ja: "荒ぶる季節の乙女どもよ。", en: "O Maidens in Your Savage Season" },
      { id: "13-11", zh: "彼方的阿斯特拉", ja: "彼方のアストラ", en: "Astra Lost in Space" },
      { id: "13-12", zh: "皿三昧", ja: "さらざんまい", en: "Sarazanmai" },
    ],
  },
  {
    label: "2020",
    items: [
      { id: "14-01", zh: "咒術迴戰", ja: "呪術廻戦", en: "Jujutsu Kaisen" },
      { id: "14-02", zh: "入間同學入魔了！", ja: "魔入りました！入間くん", en: "Welcome to Demon School! Iruma-kun" },
      { id: "14-03", zh: "怕痛的我，把防禦力點滿就對了", ja: "痛いのは嫌なので防御力に極振りしたいと思います。", en: "Bofuri: I Don't Want to Get Hurt" },
      { id: "14-04", zh: "地縛少年花子君", ja: "地縛少年花子くん", en: "Toilet-Bound Hanako-kun" },
      { id: "14-05", zh: "魔女之旅", ja: "魔女の旅々", en: "Wandering Witch: The Journey of Elaina" },
      { id: "14-06", zh: "別對映像研出手！", ja: "映像研には手を出すな！", en: "Keep Your Hands Off Eizouken!" },
      { id: "14-07", zh: "在魔王城說晚安", ja: "魔王城でおやすみ", en: "Sleepy Princess in the Demon Castle" },
      { id: "14-08", zh: "DECA-DENCE", ja: "デカダンス", en: "DECA-DENCE" },
      { id: "14-09", zh: "虛構推理", ja: "虚構推理", en: "In/Spectre" },
      { id: "14-10", zh: "無能力者娜娜", ja: "無能なナナ", en: "Talentless Nana" },
      { id: "14-11", zh: "一弦定音！", ja: "この音とまれ!", en: "Kono Oto Tomare! Sounds of Life" },
      { id: "14-12", zh: "隱瞞之事", ja: "かくしごと", en: "Kakushigoto" },
    ],
  },
  {
    label: "2021",
    items: [
      { id: "15-01", zh: "關於我轉生變成史萊姆這檔事", ja: "転生したらスライムだった件", en: "That Time I Got Reincarnated as a Slime" },
      { id: "15-02", zh: "無職轉生～到了異世界就拿出真本事～", ja: "無職転生 〜異世界行ったら本気だす〜", en: "Mushoku Tensei" },
      { id: "15-03", zh: "86—不存在的戰區—", ja: "86―エイティシックス―", en: "86: Eighty Six" },
      { id: "15-04", zh: "賽馬娘第二季", ja: "ウマ娘Season 2", en: "Umamusume: Pretty Derby Season 2" },
      { id: "15-05", zh: "給不滅的你", ja: "不滅のあなたへ", en: "To Your Eternity" },
      { id: "15-06", zh: "奇巧計程車", ja: "オッドタクシー", en: "Odd Taxi" },
      { id: "15-07", zh: "怪物事變", ja: "怪物事変", en: "Kemono Jihen" },
      { id: "15-08", zh: "Vivy -Fluorite Eye's Song-", ja: "Vivy -Fluorite Eye's Song-", en: "Vivy: Fluorite Eye's Song" },
      { id: "15-09", zh: "SK8 the Infinity", ja: "SK∞ エスケーエイト", en: "SK8 the Infinity" },
      { id: "15-10", zh: "平穩世代的韋駄天們", ja: "平穏世代の韋駄天達", en: "The Idaten Deities Know Only Peace" },
      { id: "15-11", zh: "SHADOWS HOUSE-影宅-", ja: "シャドーハウス", en: "SHADOWS HOUSE" },
      { id: "15-12", zh: "漂流少年", ja: "サニーボーイ", en: "Sonny Boy" },
    ],
  },
  {
    label: "2022",
    items: [
      { id: "16-01", zh: "SPY×FAMILY間諜家家酒", ja: "スパイファミリー", en: "SPY×FAMILY" },
      { id: "16-02", zh: "鏈鋸人", ja: "チェンソーマン", en: "Chainsaw Man" },
      { id: "16-03", zh: "孤獨搖滾！", ja: "ぼっち・ざ・ろっく！", en: "Bocchi the Rock!" },
      { id: "16-04", zh: "戀上換裝娃娃", ja: "その着せ替え人形は恋をする", en: "My Dress-Up Darling" },
      { id: "16-05", zh: "Lycoris Recoil 莉可麗絲", ja: "リコリス・リコイル", en: "Lycoris Recoil" },
      { id: "16-06", zh: "明日同學的水手服", ja: "明日ちゃんのセーラー服", en: "Akebi's Sailor Uniform" },
      { id: "16-07", zh: "派對咖孔明", ja: "パリピ孔明", en: "Ya Boy Kongming!" },
      { id: "16-08", zh: "異世界歸來的舅舅", ja: "異世界おじさん", en: "Uncle from Another World" },
      { id: "16-09", zh: "平家物語", ja: "平家物語", en: "The Heike Story" },
      { id: "16-10", zh: "秋葉原冥途戰爭", ja: "アキバ冥途戦争", en: "Akiba Maid War" },
      { id: "16-11", zh: "秘密內幕～女警的反擊～", ja: "ハコヅメ〜交番女子の逆襲〜", en: "Police in a Pod" },
      { id: "16-12", zh: "白領羽球部", ja: "リーマンズクラブ", en: "Salaryman's Club" },
    ],
  },
  {
    label: "2023",
    items: [
      { id: "17-01", zh: "葬送的芙莉蓮", ja: "葬送のフリーレン", en: "Frieren: Beyond Journey's End" },
      { id: "17-02", zh: "【我推的孩子】", ja: "【推しの子】", en: "Oshi no Ko" },
      { id: "17-03", zh: "藥師少女的獨語", ja: "薬屋のひとりごと", en: "The Apothecary Diaries" },
      { id: "17-04", zh: "我內心的糟糕念頭", ja: "僕の心のヤバイやつ", en: "The Dangers in My Heart" },
      { id: "17-05", zh: "地獄樂", ja: "地獄楽", en: "Hell's Paradise: Jigokuraku" },
      { id: "17-06", zh: "肌肉魔法使-MASHLE-", ja: "マッシュル -MASHLE-", en: "Mashle: Magic and Muscles" },
      { id: "17-07", zh: "天國大魔境", ja: "天国大魔境", en: "Heavenly Delusion" },
      { id: "17-08", zh: "尼爾：自動人形Ver1.1a", ja: "ニーア オートマタ Ver1.1a", en: "Nier: Automata Ver1.1a" },
      { id: "17-09", zh: "江戶前精靈", ja: "江戸前エルフ", en: "Otaku Elf" },
      { id: "17-10", zh: "PLUTO ～冥王～", ja: "PLUTO", en: "Pluto: Urasawa x Tezuka" },
      { id: "17-11", zh: "再得一勝！", ja: "もういっぽん！", en: "Ippon Again!" },
      { id: "17-12", zh: "藍色管弦樂", ja: "青のオーケストラ", en: "Blue Orchestra" },
    ],
  },
  {
    label: "2024",
    items: [
      { id: "18-01", zh: "膽大黨", ja: "ダンダダン", en: "Dandadan" },
      { id: "18-02", zh: "迷宮飯", ja: "ダンジョン飯", en: "Delicious in Dungeon" },
      { id: "18-03", zh: "失憶投捕", ja: "忘却バッテリー", en: "Oblivion Battery" },
      { id: "18-04", zh: "怪獸8號", ja: "怪獣8号", en: "Kaiju No. 8" },
      { id: "18-05", zh: "敗北女角太多了！", ja: "負けヒロインが多すぎる！", en: "Too Many LOSING Heroines!" },
      { id: "18-06", zh: "少女樂團 吶喊吧", ja: "ガールズバンドクライ", en: "Girls Band Cry" },
      { id: "18-07", zh: "擅長逃跑的殿下", ja: "逃げ上手の若君", en: "The Elusive Samurai" },
      { id: "18-08", zh: "青春之箱", ja: "アオのハコ", en: "Blue Box" },
      { id: "18-09", zh: "勇氣爆發Bang Bravern", ja: "勇気爆発バーンブレイバーン", en: "Brave Bang Bravern!" },
      { id: "18-10", zh: "深夜Punch", ja: "真夜中ぱんチ", en: "Mayonaka Punch" },
      { id: "18-11", zh: "村井之戀", ja: "村井の恋", en: "Murai in Love" },
      { id: "18-12", zh: "悲喜漁生", ja: "ネガポジアングラー", en: "Negative Positive Angler" },
    ],
  },
  {
    label: "2025",
    items: [
      { id: "19-01", zh: "章魚嗶的原罪", ja: "タコピーの原罪", en: "Takopi's Original Sin" },
      { id: "19-02", zh: "SAKAMOTO DAYS 坂本日常", ja: "SAKAMOTO DAYS", en: "SAKAMOTO DAYS" },
      { id: "19-03", zh: "GACHIAKUTA", ja: "ガチアクタ", en: "Gachiakuta" },
      { id: "19-04", zh: "薰香花朵凛然綻放", ja: "薫る花は凛と咲く", en: "The Fragrant Flower Blooms with Dignity" },
      { id: "19-05", zh: "WITCH WATCH 魔女守護者", ja: "ウィッチウォッチ", en: "Witch Watch" },
      { id: "19-06", zh: "Silent Witch 沉默魔女的祕密", ja: "サイレント・ウィッチ 沈黙の魔女の隠しごと", en: "Secrets of the Silent Witch" },
      { id: "19-07", zh: "琉璃的寶石", ja: "瑠璃の宝石", en: "Ruri Rocks" },
      { id: "19-08", zh: "金牌得主", ja: "メダリスト", en: "Medalist" },
      { id: "19-09", zh: "全修。", ja: "全修。", en: "Zenshu" },
      { id: "19-10", zh: "矢野同學的普通日常", ja: "矢野くんの普通の日々", en: "Yano-kun's Ordinary Days" },
      { id: "19-11", zh: "去唱卡拉OK吧！", ja: "カラオケ行こ！", en: "Let's Go Karaoke!" },
      { id: "19-12", zh: "末日後酒店", ja: "アポカリプスホテル", en: "Apocalypse Hotel" },
    ],
  },
];

const state = {
  language: loadState(STORAGE_KEYS.language, "zh"),
  selected: new Set(loadState(STORAGE_KEYS.selected, [])),
  range: loadState(STORAGE_KEYS.range, "all"),
};

const elements = {
  heroEyebrow: document.getElementById("hero-eyebrow"),
  heroNote: document.getElementById("hero-note"),
  pageTitle: document.getElementById("page-title"),
  pageSubtitle: document.getElementById("page-subtitle"),
  rangeFilterLabel: document.getElementById("range-filter-label"),
  rangeFilter: document.getElementById("range-filter"),
  languageLabel: document.getElementById("language-label"),
  boardTitle: document.getElementById("board-title"),
  board: document.getElementById("board"),
  watchCount: document.getElementById("watch-count"),
  headerSelectAllButton: document.getElementById("header-select-all-button"),
  headerClearButton: document.getElementById("header-clear-button"),
  selectAllButton: document.getElementById("select-all-button"),
  clearButton: document.getElementById("clear-button"),
  exportButton: document.getElementById("export-button"),
  legendWatched: document.getElementById("legend-watched"),
  legendNotWatched: document.getElementById("legend-not-watched"),
  footerLead: document.getElementById("footer-lead"),
  footerCopy: document.getElementById("footer-copy"),
  langButtons: Array.from(document.querySelectorAll(".lang-button")),
};

init();

function init() {
  bindEvents();
  render();
}

function bindEvents() {
  elements.rangeFilter.addEventListener("change", (event) => {
    state.range = event.target.value;
    persist();
    render();
  });

  elements.langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.language = button.dataset.lang;
      persist();
      render();
    });
  });

  elements.selectAllButton.addEventListener("click", selectVisibleAnime);
  elements.clearButton.addEventListener("click", clearVisibleAnime);
  elements.headerSelectAllButton.addEventListener("click", selectVisibleAnime);
  elements.headerClearButton.addEventListener("click", clearVisibleAnime);

  elements.exportButton.addEventListener("click", exportBoardAsPng);
}

function render() {
  renderMeta();
  renderBoard();
}

function renderMeta() {
  const t = copy[state.language];

  document.documentElement.lang = languageTag(state.language);
  document.title = t.pageTitle;

  setText(elements.heroEyebrow, t.heroEyebrow);
  setText(elements.heroNote, t.heroNote);
  setText(elements.pageTitle, t.pageTitle);
  setText(elements.pageSubtitle, t.subtitle);
  setText(elements.rangeFilterLabel, t.rangeFilter);
  setText(elements.languageLabel, t.language);
  setText(elements.boardTitle, t.boardTitle);
  setText(elements.headerSelectAllButton, t.selectAll);
  setText(elements.headerClearButton, t.clear);
  setText(elements.selectAllButton, t.selectAll);
  setText(elements.clearButton, t.clear);
  setText(elements.exportButton, t.export);
  setText(elements.legendWatched, t.watched);
  setText(elements.legendNotWatched, t.notWatched);
  setText(elements.footerLead, t.footerLead);
  setText(elements.footerCopy, t.footer);

  elements.rangeFilter.value = state.range;
  syncRangeOptions(t);

  elements.langButtons.forEach((button) => {
    const isActive = button.dataset.lang === state.language;
    button.classList.toggle("is-active", isActive);
    button.textContent = t[languageButtonKey(button.dataset.lang)];
  });

  const watchedCount = visibleAnime().filter((anime) => state.selected.has(anime.id)).length;
  elements.watchCount.textContent = interpolate(t.watchedCount, {
    count: watchedCount,
    total: visibleAnime().length,
  });
}

function renderBoard() {
  populateBoard(elements.board, { interactive: true });
}

function populateBoard(target, { interactive }) {
  target.innerHTML = "";

  visibleGroups().forEach((group) => {
    const row = document.createElement("div");
    row.className = "board-row";

    const yearCell = document.createElement("div");
    yearCell.className = "year-cell";
    yearCell.textContent = group.label;

    const animeGrid = document.createElement("div");
    animeGrid.className = "anime-grid";

    group.items.forEach((anime) => {
      animeGrid.appendChild(createAnimeCell(anime, interactive));
    });

    row.appendChild(yearCell);
    row.appendChild(animeGrid);
    target.appendChild(row);
  });
}

function createAnimeCell(anime, interactive) {
  const isSelected = state.selected.has(anime.id);
  const cell = document.createElement(interactive ? "button" : "div");
  cell.className = "anime-cell";
  cell.title = anime[state.language];

  if (isSelected) {
    cell.classList.add("is-selected");
  }

  if (interactive) {
    cell.type = "button";
    cell.setAttribute("aria-pressed", String(isSelected));
    cell.addEventListener("click", () => {
      if (state.selected.has(anime.id)) {
        state.selected.delete(anime.id);
      } else {
        state.selected.add(anime.id);
      }

      persist();
      render();
    });
  }

  const label = document.createElement("span");
  label.textContent = anime[state.language];
  cell.appendChild(label);
  return cell;
}

function visibleGroups() {
  if (state.range === "10") {
    return groups.slice(-10);
  }

  if (state.range === "5") {
    return groups.slice(-5);
  }

  return groups;
}

function visibleAnime() {
  return visibleGroups().flatMap((group) => group.items);
}

function syncRangeOptions(t) {
  const labels = {
    all: t.rangeAll,
    10: t.range10,
    5: t.range5,
  };

  Array.from(elements.rangeFilter.options).forEach((option) => {
    option.textContent = labels[option.value];
  });
}

function selectVisibleAnime() {
  visibleAnime().forEach((anime) => state.selected.add(anime.id));
  persist();
  render();
}

function clearVisibleAnime() {
  visibleAnime().forEach((anime) => state.selected.delete(anime.id));
  persist();
  render();
}

function languageTag(language) {
  if (language === "zh") {
    return "zh-Hant";
  }

  if (language === "ja") {
    return "ja";
  }

  return "en";
}

function languageButtonKey(language) {
  if (language === "zh") {
    return "chinese";
  }

  if (language === "ja") {
    return "japanese";
  }

  return "english";
}

function interpolate(template, values) {
  return Object.entries(values).reduce((result, [key, value]) => {
    return result.replaceAll(`{{${key}}}`, String(value));
  }, template);
}

function setText(element, value) {
  if (element) {
    element.textContent = value;
  }
}

function exportBoardAsPng() {
  const canvas = renderBoardExportCanvas();
  const link = document.createElement("a");
  link.download = `${copy[state.language].exportFileName}-${state.range}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function renderBoardExportCanvas() {
  const t = copy[state.language];
  const columns = 12;
  const cellSize = 96;
  const yearWidth = 120;
  const panelPadding = 18;
  const headerInset = 8;
  const headerHeight = 56;
  const boardWidth = yearWidth + columns * cellSize;
  const boardHeight = visibleGroups().length * cellSize;
  const panelWidth = boardWidth + panelPadding * 2;
  const panelHeight = panelPadding + headerHeight + boardHeight + panelPadding;
  const scale = 2;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = panelWidth * scale;
  canvas.height = panelHeight * scale;
  canvas.style.width = `${panelWidth}px`;
  canvas.style.height = `${panelHeight}px`;
  ctx.scale(scale, scale);

  ctx.fillStyle = "#f8f4ec";
  ctx.fillRect(0, 0, panelWidth, panelHeight);
  drawRoundedRect(ctx, 0.5, 0.5, panelWidth - 1, panelHeight - 1, 28, "#ffffff", "#ddd8cf");

  const headerY = panelPadding + 4;
  const headerBottom = panelPadding + headerHeight - 14;
  const watchedCount = visibleAnime().filter((anime) => state.selected.has(anime.id)).length;
  const watchedText = interpolate(t.watchedCount, {
    count: watchedCount,
    total: visibleAnime().length,
  });

  ctx.fillStyle = "#1f1a14";
  ctx.font = exportFont(20, 700);
  ctx.textBaseline = "top";
  ctx.fillText(t.boardTitle, panelPadding + headerInset, headerY);

  drawExportHeaderActions(ctx, watchedText, panelWidth - panelPadding - headerInset, headerY - 2);

  ctx.strokeStyle = "rgba(31, 26, 20, 0.1)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(panelPadding, headerBottom + 14);
  ctx.lineTo(panelWidth - panelPadding, headerBottom + 14);
  ctx.stroke();

  drawExportBoard(ctx, panelPadding, panelPadding + headerHeight, {
    cellSize,
    columns,
    yearWidth,
  });

  return canvas;
}

function drawExportHeaderActions(ctx, watchedText, right, y) {
  ctx.font = exportFont(16, 400);
  ctx.textBaseline = "middle";

  const clearWidth = Math.ceil(ctx.measureText(copy[state.language].clear).width) + 28;
  const selectWidth = Math.ceil(ctx.measureText(copy[state.language].selectAll).width) + 28;
  const buttonHeight = 38;
  const gap = 8;
  const clearX = right - clearWidth;
  const selectX = clearX - gap - selectWidth;
  const textWidth = Math.ceil(ctx.measureText(watchedText).width);
  const textX = selectX - 14 - textWidth;
  const centerY = y + buttonHeight / 2;

  ctx.fillStyle = "#1f1a14";
  ctx.fillText(watchedText, textX, centerY);
  drawRoundedRect(ctx, selectX, y, selectWidth, buttonHeight, 19, "#3e81c6", "#3e81c6");
  drawRoundedRect(ctx, clearX, y, clearWidth, buttonHeight, 19, "#ffffff", "rgba(31, 26, 20, 0.16)");

  ctx.font = exportFont(15, 600);
  ctx.fillStyle = "#ffffff";
  fillCenteredText(ctx, copy[state.language].selectAll, selectX, y, selectWidth, buttonHeight);
  ctx.fillStyle = "#1f1a14";
  fillCenteredText(ctx, copy[state.language].clear, clearX, y, clearWidth, buttonHeight);
}

function drawExportBoard(ctx, x, y, { cellSize, columns, yearWidth }) {
  const borderColor = "rgba(31, 26, 20, 0.12)";
  const groupsToDraw = visibleGroups();
  const boardWidth = yearWidth + columns * cellSize;
  const boardHeight = groupsToDraw.length * cellSize;

  ctx.fillStyle = "#fffdf8";
  ctx.fillRect(x, y, boardWidth, boardHeight);

  groupsToDraw.forEach((group, rowIndex) => {
    const rowY = y + rowIndex * cellSize;

    ctx.fillStyle = "#8c5d1d";
    ctx.fillRect(x, rowY, yearWidth, cellSize);
    ctx.fillStyle = "#ffffff";
    ctx.font = exportFont(16, 700);
    fillCenteredText(ctx, group.label, x, rowY, yearWidth, cellSize);

    group.items.forEach((anime, columnIndex) => {
      const cellX = x + yearWidth + columnIndex * cellSize;
      const isSelected = state.selected.has(anime.id);

      ctx.fillStyle = isSelected ? "#d7852f" : "#fffdf8";
      ctx.fillRect(cellX, rowY, cellSize, cellSize);
      ctx.fillStyle = isSelected ? "#ffffff" : "#1f1a14";
      ctx.font = exportFont(13, 400);
      fillWrappedText(ctx, anime[state.language], cellX + 10, rowY + 10, cellSize - 20, cellSize - 20, 3, 15.6);
    });
  });

  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 1;
  strokeRectCrisp(ctx, x, y, boardWidth, boardHeight);

  for (let row = 1; row < groupsToDraw.length; row += 1) {
    const lineY = y + row * cellSize;
    drawLine(ctx, x, lineY, x + boardWidth, lineY);
  }

  for (let column = 0; column <= columns; column += 1) {
    const lineX = x + yearWidth + column * cellSize;
    drawLine(ctx, lineX, y, lineX, y + boardHeight);
  }
}

function fillWrappedText(ctx, text, x, y, maxWidth, maxHeight, maxLines, lineHeight) {
  const segments = Array.from(text);
  const lines = [];
  let line = "";

  segments.forEach((segment) => {
    const nextLine = `${line}${segment}`;
    if (line && ctx.measureText(nextLine).width > maxWidth) {
      lines.push(line);
      line = segment;
    } else {
      line = nextLine;
    }
  });

  if (line) {
    lines.push(line);
  }

  const visibleLines = lines.slice(0, maxLines);
  if (lines.length > maxLines && visibleLines.length) {
    visibleLines[visibleLines.length - 1] = fitTextWithEllipsis(ctx, visibleLines[visibleLines.length - 1], maxWidth);
  }

  const totalTextHeight = Math.min(maxHeight, visibleLines.length * lineHeight);
  let textY = y + (maxHeight - totalTextHeight) / 2;
  ctx.textBaseline = "top";
  visibleLines.forEach((visibleLine) => {
    ctx.fillText(visibleLine, x + (maxWidth - ctx.measureText(visibleLine).width) / 2, textY);
    textY += lineHeight;
  });
}

function fitTextWithEllipsis(ctx, text, maxWidth) {
  const ellipsis = "...";
  let result = text;
  while (result && ctx.measureText(`${result}${ellipsis}`).width > maxWidth) {
    result = result.slice(0, -1);
  }
  return `${result}${ellipsis}`;
}

function fillCenteredText(ctx, text, x, y, width, height) {
  ctx.textBaseline = "middle";
  ctx.fillText(text, x + (width - ctx.measureText(text).width) / 2, y + height / 2);
}

function drawRoundedRect(ctx, x, y, width, height, radius, fillStyle, strokeStyle) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fillStyle = fillStyle;
  ctx.fill();
  ctx.strokeStyle = strokeStyle;
  ctx.stroke();
}

function strokeRectCrisp(ctx, x, y, width, height) {
  ctx.strokeRect(x + 0.5, y + 0.5, width, height);
}

function drawLine(ctx, startX, startY, endX, endY) {
  ctx.beginPath();
  ctx.moveTo(startX + 0.5, startY + 0.5);
  ctx.lineTo(endX + 0.5, endY + 0.5);
  ctx.stroke();
}

function exportFont(size, weight) {
  return `${weight} ${size}px "Segoe UI", "Noto Sans TC", "Hiragino Sans", sans-serif`;
}

function loadState(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEYS.language, JSON.stringify(state.language));
  localStorage.setItem(STORAGE_KEYS.selected, JSON.stringify(Array.from(state.selected)));
  localStorage.setItem(STORAGE_KEYS.range, JSON.stringify(state.range));
}
