'use client';

import { useEffect, useState } from 'react';

interface Post {
  id: string;
  title: string;
  content: string;
  links: string[];
  createdAt: string;
}

interface ApiResponse {
  id: string;
  name: string;
  email: string;
  bio: string;
  posts: Post[];
}

const BlogPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("Fetching blog posts..."); // Debugging
        const response = await fetch('https://hubpost-app.vercel.app/api/authors/johnayomide920@gmail.com');
        if (!response.ok) {
          console.error("Response status:", response.status); // Debugging
          throw new Error(`Failed to fetch posts. Status: ${response.status}`);
        }
        const data: ApiResponse = await response.json();
        console.log("Fetched posts:", data.posts); // Debugging
        setPosts(data.posts);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching posts:", err); // Debugging
        setError((err as Error).message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Latest Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: '20px' }}>
            <h2>{post.title}</h2>
            <p>{post.content.slice(0, 100)}...</p> {/* Limit content to 100 characters */}
            {post.links.length > 0 && (
              <a
                href={post.links[0]}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'blue', textDecoration: 'underline' }}
              >
                Read More
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;
