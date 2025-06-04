import { useLanguage } from "../LanguageContext";

function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex flex-row w-full pt-4 pl-4 items-center">
      <img src="ducko256.png" className="w-8 h-8" />
      <a
        href="https://github.com/stenzek/duckstation"
        target="_blank"
        rel="noreferrer"
      >
        <p className="ml-4 hover:cursor-pointer hover:underline">
          {t.viewSource}
        </p>
      </a>
      <a
        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRE0jjiK_aldpICoy5kVQlpk2f81Vo6P4p9vfg4d7YoTOoDlH4PQHoXjTD2F7SdN8SSBLoEAItaIqQo/pubhtml"
        target="_blank"
        rel="noreferrer"
      >
        <p className="ml-4 hover:cursor-pointer hover:underline">
          {t.compatibility}
        </p>
      </a>
      <a
        href="https://www.duckstation.org/discord.html"
        target="_blank"
        rel="noreferrer"
      >
        <p className="ml-4 hover:cursor-pointer hover:underline">{t.discord}</p>
      </a>
      <div className="flex-1" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as "en" | "ja")}
        className="mr-4 px-4 py-2 rounded-3xl border-1"
        aria-label="Select language"
      >
        <option value="en">English</option>
        <option value="ja">日本語</option>
      </select>
    </div>
  );
}

export default Header;
