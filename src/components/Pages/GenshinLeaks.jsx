import React from 'react';
import useFetch from '../../hooks/useFetch';

export default function GenshinLeaks() {
  const baseUrl = 'https://www.reddit.com';
  const {
    data: posts,
    isLoading,
    errorMessage,
  } = useFetch(baseUrl + '/r/Genshin_Impact_Leaks.json');

  return (
    <div className="container">
      <h1>Genshin Leaks</h1>
      {isLoading && <h1>Please wait...</h1>}
      {errorMessage && <h1>{errorMessage}</h1>}
      {posts && (
        <ul>
          {posts.data.children.map((post) => (
            <li key={post.data.id}>
              <a href={`${baseUrl}${post.data.permalink}`}>{post.data.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
