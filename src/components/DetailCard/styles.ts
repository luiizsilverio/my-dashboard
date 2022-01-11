import styled, {keyframes} from "styled-components";

const subir = keyframes`
	from {
		opacity: 0;
		transform: translateY(10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`

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

  animation: ${ subir } .5s ease-out;

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
      font-weight: 500;
      /* font-size: 18px; */
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
