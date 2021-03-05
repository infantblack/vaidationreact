import React, { Component } from 'react';
import EditandAdd from './EditandAdd';
import './styles.css';


class AddorEdit extends Component
{
  constructor ( props )
  {
    super( props );

    this.state = {
      formDetail: {
        Name: '',
        Email: '',
        Password: ''

      },


      ListDetails: JSON.parse( localStorage.getItem( 'ListDetails' ) )
        ? JSON.parse( localStorage.getItem( 'ListDetails' ) )
        : localStorage.setItem( 'ListDetails', JSON.stringify( [] ) ),
      isupdate: false,
      index: "",
      iscreate: false,
      validate: "",
      // iserror:'',
      formErrors: {
        Name: '',
        Email: '',
        Password: ''
      }

    };
  }

  //---------------------------------------------------------------------------------------------------//  

  changeValue = ( key, value ) =>
  {
    let { formDetail,formErrors} = this.state;
    formDetail[ key ] = value;
    if ( value )
    {
      formErrors[ key ] = "";
      
    }
    this.setState( formDetail );
  };
  //---------------------------------------------------------------------------------------------------//

  create = () =>
  {
    let { formDetail, formErrors } = this.state;
    var passwordExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var emailPattern =  /^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/ ;
    
    //-----------------------------Name----------------//
    if ( formDetail.Name === '' )
    {
      formErrors.Name = 'Please Enter Name';
      this.setState( { formErrors } );
    }
    else if ( ( formDetail.Name === "" )||formDetail.Name.length <= 3 || formDetail.Name.length >= 5 )
    {
      formErrors.Name = " Name should be Mini 3 and Max 5";
      this.setState( { formErrors } );
    }
    //---------------------------Email----------------------//
    else if ( !emailPattern.test( formDetail.Email ) )
    {
      formErrors.Email = "Enter Valid Email";
      this.setState( { formErrors } );
    }
//-----------------------------Password---------------------//
    else if ( ( formDetail.Password === "" ) || ( formDetail.Password.length < 3 || formDetail.Password.length > 5 ) )
    {
      formErrors.Password = "Password is required";
      this.setState( { formErrors } );
    }
    else if ( passwordExpression.test( formDetail.Password ) )
    {
      formErrors.Password = "Check Password quality";
      this.setState( { formErrors } );
    }

//-----------------------------Push---------------------//


    else
    {
      let { formDetail } = this.state;
      let localData = JSON.parse( localStorage.getItem( 'ListDetails' ) )
        ? JSON.parse( localStorage.getItem( 'ListDetails' ) )
        : localStorage.setItem( 'ListDetails', JSON.stringify( [] ) );
      let ListDeta = localData || [];
      ListDeta.push( formDetail );
      localStorage.setItem( 'ListDetails', JSON.stringify( ListDeta ) );
      this.clear();
      this.setState( {
        ListDetails: ListDeta,
        iscreate: false,
      } );

    }

  };

  //-------------------------------------------------------------------------------------------//

  edit = ( value, index ) =>
  {
    value[ "Status" ] = "Progress";
    console.log( "current", value );
    this.setState( {
      formDetail: value,
      isupdate: true,
      index,
    } );

  };

  //-----------------------------------------------------------------------------------//

  delete = ( index ) =>
  {
    let { ListDetails } = this.state;
    let deletearray = this.state.ListDetails;
    deletearray.splice( index, 1 );
    this.setState( { ListDetails: deletearray } );
    localStorage.setItem( 'ListDetails', JSON.stringify( ListDetails ) );
    this.clear();
  };

  //---------------------------------------------------------------------------------//

  update = () =>
  {
    let { formDetail, index, ListDetails } = this.state;
    ListDetails[ index ][ "Status" ] = "Completed";
    ListDetails[ index ][ "Name" ] = formDetail.Name;
    ListDetails[ index ][ "Email" ] = formDetail.Email;
    ListDetails[ index ][ "Password" ] = formDetail.Password;
    localStorage.setItem( 'ListDetails', JSON.stringify( ListDetails ) );

    this.clear();
    this.setState( {
      isupdate: false
    } );
  };

  //-----------------------------------------------------------------------------------//

  clear = () =>
  {
    this.setState( {
      formDetail: {
        Name: '',
        Email: '',
        Password: ''
      }
    } );
  };
  //--------------------------------------------------------------------------------//
  errorClear = () =>
  {
    this.setState( {
      formErrors: {
        Name: '',
        Email: '',
        Password: ''
      }
    } );
  };
  //--------------------------------------------------------------------------------//

  render ()
  {
    const { formDetail, formErrors } = this.state;

    let localData = JSON.parse( localStorage.getItem( 'ListDetails' ) );
    return (
      <div className="renderDisplay">
        <form className="formDisplay">
          <div className="inputbox">

            <label> Name : </label>
            <input className="textbox"
              type="text"
              value={ formDetail.Name }
              placeholder="name"
              // name='Name'
              onChange={ ( e ) => { this.changeValue( 'Name', e.target.value ); } } />
            <div>
              { formErrors.Name &&
                <span className='formErrors'>{ formErrors.Name }</span> }
            </div>

            <label> Email : </label>
            <input className="Email"
              type="email"
              value={ formDetail.Email }
              placeholder="email"
              // name='Name'
              onChange={ ( e ) => { this.changeValue( 'Email', e.target.value );  } } />

            <div>
              { formErrors.Email &&
                <span className='formErrors'>{ formErrors.Email }</span> }
            </div>

            <label> Password : </label>
            <input className="Password"
              type="text"
              value={ formDetail.Password }
              placeholder="Password"
              // name='Name'
              onChange={ ( e ) => { this.changeValue( 'Password', e.target.value ); } } />

            <div>
              { formErrors.Password &&
                <span className='formErrors'>{ formErrors.Password }</span> }
            </div>

            { this.state.isupdate ?
              ( <button className="buttonstyle" type="button" onClick={ this.update }>  update  </button> )
              : ( <button className="buttonstyle" type="button" onClick={ this.create }>  Create  </button> ) }

          </div>

        </form>

        <EditandAdd details={ localData }
          geteditdetail={ this.edit } getdeletedetail={ this.delete } />
      </div>
    );
  }
}
export default AddorEdit;
