const WP_URL = process.env.NEXT_PUBLIC_WP_URL || '';
const WC_CONSUMER_KEY = process.env.NEXT_PUBLIC_WC_CONSUMER_KEY || '';
const WC_CONSUMER_SECRET = process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET || '';

interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
}

export async function fetchWooCommerce(endpoint: string, options: FetchOptions = {}) {
  const { method = 'GET', body } = options;
  
  const url = new URL(`${WP_URL}/wp-json/wc/v3/${endpoint}`);
  url.searchParams.append('consumer_key', WC_CONSUMER_KEY);
  url.searchParams.append('consumer_secret', WC_CONSUMER_SECRET);
  
  const response = await fetch(url.toString(), {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  
  if (!response.ok) {
    throw new Error(`WooCommerce API error: ${response.statusText}`);
  }
  
  return response.json();
}

export async function getProducts(perPage: number = 10, page: number = 1) {
  return fetchWooCommerce(`products?per_page=${perPage}&page=${page}&status=publish`);
}

export async function getProductById(id: number) {
  return fetchWooCommerce(`products/${id}`);
}

export async function getProductBySlug(slug: string) {
  const products = await fetchWooCommerce(`products?slug=${slug}&status=publish`);
  return products[0] || null;
}

export async function getFeaturedProducts(perPage: number = 6) {
  return fetchWooCommerce(`products?featured=true&per_page=${perPage}&status=publish`);
}

export function formatPrice(price: string | number, currency: string = 'Rs'): string {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  return `${currency} ${numPrice.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
}
