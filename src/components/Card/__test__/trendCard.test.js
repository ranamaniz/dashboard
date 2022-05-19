import React from 'react';
import ReactDOM from 'react-dom/client';
import TrendCard from '../TrendCard';

import { render, screen } from '@testing-library/react'

describe('TrendCard Component', () => {
  test("TrendCard renders without crashing", () => {

    render(<TrendCard
      id={1}
      title="Rows"
      valueOne="1230"
      valueTwo="30"
      subTitleOne="Total"
      subTitleTwo="Average"
      changePercent={0.5}
      isPositiveChange={true}
      isActive={false}
    />)

    expect(screen.getByText('Rows')).toBeInTheDocument()
    // ReactDOM.unmountComponentAtNode(div)
  })
})
