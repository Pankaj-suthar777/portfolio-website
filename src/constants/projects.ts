export type ProjectType = "web" | "mobile" | "game";

interface Project {
  image: string;
  title: string;
  description: string;
  liveLink: string;
  type: ProjectType;
  images: string[];
  long_description: string;
}

const projects: Project[] = [
  {
    image: "/images/next-eventsYouLike_page-0001.jpg",
    title: "EventsYoulike",
    description:
      "EventsYoulike is a full-stack web application built with Next.js, MongoDB, and Cleark that simplifies event booking for both organizers and attendees.",
    liveLink: "https://next-events-you-like.vercel.app/",
    type: "web",
    long_description: `EventYoulike is a full-stack web application built with Next.js, MongoDB, and Cleark that simplifies event booking for both organizers and attendees.

Features:

Event creation and management: Admins can easily create new events, upload multiple images using Firebase Storage, and define various ticket types (basic, premium, etc.). User booking: Users can browse events, view details including image galleries, and book tickets seamlessly. Available tickets decrease in real-time as bookings are confirmed. Admin dashboard: Admins have a dedicated dashboard to view all bookings, generate reports, and analyze total event revenue. Authentication: Cleark provides secure authentication for both users and admins, ensuring a safe and reliable experience. Payment processing: Stripe integration enables smooth and secure payment processing for event bookings. Technologies:

Frontend: Next.js, a React framework that offers features like server-side rendering (SSR) and static site generation (SSG) for optimal performance and SEO. Backend: MongoDB, a NoSQL database that provides flexibility for storing event data, user information, and booking details. Authentication: Cleark, a user authentication platform that simplifies user registration, login, and access control. Image Storage: Firebase Storage, a cloud storage solution from Google that securely stores and manages event images. Payments: Stripe, a popular payment gateway that facilitates secure online transactions for event bookings.`,
    images: [
      "/images/next-eventsYouLike_page-0001.jpg",
      "/images/next-eventsYouLike_page-0001.jpg",
      "/images/next-eventsYouLike_page-0001.jpg",
    ],
  },
  {
    image: "/images/swift-rivals-mern.vercel.app_(3).png",
    title: "Swift Media",
    description:
      "Developed a platform for users to follow each other, create posts, and engage in real-time one-on-one and group chats Integrated features for upvoting/downvoting posts and adding nested comments to enhance community interaction",
    liveLink: "https://swift-rivals-mern.vercel.app/",
    type: "web",
    long_description: "",
    images: ["/images/swift-rivals-mern.vercel.app_(3).png"],
  },
  {
    image: "/images/rmp_page-0002.jpg",
    title: "Refurbhised Market Place",
    description:
      "Introducing RMP, a user-friendly web application dedicated to refurbished products. With RMP, users can effortlessly create an account, securely log in, and experience enhanced authentication through JWT (JSON Web Token). This platform empowers individuals to sell their refurbished items with ease.",
    liveLink: "https://refurbhised-maket-place.onrender.com/",
    type: "web",
    long_description: "",
    images: ["/images/rmp_page-0002.jpg"],
  },
  {
    title: "Multivendor E-Commerce",
    description:
      "A Full-Stack Multivendor E-commerce Application built with React.js, Redux, Node.js, Express.js, and MongoDB. It includes features like product filters, wishlists, reviews, seller dashboards with sales analytics, and admin management tools. Real-time chat is enabled via Socket.io, and MongoDB aggregation pipelines handle complex queries for reporting. Secure payments are integrated with Stripe, allowing smooth transactions for sellers and buyers.",
    image: "/images/mutivendor-ecommerce-mern-frontend.vercel.app_.png",
    liveLink: "https://mutivendor-ecommerce-mern-frontend.vercel.app/",
    type: "web",
    long_description: "",
    images: ["/images/mutivendor-ecommerce-mern-frontend.vercel.app_.png"],
  },
  {
    title: "ProShipShop E-Commerce Shop",
    description:
      "Introducing a E-Commerce web application, with features of - Product reviews and ratings, Top products carousel, Product search feature, User profile with orders, Admin product management, Admin user management, Admin Order details page, Mark orders as delivered option, Checkout process (shipping, payment method, etc) PhonePay / credit card integration",
    image: "/images/proshipshop.onrender.com_ (2).png",
    liveLink: "https://proshipshop.onrender.com/",
    type: "web",
    long_description: "",
    images: ["/images/proshipshop.onrender.com_ (2).png"],
  },
  {
    title: "Fast Pizza",
    description:
      "Introducing Fast Pizza, your go-to pizza ordering web app for a seamless and delightful experience. With Fast Pizza, pizza enthusiasts can dive into a world of flavors, convenience, and user-friendly features.",
    image: "/images/pizza-react-app-000.netlify.app_.png",
    liveLink: "https://pizza-react-app-000.netlify.app/",
    type: "web",
    long_description: "",
    images: ["/images/pizza-react-app-000.netlify.app_.png"],
  },
  {
    title: "Swift Media Mobile",
    description:
      "A Twitter-like social media app where users can follow each other, view followers and following lists, and post tweets with images using a rich text editor. It includes features like direct messaging, nested comments, upvoting/downvoting posts and comments, and the ability to save posts.",
    liveLink: "https://github.com/Pankaj-suthar777/swift-media-react-native",
    image: "/images/IMG-20241213-WA0016.jpg",
    type: "mobile",
    long_description: "",
    images: ["/images/IMG-20241213-WA0016.jpg"],
  },
  {
    title: "Podify Player",
    description:
      "A music and podcast app where users can upload, play, and enjoy content like on Spotify. Users can create private or public playlists, follow other users, mark their favorite songs and podcasts, and manage their favorite playlists. The app features OTP-based authentication and email verification for secure access.",
    image: "/images/unnamed (1)_page-0001.jpg",
    liveLink: "https://github.com/Pankaj-suthar777/podify-react-native",
    type: "mobile",
    long_description: "",
    images: ["/images/unnamed (1)_page-0001.jpg"],
  },
  {
    title: "Chat app",
    description:
      "An instant messaging app built with Expo, similar to WhatsApp, where users can chat, create groups, search for people, reply to messages, manage group members, and view user profiles and mutual chats. Powered by Firebase Realtime Database for seamless real-time communication.",
    liveLink: "https://github.com/Pankaj-suthar777/react-native-whatsapp",
    type: "mobile",
    image: "/images/WhatsApp Image 2024-12-13 at 14.19.00_53fbb93c.jpg",
    long_description: "",
    images: ["/images/WhatsApp Image 2024-12-13 at 14.19.00_53fbb93c.jpg"],
  },
];

export default projects;
