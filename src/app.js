/**
 * Roy Laboratory Website - Main JavaScript File
 * 
 * This file contains all the website logic:
 * - Page rendering functions (renderHome, renderNews, etc.)
 * - Data storage (news, publications, team members)
 * - Navigation/routing between pages
 * 
 * To update content, search for the section you need:
 * - News: Search for "function newsItems()"
 * - Publications: Search for "<div class="pub-item">"
 * - Team: Search for "function teamData()"
 */

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
            <img src="/public/assets/images/Nirajan.jpg" alt="Nirajan Bhattarai" style="width: 100%; height: 100%; object-fit: cover;" />
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
          <img src="/public/assets/images/Research-Summary_2018.webp?v=4" alt="Research Overview" style="width: 100%; height: auto; display: block;" />
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
              <img src="/public/assets/images/Nirajan.jpg" alt="Nirajan Bhattarai">
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
  const news = newsItems();
  mount(`
  <section class="section">
    <div class="container" style="max-width: 900px;">
      <h2>News & Updates</h2>
      <p class="sub">Recent achievements, publications, and announcements.</p>
      <div style="display: flex; flex-direction: column; gap: 32px; margin-top: 32px;">
        ${news.length > 0 ? news.map(n => `
          <article class="card" style="padding: 0; overflow: hidden;">
            ${n.video ? `
              <div style="width: 100%; height: 400px; background: #000;">
                <iframe src="${n.video}" style="width: 100%; height: 100%; border: none;" frameborder="0" scrolling="no" allowtransparency="true" allow="encrypted-media"></iframe>
              </div>
            ` : n.image ? `
              <img src="${n.image}" alt="${n.title}" style="width: 100%; height: 300px; object-fit: cover;">
            ` : ''}
            <div style="padding: 24px;">
              <h3 style="margin-top: 0;">${n.title}</h3>
              <p class="sub">${n.date}</p>
              <p>${n.summary}</p>
              ${n.link ? `<a href="${n.link}" target="_blank" rel="noopener" style="color: var(--primary); text-decoration: none; font-weight: 600; margin-top: 12px; display: inline-block;">Read More →</a>` : ''}
            </div>
          </article>
        `).join('') : `
          <div class="card" style="padding: 48px; text-align: center;">
            <h3 style="margin-top: 0; color: #666;">No news items yet</h3>
            <p style="color: #999; margin-top: 12px;">Check back soon for updates and announcements.</p>
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
    alert(`Thanks, ${data.name}! I'll be in touch at ${data.email}.`);
    form.reset();
  });
}

function renderImpact() {
  mount(`
  <section class="section impact-page">
    <div class="container">
      <h2>About Me</h2>
      <div class="grid impact-grid">
        <div>
          <div class="card impact-copy">
            <p>I am currently a Postdoctoral Researcher at the Roy Laboratory in the Pharmaceutical Sciences Department at UT Health Science Center, specializing in AI-driven drug discovery and computational pharmaceutical sciences.</p>
            <p>My research leverages artificial intelligence and machine learning to accelerate the drug discovery pipeline. I develop and apply Quantitative Structure-Activity Relationship (QSAR) models to predict molecular properties and biological activities, enabling rational design of novel therapeutic compounds. My work encompasses structure-based and ligand-based drug design approaches, integrating cheminformatics with advanced machine learning algorithms.</p>
            <p>A key focus of my research is protein structure prediction and modeling, utilizing deep learning architectures to understand protein-ligand interactions and binding mechanisms. I employ generative models, including variational autoencoders (VAEs), generative adversarial networks (GANs), and transformer-based architectures, to design de novo molecular structures with optimized pharmacological profiles.</p>
            <p>I am particularly interested in explainable AI (XAI) for drug discovery, developing interpretable machine learning models that provide mechanistic insights into molecular activity predictions. This approach bridges the gap between black-box predictions and actionable pharmaceutical knowledge, enabling researchers to understand the molecular features driving biological activity and make informed decisions in lead optimization.</p>
            <p>My work aims to integrate computational predictions with experimental validation, contributing to more efficient and cost-effective drug development processes while advancing our understanding of structure-function relationships in medicinal chemistry.</p>
          </div>
        </div>
        <div class="media impact-video">
          <div class="video-wrap">
            <img src="/public/assets/images/Nirajan.jpg" alt="Nirajan Bhattarai" style="width: 100%; height: auto; border-radius: 8px;" />
          </div>
        </div>
      </div>
    </div>
  </section>
  `);
}

