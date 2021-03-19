import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

export function Card({ classes, children, ...restProps }) {
  return (
    <Container className={classNames('card', classes)} {...restProps}>
      {children}
    </Container>
  );
}

Card.Body = function CardBody({ classes, children, ...restProps }) {
  return (
    <Body className={classNames('card__body', classes)} {...restProps}>
      {children}
    </Body>
  );
};

Card.Title = function CardTitle({ classes, children, ...restProps }) {
  return (
    <Title className={classNames('card__title', classes)} {...restProps}>
      {children}
    </Title>
  );
};

Card.Text = function CardText({ classes, children, ...restProps }) {
  return (
    <Text className={classNames('card__text', classes)} {...restProps}>
      {children}
    </Text>
  );
};

Card.Image = function CardImage({ src, alt, classes, ...restProps }) {
  return (
    <Image
      src={src}
      alt={alt}
      className={classNames('card__image', classes)}
      {...restProps}
    />
  );
};

Card.Button = function CardButton({ classes, children, ...restProps }) {
  return (
    <Button type="button" className={classNames('card__button', classes)} {...restProps}>
      {children}
    </Button>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 250px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
`;

const Text = styled.p`
  line-height: 25px;
  color: #6c757d;
`;

const Image = styled.img`
  width: 100%;
`;

const Button = styled.button`
  cursor: pointer;
  margin-top: auto;
  width: 100%;
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
  display: block;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    color: #fff;
    background-color: #218838;
    border-color: #1e7e34;
  }
`;
