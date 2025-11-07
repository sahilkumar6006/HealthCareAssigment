import auth from '@react-native-firebase/auth';

export interface ApiOptions extends RequestInit {
  auth?: boolean;
}

const API_BASE = '';

export async function apiFetch(path: string, options: ApiOptions = {}) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> | undefined),
  };

  if (options.auth !== false) {
    const user = auth().currentUser;
    if (user) {
      const token = await user.getIdToken();
      if (token) headers.Authorization = `Bearer ${token}`;
    }
  }

  const url = /^https?:\/\//i.test(path) ? path : `${API_BASE}${path}`;
  const res = await fetch(url, { ...options, headers });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`API ${res.status}: ${text || res.statusText}`);
  }
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) return res.json();
  return res.text();
}
