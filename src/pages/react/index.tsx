import React from 'react';
import styles from './index.less';
import MultiselectCheckbox from './component/MultiselectCheckbox';
import RippleButton from './component/RippleButton';
import StarRating from './component/StarRating';
import Tabs from './component/Tabs';
const { TabItem } = Tabs;

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
      <RippleButton onClick={e => console.log(e)}>Click me</RippleButton>
      <StarRating />
      <Tabs defaultIndex="1" onTabClick={console.log}>
        <TabItem label="itemA" index="1">
          12
        </TabItem>
        <TabItem label="itemB" index="2">
          45
        </TabItem>
      </Tabs>
    </div>
  );
};
