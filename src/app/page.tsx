import { CheckCircle, XCircle, ArrowRight, Star, Zap, Shield, TrendingUp, Users, Globe, Search } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-orange-500 font-semibold mb-4 tracking-wide uppercase">
            Exklusives Angebot für Autoaufbereiter
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Schluss mit der{' '}
            <span className="gradient-text">Umsatz-Achterbahn</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Das Komplett-System für planbare Premium-Kunden: Professionelle Website + Google-Sichtbarkeit + 
            automatisierte Kundengewinnung – alles aus einer Hand.
          </p>
          <a
            href="#angebot"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all glow"
          >
            Jetzt Angebot beanspruchen <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Kennst du diese Situation?
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Wenn auch nur einer dieser Punkte auf dich zutrifft, ist dieses Angebot für dich.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <TrendingUp className="w-8 h-8 text-red-500" />,
                title: "Die Umsatz-Achterbahn",
                desc: "Mal weißt du nicht wohin mit der Arbeit, im nächsten Monat herrscht 'tote Hose'. Keine Planbarkeit, kein ruhiger Schlaf."
              },
              {
                icon: <Search className="w-8 h-8 text-red-500" />,
                title: "Unsichtbar bei Google",
                desc: "Wenn jemand 'Autoaufbereitung' oder 'Keramikversiegelung' in deiner Stadt googelt, findet er deine Konkurrenz – aber nicht dich."
              },
              {
                icon: <Users className="w-8 h-8 text-red-500" />,
                title: "Falsche Kundenanfragen",
                desc: "Du bekommst Anfragen, aber nur für 'schnell mal drüber wischen'. Premium-Aufträge? Fehlanzeige."
              },
              {
                icon: <Globe className="w-8 h-8 text-red-500" />,
                title: "Social Media Hamsterrad",
                desc: "Du postest täglich auf Instagram, investierst Stunden – aber es kommen kaum zahlende Kunden dabei rum."
              }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 rounded-lg">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Die Lösung: Dein <span className="gradient-text">digitales Fundament</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg max-w-3xl mx-auto">
            Wir bauen dir ein System, das rund um die Uhr für dich arbeitet – damit du dich auf das konzentrieren kannst, 
            was du am besten kannst: Fahrzeuge aufbereiten.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe className="w-10 h-10 text-orange-500" />,
                title: "Professionelle Website",
                desc: "Keine 08/15-Vorlage, sondern eine conversion-optimierte Seite, die Besucher in Anfragen verwandelt."
              },
              {
                icon: <Search className="w-10 h-10 text-orange-500" />,
                title: "Google Sichtbarkeit",
                desc: "Google Business Optimierung + Premium Branchenbuch-Einträge für maximale lokale Reichweite."
              },
              {
                icon: <Zap className="w-10 h-10 text-orange-500" />,
                title: "Automatisierung",
                desc: "CMS-System für alle Anfragen. Du siehst sofort wer, was und wann – alles an einem Ort."
              }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-700 rounded-xl p-8 text-center card-hover">
                <div className="inline-flex p-4 bg-orange-500/10 rounded-2xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="angebot" className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Dein Investment
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Wähle das Modell, das zu dir passt.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basispaket - LEFT/TOP */}
            <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-8 card-hover">
              <h3 className="text-2xl font-bold mb-2">Basispaket</h3>
              <p className="text-gray-400 mb-6">Dein solides digitales Fundament</p>
              
              <div className="bg-zinc-900/50 rounded-xl p-4 mb-6">
                <span className="text-4xl font-bold">197€</span>
                <span className="text-gray-400 ml-2">/Monat</span>
              </div>
              
              <ul className="space-y-3">
                {[
                  { text: "Listing-Paket inklusive", highlight: true },
                  { text: "Hosting + Verwaltung", highlight: true },
                  { text: "Lizenzen inklusive", highlight: true }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className={item.highlight ? 'font-semibold' : ''}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium-Paket - RIGHT/BOTTOM */}
            <div className="bg-gradient-to-b from-orange-500/20 to-zinc-800 border-2 border-orange-500 rounded-2xl p-8 relative card-hover">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                EMPFOHLEN
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium-Paket</h3>
              <p className="text-gray-400 mb-6">Basispaket + Kundenmaschine</p>
              
              <div className="bg-zinc-900/50 rounded-xl p-4 mb-6">
                <span className="text-4xl font-bold text-orange-500">Auf Anfrage</span>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="font-semibold">Alles aus dem Basispaket</span>
                </li>
              </ul>
              
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 mb-6">
                <p className="text-orange-400 font-bold text-sm mb-2">🚀 Zusätzlich:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500 font-bold">+</span>
                    <span className="text-white font-semibold">Google Ads Betreuung</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500 font-bold">+</span>
                    <span className="text-white font-semibold">CRM-System inkl. WhatsApp-Integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Das sagen unsere Partner
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Endlich planbare Kundenanfragen! Früher war es ein ständiges Hoffen – jetzt klingelt das Telefon regelmäßig mit Premium-Kunden.",
                name: "Markus K.",
                company: "Premium Detailing München"
              },
              {
                quote: "Die Website hat sich in 3 Monaten amortisiert. Allein durch einen Keramik-Auftrag, der über Google kam.",
                name: "Stefan R.",
                company: "CarCare Stuttgart"
              },
              {
                quote: "Ich spare mir den Social Media Stress. Die Kunden kommen jetzt von selbst – und zwar die richtigen.",
                name: "Thomas B.",
                company: "Autopflege Profi Köln"
              }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 card-hover">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-5 h-5 text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">&ldquo;{item.quote}&rdquo;</p>
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-gray-500 text-sm">{item.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Häufige Fragen
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: "Wie schnell ist meine Website online?",
                a: "In der Regel innerhalb von 2-3 Wochen nach Auftragserteilung. Bei Eilbedarf sprechen wir drüber."
              },
              {
                q: "Was passiert nach den 12 Monaten beim Monatsmodell?",
                a: "Die Website gehört dann dir. Du kannst sie selbst weiterbetreiben oder unser Hosting-Paket nutzen."
              },
              {
                q: "Brauche ich technisches Wissen?",
                a: "Nein. Wir übernehmen alles Technische. Du konzentrierst dich auf dein Handwerk."
              },
              {
                q: "Kann ich später upgraden?",
                a: "Ja, jederzeit. Du kannst z.B. mit der Website starten und später das Premium-Paket dazubuchen."
              }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für planbare <span className="gradient-text">Premium-Kunden</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Lass uns sprechen. Unverbindlich und kostenlos.
          </p>
          <a
            href="https://calendly.com/upscaled-media/15min"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all glow"
          >
            Jetzt Angebot beanspruchen <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-gray-500 mt-4 text-sm">
            Kostenloses 15-Min-Gespräch – unverbindlich
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 Upscaled Media GmbH – Ein Angebot von MotorMarketing</p>
          <div className="flex gap-6">
            <a href="https://motormarketing.de/impressum" className="hover:text-white">Impressum</a>
            <a href="https://motormarketing.de/datenschutz" className="hover:text-white">Datenschutz</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
