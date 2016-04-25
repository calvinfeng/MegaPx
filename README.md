# MegaPX

## Minimum Viable Product
MegaPX is an image hosting web application inspired by 500px. In terms of functionality and front-end design, MegaPX closely mimics 500px except for one part; location-based image fetching. MegaPX will exhibit photo-works that were taken in your geological region.

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

### Phase 1: Backend Databse Setup and User Authentication (1 Day)
**objective:**
- Functioning Rails application with authentication
- Set up session/user models
- Users can sign up and log in

### Phase 2: API Utils, Client/Server Actions (1 Day)
**objectve:**
- Set up photo, user, comment models and related query associations
- Photos can be access/create/delete through submitting API requests
- Photos fetch based on geographical bounds

### Phase 3: Flux Architecture (1 Day)
**objectve:**
- Set up front-end architecture based on the diagram I drew.

### Phase 4: Front-end Components (3 Days)
**objectve:**
- Create React components for front page, index page, index item page

### Phase 5: CSS and Styling (2 Days)
**objectve:**
- Layout and style every component

### Phase 6: Seed database (1 Day)
**objective:**
- Search and find a large quantity of high quality photos for every major
location in my application
  - San Francisco
  - New York City
  - Some national parks maybe like Yosemite

### Bonus Features
- Tentative
