import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
     <div className=''>March 28th 2022</div>
     <div className='expense-item__description'>
        <h2>Car Insurance </h2>
        <div className='expense-item__price'>Rs. 2563</div>
     </div>
    </div>
  );
}

export default ExpenseItem;
