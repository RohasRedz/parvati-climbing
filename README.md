# Parvati Climbing Foundation

A Next.js web application for the Parvati Climbing NGO, empowering communities through climbing in the Himalayas.

## Features

- 🏔️ **Climbing-focused Design** - Custom animations and mountain-themed visuals
- 📱 **Responsive Layout** - Works seamlessly across all devices
- 🎬 **Parallax Scrolling** - Smooth scrolling effects with reduced motion support
- 📸 **Instagram Integration** - Real Instagram post embeds using official API
- ♿ **Accessibility First** - WCAG compliant with keyboard navigation
- ⚡ **Performance Optimized** - Fast loading with Next.js optimization
- 🎨 **Custom Animations** - GSAP and Anime.js powered interactions

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
```bash
# Create environment file
npm run env:create

# Edit .env.local with your actual values
# See docs/ENVIRONMENT_SETUP.md for detailed instructions
```

### 3. Start Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## Environment Configuration

This application uses environment variables for easy content management:

### Quick Setup
```bash
# Create .env.local file
npm run env:create

# Validate your configuration
npm run env:validate

# Get help with environment setup
npm run env:help
```

### Key Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_INSTAGRAM_POSTS` | Comma-separated Instagram URLs | ✅ |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email address | ✅ |
| `NEXT_PUBLIC_GOFUNDME_URL` | GoFundMe donation link | ✅ |

### Example Configuration
```env
NEXT_PUBLIC_INSTAGRAM_POSTS="https://www.instagram.com/reel/DO9BuaBkt1u/,https://www.instagram.com/reel/DK9dhBUy4L0/"
NEXT_PUBLIC_CONTACT_EMAIL="info@parvaticlimbing.org"
NEXT_PUBLIC_GOFUNDME_URL="https://gofundme.com/parvati-climbing"
```

📖 **For detailed setup instructions, see [docs/ENVIRONMENT_SETUP.md](docs/ENVIRONMENT_SETUP.md)**

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run env:create` | Create .env.local file |
| `npm run env:validate` | Validate environment setup |
| `npm run env:help` | Get environment help |

## Project Structure

```
parvati-next/
├── components/          # React components
│   ├── Hero.js         # Hero section with parallax
│   ├── InstagramEmbedPost.js  # Instagram embed component
│   └── ...
├── lib/                # Utilities and configuration
│   ├── config/         # Environment configuration
│   └── ...
├── pages/              # Next.js pages
├── styles/             # Global CSS styles
├── hooks/              # Custom React hooks
├── docs/               # Documentation
└── scripts/            # Utility scripts
```

## Key Features

### Instagram Integration
- Real Instagram post embeds using official Instagram embed script
- Configurable via environment variables
- Supports both posts and reels
- Responsive carousel display

### Parallax Scrolling
- Smooth parallax effects using GSAP ScrollTrigger
- Respects `prefers-reduced-motion` for accessibility
- Performance optimized with `will-change` and `backface-visibility`

### Environment-Driven Content
- All content configurable via environment variables
- Easy to update Instagram posts, contact info, and links
- CMS-ready architecture for future expansion

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
1. Build the application: `npm run build`
2. Set environment variables in your hosting platform
3. Deploy the `out` directory

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For questions about environment setup, see [docs/ENVIRONMENT_SETUP.md](docs/ENVIRONMENT_SETUP.md)

For other issues, please open a GitHub issue.

---

**Built with ❤️ for the Parvati Climbing Foundation**
