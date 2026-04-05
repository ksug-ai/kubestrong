# 📘 kubestrong club Members Submission Guide

## Welcome to **[kubestrong](https://kubestrong.com/?ref=github)** club! 

The **kubestrong** program recognizes passionate community leaders who are dedicated to continuous learning and helping others grow. Members of the **kubestrong** club are multi-cloud enthusiasts who have earned the **[awstronaut](https://awstronaut.com/awstronaut/?ref=github)** and **[kubestronaut](https://kb.ksug.ai)** titles — or hold the **[Golden Kubestronaut](https://gk.ksug.ai)** badge along with at least two cloud certifications. They are active contributors who uplift and inspire others across the community. 

To submit your profile:

1. You must be an awstronaut + kubestronaut or a golden kubestronaut + 2 cloud certs
2. You must have officially claimed your kubestrong title by tagging us in a LinkedIn post
3. Then, follow the steps below to get listed!

👉 More info on **[kubestrong](https://linkedin.com/company/kubestrong)**.

---

## 📥 How to Submit Your Profile

> 🚨 **Important:** You must [fork this repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo), make your changes, and submit them via a **Pull Request (PR)**.  
> Do **NOT** attempt to push changes directly to the main branch — they will be automatically rejected.

Your Pull Request should include:

- ✅ One new JSON entry at the bottom of `users.json`  
- 🖼️ One avatar image uploaded to the `avatars/` folder  

---

### ✅ JSON Format

Please add your profile using the following format in `users.json`:

<pre>
{
  "name": "Yongkang He",
  "github": "yongkanghe",
  "certs": ["kubestrong"],
  "city": "Melbourne",
  "country": "Australia",
  "date": "2024-07-01",
  "bio": "Founder @KSUG.AI | Creator @kubestrong = @awstronaut + kubestronaut | Akamai Advocate | AWS Builder | Azure MVP | Google GDE | Alibaba MVP | Multi-Cloud | Community Reach | DevRel | 100K Social Reach",
  "twitter": "yongkanghe",
  "linkedin": "yongkanghe",
  "website": "https://ksug.ai",
  "avatar": "/avatars/yongkanghe.png"
}
</pre>

---

### 📌 Field Descriptions

| Field      | Required | Description |
|------------|----------|-------------|
| `name`     | ✅       | Full name or display name |
| `github`   | ✅       | GitHub username (used for fallback avatar) |
| `certs`    | ✅       | Certification codes
| `city`     | ✅       | City of residence |
| `country`  | ✅       | Country (must match naming in the map) |
| `date`     | ✅       | Certification date (`YYYY-MM-DD`) |
| `bio`      | ❌       | Short description or personal motto |
| `twitter`  | ❌       | Twitter handle (omit `@`) |
| `linkedin` | ❌       | LinkedIn username (not full URL) |
| `website`  | ❌       | Personal or portfolio website |
| `avatar`   | ❌       | Path to avatar image in `/avatars/` folder |

---

## 🖼️ Avatar Upload Guidelines

- Place your avatar in the `avatars/` folder (e.g., `avatars/yourgithubusername.png`)  
- **Max size:** 500 KB  
- **Recommended dimensions:** 200×200 px (square images render best)  
- **Allowed formats:** `.png`, `.jpg`  

> If no avatar is uploaded, your GitHub profile picture will be used by default.

---

## 💡 Pull Request Tips

- ✅ Add your profile to the **end** of `users.json`  
- ✅ Ensure your JSON is valid (use a [JSON validator](https://jsonlint.com/))  
- ✅ Use a clear commit message, e.g.:  
  `add: alicejohnson to certified list`

---

## 🆘 New to GitHub or PRs?

Check out this official guide:  
👉 [GitHub Pull Request Guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests)

---

## 🙌 Thank You for Powering the Global Kubestrong Movement!

Together, we’re showcasing the impact of Multi-Cloud certifications and the strength of global community collaboration. 💪☁️🌍 Whether you're just starting out or already certified, you're part of something bigger — and stronger.

---

## 📢 Stay Connected with 200,000+ Cloud-Native Enthusiasts! 🎉

Join over **200,000** passionate learners who:
- ✅ Learn 𝐅𝐀𝐒𝐓𝐄𝐑 ⚡ 
- ✅ Certify 𝐒𝐌𝐀𝐑𝐓𝐄𝐑 💰 
- ✅ Grow 𝐒𝐓𝐑𝐎𝐍𝐆𝐄𝐑 💪

📌 Subscribe now → 🔥 [KSUG.AI Linktree](https://linktr.ee/ksug.ai)
📌 Bookmark this → ❤️ [KSUG.AI](https://ksug.ai/?ref=github)

🔗 Stay plugged into the world’s most active Kubernetes + AI community.

📣 Follow [KSUG.AI](https://ksug.ai/?ref=github) — Let’s build, learn, and grow together! 🚀

<sub>[KSUG.AI](https://ksug.ai/?ref=github) is an independent community and not affiliated with or endorsed by CNCF. K8s and Kubernetes are registered trademarks of The Linux Foundation.</sub>
