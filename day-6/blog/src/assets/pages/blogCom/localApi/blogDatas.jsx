import { useState, useEffect } from 'react';

export function useLocalStorage(key, defaultValue) {

  const [blogData, setBlogData] = useState(() => {
    try {
      const saved = localStorage.getItem(key);

      return saved ? JSON.parse(saved) : defaultValue;
    } catch (error) {
      console.error("Error reading localStorage", error);
      return defaultValue;
    }
  });


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(blogData));
  }, [key, blogData, setBlogData]);

  return [blogData, setBlogData];
}
