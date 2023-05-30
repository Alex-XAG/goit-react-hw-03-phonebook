import React from 'react';
import { Modal } from './Modal/Modal';
import { Clock } from './Clock/Clock';
import { Tabs } from './Tabs/Tabs';

export class App extends React.Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        <Tabs />
        {!showModal && <Clock />}
        {showModal && (
          <Modal handleCloseModal={this.toggleModal}>
            <h1>Glory to Ukraine!!! This is content of Modal how children</h1>
            <p>
              asdefhaskndv.,zxmnvb;SUEG fh'osakjdfLSKNVC/LX
              ZNCVoSDHF'apwsighfpsskdFHN sldvkhNZD;LKJFH
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close Modal
            </button>
          </Modal>
        )}
      </div>
    );
  }
}
