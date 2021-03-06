## WhammyTech-Interview's APIs

- APIs using for WhammyTech-Interview

### Models

- There are totaly 3 models: UserModel, GenreModel, MovieModel

### User's routes:

#### POST /api/user/create

- This API is used to create new user in MongoDB.
- After user has authenticated successfully with firebase, pass data returned from firebase authentication and call this API.
- Required data:
  - uid (string): User's id returned from firebase authentication.
  - email (string): User's email returned from firebase authentication.
  - is_email_verified (boolean): Boolean value returned from firebase authentication whether user's email is verified.
  - provider_id (string): OAuth provider used to authenticate with firebase.
  - display_name (string): User's display name returned from firebase authentication.
  - phone_number (string): User's phone number returned from firebase authentication.
  - photo_url (string): User's photo url returned from firebase authentication.

#### POST /api/user/add-movie-to-favorites

- Authentication required ( checked by middleware )
- Required data:
  - movie_id (string): movie'id that user want to added to favorites.

#### POST /api/user/remove-movie-from-favorites

- Authentication required ( checked by middleware )
- Required data:
  - movie_id (string): movie'id that user want to remove from favorites.

#### GET /api/user/get-favorite-movies

- Authentication required ( checked by middleware )

### Genre's routes:

#### POST /api/genre/create

- Authentication and admin role required ( checked by middleware ).
- Required data:
  - name (string): Name of genre you would like to create.

### Movie's routes:

#### POST /api/movie/create

- Authentication and admin role required ( checked by middleware ).
- Required data:
  - poster_url (string): Movie's poster url.
  - backdrop_url (string): Movie's backdrop url.
  - title (string): Movie's title.
  - popularity (string): Movie's popularity.
  - sysnopsis (string): Movies's sysnopsis
  - genres ( array(string) ): Movie's genres
  - language (string): Movie's language.
  - duration (string): Movie's duration.
  - release_date (date): Movie's release date ( yyyy/mm/dd )

#### GET /api/movie/get/:id

- Required params:
  - id: Movie's id

#### GET /api/movie/get

- Required queries:
  - sort_by (string): Sort movie by this. Accepted values:
    - release_date.desc
    - release_date.asc
    - popularity.desc
    - popularity.asc
    - alphabetical.desc
    - alphabetical.asc
  - page (number)
  - limit (number)
