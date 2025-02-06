```javascript
// app/page.js

'use client';

import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyComponent />
    </Suspense>
  );
}

// app/components/MyComponent.js

'use client';

import { useState, useEffect } from 'react';

export default function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/data');
      const data = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>Client Component: {JSON.stringify(data)}</div>
  );
}

// app/api/data/route.js

'use server';

export default async function handler(req, res) {
  const data = { message: 'Data from Server Component' };
  return res.status(200).json(data);
}
```