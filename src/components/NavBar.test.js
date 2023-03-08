import {render} from '@testing-library/react'
import { ContextProvider } from '../application/Context'
import NavBar from './NavBar'

test('test pendejo',()=>{
    render(<ContextProvider><NavBar/></ContextProvider>)
})