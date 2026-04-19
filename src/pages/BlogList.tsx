import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Calendar, Tag } from "lucide-react";

interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
}

export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="max-w-4xl mx-auto py-20 px-4 text-center">Scanning database...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <header className="mb-16">
        <h1 className="text-4xl font-display font-bold mb-4">Writings & Thoughts</h1>
        <p className="opacity-60">Exploring the intersection of technology, design, and philosophy.</p>
      </header>

      <div className="space-y-12">
        {posts.map((post, idx) => (
          <motion.article 
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <Link to={`/blog/${post.slug}`} className="block">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h2 className="text-2xl font-display font-medium group-hover:underline decoration-1 underline-offset-4">
                  {post.title}
                </h2>
                <div className="flex items-center text-sm opacity-50 space-x-4 mt-2 md:mt-0 font-mono">
                  <span className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-0.5 border border-current opacity-40 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
