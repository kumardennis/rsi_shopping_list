import { State } from '@hookstate/core';
import moment from 'moment';
import { Item, ShoppingList, StateType } from 'types';
import { v4 as uuidv4 } from "uuid";


export const handleBeforeUnload = (shoppingList: ShoppingList[]): void => {
    localStorage.setItem('shoppingListCache', JSON.stringify(shoppingList))
}

export   const onFilterFinish = (cacheState: State<StateType[]>, values: {
    item: string;
    store: string;
    date: string;
  }): void => {
    let originalHistory: [] = [];

    if (localStorage.getItem("shoppingListCache") !== null) {
      localStorage.getItem("shoppingListCache");

      originalHistory = JSON.parse(localStorage.getItem("shoppingListCache")!);

      cacheState.set(originalHistory);
    }

    const isItemFilled: boolean = values.item !== undefined;
    const isDateFilled: boolean = values.date !== undefined;
    const isStoreFilled: boolean = values.store !== undefined;

    isItemFilled
      ? cacheState.set((list) =>
          list.filter((item) => item.item.includes(values.item))
        )
      : cacheState.set((list) => list.filter((item) => item.item.includes("")));

    isDateFilled
      ? cacheState.set((list) =>
          list.filter((item) => item.timestamp.includes(values.date))
        )
      : cacheState.set((list) =>
          list.filter((item) => item.timestamp.includes(""))
        );

    isStoreFilled
      ? cacheState.set((list) =>
          list.filter((item) => item.store.includes(values.store))
        )
      : cacheState.set((list) =>
          list.filter((item) => item.store.includes(""))
        );
  };

  export   const deleteItem = (state: State<StateType[]>, cacheState: State<StateType[]>, uuid: string): void => {
    state.set((list) => list.filter((item) => item.uuid !== uuid));

    cacheState.set((list) => list.filter((item) => item.uuid !== uuid));

    //Need to remove from localstorage as it lazyloads.
    const cacheShoppingList: any = JSON.parse(
      localStorage.getItem("shoppingListCache")!
    );
    const filterCache: Item = cacheShoppingList.filter(
      (item: { uuid: string }) => item.uuid !== uuid
    );

    localStorage.setItem("shoppingListCache", JSON.stringify(filterCache));
  };

  export   const onAddItemFinish = (state: State<StateType[]>, cacheState: State<StateType[]>,values: {
    item: string;
    store: string;
    timestamp: string;
    uuid: string;
  }): void => {
    values.timestamp = moment().format(`dddd, MMMM, Do, YYYY, HH:mm`);
    values.uuid = uuidv4();

    state.merge([values]);
    cacheState.merge([values]);

    localStorage.setItem("shoppingListCache", JSON.stringify(cacheState.get()));
  };

