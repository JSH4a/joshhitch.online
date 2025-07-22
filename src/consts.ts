import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Joshua Hitchon",
  DESCRIPTION: "My name is Joshua Hitchon and I am a software developer in the UK. This is my portfolio and blog site, where you can find out all about me and my work.",
  AUTHOR: "Joshua Hitchon",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Education Page
export const EDUCATION: Page = {
  TITLE: "Education",
  DESCRIPTION: "My academic story and qualifications.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search over my blog posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  {
    TEXT: "Education",
    HREF: "/education"
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "hello@joshuahitchon.com",
    HREF: "mailto:hello@joshuahitchon.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "JSH4a",
    HREF: "https://github.com/JSH4a"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Joshua Hitchon",
    HREF: "https://www.linkedin.com/in/joshua-hitchon/",
  },
  // { 
  //   NAME: "Twitter",
  //   ICON: "twitter-x",
  //   TEXT: "markhorn_dev",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
]

