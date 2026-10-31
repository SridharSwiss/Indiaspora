export function parseUA(ua: string | null) {
  const s = ua ?? "";
  const device = /iPad|Tablet/i.test(s) ? "tablet" : /Mobi|Android|iPhone/i.test(s) ? "mobile" : "desktop";
  const browser =
    /Edg\//.test(s) ? "Edge" :
    /OPR\/|Opera/.test(s) ? "Opera" :
    /Chrome\//.test(s) ? "Chrome" :
    /Firefox\//.test(s) ? "Firefox" :
    /Safari\//.test(s) ? "Safari" : "Other";
  const os =
    /Windows/.test(s) ? "Windows" :
    /iPhone|iPad|iOS/.test(s) ? "iOS" :
    /Android/.test(s) ? "Android" :
    /Mac OS X|Macintosh/.test(s) ? "macOS" :
    /Linux/.test(s) ? "Linux" : "Other";
  const bot = /bot|crawl|spider|slurp|preview|headless/i.test(s);
  return { device, browser, os, bot };
}
