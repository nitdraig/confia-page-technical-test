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
import { Socialbox } from 'components/Socialbox';
import { SideLeftSection } from 'components/SideLeftSection';
import { SideRightSection } from 'components/SideRightSection';

const InvestmentView = (): JSX.Element => {
  const [faqs, setFaqs] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [tablesData, setTablesData] = useState([]);
  const [listTableData, setlistTableData] = useState([]);
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
    async function fetchListTableData() {
      try {
        const response = await fetch(`${apiUrl}/listTableData`);
        const data = await response.json();
        setlistTableData(data);
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
    fetchListTableData();
  }, []);

  return (
    <Main>
      <Container>
        <Hero />
      </Container>
      <Box
        style={{
          borderLeft: '1px solid #e0e0e0',
          borderRight: '1px solid #e0e0e0',
          margin: '0 auto',
          width: 'calc(100% - 40px)',
          marginBottom: '23px',
        }}
        maxWidth={700}
      >
        <Box
          sx={{
            '@media (max-width: 1100px)': {
              display: 'none',
            },
          }}
        >
          <SideLeftSection />
          <SideRightSection />
        </Box>
        <Funds />
        <Attention />
        <Faq faqs={faqs} />
        <Manager tableInfo={tablesData} />
        <Record listItems={listItems} listTableData={listTableData} />
        <Agents tables={tableData} />
      </Box>
      <Socialbox />
    </Main>
  );
};

export default InvestmentView;
