import styled from 'styled-components';
import { colorAccent } from './app-theme'

export const Article = styled.article`
  padding: ${props => props.padding || "1rem"};
  background: white;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columnTemplate || "100%"};
  gap: ${props => props.gap || "0px"};
  padding: ${props => props.padding || "1rem"};
  background: white;
`;

export const InputBlock = styled.input.attrs(props => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: black;
  width: 90%;
  height: ${props => props.height || "auto" };
  font-size: 1em;
  border: 2px solid ${colorAccent};
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.margin || "0.5em 0"};
  padding: ${props => props.padding || "1.3em"};
`;

export const InputAreaBlock = styled.textarea.attrs(props => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: black;
  width: 90%;
  height: ${props => props.height || "auto" };
  font-size: 1em;
  border: 2px solid ${colorAccent};
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.margin || "0.5em 0"};
  padding: ${props => props.padding || "1.3em"};
`;
