import React, {Component} from 'React';
import { connect } from 'react-redux';
import { gettingAllCampuses, loadAllCampuses } from '../reducers/actions/getCampuses';

import campuses from '../components/Campuses';

const mapStateToProps = (state) => {
	return {
		campuses: state.campuses
	}
}

export default connect(mapStateToProps)(campuses);