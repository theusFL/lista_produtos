// /components/CardProduto.js
import Image from 'next/image';
import Link from 'next/link';

const cardStyle = {
  border: '1px solid #e2e8f0',
  borderRadius: '10px',
  padding: '24px',
  margin: '16px',
  width: '320px',
  backgroundColor: 'white',
  textAlign: 'center',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

const imageContainerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '16px',
};

const productNameStyle = {
  fontSize: '1.25rem',
  fontWeight: '600',
  margin: '16px 0 8px 0',
  minHeight: '50px' 
};

const productDescStyle = {
  color: '#4a5568',
  flexGrow: 1,
  minHeight: '60px'
};

const productPriceStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#2d3748',
  margin: '16px 0',
};

const seeMoreButtonStyle = {
  backgroundColor: '#3182ce',
  color: 'white',
  border: 'none',
  padding: '12px 24px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold',
  textDecoration: 'none', 
  display: 'inline-block',
  transition: 'background-color 0.2s',
};


const CardProduto = ({ id, nome, descricao, preco, imagem }) => {
  return (
    <div style={cardStyle}>
      <div style={imageContainerStyle}>
        <Image src={imagem} alt={nome} width={200} height={200} style={{ objectFit: 'contain' }} />
      </div>
      <div>
        <h2 style={productNameStyle}>{nome}</h2>
        <p style={productDescStyle}>{descricao.substring(0, 80)}...</p> 
        <h3 style={productPriceStyle}>{preco}</h3>
        <Link href={`/produtos/${id}`} passHref>
          <span style={seeMoreButtonStyle}>Ver Mais</span>
        </Link>
      </div>
    </div>
  );
};

export default CardProduto;
