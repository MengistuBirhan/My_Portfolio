export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  url?: string;
}

// Add your certificates here, for example:
// { title: "Meta Front-End Developer", issuer: "Coursera", year: "2024", url: "https://..." }
export const certificates: Certificate[] = [];
