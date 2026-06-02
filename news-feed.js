const newsGrid = document.getElementById("newsGrid");

const newsData = [
  {
    title: "Phishing Awareness",
    description: "Always check the real domain name before entering passwords or personal data."
  },
  {
    title: "HTTPS Is Not Enough",
    description: "HTTPS means encrypted connection, but phishing websites can also use HTTPS."
  },
  {
    title: "Typosquatting Alert",
    description: "Attackers use fake domains like paypa1.com, g00gle.com, or faceb00k-login.com."
  },
  {
    title: "Avoid Suspicious Links",
    description: "Do not click unknown links from emails, SMS, WhatsApp, or social media messages."
  },
  {
    title: "Check Login Pages",
    description: "Fake login pages often use words like verify, secure, update, or urgent."
  },
  {
    title: "Use Multi-Factor Authentication",
    description: "MFA adds an extra layer of protection even if your password is stolen."
  }
];

newsGrid.innerHTML = "";

newsData.forEach(item => {
  const card = document.createElement("div");
  card.className = "news-card";

  card.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.description}</p>
  `;

  newsGrid.appendChild(card);
});