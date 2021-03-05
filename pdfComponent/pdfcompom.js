import React, { Component } from 'react';
import Modal from 'react-modal';
// import { Document, Page } from 'react-pdf';
// import FileReader from 'react-file-reader';
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';

const file = 'http://example.com/image.png'
const type = 'png'

class Pdfcompom extends Component
{
    constructor ( props )
    {
        super( props );
        this.state = {
            ModelIsOpen: false,

            numPages: 0,
            pageNumber: 1,
            files: null,
            
        };
    }

    onDocumentLoadSuccess = ({ numPages }) => { //// display the file
    this.setState({ numPages });
  }
    onFileChange = ( e ) =>                     /////store the files
    {
        e.preventDefault();
        this.setState( {
            files: e.target.files[ 0 ]
        } );
    };
//  --------------------------------------------------------------------------------------------------------------------   
    previousPage = () =>
    {
        this.setState( {
           pageNumber: this.state.pageNumber - 1
        } );
    };

    NnextPage = () =>
    {
       
        this.setState( {
           pageNumber: this.state.pageNumber+1
        } );
    };

    ModelOpen = () =>
    {
        this.setState( { ModelIsOpen: true } );
    };
    ModelClose = () =>
    {
        this.setState( { ModelIsOpen: false } );
    };
    render ()
    {
        const { ModelIsOpen ,pageNumber ,numPages,files} = this.state;
        return (
            <div>
                <input type='file' onChange={ this.onFileChange } accept={this.state.accept}></input>
                <button onClick={ this.ModelOpen }>viewfile</button>

                <FileVi
                    fileType={'pdf'}
                    filePath={'/sample.pdf'}
                    errorComponent={ CustomErrorComponent }
                    onError={ this.onError } />

                

                <Modal isOpen={ ModelIsOpen }>
                       Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                    <button onClick={ this.previousPage }
                    type="button" disabled={pageNumber <= 1}>pre</button>
                    <button onClick={ this.NnextPage } type="button" disabled={pageNumber >= numPages}>next</button>

                    <div
                        file={files}
                        onLoadSuccess={ this.onDocumentLoadSuccess}>
                        <p pageNumber={ pageNumber } />
                    </div>
       
                    <button onClick={ this.ModelClose }>back</button>
                </Modal>
            </div>
        );
    }
}

export default Pdfcompom;













    // constructor ( props )
    // {
    //     super( props )
    //     this.state = {
    //         ModelIsOpen: false,
    //         url: '',
    //         numPages: "",
    //         pageNumber:"",
    //     }
    // }
    //  FileHandle = ("url", (e) => {
    //     e.preventDefault();
    //     let filereader = new FileReader();
    //     let files = e.target.files[0];
    //     filereader.onload = () => {
    //         getUrl({
    //             url: filereader.result
    //         })
    //     };
    //     filereader.readAsDataURL(files)
    // });