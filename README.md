# MarcheRunner 2.0

A web application to help with weekly shopping trips

## Description

A simple listing application where users are able to login and create a list of items to be purchased

## Functionality

- Users can login via Auth0 with social signin
- Users can create items to add to their list
- The list is viewable by category and has the ability to be searched
- Items can be created, marked as purchased, and deleted via GraphQL Mutations
- Items can be mass deleted either deleting all items or only purchased items via REST requests

## Build

### Backend
- NodeJS, TypeScript, Express, Apollo Server, GraphQL, PostgreSQL, Prisma, Jest

### Frontend
- React, TypeScript, GraphQL, Apollo Client, Apollo CLI, SCSS, react-testing-library, Cypress, Storybook

### Native
- Expo, React Native, TypeScript, GraphQL, Apollo Client, Apollo CLI, styled-components

### Authentication
- Auth0 with social signin via Google and GitHub

### CI
- GitHub Actions to run tests on pull-request

### Tooling
- Docker utilized for local development database instance

### Deployment
- Heroku (no longer deployed the latest incarnation of this project utilizes Remix and is deployed via Vercel)
