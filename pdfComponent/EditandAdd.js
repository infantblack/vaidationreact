import React, { Component } from 'react';

class EditandAdd extends Component
{
    constructor ( props )
    {
        super( props );

        this.state = {

        };
    }

    edit = ( value, index ) =>
    {
        this.props.geteditdetail( value, index );
    };
    delete = ( index ) =>
    {
        this.props.getdeletedetail( index );
    };
    render ()
    {

        return (
            <div className="display">
                {this.props.details && this.props.details.map( ( value, index ) =>
                    <div key={ index }>

                        <ul className="listyle">
                            <li >   { value.Name }      </li>
                            <li >   { value.Email }     </li>
                            <li >   { value.Password }  </li>
                            <button type="button" className="buttonstyle" onClick={ () => this.edit( value, index ) }> edit</button>
                            <button type="button" className="buttonstyle" onClick={ () => this.delete( index ) }> delete</button>
                        </ul>
                    </div>
                ) }

            </div>
        );
    }
}

export default EditandAdd;
