# EventYouLike

EventYouLike is a full-stack web application built with **Next.js**, **MongoDB**, and **Cleark** that simplifies event booking for both organizers and attendees.

## Features

- **Event Creation and Management**:

  - Admins can easily create new events.
  - Upload multiple images using Firebase Storage.
  - Define various ticket types (e.g., basic, premium).

- **User Booking**:

  - Users can browse events and view details, including image galleries.
  - Seamless ticket booking experience.
  - Available tickets decrease in real-time as bookings are confirmed.

- **Admin Dashboard**:

  - Dedicated dashboard for viewing all bookings.
  - Generate reports and analyze total event revenue.

- **Authentication**:

  - Secure authentication for both users and admins using Cleark.

- **Payment Processing**:
  - Stripe integration for smooth and secure payment processing.

## Technologies

- **Frontend**:

  - Next.js, a React framework offering server-side rendering (SSR) and static site generation (SSG) for optimal performance and SEO.

- **Backend**:

  - MongoDB, a NoSQL database for storing event data, user information, and booking details.

- **Authentication**:

  - Cleark, a platform simplifying user registration, login, and access control.

- **Image Storage**:

  - Firebase Storage, a secure cloud storage solution from Google.

- **Payments**:
  - Stripe, a popular payment gateway for secure online transactions.
