const STORAGE_KEYS = {
  language: "anime-sedai-static-language",
  selected: "anime-sedai-static-selected",
  yearRange: "anime-sedai-static-year-range",
};

const yearOptions = ["5","10", "all"];

const copy = {
  zh: {
    pageTitle: "動畫世代賓果 EXTRA",
    subtitle: "點擊選擇你看過的動畫",
    yearRange: "年份範圍",
    language: "語言",
    chinese: "中文",
    japanese: "日本語",
    watchedCount: "我看過 {{count}}/{{total}} 部動畫",
    selectAll: "全選",
    clear: "清除",
    watched: "看過",
    notWatched: "沒看過",
    last5Years: "近 5 年",
    last10Years: "近 10 年",
    allYears: "全部",
    footer: "歷年關注度高的作品示意。",
  },
  ja: {
    pageTitle: "アニメ世代ビンゴ EXTRA",
    subtitle: "見たアニメをタップして選択する",
    yearRange: "年範囲",
    language: "言語",
    chinese: "中文",
    japanese: "日本語",
    watchedCount: "{{count}}/{{total}} のアニメを見た",
    selectAll: "すべて選択",
    clear: "クリア",
    watched: "見た",
    notWatched: "見ていない",
    last5Years: "直近 5 年",
    last10Years: "直近 10 年",
    allYears: "すべて",
    footer: "人気作品を並べたサンプルで。",
  },
};