function renderResearchDetails(root) {
  root.innerHTML = `
    <section class="centered-page">
      <div class="container">
        <div class="card">
          <h1>Research</h1>
          <p>
The Roy Laboratory is focused on developing new technologies at the interface of chemistry and biology. To this end, we explore and develop new methods to synthesize small molecules and apply them in various drug discovery and chemical biology programs. We are particularly interested in the following areas:
          </p>
        </div>
        <div class="card">
          <h2>Target-based discovery of chemotherapeutics against Mycobacterium tuberculosis and other antibiotic-resistant bacterial infections.</h2>
          <p>
Drug-resistant infections present a global health risk that needs urgent scientific interventions. In the United States alone, two million people become infected with antibiotic-resistant bacteria leading to 23,000 deaths each year. Unfortunately, our arsenal of new drugs is insufficient to combat the multi-drug resistant and extreme-drug resistant bacteria, commonly known as “superbugs”. To this end, we are working on developing new antibiotics or chemotherapeutic agents to combat this growing challenge of antibacterial resistance utilizing a structure-based drug design approach targeting MraY, a membrane-bound protein that plays a key role in peptidoglycan biosynthesis.
          </p>
        </div>
        <div class="card">
          <h2>Synthesis and library construction of chemical scaffolds for screening against therapeutic targets.</h2>
          <p>
We are also interested in developing technologies around fluorine-containing compounds as well discovering new chemical reactivity. Fluorinated molecules confer unique pharmacokinetic properties and binding interactions and contain 100% abundant 19F natural isotope. We are creating new technologies to synthesize new chemical entities, both fluorinated and non-fluorinated molecules, that could be used in various drug discovery platforms. We are developing a library comprising of fluorinated molecules that will be screened against new and existing targets using 19F NMR assay platform.
          </p>
        </div>
      </div>
    </section>
  `;
}

// Data (Placeholder)
function researchItems() {
  return [
    { title: 'Computational Models of Tissue Dynamics', summary: 'Developing hybrid models that combine mechanistic insights with machine learning.' },
    { title: 'Bioinformatics Pipelines for Multi-Omics', summary: 'Designing scalable pipelines for integrative analysis across data modalities.' },
    { title: 'Image-Based Phenotyping', summary: 'Using advanced imaging and computer vision to characterize biological structures.' },
  ];
}

function people() {
  return {
    pi: [
      { name: 'Dr. A. Roy', role: 'Principal Investigator', photo: '/assets/images/person1.jpg' },
    ],
    postdocs: [
      { name: 'Postdoc 1', role: 'Post-Doctoral Researcher', photo: '/assets/images/person2.jpg' },
    ],
    grads: [
      { name: 'Graduate Student 1', role: 'PhD Student', photo: '/assets/images/person3.jpg' },
      { name: 'Graduate Student 2', role: 'PhD Student', photo: '/assets/images/person4.jpg' },
    ],
    undergrads: [
      { name: 'Undergraduate 1', role: 'Undergraduate Researcher', photo: '/assets/images/person5.jpg' },
    ],
    alumni: [
      { name: 'Alumnus 1', role: 'Former Graduate Student', photo: '/assets/images/person6.jpg' },
    ],
    collaborators: [
      { name: 'Collaborator 1', role: 'External Collaborator', photo: '/assets/images/person7.jpg' },
    ],
  };
}

