import { API_URL } from '@/config/index';

export default async function search(req, res) {
  if (req.method === 'GET') {
    const { q, page, per_page } = req.query;

    const localPage = 1 || page;
    const localPerPage = 7 || per_page;
    
    const backendRes = await fetch(`${API_URL}/api/search?q=${q}&page=${localPage}&per_page=${localPerPage}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const data = await backendRes.json();
    
    if (backendRes.ok) {
      res.status(200).json({ data: data.products });
    } else {
      res.status(backendRes.status).json({ message: data.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
