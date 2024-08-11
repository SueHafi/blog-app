export type Article = {
  img: string;
  alt: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  createdAt: string;
  id: number;
};

type Articles = Article[];

export async function getData(): Promise<Articles> {
  const baseUrl = "http://localhost:3000";
  let url = `${baseUrl}/articles`;
  // homepage: boolean put as parameter
  // if (homepage) {
  //   url = `${baseUrl}/articles`;
  // } else {
  //   url = `${baseUrl}/article`;
  // }

  let data;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}

// export const blogData = [
//   {
//     img: "/blogImages/squirrel.jpg",
//     alt: "squirrel leaping from tree",
//     title: "Think before you jump into programming - guide for beginners",
//     excerpt:
//       "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
//     content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!`,
//     author: "Jake Roman",
//     createdAt: "2024-08-08",
//   },
//   {
//     img: "/blogImages/glasses.jpg",
//     alt: "glasses on laptop making code in background visible through the lens",
//     title: "Accessibility for all",
//     excerpt:
//       "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
//     content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!`,
//     author: "Greta Booker",
//     createdAt: "2024-06-11",
//   },
//   {
//     img: "/blogImages/seo.jpg",
//     alt: "robot looking at a browser with a magnifying glass",
//     title: "Key reasons to why SEO is important",
//     excerpt:
//       "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
//     content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!`,
//     author: "Meghan Adkins",
//     createdAt: "2023-02-20",
//   },
//   {
//     img: "/blogImages/chatgpt.jpg",
//     alt: "mobile phone with random shapes around it and content in the background that reads as chatgpt",
//     title: "Should you code using ChatGPT",
//     excerpt:
//       "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
//     content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!`,
//     author: "Ike Hammond",
//     createdAt: "2022-09-03",
//   },
//   {
//     img: "/blogImages/browser.jpg",
//     alt: "firefox browser with shapes floating around it",
//     title: "Browser compatability and why it matters",
//     excerpt:
//       "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
//     content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!`,
//     author: "Carroll Gonzalez",
//     createdAt: "2022-08-23",
//   },
//   {
//     img: "/blogImages/mobile.jpg",
//     alt: "pink phone, shapes and cubes in a grid formation",
//     title: "Mobile first design and why its important",
//     excerpt:
//       "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
//     content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!`,
//     author: "Johnny Landry",
//     createdAt: "2022-08-23",
//   },
//   {
//     img: "/blogImages/apple.jpg",
//     alt: "apple laptop with books stacked neatly next to it",
//     title: "Clean code principles to live by",
//     excerpt:
//       "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
//     content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!`,
//     author: "Barbra Williamson",
//     createdAt: "2022-05-04",
//   },
//   {
//     img: "/blogImages/react.jpg",
//     alt: "some react code on a screen",
//     title: "Three new features that will change react forever",
//     excerpt:
//       "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
//     content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!`,
//     author: "Ophelia Hamilton",
//     createdAt: "2022-04-17",
//   },
//   {
//     img: "/blogImages/keyboard.jpg",
//     alt: "keyboard with white rgb lighting",
//     title: "How to debug with confidence",
//     excerpt:
//       "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
//     content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!`,
//     author: "Alva Gregory",
//     createdAt: "2021-12-25",
//   },
//   {
//     img: "/blogImages/letters.jpg",
//     alt: "letters carved onto wood",
//     title: "Naming conventions in programming",
//     excerpt:
//       "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
//     content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!`,
//     author: "Gavin Perez",
//     createdAt: "2021-08-12",
//   },
//   {
//     img: "/blogImages/python.jpg",
//     alt: "green python resting on a tree branch",
//     title: "Is python the best language for backend development",
//     excerpt:
//       "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
//     content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!`,
//     author: "Charlie Mcmahon",
//     createdAt: "2020-11-21",
//   },
//   {
//     img: "/blogImages/git.jpg",
//     alt: "git's cat logo carved in wood with screens in background",
//     title: "Top 10 git version control tips",
//     excerpt:
//       "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
//     content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!

//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//           accusamus odit dolores esse doloremque eum qui, aperiam earum magni
//           officia unde, dolor veniam est odio harum iste ex pariatur sunt!`,
//     author: "Joe Tucker",
//     createdAt: "2020-07-18",
//   },
// ];
