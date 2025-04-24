# 📘 Certified Community Members Submission Guide

Welcome! This project highlights certified Kubernetes community members around the world. If you are certified (CKA, CKAD, CKS, etc.), you're welcome to submit your profile.

---

## 📥 How to Submit Your Profile

Please submit a JSON entry in `users.json` with the following structure, and upload your avatar image to the `avatars/` folder.

### ✅ JSON Format
```json
{
  "name": "Alice Johnson",
  "github": "alicejohnson",
  "certs": ["CKA", "CKAD"],
  "provider": "CNCF",
  "city": "San Francisco",
  "country": "USA",
  "date": "2024-11-01",
  "bio": "DevOps engineer passionate about open source.",
  "twitter": "alicecloud",
  "linkedin": "alicejohnson",
  "website": "https://alice.dev",
  "avatar": "/avatars/alicejohnson.png"
}
```

### 📌 Field Descriptions
| Field      | Required | Description |
|------------|----------|-------------|
| `name`     | ✅       | Full name or display name |
| `github`   | ✅       | GitHub username (used for fallback avatar) |
| `certs`    | ✅       | Array of certification codes (e.g., `CKA`, `CKAD`) |
| `provider` | ✅       | Certification provider (usually `CNCF`) |
| `city`     | ✅       | City of residence |
| `country`  | ✅       | Country name (should match country name on the map) |
| `date`     | ✅       | Date of certification (format: `YYYY-MM-DD`) |
| `bio`      | ❌       | Short description or personal motto |
| `twitter`  | ❌       | Twitter handle (omit @) |
| `linkedin` | ❌       | LinkedIn username (not full URL) |
| `website`  | ❌       | Personal or portfolio website |
| `avatar`   | ❌       | Custom avatar image path (within `/avatars/`) |

---

## 🖼️ Avatar Upload Guidelines
- Upload your avatar image to the `avatars/` folder (e.g., `avatars/yourgithubusername.png`)
- **Max image size: 500 KB**
- **Recommended dimensions: 200x200 px** (square images display best)
- File format: `.png` or `.jpg`

> If no custom avatar is provided, we will use your GitHub profile picture.

---

## 💡 PR Tips
- Place your JSON entry in `users.json` in alphabetical order by `name`
- Ensure valid JSON syntax (use a linter or JSON validator)
- Use meaningful commit messages (e.g., `add: alicejohnson to certified list`)

---

## 🙌 Thanks for contributing to the global Kubernetes community!

