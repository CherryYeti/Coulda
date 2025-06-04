function Header() {
  return (
    <div className="flex flex-row w-full pt-4 pl-4 items-center">
      <img src="ducko256.png" className="w-8 h-8" />
      <a
        href="https://github.com/stenzek/duckstation"
        target="_blank"
        rel="noreferrer"
      >
        <p className="ml-4 hover:cursor-pointer hover:underline">View Source</p>
      </a>
      <a
        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRE0jjiK_aldpICoy5kVQlpk2f81Vo6P4p9vfg4d7YoTOoDlH4PQHoXjTD2F7SdN8SSBLoEAItaIqQo/pubhtml"
        target="_blank"
        rel="noreferrer"
      >
        <p className="ml-4 hover:cursor-pointer hover:underline">
          Compatibility
        </p>
      </a>
      <a
        href="https://www.duckstation.org/discord.html"
        target="_blank"
        rel="noreferrer"
      >
        <p className="ml-4 hover:cursor-pointer hover:underline">Discord</p>
      </a>
    </div>
  );
}

export default Header;
