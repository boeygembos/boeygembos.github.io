# TinaCMS Setup Guide

## 🎯 Quick Setup

You've created a project on tina.io! Now let's connect it to your app.

### Step 1: Get Your Credentials

1. Go to your Tina.io project dashboard
2. Navigate to **Settings** → **API Tokens**
3. Copy these values:
   - **Client ID** (starts with a long string)
   - **Read-only Token** (starts with a long string)

### Step 2: Configure Your App

1. Open the `.env` file in your project root
2. Replace the placeholder values:

```env
TINA_CLIENT_ID=paste_your_client_id_here
TINA_TOKEN=paste_your_token_here
```

3. Save the file

### Step 3: Start with TinaCMS

Stop your current dev server and restart with TinaCMS:

```bash
# Stop the current server (Ctrl+C)
# Then run:
npm run dev
```

This will:
- Start the Tina backend server
- Start your Vite dev server
- Enable the visual editor

### Step 4: Access the Admin Panel

1. Open your browser to: **http://localhost:5173/admin**
2. You'll see the TinaCMS admin interface
3. Click on any collection (Fotogalerij, Bosklas, Contact) to edit

## 📝 Editing Content

### Via TinaCMS Admin (Visual):
- Navigate to `/admin`
- Select a collection
- Edit content visually
- Changes are saved to JSON files automatically

### Via JSON Files (Direct):
- Edit files in `content/` folder
- Changes appear immediately in dev mode
- See [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for details

## 🚀 Building for Production

When ready to deploy:

```bash
npm run build
```

This will build your React app and output to `dist/` folder.

**Note:** The standard build command uses only Vite and does not include the TinaCMS admin panel in production. This is perfect for static site deployment where content is managed locally via JSON files. The TinaCMS admin is only available in development mode (`npm run dev`).

## 🔧 Troubleshooting

### "401 Unauthorized" Error
- Check that `TINA_CLIENT_ID` and `TINA_TOKEN` are correct
- Ensure there are no extra spaces in the `.env` file
- Restart the dev server after changing `.env`

### Admin Page Not Loading
- Make sure you're running `npm run dev` (not `npm run dev:vite`)
- Check that port 4001 is not in use

### Content Not Updating
- Refresh the page
- Check the browser console for errors
- Verify JSON files are valid (no syntax errors)

## 📚 Next Steps

- Add more collections in `tina/config.js`
- Customize the admin interface
- Set up content previews
- Deploy to production

## 🔗 Resources

- [TinaCMS Documentation](https://tina.io/docs/)
- [Content Guide](./CONTENT_GUIDE.md)
- [TinaCMS Community](https://discord.com/invite/zumN63Axj)

---

**Note:** The `.env` file is already added to `.gitignore` to keep your credentials secure. Never commit this file to version control!
