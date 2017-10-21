import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    thingData: []
  };
  componentDidMount() {
    window.sfdxdf17.AppController.getThings(data => {
      this.setState({ thingData: data });
    });
  }
  render() {
    return (
      <div>
        <article className="slds-card">
          <div className="slds-card__header slds-grid">
            <header className="slds-media slds-media_center slds-has-flexi-truncate">
              <div className="slds-media__body">
                <h2>
                  <a className="slds-card__header-link slds-truncate">
                    <span className="slds-text-heading_small">
                      Things ({this.state.thingData.length})
                    </span>
                  </a>
                </h2>
              </div>
            </header>
            <div className="slds-no-flex">
              <button className="slds-button slds-button_neutral">New</button>
            </div>
          </div>
          <div className="slds-card__body">
            <table className="slds-table slds-table_fixed-layout slds-table_bordered slds-no-row-hover slds-table_cell-buffer">
              <thead>
                <tr className="slds-text-title_caps">
                  <th scope="col">
                    <div className="slds-truncate" title="Id">Id</div>
                  </th>
                  <th scope="col">
                    <div className="slds-truncate" title="Name">Name</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.thingData.map(thingObj => {
                  return (
                    <tr key={thingObj.Id} className="slds-hint-parent">
                      <td>
                        <div className="slds-truncate" title="Company One">
                          {thingObj.Id}
                        </div>
                      </td>
                      <td>
                        <div className="slds-truncate" title="{thingObj.Name}">
                          {thingObj.Name}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <footer className="slds-card__footer">
            <a href="javascript:void(0);">
              View All <span className="slds-assistive-text">entity type</span>
            </a>
          </footer>
        </article>
      </div>
    );
  }
}

export default App;
