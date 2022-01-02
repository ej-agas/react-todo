import React, { useEffect, useState } from 'react';

export default function GenshinLeaks() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const baseUrl = 'https://www.reddit.com';

  useEffect(() => {
    fetch(baseUrl + '/r/Genshin_Impact_Leaks.json')
      .then((res) => res.json())
      .then((results) => {
        setIsLoading(false);
        setPosts(results.data.children);
      })
      .catch(() => {
        setIsLoading(false);
        setErrorMessage('There was an error fetching data from reddit');
      });
  }, []);

  return (
    <div className="container">
      <h1>Genshin Leaks</h1>
      {isLoading && <h1>Please wait...</h1>}
      {errorMessage && <h1>{errorMessage}</h1>}
      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.data.id}>
              <a href={`${baseUrl}${post.data.permalink}`}>{post.data.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
