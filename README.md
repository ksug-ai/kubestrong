# 📘 kubestrong club Members Submission Guide

Welcome to kubestrong club! This project highlights K8SUG certified kubestrong community members around the world. We are still finalizing the details on how to be a kubestrong. In the meantime, first up 16 awstronauts + kubestronauts around the world. More info on [kubestrong](https://linkedin.com/company/kubestrong).

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
  "bio": "Founder @K8SUG | Creator @kubestrong = @awstronaut + kubestronaut | Akamai Advocate | AWS Builder | Azure MVP | Google GDE | Alibaba MVP | Multi-Cloud | Community Reach | DevRel | 100K Social Reach",
  "twitter": "yongkanghe",
  "linkedin": "yongkanghe",
  "website": "https://k8sug.ai",
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


## 🙌 Thanks for contributing to the global Kubernetes community!

