//input 상태 관리하기 
import React, { Component } from 'react'

export default class PhoneForm extends Component {
   // input = null;
    input = React.createRef();

    state = {
       name: '',
       phone:'',
   }
   handleChange = (e) => {
       this.setState({
           //name -> e.target.name 인풋의 name 값이 들어가게 됨 
           [e.target.name]: e.target.value
       });
   }

   handleSubmit = (e) =>{
       //페이지가 리로딩 되는 것을 방지
        e.preventDefault();
        this.props.onCreate(this.state);
        /*this.props.onCreate({
            name: this.state.name,
            phone: this.state.phone,
        });*/
        this.setState({
            name:'',
            phone:'',
        })
       // this.input.focus();
       this.input.current.focus();
   }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                //여러가지 인풋 값을 관리하려면 name을 설정
                name="name"
                placeholder="이름" 
                onChange={this.handleChange} 
                value={this.state.name} 
               // ref={ref => this.input = ref}
                ref ={this.input}
                />
                <input
                name="phone"
                 placeholder="전화번호"
                 onChange={this.handleChange}
                 value={this.state.phone}
                 />
                 <button type="submit">등록</button>
                {/* <div>
                 {this.state.name}
                 {this.state.phone}
                </div>*/}
               
            </form>
        )
    }
}
