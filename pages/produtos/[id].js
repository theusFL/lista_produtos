// /pages/produtos/[id].js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { produtos } from '../../data/produtos';

export async function getStaticPaths() {
  const paths = produtos.map((produto) => ({
    params: { id: produto.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const produto = produtos.find((p) => p.id.toString() === params.id);
  return {
    props: {
      produto,
    },
  };
}

const pageContainerStyle = {
  width: '90%',
  maxWidth: '800px',
  margin: '40px auto',
};

const backButtonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '10px 20px',
  marginBottom: '25px',
  backgroundColor: '#edf2f7',
  color: '#2d3748',
  fontWeight: 'bold',
  textDecoration: 'none',
  borderRadius: '8px',
  border: '1px solid transparent',
  transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
};

const backButtonHoverStyle = {
  backgroundColor: '#e2e8f0',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
};


const productCardStyle = {
  padding: '40px',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center'
};


const PaginaDoProduto = ({ produto }) => {
  if (!produto) {
    return <div>Produto não encontrado!</div>;
  }

  return (
    <>
      <Head>
        <title>{produto.nome} | Loja Next</title>
      </Head>

      <div style={pageContainerStyle}>
        <Link 
          href="/" 
          style={backButtonStyle}
          onMouseOver={e => Object.assign(e.currentTarget.style, backButtonHoverStyle)}
          onMouseOut={e => Object.assign(e.currentTarget.style, backButtonStyle)}
        >
          <span>&#x2190;</span> 
          <span>Voltar ao Catálogo</span>
        </Link>

        <div style={productCardStyle}>
          <Image src={produto.imagem} alt={produto.nome} width={400} height={400} style={{objectFit: 'contain'}} />
          <h1 style={{fontSize: '2.5rem', margin: '20px 0 10px 0'}}>{produto.nome}</h1>
          <p style={{fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.6'}}>{produto.descricao}</p>
          <div style={{fontSize: '2.2rem', fontWeight: 'bold', margin: '30px 0'}}>{produto.preco}</div>
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
      </div>
    </>
  );
};

export default PaginaDoProduto;
