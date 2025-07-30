// /pages/index.js
import Head from 'next/head';
import ListaProdutos from '../components/ListaProdutos';

const headerStyle = {
  textAlign: 'center',
  padding: '40px 20px',
  backgroundColor: 'white',
  borderBottom: '1px solid #e2e8f0',
};

const titleStyle = {
    fontSize: '2.5rem',
    color: '#2d3748',
    margin: 0,
};

const subtitleStyle = {
    fontSize: '1.2rem',
    color: '#718096',
    marginTop: '8px'
};

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Catálogo de Produtos | Loja Next</title>
        <meta name="description" content="Confira nosso catálogo incrível de produtos de tecnologia." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={headerStyle}>
        <h1 style={titleStyle}>Loja Next Store</h1>
        <p style={subtitleStyle}>Tecnologia e Inovação ao seu alcance</p>
      </header>

      <main>
        <ListaProdutos />
      </main>
    </div>
  );
}
