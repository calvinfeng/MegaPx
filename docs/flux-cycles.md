# Flux Architecture for MegaPX

## Diagram
![flux-diagram]
[flux-diagram]: ./diagrams/flux-diagram.png

## Users
#### UserStore
  - `UserStore.login`: when server responds on success, login is dispatched
  it tells UserStore what is the current_user in database

  - `UserStore.logout`: when server responds on success, logout is dispatched,
  UserStore will empty its data

  - `UserStore.setErrors`: when server responds on failure, it records error messages in store

#### UserActions(API Actions: ClientActions)
  - `UserActions.login`
  - `UserActions.signup`
  - `UserActions.logout`
  - `UserActions.fetchCurrentUser`

#### UserActions(Response Handlers: ServerActions)
  - `UserActions.receiveCurrentUser`: get current user from database
  - `UserActions.removeCurrentUser`: erase current user from store
  - `UserActions.handleError`: get error messages from database
  - `UserActions.guestLogin`: It's basically login action

**I shall refactor...**

## Photos - API Request Actions

## Comments - API Request Actions

## Search Suggestion Actions
