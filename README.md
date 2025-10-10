# Zekal Website

Modern, multilingual static website for Zekal - Platform solutions for industrial parks.

## Features

- 🌍 Multi-language support (Dutch, French, English)
- 🎨 Modern minimalist design with Tailwind CSS
- ⚡ Built with Next.js 15 and React 19
- 📱 Fully responsive
- 🚀 Static export for GitHub Pages hosting

## Products

- **AcceptOr**: Acceptance platform to reduce non-conformities on incoming shipments
- **InspectOr**: Inspection platform for machine and installation maintenance

## Contact Form

The website includes a fully functional contact form that sends submissions directly to your email using [FormSubmit](https://formsubmit.co/).

**Features:**

- No backend required (perfect for static hosting)
- Spam protection with built-in captcha
- Automatic email responses to visitors
- Professional email notifications with table formatting

**To activate the contact form:**

1. Open `components/Contact.tsx`
2. Replace `dummy@email.com` with your actual email address on line 18
3. On the first form submission, FormSubmit will send a confirmation email to verify your email address
4. Click the verification link in that email
5. All future submissions will be sent directly to your inbox!

## Development

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This will generate a static export in the `out` directory.

## Deployment to GitHub Pages

### Initial Setup

1. **Create a GitHub repository** for this project (e.g., `zekal-website`)

2. **Initialize git and push to GitHub**:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/zekal-website.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:

   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Build and deployment", select "GitHub Actions" as the source

4. **Configure your GoDaddy domain**:

   - Log in to your GoDaddy account
   - Go to DNS Management for zekal.eu
   - Add/update the following DNS records:

     ```
     Type: A
     Name: @
     Value: 185.199.108.153
     TTL: 600

     Type: A
     Name: @
     Value: 185.199.109.153
     TTL: 600

     Type: A
     Name: @
     Value: 185.199.110.153
     TTL: 600

     Type: A
     Name: @
     Value: 185.199.111.153
     TTL: 600

     Type: CNAME
     Name: www
     Value: YOUR_USERNAME.github.io
     TTL: 600
     ```

   - Replace `YOUR_USERNAME` with your GitHub username

5. **Verify custom domain in GitHub**:
   - In your repository settings, go to "Pages"
   - Under "Custom domain", enter `zekal.eu`
   - Click "Save"
   - Wait for DNS check to complete (may take a few minutes to 24 hours)
   - Enable "Enforce HTTPS" once DNS is verified

### Automatic Deployment

After the initial setup, the website will automatically deploy to GitHub Pages whenever you push to the `main` branch.

The GitHub Actions workflow will:

1. Install dependencies
2. Build the Next.js app
3. Export static files
4. Deploy to GitHub Pages

## Project Structure

```
zekal-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Products.tsx
│   ├── Reference.tsx
│   ├── Contact.tsx        # Contact form
│   ├── About.tsx
│   └── Footer.tsx
├── lib/                   # Utilities and context
│   ├── LanguageContext.tsx
│   └── translations.ts
├── public/                # Static assets
│   ├── logo.png
│   ├── bruco_logo.jpeg
│   └── CNAME
└── .github/workflows/     # GitHub Actions
    └── deploy.yml
```

## Technologies

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions

## License

© 2025 Zekal. All rights reserved.

**VAT**: BE 1002.570.026
