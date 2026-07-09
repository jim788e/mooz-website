# MOOZ Collection Website

A modern web application for the MOOZ NFT Collection on the SEI blockchain, built with Next.js 15 and TailwindCSS.

🌐 **Official Website**: [https://www.mooz.top](https://www.mooz.top)

## 🌟 Features

- Built with Next.js 15 App Router
- Responsive design optimized for all devices
- Real-time NFT statistics via Magic Eden API
- Interactive UI components with shadcn/ui
- SEI blockchain integration
- Magic Eden marketplace integration
- Social media integration
- Live market analytics including floor price, volume, and holder statistics
- Optimized local image delivery
- Modern image formats support (AVIF, WebP)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- A Magic Eden API key (required for real-time NFT statistics)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jim788e/mooz-website.git
cd mooz-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit `.env` and add your Magic Eden API key.

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Magic Eden API](https://api.magiceden.dev/) - NFT marketplace integration
- [Vercel Analytics](https://vercel.com/analytics) - Performance monitoring

## 📁 Project Structure

```
mooz-website/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── components/        # React components
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                # Static assets
│   └── images/           # Optimized local images
│       ├── about/        # About section images
│       ├── bg/           # Background images
│       ├── cows/         # NFT collection images
│       ├── logo/         # Logo assets
│       ├── marketplace/  # Marketplace assets
│       └── team/         # Team member images
└── lib/                  # Utility functions
```

## 🔒 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
MAGIC_EDEN_API_KEY=your_api_key_here
```

⚠️ Never commit your `.env` file to version control!

## 🚀 Deployment

This project is optimized for deployment on Vercel:

```bash
npm run build   # Build the project
npm run start   # Start production server
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- MOOZ Collection Team
- SEI Blockchain Community
- Magic Eden Marketplace
