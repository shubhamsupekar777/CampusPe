# CampusPe — AI-Powered Campus Assistant & Placement Network

> **Frontend Developer Technical Assignment** for CampusPe.  
> Developed using **React.js**, **JavaScript**, **Tailwind CSS v4**, and **Lucide Icons** with pixel-accurate alignment to the Figma design and prototype.

---

## 🚀 Live Preview & Running Locally

The project is currently built and served locally. To run it anytime:

```bash
# Navigate to project directory
cd C:\Users\hp\.gemini\antigravity\scratch\campuspe-landing

# Install dependencies (already installed)
npm install

# Start development server
npm run dev

# Or build & preview production build
npm run build
npm run preview
```

Preview URL: `http://localhost:4173/` or `http://localhost:5173/`

---

## 🎨 Figma Design Alignment

The implementation matches every section from the [Figma Design](https://www.figma.com/design/K3IkSJ4AKV5frK4dY0K833/Untitled?node-id=1-792) and [Prototype](https://www.figma.com/proto/K3IkSJ4AKV5frK4dY0K833/Untitled?node-id=1-792):

1. **Sticky Header / Navbar**
   - Brand logo with custom gradient badge and typography.
   - Smooth navigation: *For Students*, *For Colleges*, *For Recruiters*, *Mobile App*, *FAQ*.
   - Responsive slide-out mobile drawer menu.
   - *Log In* and *Get Started* buttons linked to interactive auth modal.

2. **Hero Section**
   - Headline: **"Connect 10X Faster."** with gradient highlight.
   - Subtitle and top badge: *"India's #1 AI Campus Placement & Discovery Network"*.
   - Interactive selector: *"What are you looking for?"* with dynamic category switching.
   - **3 Core Interactive Cards**:
     - *Colleges*: NIRF rankings, cutoff predictor, verified reviews.
     - *Job & Internship Match* (Featured spotlight with badge): 98% match rate, live ATS preview, 1-click apply.
     - *Recruiters*: Automated drives, proctored assessments, zero manual spreadsheets.
   - **Metrics Counter Bar**: 500+ Partner Colleges, 100+ Corporate Recruiters, 5,000+ Jobs & Internships, 150K+ Students.

3. **Partners & Ecosystem Marquee**
   - *"Backed by & in association with"* Startup India, AICTE, Digital India, DigiLocker, NASSCOM, MSME.

4. **Section 2: Stop searching. Start getting matched.**
   - Left side: Value proposition with 98% match accuracy, direct shortlists, and growth roadmaps.
   - Right side: **Composite Opportunity Score** card with live job cards, match percentages, CTC badges, and interactive *1-Click Apply* status toggle.

5. **Section 3: Upload your resume. Find jobs that fit.**
   - Drag & drop dropzone with file picker and *"Try with Sample CV"* feature.
   - Live AI parsing simulation displaying ATS score (94/100), extracted skill badges, and matched openings.
   - 4 Value pillars: Instant ATS, Auto Skill Tagging, 10X Faster Shortlists, Bank-Grade Privacy.

6. **Section 4: Get Discovered by Students and Recruiters.**
   - Dual ecosystem feed featuring verified students, active recruiter drives, and college placement cells.
   - Interactive filter tabs (*All*, *Students*, *Recruiters*, *Institutions*).

7. **Section 5: Stop running campus drives. Start hiring the right people.**
   - 4-step interactive pipeline cards (*Post Drive & Criteria*, *AI Screening & Proctoring*, *1-Click Scheduling*, *Instant Offers & Analytics*).

8. **Section 6: Checkout Our App for a New Look & Download App**
   - 5 Smartphone interactive showcase mockups (*College Finder*, *Cutoff Predictor*, *AI Job Feed*, *Live Tracking*, *ATS Score*).
   - Carousel dot navigation to spotlight different screens.
   - High-contrast download banner with Google Play & Apple App Store badges and isometric dual phone mockup.

9. **Section 7: Still have questions?**
   - Gradient support card with *Talk to Counselor* and *WhatsApp Support* actions.

10. **Section 8 & Footer**
    - Pre-footer fast action bar (*For Students*, *For Colleges*, *For Recruiters*).
    - Multi-column footer: Student links, College links, Recruiter links, Legal & Policies, contact info, and social icons.

---

## 📱 Mobile & Desktop Responsiveness

- Fully responsive layouts using Tailwind CSS breakpoints (`sm`, `md`, `lg`, `xl`).
- Grid flows gracefully adapt from multi-column desktop layouts to single-column mobile views.
- Touch-friendly tap targets and mobile drawer navigation.

---

## 🛠️ Tech Stack

- **React 18 / Vite 8** (Fast HMR, modern ES modules)
- **JavaScript (ES6+)**
- **Tailwind CSS v4** (Utility-first styling with modern CSS variables)
- **Lucide Icons** (Clean, accessible SVG iconography)
