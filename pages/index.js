import { useState, useRef, useCallback } from 'react';
import { themen } from '../data/content';

// ── Swipe hook ──────────────────────────────────────────────
function useSwipe(onLeft, onRight) {
  const startX = useRef(null);
  const startY = useRef(null);

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e) => {
    if (startX.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    const dy = e.changedTouches[0].clientY - startY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) onLeft();
      else onRight();
    }
    startX.current = null;
  };
  return { onTouchStart, onTouchEnd };
}

// ── Dot indicators ──────────────────────────────────────────
function Dots({ total, current, color }) {
  const max = 7;
  if (total <= 1) return null;
  const dots = Math.min(total, max);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 12 }}>
      {Array.from({ length: dots }).map((_, i) => {
        const idx = total <= max ? i : Math.round(i * (total - 1) / (max - 1));
        const active = total <= max ? i === current : Math.abs(idx - current) < total / max;
        return (
          <div key={i} style={{
            width: active ? 20 : 7, height: 7,
            borderRadius: 99,
            background: active ? color : '#e2e8f0',
            transition: 'all 0.2s',
          }} />
        );
      })}
    </div>
  );
}

// ── Main App ────────────────────────────────────────────────
export default function App() {
  const [view, setView] = useState('home');
  const [topicId, setTopicId] = useState(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const topic = themen.find(t => t.id === topicId);

  const openTopic = (id, mode) => {
    setTopicId(id);
    setView(mode);
    setCardIndex(0);
    setFlipped(false);
    setQuizIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  const goHome = () => { setView('home'); setTopicId(null); };

  // ── Flashcard ──
  const nextCard = useCallback(() => {
    if (!topic) return;
    if (cardIndex < topic.karten.length - 1) {
      setCardIndex(c => c + 1);
      setFlipped(false);
    }
  }, [cardIndex, topic]);

  const prevCard = useCallback(() => {
    if (cardIndex > 0) {
      setCardIndex(c => c - 1);
      setFlipped(false);
    }
  }, [cardIndex]);

  const swipeCard = useSwipe(
    () => { if (flipped) nextCard(); else setFlipped(true); },
    () => prevCard()
  );

  // ── Quiz ──
  const handleAnswer = (idx) => {
    if (selected !== null || !topic) return;
    setSelected(idx);
    if (idx === topic.quiz[quizIndex].richtig) setScore(s => s + 1);
  };
  const nextQuestion = () => {
    if (!topic) return;
    if (quizIndex < topic.quiz.length - 1) {
      setQuizIndex(q => q + 1);
      setSelected(null);
    } else {
      setDone(true);
    }
  };

  // ════════════════════════════════════════════════════════════
  // HOME
  // ════════════════════════════════════════════════════════════
  if (view === 'home') {
    const totalCards = themen.reduce((s, t) => s + t.karten.length, 0);
    const totalQuiz = themen.reduce((s, t) => s + t.quiz.length, 0);
    return (
      <div className="app">
        <div className="header">
          <h1>🏋️ PFA Ernährung</h1>
          <p>Personal Trainer Prüfung · {totalCards} Karten · {totalQuiz} Quizfragen</p>
        </div>

        <p className="section-title">Thema wählen</p>
        <div className="topic-grid">
          {themen.map(t => (
            <div key={t.id} className="topic-card" style={{ background: t.farbe }}>
              <div className="icon">{t.icon}</div>
              <h3>{t.titel}</h3>
              <p className="count">{t.karten.length} Karten · {t.quiz.length} Quiz</p>
              <div className="topic-card-btns">
                <button className="topic-card-btn" onClick={() => openTopic(t.id, 'flashcards')}>
                  📖 Lernen
                </button>
                <button className="topic-card-btn" onClick={() => openTopic(t.id, 'quiz')}>
                  ✏️ Quiz
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="checklist">
          <p className="checklist-title">📌 Prüfungs-Checkliste</p>
          {[
            '4 Säulen der Gesundheit kennen',
            '5 Bilanzen der Ernährung benennen',
            'kcal-Werte wissen: Fett 9, KH 4, Protein 4, Alkohol 7',
            'BMR-Formel und TDEE erklären',
            'PAL und NEAT unterscheiden',
            'GI vs. GL unterscheiden',
            'Biologische Wertigkeit erklären',
            'Essentielle Aminosäuren nennen',
            'BCAAs: Leucin, Isoleucin, Valin',
            'Omega-3 vs. Omega-6 und Eicosanoide',
            'Fettlösliche Vitamine: A, D, E, K',
            'Aerob vs. anaerob Energiegewinnung',
          ].map((item, i) => (
            <label key={i}>
              <input type="checkbox" />
              {item}
            </label>
          ))}
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════
  // FLASHCARDS
  // ════════════════════════════════════════════════════════════
  if (view === 'flashcards' && topic) {
    const card = topic.karten[cardIndex];
    const pct = Math.round((cardIndex + 1) / topic.karten.length * 100);
    const isLast = cardIndex === topic.karten.length - 1;

    return (
      <div className="app">
        <button className="back-btn" onClick={goHome}>← Zurück</button>

        <p className="section-title">{topic.icon} {topic.titel}</p>

        <div className="card-counter">
          Karte {cardIndex + 1} von {topic.karten.length}
        </div>
        <div className="progress-bar-outer">
          <div className="progress-bar-inner" style={{ width: `${pct}%`, background: topic.farbe }} />
        </div>

        {/* Flashcard with swipe */}
        <div className="flashcard-wrap" {...swipeCard} style={{ marginTop: 12 }}>
          <div className="flashcard" onClick={() => setFlipped(f => !f)}>
            {!flipped ? (
              <>
                <span className="side-label">Frage</span>
                <p className="question">{card.frage}</p>
                <p className="flip-hint">Tippen oder nach links wischen zum Aufdecken 👆</p>
              </>
            ) : (
              <>
                <span className="side-label" style={{ color: topic.farbe }}>Antwort</span>
                <p className="answer">{card.antwort}</p>
                {card.tipp && <div className="tipp">💡 {card.tipp}</div>}
              </>
            )}
          </div>
        </div>

        <Dots total={topic.karten.length} current={cardIndex} color={topic.farbe} />

        <div className="card-controls" style={{ marginTop: 16 }}>
          <button
            className="btn btn-outline btn-wide"
            onClick={prevCard}
            disabled={cardIndex === 0}
          >
            ←
          </button>

          {!flipped ? (
            <button
              className="btn btn-primary btn-wide"
              onClick={() => setFlipped(true)}
            >
              Aufdecken
            </button>
          ) : (
            <button
              className="btn btn-wide"
              style={{ background: topic.farbe, color: '#fff' }}
              onClick={nextCard}
              disabled={isLast}
            >
              Weiter →
            </button>
          )}
        </div>

        {isLast && flipped && (
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <p style={{ color: '#48bb78', fontWeight: 700, marginBottom: 12 }}>
              ✅ Alle Karten geschafft!
            </p>
            <button
              className="btn btn-primary"
              style={{ background: topic.farbe }}
              onClick={() => openTopic(topicId, 'quiz')}
            >
              Jetzt Quiz starten ✏️
            </button>
          </div>
        )}
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════
  // QUIZ — ERGEBNIS
  // ════════════════════════════════════════════════════════════
  if (view === 'quiz' && topic && done) {
    const pctScore = Math.round(score / topic.quiz.length * 100);
    const emoji = pctScore >= 80 ? '🏆' : pctScore >= 60 ? '👍' : '📚';
    const msg = pctScore >= 80
      ? 'Sehr gut! Prüfungsbereit!'
      : pctScore >= 60
      ? 'Gut — noch ein bisschen üben!'
      : 'Nochmal die Karteikarten anschauen!';

    return (
      <div className="app">
        <button className="back-btn" onClick={goHome}>← Zurück</button>
        <div className="score-card">
          <p style={{ color: '#718096', fontSize: '1rem' }}>Quiz abgeschlossen!</p>
          <p className="score-emoji">{emoji}</p>
          <p className="score-number" style={{ color: topic.farbe }}>
            {score}/{topic.quiz.length} richtig
          </p>
          <p className="score-msg">{msg}</p>
          <div className="score-btns">
            <button
              className="btn btn-primary"
              style={{ background: topic.farbe }}
              onClick={() => openTopic(topicId, 'quiz')}
            >
              Nochmal
            </button>
            <button className="btn btn-outline" onClick={() => openTopic(topicId, 'flashcards')}>
              Karteikarten
            </button>
            <button className="btn btn-outline" onClick={goHome}>
              Andere Themen
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════
  // QUIZ — FRAGEN
  // ════════════════════════════════════════════════════════════
  if (view === 'quiz' && topic) {
    const q = topic.quiz[quizIndex];
    const qPct = Math.round((quizIndex + 1) / topic.quiz.length * 100);

    return (
      <div className="app">
        <button className="back-btn" onClick={goHome}>← Zurück</button>
        <p className="section-title">{topic.icon} {topic.titel}</p>

        <div className="card-counter">Frage {quizIndex + 1} von {topic.quiz.length}</div>
        <div className="progress-bar-outer">
          <div className="progress-bar-inner" style={{ width: `${qPct}%`, background: topic.farbe }} />
        </div>

        <div className="quiz-question-box" style={{ marginTop: 12 }}>{q.frage}</div>

        <div className="quiz-options">
          {q.optionen.map((opt, i) => {
            let cls = 'quiz-option';
            if (selected !== null) {
              if (i === q.richtig) cls += ' correct';
              else if (i === selected) cls += ' wrong';
            }
            return (
              <button
                key={i}
                className={cls}
                onClick={() => handleAnswer(i)}
                disabled={selected !== null}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <>
            <div className="quiz-explanation">
              {selected === q.richtig ? '✅ Richtig! ' : '❌ Falsch. '}
              {q.erklaerung}
            </div>
            <div style={{ marginTop: 14 }}>
              <button
                className="btn btn-wide"
                style={{ background: topic.farbe, color: '#fff', width: '100%' }}
                onClick={nextQuestion}
              >
                {quizIndex < topic.quiz.length - 1 ? 'Nächste Frage →' : 'Ergebnis anzeigen 🏁'}
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  return null;
}
