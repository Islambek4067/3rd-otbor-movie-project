# 🎬 TMDB API — Полный справочник

## Base URL
```
https://api.themoviedb.org/3
```

## Авторизация
```
?api_key=YOUR_API_KEY
```
Или Header:
```
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

## 🖼 Изображения

| Тип | URL | Размеры |
|---|---|---|
| Poster | `https://image.tmdb.org/t/p/{size}/{path}` | w92, w154, w185, w342, **w500**, w780, original |
| Backdrop | `https://image.tmdb.org/t/p/{size}/{path}` | w300, w780, **w1280**, original |
| Profile | `https://image.tmdb.org/t/p/{size}/{path}` | w45, w185, h632, original |

---

## 📡 TRENDING (Тренды)

### GET /trending/{media_type}/{time_window}
```
/trending/movie/day     — Трендовые фильмы (день)
/trending/movie/week    — Трендовые фильмы (неделя)
```

---

## 🔍 SEARCH (Поиск)

### GET /search/movie
```
/search/movie?query=batman&page=1
```

### GET /search/multi
```
/search/multi?query=batman&page=1
```
> Поиск одновременно по фильмам, сериалам и людям. Используйте `media_type` для разделения.

---

## 🎬 MOVIE DETAILS (Детали фильма)

### GET /movie/{movie_id}
Возвращает полную информацию: `runtime` (хронометраж), `budget` (бюджет), `genres` (жанры), `overview` (описание).

### GET /movie/{movie_id}/credits
Список актеров (`cast`) и команды (`crew`).

### GET /movie/{movie_id}/videos
Ключи для YouTube трейлеров (`key`).
> 🎥 Ссылка: `https://www.youtube.com/embed/{key}`

---

## 🏷 GENRES (Жанры)

### GET /genre/movie/list
```json
{
  "genres": [
    {"id": 28, "name": "Action"},
    {"id": 35, "name": "Comedy"}
  ]
}
```

---

## 👤 PEOPLE (Люди)

### GET /person/{person_id}
Биография, дата рождения, фото.

### GET /person/{person_id}/movie_credits
Фильмография актера (список фильмов, где он снимался).
