// /components/CardProduto.js
import Image from 'next/image';

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

const cardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
}

const productNameStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    margin: '16px 0 8px 0',
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

const buyButtonStyle = {
    backgroundColor: '#3182ce',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
};

const CardProduto = ({ nome, descricao, preco, imagem }) => {
  return (
    <div 
      style={cardStyle} 
      onMouseOver={e => {
        Object.assign(e.currentTarget.style, cardHoverStyle);
      }}
      onMouseOut={e => {
        Object.assign(e.currentTarget.style, cardStyle);
      }}
    >
      <Image src={imagem} alt={nome} width={250} height={200} style={{ objectFit: 'contain' }} />
      <div>
        <h2 style={productNameStyle}>{nome}</h2>
        <p style={productDescStyle}>{descricao}</p>
        <h3 style={productPriceStyle}>{preco}</h3>
        <button style={buyButtonStyle}>Adicionar ao Carrinho</button>
      </div>
    </div>
  );
};

export default CardProduto;
