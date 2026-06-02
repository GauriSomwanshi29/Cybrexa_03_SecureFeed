const quizUrl = document.getElementById("quizUrl");
const safeBtn = document.getElementById("safeBtn");
const phishBtn = document.getElementById("phishBtn");
const quizResult = document.getElementById("quizResult");
const quizProgress = document.getElementById("quizProgress");
const quizScore = document.getElementById("quizScore");

const quizList = [
  {
    url: "https://secure-bank-login.verify-now.com",
    answer: "phishing",
    reason: "This URL uses suspicious words like secure, login and verify."
  },
  {
    url: "https://www.google.com",
    answer: "safe",
    reason: "This is a known official Google domain."
  },
  {
    url: "http://192.168.1.20/login",
    answer: "phishing",
    reason: "IP-based login URLs are suspicious for public websites."
  },
  {
    url: "https://paypa1-login.com",
    answer: "phishing",
    reason: "This uses typosquatting. paypa1 is not paypal."
  },
  {
    url: "https://www.microsoft.com",
    answer: "safe",
    reason: "This is the official Microsoft domain."
  },
  {
    url: "https://account-update-amazon-security.com",
    answer: "phishing",
    reason: "This URL uses fake urgency words like update and security."
  },
  {
    url: "https://www.linkedin.com",
    answer: "safe",
    reason: "This is the official LinkedIn domain."
  },
  {
    url: "https://free-gift-login-now.com",
    answer: "phishing",
    reason: "Free gift and login keywords are commonly used in phishing."
  },
  {
    url: "https://github.com",
    answer: "safe",
    reason: "This is the official GitHub domain."
  },
  {
    url: "http://bank-account-verify-security.com",
    answer: "phishing",
    reason: "HTTP plus bank, verify and security words make this suspicious."
  },
  {
    url: "https://www.instagram.com",
    answer: "safe",
    reason: "This is the official Instagram domain."
  },
  {
    url: "https://instagrarn-login-help.com",
    answer: "phishing",
    reason: "This is a lookalike spelling of Instagram."
  },
  {
    url: "https://netf1ix-billing-update.com",
    answer: "phishing",
    reason: "This uses typosquatting and billing update keywords."
  },
  {
    url: "https://www.amazon.in",
    answer: "safe",
    reason: "This is an official Amazon India domain."
  },
  {
    url: "https://gift-card-claim-free.com",
    answer: "phishing",
    reason: "Free gift claim URLs are commonly used in phishing scams."
  }
];

let currentQuiz = 0;
let score = 0;

function showQuiz() {
  quizUrl.textContent = quizList[currentQuiz].url;
  quizProgress.textContent = `Question ${currentQuiz + 1}/${quizList.length}`;
  quizScore.textContent = `Score: ${score}`;
  quizResult.textContent = "";
}

function checkAnswer(choice) {
  const quiz = quizList[currentQuiz];

  if (choice === quiz.answer) {
    score++;
    quizResult.textContent = "Correct! " + quiz.reason;
    quizResult.style.color = "#22c55e";
  } else {
    quizResult.textContent = "Wrong! " + quiz.reason;
    quizResult.style.color = "#ef4444";
  }

  quizScore.textContent = `Score: ${score}`;

  setTimeout(() => {
    currentQuiz++;

    if (currentQuiz >= quizList.length) {
      quizResult.textContent = `Quiz completed! Final Score: ${score}/${quizList.length}`;
      quizResult.style.color = "#00f5ff";

      currentQuiz = 0;
      score = 0;

      setTimeout(showQuiz, 2500);
      return;
    }

    showQuiz();
  }, 1800);
}

safeBtn.addEventListener("click", () => checkAnswer("safe"));
phishBtn.addEventListener("click", () => checkAnswer("phishing"));

showQuiz();