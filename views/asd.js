getStudInfo(){
            	fetch(`/getstinfo? id_sts = ${id_stud}`)
            	.then(res => res.json())
            	.then(json => this.setState({st_info : json[0].fio}))
            }
            handleSendMes(){
            	alert("asd")
            }
 /*		   this.getStudInfo = this.getStudInfo.bind(this);
*/				   /*this.handleSendMes = this.handleSendMes.bind(this);*/


/*/*class SendMess extends React.Component{
				
				render(){
					console.log(this.props);

					if (this.props.visible) {
						return(<div className="sendmes">

							<h2>Component Sendmessage</h2>
							<input type="text" name="mes" />
							<input type="submit" onClick={this.props.sendmes} />
							</div>)
				}

				else{
					<div></div>
				}
				}
			}*/*/
			/*	class StidInfo extends React.Component{
  			render(){
  				return (<div className = "infobox">
  					<h3>Component studinfo</h3>

  					<p>{this.props.fio}</p>  					</div>)
  			}
  		}
*/