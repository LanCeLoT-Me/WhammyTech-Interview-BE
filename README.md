### WhammyTech-Interview's APIs

- APIs using for WhammyTech-Interview

### Models

- There are totaly 3 models: UserModel, GenreModel, MovieModel

## User's routes:

# POST /api/user/create

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

# POST /api/user/add-movie-to-favorites

- Authentication required ( checked by middleware )
- Required data:
  - movie_id: movie'id that user want to added to favorites.

# POST /api/user/remove-movie-from-favorites

- Authentication required ( checked by middleware )
- Required data:
  - movie_id: movie'id that user want to remove from favorites.

# GET /api/user/get-favorite-movies

- Authentication required ( checked by middleware )
