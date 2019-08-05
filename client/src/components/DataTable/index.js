import React from 'react'
import MaterialTable from 'material-table'

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


export default class DataTable extends React.Component {


	render() {
		return (
			<MaterialTable title='Магазины' columns={columns} data={data} editable={
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
	}
}
