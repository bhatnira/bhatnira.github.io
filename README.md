# Roy Laboratory Website

Welcome! This is the official website for the Roy Laboratory at UTHSC College of Pharmacy, led by Dr. Sudeshna Roy, Ph.D. Our team is dedicated to developing innovative medicines to fight drug-resistant infections, supported by $4.9M in NIH funding.

This guide will help you navigate, update, and maintain the website, whether you're a lab member adding news or a developer working on the code.

---

## Table of Contents

1. [Quick Start](#quick-start) - Get the website running
2. [For Non-Technical Users](#for-non-technical-users) - Simple update guide
3. [For Developers](#for-developers) - Technical documentation  
4. [Project Structure](#project-structure) - Where everything lives
5. [Common Tasks](#common-tasks) - How to update content
6. [Publishing](#publishing) - Deploy to the web
7. [Troubleshooting](#troubleshooting) - Fix common issues

---

## Quick Start

Want to see the website on your computer? Here are three simple ways to get started:

### Method 1: VS Code Live Server (Recommended for Beginners)

This is the easiest way to preview the site:

1. Open this project folder in Visual Studio Code
2. Install the "Live Server" extension (it's free!)
3. Right-click on `public/index.html` and select "Open with Live Server"
4. Your browser will automatically open with the website running locally

### Method 2: Using Python (For Mac/Linux Users)

If you have Python installed, open your terminal and run:

```bash
cd public
python3 -m http.server 8000
```

Then open your browser and go to: http://localhost:8000

### Method 3: Using Node.js

If you prefer Node.js, run this in your terminal:

```bash
npx http-server public -p 8000
```

Then visit: http://localhost:8000 in your browser

---

## For Lab Members & Content Editors

Don't worry if you're not a programmer! This section is written for you. Updating the website is simpler than you think.

### What You Can Update

You can easily update these parts of the website:

- **News and Announcements** - Share lab news, awards, and media coverage
- **Publications** - Add new research papers as they're published
- **Team Members** - Welcome new members or update existing profiles
- **Photos** - Add images from lab events and activities
- **Dr. Roy's CV** - Keep the resume up to date

### Before You Start

Here's what you'll need:

- A text editor (we recommend [Visual Studio Code](https://code.visualstudio.com/) - it's free and beginner-friendly!)
- About 10-15 minutes of your time
- **Important:** Always make a backup before editing! Just copy the file and add `.backup` to the filename

Don't be intimidated by the code - we'll walk you through exactly what to change.

---

### How to Add News

Let's say the lab just won an award or published a paper. Here's how to share that news:

1. **Open the file**: Navigate to and open `src/app.js` in your text editor
2. **Find the news section**: Press Ctrl+F (Windows) or Cmd+F (Mac) and search for `function newsItems()`
3. **Add your news at the top of the list**: Copy and paste this template:
```javascript
{
  title: 'Your News Title',           // The headline
  date: 'December 14, 2025',          // Publication date
  summary: 'Brief description...',     // 1-2 sentences
  link: 'https://article-url.com',    // Full article link
  image: 'assets/images/photo.jpg'    // Photo filename
},
```
4. **Save your changes**: Press Ctrl+S (Windows) or Cmd+S (Mac)
5. **Preview your work**: Refresh your browser to see the new news item appear!

**Helpful Tips:**

- Always keep the single quotes `' '` around your text
- Don't forget the comma `,` at the end of each item
- If you're adding a video instead of an image, use `video:` instead of `image:`
- Try to keep your summary brief - around 200 characters or less works best

---

### How to Add Publications

Got a new paper published? Congratulations! Here's how to add it to the website:

1. **Open the file**: Open `src/app.js` in your text editor
2. **Locate the publications**: Use the search function (Ctrl+F or Cmd+F) and look for `<div class="pub-item">`
3. **Use this template for your new publication**:
```html
<div class="pub-item">
  <div>
    <h3><strong>1.</strong> Your Paper Title</h3>
    <p class="meta">Authors - Journal Name (2025)</p>
  </div>
  <div class="links">
    <a href="https://doi.org/..." target="_blank">DOI</a>
  </div>
</div>
```
4. **Add it to the top**: Paste your new publication at the very top of the publications list
5. **Fill in the details**: Replace the placeholder text with your paper's title, authors, journal name, and DOI link
6. **Renumber the list**: Update all the other publication numbers (each one goes up by 1)
7. **Save and preview**: Save the file and refresh your browser to see your new publication listed!

---

### How to Add Team Members

Welcoming someone new to the lab? Here's how to add them to the website:

1. **Open the team file**: Open `src/app.js` in your text editor
2. **Find the team section**: Search for `function teamData()`
3. **Pick the right category** for your new team member:
   - `postdocs:` for Postdoctoral researchers
   - `grads:` for Graduate students
   - `undergrads:` for Undergraduate students
   - `alumni:` for Former lab members
4. **Add their information** using this format:
```javascript
{
  name: 'First Last',                    // Full name
  role: 'PhD Student',                   // Their position
  photo: '/assets/images/name.jpg'       // Photo file
},
```
5. **Remember the comma**: Always end with a comma `,` after the closing brace
6. **Save your work**: Press Ctrl+S or Cmd+S, then refresh to see the new team member!

---

### How to Add Photos

Photos make the website come alive! Here's how to add them properly:

1. **Place your photo**: Put the image file in the `public/assets/images/` folder
2. **Name it clearly**: Use lowercase letters, no spaces, and hyphens between words (like `lab-party-december-2025.jpg`)
3. **Optimize the size**: Keep photos under 500KB - use [tinyjpg.com](https://tinyjpg.com) to compress them if needed
4. **Reference it in your code**: When you need to use the photo, the path is `assets/images/your-photo-name.jpg`

**Photo Best Practices:**

- JPG format works best for photos
- Aim for under 500KB to keep the site fast
- Use descriptive names like `team-meeting-jan-2025.jpg`
- Avoid spaces in filenames - they cause problems!
- Large files slow down the website, so compress before uploading

---

### Update Dr. Roy's CV

Need to update Dr. Roy's CV? There are two ways to do this:

**The Simple Way (No code changes needed):**

1. Navigate to the folder: `public/assets/Roy-CV-updated-Oct2025/`
2. Replace the existing PDF with the new CV file
3. Important: Keep the exact same filename - `Sudeshna Roy CV_Oct 2025.pdf`

**If you want to use a different filename:**

1. Open `src/app.js` in your text editor
2. Search for the current filename: `Sudeshna Roy CV_Oct 2025.pdf`
3. Replace it with your new filename everywhere it appears
4. Save the file and you're done!

---

## For Developers

This section is for developers who want to understand or modify the website's architecture.

### Technology Stack

We've kept things simple and maintainable:

- **Frontend**: Vanilla JavaScript (ES6+) - no frameworks needed
- **Styling**: CSS with CSS custom properties (variables)
- **Routing**: Hash-based client-side routing
- **Slideshow**: Swiper.js v9 (loaded from CDN)
- **Hosting**: Static site, compatible with GitHub Pages and Netlify
- **Build Process**: None required! Just edit and refresh

### Key Features

- **Mobile-first responsive design** - looks great on all devices
- **Minimal dependencies** - only Swiper.js for the slideshow
- **Simple routing** - hash-based navigation without page reloads
- **Modular architecture** - we're gradually breaking the monolith into smaller, manageable pieces
- **Fast performance** - optimized for quick load times

---

## Project Structure

```
Roy-Laboratory-Website/
├── public/                          ← The actual website
│   ├── index.html                   ← Main structure & navigation
│   └── assets/
│       ├── images/                  ← All photos (add new ones here)
│       └── Roy-CV-*.pdf             ← Dr. Roy's CV
│
├── src/                             ← Website code
│   ├── app.js                       ← Main logic (pages, data, routing)
│   ├── styles.css                   ← Styling (colors, layout, fonts)
│   │
│   ├── js/ (modular - in progress)
│   │   ├── main.js                  ← New modular entry point
│   │   ├── router.js                ← Routing logic
│   │   ├── utils.js                 ← Helper functions
│   │   ├── pages/                   ← Individual page modules
│   │   └── data/                    ← Data modules (news, pubs, team)
│   │
│   └── css/ (modular - in progress)
│       ├── base.css                 ← Variables, reset
│       ├── components.css           ← Buttons, cards
│       ├── header.css               ← Navigation
│       └── pages/                   ← Page-specific styles
│
├── Heat-Shots/                      ← Backup photos (not on website)
├── Pictures/                        ← More backup photos
│
├── README.md                        ← This file (you are here!)
├── .gitignore                       ← Files to ignore in Git
└── refactor.sh                      ← Helper script for refactoring
```

### Important Files

| File | Purpose |
|------|---------|
| `public/index.html` | Page structure, navigation menu |
| `src/app.js` | All pages, data, routing (1037 lines) |
| `src/styles.css` | All styling (456 lines) |
| `public/assets/images/` | Photo storage |

---

## Common Tasks

### Adding a New Page

Want to add a new section to the website? Here's how:

1. **Create a render function** in `src/app.js`:
```javascript
function renderYourPage() {
  mount(`
    <section class="section">
      <div class="container">
        <h2>Your Page Title</h2>
        <p>Your content here</p>
      </div>
    </section>
  `);
}
```

2. **Add a route** in the `router()` function so visitors can navigate to it:
```javascript
case 'your-page':
  renderYourPage();
  break;
```

3. **Add a menu link** in `public/index.html` so people can find your new page:
```html
<a href="#your-page">Your Page</a>
```

---

### Updating Styles

Want to change colors or fonts? All the visual styling lives in `src/styles.css`:

```css
/* CSS Variables - Change these for site-wide color changes */
:root {
  --primary: #0ea5e9;    /* Main blue color */
  --text: #0f172a;       /* Text color */
  --muted: #475569;      /* Lighter text */
  --border: rgba(2,6,23,0.08);  /* Border color */
}
```

**Changing colors?** Just edit those variables at the top  
**Want different fonts?** Look for the `font-family` property in the `body` selector  
**Adjusting layouts?** Find the component you want to change (we've added helpful comments throughout the file)

---

## Publishing to the Web

Ready to make your changes live? Here are two free hosting options:

### Option 1: GitHub Pages (Recommended)

GitHub Pages is completely free and automatically deploys your site:

1. Visit your repository: https://github.com/bhatnira/Roy-Laboratory-Website
2. Click on **Settings** (top menu), then **Pages** (left sidebar)
3. Under "Source", select the `main` branch
4. Under "Folder", choose `/public`
5. Click **Save** and wait 2-3 minutes for deployment
6. Your site will be live at: `https://bhatnira.github.io/Roy-Laboratory-Website/`

The best part? Every time you push changes to GitHub, the site automatically updates within a few minutes!

---

### Option 2: Netlify (Great Alternative)

Netlify is another excellent free option with some nice extra features:

1. Visit [netlify.com](https://netlify.com) and create a free account
2. Click the "New site from Git" button
3. Connect your GitHub account when prompted
4. Select the Roy Laboratory repository
5. Set the "Publish directory" to: `public`
6. Click "Deploy site" and wait a minute or two
7. Netlify will give you a free URL (which you can customize if you like!)

Like GitHub Pages, Netlify automatically redeploys your site whenever you push changes to GitHub.

---

### How to Publish Your Changes

Once you've made updates on your computer, here's how to make them live on the website:

**Using GitHub Desktop (Easier for Beginners):**

1. Open the GitHub Desktop app
2. You'll see all your changes listed on the left
3. Write a brief commit message describing what you changed (like "Added December news" or "Updated publications")
4. Click the "Commit to main" button
5. Click "Push origin" at the top to upload your changes
6. Wait a couple minutes and your changes will be live!

**Using the Command Line (For Terminal Fans):**

```bash
git add -A                                    # Stage all your changes
git commit -m "Brief description of changes"  # Save them with a message
git push origin main                          # Upload to GitHub
```

Either way, your changes will appear on the live website in just a few minutes!

---

## Troubleshooting

Don't panic! Here are solutions to common problems:

### "Help! I Think I Broke Something!"

Take a deep breath - this is fixable. Here's what to do:

**If you made a backup:**
1. Find the `.backup` file you created
2. Copy everything from it
3. Paste it back into the original file
4. Save and you're back to normal!

**If you didn't make a backup but use Git:**
```bash
git checkout -- filename    # This undoes changes to a specific file
git reset --hard           # This undoes EVERYTHING (be careful with this one!)
```

---

### "I Made Changes But They're Not Showing Up!"

This happens to everyone. Try these steps in order:

1. **Did you save?** - Press Ctrl+S (Windows) or Cmd+S (Mac) to make sure the file is saved
2. **Refresh your browser** - Press F5 or click the refresh button
3. **Do a hard refresh** - Press Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac) to bypass the cache
4. **Clear your browser cache** - Go to browser settings and clear browsing data
5. **Check the console** - Press F12 to open developer tools, then check the Console tab for any error messages

---

### "The Website Looks Broken!"

Usually it's a small syntax error. Here are the most common mistakes and how to fix them:

**Forgetting a comma:**
```javascript
{
  title: 'News 1'
  date: 'Today'    // ERROR: Missing comma after previous line
}
```
**Correct:**
```javascript
{
  title: 'News 1',    // Comma here!
  date: 'Today'
}
```

**Mismatched quotes:**
```javascript
title: 'My Title"    // ERROR: Started with ' but ended with "
```
**Correct:**
```javascript
title: 'My Title'    // Both single quotes
```

**Missing a bracket:**
```javascript
newsItems() {
  return [
    { title: 'News' }
  // ERROR: Missing closing ]
}
```
**Correct:**
```javascript
newsItems() {
  return [
    { title: 'News' }
  ]    // Closing bracket
}
```

---

### "My Photos Aren't Showing Up!"

Let's troubleshoot your images. Check these things:

- Is the photo actually in the `public/assets/images/` folder?
- Does the filename in your code match the actual file exactly? (Capitalization matters!)
- Is your path correct? It should be `assets/images/filename.jpg` (don't include `/public/`)
- Is the file size reasonable? Keep it under 500KB
- Does the filename have spaces? Replace spaces with hyphens: `my-photo.jpg` not `my photo.jpg`

---

## Pre-Publishing Checklist

Before you push your changes live, run through this quick checklist:

- Have you saved all your files? (Ctrl+S / Cmd+S)
- Did you test the website locally? Does everything look right?
- Are there any red squiggly lines in your code editor? (These indicate errors)
- Did you proofread for typos?
- Are all your images optimized? (Under 500KB each)
- Do all the links work when you click them?
- Have you checked how it looks on a mobile browser?

---

## Quick Reference

### File Locations

| What | Where |
|------|-------|
| Add news | `src/app.js` → `function newsItems()` |
| Add publication | `src/app.js` → find `<div class="pub-item">` |
| Add team member | `src/app.js` → `function teamData()` |
| Add photos | `public/assets/images/` folder |
| Update CV | `public/assets/Roy-CV-updated-Oct2025/` |
| Change colors | `src/styles.css` → `:root` variables |

### Keyboard Shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Save file | Ctrl+S | Cmd+S |
| Find in file | Ctrl+F | Cmd+F |
| Refresh page | F5 | Cmd+R |
| Hard refresh | Ctrl+Shift+R | Cmd+Shift+R |

### Git Commands

```bash
git status                 # See what changed
git add -A                 # Stage all changes
git commit -m "Message"    # Save with description
git push origin main       # Upload to GitHub
```

---

## Need Help?

If you run into issues or have questions about the website, feel free to reach out:

**Roy Laboratory**  
College of Pharmacy  
Department of Pharmaceutical Sciences  
881 Madison Avenue, Pharmacy Building 05_571  
Memphis, TN 38163

Email: roy@uthsc.edu

We're here to help!

---

## License

© 2025 Roy Laboratory, UTHSC. All rights reserved.

---

**Maintained with care by the Roy Laboratory team**

Last updated: December 17, 2025


