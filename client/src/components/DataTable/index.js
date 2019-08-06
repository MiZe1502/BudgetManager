import React from 'react'
import MaterialTable from 'material-table'
import { gql } from 'apollo-boost';
import { compose, graphql, wit } from 'react-apollo';

const columns = [
	{
		title: "Название",
		field: 'name'
	},
	{
		title: "Адрес",
		field: 'address'
	},
	{
		title: "Комментарий",
		field: 'comment'
	}
]

const data = [
	{
		id: 1,
		name: 'Дикси',
		address: 'Зеленый проспект 5к2'
	},
	{
		id: 2,
		name: 'Магнит',
		address: 'Союзный проспект 8к2'
	},
	{
		id: 3,
		name: 'Смешные цены',
		address: '2-я Владимирская 25к2'
	}	
]

const GET_SHOPS= gql`
  	query {
    	shops {
			id,
			name,
			address,
			comment
    	}
  	}
`

const REMOVE_SHOP_BY_NAME = gql`
	mutation removeShopByName($name: String!) {
		removeShopByName(name:$name)
	}
`


class DataTable extends React.Component {

	render() {
		console.log(this.props)

		return (
			<MaterialTable title='Магазины' columns={columns} data={this.props.getShops.shops} editable={
				{
					onRowAdd: (newData) => {
						return new Promise(resolve => {
							resolve()
							console.log('add')
						})
					},
					onRowUpdate: (newData, oldData) => {
						return new Promise(resolve => {
							resolve()
							console.log('update')
						})
					},
					onRowDelete: (oldData) => {
						return new Promise(resolve => {
							console.log(this.props.removeShopByName)
							this.props.removeShopByName({variables: {name: oldData.name}})
							resolve()
						})
					}
				}
			}/>	
		)
	}
}

export default compose(
	graphql(GET_SHOPS, { name: 'getShops'}),
	graphql(REMOVE_SHOP_BY_NAME, { name: 'removeShopByName'})
)(DataTable)