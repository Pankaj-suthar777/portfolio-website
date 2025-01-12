interface Navigation {
  href: string;
  name: string;
}
const navigation: Navigation[] = [
  {
    name: "Home",
    href: "/",
  },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },

  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default navigation;
