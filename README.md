# Product Catalog - Full-Stack Application

A full-stack product catalog management system built with React and json-server.

## Features

- ✅ View all products in a responsive table
- ✅ Add new products
- ✅ Edit existing products
- ✅ Delete products with confirmation
- ✅ Real-time UI sync with backend
- ✅ Responsive design

## Tech Stack

- **Frontend**: React 18, Vite, Axios
- **Backend**: json-server
- **Styling**: Custom CSS

## Installation

1. Clone the repository:

git clone https://github.com/KaylainAM/Product-catalog.git
cd product-catalog


2. Install dependencies:

npm install


## Running the Application

### Step 1: Start the Backend (json-server)

In one terminal:
```bash
npm run server
```

This will start json-server on http://localhost:3000

### Step 2: Start the Frontend

In another terminal:
```bash
npm run dev
```

This will start the React app on http://localhost:5173

## API Endpoints

- `GET /products` - Get all products
- `GET /products/:id` - Get single product
- `POST /products` - Create new product
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product

## Deployment

### Backend Deployment (Render/Railway)
1. Push db.json to GitHub
2. Deploy using json-server on Render or Railway
3. Update VITE_API_URL in .env

### Frontend Deployment (Vercel/Netlify)
```bash
npm run build
```

Deploy the `dist` folder to Vercel or Netlify.

## Project Structure