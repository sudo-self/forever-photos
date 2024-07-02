import React, { useState, useEffect } from 'react';

const InfiniteScrollPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const newPhotos = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        url: `https://via.placeholder.com/300?text=Photo${index + 1}`
      }));
      setPhotos(prevPhotos => [...prevPhotos, ...newPhotos]);
      setLoading(false);
    }, 1000); // delay
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="infinite-scroll-container">
      <div className="photos-list">
        {photos.map(photo => (
          <div key={photo.id} className="photo-item">
            <img src={photo.url} alt={`Photo ${photo.id}`} />
          </div>
        ))}
        {loading && (
          <div className="loading-indicator">
            Photos Loading...
          </div>
        )}
      </div>
    </div>
  );
};

export default InfiniteScrollPhotos;

