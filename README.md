# 🚀 Hero Apps

একটি React ভিত্তিক App Store প্রজেক্ট যেখানে ব্যবহারকারী অ্যাপ দেখতে, সার্চ করতে, ইনস্টল ও আনইনস্টল করতে পারে।

---

## 🔧 মূল ফিচার
- **Header:** লোগো, ন্যাভিগেশন (Home, Apps, Installation), GitHub লিংকসহ Contribution বাটন  
- **Footer:** কাস্টম ডিজাইন  
- **Data:** 12–20 অ্যাপের JSON ডেটা (image, title, companyName, size, reviews, rating, downloads ইত্যাদি)

---

## 📦 JSON Demo (উদাহরণ)
```json
[
  {
    "id": 1,
    "image": "",
    "title": "YouTube",
    "companyName": "Google LLC",
    "description": "Watch, stream, and share videos worldwide.",
    "size": 45,
    "reviews": 1500000,
    "ratingAvg": 4.5,
    "downloads": "10B+",
    "ratings": [
      { "name": "1 star", "count": 50000 },
      { "name": "2 star", "count": 30000 },
      { "name": "3 star", "count": 70000 },
      { "name": "4 star", "count": 120000 },
      { "name": "5 star", "count": 800000 }
    ]
  }
]

```

## 🏠 হোম পেজ
- ব্যানারে টাইটেল, টেক্সট, ও দুটি বাটন (App Store / Play Store)  
- তিনটি স্টেট কার্ড  
- টপ ৮টি অ্যাপ (৪ কলাম) ও “Show All” বাটন  

---

## 📱 All Apps পেজ
- সার্চ বক্সসহ সব অ্যাপ দেখা যায়  
- লাইভ সার্চ (case-insensitive)  
- “No App Found” মেসেজ দেখায় যদি কিছু না মেলে  

---

## 📊 অ্যাপ ডিটেইলস পেজ
- অ্যাপ ইমেজ, টাইটেল, রেটিং, রিভিউ, ডাউনলোড কাউন্ট  
- “Install” বাটন → ক্লিক করলে “Installed” হয়ে যায়  
- ইনস্টল হলে Toast মেসেজ দেখায়  
- Recharts দিয়ে রিভিউ চার্ট  

---

## 💾 My Installation
- লোকালস্টোরেজে ইনস্টল হওয়া অ্যাপ সেভ থাকে  
- “Uninstall” করলে অ্যাপ মুছে যায় ও Toast দেখায়  
- ডাউনলোড অনুযায়ী Sort (High-Low / Low-High)  

---

## ⚙️ অন্যান্য
- কাস্টম এরর পেজ  
- লোডিং অ্যানিমেশন (নেভিগেশন ও সার্চের সময়)  
- রিলোডেও কোনো রাউট এরর হয় না  

---

## 🧰 ব্যবহার করা টেকনোলজি
React, Vite, Tailwind CSS, React Router, Recharts, React Toastify etc.

---

## 👨‍💻 ডেভেলপার
**Sharif**  
CST Student  
[GitHub Profile](https://github.com/mdsharifkhandakar) ,
<br>
[Netlify Live Preview](https://sharif-hero-apps.netlify.app/)



