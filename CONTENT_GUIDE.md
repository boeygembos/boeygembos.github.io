# Content Management Guide

The Boeygem Bos website uses a simple JSON-based content system. This allows you to edit content without touching the code!

## How to Edit Content

All editable content is stored in the `content/` folder as JSON files. Simply edit these files to update the website content.

### Gallery (`content/gallery.json`)

Edit the photo gallery:

```json
{
  "photos": [
    {
      "src": "https://example.com/photo.jpg",
      "alt": "Description for accessibility",
      "caption": "Photo caption"
    }
  ]
}
```

**To add a photo:** Add a new object to the `photos` array
**To remove a photo:** Delete the object from the array
**To reorder photos:** Rearrange the objects in the array

### Bosklas (`content/bosklas.json`)

Edit the Bosklas section content:

```json
{
  "title": "Bosklas - Leren in de Natuur",
  "description": "Your description text here...",
  "features": [
    {
      "text": "Feature description"
    }
  ],
  "photos": [
    {
      "src": "https://example.com/photo.jpg",
      "caption": "Photo description"
    }
  ]
}
```

**To edit the title or description:** Change the text
**To add a feature:** Add a new object to the `features` array
**To change the photo:** Update the `src` URL in the `photos` array

### Contact & Rules (`content/contact.json`)

Edit contact information and visitor rules:

```json
{
  "address": "Your address here",
  "rules": {
    "allowed": [
      "Activity that is allowed",
      "Another allowed activity"
    ],
    "notAllowed": [
      "Activity that is not allowed",
      "Another prohibited activity"
    ]
  },
  "legalNotice": "⚠️ Legal notice text here"
}
```

**To change the address:** Edit the `address` field
**To add/remove rules:** Add or remove items from the `allowed` and `notAllowed` arrays
**To update the legal notice:** Change the `legalNotice` text

## After Editing

1. **Save the JSON file**
2. **Rebuild the site:** Run `npm run build`
3. **Preview changes:** Run `npm run preview`

## Image Guidelines

- Use HTTPS URLs for images
- Recommended image sizes:
  - Gallery: 400x300px
  - Bosklas: 600x600px
- Use descriptive `alt` text for accessibility
- Keep file sizes under 500KB for faster loading

## Future: TinaCMS Integration

The site is configured to use TinaCMS for visual editing in the future. To enable it:

1. Sign up at [tina.io](https://tina.io)
2. Get your Client ID and Token
3. Add them to `.env`:
   ```
   TINA_CLIENT_ID=your_client_id
   TINA_TOKEN=your_token
   ```
4. Run `npm run dev` to access the admin panel at `/admin`

For now, simply edit the JSON files directly!
