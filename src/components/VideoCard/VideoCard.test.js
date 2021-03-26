import React from 'react';
import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import { getTimeLapsed } from '../../utils/fns';

import ResultList from '../ResultsList';
import VideoCard from './index';

describe('Check Props Integrity', () => {
  test('Title is not null/undefined', () => {
    const rendered = TestRenderer.create(<ResultList />);
    const card = rendered.root.findAllByType(VideoCard)[0];
    expect(card.props.title).toBeTruthy();
  });
  test('Description is not null/undefined', () => {
    const rendered = TestRenderer.create(<ResultList />);
    const card = rendered.root.findAllByType(VideoCard)[0];
    expect(card.props.description).toBeTruthy();
  });
  test('Thumbnail is not null/undefined', () => {
    const rendered = TestRenderer.create(<ResultList />);
    const card = rendered.root.findAllByType(VideoCard)[0];
    expect(card.props.thumbnail).toBeTruthy();
  });
  test('Date is not null/undefined', () => {
    const rendered = TestRenderer.create(<ResultList />);
    const card = rendered.root.findAllByType(VideoCard)[0];
    expect(card.props.date).toBeTruthy();
  });
  test('Channel is not null/undefined', () => {
    const rendered = TestRenderer.create(<ResultList />);
    const card = rendered.root.findAllByType(VideoCard)[0];
    expect(card.props.channel).toBeTruthy();
  });
});

describe('Check if props are being rendered correctly', () => {
  test('Title is there', () => {
    const title = 'Title';
    render(<VideoCard title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
  test('Description is there', () => {
    const description = 'Description';
    render(<VideoCard description={description} />);
    expect(screen.getByText(description)).toBeTruthy();
  });
  test('Date is there', () => {
    const date = new Date();
    render(<VideoCard date={date} />);
    expect(screen.getByText(getTimeLapsed(new Date()))).toBeTruthy();
  });
  test('Channel is there', () => {
    const channel = 'Channel';
    render(<VideoCard title={channel} />);
    expect(screen.getByText(channel)).toBeTruthy();
  });
});
