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

### Phase 2: Visual Enhancement (1 Day)
**objectve:**
- [ ] Create appropriate CSS for LoginForm
- [ ] Set up LoginForm with Modal
- [ ] SplashPage
  - Navigation Bar with Login buttons
  - Video plays in the background
  - Appropriate container for each element
  - Secondary splash page to display photos uploaded by users
- [ ] Setup backend support for photos
- [ ] Create home componenet

### Phase 3: Flux Architecture (1 Day)
**objectve:**
- Set up photo, user, comment models and related query associations
- Photos can be access/create/delete through submitting API requests
- Create map component and make API call to backend for fetching photos
- Fetch photos base on map bounds
- Create marker store, photo store, comment store
- Set up appropriate actions for retrieving photos

### Phase 4: Complete CRUD on Photos (3 Days)
**objectve:**
- Create React components for front page, index page, index item page
- Use flexbox to display photos on user front page
- Users should be able to drag the map and receive new photos
- Integrate cloudinary
- Users should be able to upload and browse content by this point

### Phase 5: CSS and Styling Landing and Home (1 Day)
**objectve:**
- Layout landing page and user home page

### Phase 6: Profile & Photo Management (2 Days)
**objectve:**
- Allow users to visit their own profile page
- Within the profile page, users can select and edit/delete their photos
- Enable avatar, users can upload and change their avatar

### Phase 7: More CSS and Styling to Profile/Photo Management Page (1 Day)
- Make it pretty

### Phase 7: Seed database (1 Day)
**objective:**
- Search and find a large quantity of high quality photos for every major
location in my application
  - San Francisco
  - New York City
  - Some national parks maybe like Yosemite

### Bonus Features
- Search photos by location and tag
