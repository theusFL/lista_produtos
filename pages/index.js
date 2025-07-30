// /pages/index.js
import Head from 'next/head';
import ListaProdutos from '../components/ListaProdutos';

const headerStyle = {
  textAlign: 'center',
  padding: '50px 20px', 
  backgroundColor: '#2d3748', 
  borderBottom: '1px solid #1a202c',
};

const titleStyle = {
    fontSize: '2.5rem',
    color: '#ffffff', 
    margin: 0,
    fontWeight: 'bold',
};

const subtitleStyle = {
    fontSize: '1.2rem',
    color: '#a0aec0', 
    marginTop: '8px',
    fontWeight: '300',
};

const mainStyle = {
  backgroundColor: '#f7fafc', 
}

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

      <main style={mainStyle}>
        <ListaProdutos />
      </main>
    </div>
  );
}
