import React from 'react'
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'

function Title(props) {
	return (
		<Typography variant='h6'>
			{ props.currentSection}
		</Typography>
	)
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		currentSection: state.section
	}
}

export default connect(mapStateToProps)(Title)

