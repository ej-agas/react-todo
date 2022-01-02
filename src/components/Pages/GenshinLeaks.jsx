import React from 'react';
import { useQuery } from 'react-query';

export default function GenshinLeaks() {
  const baseUrl = 'https://www.reddit.com';

  const fetchPosts = async () => {
    const response = await fetch(baseUrl + '/r/Genshin_Impact_Leaks.json');
    return await response.json();
  };

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery('posts', fetchPosts);

  return (
    <div className="container">
      <h1>Genshin Leaks</h1>
      {isLoading && <h1>Please wait...</h1>}
      {posts && (
        <ul>
          {posts.data.children.map((post) => (
            <li key={post.data.id}>
              <a href={`${baseUrl}${post.data.permalink}`}>{post.data.title}</a>
            </li>
          ))}
        </ul>
      )}

      {isError && <div>{error.message}</div>}
    </div>
  );
}
