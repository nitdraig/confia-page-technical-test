import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  Manager,
  Faq,
  Funds,
  Attention,
  Record,
  Agents,
} from './components';

const CareerListing = (): JSX.Element => {
  const [faqs, setFaqs] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [tablesData, setTablesData] = useState([]);
  const apiUrl = 'http://localhost:3000';
  useEffect(() => {
    async function fetchFaqs() {
      try {
        const response = await fetch(`${apiUrl}/faqs`);
        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error('Error fetching faqs:', error);
      }
    }

    async function fetchListItems() {
      try {
        const response = await fetch(`${apiUrl}/listItems`);
        const data = await response.json();
        setListItems(data);
      } catch (error) {
        console.error('Error fetching listItems:', error);
      }
    }

    async function fetchTableData() {
      try {
        const response = await fetch(`${apiUrl}/tableData`);
        const data = await response.json();
        setTableData(data);
      } catch (error) {
        console.error('Error fetching tableData:', error);
      }
    }
    async function fetchTablesData() {
      try {
        const response = await fetch(`${apiUrl}/tablesData`);
        const data = await response.json();
        setTablesData(data);
      } catch (error) {
        console.error('Error fetching tableData:', error);
      }
    }

    fetchFaqs();
    fetchListItems();
    fetchTableData();
    fetchTablesData();
  }, []);

  return (
    <Main>
      <Box>
        <Container>
          <Hero />
        </Container>
        <Box
          style={{
            borderLeft: '1px solid #e0e0e0',
            borderRight: '1px solid #e0e0e0',
            margin: '0 auto',
            width: 'calc(100% - 40px)',
            marginBottom: '23m',
          }}
          maxWidth={600}
        >
          <Container id="funds">
            <Funds />
          </Container>
          <Container id="atention">
            <Attention />
          </Container>
          <Container id="faq">
            <Faq faqs={faqs} />
          </Container>
          <Container>
            <Manager tableInfo={tablesData} />
          </Container>
          <Container>
            <Record listItems={listItems} />
          </Container>
          <Container marginBottom={6}>
            <Agents tables={tableData} />
          </Container>
        </Box>
      </Box>
    </Main>
  );
};

export default CareerListing;
