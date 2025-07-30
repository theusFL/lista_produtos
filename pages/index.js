// /pages/index.js
import Head from 'next/head';
import ListaProdutos from '../components/ListaProdutos';

// Estilos do Cabeçalho atualizados
const headerStyle = {
  textAlign: 'center',
  padding: '50px 20px', // Aumentei um pouco o padding para dar mais respiro
  backgroundColor: '#2d3748', // <-- MUDANÇA: Fundo cinza-escuro
  borderBottom: '1px solid #1a202c',
};

// Estilos do Título atualizados
const titleStyle = {
    fontSize: '2.5rem',
    color: '#ffffff', // <-- MUDANÇA: Texto branco
    margin: 0,
    fontWeight: 'bold',
};

// Estilos do Subtítulo atualizados
const subtitleStyle = {
    fontSize: '1.2rem',
    color: '#a0aec0', // <-- MUDANÇA: Texto cinza-claro
    marginTop: '8px',
    fontWeight: '300',
};

// Estilo para a área principal do conteúdo
const mainStyle = {
  backgroundColor: '#f7fafc', // <-- MUDANÇA: Fundo principal cinza-claro
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

      {/* Aplicando o estilo ao main */}
      <main style={mainStyle}>
        <ListaProdutos />
      </main>
    </div>
  );
}
