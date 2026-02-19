# Product Catalog

A simple web app to manage products. Add, edit, delete, and view products with images.

**Live Site:** https://product-catalog-rho-umber.vercel.app/

---

## What You Need

Before starting, install these on your computer:

- **Node.js** (version 18 or newer) → [Download here](https://nodejs.org/)
- **Git** → [Download here](https://git-scm.com/)

Check if they're installed:
```bash
node --version
npm --version
```

---

## Setup Instructions

### Step 1: Get the Code

```bash
git clone https://github.com/KaylainAM/Product-catalog.git
cd Product-catalog
```

### Step 2: Install Everything

```bash
npm install
```

Wait 30-60 seconds. You'll see "added packages" when it's done.

### Step 3: Start the Backend

Open your terminal and run:

```bash
npm run server
```

You should see:
```
Resources
http://localhost:3000/products
```

✅ **Success!** Keep this terminal open.

Test it works: Open http://localhost:3000/products in your browser.
You should see product data.

### Step 4: Start the Frontend

Open a **NEW** terminal (keep the first one running) and run:

```bash
npm run dev
```

You should see:
```
Local: http://localhost:5173/
```

✅ **Success!** Keep this terminal open too.

### Step 5: Open the App

Go to **http://localhost:5173** in your browser.

You should see the product catalog! 🎉

---

## Quick Reference

| What | Command | Port |
|------|---------|------|
| Install | `npm install` | - |
| Backend | `npm run server` | 3000 |
| Frontend | `npm run dev` | 5173 |

**Remember:** You need TWO terminals running at the same time!

```
Terminal 1: npm run server  (backend - don't close!)
Terminal 2: npm run dev     (frontend - don't close!)
Browser:    http://localhost:5173
```

---

## Common Problems

### "Port already in use"

**Mac/Linux:**
```bash
lsof -ti:3000 | xargs kill -9
```

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID [number] /F
```

Then try starting the server again.

### "Products not showing"

1. Make sure backend is running (Terminal 1)
2. Make sure frontend is running (Terminal 2)
3. Check http://localhost:3000/products shows data
4. Restart both servers

### "Images not showing"

```bash
curl https://fakestoreapi.com/products > Backend/db.json
npm run server
```

---

## How to Use the App

**Add a Product:**
1. Click "+ Add Product" button
2. Fill in the form
3. Paste an image URL (try: `https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg`)
4. Click "Create Product"

**Edit a Product:**
1. Click "Edit" button on any product
2. Change what you want
3. Click "Update Product"

**Delete a Product:**
1. Click "Delete" button
2. Confirm deletion

---

## Project Files

```
Product-catalog/
├── Backend/
│   └── db.json          ← Product data stored here
├── src/
│   ├── components/      ← React components
│   ├── App.jsx          ← Main app
│   └── main.jsx         ← Entry point
└── package.json         ← Dependencies
```

---

## Deployment

### Deploy Backend (Render)

1. Go to https://render.com
2. Click "New" → "Web Service"
3. Connect your GitHub repo
4. Settings:
   - Build: `npm install`
   - Start: `json-server --watch Backend/db.json --host 0.0.0.0 --port $PORT`
5. Click "Create Web Service"
6. Copy your URL  ('https://product-catalog-yutc.onrender.com')

### Deploy Frontend (Vercel)

1. Go to https://vercel.com
2. Click "Import Project"
3. Select your GitHub repo
4. Settings:
   - Framework: Vite
   - Build: `npm run build`
   - Output: `dist`
5. Add Environment Variable:
   - Name: `VITE_API_URL`
   - Value: `https://product-catalog-yutc.onrender.com`
6. Click "Deploy"

Done! Your app is live 🚀

---

## Tech Used

- React (frontend)
- json-server (backend)
- Vite (build tool)

---

## Author

Made by **Kaylain AM**

GitHub: https://github.com/KaylainAM/Product-catalog

---

## License

MIT License - feel free to use this project

---

**Need Help?**

1. Check the "Common Problems" section above
2. Open an issue on GitHub
3. Make sure both servers are running!

---

