"use client"

import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

const IMAGE_URLS = {
  classificationLines:
    "https://github.com/enzifiri/dont-delete/blob/main/gradient-lines.png?raw=true",
  letsCat:
    "https://github.com/enzifiri/dont-delete/blob/main/cat1-new.png?raw=true",
  growthCat:
    "https://github.com/enzifiri/dont-delete/blob/main/cat2-new.png?raw=true",
  togetherCat:
    "https://github.com/enzifiri/dont-delete/blob/main/cat3-new.png?raw=true,
  chonkrPieCharacter:
    "https://github.com/enzifiri/dont-delete/blob/main/pie.png?raw=true",
}

export default function ChonkrLanding() {
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "ABW6JT...XAQ2FS"
  const tickerText = process.env.NEXT_PUBLIC_TICKER_TEXT || "To The Moon! * To The Moon! * To The Moon!"
  const projectName = process.env.NEXT_PUBLIC_PROJECT_NAME || "CHONKR"
  const projectDescription =
    process.env.NEXT_PUBLIC_PROJECT_DESCRIPTION ||
    "LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE A"

  const airdropPercent = process.env.NEXT_PUBLIC_AIRDROP_PERCENT || "76"
  const teamPercent = process.env.NEXT_PUBLIC_TEAM_PERCENT || "24"
  const totalSupply = process.env.NEXT_PUBLIC_TOTAL_SUPPLY || "99,999,999,999"

  const mainImage = process.env.NEXT_PUBLIC_MAIN_IMAGE || "/chubby-cat-with-bread-hat.png"
  const aboutImage = process.env.NEXT_PUBLIC_ABOUT_IMAGE || "/cute-cat-character-illustration.png"

  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div
      className="min-h-screen bg-red-500 relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 1px, transparent 1px), 
                        radial-gradient(circle at 75% 75%, rgba(255,255,255,0.12) 1px, transparent 1px),
                        radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 1px, transparent 1px)`,
        backgroundSize: "15px 15px, 12px 12px, 18px 18px",
        backgroundPosition: "0 0, 8px 8px, 15px 15px",
      }}
    >
      {/* Background CAT Text - Left Side */}
      <div className="absolute left-95 top-1/4 pointer-events-none z-0">
        <div className="transform -rotate-45 scale-[2.5] opacity-[0.03]">
          <span className="font-[family-name:var(--font-bebas-neue)] text-white text-8xl tracking-widest">CAT</span>
        </div>
      </div>

      {/* Background BREAD Text - Right Side */}
      <div className="absolute right-55 top-1/4 pointer-events-none z-0">
        <div className="transform -rotate-45 scale-[2.5] opacity-[0.03]">
          <span className="font-[family-name:var(--font-bebas-neue)] text-white text-8xl tracking-widest">BREAD</span>
        </div>
      </div>
      {/* Header Navigation */}
      <header className="flex items-center justify-between p-6 shadow-lg">
        <div className="flex flex-col ml-16">
          <span className="text-white font-bold text-lg font-[family-name:var(--font-luckiest-guy)] leading-tight">
            To The Moon!
          </span>
          <div className="text-yellow-400 font-black text-2xl tracking-wider font-[family-name:var(--font-luckiest-guy)] leading-tight ml-1">
            {projectName}
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 ml-32">
          <button
            onClick={() => {
              document.getElementById("about-section")?.scrollIntoView({
                behavior: "smooth",
              })
            }}
            className="text-white font-bold text-lg hover:text-yellow-300 transition-colors font-[family-name:var(--font-fredoka-one)] cursor-pointer"
          >
            ABOUT
          </button>
          <button
            onClick={() => {
              document.getElementById("tokenomics-section")?.scrollIntoView({
                behavior: "smooth",
              })
            }}
            className="text-white font-bold text-lg hover:text-yellow-300 transition-colors font-[family-name:var(--font-fredoka-one)] cursor-pointer"
          >
            TOKENOMICS
          </button>
        </nav>

        <div className="flex items-center gap-3">
          {/* Telegram Icon */}
          <a
            href={process.env.NEXT_PUBLIC_TELEGRAM_LINK || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 border-2 border-gray-400 rounded-lg p-2 w-10 h-10 flex items-center justify-center transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.61 7.59c-.12.54-.44.67-.89.42l-2.46-1.81-1.19 1.14c-.13.13-.24.24-.49.24l.17-2.43 4.47-4.03c.19-.17-.04-.27-.3-.1L9.28 13.47l-2.38-.75c-.52-.16-.53-.52.11-.77l9.28-3.58c.43-.16.81.11.67.77z" />
            </svg>
          </a>

          {/* X/Twitter Icon */}
          <a
            href={process.env.NEXT_PUBLIC_X_LINK || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 border-2 border-gray-400 rounded-lg p-2 w-10 h-10 flex items-center justify-center transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </a>

          {/* Discord Icon */}
          <a
            href={process.env.NEXT_PUBLIC_DISCORD_LINK || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 border-2 border-gray-400 rounded-lg p-2 w-10 h-10 flex items-center justify-center transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </a>

          {/* Buy Now Button */}
          <a
            href={process.env.NEXT_PUBLIC_BUY_NOW_LINK || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-500 hover:bg-gray-50 font-bold px-4 py-2 h-10 rounded-lg border-2 border-gray-400 font-[family-name:var(--font-luckiest-guy)] text-sm flex items-center justify-center transition-colors"
          >
            BUY NOW
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="relative flex flex-col items-center">
          {/* Cat Character */}
          <div className="relative z-0 mb-[-60px]">
            <img
              src={mainImage || "/placeholder.svg"}
              alt="Chonkr cat character with bread hat"
              className="w-full max-w-96 h-auto max-h-96 object-contain"
            />
          </div>

          {/* CHONKR Logo */}
          <div className="relative z-10 w-full max-w-4xl">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-yellow-400 tracking-wider relative font-[family-name:var(--font-luckiest-guy)]">
              <span className="relative inline-block">
                {projectName.slice(0, 2)}
                <span className="relative">
                  {projectName.slice(2, 3)}
                  {/* Paw print in the O */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 relative"></div>
                  </div>
                </span>
                {projectName.slice(3)}
              </span>
              <div className="absolute inset-0 text-red-800 -z-10 translate-x-1 translate-y-1">{projectName}</div>
            </h1>
          </div>
        </div>

        {/* Contract Address */}
        <div className="bg-yellow-50 border-4 border-yellow-500 rounded-full px-8 py-3 flex items-center gap-3 mb-8 mt-8 shadow-lg max-w-lg relative">
          <span className="font-bold text-black text-base font-[family-name:var(--font-fredoka-one)]">CONTRACT:</span>
          <span className="font-mono text-black text-base tracking-wide font-[family-name:var(--font-fredoka-one)] flex-1 text-center">
            {contractAddress}
          </span>
          <Button
            onClick={copyToClipboard}
            size="sm"
            className={`${
              isCopied
                ? "bg-green-100 hover:bg-green-200 text-green-700"
                : "bg-transparent hover:bg-yellow-200 text-black"
            } p-1 rounded flex-shrink-0 transition-colors`}
          >
            {isCopied ? <Check size={16} /> : <Copy size={16} />}
          </Button>
          {isCopied && (
            <span className="text-green-700 font-bold text-sm font-[family-name:var(--font-fredoka-one)] absolute -top-8 right-4 bg-green-100 px-2 py-1 rounded">
              Copied!
            </span>
          )}
        </div>
      </main>

      {/* Scrolling Ticker at Bottom of Main Page */}
      <div className="w-full h-16 overflow-hidden bg-red-700 -mt-41">
        <div className="h-full flex items-center whitespace-nowrap">
          <div className="animate-scroll-slow flex items-center">
            {Array.from({ length: 25 }, (_, i) => (
              <span key={i} className="text-red-100 font-bold text-lg mx-4">
                {tickerText}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* About Section - Full Page */}
      <section id="about-section" className="min-h-screen flex items-center px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8">
          {/* Left Side - Text and Icons */}
          <div className="flex-1 max-w-2xl">
            {/* Title */}
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 font-[family-name:var(--font-luckiest-guy)] tracking-wider">
                WHAT IS {projectName}?
              </h2>
            </div>

            {/* Description */}
            <p className="text-white text-base sm:text-lg leading-relaxed mb-12 font-[family-name:var(--font-fredoka-one)]">
              {projectDescription}
            </p>

            {/* Icons Grid */}
            <div className="grid grid-cols-3 gap-4 justify-center lg:justify-start">
              {/* Discord Button */}
              <a
                href={process.env.NEXT_PUBLIC_DISCORD_LINK || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-indigo-400 sm:w-6 sm:h-6"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>

              {/* X (Twitter) Button */}
              <a
                href={process.env.NEXT_PUBLIC_X_LINK || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white sm:w-6 sm:h-6"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>

              {/* Telegram Button */}
              <a
                href={process.env.NEXT_PUBLIC_TELEGRAM_LINK || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-blue-400 sm:w-6 sm:h-6"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.61 7.59c-.12.54-.44.67-.89.42l-2.46-1.81-1.19 1.14c-.13.13-.24.24-.49.24l.17-2.43 4.47-4.03c.19-.17-.04-.27-.3-.1L9.28 13.47l-2.38-.75c-.52-.16-.53-.52.11-.77l9.28-3.58c.43-.16.81.11.67.77z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Cat Image */}
          <div className="flex-1 flex justify-center lg:justify-end items-center w-full">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              <img
                src={aboutImage || "/placeholder.svg"}
                alt="Chonkr cat character"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section
        className="min-h-screen bg-red-500 relative overflow-hidden px-6"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 1px, transparent 1px), 
                            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.12) 1px, transparent 1px),
                            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "15px 15px, 12px 12px, 18px 18px",
          backgroundPosition: "0 0, 8px 8px, 15px 15px",
        }}
      >
        {/* Yellow Banner with Paw Prints - Behind Title */}
        <div id="tokenomics-section" className="absolute top-32 left-0 right-0 h-24 bg-yellow-400 overflow-hidden z-0">
          {/* Wave Pattern */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 96" preserveAspectRatio="none">
            <defs>
              <pattern id="wave" x="0" y="0" width="200" height="96" patternUnits="userSpaceOnUse">
                <path d="M0,48 Q50,24 100,48 T200,48 V96 H0 Z" fill="rgba(255,255,255,0.1)" />
                <path d="M0,48 Q50,72 100,48 T200,48 V96 H0 Z" fill="rgba(255,255,255,0.05)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave)" />
          </svg>

          {/* Additional Texture */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.08) 1px, transparent 1px), 
                              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.06) 1px, transparent 1px)`,
              backgroundSize: "12px 12px, 8px 8px",
              backgroundPosition: "0 0, 6px 6px",
            }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] py-20">
          {/* Title */}
          <h2
            className="text-7xl font-black text-white mb-16 font-[family-name:var(--font-luckiest-guy)] tracking-wider relative z-10 mt-30"
            style={{
              textShadow: "4px 4px 0px rgba(0,0,0,0.8), 6px 6px 0px rgba(0,0,0,0.6)",
              WebkitTextStroke: "3px black",
            }}
          >
            TOKENOMICS
          </h2>

          {/* Key Features Banner */}
          <div
            className="bg-yellow-400 px-8 py-3 rounded-full border-2 border-black mb-16 flex items-center justify-center gap-6"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "4px 4px",
            }}
          >
            <span className="font-black text-black text-xl font-[family-name:var(--font-luckiest-guy)]">0% TAX</span>
            <div className="w-12 h-12 bg-black rounded-lg border-2 border-black flex items-center justify-center">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
            </div>
            <span className="font-black text-black text-xl font-[family-name:var(--font-luckiest-guy)]">LP BURNED</span>
          </div>

          <div className="flex items-center justify-center -mt-32 -ml-2 relative">
            <img
              src={IMAGE_URLS.chonkrPieCharacter || "/placeholder.svg"}
              alt="Chonkr pie character"
              className="w-[750px] h-[750px] object-contain"
            />

            {/* Left Yellow Label */}
            <div className="absolute left-0 top-[52%] transform -translate-y-1/2 -rotate-18">
              <div className="bg-yellow-400 px-15 py-4 rounded-full border-2 border-black font-semibold text-black text-lg">
                %{airdropPercent} AIRDROP
              </div>
            </div>

            <div className="absolute -left-36 top-[67%] transform -translate-y-1/2 hidden">
              <div className="text-white font-bold text-lg leading-tight font-[family-name:var(--font-fredoka-one)]">
                <div>LOREM IPSUM IS SIMPLY DUMMY</div>
                <div>TEXT OF THE PRINTING</div>
              </div>
            </div>

            {/* Right Yellow Label */}
            <div className="absolute left-135 top-[29%] transform -translate-y-1/2 -rotate-15">
              <div className="bg-yellow-400 px-14 py-4 rounded-full border-2 border-black font-semibold text-black text-lg">
                %{teamPercent} TEAM'S HODL
              </div>
            </div>

            <div className="absolute -right-45 top-[42%] transform -translate-y-1/2 hidden">
              <div className="text-white font-bold text-lg leading-tight font-[family-name:var(--font-fredoka-one)]">
                <div>LOREM IPSUM IS SIMPLY DUMMY</div>
                <div>TEXT OF THE PRINTING</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHONKR CLASSIFICATION Section */}
      <section
        className="min-h-[60vh] bg-yellow-400 relative overflow-hidden px-6"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.25) 1px, transparent 1px), 
                            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.20) 1px, transparent 1px),
                            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "12px 12px, 8px 8px, 15px 15px",
          backgroundPosition: "0 0, 6px 6px, 12px 12px",
        }}
      >
        {/* TOTAL SUPPLY Banner */}
        <div className="flex justify-center pt-8 pb-4">
          <div className="bg-yellow-400 px-8 py-4 rounded-full border-4 border-black shadow-lg">
            <span className="font-black text-black text-2xl font-[family-name:var(--font-luckiest-guy)]">
              TOTAL SUPPLY: {totalSupply}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] py-20">
          {/* Title */}
          <h2 className="text-6xl font-black text-black mb-12 font-[family-name:var(--font-luckiest-guy)] tracking-wider">
            {projectName} CLASSIFICATION CHART
          </h2>

          <div className="w-[650px] h-24 mb-8 flex justify-center">
            <img
              src={IMAGE_URLS.classificationLines || "/placeholder.svg"}
              alt="Classification lines"
              className="h-full object-contain"
            />
          </div>

          {/* Cat Silhouettes and Labels */}
          <div className="flex justify-start items-start w-[600px] gap-20 ml-12">
            {/* Left Cat - LETS... */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-24 mb-2">
                <img
                  src={IMAGE_URLS.letsCat || "/placeholder.svg"}
                  alt="LETS cat"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-black text-lg text-center">LETS...</span>
            </div>

            {/* Middle Cat - GROWTH... */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-24 mb-2">
                <img
                  src={IMAGE_URLS.growthCat || "/placeholder.svg"}
                  alt="GROWTH cat"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-lg text-center">GROWTH...</span>
            </div>

            {/* Right Cat - TOGETHER... */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-28 mb-2">
                <img
                  src={IMAGE_URLS.togetherCat || "/placeholder.svg"}
                  alt="TOGETHER cat"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-black text-lg text-center -mt-2">TOGETHER...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Red Footer Section */}
      <section
        className="min-h-[20vh] bg-red-500 relative overflow-hidden px-6"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 1px, transparent 1px), 
                          radial-gradient(circle at 75% 75%, rgba(255,255,255,0.12) 1px, transparent 1px),
                          radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "15px 15px, 12px 12px, 18px 18px",
          backgroundPosition: "0 0, 8px 8px, 15px 15px",
        }}
      >
        {/* Footer Content */}
        <div className="flex flex-col min-h-[20vh] py-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-between flex-1">
            {/* Left Side - Logo/Brand */}
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg font-[family-name:var(--font-fredoka-one)] leading-tight mb-2">
                To The Moon!
              </span>
              <div
                className="text-yellow-400 font-black text-3xl tracking-wider font-[family-name:var(--font-luckiest-guy)] leading-tight"
                style={{
                  textShadow: "2px 2px 0px rgba(0,0,0,0.8)",
                  WebkitTextStroke: "1px black",
                }}
              >
                {projectName}
              </div>
            </div>

            {/* Center - Navigation */}
            <div className="flex items-center gap-8">
              <button
                onClick={() => document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" })}
                className="text-white font-bold text-lg hover:text-yellow-300 transition-colors font-[family-name:var(--font-fredoka-one)] cursor-pointer"
              >
                ABOUT
              </button>
              <button
                onClick={() => document.getElementById("tokenomics-section")?.scrollIntoView({ behavior: "smooth" })}
                className="text-white font-bold text-lg hover:text-yellow-300 transition-colors font-[family-name:var(--font-fredoka-one)] cursor-pointer"
              >
                TOKENOMICS
              </button>
            </div>

            {/* Right Side - Social Media Buttons */}
            <div className="flex items-center gap-3">
              {/* Discord Icon */}
              <a
                href={process.env.NEXT_PUBLIC_DISCORD_LINK || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-indigo-500 rounded-lg border-2 border-gray-400 flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>

              {/* Telegram Icon */}
              <a
                href={process.env.NEXT_PUBLIC_TELEGRAM_LINK || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-500 rounded-lg border-2 border-gray-400 flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.61 7.59c-.12.54-.44.67-.89.42l-2.46-1.81-1.19 1.14c-.13.13-.24.24-.49.24l.17-2.43 4.47-4.03c.19-.17-.04-.27-.3-.1L9.28 13.47l-2.38-.75c-.52-.16-.53-.52.11-.77l9.28-3.58c.43-.16.81.11.67.77z" />
                </svg>
              </a>

              {/* X/Twitter Icon */}
              <a
                href={process.env.NEXT_PUBLIC_X_LINK || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black rounded-lg border-2 border-gray-400 flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>

              {/* Buy Now Button */}
              <a
                href={process.env.NEXT_PUBLIC_BUY_NOW_LINK || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-500 hover:bg-gray-50 font-bold px-4 py-2 h-10 rounded-lg border-2 border-gray-400 font-[family-name:var(--font-luckiest-guy)] text-sm flex items-center justify-center transition-colors shadow-lg hover:scale-105"
              >
                BUY NOW
              </a>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-black bg-opacity-55 mx-auto mb-4 mt-6"></div>

          {/* Copyright Text */}
          <div className="text-center pb-4">
            <div className="text-white text-sm font-[family-name:var(--font-fredoka-one)]">
              &copy; 2025 ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
