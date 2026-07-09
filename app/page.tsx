'use client';
import Image from "next/image"
import Link from "next/link"
import { Button } from "./components/ui/button"
import { ShoppingCart, ArrowRight, Sparkles, Menu, X, Twitter, DiscIcon as Discord, ChevronDown, HelpCircle, ArrowRightCircle, Coins, MessageCircle, Rocket, Wrench, Database, ExternalLink } from "lucide-react"
import NavLink from "./components/NavLink"
import { useState, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [openMigrationIndex, setOpenMigrationIndex] = useState<number | null>(null);

  useGSAP(() => {
    // 1. Hero Load & Parallax Animations
    gsap.from('.hero-bg', {
      scale: 1.15,
      opacity: 0,
      duration: 1.8,
      ease: 'power2.out',
    });

    gsap.from('.hero-word', {
      y: '120%',
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: 'power4.out',
    });

    gsap.from('.hero-text', {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      ease: 'power3.out',
    });

    gsap.from('.hero-cta', {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      delay: 0.9,
      ease: 'back.out(1.7)',
    });

    gsap.to('.hero-bg', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: 120,
      ease: 'none',
    });

    // 2. Marketplace Section ScrollTrigger
    gsap.from('.marketplace-header', {
      scrollTrigger: {
        trigger: '.marketplace-header',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
    });

    gsap.from('.marketplace-tracker', {
      scrollTrigger: {
        trigger: '#marketplace',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    });

    gsap.from('.marketplace-opensea', {
      scrollTrigger: {
        trigger: '#marketplace',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      x: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    });

    // 3. Cool Cows Lab Section ScrollTrigger
    gsap.from('.lab-badge, .lab-header, .lab-desc', {
      scrollTrigger: {
        trigger: '#lab',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
    });

    gsap.from('.lab-card', {
      scrollTrigger: {
        trigger: '#lab',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });

    gsap.from('.lab-cta', {
      scrollTrigger: {
        trigger: '.lab-cta',
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
    });

    // 4. About Section ScrollTrigger
    gsap.from('.about-content-item', {
      scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
    });

    gsap.from('.about-image', {
      scrollTrigger: {
        trigger: '.about-image',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      scale: 0.95,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });

    // 5. Roadmap Timeline Drawing & Staggered Items
    gsap.to('.roadmap-progress-line', {
      scrollTrigger: {
        trigger: '#roadmap',
        start: 'top 50%',
        end: 'bottom 80%',
        scrub: true,
      },
      scaleY: 1,
      ease: 'none',
    });

    gsap.utils.toArray<HTMLElement>('.roadmap-node').forEach((node) => {
      gsap.from(node, {
        scrollTrigger: {
          trigger: node,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        scale: 0,
        duration: 0.6,
        ease: 'back.out(2)',
      });
    });

    gsap.utils.toArray<HTMLElement>('.roadmap-item').forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    });

    // 6. Team Cards ScrollTrigger
    gsap.from('.team-header', {
      scrollTrigger: {
        trigger: '#team',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
    });

    gsap.from('.team-card', {
      scrollTrigger: {
        trigger: '#team',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    });

    // 3D Card Flip on Hover
    gsap.utils.toArray<HTMLElement>('.team-card').forEach((wrapper) => {
      const inner = wrapper.querySelector('.team-card-inner');
      const back = wrapper.querySelector('.team-card-back');
      
      if (!inner || !back) return;

      // Set back face initial rotation
      gsap.set(back, { rotateY: 180 });

      let flipTween: gsap.core.Tween;

      wrapper.addEventListener('mouseenter', () => {
        if (flipTween) flipTween.kill();
        flipTween = gsap.to(inner, {
          rotateY: 180,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.4, // Small delay before flip
        });
      });

      wrapper.addEventListener('mouseleave', () => {
        if (flipTween) flipTween.kill();
        flipTween = gsap.to(inner, {
          rotateY: 0,
          duration: 0.6,
          ease: 'power2.out',
        });
      });
    });

    // 7. FAQ Section ScrollTrigger
    gsap.from('.faq-header', {
      scrollTrigger: {
        trigger: '.faq-header',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
    });

    gsap.from('.faq-category', {
      scrollTrigger: {
        trigger: '.faq-header',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
    });

    // Refresh triggers to adjust for image size layout shifts
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', handleLoad);
    const timer = setTimeout(() => ScrollTrigger.refresh(), 1000);
    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, { scope: mainRef });

  return (
    <div ref={mainRef} className="flex flex-col min-h-screen bg-navy-950">
      {/* ETH Migration Complete Banner */}
      <a
        href="https://x.com/CoolCowsLab/status/2069725634658509222?s=20"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-50 w-full bg-gradient-to-r from-secondary/20 via-secondary/30 to-secondary/20 border-b border-secondary/30 hover:from-secondary/30 hover:via-secondary/40 hover:to-secondary/30 transition-all duration-300 group"
      >
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex items-center justify-center gap-3 text-sm md:text-base">
            <Sparkles className="h-4 w-4 text-secondary animate-pulse" />
            <span className="text-white font-medium">
              <span className="text-secondary font-bold">MOOZ Migration is Complete!</span>
              <span className="text-navy-200 ml-2">Locked at 1,700 supply on Ethereum. Cool Cows Lab is ready on Sei!</span>
            </span>
            <ArrowRight className="h-4 w-4 text-secondary group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-navy-950/80 backdrop-blur-sm border-b border-navy-800">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo/logo.png"
              alt="MOOZ Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          
          {/* Desktop Navigation - Top Right */}
          <nav className="hidden md:flex items-center gap-6">
            {[
              { href: "#about", label: "About" },
              { href: "#lab", label: "Cool Cows Lab" },
              { href: "#roadmap", label: "Roadmap" },
              { href: "#team", label: "Team" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-secondary transition-colors"
              >
                {typeof link.label === 'string' ? link.label : link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-navy-800 bg-navy-950/95 backdrop-blur-sm">
            <nav className="container py-4 flex flex-col gap-4">
              {[
                { href: "#about", label: "About" },
                { href: "#lab", label: "Cool Cows Lab" },
                { href: "#roadmap", label: "Roadmap" },
                { href: "#team", label: "Team" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-secondary transition-colors py-2 text-lg"
                >
                  {typeof link.label === 'string' ? link.label : link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden hero-section">
          <div className="absolute inset-0 z-0 hero-bg">
            <Image
              src="/images/bg/hero-bg.avif"
              alt="Hero Background"
              fill
              priority
              className="object-cover opacity-10"
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 hero-title flex flex-wrap justify-center gap-x-3 gap-y-1">
              {"Welcome to the MOOZ farm".split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-hidden pb-1">
                  <span className="hero-word inline-block">{word}</span>
                </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-navy-300 max-w-3xl mb-10 hero-text">
              Collect unique digital MOOZ cows on Ethereum. MOOZ has successfully migrated to Ethereum with a final locked supply of 1,700 NFTs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 hero-cta">
              <a
                href="https://opensea.io/collection/mooznfts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-opensea hover:opacity-90 text-white text-lg px-8 py-6">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy on OpenSea
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Marketplace & Sales Tracker Section */}
        <section id="marketplace" className="py-20 bg-navy-950">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12 marketplace-header">Marketplace & Sales</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Sales Tracker Column */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left marketplace-tracker"> {/* Added flex, items-center, md:items-start, text-center, md:text-left */}
                <h3 className="text-2xl font-bold text-white mb-6">Track MOOZ Sales on X</h3>
                <div className="relative h-[300px] w-full max-w-sm rounded-xl overflow-hidden mb-6"> {/* Added w-full max-w-sm for better image sizing */}
                  <Image
                    src="/images/sales/sales.jpg"
                    alt="MOOZ Sales Tracker Announcement"
                    fill
                    className="object-contain" /* Use object-contain to show the whole image */
                  />
                </div>
                <p className="text-navy-300 mb-4">
                  Follow our dedicated X account for real-time updates on MOOZ sales activity!
                </p>
                <a
                  href="https://x.com/MOOZSALES"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="text-white border-navy-700 hover:bg-navy-800">
                    <Twitter className="mr-2 h-4 w-4" />
                    Follow @MOOZSALES
                  </Button>
                </a>
              </div>
              {/* OpenSea Column with Background */}
              <div className="relative flex flex-col items-center md:items-start text-center md:text-left p-8 rounded-xl overflow-hidden bg-cover bg-center bg-[url('/images/marketplace/opensea-preview.png')] marketplace-opensea">
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-navy-950/70 z-0 rounded-xl"></div>
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center md:items-start w-full">
                  <Image
                      src="/images/marketplace/opensea.svg"
                      alt="OpenSea Logo"
                      width={60}
                      height={60}
                      className="mb-4"
                    />
                <h3 className="text-2xl font-bold text-white mb-4">Available on OpenSea</h3>
                <p className="text-navy-300 mb-6">
                  Purchase MOOZ Cows on the official secondary marketplace.
                </p>
                <a
                  href="https://opensea.io/collection/mooznfts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-opensea hover:opacity-90 text-white">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    View Listings
                  </Button>
                </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cool Cows Lab Section */}
        <section id="lab" className="relative py-20 overflow-hidden bg-navy-900/40">
          {/* Decorative background glows */}
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-opensea rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-me rounded-full blur-3xl"></div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-opensea/10 border border-gradient-opensea/20 text-secondary text-sm font-semibold mb-4 animate-glow lab-badge">
                <Sparkles className="h-4 w-4 text-secondary" />
                The Next Chapter
              </span>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 lab-header">
                Cool Cows Lab is Ready 🧪
              </h2>
              <p className="text-xl text-navy-300 max-w-2xl mx-auto lab-desc">
                THE CYCLE IS HERE. We've built an unbreakable foundation through the bear market and are ready to dominate this cycle on Sei.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {/* Card 1: The Launchpad */}
              <div className="lab-card">
                <div className="group relative bg-navy-900/60 backdrop-blur-sm rounded-2xl p-8 border border-navy-800 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_10px_30px_rgba(255,153,51,0.1)] h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-opensea/10 flex items-center justify-center border border-gradient-opensea/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">The Launchpad</h3>
                  <p className="text-navy-300 leading-relaxed">
                    Our tech is battle-tested and ready to incubate the next tier of Web3 projects. Providing secure infrastructure and support to bring top-tier collections to life on Sei.
                  </p>
                </div>
              </div>

              {/* Card 2: The Tools */}
              <div className="lab-card">
                <div className="group relative bg-navy-900/60 backdrop-blur-sm rounded-2xl p-8 border border-navy-800 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_10px_30px_rgba(255,153,51,0.1)] h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-opensea/10 flex items-center justify-center border border-gradient-opensea/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Wrench className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">The Tools</h3>
                  <p className="text-navy-300 leading-relaxed">
                    No more guessing in the trenches. Our custom analytics and management utilities are dialed in to give the herd the exact edge needed to win this bull cycle.
                  </p>
                </div>
              </div>

              {/* Card 3: The Vaults */}
              <div className="lab-card">
                <div className="group relative bg-navy-900/60 backdrop-blur-sm rounded-2xl p-8 border border-navy-800 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_10px_30px_rgba(255,153,51,0.1)] h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-opensea/10 flex items-center justify-center border border-gradient-opensea/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Database className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">The Vaults</h3>
                  <p className="text-navy-300 leading-relaxed">
                    The heartbeat of our ecosystem. Staking, rewards, and the true utility of the $MOOZ token are ready to run at full speed as part of our core launchpad hub.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lab-cta">
              <a
                href="https://x.com/MoozNft/status/2004636909180755982?s=20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-opensea hover:opacity-90 text-white text-lg px-8 py-6 rounded-xl font-medium">
                  Read the Announcement
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-navy-950">
  <div className="container">
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6 about-content-item">About MOOZ Cows</h2>
        <p className="text-navy-300 mb-4 leading-relaxed text-justify about-content-item">
          Mooz is a hydropunk adventure-fantasy project that merges storytelling, gaming, and digital collectibles into a thriving, milk-powered world. Set in the Kingdom of Moovia, a once great civilization now rebuilding from its past, Mooz explores a society shaped by milk energy, innovation, and the mysteries of the Storm Veil.
        </p>
        <p className="text-navy-300 mb-4 leading-relaxed text-justify about-content-item">
          At its heart, Mooz is a community-driven experience, offering immersive lore, interactive quests, and a collection of uniquely designed Mooz anthropomorphic bovine adventurers with their own histories, factions, and ambitions. Whether through NFTs, games, or digital media, Mooz invites you to step into a world where exploration, invention, and camaraderie define the future.
        </p>
        <p className="text-navy-300 mb-6 leading-relaxed text-justify about-content-item">
          Join the Herd and become part of Moovia's unfolding story where your choices help shape the legend.
        </p>
        <div className="flex gap-4 about-content-item">
          <a href="https://discord.com/invite/WWBJYYkYt2" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-me hover:opacity-90 text-white">
              <Discord className="mr-2 h-4 w-4" />
              Join Community
            </Button>
          </a>
        </div>
      </div>
      <div className="w-full min-h-[300px] md:h-[400px] relative rounded-xl overflow-hidden about-image">
        <Image
          src="/images/about/about-preview.jpg"
          alt="About MOOZ Cows"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          className="object-cover"
        />
      </div>
    </div>
  </div>
</section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-20 bg-navy-900">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12 roadmap-header">Mooz Roadmap 1.2</h2>
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-navy-800 origin-top overflow-hidden">
                <div className="roadmap-progress-line w-full h-full bg-gradient-to-b from-[#FF3366] via-secondary to-[#FF9933] origin-top scale-y-0"></div>
              </div>

              {/* Roadmap items */}
              <div className="space-y-12">
                {[
                  {
                    phase: "✅ 10%",
                    title: "Paying Back Our Moms",
                    description: "Our OG backers were the ones who made this possible. Mission accomplished! (Shoutout to Gordo & Garga for the reminder back in '21).",
                  },
                  {
                    phase: "✅ 20%",
                    title: "Pasture of Renewal Opens",
                    description: "The V1 to V2 transition is complete! The Pasture of Renewal allowed Cool Cows to evolve into MOOZ and their new forms, unlocking fresh designs and perks.",
                  },
                  {
                    phase: "✅ 30%",
                    title: "Herd Radio: Your Soundtrack to Adventure",
                    description: "The airwaves of Moo-via are alive! Herd Radio is now streaming, bringing music, lore, and community-driven content to every adventurer.",
                  },
                  {
                    phase: "🔄 40%",
                    title: "The Quest Begins – Find the Rare Ones",
                    description: "The hunt for legendary 1:1 MOOZ is coming soon! Hidden treasures await those who decipher the clues scattered across Moo-via Commons.",
                  },
                  {
                    phase: "🔄 50%",
                    title: "Moo-via Commons Unveiling",
                    description: "The history of Moo-via is being revealed one page at a time! A new page drops every week, unraveling the founding of the kingdom.",
                  },
                  {
                    phase: "🔜 60%",
                    title: "Noggles Pasture – Where Legends Graze",
                    description: "A special sanctuary for cows with Nouns-inspired traits is opening soon! Exclusive perks await, because being legendary has its benefits.",
                  },
                  {
                    phase: "✅ 80%",
                    title: "Vaults & Staking Relocation",
                    description: "Staking on SEI is now decommissioned. Vaults are being relocated and relaunched soon on Ethereum for $MOOZ staking and utilities.",
                  },
                  {
                    phase: "✅ 90%",
                    title: "Paying Our Starving Artists",
                    description: "The MOOZ art team (looking at you, @FastFrogStudio) is finally getting their due! No more exposure payments—only well-earned rewards. Mission accomplished!",
                  },
                  {
                    phase: "🎉 BONUS",
                    title: "The Creation of @HighlanderDAO",
                    description: "One of the coolest things about MOOZ family is seeing community-led initiatives thrive! This grassroots effort by passionate holders is a great example of how the MOOZ ecosystem grows organically. HighlanderDAO empowers the community with governance rights and collaborative decision-making, showcasing the decentralized spirit of the MOOZ family.",
                  },
                  {
                    phase: "✅ 100%",
                    title: "Migration Complete",
                    description: "The SEI chapter is closed, and the migration to Ethereum is officially complete. Unmigrated NFTs have been removed, locking the final total supply permanently at 1,700 NFTs on Ethereum.",
                  },
                  {
                    phase: "🚀 NEXT PHASE",
                    title: "Cool Cows Lab Launch",
                    description: "Relaunching staking and tools on Sei as our launchpad, custom analytics, and developer hub. Stay tuned for the Cool Cows Lab updates!",
                  },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row roadmap-item`}>
                    <div className={`w-full md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:pr-12 md:text-right text-left pl-12" : "md:pl-12 pl-12"}`}>
                      <span className="inline-block px-3 py-1 bg-navy-800 text-secondary rounded-full text-sm font-medium mb-2">
                        {item.phase}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-navy-300">{item.description}</p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-1 roadmap-node">
                      <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-me border-4 border-navy-950">
                        <span className="text-white font-bold">{i + 1}</span>
                      </div>
                    </div>
                    <div className="hidden md:block w-[calc(50%-2.5rem)]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-navy-950 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-me rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="text-center mb-16 team-header">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Meet the Farmers</h2>
              <p className="text-navy-300 text-lg max-w-2xl mx-auto">
                The passionate team building the MOOZ ecosystem
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "misios",
                  role: "Founder & Dev",
                  image: "/images/team/misios.jpeg",
                  twitter: "https://x.com/d_misios",
                },
                {
                  name: "b1337n",
                  role: "Founder-Collabs",
                  image: "/images/team/b1337n.jpeg",
                  twitter: "https://x.com/BenSEI_1337",
                },
              ].map((member, i) => (
                <div key={i} className="team-card h-[460px] sm:h-[520px] md:h-[480px] lg:h-[520px] w-full perspective-1000">
                  <div className="team-card-inner relative w-full h-full cursor-pointer style-3d shadow-2xl rounded-2xl">
                    {/* FRONT */}
                    <div className="team-card-front absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl overflow-hidden border border-navy-700/50 flex flex-col justify-between">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/10 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
                      
                      <div className="relative aspect-square overflow-hidden flex-shrink-0">
                        <Image
                          src={member.image}
                          alt={`${member.name}'s profile picture`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                      </div>
                      
                      <div className="p-6 text-center relative flex-1 flex flex-col justify-center">
                        <div className="mb-2">
                          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-secondary transition-colors">
                            {member.name}
                          </h3>
                          <div className="inline-block px-4 py-1.5 bg-navy-800/50 rounded-full border border-navy-700/50">
                            <p className="text-navy-300 text-sm font-medium">{member.role}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-secondary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* BACK */}
                    <div className="team-card-back absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-navy-950 to-navy-900 rounded-2xl border border-secondary/50 flex flex-col items-center justify-center p-8 text-center bg-[url('/images/bg/hero-bg.avif')] bg-cover bg-center overflow-hidden">
                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-navy-950/90 z-0"></div>
                      
                      <div className="relative z-10 flex flex-col items-center justify-center h-full">
                        <div className="w-16 h-16 bg-secondary/10 border border-secondary/30 rounded-full flex items-center justify-center mb-6">
                          <Twitter className="h-8 w-8 text-secondary" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Connect with {member.name}</h4>
                        <p className="text-navy-300 mb-6 text-sm">
                          Follow on X to stay updated with Cool Cows Lab and the MOOZ farm.
                        </p>
                        {member.twitter && (
                          <Link 
                            href={member.twitter} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <Button className="bg-gradient-opensea hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2">
                              <Twitter className="h-4 w-4" />
                              Follow @{member.twitter.split('/').pop()}
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-navy-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-me rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="text-center mb-16 faq-header">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-navy-300 text-lg max-w-2xl mx-auto">
                Everything you need to know about MOOZ and the migration to Ethereum
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
              {/* Migration FAQ Section */}
              <div className="faq-category">
                <div className="flex items-center gap-3 mb-6">
                  <ArrowRightCircle className="h-6 w-6 text-secondary" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Migration to Ethereum</h3>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      category: "General",
                      icon: HelpCircle,
                      questions: [
                        {
                          q: "What happened to the migration?",
                          a: "The migration of MOOZ from SEI to Ethereum is officially complete. The SEI collection is fully decommissioned, all migration tickets are closed, and unmigrated NFTs have been absorbed and removed from the collection."
                        },
                        {
                          q: "What blockchain is MOOZ currently on?",
                          a: "MOOZ now officially lives on Ethereum as our flagship collection. You can purchase MOOZ Cows on OpenSea."
                        },
                        {
                          q: "What is the final total supply of MOOZ?",
                          a: "The final supply of MOOZ on Ethereum has been permanently locked at 1,700 NFTs. To celebrate this milestone, 30 exclusive MOOZ NFTs were minted and airdropped to random ETH holders."
                        }
                      ]
                    },
                    {
                      category: "Cool Cows Lab & Sei Ecosystem",
                      icon: ArrowRightCircle,
                      questions: [
                        {
                          q: "What is Cool Cows Lab?",
                          a: "Cool Cows Lab is our tools and launchpad hub on Sei. It is designed to incubate top-tier Web3 projects, provide custom analytics/management utilities, and serve as the developer center of our ecosystem."
                        },
                        {
                          q: "Will I still earn $MOOZ rewards?",
                          a: "Yes! While staking on SEI has decommissioned, Vaults, staking, and management tools are relaunching soon on Sei under the Cool Cows Lab ecosystem, powering $MOOZ token utilities."
                        }
                      ]
                    },
                    {
                      category: "Troubleshooting and Support",
                      icon: MessageCircle,
                      questions: [
                        {
                          q: "How can I stay updated on Cool Cows Lab and MOOZ roadmap?",
                          a: "Follow our official Twitter account @MoozNft and join our Discord community. We will be sharing details on our next roadmap chapter and tool suite soon."
                        }
                      ]
                    }
                  ].map((category, catIndex) => (
                    <div key={catIndex} className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <category.icon className="h-5 w-5 text-secondary" />
                        <h4 className="text-lg font-semibold text-secondary">{category.category}</h4>
                      </div>
                      <div className="space-y-3">
                        {category.questions.map((item, qIndex) => {
                          const index = catIndex * 10 + qIndex;
                          const isOpen = openMigrationIndex === index;
                          return (
                            <div
                              key={qIndex}
                              className="bg-gradient-to-br from-navy-800 to-navy-800/50 rounded-xl border border-navy-700/50 overflow-hidden transition-all duration-300 hover:border-secondary/50"
                            >
                              <button
                                onClick={() => setOpenMigrationIndex(isOpen ? null : index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left group"
                              >
                                <span className="text-white font-semibold pr-4 group-hover:text-secondary transition-colors">
                                  {item.q}
                                </span>
                                <ChevronDown
                                  className={`h-5 w-5 text-navy-400 flex-shrink-0 transition-transform duration-300 ${
                                    isOpen ? 'rotate-180 text-secondary' : ''
                                  }`}
                                />
                              </button>
                              <div
                                className={`overflow-hidden transition-all duration-300 ${
                                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                              >
                                <div className="px-6 pb-4">
                                  <p className="text-navy-300 leading-relaxed">{item.a}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* General FAQ Section */}
              <div className="faq-category">
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="h-6 w-6 text-secondary" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">General Questions</h3>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      question: "What blockchain are MOOZ Cows on?",
                      answer: "MOOZ Cows are on the Ethereum blockchain as our flagship collection. Cool Cows Lab tools and launchpad will reside on the SEI blockchain."
                    },
                    {
                      question: "How many cows are in the collection?",
                      answer: "The final total supply of MOOZ Cows on Ethereum is permanently locked at 1,700 NFTs."
                    },
                    {
                      question: "How do I purchase a MOOZ Cow?",
                      answer: "The collection is already fully minted. You can purchase MOOZ Cows on OpenSea."
                    },
                    {
                      question: "What are the benefits of owning a MOOZ Cow?",
                      answer: "Owners get access to exclusive community events, future airdrops, and benefits within the Cool Cows Lab ecosystem (Launchpad, Tools, and Vaults)."
                    }
                  ].map((faq, i) => {
                    const isOpen = openFaqIndex === i;
                    return (
                      <div
                        key={i}
                        className="bg-gradient-to-br from-navy-800 to-navy-800/50 rounded-xl border border-navy-700/50 overflow-hidden transition-all duration-300 hover:border-secondary/50"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left group"
                        >
                          <span className="text-white font-semibold pr-4 group-hover:text-secondary transition-colors">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`h-5 w-5 text-navy-400 flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? 'rotate-180 text-secondary' : ''
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="px-6 pb-4">
                            <p className="text-navy-300 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#FF3366] to-[#FF9933]">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Join the Farm?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-10 text-white/90">
              Don't miss your chance to own a unique MOOZ Cow and become part of our growing community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://opensea.io/collection/mooznfts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="default"
                  className="!bg-[#020B2D] hover:!bg-[#1A215E] !text-white w-full sm:w-auto text-lg px-8 py-6 rounded-lg font-medium transition-colors"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy on OpenSea
                </Button>
              </a>
              <a 
                href="https://discord.com/invite/WWBJYYkYt2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="default"
                  className="!bg-[#020B2D] hover:!bg-[#1A215E] !text-white w-full sm:w-auto text-lg px-8 py-6 rounded-lg font-medium transition-colors"
                >
                  <Discord className="mr-2 h-5 w-5" />
                  Join Discord
                </Button>
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
