import React, { useState } from 'react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { selectorStyles } from './SelectorStyles';
import { colors } from '../../global/GlobalStyles';
import { screenStyles } from '../screens/ScreenStyles';

const DropdownComponent = ({value, setValue, data, fieldname}) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={selectorStyles.container}>
      <Dropdown
        style={[selectorStyles.dropdown, isFocus && { borderColor: colors.buttonborder }]}
        placeholderStyle={screenStyles.text2}
        selectedTextStyle={selectorStyles.selectedTextStyle}
        inputSearchStyle={selectorStyles.inputSearchStyle}
        iconStyle={selectorStyles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="name"
        valueField="id"
        placeholder={!isFocus ? `Select ${fieldname}:` : `Select ${fieldname}...`}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.id);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;