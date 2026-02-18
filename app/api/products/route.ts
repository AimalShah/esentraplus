import { NextResponse } from 'next/server';

const WP_URL = process.env.WP_URL || '';
const WC_CONSUMER_KEY = process.env.WC_CONSUMER_KEY || '';
const WC_CONSUMER_SECRET = process.env.WC_CONSUMER_SECRET || '';

interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
}

async function fetchWooCommerce(endpoint: string, options: FetchOptions = {}) {
  const { method = 'GET', body } = options;
  
  const url = new URL(`${WP_URL}/wp-json/wc/v3/${endpoint}`);
  
  const auth = Buffer.from(`${WC_CONSUMER_KEY}:${WC_CONSUMER_SECRET}`).toString('base64');
  
  const response = await fetch(url.toString(), {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${auth}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  
  if (!response.ok) {
    throw new Error(`WooCommerce API error: ${response.statusText}`);
  }
  
  return response.json();
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const perPage = searchParams.get('per_page') || '10';
  const page = searchParams.get('page') || '1';
  const featured = searchParams.get('featured');
  
  try {
    let endpoint = `products?per_page=${perPage}&page=${page}&status=publish`;
    if (featured === 'true') {
      endpoint += '&featured=true';
    }
    
    const products = await fetchWooCommerce(endpoint);
    
    return NextResponse.json(products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
