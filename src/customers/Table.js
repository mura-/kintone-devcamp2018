import React from 'react';
import { Label, Text } from 'kintone-ui-component';

const tableStyle = {border: "1px solid", padding: 6};
export default class TableComponent extends React.Component {
  static defaultProps = {records: []};
  state = {searchString: ''};

  onChangeHandler(value) {
    this.setState({searchString: value})
  }

  render() {
    const {records} = this.props;
    return (
      <div style={{margin: 20}}>
        <Label text="検索" />
        <Text onChange={this.onChangeHandler.bind(this)} value={this.state.searchString}/>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={tableStyle}>ID</th>
              <th style={tableStyle}>会社名</th>
              <th style={tableStyle}>担当者名</th>
            </tr>
          </thead>
          <tbody>
            {records
              .filter(record => record.会社名.value.indexOf(this.state.searchString) > -1)
              .map((record) => {
                return (
                  <tr>
                    <td style={tableStyle} width="50px">{record.$id.value}</td>
                    <td style={tableStyle} width="200px">{record.会社名.value}</td>
                    <td style={tableStyle} width="200px">{record.担当者名.value}</td>
                  </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

