// lib/fetcher.ts
export async function apiFetch(path: string, opts: RequestInit = {}) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000/api'}${path}`, {
      credentials: 'include', // <--- important because backend uses httpOnly cookies
      headers: { "Content-Type": "application/json", ...(opts.headers || {}) },
      ...opts,
    });
  
    // try parse json safely
    const text = await res.text();
    const data = text ? JSON.parse(text) : null;
    if (!res.ok) {
      const err = new Error(data?.message || 'Request failed');
      // @ts-ignore
      err.status = res.status;
      throw err;
    }
    return data;
  }
  