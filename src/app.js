/**
 * Nirajan Bhattarai Personal Website - Main JavaScript File
 * 
 * This file contains all the website logic:
 * - Page rendering functions (renderHome, renderNews/Blog, etc.)
 * - Data storage (blog posts, publications, profile)
 * - Navigation/routing between pages
 * 
 * To update content, search for the section you need:
 * - Blog Posts: Search for "BLOG DATA" below
 * - Projects: Search for "PROJECTS DATA" below
 * - Materials: Search for "MATERIALS DATA" below
 * - Publications: Search for "renderPublications"
 * - About/Profile: Search for "renderImpact"
 */

// ============================================
// DATA STORAGE - Edit these to update your content!
// ============================================

// BLOG DATA - Add your blog posts here
// To add a new blog post, copy the template and add it to the top of the array
const BLOG_POSTS = [
  // Template - Copy and modify this:
  // {
  //   title: 'Your Blog Post Title',
  //   date: 'January 21, 2026',
  //   summary: 'A brief 1-2 sentence description of your blog post...',
  //   link: 'https://medium.com/@yourname/post-url',  // Link to full post (optional)
  //   image: 'assets/images/blog-post.jpg',  // Featured image (optional)
  //   tags: ['AI', 'Drug Discovery', 'QSAR']  // Tags for categorization (optional)
  // },
  
  // Add your blog posts below:
];

// PROJECTS DATA - Add your research projects here
const PROJECTS = [
  // Template - Copy and modify this:
  // {
  //   title: 'Project Name',
  //   description: 'Detailed description of the project, methods used, and outcomes...',
  //   technologies: ['Python', 'TensorFlow', 'RDKit'],  // Tools/technologies used
  //   status: 'Completed',  // 'Completed', 'In Progress', 'Published'
  //   date: 'January 2026',
  //   image: 'assets/images/project-image.jpg',  // Project image (optional)
  //   github: 'https://github.com/yourusername/project',  // GitHub link (optional)
  //   paper: 'https://doi.org/...',  // Publication link (optional)
  //   demo: 'https://yourproject.com'  // Live demo link (optional)
  // },
  
  // Add your projects below:
];

// MATERIALS DATA - Add teaching materials, slides, datasets, etc.
const MATERIALS = [
  // Template - Copy and modify this:
  // {
  //   title: 'Material Title',
  //   type: 'Slides',  // 'Slides', 'Dataset', 'Tutorial', 'Code', 'Documentation'
  //   description: 'Brief description of what this material covers...',
  //   date: 'January 2026',
  //   link: 'https://drive.google.com/...',  // Download/view link
  //   size: '5.2 MB',  // File size (optional)
  //   format: 'PDF',  // File format (optional)
  //   tags: ['QSAR', 'Tutorial', 'Python']  // Tags (optional)
  // },
  
  // Add your materials below:
];

// TEACHING DATA - Add courses, workshops, tutorials
const TEACHING = [
  // Template:
  // {
  //   title: 'Course/Workshop Name',
  //   role: 'Instructor',  // 'Instructor', 'Teaching Assistant', 'Guest Lecturer'
  //   institution: 'University Name',
  //   date: 'Fall 2025',
  //   description: 'Course description and topics covered...',
  //   link: 'https://...',  // Course website (optional)
  //   materials: 'https://...'  // Link to course materials (optional)
  // },
];

// CODE/REPOSITORIES DATA - Add GitHub repos, tools, packages
const CODE = [
  // Template:
  // {
  //   title: 'Repository/Tool Name',
  //   description: 'What the code does...',
  //   language: 'Python',  // Primary language
  //   stars: 42,  // GitHub stars (optional)
  //   github: 'https://github.com/username/repo',
  //   demo: 'https://...',  // Live demo (optional)
  //   tags: ['Machine Learning', 'Drug Discovery']
  // },
];

// ANNOUNCEMENTS DATA - Add news, updates, achievements
const ANNOUNCEMENTS = [
  // Template:
  // {
  //   title: 'Announcement Title',
  //   date: 'January 2026',
  //   content: 'Details of the announcement...',
  //   type: 'Award',  // 'Award', 'Publication', 'Talk', 'News'
  //   link: 'https://...'  // Related link (optional)
  // },
];

// MEDIA & TALKS DATA - Add presentations, interviews, media appearances
const MEDIA_TALKS = [
  // Template:
  // {
  //   title: 'Talk/Media Title',
  //   event: 'Conference/Event Name',
  //   date: 'January 2026',
  //   type: 'Talk',  // 'Talk', 'Poster', 'Interview', 'Podcast', 'Video'
  //   description: 'Brief description...',
  //   slides: 'https://...',  // Link to slides (optional)
  //   video: 'https://youtube.com/...',  // Video link (optional)
  //   location: 'City, Country'  // Location (optional)
  // },
];

