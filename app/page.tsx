'use client';
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Twitter, DiscIcon as Discord, ShoppingCart } from "lucide-react"
import NavLink from "./components/NavLink"
import { useEffect, useState } from 'react';
import StatsSection from './components/StatsSection';

export default function Home() {
  const [stats, setStats] = useState({
    volume: 'XXX,XXX',
    floorPrice: 'XX',
    holders: 'X,XXX'
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats');
        const data = await response.json();
        setStats({
          volume: data.volume,
          floorPrice: data.floorPrice,
          holders: data.holders
        });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-navy-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-navy-950/80 backdrop-blur-sm border-b border-navy-800">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mooz-logosmall-oEPHyooPOqztDVkb2fJKVTmll93Fqw.png"
              alt="MOOZ Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {[
              { href: "#about", label: "About" },
              { href: "#collection", label: "Collection" },
              { href: "#StatsSection", label: "Stats" },
              { 
                href: "#", 
                label: (
                  <span className="flex items-center">
                    Staking
                    <span className="ml-2 px-2 py-0.5 bg-secondary/20 text-secondary text-xs rounded-full animate-pulse">
                      Soon
                    </span>
                  </span>
                ) 
              },
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
          <div className="flex items-center gap-4">
            <Link href="https://x.com/MoozNft" target="_empty" aria-label="Twitter">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white hover:text-secondary hover:bg-navy-800"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://discord.com/invite/WWBJYYkYt2" target="_blank" aria-label="Discord">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white hover:text-secondary hover:bg-navy-800"
              >
                <Discord className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[url('https://www.subber.xyz/_next/image?url=https%3A%2F%2Feemrlvzcxfcudiminbgx.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2Fcover-images%2F33c6b205e0d2.webp&w=1920&q=75')] bg-cover bg-center opacity-10" />
          <div className="container relative z-10 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Welcome to the MOOZ farm</h1>
            <p className="text-xl md:text-2xl text-navy-300 max-w-3xl mb-10">
              Collect unique digital MOOZ cows and build your virtual farm in the blockchain
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://magiceden.io/collections/sei/0xce0fee0ac17f37cd66642f0ec8a4675ae7f590dd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-me hover:opacity-90 text-white text-lg px-8 py-6">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy on Marketplace
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Featured NFTs */}
        <section id="collection" className="py-20 bg-navy-900">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">Featured Cows 1/1</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="bg-navy-800 rounded-xl overflow-hidden border border-navy-700 transition-transform hover:scale-105"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={`https://bafybeig4twxfk6l3yuc6ec7jf3ekxgsbe6mwkonjgawbulfankanjueuoq.ipfs.w3s.link/${i}.png`}
                      alt={`Cow NFT #${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white">1/1 MOOZ #{i + 1}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* StatsSection */}
        <section id="StatsSection">
  <StatsSection />
</section>

        {/* About Section */}
        <section id="about" className="py-20 bg-navy-950">
  <div className="container">
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">About MOOZ Cows</h2>
        <p className="text-navy-300 mb-4 leading-relaxed text-justify">
          Mooz is a hydropunk adventure-fantasy project that merges storytelling, gaming, and digital collectibles into a thriving, milk-powered world. Set in the Kingdom of Moovia, a once great civilization now rebuilding from its past, Mooz explores a society shaped by milk energy, innovation, and the mysteries of the Storm Veil.
        </p>
        <p className="text-navy-300 mb-4 leading-relaxed text-justify">
          At its heart, Mooz is a community-driven experience, offering immersive lore, interactive quests, and a collection of uniquely designed Mooz anthropomorphic bovine adventurers with their own histories, factions, and ambitions. Whether through NFTs, games, or digital media, Mooz invites you to step into a world where exploration, invention, and camaraderie define the future.
        </p>
        <p className="text-navy-300 mb-6 leading-relaxed text-justify">
          Join the Herd and become part of Moovia's unfolding story where your choices help shape the legend.
        </p>
        <div className="flex gap-4">
          <Button className="bg-gradient-me hover:opacity-90 text-white">
            <Discord className="mr-2 h-4 w-4" />
            Join Community
          </Button>
        </div>
      </div>
      <div className="relative h-[400px] rounded-xl overflow-hidden">
        <Image
          src="https://pbs.twimg.com/media/Gf0Lcl5WIAAxUDX?format=jpg&name=large"
          alt="About MOOZ Cows"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
</section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-20 bg-navy-900">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">Roadmap</h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-navy-800"></div>

              {/* Roadmap items */}
              <div className="space-y-12">
                {[
                  {
                    phase: "Phase 1",
                    title: "Launch",
                    description: "Initial mint of 3,333 cows and community building",
                  },
                  {
                    phase: "Phase 2",
                    title: "Farm Expansion",
                    description: "Launch of farm land NFTs and staking mechanics",
                  },
                  {
                    phase: "Phase 3",
                    title: "Breeding",
                    description: "Introduce cow breeding mechanics to create new unique cows",
                  },
                  {
                    phase: "Phase 4",
                    title: "Metaverse Integration",
                    description: "MOOZ Cows enter the metaverse with 3D models",
                  },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`w-1/2 ${i % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                      <span className="inline-block px-3 py-1 bg-navy-800 text-secondary rounded-full text-sm font-medium mb-2">
                        {item.phase}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-navy-300">{item.description}</p>
                    </div>
                    <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-me border-4 border-navy-950">
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-navy-950">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">Meet the Farmers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "misios",
                  role: "Founder & Dev",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.png-oyX0FsssCku8eHEzUgFyJDQ8i9sseP.jpeg",
                  twitter: "https://x.com/d_misios",
                },
                {
                  name: "PsEyecho",
                  role: "Founder",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0.png-Pa4brC5MCbn1H7MVqa2jjBHClOq51y.jpeg",
                  twitter: "https://x.com/GUTTERSWOLE",
                },
                {
                  name: "b1337n",
                  role: "Founder-Collabs",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.png-58XRM1nfLHZ6Cw48nq9Ec6FbpDt1IT.jpeg",
                  twitter: "https://x.com/BenSEI_1337",
                },
              ].map((member, i) => (
                <div
                  key={i}
                  className="bg-navy-900 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={member.image || "/placeholder.svg?height=300&width=300"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-navy-300 mb-4">{member.role}</p>
                    <div className="flex justify-center gap-4">
                      {member.twitter && (
                        <Link href={member.twitter} target="_blank" aria-label={`${member.name}'s Twitter`}>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full text-navy-300 hover:text-secondary hover:bg-navy-800"
                          >
                            <Twitter className="h-5 w-5" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-navy-900">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "What blockchain are MOOZ Cows on?",
                  answer: "MOOZ Cows are on the SEI blockchain, providing fast transactions and low gas fees.",
                },
                {
                  question: "How many cows are in the collection?",
                  answer: "There are a total of 3333 unique MOOZ Cows in the collection.",
                },
                {
                  question: "How do I purchase a MOOZ Cow?",
                  answer:
                    "The collection is already fully minted. You can purchase MOOZ Cows on Magic Eden marketplace.",
                },
                {
                  question: "What are the benefits of owning a MOOZ Cow?",
                  answer:
                    "Owners get access to exclusive community events, future airdrops, and will be able to participate in the breeding and farming mechanics.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-navy-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{faq.question}</h3>
                  <p className="text-navy-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-me">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Join the Farm?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-10 text-white/90">
              Don't miss your chance to own a unique MOOZ Cow and become part of our growing community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://magiceden.io/collections/sei/0xce0fee0ac17f37cd66642f0ec8a4675ae7f590dd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-navy-950 text-white hover:bg-navy-900 text-lg px-8 py-6">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy on Marketplace
                </Button>
              </a>
              <a href="https://discord.com/invite/WWBJYYkYt2" target="_blank" rel="noopener noreferrer">
                <Button className="bg-navy-950 text-white hover:bg-navy-900 text-lg px-8 py-6">
                  <Discord className="mr-2 h-5 w-5" />
                  Join Discord
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Marketplace Section */}
        <section id="marketplace" className="py-20 bg-navy-950">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">Where to Buy</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="https://i.ibb.co/KpYqRfGY/photo-2025-02-27-01-24-39.jpg"
                  alt="NFT Marketplace"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Available on Magic Eden</h3>
                <p className="text-navy-300 mb-4">
                  MOOZ Cows are fully minted and can be purchased exclusively on Magic Eden marketplace:
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-4 text-navy-300">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-4yhShGGFAZy4QyqhMNailQFMLfDXEg.webp"
                      alt="Magic Eden"
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                    <span>Magic Eden SEI Marketplace</span>
                  </li>
                </ul>
                <a
                  href="https://magiceden.io/collections/sei/0xce0fee0ac17f37cd66642f0ec8a4675ae7f590dd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-me hover:opacity-90 text-white">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    View Listings
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

