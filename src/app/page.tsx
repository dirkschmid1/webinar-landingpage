'use client';

import { useState } from 'react';

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToForm = () => {
    document.getElementById('anmeldung')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-amber-400">MotorMarketing</div>
          <button 
            onClick={scrollToForm}
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-2 rounded-lg transition-all"
          >
            Jetzt anmelden
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🔥 Kostenloses Webinar für Autoaufbereiter
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Schluss mit der <span className="text-amber-400">Umsatz-Achterbahn!</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Wie Autoaufbereiter jeden Monat <strong className="text-white">planbar Premium-Kunden</strong> gewinnen – 
            ohne Social-Media-Stress und ohne von Empfehlungen abhängig zu sein.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={scrollToForm}
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg shadow-amber-500/25"
            >
              🎥 Kostenlosen Platz sichern
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">✅ 100% kostenlos</span>
            <span className="flex items-center gap-2">✅ Sofort umsetzbar</span>
            <span className="flex items-center gap-2">✅ Für Autoaufbereiter</span>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Kennst du <span className="text-red-400">diese Situation?</span>
          </h2>
          <p className="text-slate-400 text-center mb-12 text-lg">
            Die meisten Autoaufbereiter kämpfen mit genau diesen Problemen...
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '📉',
                title: 'Die Umsatz-Achterbahn',
                desc: 'Ein Monat läuft super, der nächste ist eine Katastrophe. Keine Planungssicherheit, kein konstantes Einkommen.'
              },
              {
                icon: '👻',
                title: 'Unsichtbar bei Google',
                desc: 'Wenn jemand "Autoaufbereiter + deine Stadt" googelt, tauchen nur die Anderen auf. Du wirst einfach nicht gefunden.'
              },
              {
                icon: '🎯',
                title: 'Die falschen Kunden',
                desc: '"Was kostet das billigste?" – Du ziehst Schnäppchenjäger an statt zahlungskräftige Kunden, die Premium-Qualität schätzen.'
              },
              {
                icon: '😤',
                title: 'Social Media Stress',
                desc: 'Du postest regelmäßig auf Instagram & Facebook – aber echte Kunden kommen kaum. Nur Likes von anderen Aufbereitern.'
              },
              {
                icon: '🙏',
                title: 'Abhängig von Empfehlungen',
                desc: 'Dein Business hängt davon ab, dass zufriedene Kunden dich weiterempfehlen. Fällt das weg, bricht alles zusammen.'
              },
              {
                icon: '💸',
                title: 'Geld verbrannt mit Werbung',
                desc: 'Du hast schon mal Geld für Werbung ausgegeben – aber es kam nichts dabei rum. Jetzt bist du skeptisch.'
              }
            ].map((pain, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6 hover:border-red-500/50 transition-all">
                <span className="text-3xl mb-4 block">{pain.icon}</span>
                <h3 className="text-xl font-bold mb-2 text-red-400">{pain.title}</h3>
                <p className="text-slate-400">{pain.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-white mb-2">Wenn dir das bekannt vorkommt...</p>
            <p className="text-amber-400 text-xl">...dann ist dieses Webinar genau für dich!</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Die <span className="text-amber-400">Lösung:</span> Dein Premium-System
          </h2>
          <p className="text-slate-400 text-center mb-12 text-lg max-w-3xl mx-auto">
            Im Webinar zeige ich dir das exakte System, mit dem erfolgreiche Autoaufbereiter 
            planbar Premium-Kunden gewinnen.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Sichtbarkeit bei Google',
                desc: 'Werde die #1 in deiner Stadt. Wenn jemand einen Autoaufbereiter sucht, findet er DICH.',
                icon: '🔍'
              },
              {
                step: '02',
                title: 'Premium-Positionierung',
                desc: 'Ziehe nur noch Kunden an, die Qualität schätzen und bereit sind, dafür zu zahlen.',
                icon: '💎'
              },
              {
                step: '03',
                title: 'Automatische Kundengewinnung',
                desc: 'Dein System arbeitet für dich – während du Autos aufbereitest, kommen die Anfragen rein.',
                icon: '⚡'
              }
            ].map((step, i) => (
              <div key={i} className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 relative overflow-hidden group hover:border-amber-500/50 transition-all">
                <span className="absolute -top-4 -right-4 text-8xl font-black text-slate-700/30 group-hover:text-amber-500/10 transition-colors">
                  {step.step}
                </span>
                <span className="text-4xl mb-4 block">{step.icon}</span>
                <h3 className="text-xl font-bold mb-3 text-amber-400">{step.title}</h3>
                <p className="text-slate-400 relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Learn Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Das lernst du im <span className="text-amber-400">Webinar</span>
          </h2>
          <p className="text-slate-400 text-center mb-12 text-lg">
            In 60 Minuten bekommst du einen klaren Fahrplan für dein Premium-Business
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Warum 90% der Autoaufbereiter unsichtbar bleiben – und wie du zu den Top 10% gehörst',
              'Das Google-Geheimnis: So wirst du in deiner Stadt die #1 bei Google Maps',
              'Premium-Preise durchsetzen: Wie du aus Schnäppchenjägern Premium-Kunden machst',
              'Die 3 größten Fehler, die Aufbereiter bei ihrer Website machen',
              'Automatische Kundengewinnung: Das System, das für dich arbeitet',
              'Der perfekte Online-Auftritt: Was eine Premium-Website wirklich braucht',
              'Branchenbuch-Strategie: Die unterschätzte Traffic-Quelle',
              'Live Q&A: Deine Fragen werden beantwortet'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-slate-900/50 rounded-xl p-5 border border-slate-700">
                <span className="text-amber-400 text-xl mt-1">✓</span>
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Preview */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Das <span className="text-amber-400">Premium-Paket</span> für deinen Erfolg
          </h2>
          <p className="text-slate-400 text-center mb-12 text-lg max-w-3xl mx-auto">
            Im Webinar stellen wir dir unsere komplette Lösung vor – 
            alles was du brauchst, um online sichtbar zu werden und Premium-Kunden zu gewinnen.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Website */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-amber-500/50 transition-all">
              <h3 className="text-xl font-bold mb-2">Premium Website</h3>
              <p className="text-slate-400 text-sm mb-4">Deine digitale Visitenkarte für Premium-Kunden</p>
              <div className="text-3xl font-bold text-amber-400 mb-2">3.000€ <span className="text-base font-normal text-slate-400">einmalig</span></div>
              <p className="text-slate-500 text-sm mb-4">oder 300€/Monat</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Responsive Design</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> SEO-optimiert</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Conversion-fokussiert</li>
              </ul>
            </div>

            {/* Hosting & Verwaltung */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-amber-500/50 transition-all">
              <h3 className="text-xl font-bold mb-2">Hosting & Pflege</h3>
              <p className="text-slate-400 text-sm mb-4">Sorglos-Paket für deinen Online-Auftritt</p>
              <div className="text-3xl font-bold text-amber-400 mb-2">197€ <span className="text-base font-normal text-slate-400">/Monat</span></div>
              <p className="text-slate-500 text-sm mb-4">inkl. allem was du brauchst</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Schnelles Hosting</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Technische Betreuung</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Content-Pflege</li>
              </ul>
            </div>

            {/* Premium Paket */}
            <div className="bg-gradient-to-b from-amber-500/20 to-slate-800 rounded-2xl p-6 border-2 border-amber-500 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                EMPFOHLEN
              </span>
              <h3 className="text-xl font-bold mb-2">Premium Komplett</h3>
              <p className="text-slate-400 text-sm mb-4">Alles inklusive – dein Rundum-Sorglos-Paket</p>
              <div className="text-3xl font-bold text-amber-400 mb-2">597€ <span className="text-base font-normal text-slate-400">/Monat</span></div>
              <p className="text-slate-500 text-sm mb-4">alles was du brauchst</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Premium Website</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Google Business Optimierung</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Branchenbuch-Einträge</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> CMS-System</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Komplette Betreuung</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-slate-500 mt-8">
            Alle Details und exklusive Webinar-Konditionen erfährst du im Live-Event.
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Das sagen <span className="text-amber-400">unsere Kunden</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Michael S.',
                location: 'München',
                text: 'Endlich planbare Kundengewinnung! Seit ich bei Google auf Platz 1 stehe, kommen die Anfragen von alleine.',
                stars: 5
              },
              {
                name: 'Thomas K.',
                location: 'Hamburg',
                text: 'Die Premium-Website hat sich in 2 Monaten bezahlt gemacht. Nur noch Kunden, die Qualität schätzen.',
                stars: 5
              },
              {
                name: 'Stefan B.',
                location: 'Köln',
                text: 'Kein Social-Media-Stress mehr. Meine Website und Google machen jetzt die Arbeit. Ich kann mich auf die Autos konzentrieren.',
                stars: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700">
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-slate-300 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Registration Form */}
      <section id="anmeldung" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-b from-amber-500/10 to-slate-800 rounded-3xl p-8 md:p-12 border border-amber-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Sichere dir deinen <span className="text-amber-400">kostenlosen Platz</span>
            </h2>
            <p className="text-slate-400 text-center mb-8">
              Das Webinar ist 100% kostenlos. Die Plätze sind limitiert.
            </p>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(true); }}>
              <div>
                <input 
                  type="text" 
                  placeholder="Dein Name" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 focus:outline-none focus:border-amber-500 transition-colors"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Deine E-Mail-Adresse" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 focus:outline-none focus:border-amber-500 transition-colors"
                  required
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Deine Telefonnummer (optional)" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-5 rounded-xl text-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-amber-500/25"
              >
                🎥 Jetzt kostenlos anmelden
              </button>
              <p className="text-center text-slate-500 text-sm">
                🔒 Deine Daten sind sicher. Keine Spam-Mails, versprochen.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Häufige <span className="text-amber-400">Fragen</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Ist das Webinar wirklich kostenlos?',
                a: 'Ja, 100%! Du lernst unsere Strategien kennen und kannst selbst entscheiden, ob du mit uns zusammenarbeiten möchtest.'
              },
              {
                q: 'Für wen ist das Webinar geeignet?',
                a: 'Für Autoaufbereiter, die planbar mehr Premium-Kunden gewinnen und online sichtbar werden wollen.'
              },
              {
                q: 'Wie lange dauert das Webinar?',
                a: 'Ca. 60 Minuten inkl. Live Q&A, in der wir deine Fragen beantworten.'
              },
              {
                q: 'Brauche ich technisches Vorwissen?',
                a: 'Nein! Wir erklären alles verständlich und kümmern uns um die komplette Umsetzung.'
              },
              {
                q: 'Was passiert nach dem Webinar?',
                a: 'Du bekommst die Aufzeichnung und kannst bei Interesse ein unverbindliches Strategiegespräch buchen.'
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-900/50 rounded-xl border border-slate-700">
                <summary className="p-5 cursor-pointer font-semibold flex justify-between items-center">
                  {faq.q}
                  <span className="text-amber-400 group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <div className="px-5 pb-5 text-slate-400">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für <span className="text-amber-400">planbare Kundengewinnung?</span>
          </h2>
          <p className="text-slate-400 text-xl mb-8">
            Melde dich jetzt kostenlos an und lerne, wie du zur #1 in deiner Stadt wirst.
          </p>
          <button 
            onClick={scrollToForm}
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-5 rounded-xl text-xl transition-all transform hover:scale-105 shadow-lg shadow-amber-500/25"
          >
            🎥 Jetzt Platz sichern
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <div>© 2024 MotorMarketing by Upscaled Media. Alle Rechte vorbehalten.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Impressum</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-md text-center border border-slate-700">
            <span className="text-5xl mb-4 block">🎉</span>
            <h3 className="text-2xl font-bold mb-4">Anmeldung erfolgreich!</h3>
            <p className="text-slate-400 mb-6">
              Wir haben dir eine E-Mail mit allen Details zum Webinar geschickt. Wir freuen uns auf dich!
            </p>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Alles klar!
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
