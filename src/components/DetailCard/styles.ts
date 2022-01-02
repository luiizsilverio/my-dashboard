import styled from "styled-components";

export const Container = styled.li`
  background-color: ${props => props.theme.colors.complementar};
  list-style: none;
  border-radius: 4px;
  margin: 10px 0;
  padding: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    opacity: .7;
    transform: translateX(6px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;

    span {

    }
  }
`;

type TagProps = {
  color: string
}

export const Tag = styled.div<TagProps>`
  width: 6px;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: ${props => props.color};
  position: absolute;
  left: 0;
`;
