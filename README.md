# Daily English — ONE Expression per DAY
## Project Structure

```
daily-english/
│
├── index.html                  ← Main entry point (Terms + Show selector)
│
├── css/
│   └── style.css               ← All shared styles (one file)
│
├── js/
│   └── app.js                  ← All shared JavaScript (bookmarks, toast, terms)
│
├── images/
│   ├── friends.jpg             ← Friends show poster (✅ uploaded)
│   ├── season1.jpg             ← Season 1 image (📤 upload later)
│   ├── season2.jpg             ← Season 2 image (📤 upload later)
│   ├── ...                     ← season3.jpg through season10.jpg
│   ├── s1e1.jpg                ← Episode images (📤 upload later, optional)
│   └── ...
│
└── friends/                    ← All Friends content (self-contained folder)
    ├── index.html              ← Friends — Season Selector (10 seasons)
    ├── friends-data.js         ← All show data: seasons, episodes, expressions, YouTube links
    │
    ├── images/                 ← (optional) Season & episode images
    │   ├── season1.jpg
    │   └── s1e1.jpg
    │
    ├── seasons/                ← 10 season pages
    │   ├── season1.html
    │   ├── season2.html
    │   ├── ...
    │   └── season10.html
    │
    └── episodes/               ← 240 episode pages (10 seasons × 24 episodes)
        ├── s1e1.html
        ├── s1e2.html
        ├── ...
        └── s10e24.html
```

## How to Update Content

### Adding a YouTube Link
Open `friends/friends-data.js` and find the expression by its key (e.g., `S1E1`), then update the `youtubeUrl`:
```js
youtubeUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
```

### Adding Season Images
1. Name your image file: `season1.jpg`, `season2.jpg`, etc.
2. Place it in `friends/images/`
3. The pages will automatically pick it up.

### Adding Episode Images
1. Name your image file: `s1e1.jpg`, `s2e3.jpg`, etc. (season number + episode number)
2. Place it in `friends/images/`
3. The episode cards will automatically use the image.

### Adding More Expressions
In `friends/friends-data.js`, find the episode key (e.g., `S1E5`) and add to its `expressions` array:
```js
{
  id: 'S1E5X3',          // Unique ID: S{season}E{episode}X{number}
  phrase: 'Your phrase',
  partOfSpeech: 'idiom', // idiom / expression / phrasal verb / noun / etc.
  meaning: 'What it means.',
  example: '"Example sentence using the phrase."',
  context: 'Where/how it appears in the show.',
  youtubeUrl: 'https://www.youtube.com/watch?v=VIDEO_ID',
},
```

### Adding a New Season 2–10 Episode
Same as above — find `S2E1`, `S3E5`, etc. in `friends-data.js`. Most are pre-generated as placeholders.

## Bookmarks
- All bookmarks are saved in the user's browser `localStorage`
- Bookmark key: `de_bookmarks`
- Each bookmark stores: type, id, label, url, timestamp
- Users can remove bookmarks from the Bookmark Bar on any page

## Terms Agreement
- Stored in `localStorage` key: `de_agreed`
- Once agreed, users skip the Terms screen on future visits
- Each page (except index.html) calls `checkTermsGuard()` to redirect unagreed users

## Deployment
Upload the entire `daily-english/` folder to your web server.
No server-side code required — this is a pure static HTML/CSS/JS site.
