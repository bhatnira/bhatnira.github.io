# Content Management Guide

This guide explains how to dynamically add blogs, projects, and materials to your website.

## 📝 How to Add Blog Posts

1. Open `/src/app.js`
2. Find the `BLOG_POSTS` array (near the top of the file, around line 20)
3. Copy this template and add it to the **top** of the array:

```javascript
{
  title: 'Your Blog Post Title',
  date: 'January 21, 2026',
  summary: 'A brief 1-2 sentence description of your blog post that will appear in the preview...',
  link: 'https://medium.com/@yourname/post-url',  // Link to full post (optional)
  image: 'assets/images/blog-post.jpg',  // Featured image (optional)
  tags: ['AI', 'Drug Discovery', 'QSAR']  // Tags for categorization (optional)
},
```

**Example:**
```javascript
const BLOG_POSTS = [
  {
    title: 'Understanding QSAR Modeling in Drug Discovery',
    date: 'January 21, 2026',
    summary: 'An introduction to quantitative structure-activity relationships and how machine learning enhances predictive modeling in pharmaceutical sciences.',
    link: 'https://medium.com/@nirajanbhattarai/qsar-modeling',
    tags: ['QSAR', 'Machine Learning', 'Drug Discovery']
  },
  // Add more blog posts below...
];
```

## 🔬 How to Add Projects

1. Open `/src/app.js`
2. Find the `PROJECTS` array (below BLOG_POSTS, around line 40)
3. Copy this template and add it to the **top** of the array:

```javascript
{
  title: 'Project Name',
  description: 'Detailed description of the project, methods used, and outcomes. Include information about the problem you solved, techniques applied, and results achieved.',
  technologies: ['Python', 'TensorFlow', 'RDKit', 'PyTorch'],  // Tools/technologies used
  status: 'Completed',  // 'Completed', 'In Progress', 'Published'
  date: 'January 2026',
  image: 'assets/images/project-image.jpg',  // Project image (optional)
  github: 'https://github.com/yourusername/project',  // GitHub link (optional)
  paper: 'https://doi.org/10.xxxx/xxxxx',  // Publication link (optional)
  demo: 'https://yourproject.com'  // Live demo link (optional)
},
```

**Example:**
```javascript
const PROJECTS = [
  {
    title: 'Deep Learning QSAR Model for Kinase Inhibitors',
    description: 'Developed a deep learning model using graph neural networks to predict IC50 values for kinase inhibitors. The model achieved R² of 0.85 on test set and identified novel scaffolds with improved selectivity.',
    technologies: ['Python', 'PyTorch', 'RDKit', 'DeepChem'],
    status: 'Published',
    date: 'December 2025',
    github: 'https://github.com/yourname/kinase-qsar',
    paper: 'https://doi.org/10.xxxx/xxxxx'
  },
  // Add more projects below...
];
```

## 📚 How to Add Materials

1. Open `/src/app.js`
2. Find the `MATERIALS` array (below PROJECTS, around line 60)
3. Copy this template and add it to the **top** of the array:

```javascript
{
  title: 'Material Title',
  type: 'Slides',  // 'Slides', 'Dataset', 'Tutorial', 'Code', 'Documentation', 'Notebook'
  description: 'Brief description of what this material covers and who it\'s useful for...',
  date: 'January 2026',
  link: 'https://drive.google.com/file/d/xxxxx/view',  // Download/view link
  size: '5.2 MB',  // File size (optional)
  format: 'PDF',  // File format (optional)
  tags: ['QSAR', 'Tutorial', 'Python']  // Tags (optional)
},
```

**Example:**
```javascript
const MATERIALS = [
  {
    title: 'Introduction to QSAR Modeling - Workshop Slides',
    type: 'Slides',
    description: 'Comprehensive slides from a 3-hour workshop on QSAR modeling, covering molecular descriptors, feature selection, and model validation.',
    date: 'January 2026',
    link: 'https://drive.google.com/file/d/1ABC123/view',
    size: '8.5 MB',
    format: 'PDF',
    tags: ['QSAR', 'Workshop', 'Tutorial']
  },
  {
    title: 'Kinase Inhibitor Dataset',
    type: 'Dataset',
    description: 'Curated dataset of 5000+ kinase inhibitors with IC50 values, molecular descriptors, and 2D/3D structures. Includes data preprocessing scripts.',
    date: 'December 2025',
    link: 'https://github.com/yourname/kinase-dataset',
    size: '125 MB',
    format: 'CSV + SDF',
    tags: ['Dataset', 'Kinase', 'Drug Discovery']
  },
  // Add more materials below...
];
```

## 🎨 Adding Images

To add images for your blog posts, projects, or materials:

1. Place image files in `/assets/images/` or `/public/assets/images/`
2. Reference them in your data like: `'assets/images/your-image.jpg'`
3. Supported formats: JPG, PNG, WebP, GIF

## 🔗 Navigation

Your website now has these pages:
- **Home** (`#home`) - Main landing page
- **Research** (`#research`) - Research interests and areas
- **About** (`#impact`) - Your background and profile
- **Blog** (`#news`) - Blog posts (uses BLOG_POSTS data)
- **Projects** (`#projects`) - Research projects (uses PROJECTS data) ✨ NEW
- **Materials** (`#materials`) - Teaching materials and resources (uses MATERIALS data) ✨ NEW
- **Publications** (`#publications`) - Academic publications
- **Contact** (`#contact`) - Contact form

## 📋 Quick Checklist

When adding new content:
- [ ] Edit `/src/app.js`
- [ ] Add your data to the appropriate array (BLOG_POSTS, PROJECTS, or MATERIALS)
- [ ] Place images in `/assets/images/` if needed
- [ ] Save the file
- [ ] Commit changes: `git add src/app.js && git commit -m "Add new content"`
- [ ] Push to GitHub: `git push origin main`
- [ ] GitHub Actions will automatically deploy your updated website!

## 🚀 Deployment

Your website automatically deploys when you push to GitHub:
1. Make your changes locally
2. Commit: `git commit -am "Your message"`
3. Push: `git push origin main`
4. Wait 1-2 minutes for GitHub Actions to deploy
5. Visit: https://bhatnira.github.io/Nirajan-Bhattarai-Personal-Website/

## 💡 Tips

1. **Keep summaries short**: 1-2 sentences for blog posts, 2-3 for projects
2. **Use tags wisely**: Helps organize and categorize content
3. **Add new content at the top**: Most recent items should be first in the array
4. **Test locally first**: Run `python3 -m http.server 8000` and visit `http://localhost:8000`
5. **Optimize images**: Keep images under 500KB for faster loading

## 🆘 Need Help?

If something isn't working:
1. Check browser console for errors (F12 → Console tab)
2. Verify your JSON syntax (commas, quotes, brackets)
3. Make sure image paths are correct
4. Test locally before pushing to GitHub

---

**Questions?** Contact: nbhatta1@uthsc.edu
