/* eslint-disable react-refresh/only-export-components -- compound component exports object of components */
import { ShoppingAppProvider } from '@components/ShoppingApp/Provider'
import { ShoppingAppContainer } from '@components/ShoppingApp/Container'
import { ShoppingAppHeader } from '@components/ShoppingApp/Header'
import { ShoppingAppForm } from '@components/ShoppingApp/Form'
import { ShoppingAppList } from '@components/ShoppingApp/List'
import { ShoppingAppDoneList } from '@components/ShoppingApp/DoneList'
import { ShoppingAppFooter } from '@components/ShoppingApp/Footer'
import { ShoppingAppRoot } from '@components/ShoppingApp/Root'

export const ShoppingApp = {
  Root: ShoppingAppRoot,
  Provider: ShoppingAppProvider,
  Container: ShoppingAppContainer,
  Header: ShoppingAppHeader,
  Form: ShoppingAppForm,
  List: ShoppingAppList,
  DoneList: ShoppingAppDoneList,
  Footer: ShoppingAppFooter,
}
