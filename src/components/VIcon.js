import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { TouchableOpacity, ViewPropTypes } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const VIcon = ({
	type,
	name,
	size,
	color,
	style,
	onPress,
	opacity,
	disabled,
	containerStyle
}) => {
	let icon;

	switch (type) {
		default:
			icon = (<Entypo name={name} size={size} color={color} style={style} />);
			break;
		case 'AntDesign':
			icon = (<AntDesign name={name} size={size} color={color} style={style} />);
			break;
		case 'Feather':
			icon = (<Feather name={name} size={size} color={color} style={style} />);
			break;
		case 'FontAwesome':
			icon = (<FontAwesome name={name} size={size} color={color} style={style} />);
			break;
		case 'Ionicons':
			icon = (<Ionicons name={name} size={size} color={color} style={style} />);
			break;
		case 'MaterialIcons':
			icon = (<MaterialIcons name={name} size={size} color={color} style={style} />);
			break;
	}
	if (onPress == null) {
		return icon;
	} else {
		return <TouchableOpacity
			activeOpacity={opacity !== undefined ? opacity : 1}
			disabled={disabled}
			style={[containerStyle]}
			onPress={_.debounce(onPress, 300, {
				leading: true,
				trailing: false
			})}
		>
			{icon}
		</TouchableOpacity>
	}
}

VIcon.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	size: PropTypes.number,
	color: PropTypes.string,
	onPress: PropTypes.func,
	style: ViewPropTypes.style,
};

export default VIcon