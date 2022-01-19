import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { TouchableOpacity, ViewPropTypes } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

export default class VIcon extends Component {

	static TYPE_ANTDESIGN = 'AntDesign';
	static TYPE_ENTYPO = 'Entypo';
	static TYPE_EVILICONS = 'EvilIcons';
	static TYPE_FEATHER = 'Feather';
	static TYPE_FONTAWESOME = 'FontAwesome';
	static TYPE_FOUNDATION = 'Foundation';
	static TYPE_IONICONS = 'Ionicons';
	static TYPE_MATERIALCOMMUNITYICONS = 'MaterialCommunityIcons';
	static TYPE_MATERIALICONS = 'MaterialIcons';
	static TYPE_OCTICONS = 'Octicons';
	static TYPE_SIMPLELINEICONS = 'SimpleLineIcons';
	static TYPE_ZOCIAL = 'Zocial';

	static defaultProps = {
		type: this.TYPE_ENTYPO,
		size: 12,
		color: '#666',
		name: 'mobile',
		style: {},
	}

	render() {
		switch (this.props.type) {
			default:
				this.icon = (<Entypo name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
				break;
			case VIcon.TYPE_ANTDESIGN:
				this.icon = (<AntDesign name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
				break;
			case VIcon.TYPE_EVILICONS:
				this.icon = (<EvilIcons name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
				break;
			case VIcon.TYPE_FEATHER:
				this.icon = (<Feather name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
				break;
			case VIcon.TYPE_FONTAWESOME:
				this.icon = (<FontAwesome name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
				break;
			case VIcon.TYPE_FOUNDATION:
				this.icon = (<Foundation name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
				break;
			case VIcon.TYPE_IONICONS:
				this.icon = (<Ionicons name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
				break;
			case VIcon.TYPE_MATERIALCOMMUNITYICONS:
				this.icon = (<MaterialCommunityIcons name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
				break;
			case VIcon.TYPE_MATERIALICONS:
				this.icon = (<MaterialIcons name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
				break;
			case VIcon.TYPE_OCTICONS:
				this.icon = (<Octicons name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
				break;
			case VIcon.TYPE_ZOCIAL:
				this.icon = (<Zocial name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
				break;
			case VIcon.TYPE_SIMPLELINEICONS:
				this.icon = (<SimpleLineIcons name={this.props.name} size={this.props.size} color={this.props.color} style={this.props.style} />);
				break;
		}
		if (this.props.onPress == null) {
			return this.icon;
		} else {
			return <TouchableOpacity
				activeOpacity={this.props.opacity !== undefined ? this.props.opacity : 1}
				disabled={this.props.disabled}
				style={[this.props.containerStyle]}
				onPress={_.debounce(this.props.onPress, 300, {
					leading: true,
					trailing: false
				})}
			>
				{this.icon}
			</TouchableOpacity>
		}
	}
}

VIcon.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	size: PropTypes.number,
	color: PropTypes.string,
	onPress: PropTypes.func,
	style: ViewPropTypes.style,
}