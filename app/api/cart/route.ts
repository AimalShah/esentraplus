import { NextResponse } from 'next/server';

const WP_URL = process.env.WP_URL || '';
const WC_CONSUMER_KEY = process.env.WC_CONSUMER_KEY || '';
const WC_CONSUMER_SECRET = process.env.WC_CONSUMER_SECRET || '';

async function fetchWooCommerce(endpoint: string, options: { method?: string; body?: any } = {}) {
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
  const productId = searchParams.get('id');
  
  try {
    if (productId) {
      const product = await fetchWooCommerce(`products/${productId}`);
      return NextResponse.json(product);
    }
    
    return NextResponse.json({ error: 'Product ID required' }, { status: 400 });
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productId, quantity = 1 } = body;
    
    if (!productId) {
      return NextResponse.json({ error: 'Product ID required' }, { status: 400 });
    }
    
    const cartItem = await fetchWooCommerce(`products/${productId}`);
    
    return NextResponse.json({
      success: true,
      product: cartItem,
      quantity,
    });
  } catch (error) {
    console.error('Failed to add to cart:', error);
    return NextResponse.json({ error: 'Failed to add to cart' }, { status: 500 });
  }
}
