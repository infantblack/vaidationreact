import React, { Component } from 'react';
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';

class MyComponent extends Component {
  render() {
    return (
      <FileViewer
        fileType={'bmp'}
        filePath={'./sample.bmp'}
        errorComponent={CustomErrorComponent}
        onError={this.onError}/>
    );
  }

 
}
export default MyComponent;