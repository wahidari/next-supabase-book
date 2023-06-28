import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const API_URL = `${process.env.NEXT_PUBLIC_API_ROUTE}/api`;

// get total record count on each table for dashboard
export function useCountsData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/dashboard`, fetcher);
  return { data, error, isLoading };
}

// get total books record count for dashboard
export function useTotalBooksData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/dashboard/total-books`, fetcher);
  return { data, error, isLoading };
}

// get total authors record count for dashboard
export function useTotalAuthorsData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/dashboard/total-authors`, fetcher);
  return { data, error, isLoading };
}

// get total genres record count for dashboard
export function useTotalGenresData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/dashboard/total-genres`, fetcher);
  return { data, error, isLoading };
}

// get total quotes record count for dashboard
export function useTotalQuotesData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/dashboard/total-quotes`, fetcher);
  return { data, error, isLoading };
}

// get total tags record count for dashboard
export function useTotalTagsData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/dashboard/total-tags`, fetcher);
  return { data, error, isLoading };
}

// all books
export function useBooksData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/book`, fetcher);
  return { data, error, isLoading };
}

// detail book
export function useBookData(id: string, seo?: boolean) {
  const { data, error, isLoading } = useSWR(
    seo ? `${API_URL}/book?id=${id}&seo=true` : `${API_URL}/book?id=${id}`,
    fetcher
  );
  return { data, error, isLoading };
}

export function useQuotesData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/quote`, fetcher);
  return { data, error, isLoading };
}

// get all Quotes with all Tags in each Quote
export function useQuotesWithTagsData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/quote/with-tags`, fetcher);
  return { data, error, isLoading };
}

export function useQuoteData(id: string) {
  const { data, error, isLoading } = useSWR(id ? `${API_URL}/quote?id=${id}` : `${API_URL}/quote`, fetcher);
  return { data, error, isLoading };
}

export function useAuthorsData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/author`, fetcher);
  return { data, error, isLoading };
}

export function useAuthorData(id: string) {
  const { data, error, isLoading } = useSWR(`${API_URL}/author?id=${id}`, fetcher);
  return { data, error, isLoading };
}

export function useAuthorBySlugData(slug: string, seo?: boolean) {
  const { data, error, isLoading } = useSWR(
    seo ? `${API_URL}/author?slug=${slug}&seo=true` : `${API_URL}/author?slug=${slug}`,
    fetcher
  );
  return { data, error, isLoading };
}

// get total Book and Quote in from each Author
export function useAuthorTotalBookQuoteData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/author/total-book-quote`, fetcher);
  return { data, error, isLoading };
}

export function useTagsData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/tag`, fetcher);
  return { data, error, isLoading };
}

export function useTagData(id: string, seo?: boolean) {
  const { data, error, isLoading } = useSWR(
    seo ? `${API_URL}/tag?id=${id}&seo=true` : `${API_URL}/tag?id=${id}`,
    fetcher
  );
  return { data, error, isLoading };
}

// get total Quote in each Tag
export function useTagTotalQuoteData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/tag/total-quote`, fetcher);
  return { data, error, isLoading };
}

export function useGenresData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/genre`, fetcher);
  return { data, error, isLoading };
}

export function useGenreData(id: string, seo?: boolean) {
  const { data, error, isLoading } = useSWR(
    seo ? `${API_URL}/genre?id=${id}&seo=true` : `${API_URL}/genre?id=${id}`,
    fetcher
  );
  return { data, error, isLoading };
}

// get total Book in each Genre
export function useGenreTotalBookData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/genre/total-book`, fetcher);
  return { data, error, isLoading };
}

export function useSearchData(query: string | string[]) {
  const { data, error, isLoading } = useSWR(`${API_URL}/search?q=${query}`, fetcher);
  return { data, error, isLoading };
}

// Statistic
export function useBookByAuthorData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/statistics/book-by-author`, fetcher);
  return { data, error, isLoading };
}

export function useBookByGenreData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/statistics/book-by-genre`, fetcher);
  return { data, error, isLoading };
}

export function useQuoteByAuthorData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/statistics/quote-by-author`, fetcher);
  return { data, error, isLoading };
}

export function useQuoteByTagData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/statistics/quote-by-tag`, fetcher);
  return { data, error, isLoading };
}

export function useLogsData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/log`, fetcher, { refreshInterval: 1000 });
  return { data, error, isLoading };
}

export function useSessionsData() {
  const { data, error, isLoading } = useSWR(`${API_URL}/session`, fetcher, { refreshInterval: 1000 });
  return { data, error, isLoading };
}
