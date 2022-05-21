import { createState } from '@hookstate/core';

export const shoppingListState = createState([{
    item: '',
    store: '',
    timestamp:'',
    uuid: ''
}])

export const cacheShoppingListState = createState([{
    item: '',
    store: '',
    timestamp:'',
    uuid: ''
}])
