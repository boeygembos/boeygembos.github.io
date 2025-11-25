# 🚀 Quick Start Guide - Boeygem Bos

## Get Up and Running in 2 Minutes!

### Step 1: Start the Development Server

Open your terminal in the `boeygembos-app` folder and run:

```bash
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Step 2: Open in Browser

Click the link or go to: **http://localhost:5173/**

You should see the beautiful Boeygem Bos website! 🌲

---

## ✏️ Making Changes

### Edit Text Content

**Change the Intro Page:**
1. Open `content/pages/intro.md`
2. Edit the text
3. Save the file
4. Refresh your browser - changes appear instantly!

**Update Bosklas Info:**
1. Open `content/bosklas.json`
2. Change the `description` or `features`
3. Save and refresh

### Add Photos to Gallery

1. Open `content/gallery.json`
2. Add a new photo object:
```json
{
  "src": "https://your-image-url.com/photo.jpg",
  "alt": "Description of photo",
  "caption": "Photo caption"
}
```
3. Save and refresh!

### Update Contact Rules

1. Open `content/contact.json`
2. Add items to `allowed` or `notAllowed` arrays
3. Save and see changes

---

## 🎨 Customizing the Design

### Change Colors

Open `src/theme.css` and modify the color variables:

```css
--primary: oklch(0.48 0.12 150);  /* Forest green */
--secondary: oklch(0.55 0.09 60);  /* Earth brown */
```

### Change Fonts

In `src/theme.css`, update:

```css
--font-sans: 'Poppins', sans-serif;
--font-serif: 'Merriweather', serif;
```

---

## 📸 Adding Your Own Images

### Option 1: Use External URLs
Just put the full URL in your content files.

### Option 2: Use Local Images
1. Save your image to `public/images/`
2. Reference it as `/images/your-photo.jpg`

Example:
```json
{
  "src": "/images/forest-spring.jpg",
  "alt": "Spring in the forest"
}
```

---

## 🌐 Deploying Your Website

### Option A: Vercel (Easiest - Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"
6. Done! Your site is live!

### Option B: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repo
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy"

---

## 🆘 Troubleshooting

### Port Already in Use

If you see `Port 5173 is already in use`:
```bash
# Kill the process and restart
npm run dev -- --port 3000
```

### Changes Not Showing

1. Hard refresh: `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Restart the dev server

### Images Not Loading

- Check the image URL is correct
- For local images, make sure they're in `public/images/`
- Image paths should start with `/images/` not `./images/`

---

## 📚 Common Tasks

### Add a New Plant/Animal

1. Create a new file: `content/plants/new-plant.md`
2. Copy this template:

```markdown
---
name: "Plant Name"
scientificName: "Scientific Name"
category: "Boom"
image: "/images/plant.jpg"
season: "Lente"
---

Description of the plant goes here.
```

### Change Hero Background Image

In `src/components/Hero.jsx`, find:
```javascript
url('https://images.unsplash.com/photo-xxx')
```

Replace with your image URL.

### Update Footer Links

Edit `src/components/Footer.jsx` and modify the links.

---

## 💡 Tips for Non-Technical Users

1. **Always save files before checking the browser**
2. **JSON files**: Be careful with commas and quotes
3. **Markdown files**: Use `#` for headings, `**text**` for bold
4. **Make backups**: Copy files before editing
5. **Test locally first**: Always preview changes before deploying

---

## 🎯 Next Steps

1. ✅ Get the site running (you're here!)
2. ✅ Replace placeholder text with real content
3. ✅ Add your own photos
4. ✅ Customize colors and fonts
5. ✅ Deploy to the web
6. 🔮 Set up TinaCMS for visual editing (optional, later)

---

**Need Help?** Check the main README.md or refer to the documentation.

**Happy Building! 🌲🌿**
