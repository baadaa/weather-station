import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import {
  Icon01d,
  Icon01n,
  Icon02d,
  Icon02n,
  Icon0304,
  Icon09,
  Icon10d,
  Icon10n,
  Icon11,
  Icon13,
  Icon50,
} from '../components/iconList';

const Wrap = styled.div`
  svg {
    width: 160px;
    height: 160px;
  }
`;

export default function TestPage() {
  return (
    <Layout>
      <Wrap>
        <Icon01d />
        <Icon01n />
        <Icon02d />
        <Icon02n />
        <Icon0304 />
        <Icon09 />
        <Icon10d />
        <Icon10n />
        <Icon11 />
        <Icon13 />
        <Icon50 />
      </Wrap>
    </Layout>
  );
}
