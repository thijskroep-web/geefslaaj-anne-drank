import "./App.css";

export default function App() {
  return (
    <main className="anne-drank-page">
      <section className="anne-drank-hero">
        <span className="anne-drank-label">
          EEN GEEF SLAAJ PRODUCTIE
        </span>

        <h1>ANNE DRANK</h1>

        <p className="anne-drank-subtitle">
          De officiële Geef Slaaj videoclip.
        </p>

        <div className="anne-drank-video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/S1jixIkZ7bk?rel=0"

            
            title="Anne Drank - Geef Slaaj"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}