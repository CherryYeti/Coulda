function DownloadButton({
  iconPath,
  mainText,
  badgeText,
  href,
}: {
  iconPath: string;
  mainText: string;
  badgeText: string;
  href: string;
}) {
  return (
    <a href={href} className="mt-4">
      <button className="group px-4 py-2 bg-white text-black hover:cursor-pointer rounded-3xl hover:bg-rose-400 hover:text-white flex items-center transition-colors duration-200">
        <span className="mr-2 flex items-center">
          <img src={iconPath} height="16" width="16" className="h-4 w-4" />
        </span>
        {mainText}
        <div className="ml-1 px-2 my-1 rounded-3xl bg-rose-400 group-hover:bg-white group-hover:text-black ">
          {badgeText}
        </div>
      </button>
    </a>
  );
}
export default DownloadButton;
