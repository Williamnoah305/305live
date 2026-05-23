# IRON WILLZ - Creative Hub

Welcome to **IRON WILLZ**, your personal brand website for sharing music, videos, and art!

## 🚀 Getting Started

### Setup GitHub Pages
1. Go to your repository settings
2. Navigate to **Pages**
3. Select **main** branch as source
4. Your site will be live at `https://williamnoah305.github.io/305live`

## 📝 Adding Your Content

### Edit `content.json`
Open `content.json` and add your content items. Each item should have:
- `title`: Name of your work
- `artist`: Your name or collaborator
- `description`: Brief description
- `date`: When it was created (YYYY-MM-DD)
- `link`: URL to the full content (optional)

### Example:
```json
{
  "music": [
    {
      "title": "My First Song",
      "artist": "IRON WILLZ",
      "description": "An energetic track with deep vibes",
      "date": "2026-05-23",
      "link": "https://spotify.com/track/xxx"
    }
  ]
}
```

## 🎨 Customization

### Update Integration Links
Edit `script.js` and update the `updateIntegrationLinks()` function with your actual social media URLs:

```javascript
const integrations = {
    'spotify': 'https://open.spotify.com/artist/YOUR_ID',
    'youtube': 'https://www.youtube.com/@YOUR_CHANNEL',
    // ... etc
};
```

### Change Colors
Edit `styles.css` to customize the color scheme in the `:root` section:

```css
:root {
    --purple: #9D4EDD;
    --orange: #FF8C42;
    --green: #3ECF8E;
    --blue: #00D9FF;
    /* ... */
}
```

## 📋 Features

✅ Beautiful responsive design
✅ Organized by content type (Music, Videos, Art)
✅ Integration with Spotify, YouTube, SoundCloud, Instagram, Twitter, TikTok
✅ Easy JSON-based content management
✅ Mobile-friendly
✅ Built-in contact form
✅ Smooth animations and transitions
✅ GitHub Pages ready

## 🎯 Your Color Palette

- **Purple**: #9D4EDD
- **Orange**: #FF8C42
- **Green**: #3ECF8E
- **White**: #FFFFFF
- **Black**: #0A0E27
- **Blue**: #00D9FF

## 📱 Mobile Responsive

The website is fully responsive and works great on:
- Desktop
- Tablet
- Mobile

## 🔗 Adding Social Media Links

Edit `script.js` and replace the placeholder URLs with your actual social media profiles.

## 📞 Support

For issues or questions, feel free to reach out!

---

**Made with ❤️ and forged with IRON WILLZ**