// ============================================
// SETUP & INITIALIZATION
// ============================================

// When page loads, set up everything
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear(); // Update copyright year
  setupMenu();      // Setup mobile hamburger menu
  setupMegaMenu();  // Setup mega menu (currently disabled)
  router();         // Start routing system
  window.addEventListener('hashchange', router); // Listen for page changes
});

// ============================================
// HELPER FUNCTIONS
// ============================================

// Setup mobile hamburger menu button
function setupMenu() {
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  btn?.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex'; // Toggle menu open/closed
  });
}

// Mega menu setup (currently disabled)
function setupMegaMenu() {
  return; // Not using mega menu right now
}

// Render HTML into the main page area
function mount(html) {
  const app = document.getElementById('app');
  app.innerHTML = html;
}

// ============================================
// PAGE RENDERING FUNCTIONS
// ============================================

// HOME PAGE
function renderHome() {
  mount(`
  <section class="section">
    <div class="container">
      <div class="card" style="padding:20px">
        <h3 style="margin:0">Welcome to Nirajan Bhattarai's Academic Portfolio</h3>
        <p style="margin-top: 12px;">Explore my research, publications, and academic journey in AI-driven drug discovery and computational pharmaceutical sciences.</p>
      </div>
      <div class="grid" style="grid-template-columns: 1fr 2fr; gap: 20px; margin-top: 16px; align-items: start;">
        <div class="card" style="padding:20px; display:flex; flex-direction: column; align-items:center;">
          <div class="avatar" style="width: 200px; height: 200px; border-radius: 50%; overflow: hidden; margin-bottom: 16px;">
            <img src="assets/images/Nirajan.jpg" alt="Nirajan Bhattarai" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>
          <div style="text-align: center;">
            <address style="font-style: normal; color: var(--text)">
              <strong style="font-size: 18px;">Nirajan Bhattarai</strong><br/>
            </address>
            <div style="margin-top:12px; color: var(--text); line-height: 1.8;">
              <div>Postdoctoral Researcher</div>
              <div>Roy Laboratory</div>
              <div>Department of Pharmaceutical Sciences</div>
              <div>UT Health Science Center</div>
              <div style="margin-top: 12px;"><a href="mailto:nbhatta1@uthsc.edu" style="color: var(--primary); text-decoration: none; font-weight: 600;">nbhatta1@uthsc.edu</a></div>
            </div>
          </div>
        </div>
        <div class="card" style="padding:24px;">
          <h3 style="margin-top: 0;">Research Interests</h3>
          <ul style="list-style: none; padding: 0; margin-top: 16px; line-height: 2;">
            <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: var(--primary);">▸</span>
              AI-Driven Drug Discovery
            </li>
            <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: var(--primary);">▸</span>
              QSAR Modeling & Cheminformatics
            </li>
            <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: var(--primary);">▸</span>
              Protein Structure Prediction & Molecular Modeling
            </li>
            <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: var(--primary);">▸</span>
              Generative Models for De Novo Drug Design
            </li>
            <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: var(--primary);">▸</span>
              Explainable AI (XAI) in Drug Discovery
            </li>
            <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: var(--primary);">▸</span>
              Low Data Drug Discovery
            </li>
            <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: var(--primary);">▸</span>
              Explainable Computer Vision for Biomedical Imaging
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  `);
}

