import React from 'react';

import Button from '../../Elements/Button/Button';
import Input from '../../Elements/Input/Input';
import Select from '../../Elements/Select/Select';

import './addCampaignModal.scss';

function AddCampaignModal({
  handleInputChange,
  handleSubmit,
  setShowModal,
  modalNode,
}) {
  return (
    <div className="modal">
      <div className="modal-container" ref={modalNode}>
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
                  <div>
                    <Input
                      label="Start"
                      isRequired
                      name="start"
                      handleChange={handleInputChange}
                      type="date"
                    />
                  </div>
                  <div>
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
                {/* <label>Status:</label>
                <select name="status" onChange={handleInputChange}>
                  <option value="">Status festlegen</option>
                  <option value="angebot">Angebot</option>
                  <option value="gebucht">Gebucht</option>
                  <option value="archiviert">Archiviert</option>
                </select> */}
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
