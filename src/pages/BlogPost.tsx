import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Markdown from "react-markdown";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

interface Post {
  title: string;
  date: string;
  tags: string[];
  content: string;
}

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/posts/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="max-w-3xl mx-auto py-20 px-4">Decrypting content...</div>;
  if (!post) return <div className="max-w-3xl mx-auto py-20 px-4">Error 404: Post not found in registry.</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link to="/blog" className="flex items-center space-x-2 text-sm opacity-50 hover:opacity-100 mb-12 transition-opacity">
        <ArrowLeft size={16} />
        <span>Back to archive</span>
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-medium mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-sm opacity-50 font-mono">
           <div className="flex items-center space-x-2">
             <Calendar size={14} />
             <span>{post.date}</span>
           </div>
           <div className="flex items-center space-x-2">
             <Tag size={14} />
             <div className="flex gap-2">
                {post.tags.map(t => <span key={t}>#{t}</span>)}
             </div>
           </div>
        </div>
      </header>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-medium prose-p:leading-relaxed prose-p:opacity-80"
      >
        <Markdown>{post.content}</Markdown>
      </motion.div>

      <div className="mt-20 pt-10 border-t border-current opacity-10">
        <p className="text-sm italic">You just read: {post.title}.</p>
      </div>
    </div>
  );
}