function renderResearch(root) {
  root.innerHTML = `
    <section class="centered-page">
      <div class="container">
        <div class="card">
          <h1>Research & Projects</h1>
          <p>
My research focuses on developing and applying artificial intelligence and machine learning methodologies to accelerate drug discovery and development. I integrate computational chemistry, structural biology, and advanced machine learning techniques to design novel therapeutic compounds and elucidate structure-activity relationships in medicinal chemistry.
          </p>
        </div>
        <!-- Image directly below the intro text -->
        <div class="card">
          <img src="assets/images/Research-Summary_2018.webp?v=4" alt="Research Overview" style="width: 100%; height: auto; display: block;" />
        </div>
        <div class="card">
          <h2>AI-Driven Drug Discovery & QSAR Modeling</h2>
          <p>
I develop quantitative structure-activity relationship (QSAR) models using machine learning and deep learning algorithms to predict molecular properties, bioactivity, and ADMET characteristics. By integrating molecular descriptors, fingerprints, and graph-based representations with advanced regression and classification techniques, I enable rational design of drug candidates with optimized pharmacological profiles. My work encompasses both ligand-based and structure-based virtual screening approaches to identify promising hits from large chemical libraries.
          </p>
        </div>
        <div class="card">
          <h2>Protein Structure Prediction & Molecular Modeling</h2>
          <p>
I employ state-of-the-art computational methods for protein structure prediction, homology modeling, and molecular dynamics simulations to understand protein-ligand interactions at atomic resolution. Utilizing deep learning architectures such as AlphaFold and RoseTTAFold, combined with molecular docking and binding free energy calculations, I investigate binding mechanisms and predict protein conformational changes. This structure-based approach guides the design of selective inhibitors and optimizes lead compounds for enhanced target affinity and specificity.
          </p>
        </div>
        <div class="card">
          <h2>Generative Models for De Novo Molecular Design</h2>
          <p>
I develop and apply generative AI models, including variational autoencoders (VAEs), generative adversarial networks (GANs), and transformer-based architectures, to design novel molecular structures with desired properties. These models learn from chemical space representations and generate drug-like molecules that satisfy multiple optimization criteria, including synthetic accessibility, target affinity, and drug-likeness. By incorporating reinforcement learning and multi-objective optimization, I explore uncharted regions of chemical space to discover innovative scaffolds for therapeutic development.
          </p>
        </div>
        <div class="card">
          <h2>Explainable AI (XAI) in Drug Discovery</h2>
          <p>
I focus on developing interpretable machine learning models that provide mechanistic insights into molecular activity predictions. Using techniques such as SHAP (SHapley Additive exPlanations), attention mechanisms, and feature importance analysis, I identify key molecular features and structural motifs responsible for biological activity. This explainability framework enables medicinal chemists to understand model predictions, validate computational findings against known structure-activity relationships, and make informed decisions in lead optimization campaigns, ultimately bridging the gap between AI predictions and actionable pharmaceutical knowledge.
          </p>
        </div>
        <div class="card">
          <h2>Low Data Drug Discovery</h2>
          <p>
I develop innovative machine learning approaches to address the challenge of limited experimental data in drug discovery. By leveraging transfer learning, few-shot learning, and meta-learning techniques, I build predictive models that can generalize from small datasets. My work incorporates data augmentation strategies, domain adaptation methods, and integration of prior knowledge from related chemical spaces to improve model performance when training data is scarce. This approach is particularly valuable for understudied targets, rare diseases, and early-stage drug discovery projects where acquiring large-scale experimental data is cost-prohibitive or time-intensive.
          </p>
        </div>
        <div class="card">
          <h2>Explainable Computer Vision for Biomedical Imaging</h2>
          <p>
I apply computer vision and deep learning techniques to analyze biomedical images for disease diagnosis and characterization, with a strong emphasis on model interpretability. Using convolutional neural networks (CNNs), vision transformers, and advanced architectures, I develop models for histopathology analysis, medical imaging interpretation, and cellular phenotyping. By integrating explainability methods such as Grad-CAM, attention visualization, and saliency maps, I ensure that diagnostic predictions are transparent and clinically interpretable. This work bridges the gap between automated image analysis and clinical decision-making, providing healthcare professionals with AI-powered tools that offer both accurate predictions and clear reasoning for their diagnostic outputs.
          </p>
        </div>
      </div>
    </section>
  `;
}

function renderMembers(root) {
  root.innerHTML = `
    <section class="centered-page">
      <div class="container">
        <h2 style="margin-top: 48px; text-align: left;">Professional Profile</h2>
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-top: 24px;">
          <div class="card people-card">
            <div class="avatar">
              <img src="assets/images/Nirajan.jpg" alt="Nirajan Bhattarai">
            </div>
            <div>
              <h3>Nirajan Bhattarai</h3>
              <p class="role">Postdoctoral Researcher - AI-Driven Drug Discovery</p>
              <p style="margin-top: 12px; font-size: 14px; line-height: 1.6;">
                Specializing in QSAR modeling, protein structure prediction, generative AI for molecular design, and explainable AI in pharmaceutical sciences.
              </p>
            </div>
          </div>
        </div>

        <h2 style="margin-top: 64px; text-align: left;">Collaborators & Colleagues</h2>
        <div class="card" style="padding: 24px; margin-top: 24px;">
          <p>I collaborate with researchers across multiple institutions and disciplines. If you're interested in collaboration opportunities, please feel free to <a href="#contact" style="color: var(--primary); text-decoration: none; font-weight: 600;">get in touch</a>.</p>
        </div>
      </div>
    </section>
  `;
}

