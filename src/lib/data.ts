export const domains: string[] = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Astronomy",
  "Geology",
  "Meteorology",
  "Oceanography",
  "Economics",
  "Psychology",
  "Sociology",
  "Political Science",
  "Anthropology",
  "History",
  "Geography",
  "Philosophy",
  "Linguistics",
  "Literature",
];

export interface Resource {
  id: number;
  name: string;
  url: string;
  description: string;
}

export const resources: Resource[] = [
  {
    id: 1,
    name: "Khan Academy",
    url: "https://www.khanacademy.org",
    description:
      "A free, personalized learning resource offering practice exercises and instructional videos in subjects including math, science, and computer programming.",
  },
  {
    id: 2,
    name: "Coursera",
    url: "https://www.coursera.org",
    description:
      "An online platform that provides courses from leading universities and companies, covering a wide range of topics from data science to humanities.",
  },
  {
    id: 3,
    name: "edX",
    url: "https://www.edx.org",
    description:
      "Access free online courses from universities like Harvard and MIT, covering subjects such as engineering, computer science, business, and more.",
  },
  {
    id: 4,
    name: "MIT OpenCourseWare",
    url: "https://ocw.mit.edu",
    description:
      "A web-based publication of virtually all MIT course content, offering free access to materials from a wide variety of disciplines.",
  },
  {
    id: 5,
    name: "Wikipedia",
    url: "https://www.wikipedia.org",
    description:
      "A free, crowdsourced online encyclopedia covering virtually all subjects, maintained by a global community of volunteers.",
  },
  {
    id: 6,
    name: "Stanford Encyclopedia of Philosophy",
    url: "https://plato.stanford.edu",
    description:
      "A scholarly source offering peer-reviewed articles on philosophy, providing in-depth information on philosophical topics and figures.",
  },
  {
    id: 7,
    name: "ArXiv",
    url: "https://arxiv.org",
    description:
      "An open-access repository for research papers in fields like physics, computer science, mathematics, and more, used by researchers to share findings.",
  },
  {
    id: 8,
    name: "Project Gutenberg",
    url: "https://www.gutenberg.org",
    description:
      "A digital library offering over 60,000 free eBooks, including classic literature and out-of-copyright texts.",
  },
  {
    id: 9,
    name: "The New York Times Science Section",
    url: "https://www.nytimes.com/section/science",
    description:
      "A dedicated section of The New York Times offering in-depth articles and the latest news on science topics.",
  },
  {
    id: 10,
    name: "TED-Ed",
    url: "https://ed.ted.com",
    description:
      "A platform providing engaging educational videos on various topics, curated from experts and thinkers around the world.",
  },
  {
    id: 11,
    name: "National Geographic",
    url: "https://www.nationalgeographic.com",
    description:
      "A resource offering articles, videos, and images related to science, nature, and exploration from the trusted National Geographic Society.",
  },
  {
    id: 12,
    name: "Sci-Hub",
    url: "https://sci-hub.se",
    description:
      "A controversial site providing free access to academic papers, supporting researchers who lack access to subscription-based journals.",
  },
  {
    id: 13,
    name: "Stack Overflow",
    url: "https://stackoverflow.com",
    description:
      "A community-driven Q&A platform for programmers to find solutions to coding issues and share programming knowledge.",
  },
  {
    id: 14,
    name: "ResearchGate",
    url: "https://www.researchgate.net",
    description:
      "A professional network for scientists and researchers to share publications, ask and answer research questions, and collaborate.",
  },
  {
    id: 15,
    name: "Google Scholar",
    url: "https://scholar.google.com",
    description:
      "A freely accessible web search engine that indexes scholarly articles, providing citations and links to research across disciplines.",
  },
];
