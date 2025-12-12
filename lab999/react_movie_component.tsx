import React, { useState, useEffect } from 'react';

const MovieComponent = () => {
  // Массив фильмов (замените на свои данные по варианту)
  const moviesData = [
    {
      id: 1,
       title: "Шрэк",
       poster: "https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/1610063-1581625.jpeg",
       genre: "мультфильмы,комедия,приключения",
       director: "Дерик Борте",
       actors: "Рассел Кроу, Кэрен Пистоуриус",
       duration: "133 мин",
       year: "2001",
       country: "США",
       rating: "6+",
       description: "Огромный зеленый Шрек живет вдали от суеты в своем домике в лесу, наслаждаясь жизнью. Но, как это всегда бывает в сказках, все хорошее быстро кончается. Вот и теперь противный коротышка лорд Фаркуад, правитель этих земель, решил выселить куда подальше всех сказочных существ. И, разумеется, в качестве этого ... ",
       trailer: "https://www.film.ru/sites/default/files/trailers/1610063/Shrek-Trailer.mp4"
    },
    {
     id: 2,
      title: "Как приручить дракона",
      poster: "https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/1628540-1750248.jpg",
      genre: "мультфильмы,боевик,приключения",
      director: "Дин ДеБлуа,Крис Сандерс",
      actors: "Джон Дэвид Вашингтон, Роберт Паттинсон",
      duration: "142 мин",
      year: "2010",
      country: "США ",
      rating: "6+",
      description: "История подростка Иккинга, которому не слишком близки традиции его героического племени, много лет ведущего войну с драконами. Мир Иккинга переворачивается с ног на голову, когда он неожиданно встречает дракона Беззубика, который поможет ему и другим викингам увидеть привычный мир с совершенно другой стороны…",
      trailer: "https://www.film.ru/sites/default/files/trailers/1628540/How-to-Train-Your-Dragon-Trailer.mp4"
    },
    {
     id: 3,
      title: "Зверополис",
      poster: "https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/8023507-5980949.jpg",
      genre: "Детский/Комедия",
      director: " Фил Джонстон, Джаред Буш",
      actors: "Джиннифер Гудвин, Джейсон Бейтман",
      duration: "150 мин",
      year: "2016",
      country: "США",
      rating: "6+",
      description: "Успешно закончив полицейскую школу, Джуди приезжает в Зверополис. Но первый день оборачивается разочарованием: её отправляют штрафовать ...",
      trailer: "https://www.film.ru/sites/default/files/trailers/8023507/Zootopia-Trailer-Rus.mp4" 
    }
  ];

  const [currentMovie, setCurrentMovie] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // При загрузке выбираем случайный фильм
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * moviesData.length);
    setCurrentMovie(moviesData[randomIndex]);
  }, []);

  if (!currentMovie) {
    return <div className="loading">Загрузка...</div>;
  }

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      backgroundColor: '#2c2c2c',
      color: '#fff',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Заголовок */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '40px',
        marginBottom: '40px',
        flexWrap: 'wrap'
      }}>
        {/* Постер */}
        <img 
          src={currentMovie.poster} 
          alt={currentMovie.title}
          style={{
            width: '300px',
            borderRadius: '10px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}
        />

        {/* Информация */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h1 style={{
            fontSize: '42px',
            marginBottom: '20px',
            color: '#d12282'
          }}>
            {currentMovie.title}
          </h1>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '10px 20px',
            fontSize: '16px',
            marginBottom: '30px'
          }}>
            <span style={{ opacity: 0.7 }}>Жанр:</span>
            <span>{currentMovie.genre}</span>

            <span style={{ opacity: 0.7 }}>Режиссер:</span>
            <span>{currentMovie.director}</span>

            <span style={{ opacity: 0.7 }}>В ролях:</span>
            <span>{currentMovie.actors}</span>

            <span style={{ opacity: 0.7 }}>Длительность:</span>
            <span>{currentMovie.duration}</span>

            <span style={{ opacity: 0.7 }}>Год:</span>
            <span>{currentMovie.year}</span>

            <span style={{ opacity: 0.7 }}>Страна:</span>
            <span>{currentMovie.country}</span>

            <span style={{ opacity: 0.7 }}>Рейтинг:</span>
            <span style={{
              display: 'inline-block',
              padding: '2px 8px',
              backgroundColor: '#1a1a1a',
              border: '2px solid #fff',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              {currentMovie.rating}
            </span>
          </div>

          {/* Кнопка */}
          <button style={{
            padding: '15px 45px',
            backgroundColor: '#d12282',
            color: '#fff',
            border: 'none',
            borderRadius: '40px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#de2c91'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#d12282'}
          onClick={() => alert('Переход к выбору мест...')}>
            КУПИТЬ БИЛЕТ
          </button>
        </div>
      </div>

      {/* Описание */}
      <div style={{
        marginBottom: '40px',
        lineHeight: '1.6',
        fontSize: '16px',
        opacity: 0.9
      }}>
        <h2 style={{
          fontSize: '24px',
          marginBottom: '15px',
          color: '#d12282'
        }}>
          О фильме
        </h2>
        <p>{currentMovie.description}</p>
      </div>

      {/* Трейлер */}
      <div>
        <h2 style={{
          fontSize: '24px',
          marginBottom: '15px',
          color: '#d12282'
        }}>
          Трейлер
        </h2>
        <div style={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          borderRadius: '10px',
          backgroundColor: '#000'
        }}>
          {!isVideoPlaying ? (
            <div 
              onClick={() => setIsVideoPlaying(true)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backgroundImage: `url(${currentMovie.poster})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'rgba(209, 34, 130, 0.9)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <div style={{
                  width: 0,
                  height: 0,
                  borderLeft: '25px solid white',
                  borderTop: '15px solid transparent',
                  borderBottom: '15px solid transparent',
                  marginLeft: '5px'
                }}></div>
              </div>
            </div>
          ) : (
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              src={`${currentMovie.trailer}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;