const animeByYear = {
  2021: [
    { id: "2021-sonny-boy", zh: "漂流少年", ja: "Sonny Boy" },
    { id: "2021-oddtaxi", zh: "ODD TAXI", ja: "オッドタクシー" },
    { id: "2021-mushoku", zh: "無職轉生", ja: "無職転生" },
    { id: "2021-vivy", zh: "Vivy", ja: "Vivy" },
    { id: "2021-86", zh: "86", ja: "86 -エイティシックス-" },
    { id: "2021-heike", zh: "平家物語", ja: "平家物語" },
    { id: "2021-taktop", zh: "宿命迴響", ja: "takt op.Destiny" },
    { id: "2021-komi", zh: "古見同學有交流障礙症", ja: "古見さんは、コミュ症です。" },
    { id: "2021-blueperiod", zh: "藍色時期", ja: "ブルーピリオド" },
    { id: "2021-wonderegg", zh: "奇蛋物語", ja: "ワンダーエッグ・プライオリティ" },
  ],
  2022: [
    { id: "2022-bocchi", zh: "孤獨搖滾！", ja: "ぼっち・ざ・ろっく！" },
    { id: "2022-chainsaw", zh: "鏈鋸人", ja: "チェンソーマン" },
    { id: "2022-lycoris", zh: "Lycoris Recoil", ja: "リコリス・リコイル" },
    { id: "2022-diy", zh: "Do It Yourself!!", ja: "Do It Yourself!!" },
    { id: "2022-madeinabyss", zh: "來自深淵 烈日的黃金鄉", ja: "メイドインアビス 烈日の黄金郷" },
    { id: "2022-bluelock", zh: "藍色監獄", ja: "ブルーロック" },
    { id: "2022-summertime", zh: "夏日時光", ja: "サマータイムレンダ" },
    { id: "2022-akiba", zh: "秋葉原冥途戰爭", ja: "アキバ冥途戦争" },
    { id: "2022-spyfamily", zh: "SPY×FAMILY", ja: "SPY×FAMILY" },
    { id: "2022-kongming", zh: "派對咖孔明", ja: "パリピ孔明" },
  ],
  2023: [
    { id: "2023-frieren", zh: "葬送的芙莉蓮", ja: "葬送のフリーレン" },
    { id: "2023-apothecary", zh: "藥師少女的獨語", ja: "薬屋のひとりごと" },
    { id: "2023-jigokuraku", zh: "地獄樂", ja: "地獄楽" },
    { id: "2023-yamada999", zh: "和山田談場 Lv999 的戀愛", ja: "山田くんとLv999の恋をする" },
    { id: "2023-onimai", zh: "不當哥哥了！", ja: "お兄ちゃんはおしまい！" },
    { id: "2023-bangdream", zh: "BanG Dream! It's MyGO!!!!!", ja: "BanG Dream! It's MyGO!!!!!" },
    { id: "2023-heavenly", zh: "天國大魔境", ja: "天国大魔境" },
    { id: "2023-oshinoko", zh: "【我推的孩子】", ja: "【推しの子】" },
    { id: "2023-pluto", zh: "PLUTO", ja: "PLUTO" },
    { id: "2023-undeadgirl", zh: "不死少女的謀殺鬧劇", ja: "アンデッドガール・マーダーファルス" },
  ],
  2024: [
    { id: "2024-dungeonmeshi", zh: "迷宮飯", ja: "ダンジョン飯" },
    { id: "2024-girlsbandcry", zh: "Girls Band Cry", ja: "ガールズバンドクライ" },
    { id: "2024-bravern", zh: "勇氣爆發 BANG BRAVERN", ja: "勇気爆発バーンブレイバーン" },
    { id: "2024-yorukura", zh: "深夜 Punch", ja: "真夜中ぱんチ" },
    { id: "2024-makeine", zh: "敗北女角太多了！", ja: "負けヒロインが多すぎる！" },
    { id: "2024-kaiju8", zh: "怪獸 8 號", ja: "怪獣8号" },
    { id: "2024-jellyfish", zh: "夜晚的水母不會游泳", ja: "夜のクラゲは泳げない" },
    { id: "2024-euphonium3", zh: "吹響吧！上低音號 3", ja: "響け！ユーフォニアム3" },
    { id: "2024-deaddead", zh: "驀然回首地球", ja: "デッドデッドデーモンズデデデデデストラクション" },
    { id: "2024-rangers", zh: "戰隊大失格", ja: "戦隊大失格" },
  ],
  2025: [
    { id: "2025-medalist", zh: "金牌得主", ja: "メダリスト" },
    { id: "2025-witchwatch", zh: "WITCH WATCH", ja: "ウィッチウォッチ" },
    { id: "2025-zenshu", zh: "全修。", ja: "全修。" },
    { id: "2025-lazarus", zh: "LAZARUS", ja: "LAZARUS ラザロ" },
    { id: "2025-apocalypsehotel", zh: "末日後酒店", ja: "アポカリプスホテル" },
    { id: "2025-gquuuuuuux", zh: "GQuuuuuuX", ja: "機動戦士Gundam GQuuuuuuX" },
    { id: "2025-mono", zh: "mono 女孩", ja: "mono" },
    { id: "2025-kowloon", zh: "九龍大眾浪漫", ja: "九龍ジェネリックロマンス" },
    { id: "2025-anne", zh: "安妮雪莉", ja: "アン・シャーリー" },
    { id: "2025-ninja", zh: "忍者與殺手的兩人生活", ja: "忍者と殺し屋のふたりぐらし" },
  ],
};

const years = Object.keys(animeByYear).sort();

const state = {
  language: loadState(STORAGE_KEYS.language, "zh"),
  selected: new Set(loadState(STORAGE_KEYS.selected, [])),
  yearRange: loadState(STORAGE_KEYS.yearRange, "all"),
};

const elements = {
  pageTitle: document.getElementById("page-title"),
  pageSubtitle: document.getElementById("page-subtitle"),
  yearRangeLabel: document.getElementById("year-range-label"),
  languageLabel: document.getElementById("language-label"),
  yearRange: document.getElementById("year-range"),
  boardTitle: document.getElementById("board-title"),
  board: document.getElementById("board"),
  watchCount: document.getElementById("watch-count"),
  selectAllButton: document.getElementById("select-all-button"),
  clearButton: document.getElementById("clear-button"),
  legendWatched: document.getElementById("legend-watched"),
  legendNotWatched: document.getElementById("legend-not-watched"),
  footerCopy: document.getElementById("footer-copy"),
  langButtons: Array.from(document.querySelectorAll(".lang-button")),
};

init();

function init() {
  buildYearOptions();
  bindEvents();
  render();
}

