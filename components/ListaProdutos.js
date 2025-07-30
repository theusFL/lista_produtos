// /components/ListaProdutos.js
import { produtos } from '../data/produtos';
import CardProduto from './CardProduto';

const listStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '16px',
  padding: '40px 20px',
};

const ListaProdutos = () => {
  return (
    <div style={listStyle}>
      {produtos.map((produto) => (
        <CardProduto
          key={produto.id}
          id={produto.id} 
          nome={produto.nome}
          descricao={produto.descricao}
          preco={produto.preco}
          imagem={produto.imagem}
        />
      ))}
    </div>
  );
};

export default ListaProdutos;
