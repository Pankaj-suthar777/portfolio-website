interface Project {
  image: string;
  title: string;
  description: string;
}
const projects: Project[] = [
  {
    image: "/images/next-eventsYouLike_page-0001.jpg",
    title: "EventsYoulike",
    description:
      "EventsYoulike is a full-stack web application built with Next.js, MongoDB, and Cleark that simplifies event booking for both organizers and attendees.",
  },
  {
    image: "/images/swift-rivals-mern.vercel.app_(3).png",
    title: "Swift Media",
    description:
      "Developed a platform for users to follow each other, create posts, and engage in real-time one-on-one and group chats Integrated features for upvoting/downvoting posts and adding nested comments to enhance community interaction",
  },
  {
    image: "/images/rmp_page-0002.jpg",
    title: "Refurbhised Market Place",
    description:
      "Introducing RMP, a user-friendly web application dedicated to refurbished products. With RMP, users can effortlessly create an account, securely log in, and experience enhanced authentication through JWT (JSON Web Token). This platform empowers individuals to sell their refurbished items with ease.",
  },
];

export default projects;