function bindEvents() {
  elements.yearRange.addEventListener("change", (event) => {
    state.yearRange = event.target.value;
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

  elements.selectAllButton.addEventListener("click", () => {
    visibleAnime().forEach((anime) => state.selected.add(anime.id));
    persist();
    renderBoard();
    renderMeta();
  });

  elements.clearButton.addEventListener("click", () => {
    visibleAnime().forEach((anime) => state.selected.delete(anime.id));
    persist();
    renderBoard();
    renderMeta();
  });
}

function buildYearOptions() {
  elements.yearRange.innerHTML = "";

  yearOptions.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    elements.yearRange.appendChild(optionElement);
  });
}

function render() {
  renderMeta();
  renderBoard();
}

function renderMeta() {
  const t = copy[state.language];

  document.documentElement.lang = state.language === "zh" ? "zh-Hant" : "ja";
  document.title = t.pageTitle;

  elements.pageTitle.textContent = t.pageTitle;
  elements.pageSubtitle.textContent = t.subtitle;
  elements.yearRangeLabel.textContent = t.yearRange;
  elements.languageLabel.textContent = t.language;
  elements.boardTitle.textContent = t.pageTitle;
  elements.selectAllButton.textContent = t.selectAll;
  elements.clearButton.textContent = t.clear;
  elements.legendWatched.textContent = t.watched;
  elements.legendNotWatched.textContent = t.notWatched;
  elements.footerCopy.textContent = t.footer;

  elements.yearRange.value = state.yearRange;
  Array.from(elements.yearRange.options).forEach((option) => {
    option.textContent = labelForYearOption(option.value);
  });

  elements.langButtons.forEach((button) => {
    const isActive = button.dataset.lang === state.language;
    button.classList.toggle("is-active", isActive);
    button.textContent = button.dataset.lang === "zh" ? t.chinese : t.japanese;
  });

  const available = visibleAnime();
  const watchedCount = available.filter((anime) => state.selected.has(anime.id)).length;
  elements.watchCount.textContent = interpolate(t.watchedCount, {
    count: watchedCount,
    total: available.length,
  });
}

function renderBoard() {
  const visibleYears = selectedYears();
  elements.board.innerHTML = "";

  visibleYears.forEach((year) => {
    const row = document.createElement("div");
    row.className = "board-row";

    const yearCell = document.createElement("div");
    yearCell.className = "year-cell";
    yearCell.textContent = year;

    const animeGrid = document.createElement("div");
    animeGrid.className = "anime-grid";

    animeByYear[year].forEach((anime) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "anime-cell";
      button.title = anime[state.language];
      button.setAttribute("aria-pressed", String(state.selected.has(anime.id)));

      if (state.selected.has(anime.id)) {
        button.classList.add("is-selected");
      }

      button.addEventListener("click", () => {
        if (state.selected.has(anime.id)) {
          state.selected.delete(anime.id);
        } else {
          state.selected.add(anime.id);
        }

        persist();
        renderBoard();
        renderMeta();
      });

      const label = document.createElement("span");
      label.textContent = anime[state.language];
      button.appendChild(label);
      animeGrid.appendChild(button);
    });

    row.appendChild(yearCell);
    row.appendChild(animeGrid);
    elements.board.appendChild(row);
  });
}

function selectedYears() {
  if (state.yearRange === "5") {
    return years.slice(-5);
  }

  if (state.yearRange === "10") {
    return years.slice(-10);
  }

  return years;
}

function visibleAnime() {
  return selectedYears().flatMap((year) => animeByYear[year]);
}

function labelForYearOption(value) {
  const t = copy[state.language];

  if (value === "5") {
    return t.last5Years;
  }

  if (value === "10") {
    return t.last10Years;
  }

  return t.allYears;
}

function interpolate(template, values) {
  return Object.entries(values).reduce((result, [key, value]) => {
    return result.replaceAll(`{{${key}}}`, String(value));
  }, template);
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
  localStorage.setItem(STORAGE_KEYS.yearRange, JSON.stringify(state.yearRange));
}
