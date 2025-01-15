export type ProjectType = "web" | "mobile" | "game";

interface Project {
  image: string;
  title: string;
  description: string;
  liveLink: string;
  type: ProjectType;
  images: string[];
}

const projects: Project[] = [
  {
    image: "/images/next-eventsYouLike_page-0001.jpg",
    title: "EventsYoulike",
    description:
      "EventsYoulike is a full-stack web application built with Next.js, MongoDB, and Cleark that simplifies event booking for both organizers and attendees.",
    liveLink: "https://next-events-you-like.vercel.app/",
    type: "web",
    images: [
      "/images/next-eventsYouLike_page-0001.jpg",
      "/images/EventsYoulike/next-eventsYouLike_page-0002.jpg",
      "/images/EventsYoulike/next-eventsYouLike_page-0003.jpg",
      "/images/EventsYoulike/next-eventsYouLike_page-0004.jpg",
      "/images/EventsYoulike/next-eventsYouLike_page-0005.jpg",
      "/images/EventsYoulike/next-eventsYouLike_page-0006.jpg",
      "/images/EventsYoulike/next-eventsYouLike_page-0007.jpg",
      "/images/EventsYoulike/next-eventsYouLike_page-0008.jpg",
      "/images/EventsYoulike/next-eventsYouLike_page-0009.jpg",
    ],
  },
  {
    image: "/images/swift-rivals-mern.vercel.app_(3).png",
    title: "Swift Media",
    description:
      "Developed a platform for users to follow each other, create posts, and engage in real-time one-on-one and group chats Integrated features for upvoting/downvoting posts and adding nested comments to enhance community interaction",
    liveLink: "https://swift-rivals-mern.vercel.app/",
    type: "web",
    images: [
      "/images/swift-rivals-mern.vercel.app_(3).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (1).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (2).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (4).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (5).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (6).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (7).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (8).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (9).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (10).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (11).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (12).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (13).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (14).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (15).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (16).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (17).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (18).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (19).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (20).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (21).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_ (22).png",
      "/images/SwiftMedia/swift-rivals-mern.vercel.app_.png",
    ],
  },
  {
    image: "/images/rmp_page-0002.jpg",
    title: "Refurbhised Market Place",
    description:
      "Introducing RMP, a user-friendly web application dedicated to refurbished products. With RMP, users can effortlessly create an account, securely log in, and experience enhanced authentication through JWT (JSON Web Token). This platform empowers individuals to sell their refurbished items with ease.",
    liveLink: "https://refurbhised-maket-place.onrender.com/",
    type: "web",
    images: [
      "/images/RMP/rmp_page-0001.jpg",
      "/images/RMP/rmp_page-0002.jpg",
      "/images/RMP/rmp_page-0003.jpg",
      "/images/RMP/rmp_page-0004.jpg",
      "/images/RMP/rmp_page-0005.jpg",
      "/images/RMP/rmp_page-0006.jpg",
      "/images/RMP/rmp_page-0007.jpg",
    ],
  },
  {
    title: "Multivendor E-Commerce",
    description:
      "A Full-Stack Multivendor E-commerce Application built with React.js, Redux, Node.js, Express.js, and MongoDB. It includes features like product filters, wishlists, reviews, seller dashboards with sales analytics, and admin management tools. Real-time chat is enabled via Socket.io, and MongoDB aggregation pipelines handle complex queries for reporting. Secure payments are integrated with Stripe, allowing smooth transactions for sellers and buyers.",
    image: "/images/mutivendor-ecommerce-mern-frontend.vercel.app_.png",
    liveLink: "https://mutivendor-ecommerce-mern-frontend.vercel.app/",
    type: "web",
    images: ["/images/mutivendor-ecommerce-mern-frontend.vercel.app_.png"],
  },
  {
    title: "ProShipShop E-Commerce Shop",
    description:
      "Introducing a E-Commerce web application, with features of - Product reviews and ratings, Top products carousel, Product search feature, User profile with orders, Admin product management, Admin user management, Admin Order details page, Mark orders as delivered option, Checkout process (shipping, payment method, etc) PhonePay / credit card integration",
    image: "/images/proshipshop.onrender.com_ (2).png",
    liveLink: "https://proshipshop.onrender.com/",
    type: "web",
    images: [
      "/images/Proshipshop/proshipshop.onrender.com_ (2).png",
      "/images/Proshipshop/proshipshop.onrender.com_ (3).png",
      "/images/Proshipshop/proshipshop.onrender.com_ (4).png",
      "/images/Proshipshop/proshipshop.onrender.com_ (5).png",
      "/images/Proshipshop/proshipshop.onrender.com_ (6).png",
      "/images/Proshipshop/proshipshop.onrender.com_ (7).png",
      "/images/Proshipshop/proshipshop.onrender.com_ (8).png",
      "/images/Proshipshop/proshipshop.onrender.com_ (9).png",
      "/images/Proshipshop/proshipshop.onrender.com_ (10).png",
      "/images/Proshipshop/proshipshop.onrender.com_ (11).png",
    ],
  },
  {
    title: "Fast Pizza",
    description:
      "Introducing Fast Pizza, your go-to pizza ordering web app for a seamless and delightful experience. With Fast Pizza, pizza enthusiasts can dive into a world of flavors, convenience, and user-friendly features.",
    image: "/images/pizza-react-app-000.netlify.app_.png",
    liveLink: "https://pizza-react-app-000.netlify.app/",
    type: "web",
    images: ["/images/pizza-react-app-000.netlify.app_.png"],
  },
  {
    title: "Swift Media Mobile",
    description:
      "A Twitter-like social media app where users can follow each other, view followers and following lists, and post tweets with images using a rich text editor. It includes features like direct messaging, nested comments, upvoting/downvoting posts and comments, and the ability to save posts.",
    liveLink: "https://github.com/Pankaj-suthar777/swift-media-react-native",
    image: "/images/IMG-20241213-WA0016.jpg",
    type: "mobile",
    images: [
      "/images/Swift Media Mobile/IMG-20241213-WA0016.jpg",
      "/images/Swift Media Mobile/IMG-20241213-WA0001.jpg",
      "/images/Swift Media Mobile/IMG-20241213-WA0002.jpg",
      "/images/Swift Media Mobile/IMG-20241213-WA0003.jpg",
      "/images/Swift Media Mobile/IMG-20241213-WA0004.jpg",
      "/images/Swift Media Mobile/IMG-20241213-WA0005.jpg",
      "/images/Swift Media Mobile/IMG-20241213-WA0006.jpg",
      "/images/Swift Media Mobile/IMG-20241213-WA0007.jpg",
      "/images/Swift Media Mobile/IMG-20241213-WA0008.jpg",
      "/images/Swift Media Mobile/IMG-20241213-WA0009.jpg",
      "/images/Swift Media Mobile/IMG-20241213-WA0010.jpg",
      "/images/Swift Media Mobile/IMG-20241213-WA0011.jpg",
      "/images/Swift Media Mobile/IMG-20241213-WA0012.jpg",
      "/images/Swift Media Mobile/IMG-20241213-WA0013.jpg",
      "/images/Swift Media Mobile/IMG-20241213-WA0014.jpg",
      "/images/Swift Media Mobile/IMG-20241213-WA0015.jpg",
      "/images/Swift Media Mobile/IMG-20241213-WA0016.jpg",
      "/images/Swift Media Mobile/IMG-20241213-WA0017.jpg",
    ],
  },
  {
    title: "Podify Player",
    description:
      "A music and podcast app where users can upload, play, and enjoy content like on Spotify. Users can create private or public playlists, follow other users, mark their favorite songs and podcasts, and manage their favorite playlists. The app features OTP-based authentication and email verification for secure access.",
    image: "/images/unnamed (1)_page-0001.jpg",
    liveLink: "https://github.com/Pankaj-suthar777/podify-react-native",
    type: "mobile",
    images: [
      "/images/PodifyPlayer/unnamed (1)_page-0001.jpg",
      "/images/PodifyPlayer/unnamed (1)_page-0002.jpg",
      "/images/PodifyPlayer/unnamed (1)_page-0003.jpg",
      "/images/PodifyPlayer/unnamed (1)_page-0004.jpg",
      "/images/PodifyPlayer/unnamed (1)_page-0005.jpg",
    ],
  },
  {
    title: "Chat app",
    description:
      "An instant messaging app built with Expo, similar to WhatsApp, where users can chat, create groups, search for people, reply to messages, manage group members, and view user profiles and mutual chats. Powered by Firebase Realtime Database for seamless real-time communication.",
    liveLink: "https://github.com/Pankaj-suthar777/react-native-whatsapp",
    type: "mobile",
    image: "/images/WhatsApp Image 2024-12-13 at 14.19.00_53fbb93c.jpg",
    images: [
      "/images/Whatsapp Clone React Native/WhatsApp Image 2024-12-13 at 14.18.58_bc60d6d8.jpg",
      "/images/Whatsapp Clone React Native/WhatsApp Image 2024-12-13 at 14.19.00_53fbb93c.jpg",
      "/images/Whatsapp Clone React Native/WhatsApp Image 2024-12-13 at 14.19.01_46e1a065.jpg",
      "/images/Whatsapp Clone React Native/WhatsApp Image 2024-12-13 at 14.19.01_4198d0a4.jpg",
      "/images/Whatsapp Clone React Native/WhatsApp Image 2024-12-13 at 14.19.01_79125799.jpg",
      "/images/Whatsapp Clone React Native/WhatsApp Image 2024-12-13 at 14.19.02_8fdc0877.jpg",
      "/images/Whatsapp Clone React Native/WhatsApp Image 2024-12-13 at 14.19.02_60fd7455.jpg",
      "/images/Whatsapp Clone React Native/WhatsApp Image 2024-12-13 at 14.19.02_ce35db7c.jpg",
    ],
  },
];

export default projects;
