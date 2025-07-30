// /pages/produtos/[id].js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { produtos } from '../../data/produtos';

// Esta função diz ao Next.js quais páginas devem ser geradas no momento do build
export async function getStaticPaths() {
  const paths = produtos.map((produto) => ({
    params: { id: produto.id.toString() },
  }));

  return { paths, fallback: false };
}

// Esta função busca os dados específicos para uma página de produto
export async function getStaticProps({ params }) {
  const produto = produtos.find((p) => p.id.toString() === params.id);
  return {
    props: {
      produto,
    },
  };
}

// Estilos para a página de detalhes
const containerStyle = {
  maxWidth: '800px',
  margin: '40px auto',
  padding: '20px',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center'
};

const backLinkStyle = {
    display: 'block',
    margin: '20px auto',
    color: '#3182ce',
    fontWeight: 'bold',
    textDecoration: 'none'
}

const PaginaDoProduto = ({ produto }) => {
  if (!produto) {
    return <div>Produto não encontrado!</div>;
  }

  return (
    <>
      <Head>
        <title>{produto.nome} | Loja Next</title>
      </Head>

      <Link href="/" style={backLinkStyle}>
        &larr; Voltar para o Catálogo
      </Link>

      <div style={containerStyle}>
        <Image src={produto.imagem} alt={produto.nome} width={400} height={400} style={{objectFit: 'contain'}} />
        <h1 style={{fontSize: '2.5rem', margin: '20px 0 10px 0'}}>{produto.nome}</h1>
        <p style={{fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.6'}}>{produto.descricao}</p>
        <div style={{fontSize: '2rem', fontWeight: 'bold', margin: '20px 0'}}>{produto.preco}</div>
        <button style={{
            backgroundColor: '#2f855a',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1.2rem',
            fontWeight: 'bold',
        }}>
            Comprar Agora
        </button>
      </div>
    </>
  );
};

export default PaginaDoProduto;
