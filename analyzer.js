const urlInput = document.getElementById("urlInput");
const analyzeBtn = document.getElementById("analyzeBtn");

const riskScore = document.getElementById("riskScore");
const riskLabel = document.getElementById("riskLabel");
const riskMessage = document.getElementById("riskMessage");
const scoreCircle = document.getElementById("scoreCircle");

const scanLoader = document.getElementById("scanLoader");
const domainProtocol = document.getElementById("domainProtocol");
const domainName = document.getElementById("domainName");
const domainLength = document.getElementById("domainLength");

const checks = {
  https: document.getElementById("checkHttps"),
  ip: document.getElementById("checkIp"),
  typos: document.getElementById("checkTypos"),
  lookalike: document.getElementById("checkLookalike"),
  length: document.getElementById("checkLength"),
  symbols: document.getElementById("checkSymbols")
};

analyzeBtn.addEventListener("click", () => {
  const url = urlInput.value.trim();

  if (!url) {
    alert("Please enter a URL");
    return;
  }

  scanLoader.style.display = "block";

  setTimeout(() => {
    runScan(url);
    scanLoader.style.display = "none";
  }, 700);
});

function runScan(url) {
  let score = 0;

  updateDomainInfo(url);

  if (url.includes("127.0.0.1") || url.includes("localhost")) {
    score = 0;

    setCheck("https", "safe", "HTTPS Check: Local development URL");
    setCheck("ip", "safe", "IP URL Check: Localhost allowed");
    setCheck("typos", "safe", "Typosquatting: No mimic found");
    setCheck("lookalike", "safe", "Lookalike Check: Clean characters");
    setCheck("length", "safe", "URL Length: Normal");
    setCheck("symbols", "safe", "Suspicious Pattern: No major issue");

    updateRisk(score);
    return;
  }

  if (!url.startsWith("https://")) {
    score += 20;
    setCheck("https", "danger", "HTTPS Check: Not secure");
  } else {
    setCheck("https", "safe", "HTTPS Check: Secure");
  }

  if (/https?:\/\/(\d{1,3}\.){3}\d{1,3}/.test(url)) {
    score += 25;
    setCheck("ip", "danger", "IP URL Check: Suspicious IP URL");
  } else {
    setCheck("ip", "safe", "IP URL Check: No IP URL found");
  }

  if (/(paypa1|g00gle|faceb00k|micros0ft|amaz0n|netf1ix|instagrarn|linkedln)/i.test(url)) {
    score += 25;
    setCheck("typos", "danger", "Typosquatting: Suspicious brand mimic");
  } else {
    setCheck("typos", "safe", "Typosquatting: No mimic found");
  }

  if (/[а-яА-Я]/.test(url)) {
    score += 15;
    setCheck("lookalike", "danger", "Lookalike Check: Suspicious characters");
  } else {
    setCheck("lookalike", "safe", "Lookalike Check: Clean characters");
  }

  if (url.length > 75) {
    score += 10;
    setCheck("length", "warn", "URL Length: Very long URL");
  } else {
    setCheck("length", "safe", "URL Length: Normal");
  }

  const suspiciousWords = [
    "login",
    "verify",
    "secure",
    "update",
    "account",
    "bank",
    "free",
    "gift",
    "urgent"
  ];

  if (url.includes("@") || suspiciousWords.some(word => url.toLowerCase().includes(word))) {
    score += 15;
    setCheck("symbols", "warn", "Suspicious Pattern: Risky keywords found");
  } else {
    setCheck("symbols", "safe", "Suspicious Pattern: No major issue");
  }

  score = Math.min(score, 100);

  updateRisk(score);
}

function updateRisk(score) {
  riskScore.textContent = score;

  if (score <= 35) {
    riskLabel.textContent = "LOW RISK";
    riskMessage.textContent = "This URL looks mostly safe based on basic checks.";
    scoreCircle.style.borderColor = "#22c55e";
    scoreCircle.style.boxShadow = "0 0 30px rgba(34,197,94,.35)";
  } else if (score <= 70) {
    riskLabel.textContent = "MEDIUM RISK";
    riskMessage.textContent = "This URL has some suspicious indicators.";
    scoreCircle.style.borderColor = "#facc15";
    scoreCircle.style.boxShadow = "0 0 30px rgba(250,204,21,.35)";
  } else {
    riskLabel.textContent = "HIGH RISK";
    riskMessage.textContent = "This URL looks dangerous. Avoid entering sensitive information.";
    scoreCircle.style.borderColor = "#ef4444";
    scoreCircle.style.boxShadow = "0 0 30px rgba(239,68,68,.35)";
  }
}

function updateDomainInfo(url) {
  try {
    const fixedUrl = url.startsWith("http") ? url : "https://" + url;
    const parsed = new URL(fixedUrl);

    domainProtocol.textContent = parsed.protocol.replace(":", "").toUpperCase();
    domainName.textContent = parsed.hostname;
    domainLength.textContent = url.length + " characters";
  } catch {
    domainProtocol.textContent = "Invalid";
    domainName.textContent = "Invalid URL";
    domainLength.textContent = url.length + " characters";
  }
}

function setCheck(key, status, text) {
  checks[key].className = `check-item ${status}`;
  checks[key].textContent = text;
}