import React from 'react'
import MaterialTable from 'material-table'
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

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

const GET_MOVIES = gql`
  	query {
    	shops {
			id,
			name,
			address,
			comment
    	}
  	}
`


export default class DataTable extends React.Component {


	render() {
		return (
			<Query query = { GET_MOVIES }>
				{({loading, error, data}) => {

					console.log(error)
					console.log(data)

					if (loading) return <div>Loading...</div>;
					if (error) return <div>Error :(</div>;
					
					return (
						<MaterialTable title='Магазины' columns={columns} data={data.shops} editable={
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
										resolve()
										console.log('delete')
									})
								}
							}
						}/>	
					)
				}}
			</Query>
		)
	}
}
