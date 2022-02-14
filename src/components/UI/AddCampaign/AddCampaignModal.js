import React from 'react';

import Button from '../../Elements/Button/Button';
import Input from '../../Elements/Input/Input';
import Select from '../../Elements/Select/Select';

import './addCampaignModal.scss';

function AddCampaignModal({ handleInputChange, handleSubmit, setShowModal }) {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-title">
          <h2>Kampagne erstellen</h2>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="fields">
              <div className="field">
                <Input
                  label="Kampagnenname"
                  isRequired
                  name="name"
                  handleChange={handleInputChange}
                  placeholder="Kampagnennamen eingeben"
                />
              </div>
              <div className="field">
                <Input
                  label="Kunde"
                  isRequired
                  name="customer"
                  handleChange={handleInputChange}
                  placeholder="Kunde eingeben"
                />
              </div>
              <div className="field date">
                <label>Laufzeit:</label>
                <div className="date-fields">
                  <div className="date-field">
                    <Input
                      label="Start"
                      isRequired
                      name="start"
                      handleChange={handleInputChange}
                      type="date"
                    />
                  </div>
                  <div className="date-field">
                    <Input
                      label="Ende"
                      isRequired
                      name="end"
                      handleChange={handleInputChange}
                      type="date"
                    />
                  </div>
                </div>
              </div>
              <div className="field">
                <Select
                  name="status"
                  label="Status"
                  name="status"
                  handleChange={handleInputChange}
                />
              </div>
            </div>
            <div className="buttons">
              <Button handleClick={() => setShowModal(false)}>Abbrechen</Button>
              <Button type="submit" variant="primary">
                Erstellen
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="modal-overlay" />
    </div>
  );
}

export default AddCampaignModal;
