//배열 렌더링 하기
import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo';

export default class PhoneInfoList extends Component {
    static defaultProps = {
        data: []
    }
  
    render() {
        const {data, onRemove, onUpdate} = this.props;

       // if(!data) return null;

        const list = data.map(
            info => (
                <PhoneInfo 
                onRemove={onRemove}
                onUpdate={onUpdate}
                 info ={info}
                  key={info.id}
                  />
                  )
        );

        
        return (
            <div>
              {list}  
            </div>
        )
    }
}
