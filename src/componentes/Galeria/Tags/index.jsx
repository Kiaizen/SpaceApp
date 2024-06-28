import styled,{ css } from "styled-components";
import tags from "./tags.json";

const ContainerEstilizado = styled.menu`
  display: flex;
  padding: 0;
  margin: 40px 0 14px 0;
  align-items: center;
  gap: 24px;
`;

const ParagrafoEstilizado = styled.p`
  font-size: 24px;
  color: #d9d9d9;
  font-weight: 400;
  line-height: 28.8px;
  margin-right: 42px;
`;

const BotaoEstilizado = styled.button`
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  border-radius: 10px;
  padding: 10px 8px 10px 8px;
  height: 49px;
  background: rgba(217, 217, 217, 0.3);
  transition: background-color 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }

  ${({ ativo }) =>
    ativo &&
    css`
      border-color: #c98cf1;
    `}
`;

const Tags = ({tagId, setTagId}) => {
    

  return (
    <ContainerEstilizado>
      <ParagrafoEstilizado>Busque por tags:</ParagrafoEstilizado>
      {tags.map((tag) => (
        <BotaoEstilizado
          onClick={() => setTagId(tag.tagId)}
          key={tag.id}
          ativo={tagId === tag.id ? true : false}
        >
          {tag.titulo}
        </BotaoEstilizado>
      ))}
    </ContainerEstilizado>
  );
};

export default Tags;
