import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'

const KEY = 'toys_db'
_createToys()

export const toyService = {
	query,
	getById,
	remove,
	save,
	getEmptyToy
}

function query() {
	console.log('quering')

	return storageService.query(KEY)
}

function getById(toyId) {
	return storageService.get(KEY, toyId)
}

function remove(toyId) {
	return storageService.remove(KEY, toyId)
}

function save(toy) {
	if (toy.id) return storageService.put(KEY, toy)
	return storageService.post(KEY, toy)
}

function getEmptyToy() {
	return {
		vendor: '',
		labels: 0,
		price: 0
	}
}

function _createToys() {
	let toys = utilService.loadFromStorage(KEY)
	if (!toys || !toys.length) {
		toys = [
			{
				id: utilService.makeId(),
				name: 'Fiat',
				labels: ['Doll', 'Battery Powered', 'Baby'],
				price: 980,
				createdAt: 1631031801011,
				inStock: true
			},
			{
				id: utilService.makeId(),
				name: 'Honda',
				labels: ['Doll', 'Battery Powered', 'Baby'],
				price: 500,
				createdAt: 1631031801011,
				inStock: true
			},
			{
				id: utilService.makeId(),
				name: 'Toyota',
				labels: ['Doll', 'Battery Powered', 'Baby'],
				price: 305,
				createdAt: 1631031801011,
				inStock: true
			}
		]
		utilService.saveToStorage(KEY, toys)
	}
	return toys
}
