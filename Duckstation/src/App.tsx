import DownloadButton from "./components/DownloadButton";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="relative flex flex-col text-center items-center mt-16 z-50">
        <div className="flex flex-col md:flex-row justify-center items-center mb-16">
          <img src="ducko256.png" />
          <h1 className=" text-6xl md:text-9xl">DuckStation</h1>
        </div>
        <p className="text-2xl px-8 md:px-0">
          DuckStation is a PS1 Emulator aiming for the best accuracy and game
          support.
        </p>
        <div className="flex flex-col md:flex-row min-w-3xl mt-6 ">
          <div className="w-full md:w-1/4 flex flex-col items-center pb-8">
            <h3 className="text-3xl">Windows</h3>
            <hr className="my-2 mx-4 border-t-2 border-gray-300 w-32" />
            <DownloadButton
              badgeText="x64"
              iconPath="icons/windows.svg"
              mainText="Zip"
              href="https://github.com/stenzek/duckstation/releases/download/latest/duckstation-windows-x64-release.zip"
            />
            <DownloadButton
              badgeText="arm64"
              iconPath="icons/windows.svg"
              mainText="Zip"
              href="https://github.com/stenzek/duckstation/releases/download/latest/duckstation-windows-arm64-release.zip"
            />
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-center pb-8">
            <h3 className="text-3xl">MacOS</h3>
            <hr className="my-2 mx-4 border-t-2 border-gray-300 w-32" />
            <DownloadButton
              badgeText="all"
              iconPath="icons/macos.svg"
              mainText="Zip"
              href="https://github.com/stenzek/duckstation/releases/download/latest/duckstation-mac-release.zip"
            />
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-center pb-8">
            <h3 className="text-3xl">Linux</h3>
            <hr className="my-2 mx-4 border-t-2 border-gray-300 w-32" />
            <DownloadButton
              badgeText="x64"
              iconPath="icons/flathub.svg"
              mainText="Flatpak"
              href="https://github.com/stenzek/duckstation/releases/download/latest/duckstation-x86_64.flatpak"
            />
            <DownloadButton
              badgeText="aarch64"
              iconPath="icons/flathub.svg"
              mainText="Flatpak"
              href="https://github.com/stenzek/duckstation/releases/download/latest/duckstation-aarch64.flatpak"
            />
            <DownloadButton
              badgeText="x64"
              iconPath="icons/appimage.svg"
              mainText="Appimage"
              href="https://github.com/stenzek/duckstation/releases/download/latest/DuckStation-x64.AppImage"
            />
            <DownloadButton
              badgeText="arm64"
              iconPath="icons/appimage.svg"
              mainText="Appimage"
              href="https://github.com/stenzek/duckstation/releases/download/latest/DuckStation-arm64.AppImage"
            />
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-center pb-8">
            <h3 className="text-3xl">Android</h3>
            <hr className="my-2 mx-4 border-t-2 border-gray-300 w-32" />
            <DownloadButton
              badgeText="all"
              iconPath="icons/android.svg"
              mainText="Play Store"
              href="https://play.google.com/store/apps/details?id=com.github.stenzek.duckstation"
            />
          </div>
        </div>
        <p className="pb-8">
          View all downloads&nbsp;
          <a
            className="underline hover:cursor-pointer"
            href="https://github.com/stenzek/duckstation/releases/tag/latest"
          >
            here!
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
