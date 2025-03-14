# MOOZ Collection Website

A modern web application for the MOOZ NFT Collection on the SEI blockchain, built with Next.js and TailwindCSS.

🌐 **Official Website**: [https://www.mooz.farm](https://www.mooz.farm)

## 🌟 Features

- Responsive design optimized for all devices
- Real-time NFT statistics via Magic Eden API
- Interactive UI components
- SEI blockchain integration
- Magic Eden marketplace integration
- Social media integration
- Live market analytics including floor price, volume, and holder statistics

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn
- A Magic Eden API key (required for real-time NFT statistics)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mooz-website.git
cd mooz-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit `.env` and add your Magic Eden API key and NFT contract address.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Magic Eden API](https://api.magiceden.dev/) - NFT marketplace integration and real-time statistics

## 📁 Project Structure

```
mooz-website/
├── app/              # Next.js app directory
├── components/       # React components
├── lib/             # Utility functions
├── public/          # Static assets
└── styles/          # Global styles
```

## 🔒 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
MAGIC_EDEN_API_KEY=your_api_key_here
NEXT_PUBLIC_NFT_CONTRACT_ADDRESS=your_contract_address_here
```

⚠️ Never commit your `.env` file to version control!

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
