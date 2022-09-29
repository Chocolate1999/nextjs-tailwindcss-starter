import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <section className='flex h-[100vh] w-full items-center justify-center text-center text-4xl'>
          Hello Chocolate
        </section>
      </main>
    </Layout>
  );
}
