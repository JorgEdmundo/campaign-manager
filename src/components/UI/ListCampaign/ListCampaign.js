import React, { useState, useEffect, useRef } from 'react';

import AddCampaignModal from '../AddCampaign/AddCampaignModal';
import Button from '../../Elements/Button/Button';
import Filter from '../../UI/Filter/Filter';
import Header from '../../Elements/Header/Header';
import Table from '../Table/Table';

import { campaignsMock } from '../../../Helpers/mockData';
import { formatCampaign } from '../../../Helpers/formatters';
import { validatePayload } from '../../../Helpers/validations';

import './listCampaign.scss';

function ListCampaign() {
  const [campaigns, setCampaigns] = useState(campaignsMock);
  const [campaignPayload, setCampaignPayload] = useState({});
  const [filteredCampaigns, setFilteredCampaigns] = useState(campaignsMock);
  const [filterOptions, setFilterOptions] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const filterNode = useRef();
  const modalNode = useRef();

  useEffect(() => {
    const filtered = filterCampaigns();
    const dataToUse = filterOptions.length ? filtered : campaigns;

    setFilteredCampaigns(dataToUse);
  }, [filterOptions, campaigns]);

  useEffect(() => {
    if (openFilter) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openFilter]);

  const handleClickOutside = (e) => {
    if (filterNode.current && !filterNode.current.contains(e.target)) {
      setOpenFilter(false);
      return;
    }

    if (modalNode.current && !modalNode.current.contains(e.target)) {
      setShowModal(false);
      return;
    }
  };

  const handleInputChange = (e) => {
    if (e.target.dataset.name === 'status') {
      setCampaignPayload({
        ...campaignPayload,
        [e.target.dataset.name]: e.target.innerHTML,
      });
    } else {
      setCampaignPayload({
        ...campaignPayload,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleFilterOption = (e) => {
    const selectedFilter = e.target.innerHTML.toLowerCase();
    if (!filterOptions.includes(selectedFilter)) {
      setFilterOptions([...filterOptions, selectedFilter]);
      setOpenFilter(false);
    }
  };

  const handleRemoveFilterOption = (index) => {
    const copyOptions = [...filterOptions];
    copyOptions.splice(index, 1);
    setFilterOptions(copyOptions);
  };

  const filterCampaigns = () => {
    const copyCampaigns = [...campaigns];
    const filtered = copyCampaigns.filter((campaign) =>
      filterOptions.includes(campaign.status),
    );

    return filtered;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validatePayload(campaignPayload);

    if (isValid) {
      const formattedCampaign = formatCampaign(campaignPayload);
      setCampaigns([...campaigns, formattedCampaign]);
      setCampaignPayload({});
      setShowModal(false);
    } else {
      // Handle error exceptions
      console.log('not valid');
    }
  };

  return (
    <div className="main">
      <Header />
      <div className="list container">
        <div className="list-header">
          <div>
            <h2>Alle Kampagnen</h2>
          </div>
          <div>
            <Button variant="primary" handleClick={() => setShowModal(true)}>
              Kampagne Erstellen
            </Button>
          </div>
        </div>
        <div className="list-wrapper">
          <Filter
            openFilter={openFilter}
            filterOptions={filterOptions}
            handleRemoveFilterOption={handleRemoveFilterOption}
            setFilterOptions={setFilterOptions}
            setOpenFilter={setOpenFilter}
            handleFilterOption={handleFilterOption}
            filterNode={filterNode}
          />
          <Table campaignList={filteredCampaigns} />
        </div>
      </div>
      {showModal && (
        <AddCampaignModal
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

export default ListCampaign;
