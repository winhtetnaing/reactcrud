var StudentAll = React.createClass({ 

  getInitialState: function () {
    return { name: '' ,address: '',email:'',contact:'',id:'',Buttontxt:'Save', data1: []};
  },
   handleChange: function(e) {
        this.setState({[e.target.name]: e.target.value});
    },
  componentDidMount() {
 
    $.ajax({
       url: "api/getdata",
       type: "GET",
       dataType: 'json',
       ContentType: 'application/json',
       success: function(data) {         
         this.setState({data1: data}); 
         
       }.bind(this),
       error: function(jqXHR) {
         console.log(jqXHR);
           
       }.bind(this)
    });
  },
  render: function() {
    return ( 
<div  className="container"  style={{marginTop:'50px'}}>      
       <p className="text-center" style={{fontSize:'18px'}}><b>      
       User Registration Form ( Training ) </b></p>

</div>
<br />
<div class="row">
<div className="col-sm-12 col-md-12 "  > 
 <table className="table table-bordered table-hover table-striped"><tbody>
   <tr><th><b>S.No</b></th><th><b>NAME</b></th><th><b>ADDRESS</b></th><th><b>EMAIL</b></th><th><b>CONTACT PHONE</b></th><th><b>Edit</b></th><th><b>Delete</b></th></tr>
    {this.state.data1.map((item, index) => (
        <tr key={index}>
           <td>{index+1}</td> 
          <td>{item.name}</td>                      
          <td>{item.address}</td>
          <td>{item.email}</td>
          <td>{item.contact}</td>
           <td> 
          
           <button type="button" className="btn btn-success" onClick={(e) => {this.EditData(item)}}>Edit</button>    
          </td> 
          <td> 
             <button type="button" className="btn btn-info" onClick={(e) => {this.DeleteData(item._id)}} disabled>Delete</button>
          </td> 
        </tr>
    ))}
    </tbody>
    </table>
  </div>
</div>

    );
  }
});

ReactDOM.render(<showprice  />, document.getElementById('root'))
