import { useEffect, useState } from "react";

export default function DevToArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = "bhuvi_d";

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch(`https://dev.to/api/articles?username=${username}&per_page=5`);
        if (!res.ok) {
          throw new Error(`Error fetching articles: ${res.status}`);
        }
        const data = await res.json();
        setArticles(data.slice(0, 3)); // Only keep first 3 articles
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, [username]);

  if (loading) return <p className="text-center text-white py-20">Loading articles...</p>;
  if (error) return <p className="text-center text-red-500 py-20">Error: {error}</p>;

  return (
    <section id="articles" className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 rounded-3xl shadow-lg">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          My <span className="text-[#ff5f9e]">Articles</span>
        </h2>

        <div className="flex flex-col gap-8">
          {articles.length === 0 && <p className="text-white text-center">No articles found.</p>}

          {articles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/10 p-6 rounded-xl hover:bg-white/20 transition text-white"
            >
              <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>
              <p className="text-white/80 mb-4">{article.description}</p>
              <p className="text-[#ff5f9e] font-medium">Read more →</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