function publications() {
  return [
    { title: 'Hybrid Modeling for Biological Systems', authors: 'Doe, Roy, et al.', venue: 'Bioinformatics Journal', year: 2024, doi: 'https://doi.org/10.0000/example', pdf: '#' },
    { title: 'Deep Learning in Bioengineering', authors: 'Roy, Smith', venue: 'Nature Methods', year: 2023, doi: '', pdf: '#' },
    { title: 'Translational Pathways', authors: 'Roy et al.', venue: 'Science Advances', year: 2022, doi: '', pdf: '#' },
  ];
}

function renderJoinUs() {
  mount(`
    <section class="section">
      <div class="container" style="max-width: 900px;">
        <h2>Opportunities & Collaboration</h2>
        
        <div style="margin-top: 48px;">
          <h3>Collaboration Opportunities</h3>
          <p style="margin-top: 16px; line-height: 1.8;">
            I am always interested in collaborating on exciting research projects in computational biology, bioinformatics, and related fields. If you have a project idea or would like to discuss potential collaborations, please reach out.
          </p>
        </div>

        <div style="margin-top: 48px;">
          <h3>Consulting & Advisory</h3>
          <p style="margin-top: 16px; line-height: 1.8;">
            I provide consulting services for computational biology projects, bioinformatics pipeline development, and machine learning applications in life sciences. I'm also available for advisory roles in research projects and startups.
          </p>
        </div>

        <div style="margin-top: 48px;">
          <h3>Speaking Engagements</h3>
          <p style="margin-top: 16px; line-height: 1.8;">
            I'm available for invited talks, seminars, and workshops on topics related to computational biology, bioinformatics, and AI in life sciences. If you'd like me to speak at your institution or event, please get in touch.
          </p>
        </div>

        <div style="margin-top: 64px;">
          <h3>Contact Me</h3>
          <p style="margin-top: 16px; line-height: 1.8;">
            Interested in any of the above? Please <a href="#contact" style="color: var(--primary); text-decoration: none; font-weight: 600;">contact me</a> to discuss further.
          </p>
        </div>
      </div>
    </section>
  `);
}

// ============================================
// NEWS DATA
// ============================================
// TO ADD NEWS: Copy one of the items below and add it at the top of this list
// Format:
// {
//   title: 'Your Title',              // News headline
//   date: 'Month Day, Year',          // When it was published
//   summary: 'Brief description...',  // 1-2 sentences
//   link: 'https://...',              // Link to full article
//   image: 'assets/images/file.jpg'   // Photo (OR use 'video' for video embed)
// },

function newsItems() {
  return [
    // Add your news items here
    // Example format:
    // { 
    //   title: 'Your News Title', 
    //   date: 'Month Day, Year', 
    //   summary: 'Brief description of the news...',
    //   link: 'https://link-to-article.com',  // optional
    //   image: 'assets/images/your-image.jpg'  // optional
    // },
  ];
}

// ============================================
// ROUTER - Navigation System
// ============================================
// This function decides which page to show based on the URL
// Example: website.com/#news will show the news page

function router() {
  const root = document.getElementById('app'); // Main content area
  const hash = (location.hash || '#home').replace('#', ''); // Get page name from URL
  
  // Match URL to the right page
  switch (hash) {
    case 'home':                // website.com/#home
      renderHome();
      break;
    case 'research':            // website.com/#research
      renderResearch(root);
      break;
    case 'members':             // website.com/#members
      renderMembers(root);
      break;
    case 'people':              // website.com/#people
      renderPeople();
      break;
    case 'publications':        // website.com/#publications
      renderPublications();
      break;
    case 'sudeshna-roy':        // website.com/#sudeshna-roy
      renderSudeshnaRoy();
      break;
    case 'news':                // website.com/#news
      renderNews();
      break;
    case 'join-us':             // website.com/#join-us
      renderJoinUs();
      break;
    case 'contact':             // website.com/#contact
      renderContact();
      break;
    case 'impact':
      renderImpact();
      break;
    case 'research-details':
      // Redirect to main research page for unified experience
      renderResearch(root);
      break;
    default:
      renderHome();
      break;
  }
}
