export type Article = {
  img: string;
  alt: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  id: number;
};

export type ArticleSummary = {
  img: string;
  alt: string;
  title: string;
  excerpt: string;
  id: number;
};

export async function getArticleSummariesData(): Promise<ArticleSummary[]> {
  const baseUrl = "http://localhost:3000";
  let url = `${baseUrl}/articles`;

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

export async function getArticleData(id: number): Promise<Article> {
  const baseUrl = "http://localhost:3000";
  let url = `${baseUrl}/articles/${id}`;
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
