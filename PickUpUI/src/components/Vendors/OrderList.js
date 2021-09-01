import React from "react";
import OrderListItem from "./OrderListItem.js";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  page: {
    marginLeft: '5em',
    marginRight: '5em',
    minHeight: '900px',
  }
}));

function OrderList() {
  const classes = useStyles();

  const testOrderData = [
    { 
      id: 1,
      orderId: 25943,
      date: 'aug, 30, 2021',
      restaurantName: "Restaurant1", 
      img:'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      products: [
        
        'product1',
        'product2',
        'product3',
      ],
      numberOfItems: 3,
      totalCost: 23434,
    },
    { 
      id: 2, 
      orderId: 25923,
      date: 'aug, 30, 2021',
      restaurantName: "Restaurant2", 
      img:'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      products: [
        
        'product1',
        'product2',
      ],
      numberOfItems: 2,
      totalCost: 23467,
    },
  ];

  const item = testOrderData.map((item) => {
    return (
      <OrderListItem 
        key={item.id} 
        orderId={item.orderId}
        date={item.date}
        products={item.products}
        numberOfItems={item.numberOfItems}
        totalCost={item.totalCost} 
      />
    );
  });

  return (
    <div className={classes.page}>
      <br></br>
      {item}
    </div>
  );
}

export default OrderList;
