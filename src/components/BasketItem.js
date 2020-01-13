import React from 'react';
import './BasketItem.css';
import { observer } from 'mobx-react';

// const BasketItem = observer(({ name, price, count, onTake }) => {
//     return (
//       <div className="BasketItem" onClick={() => onTake(name)}>
//         <div className="name">{name}</div>
//         <div className="price">{price}원</div>
//         <div className="count">{count}</div>
//         <div className="return">갖다놓기</div>
//       </div>
//     );
//   });

const BasketItem = observer(({ item, onTake }) => {
    return (
        <div className="BasketItem">
        <div className="name">{item.name}</div>
        <div className="price">{item.price}원</div>
        <div className="count">{item.count}</div>
        <div className="return" onClick={() => onTake(item.name)}>
            갖다놓기
        </div>
        </div>
    );
});


// export default observer(BasketItem);
export default BasketItem;