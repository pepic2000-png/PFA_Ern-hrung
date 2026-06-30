import { useState, useCallback } from 'react';
import { themen } from '../data/content';

export default function App() {
  const [view, setView] = useState('home'); // home | flashcards | quiz
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

  // ── Flashcard logic
  const nextCard = () => {
    if (cardIndex < topic.karten.length - 1) {
      setCardIndex(c => c + 1);
      setFlipped(false);
    }
  };
  const prevCard = () => {
    if (cardIndex > 0) {
      setCardIndex(c => c - 1);
      setFlipped(false);
    }
  };

  // ── Quiz logic
  const handleAnswer = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === topic.quiz[quizIndex].richtig) setScore(s => s + 1);
  };
  const nextQuestion = () => {
    if (quizIndex < topic.quiz.length - 1) {
      setQuizIndex(q => q + 1);
      setSelected(null);
    } else {
      setDone(true);
    }
  };

  const pct = topic ? Math.round((cardIndex + 1) / topic.karten.length * 100) : 0;

  // ─────────── HOME ───────────
  if (view === 'home') {
    const totalCards = themen.reduce((s, t) => s + t.karten.length, 0);
    const totalQuiz = themen.reduce((s, t) => s + t.quiz.length, 0);
    return (
      <div className="app">
        <div className="header">
          <h1>🏋️ PFA Ernährungs-Lernapp</h1>
          <p>Personal Trainer Prüfung — {totalCards} Karteikarten · {totalQuiz} Quizfragen</p>
        </div>

        <p className="section-title">Themen auswählen</p>
        <div className="topic-grid">
          {themen.map(t => (
            <div
              key={t.id}
              className="topic-card"
              style={{ background: t.farbe }}
            >
              <div className="icon">{t.icon}</div>
              <h3>{t.titel}</h3>
              <p className="count">{t.karten.length} Karten · {t.quiz.length} Quizfragen</p>
              <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
                <button
                  onClick={() => openTopic(t.id, 'flashcards')}
                  style={{
                    flex: 1, padding: '8px 4px', border: 'none',
                    borderRadius: 10, cursor: 'pointer',
                    background: 'rgba(255,255,255,0.25)', color: '#fff',
                    fontWeight: 700, fontSize: '0.8rem'
                  }}
                >
                  📖 Lernen
                </button>
                <button
                  onClick={() => openTopic(t.id, 'quiz')}
                  style={{
                    flex: 1, padding: '8px 4px', border: 'none',
                    borderRadius: 10, cursor: 'pointer',
                    background: 'rgba(255,255,255,0.25)', color: '#fff',
                    fontWeight: 700, fontSize: '0.8rem'
                  }}
                >
                  ✏️ Quiz
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 32, background: '#fff', borderRadius: 16,
          padding: '20px 24px', boxShadow: '0 2px 10px rgba(0,0,0,0.07)'
        }}>
          <p style={{ fontWeight: 700, marginBottom: 12 }}>📌 Prüfungs-Checkliste</p>
          {[
            '4 Säulen der Gesundheit kennen',
            '5 Bilanzen der Ernährung benennen',
            'kcal-Werte der Makronährstoffe wissen (9-4-4-7)',
            'BMR-Formel und TDEE erklären können',
            'GI vs. GL unterscheiden',
            'Biologische Wertigkeit erklären',
            'Essentielle vs. nicht-essentielle Aminosäuren',
            'BCAAs nennen und ihre Wirkung erklären',
            'Omega-3 vs. Omega-6 und Eicosanoide',
            'Fettlösliche vs. wasserlösliche Vitamine (ADEK)',
          ].map((item, i) => (
            <label key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '6px 0', cursor: 'pointer', fontSize: '0.9rem',
              borderBottom: '1px solid #f0f4f8'
            }}>
              <input type="checkbox" style={{ width: 16, height: 16 }} />
              {item}
            </label>
          ))}
        </div>
      </div>
    );
  }

  // ─────────── FLASHCARDS ───────────
  if (view === 'flashcards') {
    const card = topic.karten[cardIndex];
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

        <div className="flashcard-wrap" style={{ marginTop: 16 }}>
          <div className="flashcard" onClick={() => setFlipped(f => !f)}>
            {!flipped ? (
              <>
                <span className="side-label">Frage</span>
                <p className="question">{card.frage}</p>
                <p className="flip-hint">👆 Tippen zum Aufdecken</p>
              </>
            ) : (
              <>
                <span className="side-label" style={{ color: topic.farbe }}>Antwort</span>
                <p className="answer">{card.antwort}</p>
                {card.tipp && (
                  <div className="tipp">💡 {card.tipp}</div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="card-controls">
          <button className="btn btn-outline" onClick={prevCard} disabled={cardIndex === 0}>
            ← Zurück
          </button>
          {!flipped ? (
            <button className="btn btn-primary" onClick={() => setFlipped(true)}>
              Aufdecken
            </button>
          ) : (
            <button
              className="btn"
              style={{ background: topic.farbe, color: '#fff' }}
              onClick={nextCard}
              disabled={cardIndex === topic.karten.length - 1}
            >
              Weiter →
            </button>
          )}
        </div>

        {cardIndex === topic.karten.length - 1 && flipped && (
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <p style={{ color: '#48bb78', fontWeight: 700, marginBottom: 12 }}>
              ✅ Alle Karten geschafft!
            </p>
            <button className="btn btn-primary" onClick={() => openTopic(topicId, 'quiz')}>
              Jetzt Quiz starten ✏️
            </button>
          </div>
        )}
      </div>
    );
  }

  // ─────────── QUIZ ───────────
  if (view === 'quiz') {
    if (done) {
      const pctScore = Math.round(score / topic.quiz.length * 100);
      const emoji = pctScore >= 80 ? '🏆' : pctScore >= 60 ? '👍' : '📚';
      const msg = pctScore >= 80 ? 'Sehr gut! Prüfungsbereit!' : pctScore >= 60 ? 'Gut — noch ein bisschen üben!' : 'Noch einmal die Karteikarten anschauen!';
      return (
        <div className="app">
          <button className="back-btn" onClick={goHome}>← Zurück</button>
          <div className="score-card">
            <p style={{ fontSize: '1.1rem', color: '#718096' }}>Quiz abgeschlossen!</p>
            <p className="score-number" style={{ color: topic.farbe }}>{emoji}</p>
            <p style={{ fontSize: '2rem', fontWeight: 800 }}>{score}/{topic.quiz.length} richtig</p>
            <p className="score-msg">{msg}</p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => openTopic(topicId, 'quiz')}>
                Nochmal Quiz
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

    const q = topic.quiz[quizIndex];
    return (
      <div className="app">
        <button className="back-btn" onClick={goHome}>← Zurück</button>
        <p className="section-title">{topic.icon} {topic.titel} — Quiz</p>

        <div className="card-counter">Frage {quizIndex + 1} von {topic.quiz.length}</div>
        <div className="progress-bar-outer">
          <div
            className="progress-bar-inner"
            style={{ width: `${Math.round((quizIndex + 1) / topic.quiz.length * 100)}%`, background: topic.farbe }}
          />
        </div>

        <div className="quiz-question-box" style={{ marginTop: 16 }}>
          {q.frage}
        </div>

        <div className="quiz-options">
          {q.optionen.map((opt, i) => {
            let cls = 'quiz-option';
            if (selected !== null) {
              if (i === q.richtig) cls += ' correct';
              else if (i === selected && i !== q.richtig) cls += ' wrong';
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
            <div style={{ textAlign: 'center', marginTop: 14 }}>
              <button
                className="btn btn-primary"
                onClick={nextQuestion}
                style={{ background: topic.farbe }}
              >
                {quizIndex < topic.quiz.length - 1 ? 'Nächste Frage →' : 'Ergebnis anzeigen'}
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  return null;
}
