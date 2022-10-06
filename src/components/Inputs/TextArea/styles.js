import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import { typography } from '../../../styles/typography';

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Label = styled.p`
  color: ${colors.gray};
  ${typography.overline};
`;

export const StyledTextArea = styled.textarea`
  max-width: 60rem;
  resize: none;
  border: 1px solid ${colors.pink};
  padding: 0.8rem;
  border-radius: 0.8rem;
  color: ${colors.darkGray};
  overflow: hidden;
  min-height: 7.6rem;
  &:focus {
    border: 1px solid ${colors.darkPink};
    outline: none;
  }
  &::placeholder {
    color: ${colors.lightGray};
  }
`;

export const Caption = styled.p`
  ${typography.caption};
  color: ${colors.lightGray};
`;
