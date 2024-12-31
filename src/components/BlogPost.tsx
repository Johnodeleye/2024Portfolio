'use client';

import { useEffect, useState } from 'react';
import Card from './Card';  // Adjust the import path to where the Card component is located
import SectionHeader from './SectionHeader';

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
        const response = await fetch('https://hubpost-app.vercel.app/api/authors/johnayomide920@gmail.com');
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const data: ApiResponse = await response.json();
        setPosts(data.posts.slice(0, 5)); // Limit to the latest 5 posts
        setLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p className='text-green-500 font-extrabold px-12 text-2xl text-center animate-pulse'>Loading posts...</p>;
  if (error) return <p className='text-red-500 font-extrabold px-12 text-2xl text-center animate-pulse'>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4 mb-2 mt-2">
      <SectionHeader 
        title="Latest Blog Posts" 
        eyebrow="Check out our latest content" 
        description="Stay up to date with the newest articles and insights."
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-6">
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
                <p className="mt-2 text-gray-300">{post.content.slice(0, 100)}...</p> {/* Limit content */}
                {post.links.length > 0 && (
                  <a
                    href={`/posts/${post.id}`}  // Navigate to the post detail page
                    className="text-blue-500 mt-2 inline-block"
                  >
                    Read More
                  </a>
                )}
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;
