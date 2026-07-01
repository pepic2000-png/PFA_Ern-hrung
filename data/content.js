export const themen = [
  {
    id: "pruefungsrelevant",
    titel: "⭐ Prüfungsrelevant",
    farbe: "#f59e0b",
    icon: "🎯",
    karten: [
      {
        frage: "Was sind die 5 Bilanzen der Ernährung?",
        antwort: "1. Energie-Bilanz\n2. Makronährstoff-Bilanz\n3. Vitamine\n4. Mineralstoffe\n5. Wasser",
        tipp: "Diese 5 Bilanzen kommen direkt in der Prüfung!"
      },
      {
        frage: "Was sind die 3 Makronährstoffe?",
        antwort: "1. Kohlenhydrate (KH) — z.B. Reis, Brot, Kartoffeln\n2. Fette — z.B. Öle, Nüsse, Avocado\n3. Proteine — z.B. Fleisch, Eier, Hülsenfrüchte",
        tipp: "Makronährstoffe = die großen Drei. Jeder liefert Energie."
      },
      {
        frage: "Wie teilt man Fette ein?",
        antwort: "• Gesättigte Fettsäuren — z.B. Butter, Fleisch (fest bei Raumtemperatur)\n• Einfach ungesättigte — z.B. Olivenöl (flüssig, hitzestabil)\n• Mehrfach ungesättigte — z.B. Omega-3 (Fisch), Omega-6 (Sonnenblumenöl)\n\nFaustregel: Je flüssiger bei Zimmertemperatur, desto gesünder."
      },
      {
        frage: "Was ist der Grundumsatz (BMR)?",
        antwort: "Die Energie, die der Körper in vollständiger Ruhe verbraucht — nur um zu überleben (Atmung, Herzschlag, Wärme).\n\nTypisch: ca. 1.500–2.000 kcal/Tag je nach Person.\n\nEinflussfaktoren: Körpergröße, Gewicht, Alter, Muskelmasse."
      },
      {
        frage: "Was ist der Leistungsumsatz und wie unterscheidet er sich vom Grundumsatz?",
        antwort: "Grundumsatz = Energie im totalen Ruhezustand.\nLeistungsumsatz = Grundumsatz + Bewegungsenergie (TDEE).\n\nSprich: Wer sich mehr bewegt, hat einen höheren Leistungsumsatz.\n\nBeispiel: BMR 1.800 kcal + Sport + Alltag = TDEE 2.400 kcal"
      },
      {
        frage: "Was ist Insulin — kurz erklärt?",
        antwort: "Insulin ist ein Hormon der Bauchspeicheldrüse.\n\nAufgabe: Senkt den Blutzucker, indem es Zucker aus dem Blut in die Zellen schleust (Muskeln, Leber, Fettgewebe).\n\nNach kohlenhydratreicher Mahlzeit → Blutzucker steigt → Insulin wird ausgeschüttet → Blutzucker sinkt."
      },
      {
        frage: "Was ist der Glykämische Index (GI)?",
        antwort: "Maß dafür, wie schnell ein kohlenhydrathaltiges Lebensmittel den Blutzucker ansteigen lässt.\n\nHoher GI (>70): Weißbrot, Zucker → schneller Anstieg → schneller Abfall → Heißhunger\nNiedriger GI (<55): Haferflocken, Hülsenfrüchte → langsamer, stabiler Anstieg\n\nReferenzwert: Traubenzucker = GI 100",
        tipp: "GI = Geschwindigkeit des Blutzuckeranstiegs"
      },
      {
        frage: "Wie viele kcal liefern die Makronährstoffe pro Gramm?",
        antwort: "• Kohlenhydrate: 4 kcal/g\n• Proteine: 4 kcal/g\n• Fette: 9 kcal/g\n• Alkohol (kein Nährstoff): 7 kcal/g\n\nFett hat mehr als doppelt so viele Kalorien wie KH oder Protein — deshalb ist Fett so kalorienreich.",
        tipp: "Merke: KH=4, P=4, F=9 — Fett hat am meisten!"
      },
      {
        frage: "Was sind essentielle Nährstoffe?",
        antwort: "Nährstoffe, die der Körper NICHT selbst herstellen kann und deshalb über die Nahrung aufnehmen muss.\n\nBeispiele:\n• Essentielle Aminosäuren (8–9 Stück, z.B. Leucin, Valin)\n• Essentielle Fettsäuren (Omega-3, Omega-6)\n• Alle Vitamine und Mineralstoffe\n\nNicht-essentiell = Körper kann es selbst bauen (z.B. Glukose aus KH oder Fett)",
        tipp: "Essentiell = muss von außen kommen"
      },
      {
        frage: "Warum sind Proteine für Sportler besonders wichtig?",
        antwort: "Proteine bestehen aus Aminosäuren — dem Baustoff für Muskeln.\n\nFunktionen:\n• Muskelaufbau und -reparatur nach dem Training\n• Baustoff für Enzyme, Hormone und Antikörper\n• Sättigung (höchste Sättigungswirkung aller Makros)\n\nEmpfehlung Sportler: ca. 1,6–2,2 g Protein pro kg Körpergewicht/Tag\nGute Quellen: Fleisch, Fisch, Eier, Hülsenfrüchte, Milchprodukte"
      },
      {
        frage: "Was sind die 4 Säulen der Gesundheit?",
        antwort: "1. Gesundes, echtes Essen\n2. Ausreichend Bewegung\n3. Genügend Schlaf und Regeneration\n4. Effektives Stressmanagement\n\nAlle 4 Säulen sind gleich wichtig — fällt eine weg, leidet das ganze System.",
        tipp: "Merke: Essen · Bewegung · Schlaf · Stress"
      },
      {
        frage: "Was sind Vitamine — und was ist der Unterschied fettlöslich vs. wasserlöslich?",
        antwort: "Vitamine sind essentielle Mikronährstoffe, die der Körper nicht selbst herstellen kann.\n\nFettlöslich (A, D, E, K):\n• Gespeichert im Körperfett — Überdosierung möglich!\n• Brauchen Fett zur Aufnahme\n\nWasserlöslich (C, alle B-Vitamine):\n• Werden täglich ausgeschieden → regelmäßig zuführen\n• Überdosierung kaum möglich",
        tipp: "Fettlöslich: ADEK · Wasserlöslich: C und alle B"
      },
      {
        frage: "Was ist die Energiebilanz — und was bedeutet sie für das Gewicht?",
        antwort: "Energiebilanz = Kalorieneinnahme minus Kalorienverbrauch.\n\n• Positiv (mehr rein als raus) → Gewicht steigt\n• Negativ (mehr raus als rein) → Gewicht sinkt\n• Ausgeglichen → Gewicht bleibt gleich\n\nDas ist das fundamentalste Prinzip der Ernährung. Alles andere (Mahlzeitenfrequenz, Timing) ist sekundär.",
        tipp: "Kaloriendefizit → Abnehmen. Kalorienüberschuss → Zunehmen."
      },
      {
        frage: "Was ist Biologische Wertigkeit (BW) bei Proteinen?",
        antwort: "Maß dafür, wie gut der Körper ein Nahrungsprotein in körpereigenes Protein umwandeln kann.\n\nReferenz: Vollei = BW 100\n• Molke (Whey): 104–110 ✅ (höchste)\n• Vollei: 100\n• Fleisch/Fisch: ~85–90\n• Kartoffel + Ei (kombiniert): bis 137!\n\nKombination verschiedener Proteinquellen erhöht die BW.",
        tipp: "Kombis schlagen Einzelquellen — Kartoffel+Ei ist king"
      },
    ],
    quiz: [
      {
        frage: "Welche der folgenden ist KEINE der 5 Bilanzen der Ernährung?",
        optionen: ["Energie-Bilanz", "Makronährstoff-Bilanz", "Hormon-Bilanz", "Wasser-Bilanz"],
        richtig: 2,
        erklaerung: "Die 5 Bilanzen sind: Energie, Makronährstoffe, Vitamine, Mineralstoffe und Wasser. Hormone gehören nicht dazu."
      },
      {
        frage: "Welche Fettsäuren sind z.B. in Olivenöl enthalten?",
        optionen: ["Gesättigte Fettsäuren", "Einfach ungesättigte Fettsäuren", "Mehrfach ungesättigte Fettsäuren", "Trans-Fettsäuren"],
        richtig: 1,
        erklaerung: "Olivenöl enthält hauptsächlich einfach ungesättigte Fettsäuren (Ölsäure). Diese sind hitzestabiler als mehrfach ungesättigte."
      },
      {
        frage: "Was misst der Grundumsatz?",
        optionen: [
          "Energie für Sport und Alltag",
          "Energie im totalen Ruhezustand zum Überleben",
          "Energie für die Verdauung",
          "Gesamten Tagesenergiebedarf"
        ],
        richtig: 1,
        erklaerung: "Der Grundumsatz (BMR) ist die Energie, die der Körper in vollständiger Ruhe braucht — Atmung, Herzschlag, Wärme. Ohne jede Bewegung."
      },
      {
        frage: "Was passiert nach einer kohlenhydratreichen Mahlzeit?",
        optionen: [
          "Blutzucker sinkt → Insulin steigt",
          "Blutzucker steigt → Insulin wird ausgeschüttet",
          "Insulin sinkt → Blutzucker steigt",
          "Blutzucker bleibt konstant"
        ],
        richtig: 1,
        erklaerung: "KH → Blutzucker steigt → Bauchspeicheldrüse schüttet Insulin aus → Insulin bringt Zucker in die Zellen → Blutzucker sinkt."
      },
      {
        frage: "Ein Lebensmittel mit niedrigem Glykämischem Index (GI) ...",
        optionen: [
          "... lässt den Blutzucker schnell ansteigen",
          "... enthält keinen Zucker",
          "... lässt den Blutzucker langsam und gleichmäßig ansteigen",
          "... hat keine Kalorien"
        ],
        richtig: 2,
        erklaerung: "Niedriger GI = langsamer, stabiler Blutzuckeranstieg. Das hält länger satt und vermeidet Heißhunger-Attacken. Beispiel: Haferflocken, Linsen."
      },
      {
        frage: "Was ist der Unterschied zwischen Grundumsatz und Leistungsumsatz?",
        optionen: [
          "Kein Unterschied, es sind Synonyme",
          "Leistungsumsatz = Grundumsatz + Energie für Bewegung und Alltag",
          "Grundumsatz ist immer höher als der Leistungsumsatz",
          "Leistungsumsatz misst nur die Energie beim Sport"
        ],
        richtig: 1,
        erklaerung: "Grundumsatz = Ruheenergie. Leistungsumsatz (TDEE) = Grundumsatz + Alltagsbewegung + Sport. Je aktiver du bist, desto höher der Leistungsumsatz."
      },
      {
        frage: "Wie viele kcal liefert 1 Gramm Fett?",
        optionen: ["4 kcal", "5 kcal", "7 kcal", "9 kcal"],
        richtig: 3,
        erklaerung: "Fett liefert 9 kcal/g — mehr als doppelt so viel wie Kohlenhydrate oder Protein (je 4 kcal/g). Alkohol liefert 7 kcal/g."
      },
      {
        frage: "Was bedeutet 'essentiell' bei Nährstoffen?",
        optionen: [
          "Der Körper braucht sie nicht",
          "Der Körper kann sie nicht selbst herstellen",
          "Sie liefern besonders viel Energie",
          "Sie sind nur für Sportler wichtig"
        ],
        richtig: 1,
        erklaerung: "Essentiell = der Körper kann diesen Nährstoff nicht selbst produzieren und muss ihn über die Nahrung aufnehmen. Gilt für essentielle Aminosäuren, Fettsäuren, Vitamine und Mineralstoffe."
      },
      {
        frage: "Wie viel Protein braucht ein Kraftsportler pro Tag (pro kg Körpergewicht)?",
        optionen: ["0,5–0,8 g/kg", "1,0–1,2 g/kg", "1,6–2,2 g/kg", "3,0–4,0 g/kg"],
        richtig: 2,
        erklaerung: "Für Muskelaufbau und -erhalt empfiehlt die Sporternährung ca. 1,6–2,2 g Protein pro kg Körpergewicht täglich."
      },
      {
        frage: "Welche Vitamine sind fettlöslich?",
        optionen: ["A, C, E, K", "A, D, E, K", "B, C, D, E", "A, B, D, K"],
        richtig: 1,
        erklaerung: "Die fettlöslichen Vitamine sind A, D, E und K (Merkwort: ADEK). Sie werden im Körperfett gespeichert und brauchen Fett zur Aufnahme."
      },
      {
        frage: "Was passiert bei einer dauerhaft negativen Energiebilanz?",
        optionen: [
          "Das Gewicht bleibt konstant",
          "Das Gewicht steigt",
          "Das Gewicht sinkt",
          "Muskeln wachsen schneller"
        ],
        richtig: 2,
        erklaerung: "Negative Energiebilanz = mehr Kalorien verbraucht als gegessen → Körper greift auf Energiespeicher zurück → Gewicht sinkt. Das ist das Grundprinzip jeder Diät."
      },
      {
        frage: "Welche Proteinkombination hat die höchste biologische Wertigkeit?",
        optionen: ["Whey + Casein", "Fleisch + Fisch", "Kartoffel + Ei", "Reis + Bohnen"],
        richtig: 2,
        erklaerung: "Kartoffel + Ei erreicht eine biologische Wertigkeit von bis zu 137 — höher als Einzelquellen wie Vollei (100) oder Whey (104–110), weil sich die Aminosäureprofile optimal ergänzen."
      },
      {
        frage: "Was sind die 3 Makronährstoffe?",
        optionen: [
          "Kohlenhydrate, Vitamine, Wasser",
          "Proteine, Mineralstoffe, Fette",
          "Kohlenhydrate, Fette, Proteine",
          "Glukose, Insulin, Aminosäuren"
        ],
        richtig: 2,
        erklaerung: "Die 3 Makronährstoffe sind Kohlenhydrate, Fette und Proteine. Vitamine und Mineralstoffe sind Mikronährstoffe, Wasser ist eine eigene Bilanz."
      }
    ]
  },
  {
    id: "grundlagen",
    titel: "Grundlagen der Ernährung",
    farbe: "#e74c3c",
    icon: "🏃",
    karten: [
      {
        frage: "Was sind die 4 Säulen der Gesundheit?",
        antwort: "1. Gesundes, echtes Essen\n2. Ausreichend Bewegung\n3. Genügend Schlaf und Regeneration\n4. Effektives Stressmanagement",
        tipp: "Merke: EBER — Essen, Bewegung, Erholung, Regeneration"
      },
      {
        frage: "Was sind die 5 Bilanzen der Ernährung?",
        antwort: "1. Energie-Bilanz\n2. Makronährstoff-Bilanz\n3. Vitamine\n4. Mineralstoffe\n5. Wasser",
        tipp: "Merke: EMMW — Energie, Makro, Mikro, Wasser"
      },
      {
        frage: "Was sind die Ziele einer guten Ernährung?",
        antwort: "• Echtes Essen\n• Hohe Nährstoffdichte\n• Blutzucker-Regulierung\n• Gesunder hormoneller Status\n• Gesunde Verdauungsfunktion\n• Immun-System fördern (60–70% im Darm)\n• Keinen Mangel\n• Toxine vermeiden\n• Körperfunktionen wiederherstellen"
      },
      {
        frage: "Was bedeutet Nährstoffdichte?",
        antwort: "Das Verhältnis der enthaltenen Nährstoffe zu dem Energiegehalt eines Lebensmittels.\n\nHohe Nährstoffdichte = viele Nährstoffe bei wenig Kalorien (z.B. Gemüse)\nNiedrige Nährstoffdichte = wenig Nährstoffe bei vielen Kalorien (z.B. Chips)"
      },
      {
        frage: "Was sind Ballaststoffe und welche Wirkungen haben sie?",
        antwort: "Ballaststoffe sind unverdauliche Kohlenhydrate.\n\nWirkungen:\n• Reinigen den Darm\n• Erhöhen Sättigungseffekt\n• Wirken als natürliche Fettblocker\n• Senken den Cholesterinspiegel\n• Verringern das Krebsrisiko"
      },
      {
        frage: "Was sind sekundäre Pflanzenstoffe und was bewirken sie?",
        antwort: "Bioaktive Substanzen in Pflanzen:\n• Antibakteriell, antiviral\n• Immunmodulierend\n• Antioxidativ\n• Antikanzerogen (krebshemmend)\n\nBeispiele:\n• Carotinoide → Karotten\n• Polyphenole → Heidelbeeren, Rotwein\n• Flavonoide → Äpfel, Zitrusfrüchte\n• Phytosterine → Sonnenblumenkerne"
      }
    ],
    quiz: [
      {
        frage: "Wie viel Prozent des Immunsystems befindet sich im Darm?",
        optionen: ["30–40%", "50–60%", "60–70%", "80–90%"],
        richtig: 2,
        erklaerung: "60–70% des Immunsystems befinden sich im Darm — deshalb ist Darmgesundheit so wichtig!"
      },
      {
        frage: "Was ist die 1. Säule der Gesundheit?",
        optionen: ["Ausreichend Bewegung", "Gesundes, echtes Essen", "Genügend Schlaf", "Stressmanagement"],
        richtig: 1,
        erklaerung: "Gesundes, echtes Essen ist die Basis — danach Bewegung, Schlaf/Regeneration und Stressmanagement."
      },
      {
        frage: "Was charakterisiert eine hohe Nährstoffdichte?",
        optionen: [
          "Viele Kalorien, wenig Nährstoffe",
          "Viele Nährstoffe, wenig Kalorien",
          "Gleich viele Nährstoffe und Kalorien",
          "Wenig Nährstoffe, wenig Kalorien"
        ],
        richtig: 1,
        erklaerung: "Hohe Nährstoffdichte = viele Vitamine/Mineralstoffe bei geringem Kaloriengehalt. Ideal für gesunde Ernährung."
      },
      {
        frage: "Ballaststoffe sind...",
        optionen: ["Verdauliche Proteine", "Essentielle Fettsäuren", "Unverdauliche Kohlenhydrate", "Fettlösliche Vitamine"],
        richtig: 2,
        erklaerung: "Ballaststoffe sind unverdauliche Kohlenhydrate. Sie werden nicht aufgespalten, helfen aber dem Darm und dem Sättigungsgefühl."
      },
      {
        frage: "Wie viele Bilanzen der Ernährung gibt es?",
        optionen: ["3", "4", "5", "6"],
        richtig: 2,
        erklaerung: "Es gibt 5 Bilanzen: Energie, Makronährstoffe, Vitamine, Mineralstoffe und Wasser."
      }
    ]
  },
  {
    id: "energiebilanz",
    titel: "Die Energiebilanz",
    farbe: "#e67e22",
    icon: "⚡",
    karten: [
      {
        frage: "Wie viel kcal liefert 1g Fett, Kohlenhydrate, Protein, Alkohol?",
        antwort: "• Fett: 1g = 9 kcal\n• Kohlenhydrate: 1g = 4 kcal\n• Proteine: 1g = 4 kcal\n• Alkohol: 1g = 7 kcal",
        tipp: "Merke: 9-4-4-7 (Fett-KH-Protein-Alkohol)"
      },
      {
        frage: "Was ist der Grundumsatz (BMR)?",
        antwort: "Der Energiebedarf des Körpers in Ruhe für lebenswichtige Funktionen:\n• Gehirn, Herz, Lungen, Nieren\n• Nervensystem, Verdauungstrakt\n• Muskeln, Haut\n\nEinflussfaktoren:\n• Genetik, Geschlecht (Männer höher)\n• Alter (sinkt mit dem Alter)\n• Gewicht, Körperfettanteil\n• Schilddrüse (Thyroxin)"
      },
      {
        frage: "Harris-Benedict Formel zur Berechnung des Grundumsatzes (BMR)?",
        antwort: "Männer:\nBMR = 66 + (13,7 × kg) + (5 × cm) – (6,8 × Alter)\n\nFrauen:\nBMR = 655 + (9,6 × kg) + (1,8 × cm) – (4,7 × Alter)\n\nBeispiel Frau, 30 J., 162 cm, 58 kg:\nBMR = 655 + 556,8 + 291,6 – 141 = 1.362 kcal/Tag"
      },
      {
        frage: "Was ist TDEE und wie berechnet man ihn?",
        antwort: "TDEE = Total Daily Energy Expenditure (Gesamter Tagesenergiebedarf)\n\nTDEE = BMR × Aktivitätsfaktor\n\n• Sitzend: × 1,2\n• Leicht aktiv (1–3x/Woche): × 1,375\n• Mäßig aktiv (3–5x/Woche): × 1,55\n• Sehr aktiv (6–7x/Woche): × 1,725\n• Extrem aktiv: × 1,9"
      },
      {
        frage: "Was ist der TEF (Thermischer Effekt der Nahrung)?",
        antwort: "Energie, die der Körper für Verdauung, Transport und Verstoffwechslung aufwendet.\n\nCa. 10% der gesamten Kalorienzufuhr\n\n• Protein: 20–30% der aufgenommenen Kalorien\n• Kohlenhydrate: 5–10%\n• Fett: 3–7%\n\n→ Protein hat den höchsten thermischen Effekt!"
      },
      {
        frage: "Was sind die Energiespeicher im Körper?",
        antwort: "1. Muskel- & Leberglykogen (Kohlenhydrate):\n   • Muskelglykogen: ca. 250g = 1.000 kcal\n   • Leberglykogen: ca. 80g = 320 kcal\n\n2. Fettspeicher: ca. 15 kg = 140.000 kcal\n\n3. Aminosäurenpool (Eiweiß)\n\n→ Fettspeicher = mit Abstand größter Energiespeicher!"
      },
      {
        frage: "Was ist Muskelglykogen und was Leberglykogen?",
        antwort: "Muskelglykogen:\n• Direkter Energielieferant für beanspruchte Muskeln\n• Kein Austausch zwischen Muskelgruppen möglich\n\nLeberglykogen:\n• Stabilisiert den Blutzucker\n• Bei Entleerung → Hungerast möglich\n• Cortisol (Stress) entleert den Leberpool"
      },
      {
        frage: "Was ist die Körper-Kompositions-Pyramide?",
        antwort: "Von wichtig zu weniger wichtig (Basis zuerst):\n\n1. Energie-Bilanz (wichtigste Basis!)\n2. Makronährstoffe & Ballaststoffe\n3. Mikronährstoffe & Wasser\n4. Timing & Frequenz\n5. Supplements (am wenigsten wichtig)"
      }
    ],
    quiz: [
      {
        frage: "Wie viel kcal hat 1g Fett?",
        optionen: ["4 kcal", "7 kcal", "9 kcal", "11 kcal"],
        richtig: 2,
        erklaerung: "Fett hat 9 kcal/g — mehr als doppelt so viel wie Kohlenhydrate oder Protein (je 4 kcal/g)."
      },
      {
        frage: "Welcher Makronährstoff hat den höchsten thermischen Effekt (TEF)?",
        optionen: ["Fett (3–7%)", "Kohlenhydrate (5–10%)", "Protein (20–30%)", "Alkohol (15–20%)"],
        richtig: 2,
        erklaerung: "Protein hat den höchsten TEF mit 20–30%! Der Körper verbraucht also viel Energie allein durch die Verdauung von Protein."
      },
      {
        frage: "Der Aktivitätsfaktor für eine 'sitzende' Person ist:",
        optionen: ["× 1,0", "× 1,2", "× 1,375", "× 1,55"],
        richtig: 1,
        erklaerung: "Sedentary (sitzend, wenig Bewegung) = BMR × 1,2"
      },
      {
        frage: "Wie viel kcal speichert das Körperfett (ca. 15 kg) eines Normalgewichtigen?",
        optionen: ["ca. 10.000 kcal", "ca. 50.000 kcal", "ca. 140.000 kcal", "ca. 500.000 kcal"],
        richtig: 2,
        erklaerung: "Ca. 15 kg Körperfett = ~140.000 kcal. Der Körperfettspeicher ist mit Abstand der größte Energiespeicher."
      },
      {
        frage: "Was stabilisiert der Leberglykogenspeicher?",
        optionen: ["Die Muskelfunktion", "Den Blutzucker", "Das Immunsystem", "Die Hormonproduktion"],
        richtig: 1,
        erklaerung: "Das Leberglykogen stabilisiert den Blutzucker. Ist er leer (z.B. bei Stress durch Cortisol), droht ein Hungerast."
      },
      {
        frage: "Was ist die Basis der Körper-Kompositions-Pyramide?",
        optionen: ["Supplements", "Protein Timing", "Energie-Bilanz", "Mikronährstoffe"],
        richtig: 2,
        erklaerung: "Die Energie-Bilanz (Kalorienmenge) ist die wichtigste Grundlage. Supplements stehen ganz oben — also am unwichtigsten."
      }
    ]
  },
  {
    id: "kohlenhydrate",
    titel: "Die Kohlenhydrate",
    farbe: "#27ae60",
    icon: "🌾",
    karten: [
      {
        frage: "Was sind die 3 Hauptgruppen der Kohlenhydrate?",
        antwort: "1. Einfachzucker (Monosaccharide):\n   Glukose, Fruktose, Galaktose\n\n2. Zweifachzucker (Disaccharide):\n   Saccharose, Maltose, Laktose\n\n3. Mehrfachzucker (Polysaccharide):\n   Stärke (Amylose, Amylopektin), Glykogen, Ballaststoffe"
      },
      {
        frage: "Welche Monosaccharide gibt es und wo kommen sie vor?",
        antwort: "• Glukose (Traubenzucker) → Süßwaren, Limonaden\n• Fruktose (Fruchtzucker) → Honig, Früchte\n• Galaktose → Milch (Bestandteil der Laktose)"
      },
      {
        frage: "Welche Disaccharide gibt es?",
        antwort: "• Saccharose (Glukose + Fruktose) → Haushaltszucker\n• Maltose (2× Glukose) → Malzbier\n• Laktose (Glukose + Galaktose) → Milch"
      },
      {
        frage: "Was ist Insulin und welche Rolle spielt es bei KH?",
        antwort: "Insulin ist ein Hormon der Bauchspeicheldrüse.\n\nBei Kohlenhydrataufnahme:\n1. Blutzucker steigt\n2. Insulin wird ausgeschüttet\n3. Insulin öffnet Zellen für Glukose\n4. Glukose wird in Zellen transportiert\n\nBei Insulinresistenz: Zellen reagieren nicht mehr → Glukose bleibt im Blut → Typ-2 Diabetes"
      },
      {
        frage: "Was passiert, wenn die Glukosespeicher in der Leber voll sind?",
        antwort: "Glucose in die Leber → Depot\n\nFruktose hat KEINEN Weg zurück!\n→ Bei Überschuss: wird zu FETT umgewandelt\n→ Aus der Leber als VLDL ins Blut\n\n→ Daher: Fruktose in großen Mengen (z.B. Fructosesirup) besonders problematisch!"
      },
      {
        frage: "Was ist der Glykämische Index (GI)?",
        antwort: "Maß dafür, wie stark ein Lebensmittel den Blutzucker anhebt.\n\nBezogen auf 50g Kohlenhydrate:\n• Referenzwert: Weißbrot oder Glukose = GI 100\n• Niedriger GI (<55): langsamer Blutzuckeranstieg\n• Hoher GI (>70): rascher Blutzuckeranstieg\n\nEinflussfaktoren: Fett, Eiweiß, Ballaststoffe, Zubereitung, Verarbeitung"
      },
      {
        frage: "Was ist der Unterschied GI vs. Glykämische Last (GL)?",
        antwort: "Problem mit GI: Berücksichtigt nicht die Menge!\n\nGL = GI × Gramm KH pro Portion ÷ 100\n\nBeispiel Karotten vs. Weißbrot:\n• Karotten: GI = 70, aber GL = 3 (wenig KH pro Portion)\n• Weißbrot: GI = 70, aber GL = 20 (viel KH pro Portion)\n\n→ GL ist aussagekräftiger für den Alltag!"
      }
    ],
    quiz: [
      {
        frage: "Glukose + Fruktose ergibt welchen Zweifachzucker?",
        optionen: ["Laktose", "Maltose", "Saccharose", "Galaktose"],
        richtig: 2,
        erklaerung: "Saccharose = Glukose + Fruktose. Das ist unser normaler Haushaltszucker."
      },
      {
        frage: "Welcher Zuckertyp kommt in Milch vor?",
        optionen: ["Fruktose", "Laktose", "Maltose", "Saccharose"],
        richtig: 1,
        erklaerung: "Laktose (Milchzucker) = Glukose + Galaktose. Kommt ausschließlich in Milch und Milchprodukten vor."
      },
      {
        frage: "Was ist problematisch an großen Mengen Fruktose?",
        optionen: [
          "Sie erhöht sofort den Blutzucker",
          "Sie wird direkt als Fett eingelagert wenn Leber voll ist",
          "Sie hemmt die Insulinausschüttung",
          "Sie löst Laktoseintoleranz aus"
        ],
        richtig: 1,
        erklaerung: "Wenn der Leberspeicher voll ist, wandelt die Leber überschüssige Fruktose in Fett um (VLDL). Das ist ein großes Problem bei Fructosesirup in Fertigprodukten."
      },
      {
        frage: "Worauf bezieht sich der Glykämische Index?",
        optionen: ["10g Kohlenhydrate", "50g Kohlenhydrate", "100g des Lebensmittels", "1 Portion des Lebensmittels"],
        richtig: 1,
        erklaerung: "Der GI wird immer auf 50g Kohlenhydrate bezogen — daher kann er irreführend sein (z.B. Karotten haben hohen GI aber sehr niedrige GL)."
      },
      {
        frage: "Was senkt den glykämischen Index eines Lebensmittels?",
        optionen: [
          "Kochen und Verarbeiten",
          "Mehr Zucker",
          "Fett, Eiweiß und Ballaststoffe",
          "Weniger Wasser"
        ],
        richtig: 2,
        erklaerung: "Fett, Eiweiß und Ballaststoffe verlangsamen die Verdauung und senken dadurch den Blutzuckeranstieg — also den effektiven GI."
      }
    ]
  },
  {
    id: "proteine",
    titel: "Proteine & Aminosäuren",
    farbe: "#2980b9",
    icon: "💪",
    karten: [
      {
        frage: "Aus was bestehen Proteine?",
        antwort: "Proteine bestehen aus Aminosäuren.\n\n• 20 für den Menschen relevante Aminosäuren\n• Elemente: Kohlenstoff, Sauerstoff, Wasserstoff + Stickstoff (wichtig!)\n• Der Körper kann 100.000 bis Millionen verschiedene Proteine bauen\n• Peptide: < 100 Aminosäuren\n• Proteine: > 100 Aminosäuren"
      },
      {
        frage: "Welche Aufgaben haben Proteine im Körper?",
        antwort: "• Struktur: Keratin (Haare/Nägel), Kollagen (Haut, Knorpel, Knochen)\n• Bewegung: Aktin & Myosin (Muskeln)\n• Enzyme: beschleunigen alle Stoffwechselvorgänge\n• Hormone: Insulin, Wachstumshormon, Testosteron\n• Rezeptoren: Schlüssel-Schloss-Prinzip\n• Transport: Hämoglobin (O²), Albumin (Fettsäuren)\n• Immunglobuline: Antikörper / Immunsystem\n• Speicherproteine: z.B. Ferritin (Eisen)"
      },
      {
        frage: "Was sind essentielle Aminosäuren?",
        antwort: "Essentielle Aminosäuren kann der Körper NICHT selbst herstellen — sie müssen über die Nahrung zugeführt werden.\n\nEssentielle AS:\nLeucin, Isoleucin, Valin, Tryptophan, Phenylalanin, Methionin, Threonin, Lysin\n\nSemi-essentielle AS (bedingt essentiell):\nArginin, Histidin\n\n→ Fehlt auch nur EINE essentielle AS → Proteinsynthese eingeschränkt!"
      },
      {
        frage: "Was ist die Biologische Wertigkeit?",
        antwort: "Maß dafür, wie gut der Körper ein Nahrungsprotein in körpereigenes Protein umwandeln kann.\n\nReferenzwert: Vollei = 100\n\nTop-Werte:\n• Molkenprotein (Whey): 104–110\n• Vollei: 100\n• Rindfleisch: 92\n• Thunfisch: 92\n• Kuhmilch: 88\n• Soja: 84–86\n\nKombinationen erreichen noch höhere Werte:\n• 65% Kartoffel + 35% Ei: 137\n• 75% Milch + 25% Weizen: 123"
      },
      {
        frage: "Was sind BCAAs?",
        antwort: "Branched Chain Amino Acids = Verzweigtkettige Aminosäuren\n\nDrei BCAAs:\n• Leucin (der 'Boss')\n• Isoleucin\n• Valin\n\nBesonderheit: Werden direkt im Muskel verstoffwechselt (nicht in der Leber!)\n\nWann aktiviert: durch Training und Fasten"
      },
      {
        frage: "Was bewirkt Leucin im Muskel?",
        antwort: "Leucin ist die wichtigste BCAA:\n\n• Steigert die Proteinsynthese im Muskel\n• Hemmt den Eiweißabbau\n• Fördert die Glukoseaufnahme im Muskel\n• Verbessert Erholung & Regeneration\n\n→ Whey-Protein enthält ~25% BCAAs und wirkt daher besonders gut für Muskelaufbau"
      },
      {
        frage: "Whey, Casein oder Soja — welches ist am besten für Muskelaufbau?",
        antwort: "Anstieg essentieller Aminosäuren nach Einnahme:\nWhey > Soja > Casein\n\nMuskelproteinsynthese direkt nach Belastung:\n• Whey 122% stärker als Casein\n• Whey 31% stärker als Soja\n\nMuskelproteinsynthese in Ruhephase:\n• Whey 93% stärker als Casein\n• Whey 18% stärker als Soja\n\n→ Reines Ei-Protein erzielt ähnliche Wirkung wie Whey"
      },
      {
        frage: "Was sagt die Forschung zu Protein-Timing?",
        antwort: "Schoenfeld et al. (Meta-Analyse):\n\n→ Protein-Timing (wann man Protein isst) ist NICHT entscheidend!\n\nWichtigster Faktor: Gesamte tägliche Proteinmenge!\n\nGesamt-Protein-Zufuhr = der stärkste Prädiktor für Muskelzuwachs\n\n→ Erst wenn die Gesamtmenge stimmt, lohnt sich Timing-Optimierung"
      }
    ],
    quiz: [
      {
        frage: "Welches Lebensmittel hat die höchste biologische Wertigkeit?",
        optionen: ["Rindfleisch (92)", "Vollei (100)", "Molkenprotein (104–110)", "Soja (84–86)"],
        richtig: 2,
        erklaerung: "Molkenprotein (Whey) hat mit 104–110 die höchste biologische Wertigkeit. Das Vollei ist der Referenzwert = 100."
      },
      {
        frage: "Was ist die Kombination mit der höchsten biologischen Wertigkeit?",
        optionen: [
          "Soja + Weizen (101)",
          "Milch + Weizen (105)",
          "Ei + Soja (122)",
          "Kartoffel + Ei (137)"
        ],
        richtig: 3,
        erklaerung: "65% Kartoffel + 35% Ei ergibt eine biologische Wertigkeit von 137 — höher als jedes Einzellebensmittel!"
      },
      {
        frage: "Wo werden BCAAs hauptsächlich verstoffwechselt?",
        optionen: ["In der Leber", "In der Niere", "Direkt im Muskel", "Im Dünndarm"],
        richtig: 2,
        erklaerung: "BCAAs werden direkt im Muskel verstoffwechselt — das ist ihr Hauptunterschied zu anderen Aminosäuren, die zur Leber müssen."
      },
      {
        frage: "Welches ist der 'Boss' unter den BCAAs?",
        optionen: ["Valin", "Isoleucin", "Leucin", "Methionin"],
        richtig: 2,
        erklaerung: "Leucin ist der wichtigste BCAA — er aktiviert die Proteinsynthese im Muskel am stärksten."
      },
      {
        frage: "Was ist laut Forschung der wichtigste Faktor für Muskelzuwachs durch Protein?",
        optionen: [
          "Protein direkt vor dem Training",
          "Protein direkt nach dem Training",
          "Gesamte tägliche Proteinmenge",
          "Protein-Typ (Whey vs. Casein)"
        ],
        richtig: 2,
        erklaerung: "Laut Schoenfeld et al. ist die Gesamtmenge des täglichen Proteins der stärkste Prädiktor — nicht das Timing!"
      },
      {
        frage: "Welche Aminosäuren sind 'essentiell'?",
        optionen: [
          "Der Körper kann sie selbst herstellen",
          "Der Körper kann sie NICHT selbst herstellen",
          "Sie sind für Sportler nicht wichtig",
          "Sie kommen nur in Fleisch vor"
        ],
        richtig: 1,
        erklaerung: "Essentielle Aminosäuren MÜSSEN über die Nahrung zugeführt werden — der Körper kann sie nicht selbst produzieren."
      }
    ]
  },
  {
    id: "fette",
    titel: "Fette & Fettsäuren",
    farbe: "#8e44ad",
    icon: "🥑",
    karten: [
      {
        frage: "Welche Arten von Fettsäuren gibt es?",
        antwort: "Nach Sättigung:\n• Gesättigte Fettsäuren (tierisch, fest bei Raumtemperatur)\n• Einfach ungesättigte Fettsäuren (z.B. Olivenöl)\n• Mehrfach ungesättigte Fettsäuren (Omega 3 & 6)\n\nNach Kettenlänge:\n• Kurzkettige FS\n• Mittelkettige FS\n• Langkettige FS\n\nEssentielle FS: müssen über Nahrung zugeführt werden!"
      },
      {
        frage: "Was sind die Funktionen von Fett im Körper?",
        antwort: "1. Energieträger: 9 kcal/g (höchste Energiedichte)\n2. Energiespeicher: Depotfett\n3. Träger fettlöslicher Vitamine: A, D, E, K\n4. Essentielle Fettsäuren: Zellmembran-Aufbau\n5. Geschmacksträger: Aroma- und Geschmacksstoffe sind fettlöslich\n6. Isolationsfunktion: Wärmeschutz unter der Haut\n7. Sättigungsfunktion: macht länger satt\n8. Schutzfunktion: schützt Organe"
      },
      {
        frage: "Welche Vitamine sind fettlöslich?",
        antwort: "Fettlösliche Vitamine: A, D, E, K\n\n→ Können nur mit Fett aufgenommen werden!\n\nBeispiel: Butter zu Karotengemüse verbessert die Aufnahme von Vitamin A (Beta-Carotin)\n\nWasserlösliche Vitamine: C, alle B-Vitamine, H, P\n→ Werden täglich ausgeschieden → regelmäßige Zufuhr wichtig"
      },
      {
        frage: "Was sind Omega-3 und Omega-6 Fettsäuren?",
        antwort: "Beide sind mehrfach ungesättigte, essentielle Fettsäuren.\n\nOmega-3 (EPA, DHA):\n• Anti-entzündlich\n• Quellen: Fettfisch (Lachs, Hering), Leinöl\n\nOmega-6:\n• Entzündungsfördernd bei Überschuss\n• Quellen: Sonnenblumenöl, Fleisch\n\nWestliche Ernährung: Omega-6 viel zu hoch!\nIdeal: Verhältnis Omega-6 : Omega-3 = 4:1 (oder besser)"
      },
      {
        frage: "Was sind Eicosanoide?",
        antwort: "Botenstoffe, die aus Omega-3 und Omega-6 gebildet werden:\n\n'Gute Eicosanoide' (aus Omega-3):\n• Entzündungshemmend\n• Hemmen Thrombozytenaggregation\n• Wirken gefäßerweiternd\n• Regulieren Zellproliferation\n• Verbessern Immunfunktion\n\n'Schlechte Eicosanoide' (aus Omega-6):\n• Entzündungsfördernd\n• Fördern Thrombozytenaggregation\n• Wirken gefäßverengend\n• Insulin fördert schlechte Eicosanoide!"
      },
      {
        frage: "Welche Krankheiten hängen mit zellulärer Entzündung zusammen?",
        antwort: "Chronische zelluläre Entzündung (oft durch Ernährung ausgelöst) steht in Verbindung mit:\n\n• Adipositas (Übergewicht)\n• Typ-2-Diabetes\n• Herzerkrankungen\n• Krebs\n• Alzheimer\n• Asthma\n• Allergien\n• Arthritis\n• Autoimmunerkrankungen\n\n→ Zu viel Omega-6, zu wenig Omega-3 und schlechte Insulinkontrolle = Hauptauslöser!"
      },
      {
        frage: "Qualitätskriterien für Omega-3 Supplements?",
        antwort: "• EPA/DHA: mind. 2,5g/Tag\n• Reinheit: z.B. IFOS-zertifiziert\n• Vitamin E: 6–30mg/Tag (als Antioxidans)"
      }
    ],
    quiz: [
      {
        frage: "Welche Vitamine sind fettlöslich?",
        optionen: ["B, C, H, P", "A, D, E, K", "C, D, E, K", "A, B12, D, E"],
        richtig: 1,
        erklaerung: "Fettlösliche Vitamine: A, D, E, K — Merke: 'ADEK'. Sie können nur mit Fett aufgenommen werden!"
      },
      {
        frage: "Was fördert 'schlechte Eicosanoide' (entzündungsfördernd)?",
        optionen: ["Omega-3", "Omega-6 + Insulin", "Omega-9", "Vitamin D"],
        richtig: 1,
        erklaerung: "Zu viel Omega-6 und hohe Insulinspiegel fördern die Bildung entzündungsfördernder Eicosanoide."
      },
      {
        frage: "Wie viel kcal liefert 1g Fett?",
        optionen: ["4 kcal", "7 kcal", "9 kcal", "11 kcal"],
        richtig: 2,
        erklaerung: "Fett liefert 9 kcal/g — mehr als doppelt so viel wie Kohlenhydrate oder Protein (je 4 kcal/g)."
      },
      {
        frage: "Welche Funktion haben essentielle Fettsäuren?",
        optionen: [
          "Sie liefern ausschließlich Energie",
          "Aufbau von Zellmembranen und Regulierung des Fettstoffwechsels",
          "Sie ersetzen Kohlenhydrate als Hauptenergiequelle",
          "Sie sind nur für Sportler wichtig"
        ],
        richtig: 1,
        erklaerung: "Essentielle Fettsäuren sind für den Aufbau von Zellmembranen, die Regulierung des Fettstoffwechsels und das Senken des Cholesterinspiegels wichtig."
      },
      {
        frage: "Was ist typisch für die westliche Ernährung in Bezug auf Omega-3/6?",
        optionen: [
          "Zu viel Omega-3, zu wenig Omega-6",
          "Ausgeglichenes Verhältnis",
          "Zu viel Omega-6, zu wenig Omega-3",
          "Zu wenig von beiden"
        ],
        richtig: 2,
        erklaerung: "Die westliche Ernährung hat viel zu viel Omega-6 (Pflanzenöle, Fleisch) und zu wenig Omega-3 → fördert chronische Entzündungen."
      }
    ]
  },
  {
    id: "vitamine_mineralstoffe",
    titel: "Vitamine & Mineralstoffe",
    farbe: "#16a085",
    icon: "🥦",
    karten: [
      {
        frage: "Was sind Vitamine und welche Eigenschaften haben sie?",
        antwort: "Vitamine sind:\n• Mikronährstoffe organischen Ursprungs\n• Lebensnotwendig (essentiell)\n• Vom Körper NICHT selbst herstellbar\n• Liefern KEINE Energie\n• Wirken als Biokatalysatoren und Coenzyme\n\nSchlüsselrolle im:\n• Kohlenhydrat-Stoffwechsel\n• Eiweißstoffwechsel\n• Fettstoffwechsel"
      },
      {
        frage: "Fettlösliche vs. wasserlösliche Vitamine?",
        antwort: "Fettlöslich (A, D, E, K):\n• Können im Körper gespeichert werden\n• Brauchen Fett zur Aufnahme\n• Überdosierung möglich!\n\nWasserlöslich (C, B-Vitamine, H, P):\n• Werden täglich ausgeschieden\n• Tägliche Zufuhr nötig\n• Überdosierung kaum möglich\n• B-Vitamine wichtig für Energiestoffwechsel"
      },
      {
        frage: "Was sind Mineralstoffe und wozu braucht man sie?",
        antwort: "Unentbehrliche anorganische Stoffe.\n\nFunktionen:\n• Aufbau von Knochen und Zähnen (Ca, P)\n• Enzymaktivierung\n• Erregungsleitung im Nervensystem\n• Muskelfunktion\n• Regulation des Wasserhaushalts\n• Aufrechterhaltung des pH-Wertes und Blutdrucks\n\nWerden NICHT verbraucht, aber verloren (Schweiß, Harn, Stuhl)"
      },
      {
        frage: "Mengenelemente vs. Spurenelemente?",
        antwort: "Mengenelemente (>50mg/Tag Bedarf):\nCalcium (Ca), Magnesium (Mg), Phosphor (P), Kalium (K), Natrium (Na), Chlor (Cl), Schwefel (S)\n\nSpurenelemente (< 50mg/Tag Bedarf):\nEisen (Fe), Zink (Zn), Selen (Se), Jod (J), Fluor (F), Chrom (Cr), Kupfer (Cu), Mangan (Mn), Molybdän (Mo)"
      },
      {
        frage: "Warum braucht man heute oft Nahrungsergänzungsmittel?",
        antwort: "Gründe für den erhöhten Bedarf heute:\n• Abnahme der Bodenqualität (weniger Nährstoffe in Lebensmitteln)\n• Weniger Vielfalt in der Ernährung\n• Mehr Toxine in Lebensmitteln und Umwelt\n• Übermaß an Antibiotika und Medikamenten\n• Chronischer Stress\n• Schlafmangel\n• Weniger Zeit im Freien\n• Mangelnde Bewegung"
      }
    ],
    quiz: [
      {
        frage: "Was ist ein Merkmal von fettlöslichen Vitaminen?",
        optionen: [
          "Sie werden täglich ausgeschieden",
          "Sie können im Körper gespeichert werden",
          "Sie brauchen kein Fett zur Aufnahme",
          "Eine Überdosierung ist kaum möglich"
        ],
        richtig: 1,
        erklaerung: "Fettlösliche Vitamine (A, D, E, K) können im Körper gespeichert werden — daher ist eine Überdosierung möglich (im Gegensatz zu wasserlöslichen)."
      },
      {
        frage: "Welche sind Mengenelemente?",
        optionen: [
          "Eisen, Zink, Selen, Jod",
          "Calcium, Magnesium, Kalium, Natrium",
          "Chrom, Mangan, Molybdän",
          "Vitamin A, D, E, K"
        ],
        richtig: 1,
        erklaerung: "Mengenelemente: Ca, Mg, P, K, Na, Cl, S — der Körper braucht mehr als 50mg/Tag davon."
      },
      {
        frage: "Vitamine liefern...",
        optionen: ["4 kcal/g", "9 kcal/g", "7 kcal/g", "Keine Energie"],
        richtig: 3,
        erklaerung: "Vitamine liefern KEINE Energie! Sie wirken als Biokatalysatoren und Coenzyme — steuern also Stoffwechselvorgänge."
      },
      {
        frage: "Welche Vitamine sind wasserlöslich?",
        optionen: ["A, D, E, K", "C und alle B-Vitamine", "A, C, E, K", "D, E, B12, K"],
        richtig: 1,
        erklaerung: "Wasserlösliche Vitamine: C und alle B-Vitamine (B1, B2, B3, B5, B6, B7/H, B9, B12) sowie H und P."
      }
    ]
  },
  {
    id: "makro_verhaeltnis",
    titel: "Makronährstoff-Verhältnis",
    farbe: "#c0392b",
    icon: "📊",
    karten: [
      {
        frage: "Was empfiehlt die DGE (Deutsche Gesellschaft für Ernährung)?",
        antwort: "DGE Empfehlung:\n• Kohlenhydrate: 60%\n• Protein: 10%\n• Fett: 30%\n\nKritik: Für Sportler und Fitnessbegeisterte oft suboptimal (zu wenig Protein, zu viele KH)"
      },
      {
        frage: "Was ist die Zone-Diet?",
        antwort: "Zone Diet Verhältnis:\n• Kohlenhydrate: 40%\n• Protein: 30%\n• Fett: 30%\n\n→ Ausgeglichenes Verhältnis, gut für Blutzuckerkontrolle"
      },
      {
        frage: "Was ist die Ketogene Diät?",
        antwort: "Ketogene Diät:\n• Kohlenhydrate: 5% (sehr wenig!)\n• Protein: 15%\n• Fett: 80%\n\nWirkung: Körper schaltet auf Fettverbrennung um (Ketose)\nGeeignet für: Fettabbau, manche Erkrankungen\nNachteil: Schwer durchzuhalten, Anpassungsphase"
      },
      {
        frage: "Wie verändert sich das optimale Makroverhältnis nach Trainingsphase (Periodisierung)?",
        antwort: "Eiweiß bleibt konstant bei ~25%\n\nFett ↔ Kohlenhydrate variieren:\n\n• Grundlagen: KH 40% / Fett 35%\n• Aufbau: KH 43% / Fett 32%\n• Höchstleistung: KH 47% / Fett 28%\n• Wettkampf: KH 50% / Fett 25%\n\n→ Je intensiver die Phase, desto mehr KH!"
      },
      {
        frage: "Was ist Nutrigenomics?",
        antwort: "Nutrigenomics = Einfluss der Ernährung auf die Genexpression\n\n'Genetics load the gun, lifestyle pulls the trigger'\n\n→ Gene bestimmen die Disposition, ABER Ernährung und Lebensstil entscheiden, ob gute Gene 'ein-' oder schlechte Gene 'ausgeschaltet' werden.\n\n→ Individualisierung der Ernährung ist wichtig!"
      }
    ],
    quiz: [
      {
        frage: "Wie viel Protein empfiehlt die DGE?",
        optionen: ["5%", "10%", "25%", "30%"],
        richtig: 1,
        erklaerung: "Die DGE empfiehlt nur 10% Protein — von vielen Sportexperten als zu niedrig angesehen."
      },
      {
        frage: "Wie viel KH hat die ketogene Diät?",
        optionen: ["5%", "20%", "40%", "60%"],
        richtig: 0,
        erklaerung: "Ketogene Diät: nur 5% KH, dafür 80% Fett. Dadurch wechselt der Körper in die Ketose."
      },
      {
        frage: "In der Wettkampfphase ist der KH-Anteil...",
        optionen: ["Am niedrigsten (40%)", "Am höchsten (50%)", "Gleich wie in der Grundlagenphase", "Nicht relevant"],
        richtig: 1,
        erklaerung: "In der Wettkampfphase: 50% KH — je intensiver das Training, desto mehr Kohlenhydrate werden gebraucht."
      },
      {
        frage: "Was beschreibt Nutrigenomics?",
        optionen: [
          "Die Kalorienberechnung nach Körpertyp",
          "Den Einfluss der Ernährung auf die Genexpression",
          "Die optimale Nährstoffverteilung für Sportler",
          "Die Verdauung von Makronährstoffen"
        ],
        richtig: 1,
        erklaerung: "Nutrigenomics = Wie Ernährung beeinflusst, welche Gene aktiv sind. Gute Ernährung kann schlechte Gene 'ausschalten'."
      }
    ]
  },
  {
    id: "kreatin",
    titel: "Kreatin & Supplements",
    farbe: "#d35400",
    icon: "💊",
    karten: [
      {
        frage: "Was ist Kreatin und wie entsteht es?",
        antwort: "Kreatin wird aus den Aminosäuren Arginin, Glycin und Methionin hergestellt.\n\nSynthese: hauptsächlich in Leber und Nieren\n\nVerteilung im Körper:\n• 95% im Skelettmuskel\n• 5% in Herz, Gehirn, Hoden\n\nFunktion: Schnelle Energiebereitstellung (Phosphokreatin-System) für intensive, kurze Belastungen"
      },
      {
        frage: "Was bewirkt Kreatin-Supplementierung?",
        antwort: "• Erhöht die fettfreie Masse (Muskelmasse)\n• Steigert die Maximalkraft (1RM)\n• Verbessert Muskelausdauer\n• Steigert anaerobe Kraft und Performance\n• Erhöht Phosphokreatin-Speicher um 10–40%\n\nBeste Form: Kreatin Monohydrat (Creapure®)"
      },
      {
        frage: "Wie dosiert man Kreatin?",
        antwort: "Standarddosierung: 3–6g/Tag\n(Mehr bringt nichts — bei gesättigtem Muskel wird es ausgeschieden)\n\nOptionale Ladephase:\n• 20g/Tag für 1–2 Wochen\n• Nur wenn schnelle Sättigung gewünscht\n\nNahrungsquellen (Kreatingehalt pro kg):\n• Hering: 6,5–10g/kg\n• Schwein: 5g/kg\n• Lachs: 4,5g/kg\n• Rindfleisch: 4,5g/kg\n• Thunfisch: 4g/kg\n• Gemüse/Obst: Spuren"
      }
    ],
    quiz: [
      {
        frage: "Aus welchen Aminosäuren wird Kreatin hergestellt?",
        optionen: [
          "Leucin, Isoleucin, Valin",
          "Arginin, Glycin, Methionin",
          "Glutamin, Alanin, Serin",
          "Lysin, Threonin, Tryptophan"
        ],
        richtig: 1,
        erklaerung: "Kreatin wird aus Arginin, Glycin und Methionin synthetisiert — hauptsächlich in Leber und Nieren."
      },
      {
        frage: "Wie viel Kreatin enthält Hering (pro kg)?",
        optionen: ["1–2g", "3–4g", "6,5–10g", "15–20g"],
        richtig: 2,
        erklaerung: "Hering hat mit 6,5–10g/kg den höchsten natürlichen Kreatingehalt — deshalb sind Fisch und Fleisch die Hauptquellen."
      },
      {
        frage: "Welche Kreatin-Form ist die am besten untersuchte?",
        optionen: ["Kreatin Citrat", "Kreatin Ethyl-Ester", "Kreatin Monohydrat", "Kreatin Phosphat"],
        richtig: 2,
        erklaerung: "Kreatin Monohydrat (z.B. Creapure®) ist die am besten untersuchte und wirksamste Form."
      },
      {
        frage: "Was ist die Standarddosierung für Kreatin?",
        optionen: ["1g/Tag", "3–6g/Tag", "10–15g/Tag", "20g/Tag"],
        richtig: 1,
        erklaerung: "3–6g Kreatin täglich reichen aus. Mehr bringt keinen Vorteil — bei gefüllten Muskelspeichern wird überschüssiges Kreatin einfach ausgeschieden."
      }
    ]
  },
  {
    id: "wasser_verdauung",
    titel: "Wasser & Verdauung",
    farbe: "#2471a3",
    icon: "💧",
    karten: [
      {
        frage: "Welche Funktionen hat Wasser im Körper?",
        antwort: "Wasser ist die 5. Bilanz der Ernährung und lebenswichtig:\n\n• Lösungs- und Transportmittel für Nährstoffe\n• Regulierung der Körpertemperatur (Schwitzen)\n• Bestandteil aller Körperflüssigkeiten (Blut, Lymphe, Verdauungssäfte)\n• Notwendig für alle Stoffwechselvorgänge\n• Schmiert Gelenke und Knorpel\n• Entgiftung über Nieren\n\nDer Körper besteht zu ca. 60–70% aus Wasser.",
        tipp: "Wasser = 0 kcal, aber essentiell! Es ist die 5. Bilanz der Ernährung."
      },
      {
        frage: "Wie viel Wasser braucht man täglich?",
        antwort: "Richtwert: ca. 30–40 ml pro kg Körpergewicht/Tag\n\nBeispiel 70 kg Person: ca. 2,1–2,8 Liter/Tag\n\nMehr Bedarf bei:\n• Sport / Schwitzen\n• Hitze\n• Krankheit\n• Hohem Proteinkonsum\n• Ballaststoffreicher Ernährung\n\nMangel führt zu: Leistungsabfall, Konzentrationsprobleme, Kopfschmerzen",
        tipp: "Bereits 2% Wasserverlust = spürbare Leistungseinbuße!"
      },
      {
        frage: "Was ist PAL und was ist NEAT?",
        antwort: "PAL = Physical Activity Level\n→ Gesamter Aktivitätsfaktor für den Tag (= Basis für TDEE-Berechnung)\n\nNEAT = Non-Exercise Activity Thermogenesis\n→ Kalorienerverbrauch durch ALLE Aktivitäten AUSSER gezieltem Sport:\n• Gehen, Stehen, Treppensteigen\n• Hausarbeit, Einkaufen\n• Nervös mit dem Fuß wippen\n\n→ NEAT ist oft unterschätzt — kann hunderte kcal täglich ausmachen!\n→ Sitzendes Verhalten senkt NEAT drastisch",
        tipp: "NEAT macht bei aktiven Menschen oft mehr aus als das Sportstudio!"
      },
      {
        frage: "Welche Organe sind am Verdauungsprozess beteiligt?",
        antwort: "Von oben nach unten:\n\n1. Mundhöhle — Kauen, Speichemischung (Amylase)\n2. Speiseröhre (Ösophagus) — Transport\n3. Magen — Quetscht, mischt mit Magensäure und Enzymen\n4. Dünndarm — Hauptort der Nährstoff-Resorption ins Blut/Lymphe\n5. Bauchspeicheldrüse — Enzyme für alle Makronährstoffe\n6. Leber — Produziert Galle (Fettverdauung)\n7. Gallenblase — Speichert Galle\n8. Dickdarm — Entzieht Wasser und Mineralstoffe, Ballaststoffabbau\n9. Rektum + Anus — Ausscheidung"
      },
      {
        frage: "Wo werden die Makronährstoffe hauptsächlich resorbiert?",
        antwort: "Alle drei Makronährstoffe werden hauptsächlich im DÜNNDARM resorbiert:\n\n• Kohlenhydrate → werden zu Glukose aufgespalten → ins Blut\n• Proteine → werden zu Aminosäuren aufgespalten → ins Blut\n• Fette → werden zu Fettsäuren + Glycerol → in die Lymphe (dann Blut)\n\nBauchspeicheldrüse liefert die Enzyme dafür.\nLeber verarbeitet anschließend die resorbierten Nährstoffe."
      }
    ],
    quiz: [
      {
        frage: "Was ist NEAT?",
        optionen: [
          "Ein Proteinshake-Typ",
          "Kalorienerverbrauch durch alle Aktivitäten außer gezieltem Sport",
          "Eine Methode zur Körperfettmessung",
          "Ein Maß für die Proteinqualität"
        ],
        richtig: 1,
        erklaerung: "NEAT = Non-Exercise Activity Thermogenesis. Das ist der Kalorienverbrauch durch Alltagsbewegungen — oft unterschätzt aber sehr bedeutend!"
      },
      {
        frage: "Wofür steht PAL?",
        optionen: [
          "Protein Absorption Level",
          "Physical Activity Level",
          "Protein Amino Load",
          "Physical Aerobic Limit"
        ],
        richtig: 1,
        erklaerung: "PAL = Physical Activity Level. Er ist der Multiplikator für den Grundumsatz (BMR) zur Berechnung des Tagesbedarfs (TDEE)."
      },
      {
        frage: "Wo werden Nährstoffe hauptsächlich ins Blut aufgenommen?",
        optionen: ["Im Magen", "Im Dickdarm", "Im Dünndarm", "In der Leber"],
        richtig: 2,
        erklaerung: "Der Dünndarm ist der Hauptort der Resorption — Kohlenhydrate und Proteine ins Blut, Fette über die Lymphe."
      },
      {
        frage: "Welches Organ produziert die Galle für die Fettverdauung?",
        optionen: ["Bauchspeicheldrüse", "Magen", "Leber", "Dünndarm"],
        richtig: 2,
        erklaerung: "Die Leber produziert Galle. Die Gallenblase speichert sie und gibt sie bei Bedarf in den Dünndarm ab."
      },
      {
        frage: "Bereits wie viel % Wasserverlust führt zu spürbarem Leistungsabfall?",
        optionen: ["0,5%", "1%", "2%", "5%"],
        richtig: 2,
        erklaerung: "Bereits 2% Wasserverlust (z.B. 1,4 Liter bei 70 kg) führt zu messbarem Leistungsabfall, Konzentrationsproblemen und Kopfschmerzen."
      }
    ]
  },
  {
    id: "energiesysteme",
    titel: "Energiesysteme & Stoffwechsel",
    farbe: "#1e8449",
    icon: "🔋",
    karten: [
      {
        frage: "Was sind die 3 Energiesysteme des Körpers?",
        antwort: "1. ATP-CP System (anaerob alaktazid)\n   → 0–10 Sekunden, sehr intensiv\n   → Phosphokreatin → ATP\n   → Beispiel: Sprint, Gewichtheben\n\n2. Glykolytisches System (anaerob laktazid)\n   → 10 Sek – 2 Minuten\n   → Glukose → Pyruvat → Laktat\n   → Beispiel: 400m Lauf\n\n3. Oxidatives System (aerob)\n   → Ab ca. 2 Minuten, unbegrenzt\n   → Glukose + Fett + O₂ → ATP + CO₂ + H₂O\n   → Beispiel: Marathonlauf, Radfahren"
      },
      {
        frage: "Was ist der Unterschied zwischen aerobem und anaerobem Stoffwechsel?",
        antwort: "Aerob (mit Sauerstoff):\n• Vollständige Verbrennung von KH und Fett\n• Produkte: CO₂ + H₂O + viel ATP\n• Langsame aber effiziente Energiegewinnung\n• Dauerhaft aufrechtzuerhalten\n\nAnaerob (ohne Sauerstoff):\n• Unvollständige Verbrennung von KH\n• Produkt: Laktat\n• Schnelle aber begrenzte Energiegewinnung\n• Führt schnell zu Erschöpfung\n\n→ Je intensiver die Belastung, desto mehr anaerob!",
        tipp: "Merke: Aerob = Ausdauer, Anaerob = Kraft/Sprint"
      },
      {
        frage: "Was ist ATP und warum ist es wichtig?",
        antwort: "ATP = Adenosintriphosphat\n\n→ Die direkte Energiewährung des Körpers!\nJede Muskelkontraktion braucht ATP.\n\nATP-Bildungsrate (mmol/min):\n• ATP/CP anaerob: 4,4 (schnellste!)\n• Glykogen anaerob: 3,0\n• Glykogen Muskel aerob: 1,0\n• Glykogen Leber aerob: 0,4\n• Freie Fettsäuren aerob: 0,4 (langsamste)\n\n→ Fett liefert die meiste Energie, aber am langsamsten!"
      },
      {
        frage: "Was ist Carboloading und wann macht es Sinn?",
        antwort: "Carboloading = gezielte Auffüllung der Glykogenspeicher vor Wettkampf\n\nEffekt:\n• Vor KH-Loading: ~100 mmol/kg Muskel\n• Nach KH-Loading: ~190 mmol/kg Muskel\n→ Nahezu Verdoppelung der Glykogenspeicher!\n\nWann sinnvoll:\n• Ausdauerbelastungen > 90 Minuten\n• 1–3 Tage vor dem Wettkampf\n• Verschiedene Methoden (mit/ohne Entleerungsphase)\n\nFatloading: Fettanteil > 60%, nur bei Belastungen > 6 Stunden, unter med. Überwachung"
      },
      {
        frage: "Wie unterscheiden sich die Energiespeicher bei Sportlern vs. Nicht-Sportlern?",
        antwort: "Kohlenhydrate (Glykogen):\n• Normalperson: ~320g = 1.280 kcal\n• Ausdauertrainierte: ~520g = 2.080 kcal\n\nFette:\n• Normalperson in Fettzellen: ~15 kg = 140.000 kcal\n• Ausdauertrainierte: ~8 kg = 75.000 kcal (weniger Körperfett, mehr intramuskulär)\n\n→ Training erhöht die Glykogenspeicher um 60%!\n→ Fettspeicher liefern immer die meiste Energie"
      }
    ],
    quiz: [
      {
        frage: "Welches Energiesystem liefert Energie für einen 100m Sprint?",
        optionen: [
          "Oxidatives System (aerob)",
          "ATP-CP System (anaerob alaktazid)",
          "Glykolytisches System mit Laktat",
          "Fettstoffwechsel"
        ],
        richtig: 1,
        erklaerung: "Ein 100m Sprint dauert ~10 Sekunden → ATP-CP System. Es liefert Energie ohne Sauerstoff und ohne Laktatproduktion."
      },
      {
        frage: "Was entsteht beim anaeroben Kohlenhydratstoffwechsel?",
        optionen: ["CO₂ + H₂O", "ATP + O₂", "Laktat", "Glykogen"],
        richtig: 2,
        erklaerung: "Anaerober KH-Stoffwechsel: Glukose → Pyruvat → Laktat. Laktat ist das Abbauprodukt, das bei Muskelerschöpfung entsteht."
      },
      {
        frage: "Welches System hat die höchste ATP-Bildungsrate?",
        optionen: [
          "Freie Fettsäuren aerob (0,4)",
          "Glykogen Muskel aerob (1,0)",
          "Glykogen anaerob (3,0)",
          "ATP/CP anaerob (4,4)"
        ],
        richtig: 3,
        erklaerung: "Das ATP/CP-System hat mit 4,4 mmol/min die höchste Bildungsrate — deshalb ist es für maximale Kraft ideal, aber es erschöpft sich nach ~10 Sekunden."
      },
      {
        frage: "Wie viel mehr Glykogen können Ausdauertrainierte speichern?",
        optionen: ["Gleich viel", "Ca. 20% mehr", "Ca. 60% mehr", "Doppelt so viel"],
        richtig: 2,
        erklaerung: "Ausdauertrainierte speichern ca. 520g vs. 320g bei Normalpersonen — das sind ca. 60% mehr Glykogen!"
      },
      {
        frage: "Wann macht Carboloading Sinn?",
        optionen: [
          "Vor jeder Trainingseinheit",
          "Bei Belastungen unter 30 Minuten",
          "Bei Ausdauerbelastungen über 90 Minuten",
          "Nur für Kraftsportler"
        ],
        richtig: 2,
        erklaerung: "Carboloading lohnt sich erst bei Ausdauerbelastungen über 90 Minuten — darunter reichen normale Glykogenspeicher aus."
      }
    ]
  }
  ,
  {
    id: "trainingsplanung",
    titel: "Trainingsplanung",
    farbe: "#0f766e",
    icon: "📋",
    karten: [
      {
        frage: "Was ist der Unterschied zwischen Bewegung und Training?",
        antwort: "Training ist immer zielgerichtet -- Fortschritt ist messbar und erkennbar.\n\nBewegung (z.B. Spazieren, Alltag) kann anstrengend sein, ist aber nicht zielgerichtet.\n\nMerke: Ohne Ziel = Bewegung. Mit Ziel = Training."
      },
      {
        frage: "Was sind die 3 Kerninformationen im Erstgespraech?",
        antwort: "1. Ziel -- Was will der Klient erreichen?\n2. Trainingserfahrung -- Wie viel Erfahrung hat er/sie?\n3. Gesundheitliche Einschraenkungen -- Verletzungen, Erkrankungen?\n\nWichtig: Offene Fragen stellen, keine Suggestivfragen!\nZ.B. Wie schaut dein Schlaf aus? -- statt: Schlaefst du gut?"
      },
      {
        frage: "Was gilt als Krafttrainingserfahrung -- und was nicht?",
        antwort: "Zaehlt NICHT als Krafterfahrung:\n- Yoga\n- Pilates\n- Ausdauertraining\n- Nur Maschinentraining (gilt bei Freigewichten als Anfaenger)\n\nZaehlt als Krafterfahrung:\n- Regelmaessiges Freigewichtstraining mit progressiver Belastung"
      },
      {
        frage: "Was sind die 6 Bewegungsmuster eines Ganzkoeperplans?",
        antwort: "1. Squat -- Quadrizeps + Gluteus (z.B. Kniebeuge)\n2. Hinge -- Hamstrings + Gluteus (z.B. Deadlift, RDL)\n3. Push horizontal -- Brust (z.B. Bankdruecken)\n4. Push vertikal -- Schultern (z.B. Overhead Press)\n5. Pull horizontal -- Trapezius/Ruecken (z.B. Rudern)\n6. Pull vertikal -- Latissimus (z.B. Klimmzug, Latzug)",
        tipp: "Squat = Quad-dominiert · Hinge = Hueift-dominiert"
      },
      {
        frage: "Wie unterscheidet sich Squat von Hinge?",
        antwort: "Squat (knie-dominiert):\n- Hauptmuskel: Quadrizeps + Gluteus\n- Beispiele: Kniebeuge, Goblet Squat, Box Squat\n\nHinge (hueft-dominiert):\n- Hauptmuskel: Hamstrings + Gluteus\n- Beispiele: Deadlift, RDL, Hip Thrust, Leg Curl\n\nFaustregel: Knie beugt sich stark = Squat. Huefte scharniert = Hinge."
      },
      {
        frage: "Was ist der Standard bei Saetzen und Wiederholungen?",
        antwort: "Saetze: 3 pro Uebung als Standard\n- Unilaterale Uebungen: eher 2 (je Seite)\n- Ausnahmen: 4 Saetze moeglich\n\nWiederholungen fuer Hypertrophie: 5-25 Wdh.\n- Das enge 8-12-Fenster ist ueberholt\n- Bei ausreichender Intensitaet ist Hypertrophie ueber 5-30 Wdh. gleichwertig\n\nAnfaenger bei komplexen Uebungen: 5x5 (Technikfokus, fast ohne Gewicht)"
      },
      {
        frage: "Was sind die Belastungszonen -- Kraft, Hypertrophie, Kraftausdauer?",
        antwort: "Maximalkraft:\n- 90-100% 1RM · 1-5 Wdh. · Pause >5 min\n\nHypertrophie:\n- Anfaenger 60-70%, Fortgeschrittene 70-90% 1RM\n- 6-20 Wdh. · Pause 2-5 min\n\nKraftausdauer:\n- Bis 60% 1RM · >20-40 Wdh. · Pause 0,5-1 min",
        tipp: "Schwerer = mehr Kraft. Mittleres Gewicht = Muskelmasse. Leicht + viel = Ausdauer."
      },
      {
        frage: "Was ist Superkompensation?",
        antwort: "Nach einer Trainingsbelastung sinkt die Leistung (Ermuedung).\nDann erholt sich der Koerper und steigert die Leistung UEBER das Ausgangsniveau.\n\nAblauf:\n1. Belastung -- Ermuedung\n2. Erholung\n3. Superkompensation (Leistung > Ausgangsniveau)\n4. Bei fehlender Belastung: Rueckgang auf Ausgangsniveau\n\nFazit: Ohne erneuten Reiz geht der Trainingseffekt verloren!"
      },
      {
        frage: "Was ist NEAT und warum ist es beim Abnehmen wichtig?",
        antwort: "NEAT = Non-Exercise Activity Thermogenesis\nUnbewusste Alltagsbewegung: Zappeln, Stehen, Gehen, Treppe...\n\nProblem im Kaloriendefizit:\n- NEAT sinkt unbewusst um ~100-400 kcal/Tag\n- Das erklaert viele Plateaus beim Abnehmen\n\nGegenmaßnahme: Schritte bewusst hochhalten (Zielwert setzen!)"
      },
      {
        frage: "Was ist die optimale Rate of Loss beim Abnehmen?",
        antwort: "0,5-1% des Koerpergewichts pro Woche\n- Bei stark Uebergewichtigen: bis 1,5% moeglich\n\nWarum nicht mehr?\n- Hoeherer Verlust = mehr Muskelverlust\n- 0,5-1% maximiert den Muskelerhalt\n\nBeispiel: 80 kg Person -- 400-800 g Verlust/Woche ist ideal"
      },
      {
        frage: "Was sind die 4 Hauptprinzipien der Trainingslehre?",
        antwort: "1. Spezifitaet -- Training muss zum Ziel passen\n2. Ueberladung / trainingswirksamer Reiz -- Reiz muss stark genug sein\n3. Variation -- Abwechslung fuer kontinuierliche Anpassung\n4. Progression -- Belastung muss langfristig steigen\n\nDazu weitere Prinzipien:\nIndividualisierung · Periodisierung · Prioritaetsprinzip · Wechsel von Belastung & Erholung"
      },
      {
        frage: "Was sind SMART-Ziele?",
        antwort: "S -- Spezifisch (klar formuliert)\nM -- Messbar (Fortschritt erkennbar)\nA -- Attraktiv (motivierend)\nR -- Realistisch (erreichbar)\nT -- Terminisiert (mit Datum)\n\nBeispiel statt Ich will abnehmen:\nIch nehme bis 01.09. 5 kg Koerperfett ab, gemessen mit Fotos + Waage woechentlich."
      },
      {
        frage: "Warum schwankt das Koerpergewicht taeglich?",
        antwort: "Taeglich schwankende Faktoren:\n- Wassereinlagerungen\n- Glykogenspeicher (jedes g Glykogen bindet 3-4 g Wasser)\n- Darminhalt (Verstopfung kann +2 kg machen!)\n\nMuskeln und Fett veraendern sich nur langfristig.\n\nFazit: Nicht jede Waagen-Schwankung bedeutet Fettveraenderung. Trend ueber Wochen zaehlt."
      },
      {
        frage: "Was ist Beweglichkeit -- und welches Grundprinzip gilt?",
        antwort: "Beweglichkeit = Bewegungsausmass in einem Gelenk\n\nWichtigstes Prinzip: NICHT maximal, sondern OPTIMAL ausbilden!\n\nMethoden:\n- Dynamisch-aktiv (Schwunggymnastik) -- vor dem Training\n- Passiv-statisch (Dehnen) -- nach dem Training\n- PNF-Stretching (Propriozeptive Neuromuskulaere Fazilitation) -- fortgeschrittene Methode"
      },
      {
        frage: "Was sind die 4 Trainingsziele laut PFA-Skript?",
        antwort: "1. Praevention -- Verletzungen und Krankheiten vorbeugen\n2. Rehabilitation -- Wiederherstellung nach Verletzung\n3. Leistungssteigerung -- sportliche Performance verbessern\n4. Koerperformung -- Aesthetik, Koerperzusammensetzung\n\nDazu: Psychische Effekte (Stressabbau, Selbstvertrauen, Wohlbefinden)"
      }
    ],
    quiz: [
      { frage: "Wie viel Prozent braucht man pro Pruefungsabschnitt, um die praktische Pruefung zu bestehen?", optionen: ["50%", "60%", "70%", "80%"], richtig: 1, erklaerung: "Laut Seminar sind 60% pro Pruefungsabschnitt noetig." },
      { frage: "Was wird in der Pruefung erstellt?", optionen: ["Wochen-/Monatsplan", "Konzept fuer die erste Trainingsstunde", "Jahresplan", "Ernaehrungsplan"], richtig: 1, erklaerung: "In der Pruefung wird ein Ganzkoeprper-Trainingskonzept fuer die erste Stunde erstellt -- kein Langzeitplan." },
      { frage: "Was ist der Unterschied zwischen Konzept und Plan?", optionen: ["Es gibt keinen Unterschied", "Ein Konzept ist grober und flexibler; der Plan entsteht nach dem ersten Training", "Ein Plan ist kuerzer als ein Konzept", "Ein Konzept gilt fuer einen Monat"], richtig: 1, erklaerung: "Das Konzept ist grober/flexibler fuer die erste Stunde; der detaillierte Plan entsteht erst nachdem man die Person beim Training gesehen hat." },
      { frage: "Was zaehlt NICHT als Begruendung bei der Pruefung?", optionen: ["Anatomische Begruendung", "Das haben wir so gelernt", "Trainingsprinzipien", "Wissenschaftliche Studien"], richtig: 1, erklaerung: "Phrasen wie Das haben wir so gelernt zaehlen nicht -- jede Entscheidung muss inhaltlich begruendbar sein." },
      { frage: "Was ist der wertvollste Weg, Trainingsfortschritt zu messen?", optionen: ["BIA-Messung", "DEXA-Scan", "Fotos + Koerpergewicht", "Bluttest"], richtig: 2, erklaerung: "Fotos + Koerpergewicht sind laut Seminar am wertvollsten. BIA/DEXA-Zahlen sind wenig aussagekraeftig." },
      { frage: "Was ist der Unterschied zwischen Bewegung und Training?", optionen: ["Bewegung ist anstrengender", "Training ist zielgerichtet, Bewegung nicht", "Training findet nur im Gym statt", "Es gibt keinen Unterschied"], richtig: 1, erklaerung: "Training ist immer zielgerichtet und die Zielerreichung ist erkennbar. Bewegung im Alltag kann anstrengend sein, ist aber nicht zielgerichtet." },
      { frage: "Welche drei Kerninformationen muessen im Erstgespraech erhoben werden?", optionen: ["Alter, Gewicht, Groesse", "Ziel, Trainingserfahrung, gesundheitliche Einschraenkungen", "Beruf, Schlaf, Ernaehrung", "Budget, Zeit, Wohnort"], richtig: 1, erklaerung: "Die drei wichtigsten Kerninformationen sind: Ziel, Trainingserfahrung und gesundheitliche Einschraenkungen." },
      { frage: "Gilt Yoga oder Pilates als Krafttrainingserfahrung?", optionen: ["Ja, vollstaendig", "Ja, teilweise", "Nein -- zaehlt nicht als Krafterfahrung", "Nur Pilates zaehlt"], richtig: 2, erklaerung: "Nein -- Yoga, Pilates und Ausdauer zaehlen nicht als Krafterfahrung. Wer nur an Maschinen trainiert hat, gilt bei Freigewichten als Anfaenger." },
      { frage: "Was soll ein Trainer bei Schmerzen oder Verletzungen tun?", optionen: ["Uebung komplett verbieten", "Zum Arzt schicken und nichts machen", "Bewegungen anpassen statt verbieten", "Schmerzen ignorieren"], richtig: 2, erklaerung: "Bewegungen anpassen statt verbieten -- Keine Bewegung ist keine Loesung. Trainer sind keine Therapeuten, aber sie passen an." },
      { frage: "Welche Art von Fragen soll man im Erstgespraech bevorzugen?", optionen: ["Geschlossene Ja/Nein-Fragen", "Offene Fragen", "Suggestivfragen", "Multiple-Choice-Fragen"], richtig: 1, erklaerung: "Offene Fragen statt Suggestivfragen -- z.B. Wie schaut dein Schlaf aus? statt: Schlaefst du gut?" },
      { frage: "Wie viele Bewegungsmuster bilden einen Ganzkoeperplan?", optionen: ["4", "5", "6", "8"], richtig: 2, erklaerung: "6 Bewegungsmuster: Squat, Hinge, Push horizontal, Push vertikal, Pull horizontal, Pull vertikal." },
      { frage: "Welche Muskeln trainiert das Squat-Muster hauptsaechlich?", optionen: ["Hamstrings + Gluteus", "Quadrizeps + Gluteus", "Ruecken + Core", "Waden + Adduktoren"], richtig: 1, erklaerung: "Squat trainiert primaer Quadrizeps + Gluteus. Hinge trainiert Hamstrings + Gluteus." },
      { frage: "Welche Uebungen gehoeren zum Hinge-Muster?", optionen: ["Goblet Squat, Box Squat", "RDL, Hip Thrust, Deadlift, Leg Curl", "Bankdruecken, Dips", "Rudern, Klimmzug"], richtig: 1, erklaerung: "Zum Hinge-Muster gehoeren: RDL, Hip Thrust, Deadlift, Leg Curl -- alle fokussieren Hamstrings + Gluteus." },
      { frage: "Was entscheidet beim Pull-Muster, ob Trapezius oder Latissimus trainiert wird?", optionen: ["Die Griffweite", "Die Schulterblattbewegung", "Die Ellbogenposition", "Das Gewicht"], richtig: 1, erklaerung: "Schulterblätter zusammenziehen = Trapezius. Schulterblätter unten halten, Ellbogen koerpernah nach unten = Latissimus." },
      { frage: "Was soll zuerst gemacht werden, wenn beim Squat die Ferse abhebt?", optionen: ["Sofort Keil unterlegen", "Squat verbieten", "Zuerst saubere Ausfuehrung einfordern, dann Stand verbreitern, erst danach Keil", "Gewichtheber-Schuhe kaufen"], richtig: 2, erklaerung: "Reihenfolge: 1. Ausfuehrung korrigieren, 2. Stand verbreitern, 3. Keil/Ramp -- langfristig Mobility oder Gewichtheber-Schuhe." },
      { frage: "Wie viele Saetze pro Uebung sind der Standard?", optionen: ["1-2 Saetze", "3 Saetze", "5 Saetze", "6 Saetze"], richtig: 1, erklaerung: "3 Saetze pro Uebung als Standard; bei unilateralen Uebungen eher 2 (je Seite); 4 nur in Ausnahmen." },
      { frage: "Ueber welches Wiederholungsspektrum findet Hypertrophie statt?", optionen: ["Nur 8-12", "Nur 1-5", "5-25 Wiederholungen", "15-30 Wiederholungen"], richtig: 2, erklaerung: "5-25 Wiederholungen -- das enge 8-12-Fenster ist ueberholt. Bei ausreichender Intensitaet ist Hypertrophie ueber ~5-30 Wdh. gleichwertig." },
      { frage: "Warum verwendet man bei Anfaengern bei komplexen Uebungen eher 5x5?", optionen: ["Weil 5x5 mehr Muskelaufbau bringt", "Weil der Fokus auf der Technik liegt, nicht auf Arbeitssaetzen", "Weil Anfaenger staerker sind", "Weil es kuerzer dauert"], richtig: 1, erklaerung: "Bei Technik-Fokus geht es um das Erlernen der Bewegung -- fast ohne Gewicht, Technikprimat, nicht um Hypertrophie-Reize." },
      { frage: "Ist Reps in Reserve (RIR) / Muskelversagen fuer Anfaenger pruefungsrelevant?", optionen: ["Ja, sehr wichtig", "Nein -- nicht pruefungsrelevant und fuer Anfaenger ungeeignet", "Ja, aber nur fuer Fortgeschrittene im Pruefungsplan", "Nur RIR ist relevant, Versagen nicht"], richtig: 1, erklaerung: "Nein -- RIR/Muskelversagen ist laut Seminar nicht pruefungsrelevant und fuer Anfaenger ungeeignet. Anfaenger schaetzen die Reserve schlecht ein." },
      { frage: "Was ist das Ziel beim Lower-Back-Training?", optionen: ["Nur den Rueckenstrecker trainieren", "Alle stabilisierenden Strukturen staerken, damit der Rueckenstrecker nicht allein arbeitet", "Situps fuer den Ruecken", "Hyperextensions taeglich"], richtig: 1, erklaerung: "Ganzheitliche Stabilitaet: nicht nur der Rueckenstrecker, sondern alle stabilisierenden Strukturen staerken." },
      { frage: "Warum wird belastete Rotation (z.B. Russian Twist) abgelehnt?", optionen: ["Weil es zu schwer ist", "Bandscheiben halten Axialbelastung gut aus, aber Rotation schlecht", "Weil es keine Muskeln aufbaut", "Wegen Gleichgewichtsproblemen"], richtig: 1, erklaerung: "Bandscheiben sind sehr belastbar unter Axialkraft, aber schlecht fuer Rotationsbelastung. Ziel ist Anti-Rotation (z.B. Pallof Press), keine belastete Rotation." },
      { frage: "Warum schwankt das Koerpergewicht taeglich ohne Fettveraenderung?", optionen: ["Weil Muskeln wachsen", "Wegen Wasser, Glykogen und Darminhalt", "Wegen Hormonschwankungen im Grundumsatz", "Wegen schlechtem Schlaf"], richtig: 1, erklaerung: "Wasser, Glykogen und Darminhalt schwanken kurzfristig -- Muskeln und Fett aendern sich nur langfristig. Verstopfung kann z.B. +2 kg machen." },
      { frage: "Wie funktioniert der schnelle Gewichtsverlust bei Keto?", optionen: ["Ketose verbrennt direkt mehr Fett", "Entleerte Glykogenspeicher verlieren gebundenes Wasser -- kein echter Fettverlust ohne Defizit", "Keto erhoeht den Grundumsatz", "Ketone unterdruecken den Hunger immer"], richtig: 1, erklaerung: "Keto entleert Glykogenspeicher -- jedes g Glykogen bindet ~3-4 g Wasser. Der schnelle Gewichtsverlust ist Wasserverlust, kein Fettverlust." },
      { frage: "Was ist die Grundumsatz-Faustformel aus dem Seminar?", optionen: ["30 x Koerpergewicht", "22 x Koerpergewicht", "BMI x 100", "Alter x 20"], richtig: 1, erklaerung: "22 x Koerpergewicht (kg) als grobe Schaetzung; dann PAL-Faktor multiplizieren. Mifflin-St Jeor ist genauer und geschlechtsspezifisch." },
      { frage: "Was bedeutet NEAT und warum ist es relevant?", optionen: ["Normale Ernaehrungs-Anpassungs-Technik", "Non-Exercise Activity Thermogenesis -- unbewusste Alltagsbewegung, die im Defizit sinkt", "Nacht-Essen-Anpassung", "Nichts -- kaum relevant"], richtig: 1, erklaerung: "NEAT = unbewusste Alltagsbewegung. Im Defizit sinkt NEAT unbewusst (~100-400 kcal/Tag) -- Plateaus. Gegenmassnahme: Schritte bewusst hochhalten." },
      { frage: "Welcher Makronährstoff hat den höchsten thermischen Effekt (TEF)?", optionen: ["Fett (~0-3%)", "Kohlenhydrate (~5-10%)", "Protein (~20-30%)", "Alkohol (~15%)"], richtig: 2, erklaerung: "Protein hat den hoechsten TEF (~20-30%). 300 kcal extra essen ist nicht gleich 300 kcal Ueberschuss -- besonders bei Protein." },
      { frage: "Welche PAL-Werte gelten fuer eine ueberwiegend sitzende Person?", optionen: ["1,1-1,2", "1,3-1,5", "1,7-1,9", "2,0-2,2"], richtig: 1, erklaerung: "PAL 1,3-1,5 fuer sitzende Taetigkeit; + gehen ~1,6; stehend/Handwerker ~1,8." },
      { frage: "Wie viel % Koerpergewicht pro Woche ist die optimale Rate of Loss?", optionen: ["0,1-0,3%", "0,5-1% (bei stark Uebergewichtigen bis 1,5%)", "2-3%", "So viel wie moeglich"], richtig: 1, erklaerung: "0,5-1% pro Woche maximiert den Muskelerhalt. Bei stark Uebergewichtigen bis 1,5% moeglich." },
      { frage: "Wie viel Protein empfiehlt das Seminar im Defizit?", optionen: ["0,8 g/kg", "1,0 g/kg", "~2 g/kg (Bereich 1,6-2,5 g/kg)", "4 g/kg"], richtig: 2, erklaerung: "~2 g/kg als Empfehlung (Bereich 1,6-2,5 g/kg). Hoeheres Protein schuetzt im Defizit die Muskelmasse." },
      { frage: "Wie viel Ueberschuss braucht man fuer Muskelaufbau?", optionen: ["Gar keinen Ueberschuss", "Moderater Ueberschuss 300-500 kcal; viele essen zu wenig", "1.000-2.000 kcal Ueberschuss", "Nur Protein erhoehen reicht"], richtig: 1, erklaerung: "300-500 kcal moderater Ueberschuss. Das groesste Problem: die meisten essen zu wenig. Anfaenger koennen anfangs auch ohne Ueberschuss Recomposition machen." },
      { frage: "Welche vier Hauptprinzipien der Trainingslehre nennt das PFA-Skript?", optionen: ["Kraft, Ausdauer, Schnelligkeit, Koordination", "Spezifitaet, Ueberladung/trainingswirksamer Reiz, Variation, Progression", "Warm-up, Training, Cool-down, Dehnen", "Periodisierung, Intensitaet, Volumen, Pause"], richtig: 1, erklaerung: "4 Hauptprinzipien: 1) Spezifitaet, 2) Ueberladung/trainingswirksamer Reiz, 3) Variation, 4) Progression. Dazu: Individualisierung, Periodisierung, Prioritaetsprinzip." },
      { frage: "Was zeigt das Superkompensationsmodell?", optionen: ["Dass mehr Training immer besser ist", "Belastung -- Ermuedung -- Erholung -- Leistung steigt ueber Ausgangsniveau", "Dass Anfaenger schneller Fortschritte machen als Fortgeschrittene", "Dass Erholung unnoetig ist"], richtig: 1, erklaerung: "Superkompensation: Belastung -- Ermuedung -- Erholung -- Leistung steigt UEBER das Ausgangsniveau. Ohne erneuten Reiz faellt die Leistung wieder zurueck." },
      { frage: "Was gilt fuer Anfaenger vs. Fortgeschrittene bei der Adaptationsreserve?", optionen: ["Fortgeschrittene haben mehr Potenzial als Anfaenger", "Anfaenger reagieren schnell auf fast jeden Reiz; Fortgeschrittene brauchen spezifischere Reize", "Es gibt keinen Unterschied", "Anfaenger sollten schwerer trainieren als Fortgeschrittene"], richtig: 1, erklaerung: "Anfaenger haben eine grosse Adaptationsreserve und reagieren stark auf fast jeden Reiz. Fortgeschrittene brauchen gezieltere, spezifischere Belastungen." },
      { frage: "Welche Belastungskonfiguration gilt fuer Maximalkrafttraining?", optionen: ["60-70% 1RM, 6-20 Wdh., 2-5 min Pause", "90-100% 1RM, 1-5 Wdh., Pause >5 min", "50-60% 1RM, mehr als 20 Wdh., 0,5-1 min Pause", "70-80% 1RM, 8-12 Wdh., 3-4 Saetze"], richtig: 1, erklaerung: "Maximalkraft: Intensitaet 90-100% 1RM, 1-5 Wdh./Satz, 3-6 Saetze, Pause >5 min. Adaptationen: Kraftmaximum +++, Muskelmasse +." },
      { frage: "Welche Belastungskonfiguration gilt fuer Hypertrophietraining?", optionen: ["90-100% 1RM, 1-5 Wdh., >5 min Pause", "60-70% (Anfaenger) bis 70-90% (Fortgeschrittene) 1RM, 6-20 Wdh., Pause 2-5 min", "50% 1RM, mehr als 40 Wdh., 30 Sek. Pause", "100% 1RM, 1 Wdh., maximale Pause"], richtig: 1, erklaerung: "Hypertrophie: 60-70% Anfaenger / 70-90% Fortgeschrittene, 6-20 Wdh., Pause 2-5 min, mind. 8 Wochen, 0-3 RIR." },
      { frage: "Welche Belastungskonfiguration gilt fuer Kraftausdauertraining?", optionen: ["90% 1RM, 3 Wdh., 5 min Pause", "Bis 60% 1RM, mehr als 20-40 Wdh., Pause 0,5-1 Minute", "70-80% 1RM, 10-15 Wdh., 3 min Pause", "Kein Gewicht -- nur Koerpergewicht"], richtig: 1, erklaerung: "Kraftausdauer: bis 60% 1RM, >20-40 Wdh./Satz, 3-10 Saetze, Pause 0,5-1 min. Adaptation: anaerob-laktazide Energiebereitstellung, Ausdauer." },
      { frage: "Was ist 1 kg Koerperfett tatsaechlich wert in kcal?", optionen: ["5.000 kcal", "7.000 kcal (Seminarzahl)", "~7.700 kcal (etablierter Wert)", "9.000 kcal"], richtig: 2, erklaerung: "Faktencheck: ~7.700 kcal/kg. Das Seminar nannte 7.000 -- rund 9% zu niedrig. Die lineare Rechnung ist ohnehin nur eine Faustregel." },
      { frage: "Was sagt der Faktencheck zu realistischen Muskelaufbau-Raten fuer Anfaenger pro Monat?", optionen: ["2-2,5% Koerpergewicht (wie im Seminar)", "1-1,5% Koerpergewicht", "5% Koerpergewicht", "0,1% Koerpergewicht"], richtig: 1, erklaerung: "Faktencheck: ~1-1,5% Koerpergewicht/Monat fuer Anfaenger. Die Seminarzahl (2-2,5%) verwechselt reine Muskelmasse mit Gesamtgewichtszunahme inkl. Glykogen/Wasser/Fett." },
      { frage: "Verbessert nur Krafttraining die Knochendichte?", optionen: ["Ja, nur Krafttraining", "Nein -- auch Impact-Ausdauer (Laufen, Springen) verbessert die Knochendichte", "Nur Schwimmen hilft", "Ausdauer ist besser als Kraft fuer Knochen"], richtig: 1, erklaerung: "Mechanische Belastung (Impact) entscheidet -- Krafttraining UND gewichtstragendes Ausdauertraining (Laufen, Springen) verbessern die Knochendichte. Schwimmen und Radfahren (low-impact) nicht." },
      { frage: "Ist Krafttraining fuer die Gesundheit wichtiger als Ausdauertraining?", optionen: ["Ja, Krafttraining ist eindeutig ueberlegen", "Nein -- beide senken Mortalitaet; am staerksten ist die Kombination", "Ausdauer ist wichtiger", "Nur Kombination hat Effekt"], richtig: 1, erklaerung: "Beide Trainingsformen senken Mortalitaet unabhaengig. Am staerksten ist die Kombination (~40% geringeres Risiko)." },
      { frage: "Warum soll man von Koerperfettreduktion statt Abnehmen sprechen?", optionen: ["Weil Abnehmen verboten ist", "Weil das Koerpergewicht nicht nur Fett ist -- es laesst sich leicht manipulieren (Wasser, Darm)", "Weil Aerzte das so verlangen", "Nur ein sprachlicher Trend"], richtig: 1, erklaerung: "Koerpergewicht ist nicht gleich Koerperfett. Gewicht schwankt durch Wasser, Glykogen, Darminhalt. Daher praezise von Koerperfettreduktion sprechen." },
      { frage: "Was sind laut PFA-Skript die vier Ziele fuer Training?", optionen: ["Kraft, Ausdauer, Gewichtsabnahme, Spass", "Praevention, Rehabilitation, Leistungssteigerung, Koerperformung -- sowie psychische Effekte", "Wettkampf, Gesundheit, Aesthetik, Regeneration", "Muskelaufbau, Fettverlust, Flexibilitaet, Gleichgewicht"], richtig: 1, erklaerung: "Trainingsziele laut Skript: 1) Praevention, 2) Rehabilitation, 3) Leistungssteigerung, 4) Koerperformung -- und: psychische Effekte." },
      { frage: "Was sagt das PFA-Skript ueber den Planungsprozess?", optionen: ["Man startet mit einzelnen Uebungen und plant dann den Jahresplan", "Zuerst Assessment & SMART-Ziele, dann Jahresplan, dann Mesozyklus, dann Mikrozyklus", "Man braucht keinen strukturierten Prozess", "Erst Ernaehrungsplan, dann Trainingsplan"], richtig: 1, erklaerung: "Planungsprozess: 1) Assessment, 2) SMART-Ziele + Milestones, 3) Messmethoden, 4) vom Groben (Jahresplan) zum Feinen (Trainingseinheit). SMART = Spezifisch, Messbar, Attraktiv, Realistisch, Terminisiert." },
      { frage: "Was ist das wichtigste Grundprinzip beim Beweglichkeitstraining?", optionen: ["So viel dehnen wie moeglich -- maximale Beweglichkeit anstreben", "Nicht maximal, sondern optimal ausbilden", "Nur passiv-statisches Dehnen verwenden", "Beweglichkeit vor jedem Training trainieren"], richtig: 1, erklaerung: "Wichtigstes Prinzip Beweglichkeit: Nicht maximal, sondern optimal ausbilden! Methoden: dynamisch-aktiv, passiv-statisch, PNF-Stretching." },
      { frage: "Was ist PNF-Stretching?", optionen: ["Passives Dehnen mit Partner", "Propriozeptive Neuromuskulaere Fazilitation -- komplexere Methode des Beweglichkeitstrainings", "Progressives Netzwerk Flexibilitaetstraining", "Eine Form des dynamischen Dehnens"], richtig: 1, erklaerung: "PNF = Propriozeptive Neuromuskulaere Fazilitation: nutzt neuromuskulaere Reflexmechanismen um eine groessere Bewegungsreichweite zu erreichen." }
    ]
  }
];