function renderPeople() {
  mount(`
  <section class="section">
    <div class="container">
      <h2>People</h2>
      <p class="sub">Meet the team.</p>

      <h3>Principal Investigator</h3>
      <div class="grid">
        ${people().pi.map(p => `
          <div class="card people-card">
            <div class="avatar">${p.photo ? `<img src="${p.photo}" alt="${p.name}" />` : ''}</div>
            <div>
              <h3>${p.name}</h3>
              <p class="role">${p.role}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <h3 style="margin-top:24px">Post-Doctoral Researchers</h3>
      <div class="grid">
        ${people().postdocs.map(p => `
          <div class="card people-card">
            <div class="avatar">${p.photo ? `<img src="${p.photo}" alt="${p.name}" />` : ''}</div>
            <div>
              <h3>${p.name}</h3>
              <p class="role">${p.role}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <h3 style="margin-top:24px">Current Graduate Students</h3>
      <div class="grid">
        ${people().grads.map(p => `
          <div class="card people-card">
            <div class="avatar">${p.photo ? `<img src="${p.photo}" alt="${p.name}" />` : ''}</div>
            <div>
              <h3>${p.name}</h3>
              <p class="role">${p.role}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <h3 style="margin-top:24px">Current Undergraduate Students</h3>
      <div class="grid">
        ${people().undergrads.map(p => `
          <div class="card people-card">
            <div class="avatar">${p.photo ? `<img src="${p.photo}" alt="${p.name}" />` : ''}</div>
            <div>
              <h3>${p.name}</h3>
              <p class="role">${p.role}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <h3 style="margin-top:24px">Alumni</h3>
      <div class="grid">
        ${people().alumni.map(p => `
          <div class="card people-card">
            <div class="avatar">${p.photo ? `<img src="${p.photo}" alt="${p.name}" />` : ''}</div>
            <div>
              <h3>${p.name}</h3>
              <p class="role">${p.role}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <h3 style="margin-top:24px">Collaborators</h3>
      <div class="grid">
        ${people().collaborators.map(p => `
          <div class="card people-card">
            <div class="avatar">${p.photo ? `<img src="${p.photo}" alt="${p.name}" />` : ''}</div>
            <div>
              <h3>${p.name}</h3>
              <p class="role">${p.role}</p>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  </section>
  `);
}

function renderPublications() {
  const root = document.getElementById('app');
  root.innerHTML = `
    <section class="centered-page">
      <div class="container">
        <h1 style="margin-top: 48px; text-align: left;">Publications</h1>
        <p style="margin-top: 16px; margin-bottom: 32px; max-width: 100%;">
          Selected publications in computational biology, bioinformatics, and related fields.
        </p>
        <div style="margin-top: 32px; max-width: 100%;">
          
          <div class="pub-item">
            <div>
              <h3><strong>1.</strong> Computational Approaches to Biological Systems</h3>
              <p class="meta">Bhattarai, N. et al. — Journal of Computational Biology (2025)</p>
            </div>
            <div class="links">
              <a href="#" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>2.</strong> Machine Learning Applications in Bioinformatics</h3>
              <p class="meta">Bhattarai, N.; Collaborators — Bioinformatics Journal (2024)</p>
            </div>
            <div class="links">
              <a href="#" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>3.</strong> Integrative Multi-Omics Data Analysis</h3>
              <p class="meta">Bhattarai, N. et al. — Systems Biology (2024)</p>
            </div>
            <div class="links">
              <a href="#" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>4.</strong> Novel Bioinformatics Pipeline Development</h3>
              <p class="meta">Bhattarai, N. — Computational Methods (2023)</p>
            </div>
            <div class="links">
              <a href="#" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

          <div class="pub-item">
            <div>
              <h3><strong>5.</strong> Advanced Statistical Methods for Genomic Data</h3>
              <p class="meta">Bhattarai, N.; Research Team — Genome Research (2023)</p>
            </div>
            <div class="links">
              <a href="#" target="_blank" rel="noopener">DOI</a>
            </div>
          </div>

        </div>
        <div class="card" style="margin-top: 48px; padding: 24px; background: #f8f9fa;">
          <p style="margin: 0; text-align: center; color: #666;">
            <em>Note: This is a placeholder publications list. Please update with your actual publications.</em>
          </p>
        </div>
      </div>
    </section>
  `;
}

function renderSudeshnaRoy() {
  mount(`
    <section class="section impact-page">
      <div class="container">
        <h2>Sudeshna Roy, Ph.D.</h2>
        <div class="grid impact-grid">
          <div>
            <div class="card impact-copy" style="margin-top: 75px;">
              <p style="font-size: 18px; font-weight: 600; margin-bottom: 4px;">Associate Professor</p>
              <p style="margin-bottom: 4px;">College of Pharmacy</p>
              <p style="margin-bottom: 24px;">Department of Pharmaceutical Sciences</p>
              
              <p style="margin-bottom: 4px;">881 Madison Avenue</p>
              <p style="margin-bottom: 4px;">Pharmacy Building_05_571</p>
              <p style="margin-bottom: 4px;">Memphis, TN 38163</p>
              <p><a href="mailto:roy@uthsc.edu" style="color: var(--primary);">roy@uthsc.edu</a></p>
            </div>
          </div>
          <div>
            <div style="width: 400px; height: 400px; margin: 0 auto;">
              <img src="assets/images/IMG_4759.jpg" alt="Sudeshna Roy" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 3px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06);">
            </div>
          </div>
        </div>
        
        <div style="margin-top: 200px;">
          <h3 style="margin-bottom: 24px; font-size: 24px;">Curriculum Vitae</h3>
          <div style="width: 100%; height: 800px; border: 1px solid var(--border); border-radius: 14px; overflow: hidden;">
            <iframe src="assets/Roy-CV-updated-Oct2025/Sudeshna Roy CV_Oct 2025.pdf" style="width: 100%; height: 100%; border: none;" title="Sudeshna Roy CV"></iframe>
          </div>
        </div>
      </div>
    </section>
  `);
}

function renderNews() {
  mount(`
  <section class="section">
    <div class="container" style="max-width: 900px;">
      <h2>Blog</h2>
      <p class="sub">Thoughts, insights, and updates on AI-driven drug discovery, computational methods, and research.</p>
      <div style="display: flex; flex-direction: column; gap: 32px; margin-top: 32px;">
        ${BLOG_POSTS.length > 0 ? BLOG_POSTS.map(post => `
          <article class="card" style="padding: 0; overflow: hidden;">
            ${post.image ? `
              <img src="${post.image}" alt="${post.title}" style="width: 100%; height: 300px; object-fit: cover;">
            ` : ''}
            <div style="padding: 24px;">
              <h3 style="margin-top: 0;">${post.title}</h3>
              <p class="sub">${post.date}</p>
              ${post.tags ? `
                <div style="display: flex; gap: 8px; margin-top: 12px; flex-wrap: wrap;">
                  ${post.tags.map(tag => `<span style="background: #e9ecef; padding: 4px 12px; border-radius: 12px; font-size: 12px; color: #495057;">${tag}</span>`).join('')}
                </div>
              ` : ''}
              <p style="margin-top: 16px;">${post.summary}</p>
              ${post.link ? `<a href="${post.link}" target="_blank" rel="noopener" style="color: var(--primary); text-decoration: none; font-weight: 600; margin-top: 12px; display: inline-block;">Read More →</a>` : ''}
            </div>
          </article>
        `).join('') : `
          <div class="card" style="padding: 48px; text-align: center;">
            <h3 style="margin-top: 0; color: #666;">No blog posts yet</h3>
            <p style="color: #999; margin-top: 12px;">Check back soon for new posts about AI, drug discovery, and computational research.</p>
          </div>
        `}
      </div>
    </div>
  </section>
  `);
}

function renderContact() {
  mount(`
  <section class="section">
    <div class="container">
      <h2>Contact</h2>
      <p class="sub">Get in touch for collaborations, questions, or opportunities.</p>
      <div class="card" style="padding: 20px; margin-bottom: 24px; background: #f8f9fa;">
        <h3 style="margin-top: 0;">Contact Information</h3>
        <p style="margin: 12px 0;"><strong>Email:</strong> <a href="mailto:nirajanbhattarai4@gmail.com" style="color: var(--primary); text-decoration: none; font-weight: 600;">nirajanbhattarai4@gmail.com</a></p>
        <p style="margin: 12px 0;"><strong>Institutional Email:</strong> <a href="mailto:nbhatta1@uthsc.edu" style="color: var(--primary); text-decoration: none; font-weight: 600;">nbhatta1@uthsc.edu</a></p>
      </div>
      <form class="card" id="contact-form">
        <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 12px">
          <div>
            <label for="name">Name</label>
            <input id="name" name="name" required />
          </div>
          <div>
            <label for="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>
        </div>
        <div style="margin-top: 12px">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <div style="margin-top: 12px">
          <button class="button" type="submit">Send</button>
        </div>
      </form>
    </div>
  </section>
  `);

  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Website Contact from ${data.name}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
    const mailtoLink = `mailto:nirajanbhattarai4@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show confirmation
    alert(`Thanks, ${data.name}! Your email client will open to send the message.`);
    form.reset();
  });
}

// ============================================
// PROJECTS PAGE
// ============================================
function renderProjects() {
  mount(`
  <section class="section">
    <div class="container">
      <h2>Projects</h2>
      <p class="sub">Research projects and computational tools I've developed or contributed to.</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 24px; margin-top: 32px;">
        ${PROJECTS.length > 0 ? PROJECTS.map(project => `
          <article class="card" style="padding: 24px; display: flex; flex-direction: column; height: 100%;">
            ${project.image ? `
              <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 16px;">
            ` : ''}
            <div style="flex: 1;">
              <h3 style="margin-top: 0;">${project.title}</h3>
              <p style="font-size: 14px; color: #6c757d; margin-top: 4px;">
                ${project.status} ${project.date ? `• ${project.date}` : ''}
              </p>
              ${project.technologies ? `
                <div style="display: flex; gap: 6px; margin-top: 12px; flex-wrap: wrap;">
                  ${project.technologies.map(tech => `<span style="background: #e7f3ff; color: #0066cc; padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 600;">${tech}</span>`).join('')}
                </div>
              ` : ''}
              <p style="margin-top: 16px; line-height: 1.6; color: #495057;">${project.description}</p>
            </div>
            <div style="display: flex; gap: 12px; margin-top: 20px; padding-top: 16px; border-top: 1px solid #e9ecef;">
              ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener" style="color: var(--primary); text-decoration: none; font-size: 14px; font-weight: 600;">📁 Code</a>` : ''}
              ${project.paper ? `<a href="${project.paper}" target="_blank" rel="noopener" style="color: var(--primary); text-decoration: none; font-size: 14px; font-weight: 600;">📄 Paper</a>` : ''}
              ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener" style="color: var(--primary); text-decoration: none; font-size: 14px; font-weight: 600;">🔗 Demo</a>` : ''}
            </div>
          </article>
        `).join('') : `
          <div class="card" style="padding: 48px; text-align: center; grid-column: 1 / -1;">
            <h3 style="margin-top: 0; color: #666;">No projects yet</h3>
            <p style="color: #999; margin-top: 12px;">Check back soon for research projects and computational tools.</p>
          </div>
        `}
      </div>
    </div>
  </section>
  `);
}

// ============================================
// MATERIALS PAGE
// ============================================
function renderMaterials() {
  mount(`
  <section class="section">
    <div class="container" style="max-width: 900px;">
      <h2>Materials</h2>
      <p class="sub">Teaching materials, presentations, datasets, and other resources.</p>
      <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 32px;">
        ${MATERIALS.length > 0 ? MATERIALS.map(material => `
          <article class="card" style="padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: start; gap: 20px;">
              <div style="flex: 1;">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span style="background: #28a745; color: white; padding: 4px 12px; border-radius: 6px; font-size: 11px; font-weight: 700; text-transform: uppercase;">${material.type}</span>
                  ${material.format ? `<span style="color: #6c757d; font-size: 13px;">${material.format}</span>` : ''}
                  ${material.size ? `<span style="color: #6c757d; font-size: 13px;">${material.size}</span>` : ''}
                </div>
                <h3 style="margin-top: 12px; margin-bottom: 8px;">${material.title}</h3>
                <p style="color: #6c757d; font-size: 14px; margin-bottom: 12px;">${material.date}</p>
                <p style="color: #495057; line-height: 1.6;">${material.description}</p>
                ${material.tags ? `
                  <div style="display: flex; gap: 6px; margin-top: 12px; flex-wrap: wrap;">
                    ${material.tags.map(tag => `<span style="background: #f8f9fa; color: #495057; padding: 3px 10px; border-radius: 10px; font-size: 11px;">${tag}</span>`).join('')}
                  </div>
                ` : ''}
              </div>
              ${material.link ? `
                <a href="${material.link}" target="_blank" rel="noopener" class="button" style="white-space: nowrap;">Download</a>
              ` : ''}
            </div>
          </article>
        `).join('') : `
          <div class="card" style="padding: 48px; text-align: center;">
            <h3 style="margin-top: 0; color: #666;">No materials yet</h3>
            <p style="color: #999; margin-top: 12px;">Check back soon for teaching materials, slides, and datasets.</p>
          </div>
        `}
      </div>
    </div>
  </section>
  `);
}

// ============================================
// TEACHING PAGE
// ============================================
function renderTeaching() {
  mount(`
  <section class="section">
    <div class="container" style="max-width: 900px;">
      <h2>Teaching</h2>
      <p class="sub">Courses, workshops, and educational activities.</p>
      <div style="display: flex; flex-direction: column; gap: 24px; margin-top: 32px;">
        ${TEACHING.length > 0 ? TEACHING.map(course => `
          <article class="card" style="padding: 24px;">
            <div style="display: flex; justify-content: between; align-items: start; gap: 20px;">
              <div style="flex: 1;">
                <h3 style="margin-top: 0;">${course.title}</h3>
                <p style="color: #6c757d; font-size: 14px; margin-top: 4px;">
                  ${course.role} • ${course.institution} • ${course.date}
                </p>
                <p style="margin-top: 16px; line-height: 1.6; color: #495057;">${course.description}</p>
                <div style="display: flex; gap: 12px; margin-top: 16px;">
                  ${course.link ? `<a href="${course.link}" target="_blank" rel="noopener" style="color: var(--primary); text-decoration: none; font-size: 14px; font-weight: 600;">🔗 Course Website</a>` : ''}
                  ${course.materials ? `<a href="${course.materials}" target="_blank" rel="noopener" style="color: var(--primary); text-decoration: none; font-size: 14px; font-weight: 600;">📁 Materials</a>` : ''}
                </div>
              </div>
            </div>
          </article>
        `).join('') : `
          <div class="card" style="padding: 48px; text-align: center;">
            <h3 style="margin-top: 0; color: #666;">No teaching activities yet</h3>
            <p style="color: #999; margin-top: 12px;">Check back soon for courses and workshops.</p>
          </div>
        `}
      </div>
    </div>
  </section>
  `);
}

// ============================================
// CODE PAGE
// ============================================
function renderCode() {
  mount(`
  <section class="section">
    <div class="container">
      <h2>Code & Repositories</h2>
      <p class="sub">Open-source projects, tools, and packages I've developed.</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 24px; margin-top: 32px;">
        ${CODE.length > 0 ? CODE.map(repo => `
          <article class="card" style="padding: 24px;">
            <h3 style="margin-top: 0;">${repo.title}</h3>
            ${repo.language || repo.stars ? `
              <div style="display: flex; gap: 12px; margin-top: 8px; align-items: center;">
                ${repo.language ? `<span style="background: #e7f3ff; color: #0066cc; padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 600;">${repo.language}</span>` : ''}
                ${repo.stars ? `<span style="color: #6c757d; font-size: 13px;">⭐ ${repo.stars}</span>` : ''}
              </div>
            ` : ''}
            <p style="margin-top: 16px; line-height: 1.6; color: #495057;">${repo.description}</p>
            ${repo.tags ? `
              <div style="display: flex; gap: 6px; margin-top: 12px; flex-wrap: wrap;">
                ${repo.tags.map(tag => `<span style="background: #f8f9fa; color: #495057; padding: 3px 10px; border-radius: 10px; font-size: 11px;">${tag}</span>`).join('')}
              </div>
            ` : ''}
            <div style="display: flex; gap: 12px; margin-top: 20px; padding-top: 16px; border-top: 1px solid #e9ecef;">
              ${repo.github ? `<a href="${repo.github}" target="_blank" rel="noopener" style="color: var(--primary); text-decoration: none; font-size: 14px; font-weight: 600;">📁 GitHub</a>` : ''}
              ${repo.demo ? `<a href="${repo.demo}" target="_blank" rel="noopener" style="color: var(--primary); text-decoration: none; font-size: 14px; font-weight: 600;">🔗 Demo</a>` : ''}
            </div>
          </article>
        `).join('') : `
          <div class="card" style="padding: 48px; text-align: center; grid-column: 1 / -1;">
            <h3 style="margin-top: 0; color: #666;">No code repositories yet</h3>
            <p style="color: #999; margin-top: 12px;">Check back soon for open-source projects and tools.</p>
          </div>
        `}
      </div>
    </div>
  </section>
  `);
}

// ============================================
// ANNOUNCEMENTS PAGE
// ============================================
function renderAnnouncements() {
  mount(`
  <section class="section">
    <div class="container" style="max-width: 900px;">
      <h2>Announcements</h2>
      <p class="sub">Recent news, awards, and updates.</p>
      <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 32px;">
        ${ANNOUNCEMENTS.length > 0 ? ANNOUNCEMENTS.map(announcement => `
          <article class="card" style="padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: start; gap: 20px;">
              <div style="flex: 1;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                  <span style="background: #28a745; color: white; padding: 4px 12px; border-radius: 6px; font-size: 11px; font-weight: 700; text-transform: uppercase;">${announcement.type}</span>
                  <span style="color: #6c757d; font-size: 14px;">${announcement.date}</span>
                </div>
                <h3 style="margin: 8px 0;">${announcement.title}</h3>
                <p style="color: #495057; line-height: 1.6; margin-top: 12px;">${announcement.content}</p>
                ${announcement.link ? `
                  <a href="${announcement.link}" target="_blank" rel="noopener" style="color: var(--primary); text-decoration: none; font-size: 14px; font-weight: 600; margin-top: 12px; display: inline-block;">Learn More →</a>
                ` : ''}
              </div>
            </div>
          </article>
        `).join('') : `
          <div class="card" style="padding: 48px; text-align: center;">
            <h3 style="margin-top: 0; color: #666;">No announcements yet</h3>
            <p style="color: #999; margin-top: 12px;">Check back soon for news and updates.</p>
          </div>
        `}
      </div>
    </div>
  </section>
  `);
}

// ============================================
// MEDIA & TALKS PAGE
// ============================================
function renderMedia() {
  mount(`
  <section class="section">
    <div class="container" style="max-width: 900px;">
      <h2>Media & Talks</h2>
      <p class="sub">Presentations, interviews, and media appearances.</p>
      <div style="display: flex; flex-direction: column; gap: 24px; margin-top: 32px;">
        ${MEDIA_TALKS.length > 0 ? MEDIA_TALKS.map(item => `
          <article class="card" style="padding: 24px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span style="background: #6f42c1; color: white; padding: 4px 12px; border-radius: 6px; font-size: 11px; font-weight: 700; text-transform: uppercase;">${item.type}</span>
              <span style="color: #6c757d; font-size: 14px;">${item.date}</span>
            </div>
            <h3 style="margin: 0 0 8px 0;">${item.title}</h3>
            <p style="color: #6c757d; font-size: 14px; margin-bottom: 12px;">
              ${item.event}${item.location ? ` • ${item.location}` : ''}
            </p>
            <p style="color: #495057; line-height: 1.6;">${item.description}</p>
            <div style="display: flex; gap: 12px; margin-top: 16px;">
              ${item.slides ? `<a href="${item.slides}" target="_blank" rel="noopener" style="color: var(--primary); text-decoration: none; font-size: 14px; font-weight: 600;">📊 Slides</a>` : ''}
              ${item.video ? `<a href="${item.video}" target="_blank" rel="noopener" style="color: var(--primary); text-decoration: none; font-size: 14px; font-weight: 600;">🎥 Video</a>` : ''}
            </div>
          </article>
        `).join('') : `
          <div class="card" style="padding: 48px; text-align: center;">
            <h3 style="margin-top: 0; color: #666;">No media or talks yet</h3>
            <p style="color: #999; margin-top: 12px;">Check back soon for presentations and media appearances.</p>
          </div>
        `}
      </div>
    </div>
  </section>
  `);
}

// ============================================
// PERSONAL PAGE
// ============================================
function renderPersonal() {
  mount(`
  <section class="section">
    <div class="container" style="max-width: 900px;">
      <h2>Personal</h2>
      <p class="sub">Hobbies, interests, and life beyond research.</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; margin-top: 32px;">
        ${PERSONAL.length > 0 ? PERSONAL.map(item => `
          <article class="card" style="padding: 0; overflow: hidden;">
            ${item.image ? `
              <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 200px; object-fit: cover;">
            ` : ''}
            <div style="padding: 20px;">
              <h3 style="margin-top: 0;">${item.title}</h3>
              <p style="color: #495057; line-height: 1.6;">${item.description}</p>
              ${item.link ? `
                <a href="${item.link}" target="_blank" rel="noopener" style="color: var(--primary); text-decoration: none; font-size: 14px; font-weight: 600; margin-top: 12px; display: inline-block;">Learn More →</a>
              ` : ''}
            </div>
          </article>
        `).join('') : `
          <div class="card" style="padding: 48px; text-align: center; grid-column: 1 / -1;">
            <h3 style="margin-top: 0; color: #666;">No personal content yet</h3>
            <p style="color: #999; margin-top: 12px;">Check back soon for hobbies and interests.</p>
          </div>
        `}
      </div>
    </div>
  </section>
  `);
}

// ============================================
// ROUTER - Navigation System
// ============================================
function router() {
  const root = document.getElementById('app');
  const hash = (location.hash || '#home').replace('#', '');
  
  // Update active nav item
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  const activeNav = document.getElementById(`nav-${hash}`);
  if (activeNav) activeNav.classList.add('active');
  
  // Route to appropriate page
  switch (hash) {
    case 'home':
      renderHome();
      break;
    case 'research':
      renderResearch(root);
      break;
    case 'members':
      renderMembers(root);
      break;
    case 'publications':
      renderPublications();
      break;
    case 'news':
      renderNews();
      break;
    case 'contact':
      renderContact();
      break;
    case 'impact':
      renderImpact();
      break;
    case 'projects':
      renderProjects();
      break;
    case 'materials':
      renderMaterials();
      break;
    case 'teaching':
      renderTeaching();
      break;
    case 'code':
      renderCode();
      break;
    case 'announcements':
      renderAnnouncements();
      break;
    case 'media':
      renderMedia();
      break;
    case 'personal':
      renderPersonal();
      break;
    default:
      renderHome();
  }
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// ============================================
// MENU FUNCTIONS
// ============================================
