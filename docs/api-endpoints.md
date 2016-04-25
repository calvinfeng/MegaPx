
# API Endpoints

## HTML API

### Root
- `GET /` - Load React welcome page: its key function is to showcase to visitors

### User home page
- `GET /home` - Load React web app

### Users Sign up
- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Users Log in
- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Photo
- `GET /api/photos/:id`
  - fetch individual photo but photo will not be hosted on my web app.
  - database will store photo url instead of actual jpeg images

- `POST /api/photos`
- `DELETE /api/photos/:id`
- `PATCH /api/photos/:id`

### Comment
- `GET /api/photos/:id/comments`
  - index of all comments for a photo
  - no GET request for a single comment

- `POST /api/comments`
- `DELETE /api/comments`
- `PATCH /api/comments`


### Tag (Optional search function)
- `GET /api/photos/:id/tags`
  - index of all tags for a photo
  - no GET request for a single tag

- `POST /api/photos/:id/tags`
- `DELETE /api/photos/:id/tags/:id`
