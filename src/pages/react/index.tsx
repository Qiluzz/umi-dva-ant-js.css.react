import React from 'react';
import styles from './index.less';
import MultiselectCheckbox from './component/MultiselectCheckbox';

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
export default () => {
  return (
    <div>
      <h1 className={styles.title}>组件:</h1>
      <p>多选框:</p>
      <MultiselectCheckbox
        options={options}
        onChange={data => {
          console.log(data);
        }}
      />
    </div>
  );
};