# MegaPx
Heroku: https://mega-px.herokuapp.com/
## Minimum Viable Product
MegaPx is an image hosting web application inspired by 500px. In terms of functionality and front-end design, MegaPX closely mimics 500px except for one part; location-based image fetching. MegaPX will exhibit photo-works that were taken in your geological area.

## Product Goals and Priorities
The following are the key milestone for a functional MVP.
- [ ] Users may sign up and log in
- [ ] Location fetching is only available to signed in users
- [ ] Users can comment on photos
- [ ] Create/Edit/Destroy photos
- [ ] Google map integration with photos
- [ ] Beautiful image layout
- Optionals
  - [ ] Users can upvote photos
  - [ ] Sort photos by popularity and recentness

## Design Documents
### Backends
* [API Endpoints][api-endpoints]
* [Database Schema][schema]

### Frontends
* Wireframes
  * [Before sign in][views-before-sign-in]
  * [After sign in][views_after_sign-in]
* [React Component][components]
* [Flux][flux-cycle]

[views-before-sign-in]: ./docs/views-before-sign-in.md
[views_after_sign-in]: ./docs/views-after-sign-in.md
[api-endpoints]: ./docs/api-endpoints.md
[components]: ./docs/components.md
[schema]: ./docs/schema.md
[flux-cycle]: ./docs/flux-cycles.md

## Implementation Timeline

### Phase 1: Backend & Frontend Auth (1 Day)
**objective:**
- [x] Functioning Rails application with authentication
- [x] Key components to work on for the day
  - [x] User models
  - [x] UsersController, SessionsController, ApplicationController
  - [x] Render JSON instead of views for backend controllers
  - [x] UserActions
  - [x] UserStore
  - [x] UserApiUtil
  - [x] LoginForm, SplashPage, HomePage
- [x] By the end of the day, users should be able to log in and log out

### Phase 2: Visual Enhancement (1.5 Day)
**objectve:**
- [x] Create appropriate CSS for LoginForm
- [x] Set up LoginForm with Modal
- [x] SplashPage
  - Navigation Bar with Login buttons
  - Video plays in the background
  - Appropriate container for each element
- [x] Login Modal
- [x] Users has three different ways to bring up the login modal
  - Log in
  - Get Started
  - Sign up
- [x] Once logged in, user will get navigated to home page
- [ ] Secondary splash page to display photos uploaded by users


### Phase 3: CRUD on Photos (2 Days)
**objectve:**
- [x] Create Photos model
  - user_id
  - description
  - title (default: Untitled)
  - lat
  - lng
  - img_url

- [x] Create PhotosController: photos can be access/create/delete through
submitting API requests
  - index
  - create
  - update
  - destroy
  - show

- [x] Create Associations
  - User has many photos
  - Photo belongs to photograher

- [ ] Create PhotoStore, PhotoActions
  - fetchAllPhotos()
  - fetchSinglePhoto()
  - fetchCurrentUserPhotos()
  - fetchPhotosWithinBounds()
  - postPhoto
  - deletePhoto
  - updatePhoto

- Create marker store, photo store, comment store
- Set up appropriate actions for retrieving photos

### Phase 4: Integrate CRUD with Homepage (2 Days)
**objectve:**

- [ ] Create HomePage component
  - Create PhotoIndex component; its responsibility is to display photo
  correctly in grid.
- [ ] Create Map component
  - Make API call to backend for fetching photos base on map bounds, like what
  we did in BenchBnB
  - Add listener to drag event, whenever the map is dragged, call API to fetch
  new photos
- [ ] Use cloudinary for image hosting

### Phase 5: Style Homepage (1 Day)
**objective:**


### Phase 6: Profile & Photo Management (2 Days)
**objectve:**
- Allow users to upload photos, using Cloudinary's plugin
- Allow users to visit their own profile page
- Within the profile page, users can select and edit/delete their photos
- Enable avatar, users can upload and change their avatar

### Phase 7: More CSS and Styling to Profile/Photo Management Page (1 Day)
- Make it pretty

### Phase 8: Seed database (1 Day)
**objective:**
- Search and find a large quantity of high quality photos for every major
location in my application
  - San Francisco
  - New York City
  - Some national parks maybe like Yosemite

### Bonus Features
- Search photos by location and tag
