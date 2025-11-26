'use client';
import Image from "next/image"
import Link from "next/link"
import { Button } from "./components/ui/button"
import { Twitter, DiscIcon as Discord, ShoppingCart, ArrowRight, Sparkles } from "lucide-react"
import NavLink from "./components/NavLink"

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-navy-950">
      {/* ETH Migration Banner */}
      <a
        href="https://x.com/MoozNft/status/1992316014093271447?s=20"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-50 w-full bg-gradient-to-r from-secondary/20 via-secondary/30 to-secondary/20 border-b border-secondary/30 hover:from-secondary/30 hover:via-secondary/40 hover:to-secondary/30 transition-all duration-300 group"
      >
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex items-center justify-center gap-3 text-sm md:text-base">
            <Sparkles className="h-4 w-4 text-secondary animate-pulse" />
            <span className="text-white font-medium">
              <span className="text-secondary font-bold">MOOZ is migrating to Ethereum!</span>
              <span className="text-navy-200 ml-2">Learn more about this exciting expansion</span>
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
          <nav className="hidden md:flex items-center gap-6">
            {[
              { href: "#about", label: "About" },
              { 
                href: "#staking", 
                label: (
                  <span className="glow-text-green relative inline-block">
                    Staking
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
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/bg/hero-bg.avif"
              alt="Hero Background"
              fill
              priority
              className="object-cover opacity-10"
            />
          </div>
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

        {/* Marketplace & Sales Tracker Section */}
        <section id="marketplace" className="py-20 bg-navy-950">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">Marketplace & Sales</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Sales Tracker Column */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left"> {/* Added flex, items-center, md:items-start, text-center, md:text-left */}
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
              {/* Magic Eden Column (Simplified) with Background */}
              <div className="relative flex flex-col items-center md:items-start text-center md:text-left p-8 rounded-xl overflow-hidden bg-cover bg-center bg-[url('/images/marketplace/marketplace-preview.jpg')]">
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-navy-950/70 z-0 rounded-xl"></div>
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center md:items-start w-full">
                  <Image
                      src="/images/marketplace/magic-eden.webp"
                      alt="Magic Eden Logo"
                      width={60}
                      height={60}
                      className="mb-4"
                    />
                <h3 className="text-2xl font-bold text-white mb-4">Available on Magic Eden</h3>
                <p className="text-navy-300 mb-6">
                  Purchase MOOZ Cows on the official secondary marketplace.
                </p>
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
          </div>
        </section>

        {/* Staking Section */}
        <section id="staking" className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/staking/stacking.jpg"
              alt="Staking Background"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6 animate-glow">
                Staking is LIVE! 👑
              </h2>
              <p className="text-xl md:text-2xl text-navy-300 mb-8">
                Claim Your Royal Rewards
              </p>
              <div className="prose prose-invert mx-auto mb-10">
                <p className="text-lg text-navy-300">
                  Lock your MOOZ NFT in the Kingdom's Vault and watch your loyalty bloom into riches. 
                  Earn passive $MOOZ rewards while fortifying Moovia's future — your tokens power the realm!
                </p>
                <div className="my-8 p-6 bg-navy-900/50 rounded-xl border border-navy-800 glow-border">
                  <h3 className="text-xl font-bold text-white mb-6 text-center animate-pulse-slow">The Crown's Command:</h3>
                  <ul className="text-navy-300 space-y-6 list-none p-0 m-0">
                    <li className="flex items-center justify-center text-lg glow-text-green">
                      <span>✨ Stake your MOOZ NFT</span>
                    </li>
                    <li className="flex items-center justify-center text-lg">
                      <span className="glow-text-blue">💎 Trade with cunning</span>
                      <span className="ml-2 px-2 py-0.5 bg-secondary/20 text-secondary text-xs rounded-full animate-pulse">
                        Soon
                      </span>
                    </li>
                    <li className="flex items-center justify-center text-lg glow-text-gold">
                      <span>👑 Dominate the game</span>
                    </li>
                  </ul>
                </div>
                <p className="text-lg text-navy-300 italic">
                  The throne awaits those who seize the moment. Will you rule?
                </p>
              </div>
              <a
                href="https://grazing.mooz.farm/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-me rounded-xl hover:opacity-90 transition-opacity glow-button"
              >
                Enter the Staking Portal
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
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
          <a href="https://discord.com/invite/WWBJYYkYt2" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-me hover:opacity-90 text-white">
              <Discord className="mr-2 h-4 w-4" />
              Join Community
            </Button>
          </a>
        </div>
      </div>
      <div className="w-full min-h-[300px] md:h-[400px] relative rounded-xl overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">Mooz Roadmap 1.2</h2>
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-navy-800"></div>

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
                    phase: "🔜 70%",
                    title: "Merch Alert: Cattle Cart Bazaar",
                    description: "The Cattle Cart Bazaar is nearly here! Soon, you'll be able to rep your favorite factions in style with MOOZ merch.",
                  },
                  {
                    phase: "🌱 80%",
                    title: "The Grazing Grounds",
                    description: "Our grazing mechanism is still in development, but the reward system is already worked out! Think of it as tenderly grooming the pastures before the herd arrives.",
                  },
                  {
                    phase: "🔜 90%",
                    title: "Paying Our Starving Artists",
                    description: "The MOOZ art team (looking at you, @FastFrogStudio) is finally getting their due! No more exposure payments—only well-earned rewards.",
                  },
                  {
                    phase: "🔜 100%",
                    title: "Game Teasers Begin",
                    description: "The first sneak peeks of Kingdoms of Moo-via are coming! Early previews will showcase the game world, strategy mechanics, and maybe even a few surprises.",
                  },
                  {
                    phase: "🎉 BONUS",
                    title: "The Creation of @HighlanderDAO",
                    description: "One of the coolest things about MOOZ family is seeing community-led initiatives thrive! This grassroots effort by passionate holders is a great example of how the MOOZ ecosystem grows organically. HighlanderDAO empowers the community with governance rights and collaborative decision-making, showcasing the decentralized spirit of the MOOZ family.",
                  },
                  {
                    phase: "🚀 MIGRATION",
                    title: "Migration to Ethereum",
                    description: "MOOZ is expanding to Ethereum! This strategic migration enhances scalability, increases liquidity, and opens access to the broader DeFi ecosystem. The move brings MOOZ to a larger user base and enables compatibility with a wide range of dApps and wallets. Learn more about the migration process and its benefits in our official announcement.",
                  },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}>
                    <div className={`w-full md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:pr-12 md:text-right text-left pl-12" : "md:pl-12 pl-12"}`}>
                      <span className="inline-block px-3 py-1 bg-navy-800 text-secondary rounded-full text-sm font-medium mb-2">
                        {item.phase}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-navy-300">{item.description}</p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-1">
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
            <div className="text-center mb-16">
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
                <div
                  key={i}
                  className="group relative bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl overflow-hidden border border-navy-700/50 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(255,153,51,0.3)]"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/10 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
                  
                  <div className="relative aspect-square overflow-hidden">
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
                  
                  <div className="p-8 text-center relative">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                        {member.name}
                      </h3>
                      <div className="inline-block px-4 py-1.5 bg-navy-800/50 rounded-full border border-navy-700/50">
                        <p className="text-navy-300 text-sm font-medium">{member.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      {member.twitter && (
                        <Link 
                          href={member.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s Twitter`}
                          className="group/social"
                        >
                          <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full text-navy-400 hover:text-secondary hover:bg-navy-800/50 border border-navy-700/50 hover:border-secondary/50 transition-all duration-300 hover:scale-110"
                          >
                            <Twitter className="h-5 w-5" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-secondary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
        <section className="py-20 bg-gradient-to-r from-[#FF3366] to-[#FF9933]">
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
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="default"
                  className="!bg-[#020B2D] hover:!bg-[#1A215E] !text-white w-full sm:w-auto text-lg px-8 py-6 rounded-lg font-medium transition-colors"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy on Marketplace
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
