# Thirty & Thriving — Happy 30th Birthday, Alifiya!

A bespoke, interactive, and cinematic 30th birthday tribute website crafted with pure **HTML5**, **CSS3**, and **Vanilla JavaScript**. Built specifically as a zero-backend static site ready for instant deployment on **GitHub Pages**.

---

## Project Structure

```text
birthday-alifiya/
│
├── index.html          # Main static page (Grand Entry, Navigation, Video, Reels, Gallery, Messages, Games, Footer)
├── style.css           # Midnight navy, champagne gold & rose-gold editorial styling
├── script.js           # All interactive features, editable data arrays, games, lightbox & audio/video controls
├── README.md           # Deployment & customization guide
│
└── assets/
    ├── images/         # Photographs for the Memory Gallery & Hero backdrop
    ├── videos/         # Main Birthday Surprise video (birthday-surprise.mp4)
    ├── reels/          # Short vertical 9:16 Reels (.mp4)
    ├── music/          # Optional background music track (birthday-melody.mp3)
    └── thumbnails/     # Video poster & Reel cover thumbnails (.jpg)
```

---

## Easy Customization Guide

### 1. Add the Main Birthday Surprise Video
1. Export your birthday video as an MP4 (`H.264` recommended for Safari/Chrome/mobile compatibility).
2. Save it as:
   `assets/videos/birthday-surprise.mp4`
3. Optionally replace `assets/thumbnails/surprise-poster.jpg` with a custom cover frame.
4. Open `script.js`, locate `MEDIA_CONFIG.surpriseVideo`, and set `hasVideoFile: true` (or keep `autoDetect: false` / update `src`).

> **Note:** Until you drop in your `.mp4` file, the player includes a built-in interactive Tribute Motion Reel fallback so there are zero broken frames or console errors.

### 2. Add Your Instagram-Style Reels
1. Place vertical `9:16` MP4 clips inside `assets/reels/` (e.g., `reel-1.mp4`, `reel-2.mp4`, `reel-3.mp4`, `reel-4.mp4`).
2. Add matching cover thumbnails in `assets/thumbnails/`.
3. Open `script.js` and edit the `REELS_DATA` array to update titles, captions, dates, thumbnail paths, and set `videoSrc: './assets/reels/reel-1.mp4'`.

### 3. Add Your Photographs
1. Place your photos inside `assets/images/` (`.jpg`, `.webp`, or `.png`).
2. Open `script.js` and edit the `PHOTOS_DATA` array. Each photo entry lets you customize:
   - `src` (relative path like `'./assets/images/my-photo.jpg'`)
   - `category` (`'The Beautiful Memories'`, `'Crazy Moments'`, `'Adventures Together'`, `'Unforgettable Days'`)
   - `title` and `caption`
   - `size` (`'wide'`, `'tall'`, or `'standard'` for the editorial masonry grid)

### 4. Edit Birthday Messages
1. Open `script.js` and edit the `MESSAGES_DATA` array.
2. You can add as many friend cards as you like, customize the sender name, relationship, message text, and set `handwritten: true` on special notes for calligraphic styling.

### 5. Edit Quiz & "This or That" Questions
1. Open `script.js` and edit:
   - `QUIZ_QUESTIONS` (10 multiple-choice questions for *"How Well Do You Know Alifiya?"*)
   - `THIS_OR_THAT_ROUNDS` (10 fun preference rounds for *"This or That – Alifiya Edition"*)

### 6. Add Background Music
1. Save your chosen instrumental or birthday song as `assets/music/birthday-melody.mp3`.
2. In `script.js`, set `MEDIA_CONFIG.music.hasAudioFile = true`.
3. Even before adding an MP3, clicking the **Music** toggle plays a gentle built-in Web Audio chime melody!

---

## Deploying to GitHub Pages

You can host this website completely free on GitHub Pages in just a few minutes:

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click the **+** icon in the top-right corner and select **New repository**.
3. Name your repository `birthday-alifiya` (or any name you prefer).
4. Keep the repository **Public** (required for free GitHub Pages hosting) and click **Create repository**.

### Step 2: Upload the Project Files
You can upload directly via the browser or via Git:

**Option A — Browser Upload (Easiest):**
1. Open your newly created repository on GitHub.
2. Click **uploading an existing file** (or **Add file → Upload files**).
3. Drag and drop `index.html`, `style.css`, `script.js`, `README.md`, and the entire `assets/` folder into the upload area.
4. Wait for all files to finish uploading, add a commit message like `"Add Alifiya 30th birthday website"`, and click **Commit changes**.

**Option B — Git CLI:**
```bash
git init
git add index.html style.css script.js README.md assets
git commit -m "Add Alifiya 30th birthday website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/birthday-alifiya.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. In your GitHub repository, click **Settings** (top navigation tab).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment → Source**, select **Deploy from a branch**.
4. Under **Branch**, choose **`main`** and select **`/ (root)`** as the folder, then click **Save**.

### Step 4: Visit the Live Website
1. Wait 1–2 minutes for GitHub Pages to publish your site.
2. Refresh the **Settings → Pages** screen; a banner will display your live URL:
   ```text
   https://YOUR_USERNAME.github.io/birthday-alifiya/
   ```
3. All paths in this project are relative (`./style.css`, `./script.js`, `./assets/...`), so every image, video, reel, and game works seamlessly under the `/birthday-alifiya/` subpath!
